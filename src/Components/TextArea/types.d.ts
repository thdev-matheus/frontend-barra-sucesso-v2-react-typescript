import { InputHTMLAttributes } from "react";

export interface ITextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;

  width?: string;
  height?: string;

  borderRadius?: string;
  borderColor?: string;
  bgColor?: string;
  color?: string;
}

export interface ISTextAreaProps {
  isErrored?: boolean;

  width?: string;
  height?: string;

  borderRadius?: string;

  borderColor?: string;
  bgColor?: string;
  color?: string;
}
