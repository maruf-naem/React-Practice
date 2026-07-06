import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router";
import "./index.css";

const display = document.getElementById("root");
createRoot(display).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
