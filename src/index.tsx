import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Contexts } from "./Contexts";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Contexts>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Flip}
    />
    <GlobalStyle />
    <App />
  </Contexts>
);
