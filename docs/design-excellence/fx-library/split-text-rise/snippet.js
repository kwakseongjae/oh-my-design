// fx: split-text-rise — 텍스트를 줄/단어(또는 문자)로 쪼갠다. 구현: oh-my-design (MIT).
// 접근성: 원문을 aria-label 로 유지하고 쪼갠 조각은 aria-hidden 으로 감춘다.
;(function (global) {
  function splitText(el, { by = 'word' } = {}) {
    const text = (el.textContent || '').trim();
    if (!text) return;
    el.setAttribute('aria-label', text);
    const frag = document.createDocumentFragment();
    const line = document.createElement('span');
    line.className = 'fx-split__line';
    line.setAttribute('aria-hidden', 'true');
    const parts = by === 'char' ? [...text] : text.split(/(\s+)/);
    let i = 0;
    for (const p of parts) {
      if (/^\s+$/.test(p)) { line.appendChild(document.createTextNode(p)); continue; }
      const u = document.createElement('span');
      u.className = 'fx-split__unit';
      u.style.setProperty('--i', i++);
      u.textContent = p;
      line.appendChild(u);
      if (by === 'word') line.appendChild(document.createTextNode(' '));
    }
    frag.appendChild(line);
    el.textContent = '';
    el.appendChild(frag);
    el.classList.add('fx-split');
  }
  function splitAll(root = document, opts) {
    root.querySelectorAll('[data-fx-split-by]').forEach(el => splitText(el, { by: el.dataset.fxSplitBy, ...opts }));
  }
  global.fxLib = Object.assign(global.fxLib || {}, { splitText, splitAll });
})(window);
