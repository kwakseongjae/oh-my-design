import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { HOME_TYPES, filterPosts, posts, uniqueHomeTypes } from "../lib/data.js";
import { EmptyPanel, FilterChip, PostCard } from "../components/primitives.jsx";

export function PostsPage() {
  const [params, setParams] = useSearchParams();
  const homeType = params.get("home") || "all";
  const known = homeType === "all" || HOME_TYPES.includes(homeType);
  const rows = useMemo(() => filterPosts(known ? homeType : "all"), [homeType, known]);
  const presentTypes = uniqueHomeTypes();

  useEffect(() => {
    document.title = "집들이 — 온집";
  }, []);

  function update(value) {
    const next = new URLSearchParams();
    if (value !== "all") next.set("home", value);
    setParams(next);
  }

  const label = homeType === "all" ? "모든 집 유형" : homeType;

  return (
    <>
      <header className="page-head">
        <p className="eyebrow">집들이</p>
        <h1 id="page-title">살림이 놓인 집</h1>
        <p>샘플에 실린 {posts.length}편의 집들이입니다. 집 유형으로 거를 수 있습니다.</p>
      </header>

      <fieldset className="filter-block">
        <legend className="label">집 유형</legend>
        <div className="chip-row">
          <FilterChip name="home" value="all" checked={homeType === "all"} onChange={() => update("all")}>
            전체
          </FilterChip>
          {presentTypes.map((type) => (
            <FilterChip
              key={type}
              name="home"
              value={type}
              checked={homeType === type}
              onChange={() => update(type)}
            >
              {type}
            </FilterChip>
          ))}
        </div>
      </fieldset>

      <p className="status-line" role="status">
        {label} — 결과 {rows.length}개
        <span className="definition"> (정의: 선택한 집 유형과 같은 게시글 수)</span>
      </p>

      {rows.length === 0 ? (
        <EmptyPanel title="맞는 집들이가 없습니다" onReset={() => update("all")} resetLabel="유형 지우기">
          {label}에 해당하는 게시글이 샘플에 없습니다.
        </EmptyPanel>
      ) : (
        <div className="grid-3" data-state="success">
          {rows.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
