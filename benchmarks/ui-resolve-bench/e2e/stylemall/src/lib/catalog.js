import data from "../data/data.json";

export const catalog = data;

export function assetSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function brandById(id) {
  return catalog.brands.find((item) => item.id === id) ?? null;
}

export function categoryById(id) {
  return catalog.categories.find((item) => item.id === id) ?? null;
}

export function productById(id) {
  return catalog.products.find((item) => item.id === id) ?? null;
}

export function lookbookById(id) {
  return catalog.lookbooks.find((item) => item.id === id) ?? null;
}

export function reviewsFor(productId) {
  return catalog.reviews.filter((item) => item.product_id === productId);
}

export function lookbooksForProduct(productId) {
  return catalog.lookbooks.filter((item) => item.product_ids.includes(productId));
}

export function productsForBrand(brandId) {
  return catalog.products.filter((item) => item.brand_id === brandId);
}

export function discountRate(product) {
  if (product.sale_price == null || product.price <= 0) return 0;
  return (product.price - product.sale_price) / product.price;
}

export function discountPercent(product) {
  return Math.round(discountRate(product) * 100);
}

export function effectivePrice(product) {
  return product.sale_price == null ? product.price : product.sale_price;
}

export function rankedProducts(limit = 5) {
  return [...catalog.products].sort((a, b) => a.ranking - b.ranking).slice(0, limit);
}

export function formatWon(value) {
  return `${value.toLocaleString("ko-KR")}원`;
}

export function formatFollowers(count) {
  return `${count.toLocaleString("ko-KR")}명 관심`;
}

export const GENDER_LABEL = {
  women: "여성",
  men: "남성",
  unisex: "유니섹스",
};

export const SORTS = [
  { id: "ranking", label: "랭킹 높은 순" },
  { id: "price-asc", label: "가격 낮은 순" },
  { id: "price-desc", label: "가격 높은 순" },
  { id: "discount", label: "할인율 높은 순" },
];

export function sortProducts(list, sortId) {
  const next = [...list];
  if (sortId === "price-asc") next.sort((a, b) => effectivePrice(a) - effectivePrice(b));
  else if (sortId === "price-desc") next.sort((a, b) => effectivePrice(b) - effectivePrice(a));
  else if (sortId === "discount") next.sort((a, b) => discountRate(b) - discountRate(a));
  else next.sort((a, b) => a.ranking - b.ranking);
  return next;
}

export function filterProducts(categoryId, gender) {
  return catalog.products.filter((item) => {
    if (categoryId && item.category_id !== categoryId) return false;
    if (gender && item.gender !== gender) return false;
    return true;
  });
}

export function imageSize(path) {
  if (!path) return { width: 864, height: 1152 };
  if (path.includes("-flat.")) return { width: 1024, height: 1024 };
  if (path.includes("lb-") && path.includes("cover")) return { width: 1248, height: 832 };
  if (path.startsWith("assets/sc-") || path.includes("/sc-")) return { width: 1280, height: 720 };
  return { width: 864, height: 1152 };
}
