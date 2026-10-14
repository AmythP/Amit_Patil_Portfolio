// Initialize particles, typed text, reveal animations, and small interactivity

document.addEventListener('DOMContentLoaded', () => {
  // --- tsParticles background ---
  if (window.tsParticles) {
    tsParticles.load('tsparticles', {
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ['#67e8f9', '#8b5cf6', '#60a5fa'] },
        shape: { type: 'circle' },
        opacity: { value: 0.12, random: true },
        size: { value: 2.5, random: { enable: true, minimumValue: 1 } },
        move: { enable: true, speed: 0.9, direction: 'none', outModes: { default: 'out' } },
        links: { enable: true, distance: 140, color: '#67e8f9', opacity: 0.06, width: 1 }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' } },
        modes: { grab: { distance: 140, links: { opacity: 0.2 } }, push: { quantity: 3 } }
      },
      detectRetina: true
    }).catch((e) => console.warn('tsParticles load failed', e));
  }

  // --- Typed text animation (simple, lightweight) ---
  const typedTextEl = document.getElementById('typed-text');
  const cursorEl = document.querySelector('.cursor');
  const text = 'Welcome to Amit Patil Portfolio';
  let idx = 0;
  let forward = true;

  function typeLoop() {
    if (!typedTextEl) return;
    if (forward) {
      if (idx <= text.length) {
        typedTextEl.textContent = text.slice(0, idx);
        idx += 1;
        setTimeout(typeLoop, 80);
      } else {
        forward = false;
        setTimeout(typeLoop, 1200);
      }
    } else {
      if (idx >= 0) {
        typedTextEl.textContent = text.slice(0, idx);
        idx -= 1;
        setTimeout(typeLoop, 24);
      } else {
        forward = true;
        setTimeout(typeLoop, 500);
      }
    }
  }
  typeLoop();

  // Cursor blink
  if (cursorEl) setInterval(() => cursorEl.style.opacity = (cursorEl.style.opacity === '0' ? '1' : '0'), 500);

  // --- Reveal on scroll ---
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));

  // --- Navigation link active state ---
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(i => i.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // --- Dynamic footer year ---
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer-inner p');
  if (footerText) footerText.textContent = `© ${year} Amit Patil | IT Manager | Inventory Management Specialist | Data Analyst`;

  // --- Make tsParticles canvas fill the viewport behind content ---
  const pts = document.getElementById('tsparticles');
  function resizeParticlesContainer() {
    if (!pts) return;
    pts.style.position = 'fixed';
    pts.style.inset = '0';
    pts.style.zIndex = '0';
    pts.style.pointerEvents = 'none';
  }
  resizeParticlesContainer();
  window.addEventListener('resize', resizeParticlesContainer);

  // Ensure main content is above the particles
  document.querySelectorAll('main, header, footer').forEach(el => el.style.position = 'relative');
});
