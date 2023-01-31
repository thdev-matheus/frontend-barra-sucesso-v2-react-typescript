import { Dispatch, SetStateAction } from "react";

export interface ISelectProps {
  label: string;
  setAction: Dispatch<SetStateAction<string>>;
  activeOpt: string;
  options: string[];

  width?: string;
  height?: string;

  margin?: string;

  radius?: string;

  color?: string;
  bgColor?: string;
}

export interface IContainerProps {
  width?: string;
  height?: string;

  margin?: string;

  radius?: string;

  color?: string;
  bgColor?: string;
}
