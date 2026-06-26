# Plumeo — Static HTML/CSS/JS + WordPress Theme

This bundle contains two ready-to-use packages built from the original site.
**No sections were changed.** Same layout, same animations, same content.

```
plumeo-static/        ← Pure HTML/CSS/JS site (open index.html in a browser)
plumeo-wordpress/     ← Drop-in WordPress theme (same look & feel)
```

---

## 1) Static HTML/CSS/JS (`plumeo-static/`)

Files:
- `index.html`     — full single-page site, all 14 sections
- `style.css`      — custom styles (animations, masks, header scroll)
- `script.js`      — vanilla JS (hero auto-rotate + hover pause + click lock,
                     work-examples tabs, FAQ accordion, mobile menu,
                     team video play/pause, sticky header)
- `assets/`        — images + team videos

External CDNs (loaded automatically by `index.html`):
- Tailwind Play CDN (utility classes, identical to the React version)
- Google Fonts (Plus Jakarta Sans + Inter)
- Lucide Icons UMD

### How to run locally
Just open `index.html` in any browser, **or** serve the folder:
```bash
cd plumeo-static
python3 -m http.server 8080
# visit http://localhost:8080
```

### How to deploy
Upload the entire `plumeo-static/` folder to any host (Netlify, Vercel,
GitHub Pages, cPanel, Hostinger, S3, etc.). No build step required.

> Optional for production: replace the Tailwind Play CDN with a compiled
> Tailwind CSS file for faster loads. The current setup works as-is.

---

## 2) WordPress Theme (`plumeo-wordpress/`)

A minimum-viable WordPress theme that renders the **exact** same page.

Files:
- `style.css`       — WP theme header (required)
- `functions.php`   — enqueues fonts, Tailwind CDN, `css/main.css`, `js/script.js`
- `header.php`      — `<head>` + Tailwind config + `wp_head()`
- `footer.php`      — `wp_footer()`
- `index.php`       — full page markup
- `front-page.php`  — same markup, used automatically as the homepage
- `css/main.css`    — custom styles
- `js/script.js`    — interactivity
- `assets/`         — images + videos

### Install
1. Zip the `plumeo-wordpress` folder → `plumeo-wordpress.zip`
2. WordPress admin → **Appearance → Themes → Add New → Upload Theme**
3. Upload the zip, click **Install**, then **Activate**.
4. **Settings → Reading → Your homepage displays → A static page** is
   optional; `front-page.php` is used automatically when present.

### Editing content
- Text/markup: edit `index.php` (or `front-page.php`) directly.
- Images/videos: replace files in `/assets/` keeping the same filenames,
  or pass new ones through `plumeo_asset('your-file.jpg')`.
- Colors: change the brand hex values inside `css/main.css` `:root` block
  and in the Tailwind config inside `header.php`.

### Notes
- The theme uses the Tailwind Play CDN so no Node/build step is needed.
  For a fully self-contained production build, compile Tailwind locally
  and enqueue the resulting CSS file instead of the CDN script in
  `header.php` / `functions.php`.
- No plugins are required. The page works on any standard WordPress install.
