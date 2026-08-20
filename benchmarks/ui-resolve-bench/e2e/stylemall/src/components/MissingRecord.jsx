import { Link } from "react-router-dom";

export function MissingRecord({ kind, id }) {
  const label = kind === "lookbook" ? "룩북" : kind === "brand" ? "브랜드" : "상품";
  return (
    <main id="main" className="page-main well missing-record" tabIndex={-1} data-state="error">
      <p className="eyebrow">없는 기록</p>
      <h1>{label}을 찾을 수 없습니다</h1>
      <p className="lede">
        {label} 번호 {id}는 이 샘플 카탈로그에 없습니다. 다른 상품을 보거나 홈으로 돌아가 주세요.
      </p>
      <Link className="btn" to="/products" data-cta="primary">
        상품 보기
      </Link>
    </main>
  );
}
