// fx: spotlight-pointer — rAF 로 합쳐 쓰는 포인터 추적. 구현: oh-my-design (MIT).
// 요소당 리스너 대신 컨테이너 하나에만 건다. 터치 기기에서는 아예 붙지 않는다.
;(function (global) {
  function mountSpotlight(root = document) {
    if (!window.matchMedia('(hover:hover)').matches) return () => {};
    const targets = [...root.querySelectorAll('.fx-spot')];
    if (!targets.length) return () => {};
    let raf = 0, last = null;
    const paint = () => {
      raf = 0;
      if (!last) return;
      for (const el of targets) {
        const r = el.getBoundingClientRect();
        const x = last.x - r.left, y = last.y - r.top;
        const inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
        el.style.setProperty('--fx-spot-x', x + 'px');
        el.style.setProperty('--fx-spot-y', y + 'px');
        el.dataset.fxSpot = inside ? 'on' : 'off';
      }
    };
    const move = e => { last = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(paint); };
    const leave = () => { for (const el of targets) el.dataset.fxSpot = 'off'; };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerleave', leave, { passive: true });
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerleave', leave); };
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountSpotlight });
})(window);
