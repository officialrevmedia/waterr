# THE WATERR — Investor Landing Site

Pure Water, Pure Life. A one page premium brand and investor site for THE WATERR.

This is a static website. There is no build step and no dependencies to install. Fonts load from Google Fonts and Fontshare at runtime. All brand assets are local in the `assets/` folder.

## Files

```
index.html              The full site
.nojekyll               Tells GitHub Pages to serve all files as is
assets/
  wordmark-navy.webp     Primary wordmark (navy, on light sections)
  wordmark-white.webp    Primary wordmark (white, for the footer)
  mono-navy.webp         RR monogram (navy)
  mono-white.webp        RR monogram (white, for the closing panel)
  lockup-white.webp      Logo with tagline (used in the intro)
  hero.jpg               Hero bottle mockup
  lineup.jpg             Product family lineup
  lifestyle.jpg          Luxury hospitality scene
```

Keep `index.html` and the `assets/` folder together. The HTML links to the images with relative paths such as `assets/hero.jpg`.

## Deploy to GitHub Pages

### Option A, GitHub web upload (no tools needed)
1. Create a new repository on github.com, for example `the-waterr`.
2. Click **Add file**, then **Upload files**.
3. Drag in `index.html`, `.nojekyll`, and the entire `assets` folder, keeping the folder structure.
4. Commit the files.
5. Go to **Settings**, then **Pages**.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then **Save**.
7. Wait about one minute. Your site goes live at `https://YOURUSERNAME.github.io/the-waterr/`.

### Option B, command line
```bash
git init
git add .
git commit -m "THE WATERR launch site"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/the-waterr.git
git push -u origin main
```
Then enable Pages in Settings as described in Option A.

## Custom domain (optional)
In **Settings**, then **Pages**, add your domain under **Custom domain**, for example `thewaterr.com`. Then create these DNS records with your registrar:
- Four `A` records for the apex domain pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- One `CNAME` record for `www` pointing to `YOURUSERNAME.github.io`.

## Editing notes
- All copy lives in `index.html`. Search for a heading to find its section.
- The market statistics are placeholders. Look for the comment `Market` and the `data-to` numbers, and replace them with verified figures before distribution.
- The call to action buttons use `mailto:` links to `invest@thewaterr.com` and `partners@thewaterr.com`. Update these addresses, or swap them for a form, in the closing section.
- The display typeface is Italiana, used as a close stand in for AERIS. When you license AERIS, replace the font link in the `<head>` and the `--f-display` variable.
- To replace any image, drop a new file with the same name into `assets/`.

Pure Water, Pure Life.
