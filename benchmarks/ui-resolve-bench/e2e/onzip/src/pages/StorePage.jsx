import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Listbox from "../components/Listbox.jsx";
import ProductCard from "../components/ProductCard.jsx";
import {
  CATEGORIES,
  CURATIONS,
  SORTS,
  STOCK_ALL,
  STOCK_VALUES,
  filterProducts,
} from "../lib/catalog.js";

export default function StorePage() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "all";
  const stock = params.get("stock") || STOCK_ALL;
  const sort = params.get("sort") || "popular";
  const curationId = params.get("curation");
  const curation = CURATIONS.find((item) => item.id === curationId) ?? null;

  const products = useMemo(() => {
    const next = filterProducts({ category, stock, sort });
    if (!curation) return next;
    const allow = new Set(curation.product_ids);
    return next.filter((item) => allow.has(item.id));
  }, [category, stock, sort, curation]);

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === "all") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const categoryName =
    category === "all"
      ? "모든 분류"
      : CATEGORIES.find((item) => item.slug === category)?.name ?? "없는 분류";
  const stockName = stock === STOCK_ALL ? "모든 재고" : stock;
  const summary = `${categoryName}, ${stockName} · ${products.length}개 상품`;

  useEffect(() => {
    document.title = "스토어 — 온집";
  }, []);

  return (
    <main id="main">
      <div className="page">
        <header className="page-head">
          <p className="eyebrow">스토어</p>
          <h1 id="page-title" className="display">
            {curation ? curation.title : "자리에 앉힐 물건"}
          </h1>
          <p className="lede">
            {curation
              ? curation.subtitle
              : "라이프스타일 컷과 한 줄로 고르세요. 스물네 가지를 분류와 재고로 거르고, 가격이나 평점으로 줄을 바꿉니다."}
          </p>
        </header>

        <div className="toolbar">
          <fieldset className="fieldset">
            <legend>분류</legend>
            <div className="chip-row">
              <button
                type="button"
                className="chip"
                aria-pressed={category === "all"}
                onClick={() => setParam("category", "all")}
              >
                전체
              </button>
              {CATEGORIES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="chip"
                  aria-pressed={category === item.slug}
                  onClick={() => setParam("category", item.slug)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend>재고</legend>
            <div className="chip-row">
              <button
                type="button"
                className="chip"
                aria-pressed={stock === STOCK_ALL}
                onClick={() => setParam("stock", STOCK_ALL)}
              >
                전체
              </button>
              {STOCK_VALUES.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="chip"
                  aria-pressed={stock === item}
                  onClick={() => setParam("stock", item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>

          <Listbox
            label="정렬"
            value={sort}
            options={SORTS}
            onChange={(next) => setParam("sort", next)}
          />
        </div>

        <p className="live-summary" role="status" data-state="success">
          {summary}
        </p>

        {products.length === 0 ? (
          <div className="empty-panel" data-state="empty">
            <p>이 조건에 맞는 상품이 없습니다. 분류나 재고를 넓혀 보세요.</p>
          </div>
        ) : (
          <div className="card-grid cols-4" data-state="default">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
