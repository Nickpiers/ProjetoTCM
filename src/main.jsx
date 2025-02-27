import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProjetoTCM } from "./components/ProjetoTCM";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjetoTCM />
  </StrictMode>
);
