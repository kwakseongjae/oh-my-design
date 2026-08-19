import { useMemo, useState } from "react";
import FilterChips from "../components/FilterChips.jsx";
import Listbox from "../components/Listbox.jsx";
import ProductCard from "../components/ProductCard.jsx";
import {
  catalog,
  categoryHasRows,
  filterProducts,
  SORT_OPTIONS,
  sortProducts,
} from "../lib/catalog.js";
import { usePage } from "../lib/usePage.js";

export default function Store() {
  usePage("스토어 — 온집");
  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState("all");
  const [sort, setSort] = useState("popular");

  const categoryOptions = useMemo(() => [
    { id: "all", label: "전체", disabled: false },
    ...catalog.categories.map((item) => ({
      id: item.id,
      label: item.name,
      disabled: !categoryHasRows(item.id, stock),
    })),
  ], [stock]);

  const stockOptions = useMemo(() => (
    ["전체", "판매중", "품절임박", "품절"].map((label) => ({
      id: label === "전체" ? "all" : label,
      label,
      disabled: false,
    }))
  ), []);

  const rows = useMemo(
    () => sortProducts(filterProducts({ category, stock }), sort),
    [category, stock, sort],
  );

  const categoryLabel = category === "all"
    ? "모든 분류"
    : catalog.categories.find((item) => item.id === category)?.name;
  const stockLabel = stock === "all" ? "모든 재고" : stock;
  const sortLabel = SORT_OPTIONS.find((item) => item.id === sort)?.label;
  const filtered = category !== "all" || stock !== "all";

  return (
    <main id="main" className="main" tabIndex={-1}>
      <header className="page-head">
        <p className="eyebrow">스토어</p>
        <h1 id="page-title">자리에 어울리는 스물네 가지</h1>
        <p className="lede">
          라이프스타일 사진과 한 줄로 고릅니다. 분류와 재고를 거르고, 가격이나 평점으로 줄을 바꿀 수 있습니다.
        </p>
      </header>

      <div className="toolbar">
        <FilterChips
          legend="분류"
          name="category"
          value={category}
          onChange={setCategory}
          options={categoryOptions}
        />
        <FilterChips
          legend="재고"
          name="stock"
          value={stock}
          onChange={setStock}
          options={stockOptions}
        />
        <Listbox
          label="정렬"
          value={sort}
          options={SORT_OPTIONS}
          onChange={setSort}
        />
      </div>

      {filtered ? (
        <button type="button" className="btn btn-ghost" data-cta="local" onClick={() => { setCategory("all"); setStock("all"); }}>
          필터 지우기
        </button>
      ) : null}

      <p className="live-line" role="status">
        {categoryLabel} · {stockLabel} · {sortLabel} · {rows.length}개
      </p>

      {rows.length === 0 ? (
        <div className="empty-panel" data-state="empty">
          <p>이 조건에 맞는 상품이 없습니다.</p>
          <button
            type="button"
            className="btn"
            data-cta="local"
            onClick={() => { setCategory("all"); setStock("all"); }}
          >
            필터 지우기
          </button>
        </div>
      ) : (
        <div className="card-grid cols-4" data-state="success">
          {rows.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
