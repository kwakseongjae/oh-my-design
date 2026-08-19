import { Link, useParams } from "react-router-dom";
import Gallery from "../components/Gallery.jsx";
import {
  asset,
  averageListed,
  categoryById,
  formatRating,
  formatWon,
  postsForProduct,
  productById,
  ratingRows,
  reviewsFor,
  stockTone,
} from "../lib/catalog.js";
import { usePage } from "../lib/usePage.js";

export default function Product() {
  const { id } = useParams();
  const product = productById(id);
  usePage(product ? `${product.name} — 온집` : "없는 상품 — 온집");

  if (!product) {
    return (
      <main id="main" className="main" tabIndex={-1}>
        <div className="error-panel" data-state="error" role="alert">
          <h1 id="page-title">이 상품을 찾을 수 없습니다</h1>
          <p>주소의 상품이 온집 목록에 없습니다.</p>
          <Link className="btn" to="/store" data-cta="primary">스토어로 돌아가기</Link>
        </div>
      </main>
    );
  }

  const category = categoryById(product.category_id);
  const reviews = reviewsFor(product.id);
  const posts = postsForProduct(product.id);
  const rows = ratingRows(reviews);
  const listedAverage = averageListed(reviews);
  const maxCount = Math.max(1, ...rows.map((row) => row.count));
  const tone = stockTone(product.stock_status);

  return (
    <main id="main" className="main" tabIndex={-1}>
      <div className="product-layout">
        <Gallery images={product.images} name={product.name} />
        <div className="buy-panel">
          <p className="eyebrow">{product.brand} · {category?.name}</p>
          <h1 id="page-title">{product.name}</h1>
          <p className="pitch">{product.short_pitch}</p>
          <p className="price">{formatWon(product.price_krw)}</p>
          <p className="meta-row">
            <span className={`stock stock-${tone}`}>{product.stock_status}</span>
            <span>상품 평점 {formatRating(product.rating_x10)}</span>
            <span>상품에 적힌 후기 {product.review_count.toLocaleString("ko-KR")}건</span>
          </p>
          <p className="meta-row">
            {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </p>
          {posts[0] ? (
            <Link className="btn" to={`/posts/${posts[0].id}`} data-cta="primary">집들이에서 보기</Link>
          ) : null}
          <table className="spec">
            <caption>스펙</caption>
            <tbody>
              {Object.entries(product.spec).map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <section className="review-summary" aria-labelledby="review-summary-heading">
            <h2 id="review-summary-heading">후기 요약</h2>
            <p className="lede">
              이 화면에 실린 후기는 {reviews.length}건입니다.
              {listedAverage ? ` 실린 글의 평균은 ${listedAverage}점입니다.` : ""}
              {" "}상품에 적힌 후기 수({product.review_count.toLocaleString("ko-KR")}건)와 다를 수 있습니다.
            </p>
            <div className="dist">
              {rows.map((row) => (
                <div className="dist-row" key={row.score}>
                  <span>{row.score}점</span>
                  <div className="track" aria-hidden="true">
                    <span style={{ "--fill": `${(row.count / maxCount) * 100}%` }} />
                  </div>
                  <span>{row.count}건</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="product-lower">
        <section aria-labelledby="review-heading">
          <div className="section-head">
            <h2 id="review-heading">후기</h2>
          </div>
          {reviews.map((review) => (
            <article className="review" key={review.id}>
              <h3>{review.title}</h3>
              <p className="meta-row">
                <span>{review.author_nick}</span>
                <span>{review.rating}점</span>
                <span>{review.ago}</span>
                <span>도움 {review.helpful.toLocaleString("ko-KR")}</span>
              </p>
              <p>{review.body}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="rooms-heading">
          <div className="section-head">
            <h2 id="rooms-heading">이 상품이 실린 집들이</h2>
          </div>
          {posts.length === 0 ? (
            <div className="unavailable" data-state="unavailable">
              <p>이 상품이 실린 집들이는 아직 없습니다.</p>
              <Link className="btn btn-ghost" to="/posts" data-cta="local">집들이 둘러보기</Link>
            </div>
          ) : (
            <div className={posts.length < 3 ? "row-stack" : "card-grid cols-3"}>
              {posts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`} className="post-card post-row" data-cta="local">
                  <img
                    className="media"
                    src={asset(post.cover_image)}
                    alt=""
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <p className="eyebrow">{post.home_type} · {post.area_pyeong}평</p>
                    <h3>{post.title}</h3>
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
