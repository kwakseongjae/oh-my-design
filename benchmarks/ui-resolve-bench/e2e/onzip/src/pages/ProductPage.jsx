import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery.jsx";
import ProductCard from "../components/ProductCard.jsx";
import {
  categoryById,
  formatPrice,
  formatRating,
  listedAverage,
  postsForProduct,
  productById,
  ratingDistribution,
  reviewsFor,
  stockTone,
} from "../lib/catalog.js";

export default function ProductPage() {
  const { id } = useParams();
  const product = productById(id);

  useEffect(() => {
    document.title = product ? `${product.name} — 온집` : "없는 상품 — 온집";
  }, [product]);

  if (!product) {
    return (
      <main id="main" data-state="error">
        <div className="page">
          <header className="page-head">
            <p className="eyebrow">스토어</p>
            <h1 id="page-title" className="display">
              없는 상품입니다
            </h1>
            <p className="error-panel" role="alert">
              요청한 상품을 도록에서 찾지 못했습니다.
            </p>
            <Link className="btn btn-ghost" to="/store">
              스토어로 돌아가기
            </Link>
          </header>
        </div>
      </main>
    );
  }

  const category = categoryById(product.category_id);
  const reviews = reviewsFor(product.id);
  const posts = postsForProduct(product.id);
  const bins = ratingDistribution(reviews);
  const listedAvg = listedAverage(reviews);
  const maxBin = Math.max(1, ...Object.values(bins));
  const specEntries = Object.entries(product.spec ?? {});

  return (
    <main id="main">
      <div className="page">
        <div className="pdp">
          <ImageGallery frames={product.images} productName={product.name} />
          <div>
            <p className="eyebrow">
              {category?.name} · {product.brand}
            </p>
            <h1 id="page-title" className="display">
              {product.name}
            </h1>
            <p className="lede">{product.short_pitch}</p>
            <p className="price mt-16">
              {formatPrice(product.price_krw)}
            </p>
            <div className="meta mt-12">
              <span className="badge" data-tone={stockTone(product.stock_status)}>
                {product.stock_status}
              </span>
              <span>
                평점 {formatRating(product.rating_x10)} · 후기 {product.review_count.toLocaleString("ko-KR")}건
              </span>
            </div>
            <table className="spec">
              <caption className="eyebrow spec-caption">
                스펙
              </caption>
              <tbody>
                {specEntries.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="buy-block">
              <button
                type="button"
                className="btn btn-primary"
                data-cta="local"
                data-state="disabled"
                disabled
                aria-describedby="buy-unavailable"
              >
                구매하기
              </button>
              <p id="buy-unavailable" className="unavailable" data-state="unavailable">
                구매와 장바구니, 배송 예정일, 실시간 재고 수량은 이 샘플에 없습니다.
              </p>
            </div>
          </div>
        </div>

        <section className="review-layout" aria-labelledby="review-heading">
          <div>
            <h2 id="review-heading" className="section-title">
              후기
            </h2>
            <p>
              상품에 적힌 후기는 {product.review_count.toLocaleString("ko-KR")}건입니다. 이 화면에 실린 글은{" "}
              {reviews.length}편입니다.
            </p>
            {listedAvg ? <p>실린 글의 평균은 {listedAvg}점입니다.</p> : null}
            <div className="bars mt-16">
              {[5, 4, 3, 2, 1].map((star) => (
                <div className="bar-row" key={star}>
                  <span>{star}점</span>
                  <div className="bar" aria-hidden="true">
                    <span style={{ ["--bar-width"]: `${(bins[star] / maxBin) * 100}%` }} />
                  </div>
                  <span>{bins[star]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="review-list">
            {reviews.length === 0 ? (
              <div className="empty-panel" data-state="empty">
                이 상품에 실린 후기 글이 없습니다.
              </div>
            ) : (
              reviews.map((review) => (
                <article className="review" key={review.id}>
                  <h3>{review.title}</h3>
                  <p className="meta">
                    {review.author_nick} · {review.rating}점 · {review.ago} · 도움 {review.helpful.toLocaleString("ko-KR")}
                  </p>
                  <p>{review.body}</p>
                </article>
              ))
            )}
          </div>
        </section>

        <section className="section" aria-labelledby="backref-heading">
          <h2 id="backref-heading" className="section-title">
            이 물건이 나온 집들이
          </h2>
          {posts.length === 0 ? (
            <div className="empty-panel" data-state="empty">
              이 상품이 등장한 집들이는 없습니다.
            </div>
          ) : (
            <div className={posts.length <= 2 ? "join-grid is-sparse" : "join-grid"}>
              {posts.map((post) => (
                <Link key={post.id} className="product-card post-card" to={`/posts/${post.id}`} data-cta="local">
                  <div className="media">
                    <img src={`/${post.cover_image}`} alt="" width={1248} height={832} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <span className="brand">
                      {post.home_type} · {post.area_pyeong}평
                    </span>
                    <h3 className="title">{post.title}</h3>
                    <p className="pitch">{post.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
