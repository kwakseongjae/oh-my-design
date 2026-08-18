import { Route, Routes } from "react-router-dom";
import { AppFooter, AppNav, SkipLink } from "./components/Chrome.jsx";
import Home from "./pages/Home.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Posts from "./pages/Posts.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Store from "./pages/Store.jsx";

export default function App() {
  return (
    <>
      <SkipLink />
      <AppNav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<ProductDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </main>
      <AppFooter />
    </>
  );
}
