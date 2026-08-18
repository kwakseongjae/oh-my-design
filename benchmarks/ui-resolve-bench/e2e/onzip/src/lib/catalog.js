import data from "../data/data.json";

export const dataset = data;
export const disclosure = data.disclosure;

export const POPULAR_LIMIT = 4;
export const POPULAR_DEFINITION =
  "인기 상품 = data.json products를 review_count 내림차순으로 정렬한 상위 4건";
export const PREVIEW_DEFINITION =
  "집들이 프리뷰 = data.json posts 배열 순서 그대로의 전체 레코드";
export const STORE_COUNT_DEFINITION =
  "표시 건수 = 선택한 카테고리와 재고 상태를 모두 만족하는 products.length";

export function categories() {
  return data.categories;
}

export function products() {
  return data.products;
}

export function posts() {
  return data.posts;
}

export function uniqueInOrder(values) {
  const seen = new Set();
  const out = [];
  for (const value of values) {
    if (!seen.has(value)) {
      seen.add(value);
      out.push(value);
    }
  }
  return out;
}

export function stockStatuses() {
  return uniqueInOrder(data.products.map((item) => item.stock_status));
}

export function homeTypes() {
  return uniqueInOrder(data.posts.map((item) => item.home_type));
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

export function popularProducts() {
  return [...data.products]
    .sort((left, right) => right.review_count - left.review_count)
    .slice(0, POPULAR_LIMIT);
}

export function postsFeaturing(productId) {
  return data.posts.filter((post) => post.product_ids.includes(productId));
}

export function productsForPost(post) {
  return post.product_ids
    .map((id) => productById(id))
    .filter(Boolean);
}

export function filterProducts({ categoryId, stockStatus, sort }) {
  let list = data.products;
  if (categoryId) list = list.filter((item) => item.category_id === categoryId);
  if (stockStatus) list = list.filter((item) => item.stock_status === stockStatus);
  const next = [...list];
  if (sort === "review-desc") next.sort((a, b) => b.review_count - a.review_count);
  if (sort === "price-asc") next.sort((a, b) => a.price_krw - b.price_krw);
  if (sort === "price-desc") next.sort((a, b) => b.price_krw - a.price_krw);
  if (sort === "rating-desc") next.sort((a, b) => b.rating_x10 - a.rating_x10);
  if (sort === "rating-asc") next.sort((a, b) => a.rating_x10 - b.rating_x10);
  return next;
}

export function filterPosts(homeType) {
  if (!homeType) return data.posts;
  return data.posts.filter((post) => post.home_type === homeType);
}
