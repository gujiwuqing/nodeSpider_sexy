import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from '@mantine/core';
import App from "./pages/App";
// import "./assets/style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
