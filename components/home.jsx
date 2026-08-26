// Home page — "warm & local" redesign
const { useState: useStateHome } = React;

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  // vapor wisps
  const wisps = [
    { left: "-26px", vd: "4.2s", delay: "0s", drift: "-30px" },
    { left: "-10px", vd: "5s", delay: "0.8s", drift: "20px" },
    { left: "6px", vd: "3.8s", delay: "1.4s", drift: "-12px" },
    { left: "20px", vd: "4.6s", delay: "0.4s", drift: "26px" },
    { left: "34px", vd: "5.4s", delay: "2s", drift: "-8px" },
    { left: "-2px", vd: "4s", delay: "2.6s", drift: "14px" },
  ];
  return (
    <section className="hero-wrap grain" style={{ paddingTop: "clamp(56px, 12vw, 76px)", paddingBottom: "clamp(48px, 9vw, 64px)" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid2">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: 99, background: "var(--leaf-vivid)", display: "inline-block" }}/>
              Festus &amp; De Soto, Missouri · since 2013
            </div>
            <h1 style={{ marginBottom: 22 }}>
              Jefferson County's <Squiggle><em style={{ color: "var(--leaf-vivid)", fontStyle: "italic", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>friendliest</em></Squiggle> vape shop.
            </h1>
            <p style={{ fontSize: 18.5, color: "var(--fg-2)", maxWidth: 500, marginBottom: 30, lineHeight: 1.55 }}>
              Two stocked storefronts run by people who actually live here. Every major brand,
              honest advice, a punch card that pays off, and we'll meet or beat any price in town.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a className="btn btn-primary btn-lift" href={routeHref("locations")}>Find your nearest shop</a>
              <a className="btn btn-ghost" href="#finder">Help me pick →</a>
            </div>
            <div style={{ display: "flex", gap: 26, marginTop: 40, flexWrap: "wrap", alignItems: "center" }}>
              <HeroTrust n="13 yrs" l="locally owned" />
              <span style={{ width: 1, height: 30, background: "var(--line)" }}/>
              <HeroTrust n="2" l="MO storefronts" />
              <span style={{ width: 1, height: 30, background: "var(--line)" }}/>
              <HeroTrust n="11+" l="brands stocked" />
            </div>
          </div>

          <div className="iguana-col">
            <div className="iguana-stage">
              <div className="iguana-disc"/>
              <div className="vapor">
                {wisps.map((w, i) => (
                  <span key={i} style={{ left: w.left, "--vd": w.vd, "--vdelay": w.delay, "--drift": w.drift }}/>
                ))}
              </div>
              <img className="iguana-art" src={(window.__resources && window.__resources.iguanaHero) || "assets/iguana-hero.svg"} alt="Iguana mascot illustration for Greenhouse Vapes, a vape shop in Festus and De Soto, Missouri" />
              <div className="hero-stickers">
                <div className="sticker sticker-leaf" style={{ top: "4%", left: "2%", animationDelay: "0.4s" }}>Price-match promise</div>
                <div className="sticker" style={{ bottom: "10%", right: "-3%", animationDelay: "1.2s" }}><b>★</b> 6th visit = reward</div>
              </div>
            </div>
            <div className="hero-badges-row">
              <span className="badge-pill badge-pill-leaf">Price-match promise</span>
              <span className="badge-pill"><b>★</b> 6th visit = reward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTrust({ n, l }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 600, color: "var(--fg)", lineHeight: 1, letterSpacing: "-0.02em", fontVariationSettings: '"opsz" 144' }}>{n}</div>
      <div className="mono" style={{ marginTop: 5 }}>{l}</div>
    </div>
  );
}

/* --------------------------- ASSURANCES ---------------------------
   Replaces a scrolling marquee. A ticker draws the eye, says four things
   badly, and reads as template furniture; a still, evenly-set row reads as
   a business stating facts. Stillness is the upscale cue here.
   Each item is a claim plus the detail that makes it credible.
------------------------------------------------------------------- */
function Assurances() {
  const items = [
    { label: "Price-match promise", detail: "Bring any local price. We meet or beat it." },
    { label: "Thirteen years local", detail: "Serving Jefferson County since 2013." },
    { label: "Two stocked shops", detail: "Festus and De Soto, open seven days." },
    { label: "Staff who vape", detail: "Honest guidance, never an upsell." },
  ];
  return (
    <section aria-label="Why shop with us" style={{ borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)", background: "var(--bg-2)" }}>
      <div className="container">
        <ul className="assurances">
          {items.map((it) => (
            <li key={it.label}>
              <span className="as-label">{it.label}</span>
              <span className="as-detail">{it.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- FINDER SECTION ----------------------------- */
function FinderSection() {
  return (
    <section id="finder" className="grain" style={{ background: "var(--warm-bg)" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 48, alignItems: "center" }} className="finder-layout">
          <Reveal>
            <div className="sec-no" style={{ marginBottom: 14 }}>01 — Not sure what to grab?</div>
            <h2 style={{ marginBottom: 18 }}>Let's find your <span style={{ color: "var(--leaf-vivid)" }}>match</span>.</h2>
            <p style={{ color: "var(--fg-2)", fontSize: 16.5, maxWidth: 380 }}>
              Three quick taps and we'll point you at the right category and a few brands to ask for.
              No pressure — the real magic happens at the counter.
            </p>
            <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 10, color: "var(--fg-3)" }}>
              <HandArrow size={34} style={{ transform: "rotate(18deg)" }} />
              <span className="mono">try it →</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <VapeFinder />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EXPLORER (paper) ----------------------------- */
function ExplorerSection() {
  return (
    <section className="paper grain">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-head">
          <Reveal>
            <div className="sec-no" style={{ marginBottom: 12 }}>02 — On the shelf</div>
            <h2>Browse what we <Squiggle variant={1}>carry</Squiggle>.</h2>
          </Reveal>
          <Reveal delay={1} as="p">
            Filter by what you're into. Searching "Geek Bar Festus" or "Vaporesso De Soto"? You're in the right place.
          </Reveal>
        </div>
        <Reveal delay={1}>
          <BrandExplorer />
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- PROMISE + NOTES ----------------------------- */
function PromiseSection() {
  const promises = [
    { k: "Meet or beat any price", b: "Show us a competitor's price on the same product. We match it or go lower — no fine print." },
    { k: "Staff that actually vapes", b: "No scripts. Real recommendations from people who use what they sell." },
    { k: "Always stocked", b: "Two full stores. If we don't have it, we'll order it." },
  ];
  const notes = [
    { q: "Been coming here for years. They remember my flavor and never try to upsell me.", by: "Regular · De Soto", tilt: "-1.4deg" },
    { q: "Helped me ditch cigarettes with the right starter kit. Patient, kind, no judgment.", by: "Customer · Festus", tilt: "1.6deg" },
    { q: "Best prices in the county and the punch card actually adds up. My go-to.", by: "Local · Jefferson County", tilt: "-0.8deg" },
  ];
  return (
    <section className="grain" style={{ background: "var(--warm-bg)" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-head">
          <Reveal>
            <div className="sec-no" style={{ marginBottom: 12 }}>03 — Why locals stick with us</div>
            <h2>A real shop, run by <span style={{ color: "var(--leaf-vivid)" }}>real neighbors</span>.</h2>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginBottom: 48 }}>
          {promises.map((p, i) => (
            <Reveal key={p.k} delay={i + 1}>
              <div className="card" style={{ padding: 30, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "color-mix(in oklch, var(--leaf-vivid) 18%, transparent)", display: "grid", placeItems: "center", color: "var(--leaf-vivid)" }}>✓</span>
                  <h3 style={{ fontSize: 20 }}>{p.k}</h3>
                </div>
                <p style={{ color: "var(--fg-2)", fontSize: 14.5 }}>{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mono" style={{ color: "var(--fg-3)", marginBottom: 22, textAlign: "center" }}>— what folks tell us —</div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, paddingTop: 8 }}>
          {notes.map((n, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="note-card" style={{ "--tilt": n.tilt }}>
                <div className="note-pin"/>
                <div className="nc-quote">"{n.q}"</div>
                <div className="nc-by">{n.by}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mono" style={{ textAlign: "center", color: "var(--fg-3)", marginTop: 26, fontSize: 10.5 }}>
            Composed from the kind of feedback we hear at the counter
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- LOCATIONS ----------------------------- */
function LocationsPreview() {
  const locs = [
    { name: "Festus", addr: "38 E Main St, Festus, MO", mapQ: "Greenhouse Vapes, 38 E Main St, Festus, MO 63028", hours: "Sun–Thu · 10a–8p", hours2: "Fri–Sat · 10a–9p" },
    { name: "De Soto", addr: "418 S Main St, De Soto, MO", mapQ: "Greenhouse Vapes, 418 S Main St, De Soto, MO 63020", hours: "Sun–Thu · 10a–8p", hours2: "Fri–Sat · 10a–9p" },
  ];
  return (
    <section className="paper grain">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-head">
          <Reveal>
            <div className="sec-no" style={{ marginBottom: 12 }}>04 — Come say hi</div>
            <h2>Two doors, <Squiggle variant={2}>always open</Squiggle>.</h2>
          </Reveal>
          <Reveal delay={1} as="p">Both stores carry the full lineup, seven days a week — an easy stop whether you're coming from Festus, De Soto, Crystal City, Hillsboro, Pevely, or Arnold.</Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="locs-grid">
          {locs.map((l, i) => (
            <Reveal key={l.name} delay={i + 1}>
              <div className="card" style={{ overflow: "hidden", background: "var(--warm-bg-2)", height: "100%" }}>
                <StoreMap query={l.mapQ} label={l.name + ", MO"} height={200} />
                <div style={{ padding: 30 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
                    <h3 style={{ color: "var(--fg)" }}>{l.name} <span style={{ color: "var(--fg-3)", fontSize: 18 }}>· MO</span></h3>
                    <StoreStatusTag />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingTop: 18, borderTop: "1px solid var(--line-soft)" }}>
                    <div>
                      <div className="mono" style={{ marginBottom: 6 }}>Address</div>
                      <div style={{ fontSize: 14, color: "var(--fg-2)" }}>{l.addr}</div>
                    </div>
                    <div>
                      <div className="mono" style={{ marginBottom: 6 }}>Hours</div>
                      <div style={{ fontSize: 14, color: "var(--fg-2)" }}>{l.hours}</div>
                      <div style={{ fontSize: 14, color: "var(--fg-3)" }}>{l.hours2}</div>
                    </div>
                  </div>
                  <a className="btn btn-ghost btn-lift" style={{ marginTop: 22 }} href={routeHref("locations")}>Hours &amp; directions →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- REWARDS PUNCH CARD ----------------------------- */
function RewardsTeaser() {
  const [filled, setFilled] = useStateHome(3);
  return (
    <section className="grain" style={{ background: "var(--warm-bg)" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          background: "var(--leaf-deep)", borderRadius: "var(--radius-lg)",
          padding: "clamp(36px, 5vw, 72px)", position: "relative", overflow: "hidden",
          border: "1px solid color-mix(in oklch, var(--leaf-vivid) 40%, transparent)",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(60deg, color-mix(in oklch, var(--leaf-vivid) 16%, transparent) 0 1px, transparent 1px 34px)", opacity: 0.5 }}/>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 44, alignItems: "center" }} className="rewards-layout">
            <Reveal>
              <div className="sec-no" style={{ color: "oklch(0.96 0.04 130)", marginBottom: 14 }}>05 — Loyalty, the old-school way</div>
              <h2 style={{ color: "oklch(0.98 0.02 130)", marginBottom: 16 }}>Six visits. One reward. No app.</h2>
              <p style={{ color: "color-mix(in oklch, white 82%, transparent)", fontSize: 17, marginBottom: 28, maxWidth: 460 }}>
                Grab a punch card at the counter. Earn a stamp each visit — your sixth comes with a discount.
                Stamps count at both shops.
              </p>
              <a className="btn btn-lift" style={{ background: "oklch(0.98 0.02 130)", color: "var(--leaf-deep)" }} href={routeHref("rewards")}>
                How rewards work →
              </a>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ background: "oklch(0.99 0.01 120 / 0.12)", border: "1px dashed oklch(0.98 0.04 130 / 0.5)", borderRadius: "var(--radius)", padding: 24 }}>
                <div className="mono" style={{ color: "oklch(0.96 0.04 130)", marginBottom: 14 }}>tap to preview →</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
                  {[0,1,2,3,4,5].map((i) => {
                    const on = i < filled, reward = i === 5;
                    return (
                      <button key={i} onClick={() => setFilled(i === filled ? i : i + 1)}
                        style={{
                          aspectRatio: "1", borderRadius: "50%",
                          border: reward ? "2px solid oklch(0.98 0.04 130)" : "1.5px solid oklch(0.98 0.04 130 / 0.5)",
                          background: on ? (reward ? "oklch(0.98 0.04 130)" : "oklch(0.98 0.04 130 / 0.85)") : "transparent",
                          display: "grid", placeItems: "center", cursor: "pointer", transition: "all 0.2s",
                          color: "var(--leaf-deep)", fontWeight: 700,
                        }}
                        aria-label={"Stamp " + (i + 1)}>
                        {on ? (reward ? "★" : "✓") : <span style={{ color: "oklch(0.98 0.04 130 / 0.5)", fontSize: 11 }}>{i + 1}</span>}
                      </button>
                    );
                  })}
                </div>
                <div className="mono" style={{ color: "oklch(0.96 0.04 130 / 0.8)", marginTop: 16, textAlign: "center", fontSize: 10 }}>5 stamps → 6th visit reward</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Assurances />
      <FinderSection />
      <ExplorerSection />
      <PromiseSection />
      <LocationsPreview />
      <RewardsTeaser />
    </>
  );
}

Object.assign(window, { Home });
