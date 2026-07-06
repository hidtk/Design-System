import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** blue = info (default); neutral = secondary; alert = rose, problems only. */
  tone?: "blue" | "neutral" | "alert";
  style?: React.CSSProperties;
}

/** Small uppercase status/label marker. */
export function Badge(props: BadgeProps): JSX.Element;
