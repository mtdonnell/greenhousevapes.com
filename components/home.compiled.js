// Home page — "warm & local" redesign
const {
  useState: useStateHome
} = React;

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  // vapor wisps
  const wisps = [{
    left: "-26px",
    vd: "4.2s",
    delay: "0s",
    drift: "-30px"
  }, {
    left: "-10px",
    vd: "5s",
    delay: "0.8s",
    drift: "20px"
  }, {
    left: "6px",
    vd: "3.8s",
    delay: "1.4s",
    drift: "-12px"
  }, {
    left: "20px",
    vd: "4.6s",
    delay: "0.4s",
    drift: "26px"
  }, {
    left: "34px",
    vd: "5.4s",
    delay: "2s",
    drift: "-8px"
  }, {
    left: "-2px",
    vd: "4s",
    delay: "2.6s",
    drift: "14px"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "hero-wrap grain",
    style: {
      paddingTop: "clamp(56px, 12vw, 76px)",
      paddingBottom: "clamp(48px, 9vw, 64px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 20,
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 99,
      background: "var(--leaf-vivid)",
      display: "inline-block"
    }
  }), "Festus & De Soto, Missouri \xB7 since 2013"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 22
    }
  }, "Jefferson County's ", /*#__PURE__*/React.createElement(Squiggle, null, /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--leaf-vivid)",
      fontStyle: "italic",
      fontVariationSettings: '"opsz" 144, "SOFT" 100'
    }
  }, "friendliest")), " vape shop."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18.5,
      color: "var(--fg-2)",
      maxWidth: 500,
      marginBottom: 30,
      lineHeight: 1.55
    }
  }, "Two stocked storefronts run by people who actually live here. Every major brand, honest advice, a punch card that pays off, and we'll meet or beat any price in town."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lift",
    href: routeHref("locations")
  }, "Find your nearest shop"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#finder"
  }, "Help me pick \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginTop: 40,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(HeroTrust, {
    n: "13 yrs",
    l: "locally owned"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 30,
      background: "var(--line)"
    }
  }), /*#__PURE__*/React.createElement(HeroTrust, {
    n: "2",
    l: "MO storefronts"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 30,
      background: "var(--line)"
    }
  }), /*#__PURE__*/React.createElement(HeroTrust, {
    n: "11+",
    l: "brands stocked"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "iguana-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iguana-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iguana-disc"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vapor"
  }, wisps.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      left: w.left,
      "--vd": w.vd,
      "--vdelay": w.delay,
      "--drift": w.drift
    }
  }))), /*#__PURE__*/React.createElement("img", {
    className: "iguana-art",
    src: window.__resources && window.__resources.iguanaHero || "assets/iguana-hero.svg",
    alt: "Iguana mascot illustration for Greenhouse Vapes, a vape shop in Festus and De Soto, Missouri"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-stickers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticker sticker-leaf",
    style: {
      top: "4%",
      left: "2%",
      animationDelay: "0.4s"
    }
  }, "Price-match promise"), /*#__PURE__*/React.createElement("div", {
    className: "sticker",
    style: {
      bottom: "10%",
      right: "-3%",
      animationDelay: "1.2s"
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u2605"), " 6th visit = reward"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-badges-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge-pill badge-pill-leaf"
  }, "Price-match promise"), /*#__PURE__*/React.createElement("span", {
    className: "badge-pill"
  }, /*#__PURE__*/React.createElement("b", null, "\u2605"), " 6th visit = reward"))))));
}
function HeroTrust({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--serif)",
      fontSize: 30,
      fontWeight: 600,
      color: "var(--fg)",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontVariationSettings: '"opsz" 144'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: 5
    }
  }, l));
}

/* --------------------------- ASSURANCES ---------------------------
   Replaces a scrolling marquee. A ticker draws the eye, says four things
   badly, and reads as template furniture; a still, evenly-set row reads as
   a business stating facts. Stillness is the upscale cue here.
   Each item is a claim plus the detail that makes it credible.
------------------------------------------------------------------- */
function Assurances() {
  const items = [{
    label: "Price-match promise",
    detail: "Bring any local price. We meet or beat it."
  }, {
    label: "Thirteen years local",
    detail: "Serving Jefferson County since 2013."
  }, {
    label: "Two stocked shops",
    detail: "Festus and De Soto, open seven days."
  }, {
    label: "Staff who vape",
    detail: "Honest guidance, never an upsell."
  }];
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "Why shop with us",
    style: {
      borderTop: "1px solid var(--line-soft)",
      borderBottom: "1px solid var(--line-soft)",
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "assurances"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "as-label"
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: "as-detail"
  }, it.detail))))));
}

/* ----------------------------- FINDER SECTION ----------------------------- */
function FinderSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "finder",
    className: "grain",
    style: {
      background: "var(--warm-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 48,
      alignItems: "center"
    },
    className: "finder-layout"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "sec-no",
    style: {
      marginBottom: 14
    }
  }, "01 \u2014 Not sure what to grab?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 18
    }
  }, "Let's find your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--leaf-vivid)"
    }
  }, "match"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)",
      fontSize: 16.5,
      maxWidth: 380
    }
  }, "Three quick taps and we'll point you at the right category and a few brands to ask for. No pressure \u2014 the real magic happens at the counter."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(HandArrow, {
    size: 34,
    style: {
      transform: "rotate(18deg)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "try it \u2192"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement(VapeFinder, null)))));
}

/* ----------------------------- EXPLORER (paper) ----------------------------- */
function ExplorerSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "paper grain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "sec-no",
    style: {
      marginBottom: 12
    }
  }, "02 \u2014 On the shelf"), /*#__PURE__*/React.createElement("h2", null, "Browse what we ", /*#__PURE__*/React.createElement(Squiggle, {
    variant: 1
  }, "carry"), ".")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1,
    as: "p"
  }, "Filter by what you're into. Searching \"Geek Bar Festus\" or \"Vaporesso De Soto\"? You're in the right place.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement(BrandExplorer, null))));
}

/* ----------------------------- PROMISE + NOTES ----------------------------- */
function PromiseSection() {
  const promises = [{
    k: "Meet or beat any price",
    b: "Show us a competitor's price on the same product. We match it or go lower — no fine print."
  }, {
    k: "Staff that actually vapes",
    b: "No scripts. Real recommendations from people who use what they sell."
  }, {
    k: "Always stocked",
    b: "Two full stores. If we don't have it, we'll order it."
  }];
  const notes = [{
    q: "Been coming here for years. They remember my flavor and never try to upsell me.",
    by: "Regular · De Soto",
    tilt: "-1.4deg"
  }, {
    q: "Helped me ditch cigarettes with the right starter kit. Patient, kind, no judgment.",
    by: "Customer · Festus",
    tilt: "1.6deg"
  }, {
    q: "Best prices in the county and the punch card actually adds up. My go-to.",
    by: "Local · Jefferson County",
    tilt: "-0.8deg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "grain",
    style: {
      background: "var(--warm-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "sec-no",
    style: {
      marginBottom: 12
    }
  }, "03 \u2014 Why locals stick with us"), /*#__PURE__*/React.createElement("h2", null, "A real shop, run by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--leaf-vivid)"
    }
  }, "real neighbors"), "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 18,
      marginBottom: 48
    }
  }, promises.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.k,
    delay: i + 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 30,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "color-mix(in oklch, var(--leaf-vivid) 18%, transparent)",
      display: "grid",
      placeItems: "center",
      color: "var(--leaf-vivid)"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20
    }
  }, p.k)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)",
      fontSize: 14.5
    }
  }, p.b))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--fg-3)",
      marginBottom: 22,
      textAlign: "center"
    }
  }, "\u2014 what folks tell us \u2014")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 24,
      paddingTop: 8
    }
  }, notes.map((n, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i + 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "note-card",
    style: {
      "--tilt": n.tilt
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "note-pin"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nc-quote"
  }, "\"", n.q, "\""), /*#__PURE__*/React.createElement("div", {
    className: "nc-by"
  }, n.by))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "mono",
    style: {
      textAlign: "center",
      color: "var(--fg-3)",
      marginTop: 26,
      fontSize: 10.5
    }
  }, "Composed from the kind of feedback we hear at the counter"))));
}

/* ----------------------------- LOCATIONS ----------------------------- */
function LocationsPreview() {
  const locs = [{
    name: "Festus",
    addr: "38 E Main St, Festus, MO",
    mapQ: "Greenhouse Vapes, 38 E Main St, Festus, MO 63028",
    hours: "Sun–Thu · 10a–8p",
    hours2: "Fri–Sat · 10a–9p"
  }, {
    name: "De Soto",
    addr: "418 S Main St, De Soto, MO",
    mapQ: "Greenhouse Vapes, 418 S Main St, De Soto, MO 63020",
    hours: "Sun–Thu · 10a–8p",
    hours2: "Fri–Sat · 10a–9p"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "paper grain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "sec-no",
    style: {
      marginBottom: 12
    }
  }, "04 \u2014 Come say hi"), /*#__PURE__*/React.createElement("h2", null, "Two doors, ", /*#__PURE__*/React.createElement(Squiggle, {
    variant: 2
  }, "always open"), ".")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1,
    as: "p"
  }, "Both stores carry the full lineup, seven days a week \u2014 an easy stop whether you're coming from Festus, De Soto, Crystal City, Hillsboro, Pevely, or Arnold.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    },
    className: "locs-grid"
  }, locs.map((l, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l.name,
    delay: i + 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: "hidden",
      background: "var(--warm-bg-2)",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(StoreMap, {
    query: l.mapQ,
    label: l.name + ", MO",
    height: 200
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "var(--fg)"
    }
  }, l.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)",
      fontSize: 18
    }
  }, "\xB7 MO")), /*#__PURE__*/React.createElement(StoreStatusTag, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      paddingTop: 18,
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 6
    }
  }, "Address"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--fg-2)"
    }
  }, l.addr)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 6
    }
  }, "Hours"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--fg-2)"
    }
  }, l.hours), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--fg-3)"
    }
  }, l.hours2))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost btn-lift",
    style: {
      marginTop: 22
    },
    href: routeHref("locations")
  }, "Hours & directions \u2192"))))))));
}

/* ----------------------------- REWARDS PUNCH CARD ----------------------------- */
function RewardsTeaser() {
  const [filled, setFilled] = useStateHome(3);
  return /*#__PURE__*/React.createElement("section", {
    className: "grain",
    style: {
      background: "var(--warm-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--leaf-deep)",
      borderRadius: "var(--radius-lg)",
      padding: "clamp(36px, 5vw, 72px)",
      position: "relative",
      overflow: "hidden",
      border: "1px solid color-mix(in oklch, var(--leaf-vivid) 40%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(60deg, color-mix(in oklch, var(--leaf-vivid) 16%, transparent) 0 1px, transparent 1px 34px)",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 44,
      alignItems: "center"
    },
    className: "rewards-layout"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "sec-no",
    style: {
      color: "oklch(0.96 0.04 130)",
      marginBottom: 14
    }
  }, "05 \u2014 Loyalty, the old-school way"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "oklch(0.98 0.02 130)",
      marginBottom: 16
    }
  }, "Six visits. One reward. No app."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "color-mix(in oklch, white 82%, transparent)",
      fontSize: 17,
      marginBottom: 28,
      maxWidth: 460
    }
  }, "Grab a punch card at the counter. Earn a stamp each visit \u2014 your sixth comes with a discount. Stamps count at both shops."), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-lift",
    style: {
      background: "oklch(0.98 0.02 130)",
      color: "var(--leaf-deep)"
    },
    href: routeHref("rewards")
  }, "How rewards work \u2192")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "oklch(0.99 0.01 120 / 0.12)",
      border: "1px dashed oklch(0.98 0.04 130 / 0.5)",
      borderRadius: "var(--radius)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "oklch(0.96 0.04 130)",
      marginBottom: 14
    }
  }, "tap to preview \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 10
    }
  }, [0, 1, 2, 3, 4, 5].map(i => {
    const on = i < filled,
      reward = i === 5;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setFilled(i === filled ? i : i + 1),
      style: {
        aspectRatio: "1",
        borderRadius: "50%",
        border: reward ? "2px solid oklch(0.98 0.04 130)" : "1.5px solid oklch(0.98 0.04 130 / 0.5)",
        background: on ? reward ? "oklch(0.98 0.04 130)" : "oklch(0.98 0.04 130 / 0.85)" : "transparent",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        transition: "all 0.2s",
        color: "var(--leaf-deep)",
        fontWeight: 700
      },
      "aria-label": "Stamp " + (i + 1)
    }, on ? reward ? "★" : "✓" : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "oklch(0.98 0.04 130 / 0.5)",
        fontSize: 11
      }
    }, i + 1));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "oklch(0.96 0.04 130 / 0.8)",
      marginTop: 16,
      textAlign: "center",
      fontSize: 10
    }
  }, "5 stamps \u2192 6th visit reward")))))));
}
function Home() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Assurances, null), /*#__PURE__*/React.createElement(FinderSection, null), /*#__PURE__*/React.createElement(ExplorerSection, null), /*#__PURE__*/React.createElement(PromiseSection, null), /*#__PURE__*/React.createElement(LocationsPreview, null), /*#__PURE__*/React.createElement(RewardsTeaser, null));
}
Object.assign(window, {
  Home
});
