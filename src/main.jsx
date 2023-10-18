import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import Projects from "./components/Projects.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import UnderConstruction from "./components/UnderConstruction.jsx";
import Experience from "./pages/Experience.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <UnderConstruction />,
      },
      {
        path: "/about-me",
        element: <UnderConstruction />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/contact",
        element: <UnderConstruction />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
