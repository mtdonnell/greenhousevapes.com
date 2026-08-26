// Interactive: Find-your-vape quiz + brand/flavor explorer
const { useState: useStateI } = React;

/* ============================= VAPE FINDER ============================= */
function VapeFinder() {
  const steps = [
    {
      key: "type",
      q: "What are you after?",
      opts: [
        { v: "disposable", emoji: "💨", title: "Grab & go", sub: "Disposables, ready out of the box" },
        { v: "refillable", emoji: "🔋", title: "A refillable kit", sub: "Pod system or starter device" },
        { v: "juice", emoji: "🧪", title: "Just the juice", sub: "E-liquid for a setup I own" },
        { v: "unsure", emoji: "🤔", title: "Not sure yet", sub: "Point me in a direction" },
      ],
    },
    {
      key: "flavor",
      q: "Pick a flavor mood.",
      opts: [
        { v: "fruit", emoji: "🍓", title: "Fruity", sub: "Berry, mango, citrus" },
        { v: "ice", emoji: "🧊", title: "Cool & minty", sub: "Menthol, ice, fresh" },
        { v: "dessert", emoji: "🍮", title: "Sweet & dessert", sub: "Custard, candy, bakery" },
        { v: "tobacco", emoji: "🍂", title: "Classic tobacco", sub: "Rich, smooth, familiar" },
      ],
    },
    {
      key: "nic",
      q: "Nicotine strength?",
      opts: [
        { v: "high", emoji: "⚡", title: "Higher", sub: "Stronger throat hit" },
        { v: "med", emoji: "🌗", title: "Middle of the road", sub: "Balanced" },
        { v: "low", emoji: "🍃", title: "Lighter", sub: "Easy does it" },
        { v: "zero", emoji: "0️⃣", title: "Zero nicotine", sub: "Flavor only" },
      ],
    },
  ];

  const [step, setStep] = useStateI(0);
  const [answers, setAnswers] = useStateI({});

  function choose(key, v) {
    const next = { ...answers, [key]: v };
    setAnswers(next);
    if (step < steps.length - 1) setStep(step + 1);
    else setStep(steps.length); // results
  }
  function reset() { setAnswers({}); setStep(0); }

  function recommend() {
    const { type, flavor, nic } = answers;
    const flavorBrand = {
      fruit: ["Lost Mary", "Geek Bar", "IVG"],
      ice: ["SKE", "Vaporesso", "Geek Bar"],
      dessert: ["IVG", "Lost Mary", "The Future"],
      tobacco: ["Vaporesso", "Innokin", "Aspire"],
    }[flavor] || ["Geek Bar", "Lost Mary", "Vaporesso"];

    let category, blurb, cta;
    if (type === "disposable") {
      category = "Disposables";
      blurb = "Pre-filled, pre-charged, zero setup. Walk in, pick a flavor, walk out.";
    } else if (type === "refillable") {
      category = "Pods & starter kits";
      blurb = "A refillable pod kit saves money long-term — we'll set it up before you leave.";
    } else if (type === "juice") {
      category = "E-liquids";
      blurb = "Tell us your device and we'll match the right nic strength and VG/PG.";
    } else {
      category = "Let's talk in person";
      blurb = "Honestly? Easiest to just swing by — we'll figure out the right fit together.";
    }
    const nicLine = {
      high: "We'll steer you toward higher-strength salts.",
      med: "A balanced salt or freebase will suit you.",
      low: "Lower-strength options keep it smooth.",
      zero: "Plenty of 0mg options for flavor chasers.",
    }[nic] || "";

    return { category, blurb: blurb + " " + nicLine, brands: flavorBrand };
  }

  const isResult = step >= steps.length;
  const rec = isResult ? recommend() : null;

  return (
    <div className="finder">
      <div className="finder-progress" aria-hidden="true">
        {steps.map((s, i) => (
          <div key={s.key} className={"finder-pip " + (i < step || isResult ? "done" : "")}><span/></div>
        ))}
      </div>

      {!isResult ? (
        <div key={step}>
          <div className="sec-no" style={{ marginBottom: 10 }}>Step {step + 1} of {steps.length}</div>
          <h3 style={{ fontSize: "clamp(24px,3vw,32px)", marginBottom: 22 }}>{steps[step].q}</h3>
          <div className="finder-opts">
            {steps[step].opts.map((o) => (
              <button key={o.v} className="finder-opt" onClick={() => choose(steps[step].key, o.v)}>
                <span className="fo-emoji">{o.emoji}</span>
                <span className="fo-title">{o.title}</span>
                <span className="fo-sub">{o.sub}</span>
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="mono" style={{ marginTop: 20, color: "var(--fg-3)", background: "none" }}>
              ← back
            </button>
          )}
        </div>
      ) : (
        <div>
          <div className="sec-no" style={{ marginBottom: 10 }}>Your match</div>
          <h3 style={{ fontSize: "clamp(24px,3vw,34px)", marginBottom: 8 }}>
            Start with <span style={{ color: "var(--leaf-vivid)" }}>{rec.category}</span>.
          </h3>
          <p style={{ color: "var(--fg-2)", maxWidth: 520, marginBottom: 22 }}>{rec.blurb}</p>
          <div className="finder-result-card">
            <div style={{ fontSize: 40 }}>🦎</div>
            <div>
              <div className="mono" style={{ marginBottom: 8 }}>Ask for these on the shelf</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {rec.brands.map((b) => (
                  <span key={b} className="tag tag-leaf" style={{ fontSize: 12 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
            <a className="btn btn-primary btn-lift" href={routeHref("locations")}>Come see us →</a>
            <button className="btn btn-ghost" onClick={reset}>Start over</button>
          </div>
          <p className="mono" style={{ marginTop: 18, color: "var(--fg-3)" }}>21+ · staff will confirm the perfect match in person</p>
        </div>
      )}
    </div>
  );
}

/* ============================= BRAND EXPLORER ============================= */
function BrandExplorer() {
  const brands = [
    { name: "Geek Bar", cat: "Disposables", tags: ["Fruity", "Big puff counts"] },
    { name: "Lost Mary", cat: "Disposables", tags: ["Fruity", "Crowd favorite"] },
    { name: "IVG", cat: "Disposables", tags: ["Dessert", "Bold flavor"] },
    { name: "SKE", cat: "Disposables", tags: ["Cool & minty", "Crystal series"] },
    { name: "Vaporesso", cat: "Mods & kits", tags: ["Reliable", "Beginner-friendly"] },
    { name: "SMOK", cat: "Mods & kits", tags: ["Powerful", "Big clouds"] },
    { name: "OXVA", cat: "Pods & kits", tags: ["Pocket-size", "Refillable"] },
    { name: "Aspire", cat: "Pods & kits", tags: ["Smooth", "Dependable"] },
    { name: "Innokin", cat: "Mods & kits", tags: ["Long battery", "Classic"] },
    { name: "Uwell", cat: "Pods & kits", tags: ["Great coils", "Caliburn"] },
    { name: "The Future", cat: "E-liquid", tags: ["House pick", "Wide range"] },
  ];
  const cats = ["All", "Disposables", "Pods & kits", "Mods & kits", "E-liquid"];
  const [active, setActive] = useStateI("All");
  const shown = active === "All" ? brands : brands.filter((b) => b.cat === active);

  return (
    <div>
      <div className="explorer-filters">
        {cats.map((c) => (
          <button key={c} className={"chip " + (active === c ? "active" : "")} onClick={() => setActive(c)}>
            {c}
            {c !== "All" && <span style={{ opacity: 0.6, marginLeft: 6 }}>{brands.filter((b) => b.cat === c).length}</span>}
          </button>
        ))}
      </div>
      <div className="explorer-grid">
        {shown.map((b) => (
          <div key={b.name} className="brand-card">
            <div>
              <div className="bc-name">{b.name}</div>
              <div className="bc-cat mono" style={{ color: "var(--leaf-vivid)" }}>{b.cat}</div>
            </div>
            <div className="bc-tags">
              {b.tags.map((t) => <span key={t} className="bc-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <p className="mono" style={{ marginTop: 20, color: "var(--fg-3)" }}>
        Stock rotates weekly — call {`(636) 638-2111`} to confirm a specific flavor.
      </p>
    </div>
  );
}

Object.assign(window, { VapeFinder, BrandExplorer });
