import { Link } from "react-router-dom";
import { usePage } from "../lib/usePage.js";

export default function NotFound() {
  usePage("없는 페이지 — 온집");
  return (
    <main id="main" className="main" tabIndex={-1}>
      <div className="error-panel" data-state="error" role="alert">
        <h1 id="page-title">이 페이지를 찾을 수 없습니다</h1>
        <p>주소가 온집의 홈, 스토어, 집들이와 맞지 않습니다.</p>
        <Link className="btn" to="/" data-cta="primary">홈으로 돌아가기</Link>
      </div>
    </main>
  );
}
