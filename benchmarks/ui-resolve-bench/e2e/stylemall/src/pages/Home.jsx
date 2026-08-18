import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RankingCarousel } from "../components/RankingCarousel.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import {
  assetSrc,
  catalog,
  imageSize,
  productById,
} from "../lib/catalog.js";

export function HomePage() {
  const [first, second] = catalog.curations;

  useEffect(() => {
    document.title = `${catalog.service.name} — ${catalog.service.tagline}`;
  }, []);

  return (
    <main id="main" className="page-main" tabIndex={-1} data-state="default">
      <section className="hero">
        <figure className="hero-figure">
          <img
            src={assetSrc(first.banner_image)}
            alt=""
            width={imageSize(first.banner_image).width}
            height={imageSize(first.banner_image).height}
          />
        </figure>
        <div className="hero-copy">
          <p className="eyebrow">기획전 · {first.ends_in_days}일 남음</p>
          <h1>{catalog.service.tagline}</h1>
          <p className="lede">
            {first.title}. {first.subtitle}
          </p>
          <Link className="btn" to="/products" data-cta="primary">
            상품 보기
          </Link>
        </div>
      </section>

      <section className="section well">
        <p className="eyebrow">랭킹</p>
        <h2>지금 많이 보는 옷</h2>
        <RankingCarousel />
      </section>

      <section className="section well second-banner">
        <img
          src={assetSrc(second.banner_image)}
          alt=""
          width={imageSize(second.banner_image).width}
          height={imageSize(second.banner_image).height}
          loading="lazy"
        />
        <div>
          <p className="eyebrow">기획전 · {second.ends_in_days}일 남음</p>
          <h2>{second.title}</h2>
          <p className="lede">{second.subtitle}</p>
          <div className="grid-products grid-compact">
            {second.product_ids.slice(0, 4).map((id) => {
              const product = productById(id);
              return product ? <ProductCard key={id} product={product} /> : null;
            })}
          </div>
        </div>
      </section>

      <section className="section well">
        <p className="eyebrow">룩북</p>
        <h2>잘라 본 계절</h2>
        <div className="grid-looks">
          {catalog.lookbooks.map((look) => (
            <Link className="look-preview" key={look.id} to={`/lookbooks/${look.id}`} data-cta="local">
              <img
                src={assetSrc(look.cover_image)}
                alt=""
                width={imageSize(look.cover_image).width}
                height={imageSize(look.cover_image).height}
                loading="lazy"
              />
              <h3>{look.title}</h3>
              <p>{look.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-air well">
        <p className="eyebrow">브랜드</p>
        <h2>주목하는 집</h2>
        <div className="grid-brands">
          {catalog.brands.map((brand) => (
            <Link className="brand-tile" key={brand.id} to={`/brands/${brand.id}`} data-cta="local">
              <strong>{brand.name}</strong>
              <p>{brand.one_liner}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
