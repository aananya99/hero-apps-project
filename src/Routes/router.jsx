import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import AllApps from "../Pages/AllApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
    ],
  },
]);

export default router;
