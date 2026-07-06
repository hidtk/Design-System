import React from "react";

/**
 * Акметрон Button — primary / secondary / ghost actions.
 * Color is functional: primary blue means "the main action here".
 */
export function Button({
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
    sm: { padding: "8px 16px", fontSize: 13 },
    md: { padding: "12px 24px", fontSize: 15 },
    lg: { padding: "16px 32px", fontSize: 17 },
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
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: "var(--blue)",
      color: "#FFFFFF",
      boxShadow: "0 6px 18px rgba(28,107,176,0.28)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-1)",
      borderColor: "var(--hairline-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--blue)",
    },
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
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => !disabled && hover[variant](e, true)}
      onMouseLeave={(e) => !disabled && hover[variant](e, false)}
      {...rest}
    >
      {icon && <span style={{ display: "inline-flex" }} aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
}
