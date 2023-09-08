import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import { StateContextProvider } from "utils/StateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <Home />
    </StateContextProvider>
  </React.StrictMode>
);
