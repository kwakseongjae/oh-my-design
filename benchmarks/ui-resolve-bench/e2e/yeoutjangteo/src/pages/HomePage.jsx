import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CategoryChips } from "../components/CategoryChips.jsx";
import { ListingList } from "../components/ListingRow.jsx";
import { NeighborhoodSelect } from "../components/NeighborhoodSelect.jsx";
import {
  categoryById,
  filterListings,
  neighborhoodById,
  neighborhoodListingCounts,
  service,
} from "../lib/catalog.js";

export function HomePage() {
  const [params, setParams] = useSearchParams();
  const neighborhoodId = params.get("nb") || "all";
  const categoryId = params.get("cat") || "all";
  const items = filterListings({ neighborhoodId, categoryId });
  const neighborhoodName = neighborhoodId === "all" ? "모든 동네" : neighborhoodById(neighborhoodId)?.name ?? "목록에 없는 동네";
  const categoryName = categoryId === "all" ? "전체 카테고리" : categoryById(categoryId)?.name ?? "목록에 없는 종류";
  const neighborhoodCounts = neighborhoodListingCounts();

  useEffect(() => {
    document.title = `${service.name} — ${service.tagline}`;
  }, []);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  return (
    <main id="main" className="page" tabIndex={-1}>
      <header className="page-head home-hero">
        <div className="page-head-copy">
          <p className="eyebrow">{service.tagline}</p>
          <h1 id="page-title">지금 우리 동네에서</h1>
          <p className="lede">
            제목, 가격, 동네, 올린 시각, 거래 상태를 한 줄에서 훑고 바로 들어가세요.
          </p>
          <Link className="primary-cta" to="/free" data-cta="primary">
            나눔 모아보기
          </Link>
        </div>
        <aside className="nb-summary" aria-label="동네별 매물 수">
          <p className="eyebrow">동네별 매물</p>
          <ul className="nb-summary-list">
            {neighborhoodCounts.map((neighborhood) => (
              <li key={neighborhood.id}>
                <Link className="nb-chip" to={`/?nb=${neighborhood.id}`} data-cta="local">
                  <span>{neighborhood.name}</span>
                  <span className="nb-chip-count">{neighborhood.count.toLocaleString("ko-KR")}건</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      <section className="filter-band" aria-label="매물 거르기">
        <NeighborhoodSelect
          id="neighborhood-trigger"
          value={neighborhoodId}
          onChange={(value) => setFilter("nb", value)}
        />
        <CategoryChips value={categoryId} onChange={(value) => setFilter("cat", value)} />
        <p className="filter-status" role="status" aria-live="polite" data-state="success">
          {neighborhoodName} · {categoryName} 매물 {items.length.toLocaleString("ko-KR")}건
        </p>
      </section>

      {items.length === 0 ? (
        <div className="panel" data-state="empty">
          <h2>이 조건의 매물이 없어요</h2>
          <p>
            {neighborhoodName}과 {categoryName}를 함께 고르면 지금 장터에 올라온 글이 없습니다. 동네나 종류를 넓혀 보세요.
          </p>
        </div>
      ) : (
        <ListingList items={items} eagerCount={4} />
      )}
    </main>
  );
}
