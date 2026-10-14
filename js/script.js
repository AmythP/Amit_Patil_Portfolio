* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-soft: #121a2d;
  --panel: #ffffff;
  --panel-alt: #f5f7fb;
  --primary: #1e88e5;
  --primary-dark: #0d5bbd;
  --accent: #4fd1c5;
  --text: #1b2430;
  --muted: #5d6b82;
  --border: #e5eaf2;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: var(--text);
  background: linear-gradient(180deg, #edf4ff 0%, #ffffff 100%);
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
  margin: 0;
  padding: 0;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(11, 16, 32, 0.9);
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
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #fff;
}

.hero {
  background: linear-gradient(135deg, #0b1020 0%, #1e2d4d 38%, #1d7adf 100%);
  color: #fff;
  padding: 6rem 0 4rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 700;
}

.eyebrow.alt {
  color: var(--primary);
}

.hero-text h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.6rem);
  line-height: 1.1;
}

.subtitle {
  margin-top: 0.75rem;
  font-size: clamp(1.1rem, 2vw, 1.7rem);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.lead {
  margin-top: 1rem;
  max-width: 660px;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
}

.cta-row {
  margin-top: 1.75rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: #fff;
  color: var(--bg);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.15);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.45);
}

.hero-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border-radius: 22px;
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow);
}

.hero-card h3 {
  margin: 0 0 1rem;
  font-size: 1.4rem;
}

.hero-card ul {
  display: grid;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-card li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.hero-card li::before {
  content: "•";
  color: var(--accent);
  font-size: 1.5rem;
  line-height: 1;
}

.section {
  padding: 5rem 0;
}

.section-alt {
  background: #f4f8ff;
}

.section-heading {
  margin-bottom: 2.2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--text);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: start;
}

.about-copy {
  font-size: 1.05rem;
  color: var(--muted);
}

.about-copy p {
  margin: 0 0 1rem;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.highlight-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.2rem 1rem;
  box-shadow: 0 8px 20px rgba(30, 66, 136, 0.04);
}

.highlight-card strong {
  display: block;
  font-size: 1.05rem;
  color: var(--primary);
  margin-bottom: 0.3rem;
}

.highlight-card span {
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
  margin-top: 0.55rem;
  box-shadow: 0 0 0 6px rgba(30, 136, 229, 0.12);
}

.timeline-content {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
}

.timeline-content h3 {
  margin: 0 0 0.25rem;
  font-size: 1.3rem;
}

.meta {
  margin: 0 0 0.9rem;
  color: var(--primary-dark);
  font-weight: 700;
}

.timeline-content ul {
  padding-left: 1.2rem;
  color: var(--muted);
}

.timeline-content li {
  margin-bottom: 0.6rem;
  line-height: 1.6;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
}

.project-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
}

.project-icon {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #dfeeff 0%, #dffaf7 100%);
  color: var(--primary-dark);
  font-size: 1.4rem;
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
  gap: 0.75rem;
  align-items: center;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1rem 0.9rem;
  font-weight: 700;
  color: var(--text);
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
  background: linear-gradient(135deg, #0f172a 0%, #1e4375 100%);
  color: #fff;
  border-radius: 22px;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
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
  padding: 1.4rem 0;
}

.footer-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .hero-content,
  .about-grid,
  .contact-box,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .contact-box {
    display: grid;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 0.8rem;
    font-size: 0.88rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .navbar {
    flex-direction: column;
    justify-content: center;
    padding: 0.8rem 0;
  }

  .hero {
    padding-top: 4rem;
  }

  .skills-grid,
  .highlights {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }
}
