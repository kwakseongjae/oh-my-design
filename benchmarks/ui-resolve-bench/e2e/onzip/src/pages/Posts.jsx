import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FilterChips from "../components/FilterChips.jsx";
import { asset, filterPosts, HOME_TYPES } from "../lib/catalog.js";
import { usePage } from "../lib/usePage.js";

export default function Posts() {
  usePage("집들이 — 온집");
  const [homeType, setHomeType] = useState("all");
  const rows = useMemo(() => filterPosts(homeType), [homeType]);
  const options = useMemo(() => [
    { id: "all", label: "전체", disabled: false },
    ...HOME_TYPES.map((type) => ({
      id: type,
      label: type,
      disabled: filterPosts(type).length === 0,
    })),
  ], []);

  return (
    <main id="main" className="main" tabIndex={-1}>
      <header className="page-head">
        <p className="eyebrow">집들이</p>
        <h1 id="page-title">우리 집에 들이는 이야기</h1>
        <p className="lede">여섯 편의 집들이입니다. 집 유형으로 걸러 읽을 수 있습니다.</p>
      </header>

      <div className="toolbar">
        <FilterChips
          legend="집 유형"
          name="home-type"
          value={homeType}
          onChange={setHomeType}
          options={options}
        />
      </div>

      {homeType !== "all" ? (
        <button type="button" className="btn btn-ghost" data-cta="local" onClick={() => setHomeType("all")}>
          필터 지우기
        </button>
      ) : null}

      <p className="live-line" role="status">
        {homeType === "all" ? "모든 집 유형" : homeType} · {rows.length}편
      </p>

      {rows.length === 0 ? (
        <div className="empty-panel" data-state="empty">
          <p>이 집 유형의 집들이가 없습니다.</p>
          <button type="button" className="btn" data-cta="local" onClick={() => setHomeType("all")}>
            필터 지우기
          </button>
        </div>
      ) : (
        <div className="card-grid cols-2" data-state="success">
          {rows.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`} className="post-card" data-cta="local">
              <img
                className="media"
                src={asset(post.cover_image)}
                alt=""
                width="960"
                height="640"
                loading="lazy"
              />
              <div className="card-body">
                <p className="eyebrow">{post.home_type} · {post.area_pyeong}평</p>
                <h2>{post.title}</h2>
                <p className="pitch">{post.summary}</p>
                <p className="meta-row">
                  <span>{post.author_nick}</span>
                  <span>공감 {post.likes.toLocaleString("ko-KR")}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
