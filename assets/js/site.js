// Mobile menu toggle and language memory.
(function () {
  var hd = document.querySelector('.hd');
  var btn = document.querySelector('.menu-btn');
  if (hd && btn) {
    btn.addEventListener('click', function () {
      var open = hd.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.lang a').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('ve-lang', a.getAttribute('data-lang')); } catch (e) {}
    });
  });
})();
