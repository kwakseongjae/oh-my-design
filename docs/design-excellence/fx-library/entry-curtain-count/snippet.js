// fx: entry-curtain-count — 가짜 진행률을 쓰지 않는다. 실제 로드에 묶는다. 구현: oh-my-design (MIT).
;(function (global) {
  function mountCurtain(root = document, { min = 700, max = 2600 } = {}) {
    const el = root.querySelector('.fx-curtain');
    const stage = root.querySelector('.fx-curtain-stage');
    const reveal = () => { stage?.setAttribute('data-fx-revealed', ''); };
    if (!el) { reveal(); return () => {}; }
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.fxCurtain = 'done'; reveal(); return () => {};
    }
    const num = el.querySelector('.fx-curtain__num');
    const bar = el.querySelector('.fx-curtain__bar');
    const t0 = performance.now();
    let p = 0, done = false, raf = 0;

    // 실제 진행률: 이미지 디코드 완료 비율. 없으면 시간 기반으로 떨어진다
    const imgs = [...root.images || []].filter(i => i.src);
    const ready = () => imgs.length ? imgs.filter(i => i.complete).length / imgs.length : 1;

    const frame = () => {
      const t = performance.now() - t0;
      const real = document.readyState === 'complete' ? 1 : ready() * 0.9;
      const floor = Math.min(1, t / max);            // 영원히 안 끝나는 프리로더는 없어야 한다
      const target = Math.max(real, floor);
      p += (target - p) * 0.12;                      // 숫자가 튀지 않게 감쇠
      const shown = Math.min(99, Math.round(p * 100));
      if (num) num.textContent = String(shown).padStart(2, '0');
      if (bar) bar.style.setProperty('--fx-curtain-p', (p * 100).toFixed(1) + '%');
      if (!done && p > 0.985 && t > min) { finish(); return; }
      raf = requestAnimationFrame(frame);
    };
    const finish = () => {
      done = true; cancelAnimationFrame(raf);
      if (num) num.textContent = '100';
      if (bar) bar.style.setProperty('--fx-curtain-p', '100%');
      setTimeout(() => {
        el.dataset.fxCurtain = 'out';
        reveal();                                     // 커튼과 본문이 같은 순간에 움직인다
        const ms = parseFloat(getComputedStyle(el).getPropertyValue('--fx-curtain-dur')) || 620;
        setTimeout(() => { el.dataset.fxCurtain = 'done'; }, ms + 80);
      }, 180);
    };
    raf = requestAnimationFrame(frame);
    setTimeout(() => { if (!done) finish(); }, max + 400);   // 안전판 — 무슨 일이 있어도 열린다
    return () => cancelAnimationFrame(raf);
  }
  global.fxLib = Object.assign(global.fxLib || {}, { mountCurtain });
})(window);
