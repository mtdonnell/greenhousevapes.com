// Greenhouse Vapes contact-form Worker — POST /api/contact
//
// Why this exists: the site's contact form used to be
//
//     onSubmit: e => { e.preventDefault(); setSent(true); }
//
// which told the customer "We'll get back to you within one business day" and
// threw the message away. It was equally dead on Netlify — Netlify Forms
// detects forms by parsing static HTML at build time, and this form is rendered
// by React, so it was never picked up.
//
// Delivery goes to the account's *verified Email Routing destination*, not to
// support@greenhousevapes.com. Sending to support@ would require it to be a
// verified destination, and it cannot be: its own domain's MX points at
// Cloudflare Email Routing, so the verification mail would loop. Mail to
// support@ forwards to the same inbox anyway, so this lands in the same place.
// Sends to verified destinations are free and do not count against quota.

import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage, Mailbox } from 'mimetext';

const TO = 'matthewtdonnell@gmail.com';
const FROM = 'website@greenhousevapes.com';
const STORES = ["Either / doesn't matter", 'Festus', 'De Soto'];

const LIMITS = { name: 100, contact: 200, message: 5000 };

function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...extra },
  });
}

function clean(v, max) {
  if (typeof v !== 'string') return '';
  // Strip control characters so they cannot be used to inject mail headers.
  return v.replace(/[\x00-\x1F\x7F]/g, ' ').trim().slice(0, max);
}

async function handleContact(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  // Honeypot: a field hidden from humans. Anything that fills it is a bot.
  // Return 200 so the bot cannot tell it was rejected.
  if (clean(data.company, 100)) return json({ ok: true });

  const name = clean(data.name, LIMITS.name);
  const contact = clean(data.contact, LIMITS.contact);
  const message = clean(data.message, LIMITS.message);
  const store = STORES.includes(data.store) ? data.store : STORES[0];

  if (!name || !contact || !message) {
    return json({ error: 'missing_fields' }, 400);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const { success } = await env.CONTACT_LIMIT.limit({ key: ip });
  if (!success) {
    return json({ error: 'rate_limited', retryAfter: 60 }, 429, { 'Retry-After': '60' });
  }

  const msg = createMimeMessage();
  msg.setSender({ name: 'Greenhouse Vapes Website', addr: FROM });
  msg.setRecipient(TO);
  msg.setSubject(`Website inquiry from ${name} (${store})`);

  // Reply-To only if it actually looks like an address — otherwise replying
  // would silently fail. Phone numbers stay in the body where they're readable.
  //
  // Must be a Mailbox instance: mimetext validates Reply-To with
  // `value instanceof Mailbox` and throws MIMETEXT_INVALID_HEADER_VALUE on a
  // plain string, which surfaces as a 1101 "Worker threw an exception".
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
    msg.setHeader('Reply-To', new Mailbox({ addr: contact, name }));
  }

  msg.addMessage({
    contentType: 'text/plain',
    data: [
      `Name:    ${name}`,
      `Contact: ${contact}`,
      `Store:   ${store}`,
      '',
      'Message:',
      message,
      '',
      '—',
      'Sent from the contact form on greenhousevapes.com',
    ].join('\n'),
  });

  try {
    await env.SEND_EMAIL.send(new EmailMessage(FROM, TO, msg.asRaw()));
  } catch (e) {
    // Never report success we did not achieve — that is the bug being fixed.
    console.error('contact send failed:', e && e.message);
    return json({ error: 'send_failed' }, 502);
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return json({ error: 'method_not_allowed' }, 405, { Allow: 'POST' });
      }
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
