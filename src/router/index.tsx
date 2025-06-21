import {
  RouteObject,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { lazy, ReactElement } from "react";
import { ROUTES } from "./constants";
import { SafeLoad } from "src/components";

const Main = lazy(() =>
  import("src/pages/Main").then((mod) => ({
    default: mod.Main
  }))
);
const NotFound = lazy(() =>
  import("src/components/NotFound").then((mod) => ({
    default: mod.NotFound
  }))
);

export const AppRouting = (): ReactElement => {
  const routes: RouteObject[] = [
    {
      id: "root",
      path: ROUTES.root.path,
      element: (
        <SafeLoad>
          <Main />
        </SafeLoad>
      )
    },
    {
      id: "not-found",
      path: "*",
      element: (
        <SafeLoad>
          <NotFound />
        </SafeLoad>
      )
    }
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
