import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost, productsForPost } from "../lib/data.js";
import { formatCount, formatPyeong } from "../lib/format.js";
import {
  Button,
  CatalogImage,
  ErrorPanel,
  HomeTypeBadge,
  ProductCard,
} from "../components/primitives.jsx";

export function PostPage() {
  const { id } = useParams();
  const post = getPost(id);
  const used = post ? productsForPost(post) : [];

  useEffect(() => {
    document.title = post ? `${post.title} — 온집` : "없는 집들이 — 온집";
  }, [post]);

  if (!post) {
    return (
      <ErrorPanel title="이 집들이를 찾을 수 없습니다" requestedId={id} to="/posts" recoverLabel="집들이로 돌아가기">
        주소의 게시글 번호가 샘플 목록에 없습니다.
      </ErrorPanel>
    );
  }

  return (
    <article data-state="success">
      <header className="page-head">
        <HomeTypeBadge type={post.home_type} />
        <h1 id="page-title">{post.title}</h1>
        <p className="meta">
          {post.author_nick} · {formatPyeong(post.area_pyeong)} · 좋아요 {formatCount(post.likes)}
        </p>
      </header>
      <figure className="hero__figure">
        <CatalogImage src={post.cover_image} alt="" lazy={false} />
      </figure>
      <p style={{ maxWidth: "62ch", marginTop: "1.5rem" }}>{post.summary}</p>
      <div className="detail-actions">
        <Button as={Link} to="/posts" variant="ghost" cta="local">
          집들이 목록
        </Button>
      </div>
      <section className="joined" aria-labelledby="used-products">
        <div className="section-head">
          <div>
            <p className="eyebrow">사용된 상품</p>
            <h2 id="used-products">이 집에 놓인 물건</h2>
          </div>
          <p className="definition">정의: 게시글이 가리키는 상품 {used.length}개를 목록과 이어서 표시</p>
        </div>
        <div className="grid-2">
          {used.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </article>
  );
}
