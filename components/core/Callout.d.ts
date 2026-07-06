import * as React from "react";

export interface CalloutProps {
  children?: React.ReactNode;
  /** Leading thin-line glyph. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Translucent blue strip with icon + a single line of emphasis text. */
export function Callout(props: CalloutProps): JSX.Element;
