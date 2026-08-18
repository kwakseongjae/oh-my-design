import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  STOCK_STATUSES,
  categories,
  filterProducts,
  products,
} from "../lib/data.js";
import { EmptyPanel, FilterChip, ProductCard } from "../components/primitives.jsx";

const SORTS = [
  { value: "listed", label: "수록 순서" },
  { value: "price-asc", label: "가격 낮은순" },
  { value: "price-desc", label: "가격 높은순" },
  { value: "rating-desc", label: "평점 높은순" },
  { value: "rating-asc", label: "평점 낮은순" },
];

export function StorePage() {
  const [params, setParams] = useSearchParams();
  const categoryId = params.get("category") || "all";
  const stock = params.get("stock") || "all";
  const sort = params.get("sort") || "listed";

  const knownCategory = categoryId === "all" || categories.some((item) => item.id === categoryId);
  const knownStock = stock === "all" || STOCK_STATUSES.includes(stock);
  const knownSort = SORTS.some((item) => item.value === sort);

  const rows = useMemo(
    () =>
      filterProducts({
        categoryId: knownCategory ? categoryId : "all",
        stock: knownStock ? stock : "all",
        sort: knownSort ? sort : "listed",
      }),
    [categoryId, stock, sort, knownCategory, knownStock, knownSort],
  );

  const categoryLabel =
    categoryId === "all" ? "전체 분류" : categories.find((item) => item.id === categoryId)?.name || "알 수 없는 분류";
  const stockLabel = stock === "all" ? "모든 재고" : stock;
  const sortLabel = SORTS.find((item) => item.value === sort)?.label || "수록 순서";

  useEffect(() => {
    document.title = "스토어 — 온집";
  }, []);

  function update(next) {
    const merged = {
      category: categoryId,
      stock,
      sort,
      ...next,
    };
    const nextParams = new URLSearchParams();
    if (merged.category && merged.category !== "all") nextParams.set("category", merged.category);
    if (merged.stock && merged.stock !== "all") nextParams.set("stock", merged.stock);
    if (merged.sort && merged.sort !== "listed") nextParams.set("sort", merged.sort);
    setParams(nextParams);
  }

  function reset() {
    setParams(new URLSearchParams());
  }

  return (
    <>
      <header className="page-head">
        <p className="eyebrow">스토어</p>
        <h1 id="page-title">가구와 살림</h1>
        <p>
          샘플에 실린 {products.length}개 상품입니다. 여섯 분류와 재고 상태로 거르고, 가격 또는
          평점으로 줄을 세웁니다.
        </p>
      </header>

      <div className="toolbar">
        <div>
          <fieldset className="filter-block">
            <legend className="label">분류</legend>
            <div className="chip-row">
              <FilterChip name="category" value="all" checked={categoryId === "all"} onChange={() => update({ category: "all" })}>
                전체
              </FilterChip>
              {categories.map((category) => (
                <FilterChip
                  key={category.id}
                  name="category"
                  value={category.id}
                  checked={categoryId === category.id}
                  onChange={() => update({ category: category.id })}
                >
                  {category.name}
                </FilterChip>
              ))}
            </div>
          </fieldset>
          <fieldset className="filter-block" style={{ marginTop: "1.25rem" }}>
            <legend className="label">재고</legend>
            <div className="chip-row">
              <FilterChip name="stock" value="all" checked={stock === "all"} onChange={() => update({ stock: "all" })}>
                전체
              </FilterChip>
              {STOCK_STATUSES.map((status) => (
                <FilterChip
                  key={status}
                  name="stock"
                  value={status}
                  checked={stock === status}
                  onChange={() => update({ stock: status })}
                >
                  {status}
                </FilterChip>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="select-field">
          <label htmlFor="sort">정렬</label>
          <div className="select-control">
            <select
              id="sort"
              value={knownSort ? sort : "listed"}
              onChange={(event) => update({ sort: event.target.value })}
            >
              {SORTS.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="status-line" role="status">
        {categoryLabel} · {stockLabel} · {sortLabel} — 결과 {rows.length}개
        <span className="definition"> (정의: 선택한 분류와 재고가 모두 맞는 상품 수)</span>
      </p>

      {rows.length === 0 ? (
        <EmptyPanel title="맞는 상품이 없습니다" onReset={reset}>
          {categoryLabel} · {stockLabel}을 동시에 만족하는 상품이 샘플에 없습니다. 필터를 지우면
          전체 {products.length}개가 다시 보입니다.
        </EmptyPanel>
      ) : (
        <div className="grid-3 grid-3--store" data-state="success">
          {rows.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
