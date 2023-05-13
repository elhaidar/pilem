import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/404.jsx";
import Explore from "./pages/ExplorePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "./components/context/Context";
import MovieDetails from "./components/elements/Explore/movieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/movie",
    element: <MovieDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
