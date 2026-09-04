// fx: cursor-image-trail — 풀 재사용 + 거리 임계값. DOM 을 만들지 않는다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountTrail(root = document, { gap = 96 } = {}) {
    if (!matchMedia('(hover:hover)').matches) return () => {};
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
    const offs = [];
    for (const zone of root.querySelectorAll('.fx-trail')) {
      const pool = [...zone.querySelectorAll('.fx-trail__item')];
      if (!pool.length) continue;
      const D = +zone.dataset.fxTrailGap || gap;   // 이 거리를 지나야 한 장 떨군다
      let n = 0, lx = null, ly = null, raf = 0, ev = null;

      const drop = (x, y, ang) => {
        const el = pool[n % pool.length]; n++;
        el.removeAttribute('data-live');
        void el.offsetWidth;                       // 애니메이션 재시작 — 리플로우 1회는 의도적이다
        el.style.setProperty('--tx', x.toFixed(1) + 'px');
        el.style.setProperty('--ty', y.toFixed(1) + 'px');
        el.style.setProperty('--tr', ang.toFixed(1) + 'deg');
        el.style.zIndex = String(n % 1000);
        el.dataset.live = '';
      };
      const paint = () => {
        raf = 0; if (!ev) return;
        const r = zone.getBoundingClientRect();
        const x = ev.clientX - r.left, y = ev.clientY - r.top;
        if (lx === null) { lx = x; ly = y; return; }
        const dx = x - lx, dy = y - ly, d = Math.hypot(dx, dy);
        if (d < D) return;
        // 이동 방향으로 살짝 눕힌다 — 궤적이 하나의 흐름으로 읽힌다
        drop(x, y, Math.max(-14, Math.min(14, dx * 0.09)));
        lx = x; ly = y;
      };
      const move = e => { ev = e; if (!raf) raf = requestAnimationFrame(paint); };
      const leave = () => { lx = ly = null; };
      zone.addEventListener('pointermove', move, { passive: true });
      zone.addEventListener('pointerleave', leave, { passive: true });
      offs.push(() => { zone.removeEventListener('pointermove', move); zone.removeEventListener('pointerleave', leave); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountTrail });
})(window);
