export function Notice() {
  return (
    <section>
      <p>내일 다시 알려 드릴께요</p>
      <p>포인트를 쓸수 있어요</p>
      <p>배송비는 무료에요</p>
      <p>오늘 할것을 골라요</p>
      <p>서비스 이용 조건이 바뀝니다.</p>
      <p>오전 10 : 20에 시작해요</p>
      <p>2026.10.24부터 바뀌어요</p>
      <h2>새 소식 <button onClick={() => setNotice("다음 달에 열립니다.")}>알림 받기</button></h2>
      <p>잔액은 다음 날 자동으로 이체되어집니다.</p>
    </section>
  );
}
