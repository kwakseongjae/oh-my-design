// fx: persistent-expand — 자동 순환 + 클릭 고정. 호버는 여는 장치가 아니다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountExpand(root = document, { autoMs = 5200 } = {}) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offs = [];
    for (const el of root.querySelectorAll('.fx-pex')) {
      const panels = [...el.querySelectorAll('.fx-pex__panel')];
      if (!panels.length) continue;
      const ms = parseInt(el.dataset.fxAuto || autoMs, 10);
      let i = Math.max(0, panels.findIndex(p => p.classList.contains('is-open')));
      let pinned = false, hover = false, live = false, timer = 0;

      panels.forEach((p, k) => {
        if (!p.hasAttribute('tabindex') && p.tagName !== 'BUTTON') p.tabIndex = 0;
        if (p.tagName !== 'BUTTON') { p.setAttribute('role', 'button'); }
        p.setAttribute('aria-expanded', String(k === i));
      });

      const show = (k) => {
        i = (k + panels.length) % panels.length;
        panels.forEach((p, n) => {
          p.classList.toggle('is-open', n === i);
          p.setAttribute('aria-expanded', String(n === i));
        });
      };
      const stop = () => { clearInterval(timer); timer = 0; };
      const start = () => {
        stop();
        if (reduce || pinned || hover || !live || ms <= 0) return;
        timer = setInterval(() => show(i + 1), ms);
      };
      const pin = (k) => { pinned = true; el.classList.add('is-pinned'); show(k); stop(); };
      const unpin = () => { pinned = false; el.classList.remove('is-pinned'); start(); };

      panels.forEach((p, k) => {
        // 클릭 = 지속 열림. 호버로는 열리지 않는다.
        p.addEventListener('click', () => { (pinned && k === i) ? unpin() : pin(k); });
        p.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); (pinned && k === i) ? unpin() : pin(k); }
          else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); pin((k + 1) % panels.length); panels[i].focus(); }
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); pin((k - 1 + panels.length) % panels.length); panels[i].focus(); }
        });
        // 포커스는 명시적 의도다 — 키보드만으로 완결된다.
        p.addEventListener('focus', () => { if (!pinned) show(k); });
      });

      el.addEventListener('keydown', (e) => { if (e.key === 'Escape' && pinned) { unpin(); } });
      el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hover = true; stop(); } });
      el.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { hover = false; start(); } });

      const io = new IntersectionObserver(([en]) => {                 // 화면 밖에서는 타이머를 끈다
        live = en.isIntersecting;
        live ? start() : stop();
      }, { rootMargin: '10% 0px' });
      io.observe(el);

      show(i);
      offs.push(() => { io.disconnect(); stop(); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountExpand });
})(window);
