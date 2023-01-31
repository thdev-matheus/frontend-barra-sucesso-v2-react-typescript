import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

import { ThemeProvider } from "styled-components";
import * as theme from "./styles/Themes";
import { useDarkMode } from "./Contexts";

export const App = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <ThemeProvider theme={isDarkMode ? theme.DarkTheme : theme.LightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
