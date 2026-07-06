/* @ds-bundle: {"format":4,"namespace":"DesignSystem_176d4c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a187d116b5ec","components/core/Button.jsx":"c9478d40f13e","components/core/Callout.jsx":"260978d1e078","components/core/Card.jsx":"50e106bc6d07","components/core/Icon.jsx":"bf69a9ab81fe","components/core/Input.jsx":"b545f447afed","components/core/Stat.jsx":"109ac7dc642d","components/core/Tag.jsx":"de8d36a1fe51","ui_kits/website/App.jsx":"2c8c16f68ebc","ui_kits/website/Contact.jsx":"638c018e3d57","ui_kits/website/DirectionPage.jsx":"17a1419ac3e8","ui_kits/website/Directions.jsx":"900e7a4a2244","ui_kits/website/Hero.jsx":"8ccb4874c315","ui_kits/website/Metrics.jsx":"ad4492d6188c","ui_kits/website/SiteFooter.jsx":"40c179681c78","ui_kits/website/SiteHeader.jsx":"e2f17008e360"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_176d4c = window.DesignSystem_176d4c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Badge — small status/label marker.
 * tones: blue (default/info), neutral (secondary), alert (rose, problems only).
 */
function Badge({
  children,
  tone = "blue",
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      background: "var(--fill-blue)",
      color: "var(--blue)",
      border: "1px solid var(--blue)"
    },
    neutral: {
      background: "var(--fill-faint)",
      color: "var(--text-2)",
      border: "1px solid var(--hairline)"
    },
    alert: {
      background: "rgba(201,122,142,0.14)",
      color: "var(--alert-text)",
      border: "1px solid var(--alert-stripe)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      lineHeight: 1,
      borderRadius: "var(--radius-sm)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Button — primary / secondary / ghost actions.
 * Color is functional: primary blue means "the main action here".
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13
    },
    md: {
      padding: "12px 24px",
      fontSize: 15
    },
    lg: {
      padding: "16px 32px",
      fontSize: 17
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--blue)",
      color: "#FFFFFF",
      boxShadow: "0 6px 18px rgba(28,107,176,0.28)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-1)",
      borderColor: "var(--hairline-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--blue)"
    }
  };
  const hover = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--blue-light)" : "var(--blue)";
    },
    secondary: (e, on) => {
      e.currentTarget.style.borderColor = on ? "var(--blue)" : "var(--hairline-strong)";
      e.currentTarget.style.color = on ? "var(--blue-light)" : "var(--text-1)";
    },
    ghost: (e, on) => {
      e.currentTarget.style.color = on ? "var(--blue-deep)" : "var(--blue)";
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => !disabled && hover[variant](e, true),
    onMouseLeave: e => !disabled && hover[variant](e, false)
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    },
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Callout — translucent blue strip, blue border, icon + single line.
 * One concise line of text. For a longer note, use a Card.
 */
function Callout({
  children,
  icon = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "14px 20px",
      borderRadius: "var(--radius-md)",
      background: "var(--fill-blue)",
      border: "1px solid var(--blue)",
      color: "var(--text-1)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--blue-light)",
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Card — matte panel with vertical gradient and hairline border.
 * variant "active" adds a blue border + glow; "alert" switches to the rose
 * pain palette with a left edge stripe (use ONLY for risks/problems).
 */
function Card({
  children,
  variant = "default",
  padding = "var(--space-5)",
  style = {},
  ...rest
}) {
  const base = {
    position: "relative",
    borderRadius: "var(--radius-lg)",
    padding,
    background: "var(--gradient-panel)",
    border: "1px solid var(--hairline)",
    boxShadow: "var(--shadow-md)",
    color: "var(--text-1)",
    overflow: "hidden"
  };
  const variants = {
    default: {},
    active: {
      background: "var(--gradient-panel-active)",
      border: "1.5px solid var(--blue)",
      boxShadow: "var(--shadow-md), var(--glow-soft)"
    },
    alert: {
      background: "var(--gradient-alert)",
      borderColor: "rgba(201,122,142,0.28)",
      borderLeft: "3px solid var(--alert-stripe)",
      color: "var(--alert-text)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Icon — thin line glyph from Lucide (loaded via CDN).
 * Brand icons are thin-stroke, no fill, simple geometry, blue by default.
 * Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@latest"></script>
 */
function Icon({
  name,
  size = 20,
  stroke = "var(--blue-light)",
  strokeWidth = 1.6,
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined" || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    try {
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          "stroke-width": strokeWidth
        },
        nameAttr: "data-lucide"
      });
    } catch (e) {/* lucide not ready */}
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: "inline-flex",
      color: stroke,
      width: size,
      height: size,
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Input — dark field with hairline border; blue border on focus.
 */
function Input({
  label = null,
  hint = null,
  id,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "var(--space-2)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.04em",
      color: "var(--text-2)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      padding: "12px 16px",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-1)",
      background: "#FFFFFF",
      border: `1px solid ${focus ? "var(--blue)" : "var(--hairline)"}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px rgba(75,159,213,0.18)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: 12,
      color: "var(--text-3)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Stat — oversized numeric metric dominant over its label.
 * Numbers are concrete; the numeral is light blue and dominant.
 */
function Stat({
  value,
  label,
  sublabel = null,
  align = "left",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(48px, 6vw, 88px)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-hero)",
      color: "var(--blue)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-2)"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-1)",
      fontSize: 13,
      color: "var(--text-3)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Акметрон Tag — full-pill chip with faint fill and hairline border.
 * Use for categories, filters, and short metadata.
 */
function Tag({
  children,
  active = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "6px 14px",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      background: active ? "var(--fill-blue)" : "var(--fill-faint)",
      border: `1px solid ${active ? "var(--blue)" : "var(--hairline)"}`,
      color: active ? "var(--blue)" : "var(--text-2)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Акметрон marketing site — App orchestrator
function App() {
  const [view, setView] = React.useState("home");
  const onNav = v => {
    setView(v);
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  const {
    Hero,
    Directions,
    Metrics,
    Contact,
    DirectionPage
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(window.SiteHeader, {
    onNav: onNav,
    view: view
  }), /*#__PURE__*/React.createElement("main", {
    key: view,
    style: {
      animation: "akm-enter 600ms var(--ease-out) both"
    }
  }, view === "home" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Directions, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Metrics, null)), view === "direction" && /*#__PURE__*/React.createElement(DirectionPage, {
    onNav: onNav
  }), view === "contact" && /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(window.SiteFooter, null));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// Акметрон — contact / request form
function Contact() {
  const {
    Card,
    Input,
    Button,
    Icon,
    Callout
  } = window.DesignSystem_176d4c;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 48px",
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "akm-eyebrow"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0440\u0430\u0441\u0447\u0451\u0442"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: "-0.02em",
      marginTop: "var(--space-3)"
    }
  }, "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 \u2014 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--text-2)",
      marginTop: "var(--space-4)",
      maxWidth: 420
    }
  }, "\u041F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F. \u0411\u0435\u0437 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432 \u2014 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0441 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u0430\u043C\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    })
  }, "+7 495 000-00-00 \xB7 \u043F\u043D\u2013\u043F\u0442, 9:00\u201318:00"), /*#__PURE__*/React.createElement(Callout, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  }, "info@akmetron.ru"))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 48
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 24,
      marginTop: "var(--space-3)"
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-2)",
      marginTop: "var(--space-2)"
    }
  }, "\u0421\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.ru",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0417\u0430\u0434\u0430\u0447\u0430",
    placeholder: "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0438\u0437\u043C\u0435\u0440\u0438\u0442\u044C \u0438\u043B\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      width: "100%"
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-3)",
      textAlign: "center"
    }
  }, "\u0420\u0430\u0441\u0447\u0451\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u2014 \u043C\u0435\u043D\u0435\u0435 \u0447\u0435\u043C \u0437\u0430 1 \u0447\u0430\u0441")))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DirectionPage.jsx
try { (() => {
// Акметрон — a single direction detail page (Телеком)
function DirectionPage({
  onNav
}) {
  const {
    Card,
    Tag,
    Badge,
    Button,
    Stat,
    Icon,
    Callout
  } = window.DesignSystem_176d4c;
  const products = [{
    name: "Анализатор спектра АКМ-С67",
    range: "9 кГц – 67 ГГц",
    badge: "Новинка"
  }, {
    name: "Векторный анализатор цепей АКМ-VNA",
    range: "10 МГц – 40 ГГц",
    badge: null
  }, {
    name: "Генератор сигналов АКМ-SG",
    range: "до 20 ГГц",
    badge: null
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "72px 48px 56px",
      background: "var(--gradient-panel)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/puzzle-pattern.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "40%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top right",
      opacity: 0.4,
      WebkitMaskImage: "linear-gradient(to left, #000 5%, transparent 90%)",
      maskImage: "linear-gradient(to left, #000 5%, transparent 90%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("home"),
    style: {
      background: "none",
      border: "none",
      color: "var(--text-2)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16,
    stroke: "var(--text-2)"
  }), " \u0412\u0441\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akm-eyebrow"
  }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 01"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 56,
      letterSpacing: "-0.03em",
      marginTop: "var(--space-2)"
    }
  }, "\u0422\u0435\u043B\u0435\u043A\u043E\u043C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 19,
      lineHeight: 1.5,
      color: "var(--text-2)",
      maxWidth: 560,
      marginTop: "var(--space-3)"
    }
  }, "\u0418\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0440\u0430\u043A\u0442 \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439: \u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u044B \u0441\u043F\u0435\u043A\u0442\u0440\u0430 \u0438 \u0446\u0435\u043F\u0435\u0439, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u0441\u0438\u0433\u043D\u0430\u043B\u043E\u0432, \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0421\u0412\u0427-\u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 48px",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "67 \u0413\u0413\u0446",
    label: "\u0412\u0435\u0440\u0445\u043D\u044F\u044F \u0433\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "0,1 \u0434\u0411",
    label: "\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u043F\u043E \u0443\u0440\u043E\u0432\u043D\u044E"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "<1 \u0447",
    label: "\u041F\u043E\u0434\u0431\u043E\u0440 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 28,
      marginBottom: "var(--space-4)"
    }
  }, "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "var(--space-4)",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      padding: 12,
      borderRadius: "var(--radius-md)",
      background: "var(--fill-blue)",
      border: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "radio",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18
    }
  }, p.name), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, p.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-2)"
    }
  }, "\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \xB7 ", p.range))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNav("contact")
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "alert",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "\u0420\u0438\u0441\u043A \u0438\u043C\u043F\u043E\u0440\u0442\u043E\u0437\u0430\u043C\u0435\u0449\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      marginTop: "var(--space-2)"
    }
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432 \u2014 \u0441\u0440\u043E\u043A\u0438 \u0434\u043E 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432. \u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043E\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0430\u043D\u0430\u043B\u043E\u0433\u0438 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 18
    })
  }, "\u041D\u0443\u0436\u043D\u0430 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F? \u0420\u0430\u0441\u0447\u0451\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u2014 \u043C\u0435\u043D\u0435\u0435 \u0447\u0435\u043C \u0437\u0430 1 \u0447\u0430\u0441"))));
}
Object.assign(window, {
  DirectionPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DirectionPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Directions.jsx
try { (() => {
// Акметрон — the seven business directions
const AKM_DIRECTIONS = [{
  icon: "radio",
  title: "Телеком",
  desc: "Измерения для телекоммуникаций — анализаторы спектра и цепей."
}, {
  icon: "activity",
  title: "High Speed Digital",
  desc: "Целостность сигнала, осциллография, высокоскоростные шины."
}, {
  icon: "flask-conical",
  title: "Испытательное оборудование",
  desc: "Климатические и механические испытания изделий."
}, {
  icon: "shield-check",
  title: "СПОАИ",
  desc: "Системы поверки и автоматизации измерений."
}, {
  icon: "ruler",
  title: "Метрологическое оборудование",
  desc: "Эталоны, поверка, калибровка под отраслевые требования."
}, {
  icon: "scan-eye",
  title: "Фотоника · Оптика",
  desc: "Оптические измерения и компоненты фотоники."
}, {
  icon: "satellite",
  title: "ГНСС оборудование",
  desc: "Приёмники и решения для спутниковой навигации."
}];
function Directions({
  onNav
}) {
  const {
    Card,
    Icon
  } = window.DesignSystem_176d4c;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 48px",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akm-eyebrow"
  }, "\u0421\u0435\u043C\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: "-0.02em",
      marginTop: "var(--space-3)"
    }
  }, "\u041E\u0434\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u2014 \u0432\u0435\u0441\u044C \u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0440\u0430\u043A\u0442")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "var(--space-3)"
    }
  }, AKM_DIRECTIONS.map((d, i) => /*#__PURE__*/React.createElement(Card, {
    key: d.title,
    variant: i === 0 ? "active" : "default",
    padding: "var(--space-5)",
    style: {
      cursor: "pointer",
      transition: "transform 280ms var(--ease-out)"
    },
    onClick: () => onNav("direction"),
    onMouseEnter: e => e.currentTarget.style.transform = "translateY(-4px)",
    onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      padding: 10,
      borderRadius: "var(--radius-md)",
      background: "var(--fill-blue)",
      border: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      marginTop: "var(--space-3)"
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--text-2)",
      marginTop: "var(--space-2)"
    }
  }, d.desc)))));
}
Object.assign(window, {
  Directions,
  AKM_DIRECTIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Directions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Акметрон marketing site — hero
function Hero({
  onNav
}) {
  const {
    Button,
    Tag,
    Icon
  } = window.DesignSystem_176d4c;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "120px 48px 96px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/puzzle-pattern.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "46%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top right",
      opacity: 0.45,
      WebkitMaskImage: "linear-gradient(to left, #000 5%, transparent 92%)",
      maskImage: "linear-gradient(to left, #000 5%, transparent 92%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "akm-glow",
    style: {
      top: -180,
      left: -120
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 920,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akm-eyebrow"
  }, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E-\u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \xB7 \u0440\u0430\u0434\u0438\u043E\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(44px, 6vw, 76px)",
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
      color: "var(--text-1)",
      marginTop: "var(--space-4)"
    }
  }, "\u0418\u0437\u043C\u0435\u0440\u044F\u0435\u043C \u0442\u043E\u0447\u043D\u043E.", /*#__PURE__*/React.createElement("br", null), "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--text-2)",
      maxWidth: 620,
      margin: "var(--space-5) auto 0"
    }
  }, "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437, \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0441\u043D\u0430\u0441\u0442\u043A\u0430 \u0438 \u0421\u0412\u0427-\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u2014 \u0431\u0435\u0437 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "center",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calculator",
      size: 18,
      stroke: "#FFFFFF"
    }),
    onClick: () => onNav("contact")
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0451\u0442"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("direction")
  }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      justifyContent: "center",
      marginTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "\u0422\u0435\u043B\u0435\u043A\u043E\u043C"), /*#__PURE__*/React.createElement(Tag, null, "High Speed Digital"), /*#__PURE__*/React.createElement(Tag, null, "\u041C\u0435\u0442\u0440\u043E\u043B\u043E\u0433\u0438\u044F"), /*#__PURE__*/React.createElement(Tag, null, "\u0424\u043E\u0442\u043E\u043D\u0438\u043A\u0430"), /*#__PURE__*/React.createElement(Tag, null, "\u0413\u041D\u0421\u0421"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Metrics.jsx
try { (() => {
// Акметрон — metrics band + capabilities callouts
function Metrics() {
  const {
    Stat,
    Callout,
    Icon
  } = window.DesignSystem_176d4c;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "80px 48px",
      background: "var(--field-deep)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "akm-glow",
    style: {
      bottom: -200,
      right: -80
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "67 \u0413\u0413\u0446",
    label: "\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "<1 \u0447",
    label: "\u0420\u0430\u0441\u0447\u0451\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "7",
    label: "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "0",
    label: "\u041F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3)",
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "cpu",
      size: 18
    })
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u2014 \u043E\u0442 \u0441\u0445\u0435\u043C\u044B \u0434\u043E \u0441\u0435\u0440\u0438\u0438"), /*#__PURE__*/React.createElement(Callout, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "wrench",
      size: 18
    })
  }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0441\u043D\u0430\u0441\u0442\u043A\u0438 \u043F\u043E\u0434 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430"))));
}
Object.assign(window, {
  Metrics
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Metrics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// Акметрон — site footer
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--hairline)",
      padding: "48px",
      background: "var(--field-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akm-logo",
    style: {
      fontSize: 26
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "\u0410\u041A\u041C\u0415\u0422\u0420\u041E\u041D")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--text-3)",
      marginTop: "var(--space-3)"
    }
  }, "\u0418\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F. \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E-\u0438\u0437\u043C\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u0440\u0430\u0434\u0438\u043E\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430, \u0421\u0412\u0427-\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akm-eyebrow",
    style: {
      fontSize: 11
    }
  }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), ["Телеком", "High Speed Digital", "Метрология", "ГНСС"].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      fontSize: 14,
      color: "var(--text-2)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akm-eyebrow",
    style: {
      fontSize: 11
    }
  }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"), ["О нас", "Производство", "Контакты"].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      fontSize: 14,
      color: "var(--text-2)"
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "32px auto 0",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--hairline)",
      fontSize: 12,
      color: "var(--text-3)"
    }
  }, "\xA9 2026 \u0410\u043A\u043C\u0435\u0442\u0440\u043E\u043D \xB7 \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// Акметрон marketing site — top navigation header
function SiteHeader({
  onNav,
  view
}) {
  const {
    Button
  } = window.DesignSystem_176d4c;
  const links = [{
    id: "home",
    label: "Направления"
  }, {
    id: "direction",
    label: "Телеком"
  }, {
    id: "about",
    label: "О компании"
  }, {
    id: "contact",
    label: "Контакты"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 48px",
      background: "rgba(16,27,54,0.72)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akm-logo",
    style: {
      fontSize: 30,
      cursor: "pointer"
    },
    onClick: () => onNav("home")
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "\u0410\u041A\u041C\u0415\u0422\u0420\u041E\u041D")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNav(l.id === "about" ? "home" : l.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: view === l.id ? "var(--blue-light)" : "var(--text-2)",
      transition: "color 160ms"
    }
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => onNav("contact")
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0451\u0442"));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

})();
