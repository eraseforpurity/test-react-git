import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { TerminalsPage } from "./pages/TerminalsPage";
import { Layout } from "./components/Layout";
import { BuyersPage } from "./pages/BuyersPage";
import { BuyerPage } from "./pages/BuyerPage";

const RoutedApp = () => {
  return (
    <Routes>
      <Route index path="/" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/terminals" element={<TerminalsPage />} />
        <Route path="/buyers" element={<BuyersPage />} />
        <Route path="/buyers/:buyerId" element={<BuyerPage />} />
      </Route>
    </Routes>
  );
};

export default RoutedApp;
