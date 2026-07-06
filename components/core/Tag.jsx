import React from "react";

/**
 * Акметрон Tag — full-pill chip with faint fill and hairline border.
 * Use for categories, filters, and short metadata.
 */
export function Tag({ children, active = false, style = {}, ...rest }) {
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
