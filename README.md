* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-soft: #f5f8ff;
  --panel: #ffffff;
  --panel-alt: #eef5ff;
  --primary: #1c6ad5;
  --primary-dark: #104ca9;
  --accent: #4ecdc4;
  --text: #18212f;
  --muted: #53657d;
  --border: #e3ebf8;
  --shadow: 0 18px 45px rgba(13, 29, 56, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: var(--text);
  background: linear-gradient(180deg, #f4f8ff 0%, #ffffff 100%);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(11, 16, 32, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  flex-wrap: wrap;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.nav-links a:hover {
  color: #fff;
}

.hero {
  background: linear-gradient(135deg, #091521 0%, #1c2d49 35%, #1d69c8 100%);
  color: #fff;
  padding: 6rem 0 4rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.76rem;
  letter-spacing: 0.13em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent);
}

.eyebrow.alt {
  color: var(--primary);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 5vw, 4.5rem);
  line-height: 1.05;
}

.subtitle {
  margin-top: 0.9rem;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
}

.lead {
  margin-top: 1rem;
  max-width: 650px;
  font-size: 1.04rem;
  color: rgba(255, 255, 255, 0.8);
}

.cta-row {
  margin-top: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: #fff;
  color: var(--bg);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: #fff;
}

.hero-panel {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;
  padding: 2rem 1.4rem;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow);
}

.hero-panel h3 {
  margin: 0 0 1rem;
  font-size: 1.35rem;
}

.hero-panel li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-panel li::before {
  content: "•";
  color: var(--accent);
  font-size: 1.6rem;
  line-height: 1;
}

.section {
  padding: 5rem 0;
}

.section-alt {
  background: #f3f8ff;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.9rem, 3vw, 2.8rem);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
}

.about-copy {
  color: var(--muted);
  font-size: 1.05rem;
}

.about-copy p {
  margin: 0 0 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.2rem 1rem;
  box-shadow: 0 10px 18px rgba(14, 32, 64, 0.04);
}

.stat-card strong {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--primary);
  font-size: 1.05rem;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.95rem;
}

.timeline {
  display: grid;
  gap: 1.5rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 1rem;
  align-items: start;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  box-shadow: 0 0 0 6px rgba(28, 106, 213, 0.12);
  margin-top: 0.7rem;
}

.timeline-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.04);
}

.timeline-card h3 {
  margin: 0 0 0.3rem;
  font-size: 1.35rem;
}

.meta {
  margin: 0 0 0.9rem;
  color: var(--primary-dark);
  font-weight: 700;
}

.timeline-card ul {
  padding-left: 1.2rem;
  color: var(--muted);
}

.timeline-card li {
  margin-bottom: 0.7rem;
  line-height: 1.6;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;
}

.project-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.05);
}

.project-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #e8f2ff 0%, #dffaf8 100%);
  color: var(--primary-dark);
  font-size: 1.35rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
}

.project-card p {
  margin: 0;
  color: var(--muted);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1rem 0.9rem;
  font-weight: 700;
  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.04);
}

.skill-item i {
  color: var(--primary);
  min-width: 20px;
}

.contact-section {
  padding-bottom: 5rem;
}

.contact-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, #0b1527 0%, #183d73 100%);
  color: #fff;
  border-radius: 24px;
  padding: 2rem 2rem;
}

.contact-list {
  display: grid;
  gap: 0.7rem;
}

.contact-list p {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.contact-list a {
  color: #fff;
}

.site-footer {
  background: #0b1020;
  color: rgba(255, 255, 255, 0.8);
  padding: 1.2rem 0;
}

.footer-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .hero-inner,
  .about-grid,
  .project-grid,
  .contact-box {
    grid-template-columns: 1fr;
  }

  .hero-inner {
    display: grid;
  }

  .contact-box {
    display: grid;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .navbar {
    flex-direction: column;
    justify-content: center;
    padding: 0.8rem 0;
  }

  .nav-links {
    justify-content: center;
    gap: 0.8rem;
    font-size: 0.88rem;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .stats-grid,
  .skills-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }
}
