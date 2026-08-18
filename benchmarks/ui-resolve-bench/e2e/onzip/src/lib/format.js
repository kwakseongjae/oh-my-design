export function assetSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function formatWon(value) {
  return `${Number(value).toLocaleString("ko-KR")}원`;
}

export function formatRating(ratingX10) {
  return (Number(ratingX10) / 10).toFixed(1);
}

export function formatCount(value) {
  return Number(value).toLocaleString("ko-KR");
}
