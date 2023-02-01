import { Dispatch, SetStateAction } from "react";

export interface ISelectProps {
  label?: string;
  setAction: Dispatch<SetStateAction<string>>;
  activeOpt: string;
  options: string[];

  width?: string;
  height?: string;

  margin?: string;

  radius?: string;

  fontSize?: string;

  color?: string;
  bgColor?: string;

  hcolor?: string;
  hBgColor?: string;
}

export interface IContainerProps {
  width?: string;
  height?: string;

  margin?: string;

  radius?: string;

  fontSize?: string;

  color?: string;
  bgColor?: string;

  hColor?: string;
  hBgColor?: string;
}
