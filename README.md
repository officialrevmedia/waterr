# responsible® waterr — Website

Responsible Water. Premium Experience.

A one page site for WATERR, a sustainable premium water program for luxury hospitality, made in Canada.

## What is in here
- `index.html` — the complete website. It is fully self contained: all photography is embedded and the logo is built in SVG, so this single file is the whole site. Fonts load from Google Fonts at runtime.
- `.nojekyll` — tells GitHub Pages to serve the file as is.

## Go live on GitHub Pages (about 2 minutes)
1. Create a new repository on github.com, for example `waterr-site`.
2. Click **Add file**, then **Upload files**, and drag in `index.html` and `.nojekyll`.
3. Commit the files.
4. Open **Settings**, then **Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then **Save**.
6. Wait about a minute. The site goes live at `https://YOURUSERNAME.github.io/waterr-site/`.

### Command line option
```
git init
git add .
git commit -m "responsible waterr launch site"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/waterr-site.git
git push -u origin main
```
Then enable Pages in Settings as above.

## Custom domain (waterr.ca)
In **Settings**, then **Pages**, add `waterr.ca` under **Custom domain**, then at your registrar add:
- Four `A` records for the apex pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- One `CNAME` record for `www` pointing to `YOURUSERNAME.github.io`.

## Editing notes
- All copy lives in `index.html`. Search a heading to find its section.
- Brand colors are CSS variables near the top: Powder Blue `#A9BED6`, Warm Ivory `#E7E2DA`, Soft Stone `#C2C2C2`, Charcoal `#2C2C2C`.
- Type: Cormorant Garamond for display, Montserrat for body, Quicksand for the logo and labels. When you license Korolev Rounded, swap the display font link in the head.
- The logo is drawn in SVG (the `rwlogo` blocks). To use an official vector later, replace those blocks. It recolors automatically in white on dark sections.
- The call to action buttons open email to `info@waterr.ca`. Update the address or point them to a form in the closing and nav sections.
- To swap a photo, replace the matching `data:image/jpeg;base64,...` value, or ask and I can rebuild it for you.

Responsible Water. Premium Experience.
