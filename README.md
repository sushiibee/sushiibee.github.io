# Noctis Vale — Archive of Signal Damage

A deploy-ready static portfolio site for **Noctis Vale**, built as a dark glitch-luxury branding experience with immersive atmosphere, responsive layout, and lightweight interaction.

## Overview

This project is a no-build static website package designed for direct deployment to:

- GitHub Pages
- Netlify
- Vercel static hosting
- Any standard web server

The site is intentionally art-directed around:
- sensory distortion
- unstable memory
- beauty-as-danger
- ritualized interface behavior
- elegant glitch aesthetics

## Stack

- HTML
- CSS
- Vanilla JavaScript
- SVG-based brand assets
- Web app manifest metadata
- Social sharing metadata

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── site.webmanifest
├── browserconfig.xml
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
├── og-cover.jpg
└── assets/
```

## Included branding layer

This package includes:
- favicon markup
- SVG favicon source
- Apple touch icon support
- web app manifest
- browser tile config
- social meta tags
- brand guideline notes

## Local preview

Because this is a plain static site, you can open `index.html` directly in a browser.

For more accurate testing, use a local static server.

### Python
```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deployment

### GitHub Pages
1. Create a repository.
2. Upload all files to the repository root.
3. Go to **Settings → Pages**.
4. Set the source to the main branch root.
5. Save and wait for the site URL.

### Netlify
1. Create a new site from a Git repository, or drag and drop the project folder in the Netlify dashboard.
2. No build command is required.
3. Publish directory should be `/` or left blank for a root static upload.

## Before publishing

Update these values in `index.html`:
- `https://example.com/`
- `https://example.com/og-cover.jpg`

Replace them with your real production domain.

Also replace placeholder image files if needed:
- `favicon.ico`
- `apple-touch-icon.png`
- `og-cover.jpg`
- `assets/icon-192.png`
- `assets/icon-512.png`
- `assets/icon-maskable-512.png`
- `assets/mstile-150.png`

## Accessibility notes

The site includes:
- semantic sections
- accessible button labels
- contrast-forward dark mode
- reduced clutter in navigation
- readable spacing and large typography

## License

Use, remix, and adapt for portfolio or concept work unless a different license is added later.
