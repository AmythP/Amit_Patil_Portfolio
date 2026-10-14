// Minimal script: smooth scrolling and optional simple animation

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Simple fade-in when sections enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('pre-view');
    observer.observe(sec);
  });
});
