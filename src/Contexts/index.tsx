import * as T from "./types";

import { DarkModeProvider } from "./DarkMode";
import { MediaQueryProvider } from "./MediaQuery";
import { SlashQuestionProvider } from "./SlashQuestion";

import { useMediaQuery } from "./MediaQuery";
import { useDarkMode } from "./DarkMode";
import { useSlashQuestion } from "./SlashQuestion";

export { useMediaQuery, useDarkMode, useSlashQuestion };

export const Contexts = ({ children }: T.IContextProps) => {
  return (
    <SlashQuestionProvider>
      <MediaQueryProvider>
        <DarkModeProvider>{children}</DarkModeProvider>
      </MediaQueryProvider>
    </SlashQuestionProvider>
  );
};
