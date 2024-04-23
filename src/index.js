import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./page/Home";
import App from "./App";
import "@fontsource/inter/700.css"; // Specify weight

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./page/Error";
import TrackList from "./page/TrackList";
import Playing from "./page/Playing";
import Spectator from "./page/Spectator";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "tracklist",
    element: <TrackList />,
    errorElement: <Error />,
  },
  {
    path: "playing",
    element: <Playing />,
    errorElement: <Error />,
  },
  {
    path: "spectator",
    element: <Spectator />,
    errorElement: <Error />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
