import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ListingList } from "../components/ListingRow.jsx";
import { NeighborhoodSelect } from "../components/NeighborhoodSelect.jsx";
import { filterListings, listingStatusCounts, neighborhoodById, neighborhoodListingCounts, service } from "../lib/catalog.js";

export function FreePage() {
  const [params, setParams] = useSearchParams();
  const neighborhoodId = params.get("nb") || "all";
  const items = filterListings({ neighborhoodId, freeOnly: true });
  const neighborhoodName = neighborhoodId === "all" ? "모든 동네" : neighborhoodById(neighborhoodId)?.name ?? "목록에 없는 동네";
  const neighborhoodCounts = neighborhoodListingCounts({ freeOnly: true });
  const freeCounts = listingStatusCounts(filterListings({ freeOnly: true }));

  useEffect(() => {
    document.title = `나눔 모아보기 — ${service.name}`;
  }, []);

  return (
    <main id="main" className="page" tabIndex={-1}>
      <header className="page-head home-hero">
        <div className="page-head-copy">
          <p className="eyebrow">돈 없이 건네는 것들</p>
          <h1 id="page-title">나눔 모아보기</h1>
          <p className="lede">
            가격이 없는 글만 모았습니다. 필요하신 분이 골목에서 받아 가시면 됩니다.
          </p>
          <Link className="primary-cta" to="/" data-cta="primary">
            전체 매물 보기
          </Link>
        </div>
        <aside className="nb-summary" aria-label="나눔이 있는 동네">
          <p className="eyebrow">나눔이 있는 동네</p>
          <p className="nb-summary-lede">지금 나눔 {freeCounts.total.toLocaleString("ko-KR")}건</p>
          <ul className="nb-summary-list">
            {neighborhoodCounts.map((neighborhood) => (
              <li key={neighborhood.id}>
                <Link className="nb-row" to={`/free?nb=${neighborhood.id}`} data-cta="local">
                  <span>{neighborhood.name}</span>
                  <span className="nb-row-count">{neighborhood.count.toLocaleString("ko-KR")}건</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      <section className="filter-band" aria-label="나눔 동네">
        <NeighborhoodSelect
          id="free-neighborhood-trigger"
          value={neighborhoodId}
          onChange={(value) => {
            const next = new URLSearchParams(params);
            if (value === "all") next.delete("nb");
            else next.set("nb", value);
            setParams(next, { replace: true });
          }}
        />
        <p className="filter-status" role="status" aria-live="polite" data-state="success">
          {neighborhoodName} 나눔 {items.length.toLocaleString("ko-KR")}건
        </p>
      </section>

      {items.length === 0 ? (
        <div className="panel" data-state="empty">
          <h2>이 동네에는 나눔 글이 없어요</h2>
          <p>다른 동네를 고르거나 전체 나눔을 다시 살펴보세요.</p>
        </div>
      ) : (
        <ListingList items={items} eagerCount={3} />
      )}
    </main>
  );
}
