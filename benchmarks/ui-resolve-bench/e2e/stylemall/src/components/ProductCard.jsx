import { Link } from "react-router-dom";
import { assetSrc, brandById, imageSize } from "../lib/catalog.js";
import { PriceStack } from "./PriceStack.jsx";

export function ProductCard({ product, showRank = true, lazy = true, layout = "stack" }) {
  const brand = brandById(product.brand_id);
  const src = assetSrc(product.images[0]);
  const size = imageSize(product.images[0]);
  const media = layout === "media";
  return (
    <Link
      className={media ? "product-card product-card-media" : "product-card"}
      to={`/products/${product.id}`}
      data-cta="local"
      data-state="default"
    >
      <div className="card-media">
        {showRank ? <span className="ranking-mark">{product.ranking}</span> : null}
        <img
          src={src}
          alt=""
          width={size.width}
          height={size.height}
          loading={lazy ? "lazy" : "eager"}
        />
      </div>
      <div className="card-body">
        <p className="card-brand">{brand?.name ?? product.brand_id}</p>
        <p className="card-name">{product.name}</p>
        <PriceStack product={product} />
      </div>
    </Link>
  );
}
