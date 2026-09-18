// fx: hover-cross-open — 호버 칸 기준 좌/우를 나누고 프리뷰 한 장만 교체한다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountCrossOpen(root = document) {
    if (!matchMedia('(hover:hover)').matches) return () => {};
    const offs = [];
    for (const el of root.querySelectorAll('.fx-cross')) {
      const cells = [...el.querySelectorAll('.fx-cross__cell')];
      const inner = el.querySelector('.fx-cross__previewInner');
      const label = el.querySelector('.fx-cross__label');
      let cur = -1;
      const open = (i) => {
        if (i === cur) return; cur = i;
        const r = cells[i].getBoundingClientRect();
        const mid = r.left + r.width / 2;
        for (const c of cells) {                          // 좌/우/자기자신 3분류
          const cr = c.getBoundingClientRect();
          c.dataset.side = c === cells[i] ? 'c' : (cr.left + cr.width / 2 < mid ? 'l' : 'r');
        }
        if (inner) {                                      // 프리뷰는 DOM 을 만들지 않고 스타일만 바꾼다
          const src = cells[i].querySelector('img');
          const ph = cells[i].querySelector('.fx-cross__ph');
          inner.innerHTML = '';
          const node = src ? src.cloneNode() : Object.assign(document.createElement('div'),
            { className: 'fx-cross__ph', style: ph ? ph.getAttribute('style') || '' : '' });
          node.style.position = 'static'; node.style.width = '100%'; node.style.height = '100%';
          inner.appendChild(node);
        }
        if (label) label.textContent = cells[i].dataset.fxLabel || '';
        el.classList.add('is-open');
      };
      const close = () => { cur = -1; el.classList.remove('is-open');
        for (const c of cells) c.removeAttribute('data-side'); };
      const over = (e) => { const c = e.target.closest('.fx-cross__cell'); if (c) open(cells.indexOf(c)); };
      el.addEventListener('pointerover', over, { passive: true });
      el.addEventListener('pointerleave', close, { passive: true });
      el.addEventListener('focusin', over);
      el.addEventListener('focusout', (e) => { if (!el.contains(e.relatedTarget)) close(); });
      for (const c of cells) c.tabIndex = 0;
      offs.push(() => { el.removeEventListener('pointerover', over); el.removeEventListener('pointerleave', close); });
    }
    return () => offs.forEach(f => f());
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountCrossOpen });
})(window);
