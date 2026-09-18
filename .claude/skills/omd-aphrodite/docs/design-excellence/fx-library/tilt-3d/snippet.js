// fx: tilt-3d — 포인터 위치를 각도로 바꿔 CSS 변수로 넘긴다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountTilt(root = document, { max = 9, scale = 1.015 } = {}) {
    if (!window.matchMedia('(hover:hover)').matches) return () => {};
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
    const offs = [];
    for (const el of root.querySelectorAll('.fx-tilt')) {
      const m = +el.dataset.fxTiltMax || max;
      let raf = 0, ev = null;
      const paint = () => {
        raf = 0; if (!ev) return;
        const r = el.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width - .5;
        const py = (ev.clientY - r.top) / r.height - .5;
        el.style.setProperty('--fx-tilt-y', (px * m * 2).toFixed(2) + 'deg');
        el.style.setProperty('--fx-tilt-x', (py * -m * 2).toFixed(2) + 'deg');
      };
      const move = e => { ev = e; if (!raf) raf = requestAnimationFrame(paint); };
      const on = () => { el.dataset.fxTilt = 'on'; el.style.setProperty('--fx-tilt-scale', scale); };
      const off = () => { el.removeAttribute('data-fx-tilt'); el.style.setProperty('--fx-tilt-x', '0deg');
        el.style.setProperty('--fx-tilt-y', '0deg'); el.style.setProperty('--fx-tilt-scale', 1); };
      el.addEventListener('pointermove', move, { passive: true });
      el.addEventListener('pointerenter', on, { passive: true });
      el.addEventListener('pointerleave', off, { passive: true });
      offs.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerenter', on); el.removeEventListener('pointerleave', off); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountTilt });
})(window);
