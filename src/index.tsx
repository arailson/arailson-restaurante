import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import BrowserRouter from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
