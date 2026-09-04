// fx: wide-drum — 트랙 transform 1개 + 타일당 --d 1개. 구현: oh-my-design (MIT). 외부 의존 0.
;(function (global) {
  function mountDrum(root = document, { speed = 62 } = {}) {              // px/s
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offs = [];
    for (const el of root.querySelectorAll('.fx-drum')) {
      const track = el.querySelector('.fx-drum__track');
      if (!track || !track.children.length) continue;
      const base = [...track.children];

      // 이음매 없는 순환: 원본 묶음을 트랙이 컨테이너 2배를 넘을 때까지 복제한다.
      for (let g = 0; g < 8 && track.scrollWidth < el.clientWidth * 2 + 40; g++)
        for (const n of base) track.appendChild(n.cloneNode(true));

      const tiles = [...track.children];
      let setW = 0, geo = [];                                             // 레이아웃은 리사이즈 때만 읽는다
      const measure = () => {
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        geo = tiles.map(n => ({ n, l: n.offsetLeft, w: n.offsetWidth, vis: true }));
        setW = base.reduce((a, n) => a + n.offsetWidth + gap, 0);
      };

      const v0 = reduce ? 0 : (parseFloat(el.dataset.fxSpeed) || speed);
      let x = 0, v = v0, t0 = 0, raf = 0, live = false, hold = false, drag = null;

      const paint = () => {
        const w = setW || 1;
        const off = ((x % w) + w) % w;                                    // 항상 [0, w)
        track.style.transform = `translate3d(${-off}px,0,0)`;
        const half = el.clientWidth / 2;
        for (const g of geo) {
          const c = g.l - off + g.w / 2;
          const on = c > -g.w && c < el.clientWidth + g.w;
          if (on !== g.vis) { g.n.style.visibility = on ? '' : 'hidden'; g.vis = on; }
          if (on) g.n.style.setProperty('--d', ((c - half) / half).toFixed(3));
        }
      };

      const frame = (t) => {
        raf = 0;
        const dt = Math.min((t - t0) / 1000, 0.05); t0 = t;
        if (!drag) { v += (v0 - v) * Math.min(dt * 2.4, 1); x += v * dt; }  // 관성은 기본 속도로 수렴
        paint();
        if (live && !hold) raf = requestAnimationFrame(frame);
      };
      const run = () => { if (!raf && live && (!hold || drag)) { t0 = performance.now(); raf = requestAnimationFrame(frame); } };
      const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };

      // 호버는 관문이 아니다 — 멈춰서 보려는 사람 앞에서 넘어가지 않을 뿐.
      el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hold = true; v = 0; stop(); } });
      el.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { hold = false; run(); } });

      el.addEventListener('pointerdown', e => {
        drag = { id: e.pointerId, last: e.clientX, t: performance.now() };
        el.classList.add('is-drag'); el.setPointerCapture(e.pointerId);
      });
      el.addEventListener('pointermove', e => {
        if (!drag || e.pointerId !== drag.id) return;
        const dx = e.clientX - drag.last; drag.last = e.clientX;
        const now = performance.now(); v = -dx / Math.max((now - drag.t) / 1000, 0.008); drag.t = now;
        x -= dx; paint();
      });
      const up = e => { if (!drag || e.pointerId !== drag.id) return; drag = null; el.classList.remove('is-drag'); run(); };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);

      const io = new IntersectionObserver(([en]) => {                     // 화면 밖에서는 rAF 를 끈다
        live = en.isIntersecting;
        if (live) run(); else stop();
      }, { rootMargin: '15% 0px' });
      io.observe(el);

      const onResize = () => { measure(); paint(); };
      addEventListener('resize', onResize);
      measure(); paint();
      offs.push(() => { io.disconnect(); removeEventListener('resize', onResize); stop(); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountDrum });
})(window);
