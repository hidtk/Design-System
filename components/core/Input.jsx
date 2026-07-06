import React from "react";

/**
 * Акметрон Input — dark field with hairline border; blue border on focus.
 */
export function Input({ label = null, hint = null, id, style = {}, wrapStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "block", ...wrapStyle }}>
      {label && (
        <span
          style={{
            display: "block",
            marginBottom: "var(--space-2)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.04em",
            color: "var(--text-2)",
          }}
        >
          {label}
        </span>
      )}
      <input
        id={id}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        style={{
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
          ...style,
        }}
        {...rest}
      />
      {hint && (
        <span style={{ display: "block", marginTop: "var(--space-2)", fontSize: 12, color: "var(--text-3)" }}>{hint}</span>
      )}
    </label>
  );
}
