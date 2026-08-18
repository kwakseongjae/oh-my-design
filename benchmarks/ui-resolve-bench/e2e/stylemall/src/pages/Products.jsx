import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "../components/ProductCard.jsx";
import { SortListbox } from "../components/SortListbox.jsx";
import {
  catalog,
  categoryById,
  filterProducts,
  GENDER_LABEL,
  sortProducts,
} from "../lib/catalog.js";

const GENDERS = [
  { id: "", label: "모든 성별" },
  { id: "women", label: GENDER_LABEL.women },
  { id: "men", label: GENDER_LABEL.men },
  { id: "unisex", label: GENDER_LABEL.unisex },
];

export function ProductsPage() {
  const [categoryId, setCategoryId] = useState("");
  const [gender, setGender] = useState("");
  const [sortId, setSortId] = useState("ranking");

  const items = useMemo(
    () => sortProducts(filterProducts(categoryId, gender), sortId),
    [categoryId, gender, sortId],
  );

  useEffect(() => {
    document.title = `상품 — ${catalog.service.name}`;
  }, []);

  const categoryName = categoryId ? categoryById(categoryId)?.name : "전체";
  const genderName = GENDERS.find((item) => item.id === gender)?.label ?? "모든 성별";
  const empty = items.length === 0;
  const filtersDirty = categoryId !== "" || gender !== "" || sortId !== "ranking";

  return (
    <main id="main" className="page-main well" tabIndex={-1} data-state={empty ? "empty" : "default"}>
      <p className="eyebrow">카탈로그</p>
      <h1>상품</h1>
      <p className="lede">브랜드가 먼저, 그다음 옷, 그다음 가격. 카테고리와 성별로 좁히고 랭킹·가격·할인율로 정렬합니다.</p>

      <div className="filter-bar">
        <div>
          <p className="eyebrow" id="cat-label">
            카테고리
          </p>
          <div className="filter-row" role="group" aria-labelledby="cat-label">
            <button
              type="button"
              className="chip"
              aria-pressed={categoryId === ""}
              onClick={() => setCategoryId("")}
            >
              전체
            </button>
            {catalog.categories.map((item) => (
              <button
                key={item.id}
                type="button"
                className="chip"
                aria-pressed={categoryId === item.id}
                onClick={() => setCategoryId(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow" id="gender-label">
            성별
          </p>
          <div className="filter-row" role="group" aria-labelledby="gender-label">
            {GENDERS.map((item) => (
              <button
                key={item.id || "all"}
                type="button"
                className="chip"
                aria-pressed={gender === item.id}
                onClick={() => setGender(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <SortListbox value={sortId} onChange={setSortId} />
        <p className="filter-status" role="status">
          {empty
            ? `${categoryName}, ${genderName}에 해당하는 상품이 없습니다.`
            : `${categoryName}, ${genderName} 상품 ${items.length}개`}
        </p>
        {filtersDirty ? (
          <button
            type="button"
            className="btn btn-ghost"
            data-cta="local"
            onClick={() => {
              setCategoryId("");
              setGender("");
              setSortId("ranking");
            }}
          >
            필터 지우기
          </button>
        ) : null}
      </div>

      {empty ? (
        <div className="empty-filter" data-state="empty">
          <h2>조건에 맞는 상품이 없습니다</h2>
          <p>다른 카테고리나 성별을 고르거나, 필터를 지워 전체 상품을 보세요.</p>
        </div>
      ) : (
        <div className="grid-products">
          {items.map((product, index) => (
            <ProductCard key={product.id} product={product} lazy={index > 3} />
          ))}
        </div>
      )}
    </main>
  );
}
