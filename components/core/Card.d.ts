import * as React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** default = matte panel; active = blue border + glow; alert = rose pain palette (risks only). */
  variant?: "default" | "active" | "alert";
  padding?: string;
  style?: React.CSSProperties;
}

/**
 * Gradient panel with hairline border — the base container surface.
 */
export function Card(props: CardProps): JSX.Element;
