import { createBrowserRouter } from "react-router-dom";
import * as P from "../Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <P.HomePage />,
    errorElement: <P.ErrorPage />,
  },
  {
    path: "/home",
    element: <P.HomePage />,
    errorElement: <P.ErrorPage />,
  },
  {
    path: "/form",
    element: <P.FormPage />,
    errorElement: <P.ErrorPage />,
  },
  {
    path: "/slash-question",
    element: <P.SlashQuestionPage />,
    errorElement: <P.ErrorPage />,
  },
  {
    path: "/about-me",
    element: <P.AboutMePage />,
    errorElement: <P.ErrorPage />,
  },
]);
