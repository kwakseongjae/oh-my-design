import { Link } from "react-router-dom";
import { PostCard, ProductCard } from "../components/Cards.jsx";
import { MediaFrame, UnavailableInfo } from "../components/Marks.jsx";
import {
  PREVIEW_DEFINITION,
  POPULAR_DEFINITION,
  categories,
  popularProducts,
  posts,
} from "../lib/catalog.js";

export default function Home() {
  const popular = popularProducts();
  const tours = posts();
  const cats = categories();
  const hero = tours[2] ?? tours[0];

  return (
    <div className="page" data-state="default">
      <section className="hero">
        <div>
          <p className="eyebrow">홈 인테리어 커머스 · 집들이</p>
          <h1>집을 고르는 속도보다, 자리를 잡는 빛</h1>
          <p className="lede">
            온집은 소파부터 침구까지 샘플 카탈로그를 모아 두고, 실제 집에 놓인
            쓰임을 집들이로 다시 보여 줍니다.
          </p>
          <Link className="btn" data-cta="primary" to="/store">
            스토어 둘러보기
          </Link>
        </div>
        {hero ? (
          <MediaFrame src={hero.cover_image} alt={hero.title} kind="post" />
        ) : null}
      </section>

      <section className="section" aria-labelledby="popular-heading">
        <div className="section-head">
          <h2 id="popular-heading">인기 상품</h2>
          <p className="definition">{POPULAR_DEFINITION}</p>
        </div>
        <div className="grid-2">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section section-band" aria-labelledby="tours-heading">
        <div className="section-head">
          <h2 id="tours-heading">집들이 프리뷰</h2>
          <p className="definition">{PREVIEW_DEFINITION}</p>
        </div>
        <UnavailableInfo
          category="게시일"
          detail="posts 레코드에 published_at 필드가 없어 ‘최신’ 정렬을 계산할 수 없습니다. 아래는 데이터셋 배열 순서입니다."
        />
        <div className="grid-3">
          {tours.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="cats-heading">
        <div className="section-head">
          <h2 id="cats-heading">카테고리 진입</h2>
          <p className="definition">
            카테고리 = data.json categories 6건. 각 링크는 스토어에서 해당
            category_id로 거른 결과입니다.
          </p>
        </div>
        <div className="grid-cats">
          {cats.map((category) => (
            <article className="card" key={category.id}>
              <Link className="card-link" to={`/store?category=${category.id}`}>
                <span className="eyebrow">{category.slug}</span>
                <h3>{category.name}</h3>
                <span className="btn-local" data-cta="local">
                  이 분류 보기
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
