import React from "react";
// import "./layout.scss"
// import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/singlePage";
import 'leaflet/dist/leaflet.css'

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        }
      ]
    }
  ]);

  return (



    <RouterProvider router={router} />
  )
}

export default App