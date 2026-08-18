import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { MissingRecord } from "../components/MissingRecord.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import {
  assetSrc,
  catalog,
  imageSize,
  lookbookById,
  productById,
} from "../lib/catalog.js";

function Reveal({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.classList.add("is-in");
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}

export function LookbookPage() {
  const { id } = useParams();
  const look = lookbookById(id);

  useEffect(() => {
    document.title = look
      ? `${look.title} — ${catalog.service.name}`
      : `없는 룩북 — ${catalog.service.name}`;
  }, [look]);

  if (!look) return <MissingRecord kind="lookbook" id={id} />;

  const products = look.product_ids.map((productId) => productById(productId)).filter(Boolean);
  const chunks = look.cuts.map((cut, index) => {
    const start = Math.ceil((index * products.length) / look.cuts.length);
    const end = Math.ceil(((index + 1) * products.length) / look.cuts.length);
    return {
      cut,
      copy: products[index]?.short_copy ?? look.subtitle,
      items: products.slice(start, end),
    };
  });

  return (
    <main id="main" className="page-main look-page" tabIndex={-1} data-state="default">
      <Reveal className="look-block look-cover look-well">
        <p className="eyebrow">룩북</p>
        <h1>{look.title}</h1>
        <p className="lede">{look.subtitle}</p>
        <p>
          <Link className="btn" to="/products" data-cta="primary">
            상품 보기
          </Link>
        </p>
        <img
          src={assetSrc(look.cover_image)}
          alt=""
          width={imageSize(look.cover_image).width}
          height={imageSize(look.cover_image).height}
        />
      </Reveal>

      {chunks.map((chunk, index) => (
        <Reveal className="look-block look-well" key={chunk.cut}>
          <div className="look-cut">
            <img
              src={assetSrc(chunk.cut)}
              alt=""
              width={imageSize(chunk.cut).width}
              height={imageSize(chunk.cut).height}
              loading="lazy"
            />
            <div className="look-cut-copy">
              <p className="eyebrow">컷 {index + 1}</p>
              <h2>{products[index]?.name ?? look.title}</h2>
              <p className="lede">{chunk.copy}</p>
            </div>
          </div>
          {chunk.items.length === 1 ? (
            <div className="look-join">
              <ProductCard product={chunk.items[0]} showRank={false} layout="media" />
            </div>
          ) : chunk.items.length ? (
            <div className="look-join grid-products">
              {chunk.items.map((item) => (
                <ProductCard key={item.id} product={item} showRank={false} />
              ))}
            </div>
          ) : null}
        </Reveal>
      ))}
    </main>
  );
}
