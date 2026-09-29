export default function Page() {
  return (
    <main lang="ko">
      <h1 className="hero-title">돈 관리, 이제 한 곳에서</h1>
      <p className="quote">지금 가입하면 첫 달 무료입니다.</p>
      <p className="desc">수수료 없이 투자를 시작하세요. 자세한 내용은 약관을 확인하세요.</p>
      <h2
        className="text-4xl leading-[1.3] tracking-[-0.05em]"
        data-section="hero"
      >
        {/* the headline sits more than two lines below its classes */}
        모든 금융을 한 번에
      </h2>
      <span className="italic">새로운 기능</span>
      <p className="break-all">추천 링크를 친구에게 보내 보세요.</p>
      <p>자세한 내용은 <em>이용약관</em>을 확인하세요.</p>
    </main>
  );
}
