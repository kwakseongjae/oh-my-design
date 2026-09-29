// Latin wordmark, Latin tagline, empty <i/>, italic Latin logo, URL and email boxes: none of them renders Hangul.
const referralUrl = "https://moa.example/invite/seoyeon-kim-7Q2XK9?utm_source=app&utm_medium=referral";

export default function Page() {
  return (
    <main lang="ko">
      <a className="brand" href="/" aria-label="모아 홈">moa<span className="brand-dot">.</span></a>
      <div className="side-note"><p>나에게 맞는 속도로 모아가요.</p><span>A little more you.</span></div>
      <span className="active-badge"><i/>이용 중</span>
      <ul className="logos"><li className="logo-fast">fastfive</li><li>스파크플러스</li></ul>
      <div className="link-box"><span>seoyeon.kim@example.com</span></div>
      <p className="select-all rounded-xl break-all">
        {referralUrl}
      </p>
      <span className="text-4xl font-extrabold tracking-[-0.06em]">moa.</span>
      <span className="italic text-sm">Premium</span>
    </main>
  );
}
