import React from "react";

/**
 * Акметрон Callout — translucent blue strip, blue border, icon + single line.
 * One concise line of text. For a longer note, use a Card.
 */
export function Callout({ children, icon = null, style = {}, ...rest }) {
  return (
    <div
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <span style={{ display: "inline-flex", color: "var(--blue-light)", flexShrink: 0 }} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
