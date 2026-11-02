export function Checkout({ onClose }) {
  return (
    <main>
      <h1>결제가 완료되었습니다.</h1>
      <p>주문하신 상품이 준비되셨습니다</p>
      <p>배송은 내일 도착할거예요</p>
      <p>할인을 받을수 있어요</p>
      <p className="error">오류가 발생했습니다!</p>
      <p className="error">결제 실패: undefined</p>
      <button>확인</button>
      <Dialog>
        <p>정말 나갈까요? 지금 나가면 혜택을 놓치면 후회할 거예요</p>
        <button>취소</button>
        <button>아니요, 혜택을 포기할게요</button>
      </Dialog>
      <a href="/terms">자세히 보기</a>
      <p>이 쿠폰은 1,000원 할인이며 최소 주문 금액 10,000원 이상, 1인당 1회만 사용할 수 있습니다</p>
      <p>배송 정보가 보여지는 화면이에요</p>
      <p>신청이 불가능합니다</p>
      <img src="/a.png" alt="상품 이미지" />
      <p>잠시만 기다려 주세요!!</p>
      <p>회원님 메세지가 도착했어요. 확인 되요</p>
    </main>
  );
}
