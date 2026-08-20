import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MissingRecord } from "../components/MissingRecord.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import {
  brandById,
  catalog,
  formatFollowers,
  productsForBrand,
} from "../lib/catalog.js";

export function BrandPage() {
  const { id } = useParams();
  const brand = brandById(id);
  const items = brand ? productsForBrand(brand.id) : [];

  useEffect(() => {
    document.title = brand
      ? `${brand.name} — ${catalog.service.name}`
      : `없는 브랜드 — ${catalog.service.name}`;
  }, [brand]);

  if (!brand) return <MissingRecord kind="brand" id={id} />;

  return (
    <main id="main" className="page-main well" tabIndex={-1} data-state="default">
      <p className="eyebrow">{brand.origin}</p>
      <h1>{brand.name}</h1>
      <p className="lede">{brand.one_liner}</p>
      <p className="filter-status">{formatFollowers(brand.follower_count)}</p>
      <p>
        <Link className="btn" to="/products" data-cta="primary">
          상품 전체
        </Link>
      </p>
      <section className="section-tight">
        <h2>이 집의 옷</h2>
        <div className="grid-products">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
