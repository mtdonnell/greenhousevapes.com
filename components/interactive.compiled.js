// Interactive: Find-your-vape quiz + brand/flavor explorer
const {
  useState: useStateI
} = React;

/* ============================= VAPE FINDER ============================= */
function VapeFinder() {
  const steps = [{
    key: "type",
    q: "What are you after?",
    opts: [{
      v: "disposable",
      emoji: "💨",
      title: "Grab & go",
      sub: "Disposables, ready out of the box"
    }, {
      v: "refillable",
      emoji: "🔋",
      title: "A refillable kit",
      sub: "Pod system or starter device"
    }, {
      v: "juice",
      emoji: "🧪",
      title: "Just the juice",
      sub: "E-liquid for a setup I own"
    }, {
      v: "unsure",
      emoji: "🤔",
      title: "Not sure yet",
      sub: "Point me in a direction"
    }]
  }, {
    key: "flavor",
    q: "Pick a flavor mood.",
    opts: [{
      v: "fruit",
      emoji: "🍓",
      title: "Fruity",
      sub: "Berry, mango, citrus"
    }, {
      v: "ice",
      emoji: "🧊",
      title: "Cool & minty",
      sub: "Menthol, ice, fresh"
    }, {
      v: "dessert",
      emoji: "🍮",
      title: "Sweet & dessert",
      sub: "Custard, candy, bakery"
    }, {
      v: "tobacco",
      emoji: "🍂",
      title: "Classic tobacco",
      sub: "Rich, smooth, familiar"
    }]
  }, {
    key: "nic",
    q: "Nicotine strength?",
    opts: [{
      v: "high",
      emoji: "⚡",
      title: "Higher",
      sub: "Stronger throat hit"
    }, {
      v: "med",
      emoji: "🌗",
      title: "Middle of the road",
      sub: "Balanced"
    }, {
      v: "low",
      emoji: "🍃",
      title: "Lighter",
      sub: "Easy does it"
    }, {
      v: "zero",
      emoji: "0️⃣",
      title: "Zero nicotine",
      sub: "Flavor only"
    }]
  }];
  const [step, setStep] = useStateI(0);
  const [answers, setAnswers] = useStateI({});
  function choose(key, v) {
    const next = {
      ...answers,
      [key]: v
    };
    setAnswers(next);
    if (step < steps.length - 1) setStep(step + 1);else setStep(steps.length); // results
  }
  function reset() {
    setAnswers({});
    setStep(0);
  }
  function recommend() {
    const {
      type,
      flavor,
      nic
    } = answers;
    // Brands we actually stock, per the master order sheet. Recommending a
    // brand we don't carry sends someone to the counter for nothing.
    const flavorBrand = {
      fruit: ["Foger Switch Pro", "Lost Mary Nera", "Geek Bar Pulse"],
      ice: ["Off Stamp X-Cube", "Foger Switch Pro", "Geek Bar Pulse"],
      dessert: ["Custard Monster", "Jam Monster", "Candy King"],
      tobacco: ["Coastal Clouds", "Juice Head", "Vaporesso XROS"]
    }[flavor] || ["Foger Switch Pro", "Geek Bar Pulse", "Lost Mary Nera"];
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
      zero: "Plenty of 0mg options for flavor chasers."
    }[nic] || "";
    return {
      category,
      blurb: blurb + " " + nicLine,
      brands: flavorBrand
    };
  }
  const isResult = step >= steps.length;
  const rec = isResult ? recommend() : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "finder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "finder-progress",
    "aria-hidden": "true"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    className: "finder-pip " + (i < step || isResult ? "done" : "")
  }, /*#__PURE__*/React.createElement("span", null)))), !isResult ? /*#__PURE__*/React.createElement("div", {
    key: step
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-no",
    style: {
      marginBottom: 10
    }
  }, "Step ", step + 1, " of ", steps.length), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(24px,3vw,32px)",
      marginBottom: 22
    }
  }, steps[step].q), /*#__PURE__*/React.createElement("div", {
    className: "finder-opts"
  }, steps[step].opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.v,
    className: "finder-opt",
    onClick: () => choose(steps[step].key, o.v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "fo-emoji"
  }, o.emoji), /*#__PURE__*/React.createElement("span", {
    className: "fo-title"
  }, o.title), /*#__PURE__*/React.createElement("span", {
    className: "fo-sub"
  }, o.sub)))), step > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(step - 1),
    className: "mono",
    style: {
      marginTop: 20,
      color: "var(--fg-3)",
      background: "none"
    }
  }, "\u2190 back")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sec-no",
    style: {
      marginBottom: 10
    }
  }, "Your match"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(24px,3vw,34px)",
      marginBottom: 8
    }
  }, "Start with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--leaf-vivid)"
    }
  }, rec.category), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)",
      maxWidth: 520,
      marginBottom: 22
    }
  }, rec.blurb), /*#__PURE__*/React.createElement("div", {
    className: "finder-result-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40
    }
  }, "\uD83E\uDD8E"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 8
    }
  }, "Ask for these on the shelf"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, rec.brands.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    className: "tag tag-leaf",
    style: {
      fontSize: 12
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lift",
    href: routeHref("locations")
  }, "Come see us \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: reset
  }, "Start over")), /*#__PURE__*/React.createElement("p", {
    className: "mono",
    style: {
      marginTop: 18,
      color: "var(--fg-3)"
    }
  }, "21+ \xB7 staff will confirm the perfect match in person")));
}

/* ============================= BRAND EXPLORER ============================= */
function BrandExplorer() {
  // Taken from the shop's master order sheet, not from memory. Only
  // customer-facing facts belong here: no vendors, SKUs or cost figures.
  // Lines are ordered roughly by how much of each category we actually move.
  const brands = [{
    name: "Foger",
    cat: "Disposables",
    tags: ["Switch Pro", "Our best seller"]
  }, {
    name: "Geek Bar",
    cat: "Disposables",
    tags: ["Pulse 2 25K", "Pulse X2 50K", "MATE 60K"]
  }, {
    name: "Lost Mary",
    cat: "Disposables",
    tags: ["Nera 70K", "MT35K Turbo"]
  }, {
    name: "Off Stamp",
    cat: "Disposables",
    tags: ["X-Cube", "Crystal series"]
  }, {
    name: "iJoy",
    cat: "Disposables",
    tags: ["XP50K", "Zero-nicotine option"]
  }, {
    name: "Vaporesso",
    cat: "Devices & kits",
    tags: ["XROS 5", "XROS Pro 2", "Beginner-friendly"]
  }, {
    name: "GeekVape",
    cat: "Devices & kits",
    tags: ["Aegis Legend 5", "Aegis Hero 5", "Rugged"]
  }, {
    name: "SMOK",
    cat: "Devices & kits",
    tags: ["Novo 6", "TFV18 tank"]
  }, {
    name: "FreeMax",
    cat: "Devices & kits",
    tags: ["GEMM tanks", "Big clouds"]
  }, {
    name: "Innokin",
    cat: "Devices & kits",
    tags: ["GoMax", "Long battery"]
  }, {
    name: "VooPoo",
    cat: "Devices & kits",
    tags: ["NAVI", "Pocket-size"]
  }, {
    name: "Boulder",
    cat: "Devices & kits",
    tags: ["Rock", "Viridian", "Simple to run"]
  }, {
    name: "Vaporesso pods",
    cat: "Pods & coils",
    tags: ["XROS Corex 3.0"]
  }, {
    name: "GeekVape coils",
    cat: "Pods & coils",
    tags: ["M / P / Z series", "Aegis Boost"]
  }, {
    name: "SMOK coils",
    cat: "Pods & coils",
    tags: ["RPM", "Novo", "Nord"]
  }, {
    name: "OXVA",
    cat: "Pods & coils",
    tags: ["Xlim top-fill"]
  }, {
    name: "VooPoo",
    cat: "Pods & coils",
    tags: ["PnP series"]
  }, {
    name: "Coastal Clouds",
    cat: "E-liquid",
    tags: ["Salt & freebase", "Widest range"]
  }, {
    name: "Juice Head",
    cat: "E-liquid",
    tags: ["30mL salt", "100mL freebase"]
  }, {
    name: "Monster",
    cat: "E-liquid",
    tags: ["Jam", "Fruit", "Custard"]
  }, {
    name: "Candy King",
    cat: "E-liquid",
    tags: ["Sweets", "Belts & rings"]
  }, {
    name: "Cloud Nurdz",
    cat: "E-liquid",
    tags: ["Fruit blends", "Iced options"]
  }];
  const cats = ["All", "Disposables", "Devices & kits", "Pods & coils", "E-liquid"];
  const [active, setActive] = useStateI("All");
  const shown = active === "All" ? brands : brands.filter(b => b.cat === active);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "explorer-filters"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "chip " + (active === c ? "active" : ""),
    onClick: () => setActive(c)
  }, c, c !== "All" && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6,
      marginLeft: 6
    }
  }, brands.filter(b => b.cat === c).length)))), /*#__PURE__*/React.createElement("div", {
    className: "explorer-grid"
  }, shown.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.name,
    className: "brand-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bc-name"
  }, b.name), /*#__PURE__*/React.createElement("div", {
    className: "bc-cat mono",
    style: {
      color: "var(--leaf-vivid)"
    }
  }, b.cat)), /*#__PURE__*/React.createElement("div", {
    className: "bc-tags"
  }, b.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "bc-tag"
  }, t)))))), /*#__PURE__*/React.createElement("p", {
    className: "mono",
    style: {
      marginTop: 20,
      color: "var(--fg-3)"
    }
  }, "Stock rotates weekly \u2014 call ", `(636) 638-2111`, " to confirm a specific flavor."));
}
Object.assign(window, {
  VapeFinder,
  BrandExplorer
});
