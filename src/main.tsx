import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UIProvider } from "@/context/UIContext.tsx";
import { TrojanGameProvider } from "@/context/TrojanGameContext.tsx";
import { PhishingGameProvider } from "@/context/PhishingGameContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <TrojanGameProvider>
        <PhishingGameProvider>
          <App />
        </PhishingGameProvider>
      </TrojanGameProvider>
    </UIProvider>
  </React.StrictMode>
);
