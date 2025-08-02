import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // Assuming your Layout component is named App now
import Dashboard from "./dashboard/Dashboard.tsx"; // Ensure this has a .tsx extension
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Changed from Layout to App to match your other file
    children: [
      { path: "", element: <Dashboard /> },
      { path: "about", element: <div>about</div> },
      { path: "designs", element: <div>designs</div> },
      { path: "blog", element: <div>blog</div> },
      { path: "guides", element: <div>guides</div> },
      { path: "contact", element: <div>contact</div> },
    ],
  },
]);

// 1. Get the root element from the DOM
const rootElement = document.getElementById("root");

// 2. Check if the element exists before rendering
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  // You can add better error handling here if you want
  console.error("Failed to find the root element");
}
