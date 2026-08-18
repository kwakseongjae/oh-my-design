import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "없는 페이지 — 온집";
  }, []);

  return (
    <main id="main" data-state="error">
      <div className="page">
        <header className="page-head">
          <p className="eyebrow">온집</p>
          <h1 id="page-title" className="display">
            없는 페이지입니다
          </h1>
          <p className="error-panel" role="alert">
            주소에 해당하는 화면이 없습니다.
          </p>
          <Link className="btn btn-ghost" to="/">
            홈으로
          </Link>
        </header>
      </div>
    </main>
  );
}
