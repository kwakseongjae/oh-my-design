import { Link } from "react-router-dom";
import { categoryById } from "../lib/catalog.js";
import { formatCount, formatRating, formatWon } from "../lib/format.js";
import { HomeTypeBadge, MediaFrame, StockBadge } from "./Marks.jsx";

export function ProductCard({ product }) {
  const category = categoryById(product.category_id);
  return (
    <article className="card" data-state="default">
      <Link className="card-link" to={`/store/${product.id}`}>
        <MediaFrame src={product.image} alt={product.name} />
        <span className="brand">{product.brand}</span>
        <h3>{product.name}</h3>
        <p className="price">{formatWon(product.price_krw)}</p>
        <div className="meta-row">
          <span>평점 {formatRating(product.rating_x10)}</span>
          <span>리뷰 {formatCount(product.review_count)}</span>
          {category ? <span>{category.name}</span> : null}
        </div>
        <StockBadge status={product.stock_status} />
        <span className="btn-local" data-cta="local">
          상품 보기
        </span>
      </Link>
    </article>
  );
}

export function PostCard({ post }) {
  return (
    <article className="card" data-state="default">
      <Link className="card-link" to={`/posts/${post.id}`}>
        <MediaFrame src={post.cover_image} alt={post.title} kind="post" />
        <div className="meta-row">
          <HomeTypeBadge type={post.home_type} />
          <span>{post.area_pyeong}평</span>
          <span>좋아요 {formatCount(post.likes)}</span>
        </div>
        <h3>{post.title}</h3>
        <span className="btn-local" data-cta="local">
          집들이 보기
        </span>
      </Link>
    </article>
  );
}
