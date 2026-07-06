import * as React from "react";

export interface TagProps {
  children?: React.ReactNode;
  /** Selected state — blue fill + border. */
  active?: boolean;
  style?: React.CSSProperties;
}

/** Full-pill chip for categories, filters, short metadata. */
export function Tag(props: TagProps): JSX.Element;
