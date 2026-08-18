import { useParams } from "react-router-dom";
import { ProductCard } from "../components/Cards.jsx";
import { ErrorNotice, HomeTypeBadge, MediaFrame } from "../components/Marks.jsx";
import { postById, productsForPost } from "../lib/catalog.js";
import { formatCount } from "../lib/format.js";

export default function PostDetail() {
  const { id } = useParams();
  const post = postById(id);

  if (!post) {
    return (
      <div className="page">
        <ErrorNotice id={id} kind="post" />
      </div>
    );
  }

  const used = productsForPost(post);

  return (
    <div className="page" data-state="default">
      <p className="eyebrow">집들이 {post.id}</p>
      <div className="detail">
        <MediaFrame src={post.cover_image} alt={post.title} kind="post" />
        <div className="detail-copy">
          <h1>{post.title}</h1>
          <div className="meta-row">
            <HomeTypeBadge type={post.home_type} />
            <span>{post.area_pyeong}평</span>
            <span>{post.author_nick}</span>
            <span>좋아요 {formatCount(post.likes)}</span>
          </div>
          <p className="lede">{post.summary}</p>
        </div>
      </div>

      <section className="section" aria-labelledby="used-heading">
        <div className="section-head">
          <h2 id="used-heading">사용된 상품</h2>
          <p className="definition">
            사용 상품 = posts.product_ids를 products.id와 조인한 {used.length}건
          </p>
        </div>
        <div className="grid-3" data-state="success">
          {used.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
