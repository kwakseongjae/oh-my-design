import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import {
  CATEGORIES,
  CURATIONS,
  HOME_HERO_IMAGE,
  assetUrl,
  listedPosts,
  popularProducts,
} from "../lib/catalog.js";

export default function HomePage() {
  const popular = popularProducts(4);
  const posts = listedPosts(3);

  useEffect(() => {
    document.title = "온집 — 자리를 먼저 고르는 상점";
  }, []);

  return (
    <main id="main">
      <div className="page">
        <section className="home-open">
          <div>
            <p className="eyebrow">온집 도록</p>
            <h1 id="page-title" className="display">
              집이 앉는 모양을 먼저 보세요
            </h1>
            <p className="lede">
              소파와 빛, 이불까지. 스튜디오보다 창가와 거실에 앉힌 장면으로 고릅니다.
              기획전 두 가지와 많이 읽힌 상품, 수록된 집들이를 한 자리에 모았습니다.
            </p>
            <div className="home-actions">
              <Link className="btn btn-primary" to="/store" data-cta="primary">
                스토어 둘러보기
              </Link>
            </div>
          </div>
          <figure className="figure">
            <img
              src={assetUrl(HOME_HERO_IMAGE)}
              alt=""
              width={1280}
              height={720}
            />
          </figure>
        </section>

        <section className="section" aria-labelledby="bento-heading">
          <h2 id="bento-heading" className="section-title">
            오늘 자리를 고르는 길
          </h2>
          <p className="lede mt-8">
            기획전 두 가지 · 후기 많은 순 상위 {popular.length}개 · 수록된 순서 집들이 {posts.length}편
          </p>
          <div className="bento">
            {CURATIONS.map((curation) => (
              <Link
                key={curation.id}
                className="bento-tile cur"
                to={`/store?curation=${curation.id}`}
                data-cta="local"
              >
                <div className="media">
                  <img
                    src={assetUrl(curation.banner_image)}
                    alt=""
                    width={1280}
                    height={720}
                    loading="lazy"
                  />
                </div>
                <div className="copy">
                  <span className="eyebrow">기획전</span>
                  <strong className="title">{curation.title}</strong>
                  <p>{curation.subtitle}</p>
                </div>
              </Link>
            ))}
            {popular.map((product) => (
              <div key={product.id} className="prod">
                <ProductCard product={product} headingLevel="h3" />
              </div>
            ))}
            {posts.map((post) => (
              <Link key={post.id} className="bento-tile post" to={`/posts/${post.id}`} data-cta="local">
                <div className="media">
                  <img
                    src={assetUrl(post.cover_image)}
                    alt=""
                    width={1248}
                    height={832}
                    loading="lazy"
                  />
                </div>
                <div className="copy">
                  <span className="eyebrow">
                    {post.home_type} · {post.area_pyeong}평
                  </span>
                  <strong className="title">{post.title}</strong>
                  <p>{post.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="cat-heading">
          <h2 id="cat-heading" className="section-title">
            자리별 모음
          </h2>
          <div className="cat-rail">
            {CATEGORIES.map((category) => (
              <Link key={category.id} to={`/store?category=${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
