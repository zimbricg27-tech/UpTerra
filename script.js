// Light/Dark mode: toggles root data attribute and remembers user choice.
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || savedTheme === 'light') {
  root.setAttribute('data-theme', savedTheme);
}

themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Scroll animations: reveals sections/cards smoothly when they enter viewport.
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries, view) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        view.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));
