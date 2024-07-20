import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes } from "react-router-dom";
import ThemeProviderWrapper from "../common/theme";
import App from "./App.tsx";
import "../common/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProviderWrapper>
  </StrictMode>
);
