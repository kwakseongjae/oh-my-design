import catalog from "../data/data.json";

export const disclosure = catalog.disclosure;
export const datasetName = catalog.dataset;

export const categories = catalog.categories;
export const products = catalog.products;
export const posts = catalog.posts;

export const STOCK_STATUSES = ["판매중", "품절임박", "품절"];
export const HOME_TYPES = ["원룸", "투룸", "아파트", "주택"];

const categoryById = new Map(categories.map((item) => [item.id, item]));
const productById = new Map(products.map((item) => [item.id, item]));

export function getCategory(id) {
  return categoryById.get(id) || null;
}

export function getProduct(id) {
  return productById.get(id) || null;
}

export function getPost(id) {
  return posts.find((item) => item.id === id) || null;
}

export function popularProducts(limit = 4) {
  return [...products]
    .sort((left, right) => right.review_count - left.review_count || left.id.localeCompare(right.id))
    .slice(0, limit);
}

export function listedPostsPreview(limit = 3) {
  return posts.slice(-limit);
}

export function postsForProduct(productId) {
  return posts.filter((post) => post.product_ids.includes(productId));
}

export function productsForPost(post) {
  return post.product_ids.map((id) => getProduct(id)).filter(Boolean);
}

export function uniqueHomeTypes() {
  return HOME_TYPES.filter((type) => posts.some((post) => post.home_type === type));
}

export function filterProducts({ categoryId = "all", stock = "all", sort = "listed" }) {
  let rows = products;
  if (categoryId !== "all") {
    rows = rows.filter((item) => item.category_id === categoryId);
  }
  if (stock !== "all") {
    rows = rows.filter((item) => item.stock_status === stock);
  }
  const sorted = [...rows];
  if (sort === "price-asc") sorted.sort((a, b) => a.price_krw - b.price_krw || a.id.localeCompare(b.id));
  if (sort === "price-desc") sorted.sort((a, b) => b.price_krw - a.price_krw || a.id.localeCompare(b.id));
  if (sort === "rating-desc") sorted.sort((a, b) => b.rating_x10 - a.rating_x10 || a.id.localeCompare(b.id));
  if (sort === "rating-asc") sorted.sort((a, b) => a.rating_x10 - b.rating_x10 || a.id.localeCompare(b.id));
  return sorted;
}

export function filterPosts(homeType = "all") {
  if (homeType === "all") return posts;
  return posts.filter((post) => post.home_type === homeType);
}

export function countByStock() {
  return STOCK_STATUSES.map((status) => ({
    status,
    count: products.filter((item) => item.stock_status === status).length,
  }));
}
