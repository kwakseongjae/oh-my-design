import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { asset, postById, productById } from "../lib/catalog.js";
import { usePage } from "../lib/usePage.js";

export default function Post() {
  const { id } = useParams();
  const post = postById(id);
  usePage(post ? `${post.title} — 온집` : "없는 집들이 — 온집");

  if (!post) {
    return (
      <main id="main" className="main" tabIndex={-1}>
        <div className="error-panel" data-state="error" role="alert">
          <h1 id="page-title">이 집들이를 찾을 수 없습니다</h1>
          <p>주소의 글이 온집 집들이에 없습니다.</p>
          <Link className="btn" to="/posts" data-cta="primary">집들이로 돌아가기</Link>
        </div>
      </main>
    );
  }

  const joined = post.product_ids.map((productId) => productById(productId)).filter(Boolean);
  const missing = post.product_ids.length - joined.length;

  return (
    <main id="main" className="main" tabIndex={-1}>
      <article className="magazine">
        <header className="page-head">
          <p className="eyebrow">{post.home_type} · {post.area_pyeong}평 · {post.author_nick}</p>
          <h1 id="page-title">{post.title}</h1>
          <p className="lede">{post.summary}</p>
          <p className="meta-row">공감 {post.likes.toLocaleString("ko-KR")}</p>
        </header>

        {post.gallery.map((src, index) => (
          <div key={src}>
            <figure className="magazine-figure">
              <img
                src={asset(src)}
                alt={`${post.title} 사진 ${index + 1}`}
                width="960"
                height="640"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </figure>
            {post.body_blocks[index] ? (
              <p className="magazine-prose">{post.body_blocks[index]}</p>
            ) : null}
          </div>
        ))}

        <section aria-labelledby="used-heading">
          <div className="section-head">
            <h2 id="used-heading">이 집에 쓰인 상품</h2>
            <p className="lede">글에 등장하는 상품 {joined.length}개입니다.</p>
          </div>
          {missing > 0 ? (
            <div className="unavailable" data-state="unavailable">
              <p>글에 적힌 상품 가운데 {missing}개는 지금 목록에 없습니다.</p>
            </div>
          ) : null}
          <div className={`join-grid${joined.length === 1 ? " single" : joined.length === 3 ? " triple" : ""}`}>
            {joined.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
