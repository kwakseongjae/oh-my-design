import { Link } from "react-router-dom";
import { IMAGE } from "../theme.js";
import { assetSrc } from "../lib/format.js";

export function StockBadge({ status }) {
  return (
    <span className="badge" data-status={status}>
      {status}
    </span>
  );
}

export function HomeTypeBadge({ type }) {
  return (
    <span className="badge" data-home={type}>
      {type}
    </span>
  );
}

export function MediaFrame({ src, alt, kind = "product" }) {
  const size = kind === "post" ? IMAGE.post : IMAGE.product;
  return (
    <figure className={`media${kind === "post" ? " media-post" : ""}`}>
      <img
        src={assetSrc(src)}
        alt={alt}
        width={size.width}
        height={size.height}
      />
    </figure>
  );
}

export function UnavailableInfo({ category, detail }) {
  return (
    <aside
      className="unavailable"
      data-state="unavailable"
      aria-label={`제공되지 않는 정보: ${category}`}
    >
      <p>
        <strong>{category}</strong> 정보는 이 데이터셋에 없습니다. {detail}
      </p>
    </aside>
  );
}

export function EmptyState({ title, detail }) {
  return (
    <div className="empty" data-state="empty" role="status">
      <h2>{title}</h2>
      <p>{detail}</p>
    </div>
  );
}

export function ErrorNotice({ id, kind }) {
  const label = kind === "product" ? "상품" : "집들이";
  const href = kind === "product" ? "/store" : "/posts";
  return (
    <section className="error-panel" data-state="error" role="alert">
      <h1>
        {label}을 찾을 수 없습니다
      </h1>
      <p>
        요청한 식별자 <strong>{id}</strong>는 데이터셋에 없습니다.
      </p>
      <Link className="local-link btn btn-local" to={href}>
        {kind === "product" ? "스토어로 돌아가기" : "집들이 목록으로 돌아가기"}
      </Link>
    </section>
  );
}
