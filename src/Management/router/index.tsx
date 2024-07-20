import { FC } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "../page/Home";
import ResponseRule from "../page/ResponseRule";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/response",
    element: <ResponseRule />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

const PageRouterProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default PageRouterProvider;
