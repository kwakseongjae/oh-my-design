import { Link } from "react-router-dom";
import { neighborhoodById } from "../lib/catalog.js";

export function SellerCard({ seller, heading = "h2" }) {
  const neighborhood = neighborhoodById(seller.neighborhood_id);
  const Heading = heading;
  return (
    <Link className="seller-card" to={`/sellers/${seller.id}`} data-cta="local" data-seller={seller.id}>
      <Heading className="seller-name">{seller.nickname}</Heading>
      <p className="listing-meta">
        {neighborhood?.name} · 거래 {seller.deal_count.toLocaleString("ko-KR")}회 · {seller.joined_ago} 이웃
      </p>
      <p className="listing-meta">
        신뢰지수 {seller.trust_score} · {seller.trust_label}
      </p>
      {seller.badges.length > 0 ? (
        <div className="badge-row">
          {seller.badges.map((badge) => (
            <span key={badge} className="static-badge">
              {badge}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
