import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import "./index.css";
import Portfolio from "./Portfolio.tsx";
import ProjectPage from "./ProjectPage.tsx";
import Resume from "./Resume.tsx";
import UplinkPage from "./UplinkPage.tsx";
import PerformanceToolPage from "./PerformanceToolPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },

      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/uplinked", element: <UplinkPage /> },
      { path: "portfolio/aiperftool", element: <PerformanceToolPage /> },
      { path: "portfolio/:projectId", element: <ProjectPage /> },

      { path: "resume", element: <Resume /> },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
