import { IconType } from "react-icons";

export interface IButtonProps {
  onAction: () => void;
  label: string;
  icon?: IconType;
  iconAfter?: boolean;
  iconSize?: string;

  width?: string;
  height?: string;

  fontSize?: string;

  color?: string;
  bgColor?: string;
  hColor?: string;
  hBgColor?: string;

  radius?: string;
}

export interface ISButtonProps {
  iconAfter?: boolean;
  iconSize?: string;

  width?: string;
  height?: string;

  fontSize?: string;

  color?: string;
  bgColor?: string;
  hColor?: string;
  hBgColor?: string;

  radius?: string;
}
