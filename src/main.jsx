import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import UnderConstruction from "./components/UnderConstruction.jsx";
import "./style.css";

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
        path: "https:www.javayporter.com/projects",
        element: <UnderConstruction />,
      },
      {
        path: "/about",
        element: <UnderConstruction />,
      },
      {
        path: "/experience",
        element: <ExperienceCard />,
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
