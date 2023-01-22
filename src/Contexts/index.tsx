import * as T from "./types";
import { DarkModeProvider } from "./DarkMode";

export const Contexts = ({ children }: T.IContextProps) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
