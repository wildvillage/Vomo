import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ThemeProviderWrapper from "../common/theme.tsx";
import App from "./App.tsx";
import "../common/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </StrictMode>
);
