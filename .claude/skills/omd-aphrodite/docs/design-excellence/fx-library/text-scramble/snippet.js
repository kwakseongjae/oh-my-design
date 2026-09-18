// fx: text-scramble — 노이즈에서 글자가 해독되듯 정착한다. 구현: oh-my-design (MIT).
// 접근성: 최종 문자열을 aria-label 로 고정하고, 스크램블 중인 노드는 aria-hidden.
;(function (global) {
  const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';
  function scramble(el, next = el.dataset.fxTo || el.textContent, opts = {}) {
    const { speed = 1, glyphs = GLYPHS } = opts;
    const prev = el.textContent || '';
    const final = next;
    el.setAttribute('aria-label', final);
    const body = el.querySelector('.fx-scramble__body') || el;
    body.setAttribute('aria-hidden', 'true');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { body.textContent = final; return Promise.resolve(); }
    const len = Math.max(prev.length, final.length);
    const q = [];
    for (let i = 0; i < len; i++) {
      const start = Math.floor(Math.random() * 22 / speed);
      q.push({ from: prev[i] || '', to: final[i] || '', start, end: start + Math.floor(Math.random() * 22 / speed) + 6 });
    }
    let frame = 0, raf = 0;
    return new Promise(res => {
      const tick = () => {
        let out = '', done = 0;
        for (const c of q) {
          if (frame >= c.end) { done++; out += c.to; }
          else if (frame >= c.start) {
            if (!c.ch || Math.random() < 0.3) c.ch = glyphs[Math.floor(Math.random() * glyphs.length)];
            out += c.ch;
          } else out += c.from;
        }
        body.textContent = out;
        if (done === q.length) { cancelAnimationFrame(raf); res(); return; }
        frame++; raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
  }
  // 화면에 들어올 때 한 번만 실행
  function scrambleOnView(root = document) {
    const els = [...root.querySelectorAll('[data-fx-scramble]')];
    if (!els.length || !('IntersectionObserver' in window)) { els.forEach(e => scramble(e)); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { io.unobserve(e.target); scramble(e.target); }
    }), { threshold: .4 });
    els.forEach(e => io.observe(e));
  }
  global.fxLib = Object.assign(global.fxLib || {}, { scramble, scrambleOnView });
})(window);
