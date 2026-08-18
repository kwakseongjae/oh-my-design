import { useParams } from "react-router-dom";
import { PostCard } from "../components/Cards.jsx";
import { ErrorNotice, MediaFrame, StockBadge, UnavailableInfo } from "../components/Marks.jsx";
import { categoryById, postsFeaturing, productById } from "../lib/catalog.js";
import { formatCount, formatRating, formatWon } from "../lib/format.js";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productById(id);

  if (!product) {
    return (
      <div className="page">
        <ErrorNotice id={id} kind="product" />
      </div>
    );
  }

  const category = categoryById(product.category_id);
  const tours = postsFeaturing(product.id);
  const soldOut = product.stock_status === "품절";

  return (
    <div className="page" data-state="default">
      <p className="eyebrow">상품 {product.id}</p>
      <div className="detail">
        <MediaFrame src={product.image} alt={product.name} />
        <div className="detail-copy">
          <h1>{product.name}</h1>
          <p className="brand">{product.brand}</p>
          {category ? <p>{category.name}</p> : null}
          <p className="price">{formatWon(product.price_krw)}</p>
          <div className="meta-row">
            <span>평점 {formatRating(product.rating_x10)}</span>
            <span>리뷰 {formatCount(product.review_count)}</span>
            <StockBadge status={product.stock_status} />
          </div>
          <ul className="tags">
            {product.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <UnavailableInfo
            category="실시간 재고 수량"
            detail="products 레코드는 stock_status 열거값만 제공합니다. 남은 개수는 없습니다."
          />
          {soldOut ? (
            <button
              type="button"
              className="btn"
              data-cta="local"
              data-state="disabled"
              disabled
            >
              품절 — 담을 수 없음
            </button>
          ) : null}
        </div>
      </div>

      <section className="section" aria-labelledby="reverse-heading">
        <div className="section-head">
          <h2 id="reverse-heading">이 상품이 등장한 집들이</h2>
          <p className="definition">
            역참조 = posts.product_ids에 {product.id}가 포함된 게시글
          </p>
        </div>
        {tours.length === 0 ? (
          <div className="empty" data-state="empty" role="status">
            <h3>등장한 집들이가 없습니다</h3>
            <p>이 상품 식별자를 가리키는 posts 레코드는 0건입니다.</p>
          </div>
        ) : (
          <div className="grid-3" data-state="success">
            {tours.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
