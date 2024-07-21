import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import ResponseRule from "../page/ResponseRule";
import Options from "../page/Options";
import HeaderRule from "../page/HeaderRule";

const routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/options",
    element: <Options />,
    children: [
      {
        path: "response",
        element: <ResponseRule />,
      },
      {
        path: "headers",
        element: <HeaderRule />,
      },
    ],
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
        <Route key={router.path} path={router.path} element={router.element}>
          {router.children?.map((child) => (
            <Route
              key={child.path}
              path={child.path}
              element={child.element}
            ></Route>
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default PageRouterProvider;
