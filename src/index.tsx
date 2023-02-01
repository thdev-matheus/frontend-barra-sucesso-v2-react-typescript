import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Contexts } from "./Contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Contexts>
    <GlobalStyle />
    <App />
  </Contexts>
);
