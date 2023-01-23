import { useContext, createContext, useState } from "react";
import * as T from "./types";

const DarkModeContext = createContext<T.IDarkModeContextData>(
  {} as T.IDarkModeContextData
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  return context;
};

export const DarkModeProvider = ({ children }: T.IDarkModeProviderData) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
