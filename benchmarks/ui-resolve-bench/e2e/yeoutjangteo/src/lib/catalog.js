import data from "../data/data.json";

export const { service, neighborhoods, categories, listings, sellers, chats } = data;

const statusCopy = {
  selling: "판매중",
  reserved: "예약중",
  sold: "거래완료",
};

export function listingById(id) {
  return listings.find((item) => item.id === id) ?? null;
}

export function sellerById(id) {
  return sellers.find((item) => item.id === id) ?? null;
}

export function neighborhoodById(id) {
  return neighborhoods.find((item) => item.id === id) ?? null;
}

export function categoryById(id) {
  return categories.find((item) => item.id === id) ?? null;
}

export function chatForListing(id) {
  return chats.find((item) => item.listing_id === id) ?? null;
}

export function listingsBySeller(id) {
  return listings.filter((item) => item.seller_id === id);
}

export function otherNeighborhoodListings(listing) {
  return listings.filter(
    (item) => item.neighborhood_id === listing.neighborhood_id && item.id !== listing.id,
  );
}

export function imageSrc(path) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function statusLabel(status) {
  return statusCopy[status] ?? status;
}

export function formatPrice(price) {
  if (price === 0) return "나눔";
  return `${price.toLocaleString("ko-KR")}원`;
}

export function timeTone(ago) {
  if (ago.includes("분") || ago.includes("시간")) return "fresh";
  if (ago.includes("어제") || ago.includes("일")) return "mid";
  return "old";
}

export function filterListings({ neighborhoodId = "all", categoryId = "all", freeOnly = false } = {}) {
  return listings.filter((item) => {
    if (freeOnly && item.price !== 0) return false;
    if (neighborhoodId !== "all" && item.neighborhood_id !== neighborhoodId) return false;
    if (categoryId !== "all" && item.category_id !== categoryId) return false;
    return true;
  });
}

export function groupByStatus(items) {
  return {
    selling: items.filter((item) => item.status === "selling"),
    reserved: items.filter((item) => item.status === "reserved"),
    sold: items.filter((item) => item.status === "sold"),
  };
}

export function neighborhoodListingCounts() {
  return neighborhoods.map((neighborhood) => ({
    id: neighborhood.id,
    name: neighborhood.name,
    count: listings.filter((item) => item.neighborhood_id === neighborhood.id).length,
  }));
}
