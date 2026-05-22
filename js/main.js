var toggle = document.getElementById('navToggle');
var links  = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
    });
  });
}

// Mark active nav link for non-index pages
var current = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(function (a) {
  if (a.getAttribute('href') === current) {
    a.style.color = 'var(--accent)';
  }
});
