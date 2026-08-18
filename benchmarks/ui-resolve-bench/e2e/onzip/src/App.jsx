import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { StorePage } from "./pages/StorePage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import { PostsPage } from "./pages/PostsPage.jsx";
import { PostPage } from "./pages/PostPage.jsx";
import { ErrorPanel } from "./components/primitives.jsx";

function UnknownPage() {
  return (
    <ErrorPanel title="이 주소는 없습니다" requestedId="없는 경로" to="/" recoverLabel="홈으로">
      온집 샘플은 홈, 스토어, 집들이와 그 상세만 제공합니다.
    </ErrorPanel>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:id" element={<ProductPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </Layout>
  );
}
