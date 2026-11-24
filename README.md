# Amit Patil — Portfolio

A static, responsive professional portfolio for sharing Amit Patil's experience in IT management, healthcare systems, ERP, operations automation and analytics.

## Live page

The portfolio page is `amit_portfolio.html`. The root `index.html` redirects visitors to it, so the intended GitHub Pages landing URL is:

`https://amythp.github.io/Amit_Patil_Portfolio/`

The named page is also available at:

`https://amythp.github.io/Amit_Patil_Portfolio/amit_portfolio.html`

## Projects

The portfolio presents ten projects from the project list in the resume data: IVF Clinic Operations Platform; Appointment Letter Generator; POS/ERP Inventory Audit Automation; ERP Reporting and Data Sync Suite; HRMS and Payroll Cloud Application; Hospital Lead CRM; Recruitment Control Centre & Candidate Hub; Gmail Payment Tracker; Organisation Tools; and Label Generator and Photo Print Sizer. Project descriptions are summaries; not every project is publicly hosted or available as a live demo.

## Enable GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save. Wait for the Pages deployment to finish.

This repository is public, so once Pages is enabled, anyone with the site URL can view the static page. Visitors cannot edit the repository unless granted write access. Published static page source is publicly inspectable.

## Run locally

Open `amit_portfolio.html` in a browser, or serve the repository root with a local static server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/amit_portfolio.html`.

## Repository structure

- `amit_portfolio.html` — complete responsive portfolio landing page, including ten project summaries.
- `index.html` — root redirect to the named portfolio page (the GitHub Pages default entry point).
- `css/`, `js/` — legacy assets retained from the earlier portfolio version.
- `images/` — placeholder documentation for optional visual assets.

The current landing page loads Tailwind CSS and Lucide icons from their public CDNs. It uses inline JavaScript for the current year and reveal-on-scroll effects. No build step is required.
