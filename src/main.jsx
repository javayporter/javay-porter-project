import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import Hero from "./components/Hero";
import TopNavbar from "./components/TopNavbar";
import Projects from "./components/Projects.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        } ,       
        {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/experience",
            element: <ExperienceCard />,
          }
    ]
    
  }
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
