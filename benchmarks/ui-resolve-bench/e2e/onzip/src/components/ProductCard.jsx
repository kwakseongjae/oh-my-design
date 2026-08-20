import { Link } from "react-router-dom";
import {
  asset,
  categoryById,
  formatRating,
  formatWon,
  lifestyleImage,
  stockTone,
} from "../lib/catalog.js";

export default function ProductCard({ product, heading = "h3", cta = "local" }) {
  const Heading = heading;
  const category = categoryById(product.category_id);
  const tone = stockTone(product.stock_status);
  const src = asset(lifestyleImage(product));

  return (
    <Link
      to={`/store/${product.id}`}
      className="product-card"
      data-cta={cta}
      data-state="default"
    >
      <img
        className="media"
        src={src}
        alt=""
        width="800"
        height="600"
        loading="lazy"
      />
      <div className="card-body">
        <p className="eyebrow">{product.brand}</p>
        <Heading>{product.name}</Heading>
        <p className="price">{formatWon(product.price_krw)}</p>
        <p className="pitch">{product.short_pitch}</p>
        <p className="meta-row">
          <span className={`stock stock-${tone}`}>{product.stock_status}</span>
          <span>{category?.name}</span>
          <span>평점 {formatRating(product.rating_x10)}</span>
          <span>후기 {product.review_count.toLocaleString("ko-KR")}건</span>
        </p>
      </div>
    </Link>
  );
}
