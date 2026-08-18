import { useMemo, useState } from "react";
import { PostCard } from "../components/Cards.jsx";
import { FilterChip } from "../components/Filters.jsx";
import { filterPosts, homeTypes, posts } from "../lib/catalog.js";

export default function Posts() {
  const [homeType, setHomeType] = useState("");
  const types = homeTypes();
  const all = posts();
  const list = useMemo(() => filterPosts(homeType), [homeType]);
  const typeName = homeType || "전체";

  return (
    <div className="page" data-state="default">
      <p className="eyebrow">집들이</p>
      <h1>게시글 {all.length}개</h1>
      <p className="definition">
        표시 건수 = home_type 필터를 만족하는 posts.length. 집 유형 값은
        데이터셋에서 계산합니다.
      </p>

      <div className="filters">
        <div className="filter-row" role="group" aria-label="집 유형 필터">
          <span className="filter-label">집 유형</span>
          <FilterChip name="home" value="" current={homeType} onSelect={setHomeType}>
            전체
          </FilterChip>
          {types.map((type) => (
            <FilterChip
              key={type}
              name="home"
              value={type}
              current={homeType}
              onSelect={setHomeType}
            >
              {type}
            </FilterChip>
          ))}
        </div>
        <p className="status-live" role="status">
          {typeName} 기준으로 {list.length}건을 표시합니다.
        </p>
      </div>

      <div className="grid-3" data-state="success">
        {list.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
