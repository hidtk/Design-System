import React from "react";

/**
 * Акметрон Badge — small status/label marker.
 * tones: blue (default/info), neutral (secondary), alert (rose, problems only).
 */
export function Badge({ children, tone = "blue", style = {}, ...rest }) {
  const tones = {
    blue: { background: "var(--fill-blue)", color: "var(--blue)", border: "1px solid var(--blue)" },
    neutral: { background: "var(--fill-faint)", color: "var(--text-2)", border: "1px solid var(--hairline)" },
    alert: { background: "rgba(201,122,142,0.14)", color: "var(--alert-text)", border: "1px solid var(--alert-stripe)" },
  };
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
