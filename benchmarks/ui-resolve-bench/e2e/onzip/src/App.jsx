import { Navigate, Route, Routes } from "react-router-dom";
import SiteChrome from "./components/SiteChrome.jsx";
import HomePage from "./pages/HomePage.jsx";
import StorePage from "./pages/StorePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <SiteChrome>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:id" element={<ProductPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </SiteChrome>
  );
}
