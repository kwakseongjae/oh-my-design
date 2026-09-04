// fx: poster-cylinder — 자동 회전 + 드래그 + 관성 + 면 명암을 rAF 한 루프에서. 구현: oh-my-design (MIT).
;(function (global) {
  function mountCylinder(root = document, { auto = 6, friction = 0.94 } = {}) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offs = [];
    for (const el of root.querySelectorAll('.fx-cyl')) {
      const stage = el.querySelector('.fx-cyl__stage');
      if (!stage) continue;
      const faces = [...el.querySelectorAll('.fx-cyl__face')];
      const step = parseFloat(getComputedStyle(el).getPropertyValue('--fx-cyl-step')) || 30;
      const autoV = reduce ? 0 : (+el.dataset.fxCylAuto || auto);   // deg/s
      el.dataset.fxCyl = 'js';
      let rot = 0, vel = 0, dragging = false, lastX = 0, lastT = 0, raf = 0, paused = false;

      const shade = () => {
        for (let i = 0; i < faces.length; i++) {
          // 면의 법선이 카메라를 얼마나 향하는가 → 1(정면) ~ 0(측면)
          const a = (rot + i * step) * Math.PI / 180;
          const lit = 0.42 + 0.58 * Math.max(0, Math.cos(a));
          faces[i].style.setProperty('--fx-cyl-lit', lit.toFixed(3));
        }
      };
      const frame = (t) => {
        raf = requestAnimationFrame(frame);
        const dt = lastT ? Math.min(0.05, (t - lastT) / 1000) : 0.016; lastT = t;
        if (!dragging) {
          vel += (autoV - vel) * (1 - Math.pow(friction, dt * 60));   // 관성 → 기본 속도로 수렴
          if (paused) vel *= Math.pow(0.86, dt * 60);
          rot += vel * dt;
        }
        stage.style.setProperty('--fx-cyl-rot', (rot % 360).toFixed(2) + 'deg');
        shade();
      };
      const down = (e) => { dragging = true; el.dataset.fxCyl = 'drag'; lastX = e.clientX;
        el.setPointerCapture?.(e.pointerId); };
      const move = (e) => { if (!dragging) return;
        const dx = e.clientX - lastX; lastX = e.clientX;
        rot += dx * 0.32; vel = dx * 12;                       // 놓는 순간의 속도 = 관성 초기값
        stage.style.setProperty('--fx-cyl-rot', (rot % 360).toFixed(2) + 'deg'); shade(); };
      const up = (e) => { if (!dragging) return; dragging = false; el.dataset.fxCyl = 'js';
        el.releasePointerCapture?.(e.pointerId); };
      const enter = () => { paused = true; };                  // 호버하면 감속해서 읽게 해 준다
      const leave = () => { paused = false; };

      el.addEventListener('pointerdown', down);
      el.addEventListener('pointermove', move, { passive: true });
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      if (matchMedia('(hover:hover)').matches) {
        el.addEventListener('pointerenter', enter, { passive: true });
        el.addEventListener('pointerleave', leave, { passive: true });
      }
      // 화면 밖이면 루프를 멈춘다 — 유휴 효과가 배터리를 먹으면 안 된다
      const io = new IntersectionObserver(([en]) => {
        if (en.isIntersecting) { if (!raf) { lastT = 0; raf = requestAnimationFrame(frame); } }
        else if (raf) { cancelAnimationFrame(raf); raf = 0; }
      }, { rootMargin: '80px' });
      io.observe(el);
      shade();
      offs.push(() => { io.disconnect(); if (raf) cancelAnimationFrame(raf);
        el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountCylinder });
})(window);
