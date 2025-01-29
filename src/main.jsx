import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./Index.jsx"; // Ensure this file contains the Router setup
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index /> {/* This should be the only entry point */}
  </StrictMode>
);
