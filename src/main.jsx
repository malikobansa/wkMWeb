import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./Index.jsx"; // Ensure this file contains the Router setup
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./components/hooks/apolloClient.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
  <ApolloProvider client={client}>
    <Index />
  </ApolloProvider> {/* This should be the only entry point */}
  </StrictMode>
);
