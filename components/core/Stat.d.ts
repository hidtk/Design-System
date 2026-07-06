import * as React from "react";

export interface StatProps {
  /** The metric — keep it concrete (e.g. "67 ГГц", "<1 ч"). */
  value: React.ReactNode;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}

/**
 * Oversized light-blue numeral dominant over its label.
 */
export function Stat(props: StatProps): JSX.Element;
