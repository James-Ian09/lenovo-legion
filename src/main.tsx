import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // This is the file that needed a declaration module.

//fix the index.css - this is the file that needed a declaration module.
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
