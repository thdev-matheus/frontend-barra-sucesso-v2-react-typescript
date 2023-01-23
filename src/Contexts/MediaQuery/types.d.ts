import { ReactNode } from "react";

export interface IMediaQueryContextData {
  widthScreen: number;
  heightScreen: number;
}

export interface IMediaQueryProviderData {
  children: ReactNode;
}
