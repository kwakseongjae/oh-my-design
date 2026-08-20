import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChatPreview, InquiryUnavailable } from "../components/ChatPreview.jsx";
import { ListingList } from "../components/ListingRow.jsx";
import { SellerCard } from "../components/SellerCard.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import {
  categoryById,
  chatForListing,
  formatPrice,
  imageSrc,
  listingById,
  neighborhoodById,
  otherNeighborhoodListings,
  sellerById,
  service,
  timeTone,
} from "../lib/catalog.js";

export function ItemPage() {
  const { id } = useParams();
  const item = listingById(id);
  const seller = item ? sellerById(item.seller_id) : null;
  const neighborhood = item ? neighborhoodById(item.neighborhood_id) : null;
  const category = item ? categoryById(item.category_id) : null;
  const chat = item ? chatForListing(item.id) : null;
  const nearby = item ? otherNeighborhoodListings(item) : [];

  useEffect(() => {
    document.title = item ? `${item.title} — ${service.name}` : `매물을 찾지 못했어요 — ${service.name}`;
  }, [item]);

  if (!item) {
    return (
      <main id="main" className="page" tabIndex={-1} data-state="error">
        <div className="panel" data-state="error" role="alert">
          <h1 id="page-title">그 매물을 찾지 못했어요</h1>
          <p>주소의 글 번호가 이 장터 목록에 없습니다. 없는 글을 만들어 보여주지 않습니다.</p>
          <p>
            <Link to="/">홈 피드로 돌아가기</Link>
          </p>
        </div>
      </main>
    );
  }

  const free = item.price === 0;

  return (
    <main id="main" className="page" tabIndex={-1} data-state={item.status} data-listing={item.id}>
      <div className="detail-grid">
        <div className="media-duo">
          <img
            src={imageSrc(item.images[0])}
            alt={`${item.title} 첫 번째 사진`}
            width={480}
            height={480}
          />
          <img
            src={imageSrc(item.images[1])}
            alt={`${item.title} 두 번째 사진`}
            width={480}
            height={480}
            loading="lazy"
          />
        </div>
        <div className="detail-info">
          <p className="eyebrow">{category?.name}</p>
          <h1 id="page-title">{item.title}</h1>
          <p className="price-xl" data-free={free ? "true" : "false"}>
            {formatPrice(item.price)}
          </p>
          <div className="detail-flags">
            <StatusBadge status={item.status} />
            <span className="listing-meta">{item.condition}</span>
            <span className="listing-time" data-tone={timeTone(item.created_ago)}>
              {item.created_ago}
            </span>
            <span className="listing-meta">{neighborhood?.name}</span>
          </div>
          <p className="counts">
            <span>문의 {item.chat_count.toLocaleString("ko-KR")}</span>
            <span>관심 {item.like_count.toLocaleString("ko-KR")}</span>
            <span>조회 {item.view_count.toLocaleString("ko-KR")}</span>
          </p>
          {seller ? (
            <p>
              <Link className="primary-cta" to={`/sellers/${seller.id}`} data-cta="primary">
                판매자 프로필
              </Link>
            </p>
          ) : null}
          <section className="detail-copy">
            <h2>설명</h2>
            <p>{item.description}</p>
          </section>
        </div>
      </div>

      {seller ? (
        <section className="section">
          <h2>판매자</h2>
          <SellerCard seller={seller} heading="p" />
        </section>
      ) : null}

      <section className="section">
        <h2>문의 대화</h2>
        <div className="chat-well">
          <ChatPreview chat={chat} />
          <InquiryUnavailable />
        </div>
      </section>

      {nearby.length > 0 ? (
        <section className="section">
          <h2>{neighborhood?.name}의 다른 매물</h2>
          <ListingList items={nearby} />
        </section>
      ) : null}
    </main>
  );
}
