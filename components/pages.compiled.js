// About, Locations, Rewards, FAQ, Contact

function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Our story \xB7 Est. 2013"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 28
    }
  }, "Thirteen years of being ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--leaf)",
      fontStyle: "italic"
    }
  }, "the vape shop"), " Jefferson County actually trusts."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--fg-2)",
      lineHeight: 1.6,
      maxWidth: 720
    }
  }, "Greenhouse Vapes opened in 2013 in Hillsboro with a simple idea: build a vape shop that treated people like neighbors, stocked the good stuff, and didn't try to upsell you on things you didn't need. Thirteen years later, we're still running on that idea \u2014 now in De Soto and Festus.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(AboutChapter, {
    year: "2013",
    title: "Opened in Hillsboro.",
    body: "We started with one small storefront, a tight selection, and the belief that a friendly shop beats a flashy one. Word got around Jefferson County fast \u2014 turns out people really do appreciate being treated well."
  }), /*#__PURE__*/React.createElement(AboutChapter, {
    year: "Next",
    title: "Expanded to De Soto.",
    body: "Customers kept asking for a shop closer to Main Street De Soto \u2014 same prices, same staff energy, same lineup. So we built it, and it\u2019s been our anchor ever since."
  }), /*#__PURE__*/React.createElement(AboutChapter, {
    year: "Now",
    title: "Festus joined the family.",
    body: "Our newest storefront. Same full lineup, same meet-or-beat pricing, same people who actually know the products. Hillsboro has since closed \u2014 these are the two shops today."
  }), /*#__PURE__*/React.createElement(AboutChapter, {
    year: "Always",
    title: "Meet-or-beat pricing.",
    body: "Bring in a competitor's price on any product we carry. We'll match it or beat it \u2014 no forms, no haggling. That's the deal."
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-soft)",
      paddingTop: 64,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Stat2, {
    n: "13",
    label: "Years serving Jefferson County"
  }), /*#__PURE__*/React.createElement(Stat2, {
    n: "2",
    label: "Storefronts \xB7 Festus + De Soto"
  }), /*#__PURE__*/React.createElement(Stat2, {
    n: "18+",
    label: "Brands carried across every category"
  }), /*#__PURE__*/React.createElement(Stat2, {
    n: "300+",
    label: "Flavors tracked across both shops"
  })))));
}
function AboutChapter({
  year,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--leaf)",
      paddingTop: 6
    }
  }, year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)",
      fontSize: 16
    }
  }, body)));
}
function Stat2({
  n,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--serif)",
      fontSize: 72,
      fontWeight: 400,
      color: "var(--leaf)",
      lineHeight: 1,
      letterSpacing: "-0.04em",
      fontVariationSettings: '"opsz" 144, "SOFT" 30'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: 14,
      maxWidth: 180
    }
  }, label));
}

// -------------------- LOCATIONS --------------------

function Locations() {
  const locs = [{
    city: "Festus",
    addr: "38 E Main St, Festus, MO 63028",
    mapQ: "Greenhouse Vapes, 38 E Main St, Festus, MO 63028",
    phone: "(636) 638-2111",
    hours: [["Sunday", "10:00a – 8:00p"], ["Monday", "10:00a – 8:00p"], ["Tuesday", "10:00a – 8:00p"], ["Wednesday", "10:00a – 8:00p"], ["Thursday", "10:00a – 8:00p"], ["Friday", "10:00a – 9:00p"], ["Saturday", "10:00a – 9:00p"]],
    seo: "Festus vape shop · Jefferson County, MO"
  }, {
    city: "De Soto",
    addr: "418 S Main St, De Soto, MO 63020",
    mapQ: "Greenhouse Vapes, 418 S Main St, De Soto, MO 63020",
    phone: "(636) 638-2111",
    hours: [["Sunday", "10:00a – 8:00p"], ["Monday", "10:00a – 8:00p"], ["Tuesday", "10:00a – 8:00p"], ["Wednesday", "10:00a – 8:00p"], ["Thursday", "10:00a – 8:00p"], ["Friday", "10:00a – 9:00p"], ["Saturday", "10:00a – 9:00p"]],
    seo: "De Soto vape shop · Jefferson County, MO"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Two locations \xB7 Open seven days a week"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 28
    }
  }, "Find the ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--leaf)",
      fontStyle: "italic"
    }
  }, "Greenhouse"), " nearest you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "Both stores are fully stocked and staffed. Whether you're in Festus, De Soto, Hillsboro, Crystal City, or anywhere in Jefferson County \u2014 one of our shops is a short drive.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 40
    }
  }, locs.map(l => /*#__PURE__*/React.createElement(LocationCard, {
    key: l.city,
    loc: l
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "48px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Also serving"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 18,
      maxWidth: 720,
      margin: "0 auto 18px"
    }
  }, "Driving from Hillsboro, Crystal City, Herculaneum, Arnold, Imperial, or Pevely?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)",
      maxWidth: 560,
      margin: "0 auto"
    }
  }, "We're the closest locally-owned vape shop to most of Jefferson County \u2014 usually a 10\u201320 minute drive. Give us a call before you head out and we'll confirm stock.")))));
}
function LocationCard({
  loc
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr"
    },
    className: "loc-card-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "44px 44px",
      borderRight: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14,
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 48
    }
  }, loc.city), /*#__PURE__*/React.createElement(StoreStatusTag, null)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--fg-3)",
      marginBottom: 28
    }
  }, loc.seo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      paddingTop: 24,
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 6
    }
  }, "Address"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15
    }
  }, loc.addr)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 6
    }
  }, "Phone"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15
    }
  }, loc.phone))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(loc.mapQ),
    target: "_blank",
    rel: "noopener"
  }, "Get directions"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "tel:" + loc.phone
  }, "Call store"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 18
    }
  }, "Hours"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, loc.hours.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid var(--line-soft)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-2)"
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--fg)",
      fontSize: 13
    }
  }, h))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40
    }
  }, /*#__PURE__*/React.createElement(StoreMap, {
    query: loc.mapQ,
    label: loc.city + ", MO",
    height: 220,
    rounded: true
  })))));
}

// -------------------- REWARDS --------------------

function Rewards() {
  const steps = [{
    n: "01",
    title: "Pick up a card.",
    body: "Ask the cashier for a Greenhouse punch card on your next visit. Free, no sign-up form, no app to download."
  }, {
    n: "02",
    title: "Get a stamp each visit.",
    body: "One stamp per qualifying purchase at either location. Keep the card in your wallet and bring it with you."
  }, {
    n: "03",
    title: "Sixth visit = discount.",
    body: "Fill up five stamps, and your sixth visit earns you a discount at the register. Then we start a fresh card."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Loyalty program \xB7 Free to join"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 28
    }
  }, "Six visits. One reward. ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--leaf)",
      fontStyle: "italic"
    }
  }, "No app required.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "Our punch card rewards you for doing what you were going to do anyway \u2014 stop by Greenhouse. Five stamps on the card, and your sixth visit comes with a discount at the register."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: routeHref("locations")
  }, "Pick up a card at either store \u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 20,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PunchCardVisual, null))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "Three steps. No fine print.")), /*#__PURE__*/React.createElement("p", null, "No app to download, no phone number to give out, no email list to dodge. Just a card, a stamp, and a reward.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 24
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "card",
    style: {
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--leaf)",
      marginBottom: 24
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginBottom: 12
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)",
      fontSize: 15
    }
  }, s.body)))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "48px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(RewardFact, {
    n: "5",
    l: "Stamps to fill a card"
  }), /*#__PURE__*/React.createElement(RewardFact, {
    n: "6th",
    l: "Visit earns the discount"
  }), /*#__PURE__*/React.createElement(RewardFact, {
    n: "2",
    l: "Locations \xB7 stamps count at both"
  }), /*#__PURE__*/React.createElement(RewardFact, {
    n: "$0",
    l: "Cost to join"
  }))))));
}
function PunchCardVisual() {
  const [filled, setFilled] = React.useState(3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 48,
      alignItems: "center"
    },
    className: "rewards-visual-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, var(--bg-3), var(--bg-2))",
      border: "1.5px dashed color-mix(in oklch, var(--leaf) 45%, transparent)",
      borderRadius: "var(--radius-lg)",
      padding: "40px 44px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 28,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "logomark-text",
    style: {
      fontSize: 22
    }
  }, "Greenhouse", /*#__PURE__*/React.createElement("span", null, ".")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: 4,
      color: "var(--fg-3)"
    }
  }, "Loyalty card \xB7 festus + de soto")), /*#__PURE__*/React.createElement("div", {
    className: "tag tag-leaf"
  }, "Keep me in your wallet")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 14
    }
  }, [0, 1, 2, 3, 4, 5].map(i => {
    const isFilled = i < filled;
    const isReward = i === 5;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setFilled(i === filled ? i : i + 1),
      style: {
        aspectRatio: "1",
        borderRadius: "50%",
        border: isReward ? "2px solid var(--leaf)" : "1.5px solid var(--line)",
        background: isFilled ? isReward ? "var(--leaf)" : "color-mix(in oklch, var(--leaf) 85%, transparent)" : "transparent",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        transition: "all 0.2s",
        position: "relative"
      },
      "aria-label": "Stamp " + (i + 1)
    }, isFilled ? isReward ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        color: "var(--bg)"
      }
    }, "\u2605") : /*#__PURE__*/React.createElement("svg", {
      width: "55%",
      height: "55%",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2 C7 6, 4 12, 12 22 C20 12, 17 6, 12 2 Z",
      fill: "var(--bg)"
    })) : /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10,
        color: "var(--fg-3)"
      }
    }, i + 1), isReward && !isFilled && /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        position: "absolute",
        top: "-22px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "var(--leaf)",
        fontSize: 9,
        whiteSpace: "nowrap"
      }
    }, "Reward"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: 22,
      color: "var(--fg-3)",
      textAlign: "center"
    }
  }, "Tap a stamp to preview")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Your card, visualized"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 16,
      fontSize: 26
    }
  }, "Five stamps, then the sixth visit is on us."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)",
      fontSize: 15.5
    }
  }, "That's the whole program. One stamp per visit, five visits to fill the card, discount on the sixth. Stamps earned at either store count toward the same card.")));
}
function RewardFact({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--serif)",
      fontSize: 48,
      color: "var(--leaf)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
      fontVariationSettings: '"opsz" 144'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: 10
    }
  }, l));
}

// -------------------- FAQ --------------------

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const faqs = [{
    q: "What's the legal age to buy vape products in Missouri?",
    a: "You must be 21 or older to purchase any nicotine-containing vape product in Missouri. We card everyone under 35 without exception — bring a valid government-issued ID."
  }, {
    q: "Do you really price-match other vape shops?",
    a: "Yes. If another Jefferson County vape shop (or an online retailer) is selling an identical product for less, show us — in person, on your phone, anything — and we'll match or beat that price. No paperwork, no delays."
  }, {
    q: "What brands of disposables do you stock?",
    a: "Our regular rotation includes Foger Switch Pro, Geek Bar (Pulse 2 25K, Pulse X2 50K and MATE 60K), Lost Mary (Nera 70K and MT35K Turbo), Off Stamp X-Cube, and iJoy. Individual flavor availability changes weekly as new drops land. Call either store and we'll tell you exactly what's on the shelf right now."
  }, {
    q: "Do you carry coils and pods for devices I bought elsewhere?",
    a: "Almost always. We keep coils and pods for every device we sell plus most popular devices we don't — Vaporesso, GeekVape, SMOK, OXVA, VooPoo, FreeMax, and more. If we don't have your coil in stock, we'll order it."
  }, {
    q: "How does the Greenhouse rewards program work?",
    a: "We run an old-school punch card. Ask the cashier for one on your next visit — no app, no sign-up. Each qualifying purchase earns a stamp. Fill five stamps, and your sixth visit comes with a discount at the register. Stamps count at both our Festus and De Soto locations."
  }, {
    q: "Which Greenhouse location is closer to me?",
    a: "If you're coming from Crystal City, Herculaneum, Pevely, or Arnold, Festus is likely closer. From Hillsboro, Cedar Hill, or points south, De Soto is usually the easier drive. Both carry the full lineup."
  }, {
    q: "Do you sell online or ship products?",
    a: "Not currently. We're an in-store-only shop, which lets us keep prices lower and give you actual face-to-face recommendations. Both stores are open seven days a week."
  }, {
    q: "Can I trade in my old device?",
    a: "We don't do formal trade-ins, but staff will happily give you honest advice on whether your current device is worth keeping or if an upgrade makes sense. No pressure either way."
  }, {
    q: "Are you hiring?",
    a: "Occasionally. We hire people who already vape and love talking about it. If that's you, swing by either store and introduce yourself."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Frequently asked"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 28
    }
  }, "Questions we ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--leaf)",
      fontStyle: "italic"
    }
  }, "actually"), " get asked."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "Pulled from the real conversations happening at our counter. If yours isn't here, give us a call or stop in \u2014 we love answering questions.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: "0 auto"
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: i === 0 ? "1px solid var(--line-soft)" : undefined,
      borderBottom: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      textAlign: "left",
      padding: "28px 0",
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 6
    }
  }, "Q \xB7 0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--serif)",
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      color: "var(--fg)",
      fontVariationSettings: '"opsz" 72'
    }
  }, f.q)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "1px solid var(--line)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      color: "var(--leaf)",
      transform: open === i ? "rotate(45deg)" : "rotate(0)",
      transition: "transform 0.3s ease"
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open === i ? 400 : 0,
      overflow: "hidden",
      transition: "max-height 0.4s ease, padding 0.3s ease",
      paddingBottom: open === i ? 32 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      color: "var(--fg-2)",
      fontSize: 16.5,
      lineHeight: 1.65
    }
  }, f.a))))))));
}

// -------------------- CONTACT --------------------

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 28
    }
  }, "Questions? Stock checks? Just saying hi?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "The fastest way to reach us is to call either store directly. We'll also respond to messages here \u2014 usually within a business day.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 40,
      alignItems: "start"
    },
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 24
    }
  }, "Reach the shop"), /*#__PURE__*/React.createElement(ContactRow, {
    label: "Festus store",
    value: "(636) 638-2111",
    href: "tel:6366382111"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    label: "De Soto store",
    value: "(636) 638-2111",
    href: "tel:6366382111"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    label: "Email",
    value: "support@greenhousevapes.com",
    href: "mailto:support@greenhousevapes.com"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    label: "Instagram",
    value: "@thegreenhousevapes",
    href: "https://www.instagram.com/thegreenhousevapes/"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    label: "Facebook",
    value: "Greenhouse Vapes",
    href: "https://www.facebook.com/greenhousevapes",
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 40
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "color-mix(in oklch, var(--leaf) 20%, transparent)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 20px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12 L10 17 L19 7",
    stroke: "var(--leaf)",
    strokeWidth: "2.5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 10
    }
  }, "Message sent."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-2)"
    }
  }, "We'll get back to you within one business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: async e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      setError("");
      setSending(true);
      try {
        const r = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: fd.get("name") || "",
            contact: fd.get("contact") || "",
            store: fd.get("store") || "",
            message: fd.get("message") || "",
            company: fd.get("company") || ""
          })
        });
        if (!r.ok) throw new Error(String(r.status));
        setSent(true);
      } catch (err) {
        setError("That didn't go through. Please call the shop at (636) 638-2111, or email support@greenhousevapes.com.");
      } finally {
        setSending(false);
      }
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 24
    }
  }, "Send us a note"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "company",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-9999px",
      width: 1,
      height: 1,
      opacity: 0
    }
  }), error && /*#__PURE__*/React.createElement("p", {
    role: "alert",
    style: {
      color: "var(--danger)",
      fontSize: 14,
      marginBottom: 16
    }
  }, error), /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    name: "name",
    required: true,
    placeholder: "Jane Smith"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email or phone",
    name: "contact",
    required: true,
    placeholder: "jane@example.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Which store?",
    name: "store",
    select: true,
    options: ["Either / doesn't matter", "Festus", "De Soto"]
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    name: "message",
    required: true,
    textarea: true,
    placeholder: "What's up?"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sending,
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 8,
      opacity: sending ? 0.6 : 1
    }
  }, sending ? "Sending…" : "Send message →")))))));
}
function ContactRow({
  label,
  value,
  href,
  last
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      borderBottom: last ? "none" : "1px solid var(--line-soft)",
      transition: "color 0.15s"
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector(".v").style.color = "var(--leaf)";
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector(".v").style.color = "var(--fg)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      fontFamily: "var(--serif)",
      fontSize: 20,
      fontVariationSettings: '"opsz" 72',
      transition: "color 0.15s"
    }
  }, value));
}
function Field({
  label,
  name,
  placeholder,
  textarea,
  select,
  options,
  required
}) {
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
    outline: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--mono)",
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 8
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    name: name,
    required: required,
    placeholder: placeholder,
    style: baseStyle,
    onFocus: e => e.currentTarget.style.borderColor = "var(--leaf)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--line-soft)"
  }) : select ? /*#__PURE__*/React.createElement("select", {
    name: name,
    style: baseStyle,
    onFocus: e => e.currentTarget.style.borderColor = "var(--leaf)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--line-soft)"
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))) : /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: name,
    required: required,
    placeholder: placeholder,
    style: baseStyle,
    onFocus: e => e.currentTarget.style.borderColor = "var(--leaf)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--line-soft)"
  }));
}
Object.assign(window, {
  About,
  Locations,
  Rewards,
  FAQ,
  Contact
});

/* ----------------------------- PRODUCTS -----------------------------
   The full lineup, taken from the shop's master order sheet.
   Deliberately a dense text list rather than a card grid: on a phone,
   23 cards at 150px each is 3,500px of dead scroll. Grouped rows stay
   scannable at any width and give search engines real product copy.
   Customer-facing facts only - no vendors, SKUs or cost figures.
--------------------------------------------------------------------- */
const CATALOG = [{
  cat: "Disposables",
  blurb: "The biggest part of our shelf, and the fastest way to try something new. Around 180 flavors across both shops, restocked weekly.",
  brands: [{
    name: "Foger",
    lines: "Switch Pro pods, kits and batteries",
    note: "Our best seller"
  }, {
    name: "Geek Bar",
    lines: "Pulse 2 25K · Pulse X2 50K · MATE 60K"
  }, {
    name: "Lost Mary",
    lines: "Nera Fullview 70K · MT35K Turbo · MT35000"
  }, {
    name: "Off Stamp",
    lines: "X-Cube · X-Cube Crystal"
  }, {
    name: "iJoy",
    lines: "XP50K",
    note: "Zero-nicotine option"
  }]
}, {
  cat: "Devices & kits",
  blurb: "Refillable setups that cost less over time. Tell us how you vape now and we'll set the whole thing up before you leave.",
  brands: [{
    name: "Vaporesso",
    lines: "XROS 5 · XROS 5 Mini · XROS Pro 2 · XROS 6 Mini · XROS 4 Nano",
    note: "Easiest starting point"
  }, {
    name: "GeekVape",
    lines: "Aegis Legend 5 · Aegis Hero 5 · Aegis Solo 3 · Aegis Mini 5",
    note: "Built to survive a job site"
  }, {
    name: "SMOK",
    lines: "Novo 6 · TFV18 sub-ohm tank"
  }, {
    name: "FreeMax",
    lines: "GEMM sub-ohm tanks"
  }, {
    name: "Innokin",
    lines: "GoMax"
  }, {
    name: "VooPoo",
    lines: "NAVI"
  }, {
    name: "Boulder",
    lines: "Rock · Viridian"
  }]
}, {
  cat: "Pods & coils",
  blurb: "We keep coils and pods for every device we sell, plus most of the popular ones we don't. If yours isn't on the shelf, we'll order it.",
  brands: [{
    name: "Vaporesso",
    lines: "XROS Series Corex 3.0 pods"
  }, {
    name: "GeekVape",
    lines: "M series · P series · Z series · Aegis Boost · H45"
  }, {
    name: "SMOK",
    lines: "RPM · RPM 3 · Novo · Nord 5 · TFV18"
  }, {
    name: "OXVA",
    lines: "Xlim top-fill pods"
  }, {
    name: "VooPoo",
    lines: "PnP-X · PnP-VM5 · PnP-VM6"
  }, {
    name: "FreeMax",
    lines: "Kanthal double mesh"
  }, {
    name: "Boulder",
    lines: "Rock · Viridian pods"
  }]
}, {
  cat: "E-liquid",
  blurb: "Salt and freebase, 30mL through 100mL. Bring your device and we'll match the right nicotine strength to it.",
  brands: [{
    name: "Coastal Clouds",
    lines: "30mL salt · 60mL freebase",
    note: "Widest flavor range we carry"
  }, {
    name: "Juice Head",
    lines: "30mL salt · 100mL freebase"
  }, {
    name: "Monster",
    lines: "Jam Monster · Fruit Monster · Custard Monster"
  }, {
    name: "Candy King",
    lines: "Belts · Gush · Lemon Drops · Peachy Rings · Pink Squares · Sour Straws"
  }, {
    name: "Cloud Nurdz",
    lines: "Fruit blends, salts and iced options"
  }]
}, {
  cat: "Glass",
  blurb: "A full glass case at both shops - water pipes, hand pipes, rigs and the replacement parts that keep them going. Stock rotates constantly, so come look or call and we'll tell you what's in the case today.",
  brands: [{
    name: "Water pipes",
    lines: "Beakers, straight tubes and percolators, in a range of sizes"
  }, {
    name: "Hand pipes",
    lines: "Spoons, chillums and one-hitters"
  }, {
    name: "Bubblers",
    lines: "Hand-held, water-cooled"
  }, {
    name: "Dab rigs",
    lines: "Rigs and quartz"
  }, {
    name: "Parts & extras",
    lines: "Bowls, downstems, ash catchers, screens and cleaner"
  }]
}, {
  cat: "Accessories",
  blurb: "The small things that keep a setup running.",
  brands: [{
    name: "Batteries",
    lines: "IMREN 18650 3000mAh"
  }, {
    name: "Grinders",
    lines: "Human Grade 2.5in 4-piece"
  }]
}];
function Products() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "What we carry"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 28
    }
  }, "Everything on our shelves, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--leaf)",
      fontStyle: "italic"
    }
  }, "honestly"), " listed."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--fg-2)",
      maxWidth: 640
    }
  }, "This is the real lineup at both Festus and De Soto \u2014 around 360 items across five categories, restocked every week. Flavor availability moves fast, so call the shop if you want something specific held.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, CATALOG.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.cat,
    className: "cat-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cat-head"
  }, /*#__PURE__*/React.createElement("h2", null, group.cat), /*#__PURE__*/React.createElement("p", null, group.blurb)), /*#__PURE__*/React.createElement("ul", {
    className: "cat-list"
  }, group.brands.map(b => /*#__PURE__*/React.createElement("li", {
    key: b.name + b.lines
  }, /*#__PURE__*/React.createElement("div", {
    className: "cat-brand"
  }, b.name, b.note && /*#__PURE__*/React.createElement("span", {
    className: "cat-note"
  }, b.note)), /*#__PURE__*/React.createElement("div", {
    className: "cat-lines"
  }, b.lines)))))), /*#__PURE__*/React.createElement("div", {
    className: "cat-foot"
  }, /*#__PURE__*/React.createElement("p", null, "Don't see it? We special-order most things at no extra cost. Call", " ", /*#__PURE__*/React.createElement("a", {
    href: "tel:6366382111"
  }, "(636) 638-2111"), " or", " ", /*#__PURE__*/React.createElement("a", {
    href: routeHref("contact")
  }, "send us a note"), ".")))));
}
Object.assign(window, {
  Products
});
