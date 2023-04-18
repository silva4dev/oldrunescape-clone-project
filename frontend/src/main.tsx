import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { App } from "./App";
import { Helmet } from "react-helmet";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <App />
    </FluentProvider>
  </React.StrictMode>,
);
