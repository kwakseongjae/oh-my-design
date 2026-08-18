import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assetSrc, brandById, imageSize, rankedProducts } from "../lib/catalog.js";

function prefersReducedMotion() {
  return typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function RankingCarousel() {
  const slides = rankedProducts(5);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(() => prefersReducedMotion());
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (paused || reduced) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, reduced, slides.length]);

  const current = slides[index];
  const brand = brandById(current.brand_id);

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="랭킹 상위 상품">
      <div className="carousel-layout">
        <div className="carousel-media">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((item, slideIndex) => {
              const itemSrc = assetSrc(item.images[0]);
              const itemSize = imageSize(item.images[0]);
              const hidden = slideIndex !== index;
              return (
                <article
                  className="carousel-slide"
                  key={item.id}
                  aria-hidden={hidden}
                  aria-label={`${item.ranking}위 ${item.name}`}
                >
                  <Link to={`/products/${item.id}`} data-cta="local" tabIndex={hidden ? -1 : 0}>
                    <img
                      src={itemSrc}
                      alt=""
                      width={itemSize.width}
                      height={itemSize.height}
                      loading={slideIndex === 0 ? "eager" : "lazy"}
                    />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="carousel-controls">
            <button
              type="button"
              aria-label="이전 랭킹"
              data-cta="local"
              onClick={() => setIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)}
            >
              이전
            </button>
            <button
              type="button"
              aria-label={paused ? "자동 넘김 재개" : "자동 넘김 일시정지"}
              aria-pressed={paused}
              data-cta="local"
              disabled={reduced}
              data-state={reduced ? "disabled" : "default"}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? "재생" : "일시정지"}
            </button>
            <button
              type="button"
              aria-label="다음 랭킹"
              data-cta="local"
              onClick={() => setIndex((currentIndex) => (currentIndex + 1) % slides.length)}
            >
              다음
            </button>
          </div>
        </div>
        <ol className="carousel-ranks">
          {slides.map((item, slideIndex) => {
            const itemBrand = brandById(item.brand_id);
            const currentSlide = slideIndex === index;
            return (
              <li key={item.id}>
                <Link
                  to={`/products/${item.id}`}
                  data-cta="local"
                  aria-current={currentSlide ? "true" : undefined}
                  onClick={(event) => {
                    if (!currentSlide) {
                      event.preventDefault();
                      setIndex(slideIndex);
                    }
                  }}
                >
                  <span className="carousel-rank-num">{item.ranking}</span>
                  <span className="carousel-rank-copy">
                    <span className="card-brand">{itemBrand?.name}</span>
                    <span className="carousel-rank-name">{item.name}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {index + 1}번째, {brand?.name} {current.name}
      </p>
    </section>
  );
}
