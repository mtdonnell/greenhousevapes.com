const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "neon"
} /*EDITMODE-END*/;

// Route map — every page is a real, separate, crawlable HTML file that shares this
// same JS/CSS bundle. Each file sets window.__ROUTE__ before loading this script.
window.__ROUTES__ = {
  home: "/",
  products: "/products",
  festus: "/festus",
  desoto: "/de-soto",
  about: "/about",
  locations: "/locations",
  rewards: "/rewards",
  faq: "/faq",
  contact: "/contact"
};

function App() {
  const [ageOk, setAgeOk] = React.useState(() => localStorage.getItem("ghv_age21") === "1");
  const [theme, setTheme] = React.useState(TWEAK_DEFAULTS.theme);
  const route = window.__ROUTE__ || "home";

  React.useEffect(() => {
    if (theme === "botanical") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const acceptAge = () => {
    localStorage.setItem("ghv_age21", "1");
    setAgeOk(true);
  };

  return /*#__PURE__*/React.createElement(
    React.Fragment,
    null,
    !ageOk && /*#__PURE__*/React.createElement(AgeGate, { onAccept: acceptAge }),
    /*#__PURE__*/React.createElement(Nav, { route: route }),
    /*#__PURE__*/React.createElement(
      "main",
      { className: "fade-up" },
      route === "home" && /*#__PURE__*/React.createElement(Home, null),
    route === "products" && /*#__PURE__*/React.createElement(Products, null),
    route === "festus" && /*#__PURE__*/React.createElement(Festus, null),
    route === "desoto" && /*#__PURE__*/React.createElement(DeSoto, null),
      route === "about" && /*#__PURE__*/React.createElement(About, null),
      route === "locations" && /*#__PURE__*/React.createElement(Locations, null),
      route === "rewards" && /*#__PURE__*/React.createElement(Rewards, null),
      route === "faq" && /*#__PURE__*/React.createElement(FAQ, null),
      route === "contact" && /*#__PURE__*/React.createElement(Contact, null)
    ),
    /*#__PURE__*/React.createElement(Footer, null),
    /*#__PURE__*/React.createElement(Tweaks, { theme: theme, setTheme: setTheme })
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
