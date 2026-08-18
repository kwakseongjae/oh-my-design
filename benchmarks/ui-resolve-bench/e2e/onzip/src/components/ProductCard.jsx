import { Link } from "react-router-dom";
import {
  assetUrl,
  categoryById,
  formatPrice,
  formatRating,
  lifestyleImage,
  stockTone,
} from "../lib/catalog.js";

export default function ProductCard({ product, headingLevel = "h2" }) {
  const Heading = headingLevel;
  const category = categoryById(product.category_id);
  const src = assetUrl(lifestyleImage(product));
  return (
    <Link className="product-card" to={`/store/${product.id}`} data-cta="local">
      <div className="media">
        <img
          src={src}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <span className="brand">{product.brand}</span>
        <Heading className="title">{product.name}</Heading>
        <span className="price">{formatPrice(product.price_krw)}</span>
        <p className="pitch">{product.short_pitch}</p>
        <div className="meta">
          <span className="badge" data-tone={stockTone(product.stock_status)}>
            {product.stock_status}
          </span>
          <span>{category?.name}</span>
          <span>
            {formatRating(product.rating_x10)} · 후기 {product.review_count.toLocaleString("ko-KR")}
          </span>
        </div>
      </div>
    </Link>
  );
}
