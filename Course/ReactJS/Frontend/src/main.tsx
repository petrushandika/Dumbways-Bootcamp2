import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Providers } from "./Providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Router>
        <App />
      </Router>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
