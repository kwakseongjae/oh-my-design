import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell.jsx";
import { FreePage } from "./pages/FreePage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ItemPage } from "./pages/ItemPage.jsx";
import { SellerPage } from "./pages/SellerPage.jsx";
import "./styles/tokens.css";
import "./styles/system.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/sellers/:id" element={<SellerPage />} />
          <Route path="/free" element={<FreePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
