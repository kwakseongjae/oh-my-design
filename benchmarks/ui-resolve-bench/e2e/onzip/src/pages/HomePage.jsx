import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  categories,
  listedPostsPreview,
  popularProducts,
  products,
} from "../lib/data.js";
import { Button, CatalogImage, PostCard, ProductCard } from "../components/primitives.jsx";

export function HomePage() {
  const popular = popularProducts(4);
  const preview = listedPostsPreview(3);

  useEffect(() => {
    document.title = "온집 — 집을 고르듯, 물건을 고르다";
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">홈 인테리어 샘플</p>
          <h1 id="page-title">집을 고르듯, 물건을 고르다</h1>
          <p>
            온집은 가상 홈 인테리어 상점과 집들이가 한자리에 모인 샘플입니다. 제공된
            사진으로 가구를 살펴보고, 그 물건이 들어간 집을 이어서 봅니다.
          </p>
          <Button as={Link} to="/store" cta="primary">
            스토어 둘러보기
          </Button>
        </div>
        <figure className="hero__figure">
          <CatalogImage
            src="assets/post-3.jpg"
            alt="코너 소파가 놓인 밝은 거실"
            lazy={false}
          />
        </figure>
      </section>

      <section className="section" aria-labelledby="popular-heading">
        <div className="section-head">
          <div>
            <p className="eyebrow">인기 상품</p>
            <h2 id="popular-heading">리뷰가 많은 물건</h2>
          </div>
          <p className="definition">
            정의: 리뷰 수 기준 상위 {popular.length}개 · 전체 {products.length}개 중
          </p>
        </div>
        <div className="grid-2">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section section--band" aria-labelledby="posts-preview-heading">
        <div className="section-head">
          <div>
            <p className="eyebrow">집들이</p>
            <h2 id="posts-preview-heading">수록 순서 미리보기</h2>
          </div>
          <p className="definition">
            정의: 게시일이 없어 수록 목록의 마지막 {preview.length}개를 보여 줍니다
          </p>
        </div>
        <div className="grid-3">
          {preview.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="category-heading">
        <div className="section-head">
          <div>
            <p className="eyebrow">카테고리</p>
            <h2 id="category-heading">분류로 들어가기</h2>
          </div>
          <p className="definition">정의: 샘플에 실린 {categories.length}개 분류 전부</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="category-link"
              to={`/store?category=${category.id}`}
              data-cta="local"
            >
              {category.name}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
