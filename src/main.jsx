import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PassportProvider } from "./context/PassportContext";
import "./index.css"; // 👈 THIS LINE

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PassportProvider>
      <App />
    </PassportProvider>
  </React.StrictMode>
);
