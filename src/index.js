import React from "react";
import ReactDOM from "react-dom/client";
import "../src/core/global.css";
import App from "./main/_app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
