import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ListingList } from "../components/ListingRow.jsx";
import { TrustMeter } from "../components/TrustMeter.jsx";
import {
  groupByStatus,
  listingsBySeller,
  neighborhoodById,
  sellerById,
  service,
  statusLabel,
} from "../lib/catalog.js";

export function SellerPage() {
  const { id } = useParams();
  const seller = sellerById(id);
  const items = seller ? listingsBySeller(seller.id) : [];
  const groups = groupByStatus(items);
  const neighborhood = seller ? neighborhoodById(seller.neighborhood_id) : null;

  useEffect(() => {
    document.title = seller ? `${seller.nickname} — ${service.name}` : `이웃을 찾지 못했어요 — ${service.name}`;
  }, [seller]);

  if (!seller) {
    return (
      <main id="main" className="page" tabIndex={-1} data-state="error">
        <div className="panel" data-state="error" role="alert">
          <h1 id="page-title">그 이웃을 찾지 못했어요</h1>
          <p>주소의 판매자 번호가 이 장터 목록에 없습니다.</p>
          <p>
            <Link to="/">홈 피드로 돌아가기</Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main id="main" className="page" tabIndex={-1} data-seller={seller.id}>
      <header className="page-head">
        <p className="eyebrow">{neighborhood?.name}</p>
        <h1 id="page-title">{seller.nickname}</h1>
        <p className="lede">
          {seller.joined_ago}부터 이웃 · 거래 {seller.deal_count.toLocaleString("ko-KR")}회
        </p>
        <TrustMeter seller={seller} />
        {seller.badges.length > 0 ? (
          <div className="badge-row">
            {seller.badges.map((badge) => (
              <span key={badge} className="static-badge">
                {badge}
              </span>
            ))}
          </div>
        ) : (
          <p className="listing-meta">아직 받은 배지가 없습니다.</p>
        )}
        <Link className="primary-cta" to={`/?nb=${seller.neighborhood_id}`} data-cta="primary">
          같은 동네 매물 보기
        </Link>
      </header>

      {(["selling", "reserved", "sold"]).map((status) => (
        <section key={status} className="section status-group">
          <h2>
            {statusLabel(status)} {groups[status].length.toLocaleString("ko-KR")}
          </h2>
          {groups[status].length === 0 ? (
            <p className="listing-meta">이 상태의 매물이 없습니다.</p>
          ) : (
            <ListingList items={groups[status]} />
          )}
        </section>
      ))}
    </main>
  );
}
