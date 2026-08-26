// About, Locations, Rewards, FAQ, Contact

function About() {
  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div style={{ maxWidth: 860 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Our story · Est. 2013</div>
            <h1 style={{ marginBottom: 28 }}>
              Thirteen years of being <em style={{ color: "var(--leaf)", fontStyle: "italic" }}>the vape shop</em> Jefferson County actually trusts.
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-2)", lineHeight: 1.6, maxWidth: 720 }}>
              Greenhouse Vapes opened in 2013 in Hillsboro with a simple idea: build a vape shop that treated people like neighbors, stocked the good stuff, and didn't try to upsell you on things you didn't need. Thirteen years later, we're still running on that idea — now in De Soto and Festus.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                <AboutChapter
                  year="2013"
                  title="Opened in Hillsboro."
                  body="We started with one small storefront, a tight selection, and the belief that a friendly shop beats a flashy one. Word got around Jefferson County fast — turns out people really do appreciate being treated well."
                />
                <AboutChapter
                  year="Next"
                  title="Expanded to De Soto."
                  body="Customers kept asking for a shop closer to Main Street De Soto — same prices, same staff energy, same lineup. So we built it, and it’s been our anchor ever since."
                />
                <AboutChapter
                  year="Now"
                  title="Festus joined the family."
                  body="Our newest storefront. Same full lineup, same meet-or-beat pricing, same people who actually know the products. Hillsboro has since closed — these are the two shops today."
                />
                <AboutChapter
                  year="Always"
                  title="Meet-or-beat pricing."
                  body="Bring in a competitor's price on any product we carry. We'll match it or beat it — no forms, no haggling. That's the deal."
                />
              </div>
            </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ borderTop: "1px solid var(--line-soft)", paddingTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
            <Stat2 n="13" label="Years serving Jefferson County" />
            <Stat2 n="2" label="Storefronts · Festus + De Soto" />
            <Stat2 n="11+" label="Major brands carried" />
            <Stat2 n="∞" label="Coffee consumed by staff" />
          </div>
        </div>
      </section>
    </>
  );
}

function AboutChapter({ year, title, body }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 28 }}>
      <div className="mono" style={{ color: "var(--leaf)", paddingTop: 6 }}>{year}</div>
      <div>
        <h3 style={{ marginBottom: 10 }}>{title}</h3>
        <p style={{ color: "var(--fg-2)", fontSize: 16 }}>{body}</p>
      </div>
    </div>
  );
}

function Stat2({ n, label }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 72, fontWeight: 400, color: "var(--leaf)", lineHeight: 1, letterSpacing: "-0.04em", fontVariationSettings: '"opsz" 144, "SOFT" 30' }}>{n}</div>
      <div className="mono" style={{ marginTop: 14, maxWidth: 180 }}>{label}</div>
    </div>
  );
}

// -------------------- LOCATIONS --------------------

function Locations() {
  const locs = [
    {
      city: "Festus",
      addr: "38 E Main St, Festus, MO 63028",
      mapQ: "Greenhouse Vapes, 38 E Main St, Festus, MO 63028",
      phone: "(636) 638-2111",
      hours: [
        ["Sunday", "10:00a – 8:00p"],
        ["Monday", "10:00a – 8:00p"],
        ["Tuesday", "10:00a – 8:00p"],
        ["Wednesday", "10:00a – 8:00p"],
        ["Thursday", "10:00a – 8:00p"],
        ["Friday", "10:00a – 9:00p"],
        ["Saturday", "10:00a – 9:00p"],
      ],
      seo: "Festus vape shop · Jefferson County, MO"
    },
    {
      city: "De Soto",
      addr: "418 S Main St, De Soto, MO 63020",
      mapQ: "Greenhouse Vapes, 418 S Main St, De Soto, MO 63020",
      phone: "(636) 638-2111",
      hours: [
        ["Sunday", "10:00a – 8:00p"],
        ["Monday", "10:00a – 8:00p"],
        ["Tuesday", "10:00a – 8:00p"],
        ["Wednesday", "10:00a – 8:00p"],
        ["Thursday", "10:00a – 8:00p"],
        ["Friday", "10:00a – 9:00p"],
        ["Saturday", "10:00a – 9:00p"],
      ],
      seo: "De Soto vape shop · Jefferson County, MO"
    },
  ];
  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div style={{ maxWidth: 860 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Two locations · Open seven days a week</div>
            <h1 style={{ marginBottom: 28 }}>
              Find the <em style={{ color: "var(--leaf)", fontStyle: "italic" }}>Greenhouse</em> nearest you.
            </h1>
            <p style={{ fontSize: 18, color: "var(--fg-2)", maxWidth: 620 }}>
              Both stores are fully stocked and staffed. Whether you're in Festus, De Soto, Hillsboro, Crystal City, or anywhere in Jefferson County — one of our shops is a short drive.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ display: "grid", gap: 40 }}>
            {locs.map((l) => <LocationCard key={l.city} loc={l} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card" style={{ padding: "48px 40px", textAlign: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Also serving</div>
            <h3 style={{ marginBottom: 18, maxWidth: 720, margin: "0 auto 18px" }}>
              Driving from Hillsboro, Crystal City, Herculaneum, Arnold, Imperial, or Pevely?
            </h3>
            <p style={{ color: "var(--fg-2)", maxWidth: 560, margin: "0 auto" }}>
              We're the closest locally-owned vape shop to most of Jefferson County — usually a 10–20 minute drive. Give us a call before you head out and we'll confirm stock.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function LocationCard({ loc }) {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr" }} className="loc-card-grid">
        <div style={{ padding: "44px 44px", borderRight: "1px solid var(--line-soft)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: 48 }}>{loc.city}</h2>
            <StoreStatusTag />
          </div>
          <div className="mono" style={{ color: "var(--fg-3)", marginBottom: 28 }}>{loc.seo}</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, paddingTop: 24, borderTop: "1px solid var(--line-soft)" }}>
            <div>
              <div className="mono" style={{ marginBottom: 6 }}>Address</div>
              <div style={{ fontSize: 15 }}>{loc.addr}</div>
            </div>
            <div>
              <div className="mono" style={{ marginBottom: 6 }}>Phone</div>
              <div style={{ fontSize: 15 }}>{loc.phone}</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href={"https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(loc.mapQ)} target="_blank" rel="noopener">Get directions</a>
            <a className="btn btn-ghost" href={"tel:" + loc.phone}>Call store</a>
          </div>
        </div>

        <div>
          <div style={{ padding: "32px 40px 0" }}>
            <div className="mono" style={{ marginBottom: 18 }}>Hours</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {loc.hours.map(([d, h]) => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line-soft)", fontSize: 14 }}>
                  <span style={{ color: "var(--fg-2)" }}>{d}</span>
                  <span className="mono" style={{ color: "var(--fg)", fontSize: 13 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: 40 }}>
            <StoreMap query={loc.mapQ} label={loc.city + ", MO"} height={220} rounded />
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------- REWARDS --------------------

function Rewards() {
  const steps = [
    { n: "01", title: "Pick up a card.", body: "Ask the cashier for a Greenhouse punch card on your next visit. Free, no sign-up form, no app to download." },
    { n: "02", title: "Get a stamp each visit.", body: "One stamp per qualifying purchase at either location. Keep the card in your wallet and bring it with you." },
    { n: "03", title: "Sixth visit = discount.", body: "Fill up five stamps, and your sixth visit earns you a discount at the register. Then we start a fresh card." },
  ];
  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div style={{ maxWidth: 860 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Loyalty program · Free to join</div>
            <h1 style={{ marginBottom: 28 }}>
              Six visits. One reward. <em style={{ color: "var(--leaf)", fontStyle: "italic" }}>No app required.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--fg-2)", maxWidth: 620 }}>
              Our punch card rewards you for doing what you were going to do anyway — stop by Greenhouse. Five stamps on the card, and your sixth visit comes with a discount at the register.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <a className="btn btn-primary" href={routeHref("locations")}>Pick up a card at either store →</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 20, paddingBottom: 40 }}>
        <div className="container">
          <PunchCardVisual />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>How it works</div>
              <h2>Three steps. No fine print.</h2>
            </div>
            <p>No app to download, no phone number to give out, no email list to dodge. Just a card, a stamp, and a reward.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {steps.map((s) => (
              <div key={s.n} className="card" style={{ padding: 36 }}>
                <div className="mono" style={{ color: "var(--leaf)", marginBottom: 24 }}>{s.n}</div>
                <h3 style={{ fontSize: 24, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card" style={{ padding: "48px 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
              <RewardFact n="5" l="Stamps to fill a card" />
              <RewardFact n="6th" l="Visit earns the discount" />
              <RewardFact n="2" l="Locations · stamps count at both" />
              <RewardFact n="$0" l="Cost to join" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PunchCardVisual() {
  const [filled, setFilled] = React.useState(3);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "center" }} className="rewards-visual-grid">
      <div style={{
        background: "linear-gradient(135deg, var(--bg-3), var(--bg-2))",
        border: "1.5px dashed color-mix(in oklch, var(--leaf) 45%, transparent)",
        borderRadius: "var(--radius-lg)",
        padding: "40px 44px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="logomark-text" style={{ fontSize: 22 }}>Greenhouse<span>.</span></div>
            <div className="mono" style={{ marginTop: 4, color: "var(--fg-3)" }}>Loyalty card · festus + de soto</div>
          </div>
          <div className="tag tag-leaf">Keep me in your wallet</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
          {[0,1,2,3,4,5].map((i) => {
            const isFilled = i < filled;
            const isReward = i === 5;
            return (
              <button
                key={i}
                onClick={() => setFilled(i === filled ? i : i + 1)}
                style={{
                  aspectRatio: "1",
                  borderRadius: "50%",
                  border: isReward ? "2px solid var(--leaf)" : "1.5px solid var(--line)",
                  background: isFilled
                    ? (isReward ? "var(--leaf)" : "color-mix(in oklch, var(--leaf) 85%, transparent)")
                    : "transparent",
                  display: "grid", placeItems: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                }}
                aria-label={"Stamp " + (i + 1)}
              >
                {isFilled ? (
                  isReward ? (
                    <span style={{ fontSize: 22, color: "var(--bg)" }}>★</span>
                  ) : (
                    <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2 C7 6, 4 12, 12 22 C20 12, 17 6, 12 2 Z" fill="var(--bg)"/>
                    </svg>
                  )
                ) : (
                  <span className="mono" style={{ fontSize: 10, color: "var(--fg-3)" }}>{i + 1}</span>
                )}
                {isReward && !isFilled && (
                  <div className="mono" style={{ position: "absolute", top: "-22px", left: "50%", transform: "translateX(-50%)", color: "var(--leaf)", fontSize: 9, whiteSpace: "nowrap" }}>Reward</div>
                )}
              </button>
            );
          })}
        </div>
        <div className="mono" style={{ marginTop: 22, color: "var(--fg-3)", textAlign: "center" }}>Tap a stamp to preview</div>
      </div>
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Your card, visualized</div>
        <h3 style={{ marginBottom: 16, fontSize: 26 }}>Five stamps, then the sixth visit is on us.</h3>
        <p style={{ color: "var(--fg-2)", fontSize: 15.5 }}>
          That's the whole program. One stamp per visit, five visits to fill the card, discount on the sixth. Stamps earned at either store count toward the same card.
        </p>
      </div>
    </div>
  );
}

function RewardFact({ n, l }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 48, color: "var(--leaf)", lineHeight: 1, letterSpacing: "-0.03em", fontVariationSettings: '"opsz" 144' }}>{n}</div>
      <div className="mono" style={{ marginTop: 10 }}>{l}</div>
    </div>
  );
}

// -------------------- FAQ --------------------

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    { q: "What's the legal age to buy vape products in Missouri?", a: "You must be 21 or older to purchase any nicotine-containing vape product in Missouri. We card everyone under 35 without exception — bring a valid government-issued ID." },
    { q: "Do you really price-match other vape shops?", a: "Yes. If another Jefferson County vape shop (or an online retailer) is selling an identical product for less, show us — in person, on your phone, anything — and we'll match or beat that price. No paperwork, no delays." },
    { q: "What brands of disposables do you stock?", a: "Our regular rotation includes Geek Bar, Lost Mary, IVG, SKE, and The Future. Individual flavor availability changes weekly as new drops land. Call either store and we'll tell you exactly what's on the shelf right now." },
    { q: "Do you carry coils and pods for devices I bought elsewhere?", a: "Almost always. We keep coils and pods for every device we sell plus most popular devices we don't — Vaporesso, SMOK, OXVA, Aspire, Innokin, Uwell, and more. If we don't have your coil in stock, we'll order it." },
    { q: "How does the Greenhouse rewards program work?", a: "We run an old-school punch card. Ask the cashier for one on your next visit — no app, no sign-up. Each qualifying purchase earns a stamp. Fill five stamps, and your sixth visit comes with a discount at the register. Stamps count at both our Festus and De Soto locations." },
    { q: "Which Greenhouse location is closer to me?", a: "If you're coming from Crystal City, Herculaneum, Pevely, or Arnold, Festus is likely closer. From Hillsboro, Cedar Hill, or points south, De Soto is usually the easier drive. Both carry the full lineup." },
    { q: "Do you sell online or ship products?", a: "Not currently. We're an in-store-only shop, which lets us keep prices lower and give you actual face-to-face recommendations. Both stores are open seven days a week." },
    { q: "Can I trade in my old device?", a: "We don't do formal trade-ins, but staff will happily give you honest advice on whether your current device is worth keeping or if an upgrade makes sense. No pressure either way." },
    { q: "Are you hiring?", a: "Occasionally. We hire people who already vape and love talking about it. If that's you, swing by either store and introduce yourself." },
  ];

  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Frequently asked</div>
            <h1 style={{ marginBottom: 28 }}>
              Questions we <em style={{ color: "var(--leaf)", fontStyle: "italic" }}>actually</em> get asked.
            </h1>
            <p style={{ fontSize: 18, color: "var(--fg-2)", maxWidth: 620 }}>
              Pulled from the real conversations happening at our counter. If yours isn't here, give us a call or stop in — we love answering questions.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderTop: i === 0 ? "1px solid var(--line-soft)" : undefined, borderBottom: "1px solid var(--line-soft)" }}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "28px 0",
                    display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-start",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div className="mono" style={{ marginBottom: 6 }}>Q · 0{i + 1}</div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--fg)", fontVariationSettings: '"opsz" 72' }}>{f.q}</div>
                  </div>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1px solid var(--line)",
                    display: "grid", placeItems: "center",
                    flexShrink: 0,
                    color: "var(--leaf)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                  }}>+</div>
                </button>
                <div style={{
                  maxHeight: open === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, padding 0.3s ease",
                  paddingBottom: open === i ? 32 : 0,
                }}>
                  <div style={{ maxWidth: 640, color: "var(--fg-2)", fontSize: 16.5, lineHeight: 1.65 }}>{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// -------------------- CONTACT --------------------

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");
  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div style={{ maxWidth: 860 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Get in touch</div>
            <h1 style={{ marginBottom: 28 }}>
              Questions? Stock checks? Just saying hi?
            </h1>
            <p style={{ fontSize: 18, color: "var(--fg-2)", maxWidth: 620 }}>
              The fastest way to reach us is to call either store directly. We'll also respond to messages here — usually within a business day.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 40, alignItems: "start" }} className="contact-grid">
            <div className="card" style={{ padding: 40 }}>
              <h3 style={{ marginBottom: 24 }}>Reach the shop</h3>
              <ContactRow label="Festus store" value="(636) 638-2111" href="tel:6366382111" />
              <ContactRow label="De Soto store" value="(636) 638-2111" href="tel:6366382111" />
              <ContactRow label="Email" value="support@greenhousevapes.com" href="mailto:support@greenhousevapes.com" />
              <ContactRow label="Instagram" value="@thegreenhousevapes" href="https://www.instagram.com/thegreenhousevapes/" />
              <ContactRow label="Facebook" value="Greenhouse Vapes" href="https://www.facebook.com/greenhousevapes" last />
            </div>
            <div className="card" style={{ padding: 40 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "color-mix(in oklch, var(--leaf) 20%, transparent)", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12 L10 17 L19 7" stroke="var(--leaf)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ marginBottom: 10 }}>Message sent.</h3>
                  <p style={{ color: "var(--fg-2)" }}>We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  setError("");
                  setSending(true);
                  try {
                    const r = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: fd.get("name") || "",
                        contact: fd.get("contact") || "",
                        store: fd.get("store") || "",
                        message: fd.get("message") || "",
                        company: fd.get("company") || "",
                      }),
                    });
                    if (!r.ok) throw new Error(String(r.status));
                    setSent(true);
                  } catch (err) {
                    setError("That didn't go through. Please call the shop at (636) 638-2111, or email support@greenhousevapes.com.");
                  } finally {
                    setSending(false);
                  }
                }}>
                  <h3 style={{ marginBottom: 24 }}>Send us a note</h3>
                  {/* Honeypot: hidden from people, catnip for bots. */}
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                  {error && (
                    <p role="alert" style={{ color: "var(--danger)", fontSize: 14, marginBottom: 16 }}>{error}</p>
                  )}
                  <Field label="Your name" name="name" required placeholder="Jane Smith" />
                  <Field label="Email or phone" name="contact" required placeholder="jane@example.com" />
                  <Field label="Which store?" name="store" select options={["Either / doesn't matter", "Festus", "De Soto"]} />
                  <Field label="Message" name="message" required textarea placeholder="What's up?" />
                  <button type="submit" className="btn btn-primary" disabled={sending} style={{ width: "100%", justifyContent: "center", marginTop: 8, opacity: sending ? 0.6 : 1 }}>
                    {sending ? "Sending…" : "Send message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ label, value, href, last }) {
  return (
    <a href={href} style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 0",
      borderBottom: last ? "none" : "1px solid var(--line-soft)",
      transition: "color 0.15s",
    }}
      onMouseEnter={(e) => { e.currentTarget.querySelector(".v").style.color = "var(--leaf)"; }}
      onMouseLeave={(e) => { e.currentTarget.querySelector(".v").style.color = "var(--fg)"; }}
    >
      <span className="mono">{label}</span>
      <span className="v" style={{ fontFamily: "var(--serif)", fontSize: 20, fontVariationSettings: '"opsz" 72', transition: "color 0.15s" }}>{value}</span>
    </a>
  );
}

function Field({ label, name, placeholder, textarea, select, options, required }) {
  const baseStyle = {
    width: "100%",
    background: "var(--bg)",
    border: "1px solid var(--line-soft)",
    borderRadius: "var(--radius-sm)",
    color: "var(--fg)",
    padding: "12px 14px",
    fontSize: 14.5,
    fontFamily: "var(--sans)",
    transition: "border-color 0.15s",
    outline: "none",
  };
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 8 }}>{label}</label>
      {textarea ? (
        <textarea rows={4} name={name} required={required} placeholder={placeholder} style={baseStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--leaf)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line-soft)")}
        />
      ) : select ? (
        <select name={name} style={baseStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--leaf)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line-soft)")}
        >
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input type="text" name={name} required={required} placeholder={placeholder} style={baseStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--leaf)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line-soft)")}
        />
      )}
    </div>
  );
}

Object.assign(window, { About, Locations, Rewards, FAQ, Contact });
