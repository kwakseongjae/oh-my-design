import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/Cards.jsx";
import { FilterChip, SortSelect } from "../components/Filters.jsx";
import { EmptyState } from "../components/Marks.jsx";
import {
  STORE_COUNT_DEFINITION,
  categories,
  filterProducts,
  products,
  stockStatuses,
} from "../lib/catalog.js";

const SORTS = [
  { value: "review-desc", label: "리뷰 많은 순" },
  { value: "price-asc", label: "가격 낮은 순" },
  { value: "price-desc", label: "가격 높은 순" },
  { value: "rating-desc", label: "평점 높은 순" },
  { value: "rating-asc", label: "평점 낮은 순" },
];

export default function Store() {
  const [params, setParams] = useSearchParams();
  const categoryId = params.get("category") ?? "";
  const stockStatus = params.get("stock") ?? "";
  const sort = params.get("sort") ?? "review-desc";
  const cats = categories();
  const stocks = stockStatuses();
  const all = products();

  const list = useMemo(
    () => filterProducts({ categoryId, stockStatus, sort }),
    [categoryId, stockStatus, sort],
  );

  function update(next) {
    const merged = { category: categoryId, stock: stockStatus, sort, ...next };
    const search = new URLSearchParams();
    if (merged.category) search.set("category", merged.category);
    if (merged.stock) search.set("stock", merged.stock);
    if (merged.sort && merged.sort !== "review-desc") search.set("sort", merged.sort);
    setParams(search, { replace: true });
  }

  const categoryName = cats.find((item) => item.id === categoryId)?.name ?? "전체";
  const stockName = stockStatus || "전체";
  const empty = list.length === 0;

  return (
    <div className="page" data-state={empty ? "empty" : "default"}>
      <p className="eyebrow">스토어</p>
      <h1>상품 {all.length}개</h1>
      <p className="definition">{STORE_COUNT_DEFINITION}</p>

      <div className="filters">
        <div className="filter-row" role="group" aria-label="카테고리 필터">
          <span className="filter-label">카테고리</span>
          <FilterChip name="category" value="" current={categoryId} onSelect={(value) => update({ category: value })}>
            전체
          </FilterChip>
          {cats.map((category) => (
            <FilterChip
              key={category.id}
              name="category"
              value={category.id}
              current={categoryId}
              onSelect={(value) => update({ category: value })}
            >
              {category.name}
            </FilterChip>
          ))}
        </div>
        <div className="filter-row" role="group" aria-label="재고 상태 필터">
          <span className="filter-label">재고</span>
          <FilterChip name="stock" value="" current={stockStatus} onSelect={(value) => update({ stock: value })}>
            전체
          </FilterChip>
          {stocks.map((status) => (
            <FilterChip
              key={status}
              name="stock"
              value={status}
              current={stockStatus}
              onSelect={(value) => update({ stock: value })}
            >
              {status}
            </FilterChip>
          ))}
        </div>
        <SortSelect
          id="store-sort"
          value={sort}
          onChange={(value) => update({ sort: value })}
          options={SORTS}
        />
        <p className="status-live" role="status">
          {categoryName}, 재고 {stockName} 기준으로 {list.length}건을 표시합니다.
        </p>
      </div>

      {empty ? (
        <EmptyState
          title="맞는 상품이 없습니다"
          detail={`${categoryName} × ${stockName} 교집합은 0건입니다. 다른 카테고리 또는 재고 상태를 선택해 보세요.`}
        />
      ) : (
        <div className="grid-3" data-state="success">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
