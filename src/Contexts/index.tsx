import * as T from "./types";

import { DarkModeProvider } from "./DarkMode";
import { MediaQueryProvider } from "./MediaQuery";

export const Contexts = ({ children }: T.IContextProps) => {
  return (
    <MediaQueryProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </MediaQueryProvider>
  );
};
