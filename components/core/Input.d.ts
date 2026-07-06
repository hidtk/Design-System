import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label (Montserrat 700, muted). */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  wrapStyle?: React.CSSProperties;
}

/** Dark text field; hairline border that turns blue on focus. */
export function Input(props: InputProps): JSX.Element;
