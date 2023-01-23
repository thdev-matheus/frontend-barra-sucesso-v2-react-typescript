import { createContext, useContext, useState } from "react";
import * as T from "./types";

const MediaQueryContext = createContext<T.IMediaQueryContextData>(
  {} as T.IMediaQueryContextData
);

export const useMediaQuery = () => {
  const context = useContext(MediaQueryContext);

  return context;
};

export const MediaQueryProvider = ({ children }: T.IMediaQueryProviderData) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [heightScreen, setHeightScreen] = useState(window.innerHeight);

  const setMediaQuery = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWidthScreen(width);
    setHeightScreen(height);
  };

  window.addEventListener("resize", (_) => {
    setMediaQuery();
  });

  return (
    <MediaQueryContext.Provider value={{ widthScreen, heightScreen }}>
      {children}
    </MediaQueryContext.Provider>
  );
};
