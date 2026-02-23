import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PassportProvider } from "./context/PassportContext";
import { UIProvider } from "./context/UIContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UIProvider>
      <PassportProvider>
        <App />
      </PassportProvider>
    </UIProvider>
  </React.StrictMode>
);
