import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const authConfig = require("./auth0-config.json");


ReactDOM.render(
  <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    redirectUri={window.location.origin}
  >
     
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);