import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StepContextProvider from "./components/StepProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <StepContextProvider>
      <App />
    </StepContextProvider>
  </React.StrictMode>
);
