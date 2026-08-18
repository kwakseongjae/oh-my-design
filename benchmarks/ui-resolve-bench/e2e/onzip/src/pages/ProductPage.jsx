import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategory, getProduct, postsForProduct } from "../lib/data.js";
import { formatCount, formatRating, formatWon } from "../lib/format.js";
import {
  Button,
  CatalogImage,
  ErrorPanel,
  PostCard,
  StockBadge,
  UNAVAILABLE_ITEMS,
  UnavailablePanel,
} from "../components/primitives.jsx";

export function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const related = product ? postsForProduct(product.id) : [];
  const category = product ? getCategory(product.category_id) : null;

  useEffect(() => {
    document.title = product ? `${product.name} — 온집` : "없는 상품 — 온집";
  }, [product]);

  if (!product) {
    return (
      <ErrorPanel title="이 상품을 찾을 수 없습니다" requestedId={id} to="/store" recoverLabel="스토어로 돌아가기">
        주소의 상품 번호가 샘플 목록에 없습니다. 숫자를 지어내지 않았습니다.
      </ErrorPanel>
    );
  }

  const soldOut = product.stock_status === "품절";

  return (
    <article data-state="success">
      <div className="record">
        <div className="record__media">
          <CatalogImage src={product.image} alt={product.name} lazy={false} />
        </div>
        <div className="record__facts">
          <p className="eyebrow">{product.brand}</p>
          <h1 id="page-title">{product.name}</h1>
          {category ? <p className="meta">{category.name}</p> : null}
          <p className="record__price">{formatWon(product.price_krw)}</p>
          <div className="tile__meta">
            <span>평점 {formatRating(product.rating_x10)}</span>
            <span>리뷰 {formatCount(product.review_count)}</span>
            <StockBadge status={product.stock_status} />
            <span>가격·리뷰는 샘플입니다</span>
          </div>
          <div className="tag-row">
            {product.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="detail-actions">
            <Button type="button" cta="local" disabled={soldOut}>
              {soldOut ? "품절이라 담을 수 없음" : "관심 목록에 두기"}
            </Button>
            <Button as={Link} to="/store" variant="ghost" cta="local">
              스토어로
            </Button>
          </div>
          <UnavailablePanel items={UNAVAILABLE_ITEMS} />
        </div>
      </div>
      <section className="joined" aria-labelledby="related-posts">
        <div className="section-head">
          <div>
            <p className="eyebrow">집들이 역참조</p>
            <h2 id="related-posts">이 상품이 등장한 집</h2>
          </div>
          <p className="definition">
            정의: 사용된 상품 목록에 이 번호가 적힌 게시글 {related.length}개
          </p>
        </div>
        {related.length === 0 ? (
          <p className="meta">이 상품이 실린 집들이는 없습니다.</p>
        ) : (
          <div className="grid-2">
            {related.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
