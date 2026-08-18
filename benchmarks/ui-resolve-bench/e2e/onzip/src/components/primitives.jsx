import { Link } from "react-router-dom";
import { formatCount, formatPyeong, formatRating, formatWon } from "../lib/format.js";
import { assetSize, assetSrc } from "../lib/images.js";
import { getCategory } from "../lib/data.js";

export function Button({
  as: Comp = "button",
  variant = "primary",
  cta,
  disabled,
  children,
  className = "",
  ...props
}) {
  const extra = disabled ? { "aria-disabled": Comp === "a" || Comp === Link ? true : undefined, disabled: Comp === "button" ? true : undefined } : {};
  return (
    <Comp
      className={`button button--${variant} ${className}`.trim()}
      data-cta={cta}
      data-state={disabled ? "disabled" : "default"}
      {...extra}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function StockBadge({ status }) {
  return (
    <span className={`badge badge--${status}`} data-token={`stock:${status}`}>
      {status}
    </span>
  );
}

export function HomeTypeBadge({ type }) {
  return (
    <span className={`badge badge--${type}`} data-token={`home-type:${type}`}>
      {type}
    </span>
  );
}

export function CatalogImage({ src, alt, lazy = true, className }) {
  const resolved = assetSrc(src);
  const size = assetSize(src);
  return (
    <img
      className={className}
      src={resolved}
      alt={alt}
      width={size.width}
      height={size.height}
      loading={lazy ? "lazy" : "eager"}
    />
  );
}

export function ProductCard({ product }) {
  const category = getCategory(product.category_id);
  return (
    <Link
      className="tile"
      to={`/store/${product.id}`}
      data-cta="local"
      data-state="default"
    >
      <div className="tile__media">
        <CatalogImage src={product.image} alt="" />
      </div>
      <div className="tile__body">
        <p className="tile__brand">{product.brand}</p>
        <h3 className="tile__name">{product.name}</h3>
        <p className="tile__price">{formatWon(product.price_krw)}</p>
        <div className="tile__meta">
          <span>평점 {formatRating(product.rating_x10)}</span>
          <span>리뷰 {formatCount(product.review_count)}</span>
          {category ? <span>{category.name}</span> : null}
        </div>
        <StockBadge status={product.stock_status} />
        <span className="tile__action">상품 보기</span>
      </div>
    </Link>
  );
}

export function PostCard({ post }) {
  return (
    <Link className="tile" to={`/posts/${post.id}`} data-cta="local" data-state="default">
      <div className="tile__media">
        <CatalogImage src={post.cover_image} alt="" />
      </div>
      <div className="tile__body">
        <HomeTypeBadge type={post.home_type} />
        <h3 className="tile__title">{post.title}</h3>
        <div className="tile__meta">
          <span>{formatPyeong(post.area_pyeong)}</span>
          <span>좋아요 {formatCount(post.likes)}</span>
          <span>{post.author_nick}</span>
        </div>
        <span className="tile__action">집들이 보기</span>
      </div>
    </Link>
  );
}

export function EmptyPanel({ title, children, onReset, resetLabel = "필터 지우기" }) {
  return (
    <div className="panel panel--empty" data-state="empty" role="status">
      <h2>{title}</h2>
      <p>{children}</p>
      {onReset ? (
        <Button variant="secondary" className="tile__action-btn" type="button" onClick={onReset} cta="local" style={{ marginTop: "1rem" }}>
          {resetLabel}
        </Button>
      ) : null}
    </div>
  );
}

export function ErrorPanel({ title, requestedId, children, to, recoverLabel }) {
  return (
    <div className="panel panel--error" data-state="error" role="alert">
      <h1 id="page-title">{title}</h1>
      {requestedId ? <p>요청한 번호: {requestedId}</p> : null}
      <p>{children}</p>
      {to ? (
        <Button as={Link} to={to} variant="secondary" cta="local" style={{ marginTop: "1rem" }}>
          {recoverLabel}
        </Button>
      ) : null}
    </div>
  );
}

export function UnavailablePanel({ title = "제공되지 않는 정보", items }) {
  return (
    <div className="panel panel--unavailable" data-state="unavailable">
      <p className="label">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function FilterChip({ name, value, checked, onChange, children }) {
  const id = `${name}-${value}`;
  return (
    <label className="chip" htmlFor={id}>
      <input id={id} type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
}

export const UNAVAILABLE_ITEMS = [
  "실시간 재고 수량 — 판매중·품절임박·품절 상태만 있습니다.",
  "배송 예정일 — 이 샘플에는 배송 정보가 없습니다.",
  "집들이 게시일 — 시간 정보가 없어 달력 기준 최신을 계산할 수 없습니다.",
];
