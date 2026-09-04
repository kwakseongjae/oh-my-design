// fx: holo-foil — 포인터 각도를 CSS 변수로 넘긴다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountFoil(root = document) {
    if (!window.matchMedia('(hover:hover)').matches) return () => {};
    const els = [...root.querySelectorAll('.fx-foil')];
    const offs = [];
    for (const el of els) {
      let raf = 0, px = 50, py = 50;
      const paint = () => {
        raf = 0;
        el.style.setProperty('--fx-foil-x', px + '%');
        el.style.setProperty('--fx-foil-y', py + '%');
        el.style.setProperty('--fx-foil-tilt-x', ((py - 50) / -5).toFixed(2) + 'deg');
        el.style.setProperty('--fx-foil-tilt-y', ((px - 50) / 5).toFixed(2) + 'deg');
      };
      const move = e => {
        const r = el.getBoundingClientRect();
        px = ((e.clientX - r.left) / r.width) * 100;
        py = ((e.clientY - r.top) / r.height) * 100;
        if (!raf) raf = requestAnimationFrame(paint);
      };
      const on = () => el.style.setProperty('--fx-foil-on', '1');
      const off = () => { el.style.setProperty('--fx-foil-on', '0'); px = py = 50; if (!raf) raf = requestAnimationFrame(paint); };
      el.addEventListener('pointermove', move, { passive: true });
      el.addEventListener('pointerenter', on, { passive: true });
      el.addEventListener('pointerleave', off, { passive: true });
      offs.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerenter', on); el.removeEventListener('pointerleave', off); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountFoil });
})(window);
