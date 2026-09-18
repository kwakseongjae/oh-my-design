// fx: coverflow-ring — 소수 인덱스 하나로 전체 배치가 결정된다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountCoverflow(root = document, { autoMs = 3200 } = {}) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offs = [];
    for (const el of root.querySelectorAll('.fx-cf')) {
      const items = [...el.querySelectorAll('.fx-cf__item')];
      if (!items.length) continue;
      const cs = getComputedStyle(el);
      const num = (k, d) => parseFloat(cs.getPropertyValue(k)) || d;
      const GAP = num('--fx-cf-gap', 132), ANG = num('--fx-cf-ang', 52),
            DEPTH = num('--fx-cf-depth', 132);
      const N = items.length;
      let idx = 0, target = 0, raf = 0, dragging = false, lastX = 0, timer = 0, hovering = false;

      const layout = () => {
        for (let i = 0; i < N; i++) {
          const o = i - idx;                      // 중앙으로부터의 거리(소수)
          const k = Math.max(-1, Math.min(1, o)); // 접힘은 ±1 에서 포화
          const ad = Math.abs(o);
          const s = items[i].style;
          s.setProperty('--x', (o * GAP).toFixed(1) + 'px');
          s.setProperty('--rot', (-k * ANG).toFixed(1) + 'deg');
          s.setProperty('--z', (-Math.min(ad, 4) * DEPTH).toFixed(1) + 'px');
          s.setProperty('--s', (1 - Math.min(ad, 4) * 0.055).toFixed(3));
          s.setProperty('--lit', (1 - Math.min(ad, 3) * 0.17).toFixed(3));
          s.setProperty('--zi', String(100 - Math.round(ad * 10)));
          if (ad < 0.5) items[i].dataset.cfActive = ''; else items[i].removeAttribute('data-cf-active');
        }
      };
      const frame = () => {
        raf = 0;
        idx += (target - idx) * 0.16;             // 임계 감쇠 — 오버슛 없이 붙는다
        if (Math.abs(target - idx) < 0.001) idx = target; else raf = requestAnimationFrame(frame);
        layout();
      };
      const go = (t) => { target = Math.max(0, Math.min(N - 1, t)); if (!raf) raf = requestAnimationFrame(frame); };
      const advance = () => { if (hovering || dragging) return; go(target >= N - 1 ? 0 : target + 1); };

      const down = e => { dragging = true; el.dataset.fxCf = 'drag'; lastX = e.clientX; el.setPointerCapture?.(e.pointerId); };
      const move = e => { if (!dragging) return; const dx = e.clientX - lastX;
        if (Math.abs(dx) > GAP * 0.45) { go(target - Math.sign(dx)); lastX = e.clientX; } };
      const up = e => { dragging = false; el.removeAttribute('data-fx-cf'); el.releasePointerCapture?.(e.pointerId); };
      const click = e => { const it = e.target.closest('.fx-cf__item'); if (it) go(items.indexOf(it)); };
      const key = e => { if (e.key === 'ArrowRight') go(target + 1); if (e.key === 'ArrowLeft') go(target - 1); };
      const enter = () => { hovering = true; }, leave = () => { hovering = false; };

      el.addEventListener('pointerdown', down);
      el.addEventListener('pointermove', move, { passive: true });
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
      el.addEventListener('click', click);
      el.addEventListener('keydown', key);
      el.tabIndex = 0;
      if (matchMedia('(hover:hover)').matches) {
        el.addEventListener('pointerenter', enter, { passive: true });
        el.addEventListener('pointerleave', leave, { passive: true });
      }
      // 자동 전진 = 유휴 생동. 화면 밖이면 멈춘다
      const io = new IntersectionObserver(([en]) => {
        clearInterval(timer);
        if (en.isIntersecting && !reduce && autoMs) timer = setInterval(advance, autoMs);
      }, { rootMargin: '60px' });
      io.observe(el);
      layout();
      offs.push(() => { io.disconnect(); clearInterval(timer); if (raf) cancelAnimationFrame(raf); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountCoverflow });
})(window);
