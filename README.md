# Amit Patil — Portfolio

A static, responsive professional portfolio for sharing Amit Patil's experience in IT management, healthcare systems, ERP, operations automation and analytics.

## Live page

The portfolio page is `amit_portfolio.html`. The root `index.html` redirects visitors to it, so the intended GitHub Pages landing URL is:

`https://amythp.github.io/Amit_Patil_Portfolio/`

The named page is also available at:

`https://amythp.github.io/Amit_Patil_Portfolio/amit_portfolio.html`

## Enable GitHub Pages

This repository must have GitHub Pages enabled before either URL will serve the page. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save. Wait for the Pages deployment to finish. Since the repository is private, verify that your GitHub plan/settings permit public Pages access; otherwise, make the repository public to share the site with people who do not have repository access.

Once Pages is enabled, anyone with the site URL can view the static page. They cannot edit the repository unless you grant them repository write access. Static site contents and source code are publicly inspectable when published.

## Run locally

Open `amit_portfolio.html` in a browser, or serve the repository root with a local static server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/amit_portfolio.html`.

## Repository structure

- `amit_portfolio.html` — complete responsive portfolio landing page.
- `index.html` — root redirect to the named portfolio page (required as the GitHub Pages default entry point).
- `css/`, `js/` — legacy assets retained from the earlier portfolio version.
- `images/` — placeholder documentation for optional visual assets.

The current landing page is self-contained and loads Tailwind CSS and Lucide icons from their public CDNs. It uses inline JavaScript for the current year and reveal-on-scroll effects. No build step is required.
