// fx: fullbleed-scale-reveal — 스크롤 진행을 --e 하나로 환원한다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountFullbleed(root = document, { settle = 0.55 } = {}) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offs = [];
    for (const el of root.querySelectorAll('.fx-fbs')) {
      if (reduce) { el.style.setProperty('--e', '1'); continue; }
      const s = Math.min(Math.max(parseFloat(el.dataset.fxSettle || settle), 0.2), 0.95);
      let live = false, raf = 0, last = -1;

      const tick = () => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const travel = el.offsetHeight - innerHeight;     // 핀이 실제로 도는 거리
        const p = travel > 0 ? -r.top / travel : 1;        // 0 = 섹션 상단이 뷰포트 상단
        const e = Math.min(Math.max(p, 0), 1) / s;
        const v = e >= 1 ? 1 : 1 - Math.pow(1 - e, 3);     // out-cubic
        if (Math.abs(v - last) > 0.002 || v === 1 || v === 0) {
          el.style.setProperty('--e', v.toFixed(4));
          last = v;
        }
      };
      const req = () => { if (!raf) raf = requestAnimationFrame(tick); };

      const io = new IntersectionObserver(([en]) => {
        if (en.isIntersecting === live) return;
        live = en.isIntersecting;
        if (live) { addEventListener('scroll', req, { passive: true }); addEventListener('resize', req); req(); }
        else { removeEventListener('scroll', req); removeEventListener('resize', req); }
      }, { rootMargin: '10% 0px' });
      io.observe(el);
      tick();
      offs.push(() => { io.disconnect(); removeEventListener('scroll', req); removeEventListener('resize', req); if (raf) cancelAnimationFrame(raf); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountFullbleed });
})(window);
