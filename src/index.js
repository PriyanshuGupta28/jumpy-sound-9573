import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Auth0Provider
        domain="dev-ffqosck22oimb18u.us.auth0.com"
        clientId="xcXiQJTad81NqdmtljuQbDvRebwso48m"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
