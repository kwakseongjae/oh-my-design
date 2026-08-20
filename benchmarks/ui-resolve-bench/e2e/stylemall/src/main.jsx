import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell.jsx";
import { BrandPage } from "./pages/Brand.jsx";
import { HomePage } from "./pages/Home.jsx";
import { LookbookPage } from "./pages/Lookbook.jsx";
import { ProductDetailPage } from "./pages/ProductDetail.jsx";
import { ProductsPage } from "./pages/Products.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/lookbooks/:id" element={<LookbookPage />} />
          <Route path="/brands/:id" element={<BrandPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
