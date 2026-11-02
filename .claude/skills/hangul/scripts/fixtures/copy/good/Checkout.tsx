export function Checkout({ onClose }) {
  return (
    <main>
      <h1>결제했어요</h1>
      <p>주문한 상품이 준비됐어요</p>
      <p>배송은 내일 도착할 거예요</p>
      <p>할인을 받을 수 있어요</p>
      <p className="error">카드 한도를 넘었어요. 다른 카드로 결제해 주세요.</p>
      <button>10,000원 결제하기</button>
      <Dialog>
        <p>결제를 그만할까요? 담은 상품은 장바구니에 남아 있어요.</p>
        <button>닫기</button>
        <button>결제 그만하기</button>
      </Dialog>
      <a href="/terms">이용약관 보기</a>
      <p>1,000원 할인 쿠폰이에요.</p>
      <ul>
        <li>최소 주문 금액: 10,000원</li>
        <li>사용 횟수: 1인당 1회</li>
      </ul>
      <p>배송 정보가 보이는 화면이에요</p>
      <p>지금은 신청할 수 없어요. 다음 달 1일부터 신청할 수 있어요.</p>
      <img src="/a.png" alt="원목 식탁 정면" />
      <p>잠시만 기다려 주세요</p>
      <p>새 메시지가 왔어요</p>
    </main>
  );
}
