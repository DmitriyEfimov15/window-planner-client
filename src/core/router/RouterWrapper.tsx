import { createBrowserRouter, Navigate, RouterProvider, type RouteObject } from "react-router-dom";
import "@/core/styles/global.scss";
import { useEffect } from "react";
import { Flex, Spin } from "antd";
import { authRoutes, unAuthRoutes } from "./routes";
import { useLazyGetProfileQuery } from "../../components/Auth/api";
import { useAppSelector } from "../hooks/redux/useAppSelector";
import { isAuthenticatedSelector } from "../../components/Auth/selectors";

const RouterWrapper = () => {
  const isAuth = useAppSelector(isAuthenticatedSelector);
  const [getProfile, { isFetching, isSuccess, isError }] = useLazyGetProfileQuery();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  if (isFetching || (!isSuccess && !isError)) {
    return (
      <Flex align="center" justify="center" style={{ height: "100vh" }}>
        <Spin />
      </Flex>
    );
  }

  const baseRoutes: RouteObject[] = isAuth ? authRoutes : unAuthRoutes;

  const routes: RouteObject[] = [
    ...baseRoutes,
    {
      path: "*",
      element: <Navigate to={isAuth ? "/" : "/auth/login"} replace />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default RouterWrapper;
