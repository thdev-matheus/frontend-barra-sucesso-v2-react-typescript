import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

import { ThemeProvider } from "styled-components";
import * as theme from "./styles/Themes";

export const App = () => {
  return (
    <ThemeProvider theme={theme.LightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
