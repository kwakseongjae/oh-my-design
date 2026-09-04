// fx: flip-expand-card — FLIP(First·Last·Invert·Play)을 WAAPI 로. GSAP Flip 24.4KB 없이 46줄.
// 구현: oh-my-design (MIT).
;(function (global) {
  function mountFlipExpand(root = document) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offs = [];
    for (const grid of root.querySelectorAll('.fx-flip')) {
      let openEl = null;
      const scrim = grid.querySelector('.fx-flip__scrim');

      const play = (card, toOpen) => {
        const first = card.getBoundingClientRect();          // F — 옮기기 전 위치
        card.classList.toggle('is-open', toOpen);            // 레이아웃을 진짜로 바꾼다
        grid.classList.toggle('has-open', toOpen);
        const last = card.getBoundingClientRect();           // L — 옮긴 뒤 위치
        if (reduce) return;
        const dx = first.left - last.left, dy = first.top - last.top;
        const sx = first.width / last.width, sy = first.height / last.height;
        const dur = toOpen ? 520 : 420;
        const ease = 'cubic-bezier(.22,.68,.24,1)';
        card.animate(                                        // I + P — 되돌린 뒤 0 으로 재생
          [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: 'none' }],
          { duration: dur, easing: ease });
        const inner = card.querySelector('.fx-flip__inner'); // 자식 역스케일 — 없으면 내용이 찌그러진다
        if (inner) inner.animate(
          [{ transform: `scale(${1 / sx}, ${1 / sy})` }, { transform: 'none' }],
          { duration: dur, easing: ease });
        const body = card.querySelector('.fx-flip__body');
        if (body && toOpen) body.animate(
          [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }],
          { duration: 360, delay: 140, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'backwards' });
      };

      const close = () => { if (!openEl) return; play(openEl, false); openEl = null; };
      const click = (e) => {
        const card = e.target.closest('.fx-flip__card');
        if (!card) return;
        if (card === openEl) { close(); return; }
        if (openEl) play(openEl, false);
        openEl = card; play(card, true);
      };
      const key = (e) => { if (e.key === 'Escape') close();
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('fx-flip__card')) {
          e.preventDefault(); click({ target: e.target }); } };

      grid.addEventListener('click', click);
      scrim?.addEventListener('click', close);
      document.addEventListener('keydown', key);
      for (const c of grid.querySelectorAll('.fx-flip__card')) { c.tabIndex = 0; c.setAttribute('role', 'button'); }
      offs.push(() => { grid.removeEventListener('click', click); document.removeEventListener('keydown', key); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountFlipExpand });
})(window);
