// fx: magnetic-cursor — 반경 안에서만 끌어당긴다. 구현: oh-my-design (MIT).
// 리스너는 window 하나, 갱신은 프레임당 1회. 타깃이 많아도 비용이 늘지 않는다.
;(function (global) {
  function mountMagnetic(root = document, { radius = 90, pull = 0.32 } = {}) {
    if (!window.matchMedia('(hover:hover)').matches) return () => {};
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
    const els = [...root.querySelectorAll('.fx-mag')];
    if (!els.length) return () => {};
    let raf = 0, p = null;
    const paint = () => {
      raf = 0; if (!p) return;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = p.x - cx, dy = p.y - cy;
        const reach = (+el.dataset.fxMagRadius || radius) + Math.max(r.width, r.height) / 2;
        const d = Math.hypot(dx, dy);
        if (d < reach) {
          const k = (1 - d / reach) * (+el.dataset.fxMagPull || pull);
          el.style.setProperty('--fx-mag-x', (dx * k).toFixed(1) + 'px');
          el.style.setProperty('--fx-mag-y', (dy * k).toFixed(1) + 'px');
          el.dataset.fxMag = 'on';
        } else if (el.dataset.fxMag) {
          el.removeAttribute('data-fx-mag');
          el.style.setProperty('--fx-mag-x', '0px');
          el.style.setProperty('--fx-mag-y', '0px');
        }
      }
    };
    const move = e => { p = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(paint); };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountMagnetic });
})(window);
