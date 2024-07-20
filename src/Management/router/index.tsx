import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import ResponseRule from "../page/ResponseRule";

const routers = [
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
];

const PageRouterProvider: FC = () => {
  return (
    <Routes>
      {routers.map((router) => (
        <Route key={router.path} path={router.path} element={router.element} />
      ))}
    </Routes>
  );
};

export default PageRouterProvider;
