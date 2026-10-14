:root {
  --bg: #07111f;
  --bg-2: #0d1b2a;
  --panel: rgba(15, 24, 38, 0.8);
  --panel-strong: rgba(11, 19, 30, 0.94);
  --border: rgba(125, 204, 255, 0.2);
  --text: #ebf3ff;
  --muted: #b4c7dc;
  --primary: #67e8f9;
  --primary-2: #60a5fa;
  --accent: #8b5cf6;
  --green: #34d399;
  --shadow: 0 20px 45px rgba(5, 12, 24, 0.45);
  --radius: 22px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(103, 232, 249, 0.18), transparent 30%),
    radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.12), transparent 25%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(103, 232, 249, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 232, 249, 0.04) 1px, transparent 1px);
  background-size: 30px 30px;
  mask-image: radial-gradient(circle at center, black 55%, transparent 100%);
  pointer-events: none;
}

.page-glow {
  position: fixed;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
  pointer-events: none;
}

.glow-one {
  top: 5%;
  left: -80px;
  background: rgba(96, 165, 250, 0.35);
}

.glow-two {
  bottom: 10%;
  right: -100px;
  background: rgba(139, 92, 246, 0.28);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(7, 17, 31, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(103, 232, 249, 0.12);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
  gap: 1rem;
}

.brand-wrap {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(103, 232, 249, 0.25), rgba(139, 92, 246, 0.25));
  border: 1px solid rgba(103, 232, 249, 0.32);
  color: var(--primary);
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
}

.brand-name {
  font-size: 1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.nav-links a {
  position: relative;
  color: var(--muted);
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: color 0.25s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 0.25s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a:hover::after {
  width: 100%;
}

.section {
  padding: 5.5rem 0;
}

.hero {
  min-height: calc(100vh - 74px);
  display: flex;
  align-items: center;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.eyebrow.alt {
  color: var(--primary);
}

.title-line {
  display: block;
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.title-line.accent {
  color: var(--primary);
}

.subtitle {
  margin-top: 1rem;
  font-size: clamp(1.1rem, 2vw, 1.7rem);
  font-weight: 600;
  color: #dfeeff;
}

.lead {
  max-width: 700px;
  margin-top: 1rem;
  font-size: 1.08rem;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  min-height: 52px;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 28px rgba(96, 165, 250, 0.18);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #02131f;
}

.btn-secondary {
  border-color: rgba(103, 232, 249, 0.4);
  background: rgba(13, 27, 42, 0.4);
  color: var(--text);
}

.mini-stats {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.mini-stats div {
  min-width: 120px;
  padding: 0.9rem 1rem;
  border-radius: 16px;
  background: rgba(12, 22, 35, 0.78);
  border: 1px solid var(--border);
}

.mini-stats strong,
.mini-stats span {
  display: block;
}

.mini-stats strong {
  font-size: 1rem;
  color: var(--primary);
}

.mini-stats span {
  font-size: 0.8rem;
  color: var(--muted);
}

.hero-panel {
  position: relative;
  background: linear-gradient(180deg, rgba(12, 22, 35, 0.92), rgba(16, 29, 46, 0.92));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.2rem;
  box-shadow: var(--shadow);
}

.hero-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.12), rgba(139, 92, 246, 0.1));
  pointer-events: none;
}

.panel-header,
.panel-body {
  position: relative;
  z-index: 1;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(103, 232, 249, 0.12);
  color: var(--muted);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.status-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.9);
}

.panel-body {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.info-block {
  padding: 1rem;
  border-radius: 16px;
  background: rgba(7, 17, 31, 0.72);
  border: 1px solid rgba(103, 232, 249, 0.16);
}

.label {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: 0.45rem;
}

.info-block strong {
  display: block;
  line-height: 1.5;
  color: var(--text);
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.04em;
}

.about-section {
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.about-copy {
  color: var(--muted);
  font-size: 1.05rem;
}

.about-copy p {
  margin-bottom: 1.2rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.metric-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem 1rem;
  background: rgba(15, 24, 38, 0.85);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.metric-card i {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(103, 232, 249, 0.14), rgba(139, 92, 246, 0.14));
  color: var(--primary);
  font-size: 1.15rem;
}

.metric-card strong,
.metric-card span {
  display: block;
}

.metric-card strong {
  color: var(--text);
  margin-bottom: 0.2rem;
}

.metric-card span {
  color: var(--muted);
  font-size: 0.82rem;
}

.section-alt {
  background: rgba(10, 18, 29, 0.8);
  border-top: 1px solid rgba(103, 232, 249, 0.08);
  border-bottom: 1px solid rgba(103, 232, 249, 0.08);
}

.timeline {
  display: grid;
  gap: 1.25rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 1rem;
  align-items: start;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-top: 10px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 6px rgba(103, 232, 249, 0.12);
}

.timeline-card {
  background: rgba(12, 22, 35, 0.8);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.4rem 1.5rem;
  box-shadow: var(--shadow);
}

.timeline-card h3 {
  font-size: 1.35rem;
  margin-bottom: 0.2rem;
}

.meta {
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 0.9rem;
}

.timeline-card ul {
  padding-left: 1.2rem;
  color: var(--muted);
}

.timeline-card li {
  margin-bottom: 0.55rem;
  line-height: 1.6;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.project-card {
  background: rgba(12, 22, 35, 0.82);
  border: 1px solid rgba(103, 232, 249, 0.14);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: transform 0.28s ease, border-color 0.28s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(103, 232, 249, 0.32);
}

.project-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(103, 232, 249, 0.14), rgba(139, 92, 246, 0.15));
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
}

.project-card p {
  color: var(--muted);
  line-height: 1.7;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.cert-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.1rem;
  border-radius: 16px;
  background: rgba(12, 22, 35, 0.8);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  color: var(--text);
  font-weight: 600;
}

.cert-card i {
  color: var(--primary);
}

.contact-section {
  padding-bottom: 5rem;
}

.contact-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(8, 16, 28, 0.95), rgba(18, 39, 64, 0.95));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.contact-list {
  display: grid;
  gap: 0.7rem;
}

.contact-list p {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--muted);
}

.contact-list a {
  color: var(--text);
}

.site-footer {
  padding: 1.4rem 0 2rem;
  border-top: 1px solid rgba(103, 232, 249, 0.08);
  background: rgba(7, 17, 31, 0.9);
}

.footer-inner {
  display: flex;
  justify-content: center;
  text-align: center;
  color: var(--muted);
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .hero-inner,
  .about-grid,
  .project-grid,
  .cert-grid,
  .contact-box {
    grid-template-columns: 1fr;
  }

  .hero-inner,
  .contact-box {
    display: grid;
  }

  .project-grid,
  .cert-grid {
    display: grid;
  }
}

@media (max-width: 700px) {
  .navbar {
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }

  .nav-links {
    justify-content: center;
    gap: 0.8rem 1rem;
  }

  .project-grid,
  .metrics,
  .cert-grid {
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
