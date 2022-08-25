import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import BuyersTableContextProvider from "./context/buyersTableContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <BuyersTableContextProvider>
        <App />
      </BuyersTableContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
