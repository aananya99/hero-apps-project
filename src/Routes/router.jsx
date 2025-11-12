import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/apps.json"),
      },
      {
        path: "/all-apps",
        element: <AllApps></AllApps>,
        loader: () => fetch("/apps.json"),
      },

      {
        path: "/apps-details/:id",
        element: <AppDetails></AppDetails>,
        loader: () => fetch("/apps.json"),
      },
    ],
  },
]);

export default router;
