import React from "react";

/**
 * Акметрон Card — matte panel with vertical gradient and hairline border.
 * variant "active" adds a blue border + glow; "alert" switches to the rose
 * pain palette with a left edge stripe (use ONLY for risks/problems).
 */
export function Card({
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
    overflow: "hidden",
  };

  const variants = {
    default: {},
    active: {
      background: "var(--gradient-panel-active)",
      border: "1.5px solid var(--blue)",
      boxShadow: "var(--shadow-md), var(--glow-soft)",
    },
    alert: {
      background: "var(--gradient-alert)",
      borderColor: "rgba(201,122,142,0.28)",
      borderLeft: "3px solid var(--alert-stripe)",
      color: "var(--alert-text)",
    },
  };

  return (
    <div style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </div>
  );
}
