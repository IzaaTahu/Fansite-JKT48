const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
