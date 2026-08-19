import data from "../data/data.json";

export const catalog = data;

export function asset(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function formatWon(n) {
  return `${Number(n).toLocaleString("ko-KR")}원`;
}

export function formatRating(x10) {
  return (Number(x10) / 10).toFixed(1);
}

export function categoryById(id) {
  return data.categories.find((item) => item.id === id) ?? null;
}

export function productById(id) {
  return data.products.find((item) => item.id === id) ?? null;
}

export function postById(id) {
  return data.posts.find((item) => item.id === id) ?? null;
}

export function reviewsFor(productId) {
  return data.reviews.filter((item) => item.product_id === productId);
}

export function postsForProduct(productId) {
  return data.posts.filter((item) => item.product_ids.includes(productId));
}

export function popularProducts(limit = 4) {
  return [...data.products]
    .sort((a, b) => b.review_count - a.review_count || a.id.localeCompare(b.id))
    .slice(0, limit);
}

export function latestPosts(limit = 3) {
  return data.posts.slice(0, limit);
}

export function lifestyleImage(product) {
  return product.images?.[1] || product.image;
}

export function stockTone(status) {
  if (status === "품절") return "out";
  if (status === "품절임박") return "low";
  return "in";
}

export function ratingRows(reviews) {
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (const review of reviews) {
    const score = Number(review.rating);
    if (counts[score] !== undefined) counts[score] += 1;
  }
  return [5, 4, 3, 2, 1].map((score) => ({ score, count: counts[score] }));
}

export function averageListed(reviews) {
  if (!reviews.length) return null;
  const sum = reviews.reduce((total, review) => total + Number(review.rating), 0);
  return (sum / reviews.length).toFixed(1);
}

export function filterProducts({ category = "all", stock = "all" }) {
  return data.products.filter((product) => {
    const categoryOk = category === "all" || product.category_id === category;
    const stockOk = stock === "all" || product.stock_status === stock;
    return categoryOk && stockOk;
  });
}

export function sortProducts(list, sortId) {
  const next = [...list];
  if (sortId === "price-desc") next.sort((a, b) => b.price_krw - a.price_krw || a.id.localeCompare(b.id));
  else if (sortId === "price-asc") next.sort((a, b) => a.price_krw - b.price_krw || a.id.localeCompare(b.id));
  else if (sortId === "rating-desc") next.sort((a, b) => b.rating_x10 - a.rating_x10 || a.id.localeCompare(b.id));
  else next.sort((a, b) => b.review_count - a.review_count || a.id.localeCompare(b.id));
  return next;
}

export function categoryHasRows(categoryId, stock) {
  return data.products.some((product) => (
    (categoryId === "all" || product.category_id === categoryId)
    && (stock === "all" || product.stock_status === stock)
  ));
}

export const HOME_TYPES = ["원룸", "투룸", "아파트", "주택"];

export function filterPosts(homeType) {
  if (homeType === "all") return data.posts;
  return data.posts.filter((post) => post.home_type === homeType);
}

export function homeTypeHasRows(homeType) {
  return data.posts.some((post) => homeType === "all" || post.home_type === homeType);
}

export const SORT_OPTIONS = [
  { id: "popular", label: "후기 많은 순" },
  { id: "price-desc", label: "높은 가격 순" },
  { id: "price-asc", label: "낮은 가격 순" },
  { id: "rating-desc", label: "높은 평점 순" },
];
