import * as React from "react";

export interface IconProps {
  /** Lucide icon name, e.g. "radio", "zap", "activity", "satellite". */
  name: string;
  size?: number;
  /** Stroke color — defaults to brand light blue. */
  stroke?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

/** Thin line glyph from Lucide (requires the Lucide UMD script on the page). */
export function Icon(props: IconProps): JSX.Element;
