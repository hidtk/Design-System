import React from "react";

/**
 * Акметрон Stat — oversized numeric metric dominant over its label.
 * Numbers are concrete; the numeral is light blue and dominant.
 */
export function Stat({ value, label, sublabel = null, align = "left", style = {}, ...rest }) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(48px, 6vw, 88px)",
          lineHeight: 1,
          letterSpacing: "var(--tracking-hero)",
          color: "var(--blue)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "var(--space-2)",
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "var(--text-2)",
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div style={{ marginTop: "var(--space-1)", fontSize: 13, color: "var(--text-3)" }}>{sublabel}</div>
      )}
    </div>
  );
}
