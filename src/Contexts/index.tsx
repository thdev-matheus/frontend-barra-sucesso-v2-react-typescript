import * as T from "./types";

import { DarkModeProvider } from "./DarkMode";
import { MediaQueryProvider } from "./MediaQuery";

import { useMediaQuery } from "./MediaQuery";
import { useDarkMode } from "./DarkMode";

export { useMediaQuery, useDarkMode };

export const Contexts = ({ children }: T.IContextProps) => {
  return (
    <MediaQueryProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </MediaQueryProvider>
  );
};
