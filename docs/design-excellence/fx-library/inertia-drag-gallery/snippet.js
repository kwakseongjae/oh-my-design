// fx: inertia-drag-gallery — 속도 적분 + 마찰 + 고무 경계. 구현: oh-my-design (MIT).
;(function (global) {
  function mountDragGallery(root = document, { friction = 0.94, rubber = 0.32 } = {}) {
    const offs = [];
    for (const el of root.querySelectorAll('.fx-drag')) {
      const track = el.querySelector('.fx-drag__track');
      if (!track) continue;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) continue;   // 네이티브 스크롤에 맡긴다
      const items = [...el.querySelectorAll('.fx-drag__item')];
      let x = 0, v = 0, raf = 0, dragging = false, lastX = 0, lastT = 0, min = 0;

      const bounds = () => { min = Math.min(0, el.clientWidth - track.scrollWidth); };
      const apply = () => {
        track.style.setProperty('--fx-drag-x', x.toFixed(1) + 'px');
        const skew = Math.max(-4, Math.min(4, -v * 0.035));   // 속도 → 기울기
        for (const it of items) it.style.setProperty('--fx-drag-skew', skew.toFixed(2) + 'deg');
      };
      const frame = () => {
        raf = 0;
        if (!dragging) {
          if (x > 0) { v = 0; x += (0 - x) * rubber; }              // 왼쪽 끝 — 고무처럼 되돌아온다
          else if (x < min) { v = 0; x += (min - x) * rubber; }      // 오른쪽 끝
          else { x += v; v *= friction; }
          if (Math.abs(v) < 0.06 && x <= 0 && x >= min) { v = 0; apply(); return; }
          if (x > -0.5 && x < 0.5 && Math.abs(v) < 0.06) x = 0;
        }
        apply();
        raf = requestAnimationFrame(frame);
      };
      const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };

      const down = e => { bounds(); dragging = true; el.dataset.fxDrag = 'on';
        lastX = e.clientX; lastT = performance.now(); v = 0; el.setPointerCapture?.(e.pointerId); kick(); };
      const move = e => { if (!dragging) return;
        const now = performance.now(), dx = e.clientX - lastX, dt = Math.max(8, now - lastT);
        // 경계 밖에서는 절반만 따라온다 — 저항이 느껴져야 끝인 줄 안다
        x += (x > 0 || x < min) ? dx * 0.42 : dx;
        v = dx / dt * 16; lastX = e.clientX; lastT = now; };
      const up = e => { if (!dragging) return; dragging = false; el.removeAttribute('data-fx-drag');
        el.releasePointerCapture?.(e.pointerId); kick(); };
      const wheel = e => {                                   // 트랙패드 가로 스와이프도 같은 축에
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        bounds(); e.preventDefault(); x = Math.max(min - 60, Math.min(60, x - e.deltaX)); v = -e.deltaX * 0.4; kick(); };

      el.addEventListener('pointerdown', down);
      el.addEventListener('pointermove', move, { passive: true });
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
      el.addEventListener('wheel', wheel, { passive: false });
      addEventListener('resize', bounds);
      bounds(); apply();
      offs.push(() => { removeEventListener('resize', bounds); if (raf) cancelAnimationFrame(raf); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountDragGallery });
})(window);
