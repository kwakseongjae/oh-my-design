// fx-library demo shell — 라이트/다크 토글만 한다.
(function () {
  var r = document.documentElement, b = document.querySelector('.tgl');
  if (!b) return;
  b.textContent = r.dataset.theme || 'dark';
  b.addEventListener('click', function () {
    r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark';
    b.textContent = r.dataset.theme;
  });
})();
