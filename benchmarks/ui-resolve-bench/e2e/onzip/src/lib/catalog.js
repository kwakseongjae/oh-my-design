import data from "../data/data.json";

export const DISCLOSURE = data.disclosure;
export const CATEGORIES = data.categories;
export const PRODUCTS = data.products;
export const POSTS = data.posts;
export const REVIEWS = data.reviews;
export const CURATIONS = data.curations;
/** Home hero still that does not reappear in the home bento. */
export const HOME_HERO_IMAGE = "assets/prod-03-life.jpg";

export const STOCK_ALL = "all";
export const STOCK_VALUES = ["판매중", "품절임박", "품절"];
export const SORTS = [
  { id: "popular", label: "후기 많은 순" },
  { id: "price-asc", label: "가격 낮은 순" },
  { id: "price-desc", label: "가격 높은 순" },
  { id: "rating-desc", label: "평점 높은 순" },
];

export function assetUrl(src) {
  if (!src) return "";
  return src.startsWith("/") ? src : `/${src}`;
}

export function categoryById(id) {
  return CATEGORIES.find((item) => item.id === id) ?? null;
}

export function productById(id) {
  return PRODUCTS.find((item) => item.id === id) ?? null;
}

export function postById(id) {
  return POSTS.find((item) => item.id === id) ?? null;
}

export function lifestyleImage(product) {
  return product.images?.[1] || product.image;
}

export function studioImage(product) {
  return product.images?.[0] || product.image;
}

export function formatPrice(value) {
  return `${Number(value).toLocaleString("ko-KR")}원`;
}

export function formatRating(x10) {
  return (Number(x10) / 10).toFixed(1);
}

export function reviewsFor(productId) {
  return REVIEWS.filter((item) => item.product_id === productId);
}

export function ratingDistribution(reviews) {
  const bins = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (const review of reviews) {
    if (bins[review.rating] !== undefined) bins[review.rating] += 1;
  }
  return bins;
}

export function listedAverage(reviews) {
  if (!reviews.length) return null;
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
}

export function postsForProduct(productId) {
  return POSTS.filter((post) => post.product_ids.includes(productId));
}

export function productsForPost(post) {
  return post.product_ids.map(productById).filter(Boolean);
}

export function homeTypes() {
  return [...new Set(POSTS.map((post) => post.home_type))];
}

export function popularProducts(limit = 4) {
  return [...PRODUCTS]
    .sort((a, b) => b.review_count - a.review_count)
    .slice(0, limit);
}

export function listedPosts(limit = 3) {
  return POSTS.slice(0, limit);
}

export function filterProducts({ category = "all", stock = STOCK_ALL, sort = "popular" }) {
  let list = PRODUCTS.slice();
  if (category !== "all") {
    const match = CATEGORIES.find((item) => item.slug === category);
    if (match) list = list.filter((item) => item.category_id === match.id);
    else list = [];
  }
  if (stock !== STOCK_ALL) {
    list = list.filter((item) => item.stock_status === stock);
  }
  const sorted = list.slice();
  if (sort === "price-asc") sorted.sort((a, b) => a.price_krw - b.price_krw);
  else if (sort === "price-desc") sorted.sort((a, b) => b.price_krw - a.price_krw);
  else if (sort === "rating-desc") sorted.sort((a, b) => b.rating_x10 - a.rating_x10);
  else sorted.sort((a, b) => b.review_count - a.review_count);
  return sorted;
}

export function filterPosts(homeType = "all") {
  if (homeType === "all") return POSTS.slice();
  return POSTS.filter((post) => post.home_type === homeType);
}

export function stockTone(status) {
  if (status === "품절임박") return "low";
  if (status === "품절") return "out";
  return "ok";
}
