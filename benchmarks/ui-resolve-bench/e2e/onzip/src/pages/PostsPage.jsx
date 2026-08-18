import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { assetUrl, filterPosts, homeTypes } from "../lib/catalog.js";

export default function PostsPage() {
  const [params, setParams] = useSearchParams();
  const type = params.get("type") || "all";
  const types = homeTypes();
  const posts = useMemo(() => filterPosts(type), [type]);

  useEffect(() => {
    document.title = "집들이 — 온집";
  }, []);

  const setType = (next) => {
    const search = new URLSearchParams(params);
    if (next === "all") search.delete("type");
    else search.set("type", next);
    setParams(search, { replace: true });
  };

  const typeName = type === "all" ? "모든 집 유형" : type;

  return (
    <main id="main">
      <div className="page">
        <header className="page-head">
          <p className="eyebrow">집들이</p>
          <h1 id="page-title" className="display">
            앉힌 집을 읽습니다
          </h1>
          <p className="lede">원룸부터 주택까지, 물건이 자리에 앉은 이야기를 모았습니다.</p>
        </header>

        <fieldset className="fieldset">
          <legend>집 유형</legend>
          <div className="chip-row">
            <button type="button" className="chip" aria-pressed={type === "all"} onClick={() => setType("all")}>
              전체
            </button>
            {types.map((item) => (
              <button
                key={item}
                type="button"
                className="chip"
                aria-pressed={type === item}
                onClick={() => setType(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <p className="live-summary" role="status" data-state="success">
          {typeName} · {posts.length}편 · 수록된 순서
        </p>

        {posts.length === 0 ? (
          <div className="empty-panel" data-state="empty">
            이 집 유형의 집들이가 없습니다.
          </div>
        ) : (
          <div className="card-grid cols-3">
            {posts.map((post) => (
              <Link key={post.id} className="product-card post-card" to={`/posts/${post.id}`} data-cta="local">
                <div className="media">
                  <img
                    src={assetUrl(post.cover_image)}
                    alt=""
                    width={1248}
                    height={832}
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <span className="brand">
                    {post.author_nick} · {post.home_type} · {post.area_pyeong}평
                  </span>
                  <h2 className="title">{post.title}</h2>
                  <p className="pitch">{post.summary}</p>
                  <div className="meta">
                    <span>좋아함 {post.likes.toLocaleString("ko-KR")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
