export function formatWon(amount) {
  return `${new Intl.NumberFormat("ko-KR").format(amount)}원`;
}

export function formatRating(ratingX10) {
  return (ratingX10 / 10).toFixed(1);
}

export function formatCount(value) {
  return new Intl.NumberFormat("ko-KR").format(value);
}

export function formatPyeong(value) {
  return `${new Intl.NumberFormat("ko-KR").format(value)}평`;
}
