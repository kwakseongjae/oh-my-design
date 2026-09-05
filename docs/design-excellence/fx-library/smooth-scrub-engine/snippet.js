/* smooth-scrub-engine — 스크롤에 상태를 준다.
 *
 * 원리(자작 구현, 코드 이식 없음): 스크롤은 **목표값만** 쓰고, 상시 rAF 루프 하나가
 * 현재값을 목표로 프레임당 고정 비율 α 만큼 걸어간다. 이 한 줄이 "딱딱함"을 없앤다.
 *   cur += (target - cur) * α
 *
 * 근거 수치(2026-09-05 실측·대조):
 *   α 0.15 higgsfield · 0.16 runway · 0.18 scroll-craft 기본값 · 0.25 우리 r2(70점)
 *   α 0.53 우리 r4(65점, 감쇠 없음) — 이 값만 대역 바깥이다.  → 기본값 0.14
 *   리듀스드 모션에서는 α = 1 (보간 없음)이 접근성 기본값이다.
 *
 * 두 시계를 나눈다:
 *   p  = 스크럽 진행률 (핀 트랙에서 얼마나 왔나)   → 정착 대역(LC-48) 판정에 쓴다
 *   v  = 스테이지 가시 수명 (화면에 얼마나 머무나) → 홀드 구간의 연출에 쓴다
 * 하나로 묶으면 정착 이후 홀드가 죽는다(r4 의 결함).
 *
 * 쓰는 법:
 *   <div class="sc-track" data-sc-k="0.55" data-sc-lerp="0.14"> … <div class="sc-stage"> … </div></div>
 *   요소는 --p(진행) --e(정착 이징된 진행) --v(가시 수명) 를 받는다. CSS 에서 그 변수만 읽는다.
 */
(function () {
  var RM = matchMedia("(prefers-reduced-motion: reduce)");
  var DEAD = 0.0004;              // 목표와의 차이가 이보다 작으면 쓰기를 생략한다(루프는 계속 돈다)
  var tracks = [];

  function collect() {
    tracks = [].slice.call(document.querySelectorAll(".sc-track")).map(function (el) {
      var k = parseFloat(el.dataset.scK);
      var a = parseFloat(el.dataset.scLerp);
      return {
        el: el,
        stage: el.querySelector(".sc-stage") || el,
        k: isFinite(k) ? Math.min(Math.max(k, 0.2), 0.95) : 0.55,   // 정착 지점(진행률의 몇 %에서 결과에 도달하나)
        alpha: isFinite(a) ? Math.min(Math.max(a, 0.02), 1) : 0.14,
        curP: 0, curV: 0, lastP: -1, lastV: -1,
      };
    });
  }

  function targets(t) {
    var r = t.el.getBoundingClientRect();
    var travel = t.el.offsetHeight - innerHeight;
    var p = travel > 0 ? -r.top / travel : (r.top <= 0 ? 1 : 0);
    p = Math.min(Math.max(p, 0), 1);
    /* 가시 수명: 스테이지가 화면에 들어온 순간 0, 나가는 순간 1 */
    var s = t.stage.getBoundingClientRect();
    var span = s.height + innerHeight;
    var v = span > 0 ? (innerHeight - s.top) / span : 0;
    return { p: p, v: Math.min(Math.max(v, 0), 1) };
  }

  function frame() {
    var reduce = RM.matches;
    for (var i = 0; i < tracks.length; i++) {
      var t = tracks[i];
      var r = t.el.getBoundingClientRect();
      if (r.bottom < -innerHeight || r.top > innerHeight * 2) continue;   // 화면에서 먼 트랙은 건너뛴다
      var tg = targets(t);
      var a = reduce ? 1 : t.alpha;
      t.curP += (tg.p - t.curP) * a;
      t.curV += (tg.v - t.curV) * a;
      if (Math.abs(tg.p - t.curP) < DEAD) t.curP = tg.p;                  // 데드밴드: 목표에 스냅
      if (Math.abs(tg.v - t.curV) < DEAD) t.curV = tg.v;
      if (Math.abs(t.curP - t.lastP) > DEAD) {
        var e = Math.min(t.curP / t.k, 1);
        t.el.style.setProperty("--p", t.curP.toFixed(4));
        t.el.style.setProperty("--e", (1 - Math.pow(1 - e, 3)).toFixed(4));  // 정착 이징은 보간 '이후' 값에 건다
        t.lastP = t.curP;
      }
      if (Math.abs(t.curV - t.lastV) > DEAD) {
        t.el.style.setProperty("--v", t.curV.toFixed(4));
        t.lastV = t.curV;
      }
    }
    requestAnimationFrame(frame);       // 상시 루프 — 스크롤이 멈춰도 계속 걸어간다(여운)
  }

  function boot() { collect(); requestAnimationFrame(frame); }
  if (document.readyState === "loading") addEventListener("DOMContentLoaded", boot);
  else boot();
  addEventListener("resize", collect);
})();
