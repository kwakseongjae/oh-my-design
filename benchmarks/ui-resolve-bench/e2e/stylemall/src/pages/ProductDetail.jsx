import { useEffect, useId, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MissingRecord } from "../components/MissingRecord.jsx";
import { PriceStack } from "../components/PriceStack.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import {
  assetSrc,
  brandById,
  catalog,
  imageSize,
  lookbooksForProduct,
  productById,
  reviewsFor,
} from "../lib/catalog.js";

export function ProductDetailPage() {
  const { id } = useParams();
  const product = productById(id);
  const groupName = useId();
  const [cut, setCut] = useState(0);
  const [size, setSize] = useState("");

  useEffect(() => {
    if (!product) {
      document.title = `없는 상품 — ${catalog.service.name}`;
      return;
    }
    document.title = `${product.name} — ${catalog.service.name}`;
  }, [product]);

  const reviews = useMemo(() => (product ? reviewsFor(product.id) : []), [product]);
  const distribution = useMemo(() => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    for (const review of reviews) counts[review.rating] += 1;
    return counts;
  }, [reviews]);

  if (!product) return <MissingRecord kind="product" id={id} />;

  const brand = brandById(product.brand_id);
  const looks = lookbooksForProduct(product.id);
  const src = assetSrc(product.images[cut] ?? product.images[0]);
  const dims = imageSize(product.images[cut] ?? product.images[0]);

  function onSizeChange(next) {
    setSize(next);
  }

  return (
    <main id="main" className="page-main well" tabIndex={-1} data-state={size ? "success" : "default"}>
      <div className="detail">
        <div>
          <div className="stage">
            <img src={src} alt="" width={dims.width} height={dims.height} />
          </div>
          <div className="cut-switch" role="tablist" aria-label="컷 전환">
            <button
              type="button"
              role="tab"
              aria-selected={cut === 0}
              onClick={() => setCut(0)}
            >
              모델 컷
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={cut === 1}
              onClick={() => setCut(1)}
            >
              제품 컷
            </button>
          </div>
        </div>

        <div>
          <p className="eyebrow">
            <Link to={`/brands/${brand.id}`}>{brand.name}</Link>
          </p>
          <h1>{product.name}</h1>
          <p className="lede">{product.short_copy}</p>
          <PriceStack product={product} />
          <p className="review-meta">
            평점 {product.rating} · 후기 {product.review_count} · 랭킹 {product.ranking}
          </p>

          <fieldset className="size-group">
            <legend id={`${groupName}-legend`}>사이즈 선택</legend>
            <div
              className="size-options"
              role="radiogroup"
              aria-labelledby={`${groupName}-legend`}
            >
              {product.sizes.map((item) => (
                <label className="size-option" key={item}>
                  <input
                    type="radio"
                    name={groupName}
                    value={item}
                    checked={size === item}
                    onChange={() => onSizeChange(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {size ? (
            <div
              className="unavailable-info"
              data-state="unavailable-information"
              role="status"
            >
              {product.name} {size}를 골랐습니다. 이 샘플에는 재고 정보가 없습니다.
            </div>
          ) : null}

          <p className="section-tight">
            <Link className="btn" to={`/brands/${brand.id}`} data-cta="primary">
              브랜드 보기
            </Link>
          </p>

          <section className="detail-reviews">
            <h2>후기</h2>
            <div className="review-dist">
              {[5, 4, 3, 2, 1].map((star) => (
                <div className="review-row-meter" key={star}>
                  <span>{star}점</span>
                  <div className="meter" aria-hidden="true">
                    <span style={{ width: `${reviews.length ? (distribution[star] / reviews.length) * 100 : 0}%` }} />
                  </div>
                  <span>{distribution[star]}</span>
                </div>
              ))}
            </div>
            <ul className="review-list">
              {reviews.map((review) => (
                <li key={review.id}>
                  <p className="review-meta">
                    {review.author_nick} · {review.rating}점 · 키 {review.height_cm}cm · 구매 사이즈 {review.purchased_size} · {review.ago}
                  </p>
                  <p className="review-body">{review.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {looks.length ? (
        <section className="section">
          <h2>이 옷이 나온 룩북</h2>
          {looks.map((look) => (
            <Link className="look-preview look-preview-row" key={look.id} to={`/lookbooks/${look.id}`} data-cta="local">
              <img
                src={assetSrc(look.cover_image)}
                alt=""
                width={imageSize(look.cover_image).width}
                height={imageSize(look.cover_image).height}
                loading="lazy"
              />
              <div className="look-preview-copy">
                <h3>{look.title}</h3>
                <p>{look.subtitle}</p>
              </div>
            </Link>
          ))}
        </section>
      ) : null}

      <section className="section">
        <h2>같은 집의 다른 옷</h2>
        <div className="grid-products">
          {catalog.products
            .filter((item) => item.brand_id === product.brand_id && item.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </section>
    </main>
  );
}
