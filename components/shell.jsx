// Shell: nav + footer + age gate + tweaks
const { useState, useEffect, useRef } = React;

// ---- Scroll reveal: adds .in when element scrolls into view ----
function Reveal({ children, delay = 0, as = "div", className = "", style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("in"); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  const cls = ["reveal", delay ? "reveal-d" + delay : "", className].filter(Boolean).join(" ");
  return <Tag ref={ref} className={cls} style={style}>{children}</Tag>;
}

// ---- Hand-drawn underline under a word/phrase ----
function Squiggle({ children, variant = 0 }) {
  const paths = [
    "M2 12 C 60 4, 140 4, 198 11 C 150 9, 70 9, 4 16",
    "M2 10 Q 100 20, 198 8",
    "M3 9 C 50 16, 150 2, 197 12",
  ];
  return (
    <span className="hand-underline">
      {children}
      <svg viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
        <path d={paths[variant % paths.length]} />
      </svg>
    </span>
  );
}

// ---- Small hand-drawn arrow ----
function HandArrow({ size = 38, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" style={style}>
      <path d="M6 10 C 16 30, 26 32, 33 26" stroke="var(--leaf-vivid)" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
      <path d="M26 27 L33 26 L31 19" stroke="var(--leaf-vivid)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ---- Live store hours (America/Chicago — stores are in Missouri) ----
// Sun–Thu 10a–8p, Fri–Sat 10a–9p
function getStoreStatus() {
  // Get current time in America/Chicago regardless of visitor's timezone
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short", hour: "numeric", minute: "numeric", hour12: false,
  }).formatToParts(now);
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const day = weekdayMap[get("weekday")];
  const hour = parseInt(get("hour"), 10);
  const minute = parseInt(get("minute"), 10);
  const mins = hour * 60 + minute;

  const openMin = 10 * 60;
  const closeMin = (day === 5 || day === 6) ? 21 * 60 : 20 * 60; // Fri/Sat later

  const isOpen = mins >= openMin && mins < closeMin;

  let label;
  if (isOpen) {
    const remaining = closeMin - mins;
    if (remaining <= 60) {
      label = `Closes in ${remaining} min`;
    } else {
      const closeHour = Math.floor(closeMin / 60);
      const closeDisplay = closeHour > 12 ? `${closeHour - 12}pm` : `${closeHour}am`;
      label = `Open · til ${closeDisplay}`;
    }
  } else {
    // Compute next opening
    if (mins < openMin) {
      label = "Closed · opens 10am";
    } else {
      const tomorrowIsFriSat = (day + 1) % 7 === 5 || (day + 1) % 7 === 6;
      label = "Closed · opens 10am";
    }
  }
  return { isOpen, label };
}

// Hook: re-evaluates every minute so the tag updates live if the user sits on the page
function useStoreStatus() {
  const [status, setStatus] = useState(() => getStoreStatus());
  useEffect(() => {
    const tick = () => setStatus(getStoreStatus());
    const id = setInterval(tick, 60 * 1000);
    return () => clearInterval(id);
  }, []);
  return status;
}

// Shared: live open/closed tag
function StoreStatusTag() {
  const { isOpen, label } = useStoreStatus();
  return (
    <div className={isOpen ? "tag tag-leaf" : "tag"} style={isOpen ? {} : { background: "color-mix(in oklch, var(--fg-3) 14%, transparent)", color: "var(--fg-2)", borderColor: "var(--line-soft)" }}>
      <span style={{
        display: "inline-block", width: 7, height: 7, borderRadius: 99,
        marginRight: 8, verticalAlign: "middle",
        background: isOpen ? "var(--leaf)" : "var(--fg-3)",
        boxShadow: isOpen ? "0 0 0 3px color-mix(in oklch, var(--leaf) 25%, transparent)" : "none",
      }}/>
      {label}
    </div>
  );
}

// Shared: embedded Google Map (no API key — uses the public embed endpoint)
function StoreMap({ query, label, height = 180, rounded = false }) {
  const src = "https://www.google.com/maps?q=" + encodeURIComponent(query) + "&z=15&output=embed";
  return (
    <div style={{
      height, position: "relative", overflow: "hidden",
      borderBottom: rounded ? undefined : "1px solid var(--line-soft)",
      borderRadius: rounded ? "var(--radius)" : 0,
      border: rounded ? "1px solid var(--line-soft)" : undefined,
      background: "var(--bg-3)",
    }}>
      <iframe
        title={"Map: " + (label || query)}
        src={src}
        style={{ border: 0, width: "100%", height: "100%", display: "block", filter: "saturate(0.85) contrast(0.95)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

// Real per-page URLs (set once from App.compiled.js as window.__ROUTES__) so nav links are
// crawlable <a href> — good for both users and search engines, no client router required.
function routeHref(key) {
  return (window.__ROUTES__ && window.__ROUTES__[key]) || "/" + key;
}

function Logomark() {
  // The real shop badge, not the placeholder mark. Wrapped so the badge can
  // tilt and catch a light sweep on hover/focus without moving the wordmark.
  // Purely decorative motion - the <a> is what carries meaning, and the whole
  // effect is disabled under prefers-reduced-motion.
  return (
    <a className="logomark" href={routeHref("home")} aria-label="Greenhouse Vapes home">
      <span className="logomark-badge" aria-hidden="true">
        <img src="/assets/brand/logo-256.png" alt="" width="42" height="42" decoding="async" />
        <span className="logomark-shine" />
      </span>
      <div className="logomark-text">Greenhouse<span>.</span></div>
    </a>
  );
}

function Nav({ route }) {
  const links = [
    ["home", "Home"],
    ["products", "Products"],
    ["about", "About"],
    ["locations", "Locations"],
    ["rewards", "Rewards"],
    ["faq", "FAQ"],
    ["contact", "Contact"],
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [route]);

  // Lock scroll while menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logomark />
        <div className="nav-links">
          {links.map(([k, label]) => (
            <a
              key={k}
              href={routeHref(k)}
              className={"nav-link " + (route === k ? "active" : "")}
            >
              {label}
            </a>
          ))}
          <a
            href={routeHref("locations")}
            className="btn btn-primary btn-mono nav-cta"
            style={{ marginLeft: 10 }}
          >
            Visit a shop →
          </a>
        </div>
        <button
          className="nav-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenuOpen((v) => !v); }}
        >
          <span style={{ transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }}/>
          <span style={{ opacity: menuOpen ? 0 : 1 }}/>
          <span style={{ transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }}/>
        </button>
      </div>
      {menuOpen && ReactDOM.createPortal(
        <div
          className="nav-mobile-sheet"
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 2000,
            background: "#0f1a14",
            overflowY: "auto",
            paddingTop: 73,
          }}
        >
          <div className="nav-mobile-inner">
            {links.map(([k, label]) => (
              <a
                key={k}
                href={routeHref(k)}
                className={"nav-mobile-link " + (route === k ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
            <a
              href={routeHref("locations")}
              className="btn btn-primary"
              style={{ marginTop: 18, justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Visit a shop →
            </a>
            <a href="tel:6366382111" className="btn btn-ghost" style={{ marginTop: 10, justifyContent: "center" }}>
              Call (636) 638-2111
            </a>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Logomark />
            <p style={{ color: "var(--fg-2)", fontSize: 14, marginTop: 14, maxWidth: 340 }}>
              Locally-owned vape shop serving Jefferson County, Missouri for 13 years.
              Two locations in Festus and De Soto, always stocked, always friendly.
            </p>
            <p className="mono" style={{ marginTop: 18 }}>21+ only · Must be of legal age</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <a href={routeHref("about")}>About</a>
            <a href={routeHref("locations")}>Locations</a>
            <a href={routeHref("rewards")}>Rewards</a>
            <a href={routeHref("faq")}>FAQ</a>
          </div>
          <div className="footer-col">
            <h4>Festus</h4>
            <a href="tel:6366382111">(636) 638-2111</a>
            <a href={routeHref("locations")}>38 E Main St</a>
            <a href={routeHref("locations")}>Hours & directions</a>
          </div>
          <div className="footer-col">
            <h4>De Soto</h4>
            <a href="tel:6366382111">(636) 638-2111</a>
            <a href={routeHref("locations")}>418 S Main St</a>
            <a href={routeHref("locations")}>Hours & directions</a>
          </div>
        </div>
        <div className="footer-meta">
          <div>© 2026 Greenhouse Vapes · Festus & De Soto, MO</div>
          <div>Jefferson County · Since 2013</div>
        </div>
      </div>
    </footer>
  );
}

function AgeGate({ onAccept }) {
  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="age-gate-card">
        <div className="logomark" style={{ justifyContent: "center", marginBottom: 18 }}>
          <img src={(window.__resources && window.__resources.iguanaMark) || "assets/iguana-mark.svg"} alt="" width="44" height="44" style={{ borderRadius: 12 }} />
          <div className="logomark-text">Greenhouse<span>.</span></div>
        </div>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Age verification</div>
        <h3 id="age-title" style={{ marginBottom: 10 }}>Are you 21 or older?</h3>
        <p style={{ color: "var(--fg-2)", fontSize: 14, marginBottom: 28 }}>
          You must be of legal smoking age in Missouri to enter this site.
          By continuing, you confirm you are 21+ years of age.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button className="btn btn-primary" onClick={onAccept}>Yes, I'm 21 or older</button>
          <a className="btn btn-ghost" href="https://www.google.com">I'm under 21</a>
        </div>
        <p className="mono" style={{ marginTop: 24 }}>Warning: contains nicotine. Nicotine is an addictive chemical.</p>
      </div>
    </div>
  );
}

function Tweaks({ theme, setTheme }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onMsg(e) {
      if (e.data?.type === "__activate_edit_mode") setVisible(true);
      if (e.data?.type === "__deactivate_edit_mode") setVisible(false);
    }
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  if (!visible) return null;

  const themes = [
    { id: "botanical", label: "Botanical", bg: "#1a2e20", accent: "#8fc96a" },
    { id: "earthy", label: "Earthy", bg: "#e8e0cf", accent: "#3a6b28" },
    { id: "light", label: "Light", bg: "#f7faf5", accent: "#2d5016" },
    { id: "neon", label: "Neon", bg: "#0e1a14", accent: "#d4ff4a" },
  ];

  return (
    <div className="tweaks">
      <h4>Tweaks · Theme</h4>
      <div className="theme-swatches">
        {themes.map((t) => (
          <div key={t.id} style={{ textAlign: "center" }}>
            <button
              className={"swatch " + (theme === t.id ? "active" : "")}
              style={{
                background: `linear-gradient(135deg, ${t.bg} 0 60%, ${t.accent} 60% 100%)`,
              }}
              onClick={() => {
                setTheme(t.id);
                window.parent.postMessage(
                  { type: "__edit_mode_set_keys", edits: { theme: t.id } },
                  "*"
                );
              }}
              aria-label={t.label + " theme"}
            />
            <div className="swatch-label">{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Logomark, Nav, Footer, AgeGate, Tweaks, Reveal, Squiggle, HandArrow, StoreStatusTag, StoreMap, getStoreStatus, useStoreStatus, routeHref });
