export function TrustMeter({ seller }) {
  const percent = Math.max(0, Math.min(100, (seller.trust_score / 50) * 100));
  return (
    <div className="trust-meter">
      <div className="trust-score">
        <b>{seller.trust_score}</b>
        <span>{seller.trust_label}</span>
      </div>
      <div className="trust-track" aria-hidden="true">
        <div className="trust-fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="trust-basis">
        거래 {seller.deal_count.toLocaleString("ko-KR")}회와 이웃 배지를 바탕으로 한 지표입니다.
      </p>
    </div>
  );
}
