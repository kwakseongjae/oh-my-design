import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { asset, catalog, catalogSnapshot, latestPosts, popularProducts } from "../lib/catalog.js";
import { usePage } from "../lib/usePage.js";

export default function Home() {
  usePage("온집 — 자리가 먼저 보이는 집");
  const popular = popularProducts(4);
  const latest = latestPosts(3);
  const snap = catalogSnapshot();

  return (
    <main id="main" className="main" tabIndex={-1}>
      <header className="page-head home-hero">
        <div className="hero-copy">
          <p className="eyebrow">온집 홈</p>
          <h1 id="page-title">물건보다 자리를 먼저 고릅니다</h1>
          <p className="lede">
            기획전 두 건과, 후기 많은 순 상위 네 상품, 수록된 순서의 집들이 세 편을 한 화면에 펼칩니다.
          </p>
          <Link className="btn" to="/store" data-cta="primary">스토어 둘러보기</Link>
        </div>
        <aside className="hero-support" aria-label="수록된 자리">
          <p className="eyebrow">지금 고를 수 있는 자리</p>
          <ul className="hero-stats">
            <li>
              <span>스토어에 실린 상품</span>
              <span>{snap.products.toLocaleString("ko-KR")}종</span>
            </li>
            <li>
              <span>판매중</span>
              <span>{snap.inStock.toLocaleString("ko-KR")}종</span>
            </li>
            <li>
              <span>집들이</span>
              <span>{snap.posts.toLocaleString("ko-KR")}편</span>
            </li>
            <li>
              <span>수록된 후기</span>
              <span>{snap.reviews.toLocaleString("ko-KR")}건</span>
            </li>
          </ul>
        </aside>
      </header>

      <section className="home-bento" aria-label="기획전과 추천">
        {catalog.curations.map((curation, index) => (
          <Link
            key={curation.id}
            to="/store"
            className={`campaign-tile ${index === 0 ? "wide" : "narrow"}`}
            data-cta="local"
          >
            <img
              className="media"
              src={asset(curation.banner_image)}
              alt=""
              width="1200"
              height="800"
            />
            <span className="campaign-scrim" aria-hidden="true" />
            <div className="campaign-copy">
              <p className="eyebrow">기획전</p>
              <h2>{curation.title}</h2>
              <p>{curation.subtitle}</p>
            </div>
          </Link>
        ))}

        <section className="popular-grid section" aria-labelledby="popular-heading">
          <div className="section-head">
            <h2 id="popular-heading">많이 본 자리</h2>
            <p className="lede">후기 많은 순 상위 4개입니다.</p>
          </div>
          <div className="card-grid cols-4">
            {popular.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="latest-grid section" aria-labelledby="latest-heading">
          <div className="section-head span-all">
            <h2 id="latest-heading">최근 집들이</h2>
            <p className="lede">수록된 순서의 앞 3편입니다.</p>
          </div>
          {latest.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`} className="post-card" data-cta="local">
              <img
                className="media"
                src={asset(post.cover_image)}
                alt=""
                width="800"
                height="600"
                loading="lazy"
              />
              <div className="card-body">
                <p className="eyebrow">{post.home_type} · {post.area_pyeong}평</p>
                <h3>{post.title}</h3>
                <p className="pitch">{post.summary}</p>
                <p className="meta-row">
                  <span>{post.author_nick}</span>
                  <span>공감 {post.likes.toLocaleString("ko-KR")}</span>
                </p>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
