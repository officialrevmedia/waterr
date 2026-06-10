# responsible waterr · Luxury Website Package

A high fidelity, fully interactive single page website for the WATERR sustainable premium water program, redesigned to a quiet luxury standard (Apple style: modern, minimal, refined).

## What is inside

| File | Purpose |
|---|---|
| `index.html` | Main site: hero, marquee, standard, impact metrics, bottles, 11 step purification rail, experience gallery, program, FAQ, lead form |
| `thanks.html` | Post submission thank you page (form redirect target) |
| `404.html` | Branded not found page (GitHub Pages picks this up automatically) |
| `robots.txt` | Crawl rules plus sitemap reference |
| `sitemap.xml` | XML sitemap with image extensions |
| `site.webmanifest` | PWA manifest with icons and theme color |
| `favicon.ico` | Multi size favicon |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |
| `assets/css/style.css` | Luxury design layer: frosted glass, transitions, reveals |
| `assets/js/main.js` | Preloader, ripple canvas, scroll reveals, counters, tabs, FAQ |
| `assets/img/` | Optimized photography, grey and white logos, all icons |

## Deploy to GitHub Pages

1. Push the entire folder contents to the `waterr` repository root (or `/docs`).
2. Settings, Pages, deploy from branch `main`.
3. Done. All asset paths are relative, so the `/waterr/` subpath works out of the box.

## Moving to waterr.ca later

Search and replace `https://officialrevmedia.github.io/waterr/` with `https://waterr.ca/` in:
`index.html` (canonical, OG, JSON-LD, form `_next`), `robots.txt`, `sitemap.xml`.
Then add a `CNAME` file containing `waterr.ca` and update `site.webmanifest` `start_url` and `scope` to `/`.

## Lead form

The form posts to FormSubmit and delivers to **info@hsholdings.ca**.
First submission only: FormSubmit emails info@hsholdings.ca a one time activation link. Click it once and all future leads flow through, then redirect to `thanks.html`. A honeypot field is included for spam protection.

## SEO included

- Title, meta description, keywords, canonical, robots directives
- Open Graph and Twitter Card tags with hero image
- JSON-LD: Organization, WebSite, Service and FAQPage (rich result eligible)
- Image sitemap, semantic HTML5, descriptive alt text on every image
- Lazy loading on below the fold imagery, preloaded hero image

## Accessibility and performance

- Visible focus states, ARIA on menu, tabs, accordion and rail controls
- `prefers-reduced-motion` respected across all animations
- Optimized progressive JPEGs (130 to 220 KB each), system smooth scrolling
