import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { assetUrl, postById, productsForPost } from "../lib/catalog.js";

export default function PostPage() {
  const { id } = useParams();
  const post = postById(id);

  useEffect(() => {
    document.title = post ? `${post.title} — 온집` : "없는 집들이 — 온집";
  }, [post]);

  if (!post) {
    return (
      <main id="main" data-state="error">
        <div className="page">
          <header className="page-head">
            <p className="eyebrow">집들이</p>
            <h1 id="page-title" className="display">
              없는 집들이입니다
            </h1>
            <p className="error-panel" role="alert">
              요청한 글을 도록에서 찾지 못했습니다.
            </p>
            <Link className="btn btn-ghost" to="/posts">
              집들이 목록으로
            </Link>
          </header>
        </div>
      </main>
    );
  }

  const products = productsForPost(post);
  const frames = post.gallery.slice(0, 4);
  const blocks = post.body_blocks;

  return (
    <main id="main">
      <div className="page magazine">
        <header className="page-head">
          <p className="eyebrow">
            {post.home_type} · {post.area_pyeong}평 · {post.author_nick}
          </p>
          <h1 id="page-title" className="display">
            {post.title}
          </h1>
          <p className="lede">{post.summary}</p>
        </header>

        <article>
          {blocks.map((paragraph, index) => (
            <div className="spread" key={`${post.id}-${index}`}>
              {frames[index] ? (
                <figure>
                  <img
                    src={assetUrl(frames[index])}
                    alt=""
                    width={1248}
                    height={832}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </figure>
              ) : null}
              <p>{paragraph}</p>
            </div>
          ))}
        </article>

        <section className="section" aria-labelledby="used-heading">
          <h2 id="used-heading" className="section-title">
            이 집에 앉힌 물건
          </h2>
          <div className="join-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} headingLevel="h3" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
