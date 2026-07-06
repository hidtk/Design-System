import * as React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual role. primary = main action (blue), secondary = outline, ghost = text-only. */
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Optional leading icon (thin line glyph). */
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Pill-shaped action button in Montserrat 700.
 */
export function Button(props: ButtonProps): JSX.Element;
