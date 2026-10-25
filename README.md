# Asma Othman — Portfolio website

A bilingual (English / العربية) portfolio built as a plain static website: HTML, CSS and a small JavaScript file.

- No build step, no frameworks, no paid services.
- Works on GitHub Pages, Netlify, Cloudflare Pages, or any free static host.
- All text, projects and articles live in the `content/` folder.

---

## ملخص سريع بالعربي

- **تعديل النصوص والروابط:** `content/site.js`
- **إضافة أو تعديل مشروع:** `content/projects.js`، والصور في `assets/work/اسم-المشروع/`
- **نشر مقال:** `content/journal.js`
- **النشر مجانًا:** اتبعي خطوات GitHub Pages تحت (حوالي 10 دقائق).
- **قبل الإطلاق:** راجعي قائمة "Checklist" في آخر الملف.

---

## Folder structure

```
index.html              ← the single page that loads everything
content/
  site.js               ← name, role, email, social links, CV, about text, experience, tools
  projects.js           ← every project and its case study (+ a TEMPLATE at the bottom)
  journal.js            ← blog articles (Markdown)
  ui.js                 ← interface words in English and Arabic (menu, buttons…)
assets/
  css/style.css         ← all styling (colours and fonts are at the top as tokens)
  js/app.js             ← the site engine — no need to edit
  fonts/                ← Guesswhat Exceptional (Arabic display font)
  work/<project-slug>/  ← project images and videos
  journal/              ← (create it) article images
  cv/                   ← (create it) your CV PDF
  favicon.svg           ← browser tab icon
  og-image.jpg          ← preview image when the link is shared (1200 × 630)
.nojekyll               ← tells GitHub Pages to serve files as they are
```

## Preview on your computer

Double-click `index.html`. It opens in your browser and works without a server.

## Replacing placeholder images

The current images were cut from your portfolio PDF, so they are smaller than your originals. To replace one:

1. Export the image from Photoshop/Illustrator as **WebP or JPG**, about **2000 px wide**, under ~400 KB.
2. Save it in `assets/work/<project-slug>/` using **the same file name** (e.g. `assets/work/rashf/cover.webp`).
   Or use a new name and update the path in `content/projects.js`.

If a path is wrong, the site shows a labelled “Image coming soon” box with the expected path instead of a broken image.

Recommended sizes:

| Use | Shape | Width |
|---|---|---|
| Project cover | any (shown cropped to 3:2, 4:3 or 4:5 in grids) | 2000 px |
| Gallery image | any (shown at its own shape) | 2000 px (wide) / 1200 px (half) |
| Video | MP4 (H.264), under ~8 MB | 1080 px |
| Portrait | 4:5 | 1200 px |

Keep the subject in the centre of covers, because grids crop the edges.

## Adding a case study

1. Open `content/projects.js`.
2. Copy the **TEMPLATE** at the bottom of the file and paste it inside the `PORTFOLIO.projects = [ … ]` list where you want it to appear.
3. Change `slug` (lowercase-with-hyphens). The project page will be `#/work/<slug>`.
4. Fill `title`, `client`, `summary`, `category`, `year`, `sections`, `deliverables` in English (`en`) and Arabic (`ar`).
5. Create `assets/work/<slug>/` and put the cover and gallery images there.
6. Set `featured: true` if it should also appear on the home page.

Empty case-study sections are hidden automatically. Previous/next navigation updates by itself.

## Publishing a journal article

1. Open `content/journal.js`.
2. Copy an article and paste it at the top of the list.
3. Change `slug`, `date` (YYYY-MM-DD), `category`, `title`, `excerpt`.
4. Write the `body` in simple Markdown (`## heading`, `- list`, `> quote`, `**bold**`, `[link](https://…)`, `![caption](assets/journal/image.webp)`).
5. Set `draft: false`.

Reading time is calculated automatically. Without a `cover`, the site draws a typographic cover using `coverGlyph`.

**The three current articles are sample drafts** marked “Sample draft”. Rewrite or delete them before launch.

## Changing colours, fonts and the moving background

The look follows your portfolio PDF: dark espresso pages, copper headings, cream hairlines, rounded boxes with the title breaking the border, grainy serif titles and a faint grid.

Open `assets/css/style.css`. The first block (`:root`) holds every colour:

- `--bg` page colour, `--ink` text, `--beige` secondary headings, `--sage` muted text
- `--copper` the accent colour, `--line` box borders, `--grid` the grid-paper lines
- `--glyph` how visible the big background letters are (raise the last number, e.g. `.07`, to make them stronger)

Fonts (all free): **Playfair Display** for English titles, **Source Sans 3** for English text (close to Myriad in your PDF), **Allura** for the script accent ("Hello, I'm" and the footer signature), **IBM Plex Sans Arabic** for Arabic text, and **Guesswhat Exceptional** for Arabic titles, loaded from `assets/fonts/`. Make sure your Guesswhat licence allows web use; if not, swap it for a free Arabic display font from Google Fonts in the `--arabic` line.

**Moving background:** giant Arabic letters from your name drift behind the page and move at different speeds as visitors scroll, and the page colour shifts gently between sections (espresso, copper-brown, dark olive). Edit the letters, sizes and speeds in `assets/js/app.js` → `GLYPHS`, and the section colours in `TONES`. Visitors whose device asks for reduced motion see the letters still.

## Free deployment — GitHub Pages (recommended)

You need a free GitHub account. Nothing to buy.

1. Sign in at github.com → **New repository**.
2. Name it **`<your-username>.github.io`** (gives the address `https://<your-username>.github.io`).
   Any other name also works; the address becomes `https://<your-username>.github.io/<repo-name>/`.
3. Set it to **Public** → **Create repository**.
4. Click **uploading an existing file**, then drag **everything inside this folder** (not the folder itself) into the page — including `.nojekyll`. On a Mac, press `Cmd+Shift+.` in Finder to show hidden files.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)** → **Save**.
7. Wait 1–3 minutes. Your site is live at the address shown on that page.

To update later: open the repository, upload the changed files (same names) and commit. The site refreshes in a minute or two.

After it is live:
- Put the address in `content/site.js` → `url`.
- In `index.html`, change `og:image` to the full address, e.g. `https://<you>.github.io/assets/og-image.jpg`, so link previews show the image on WhatsApp, LinkedIn and X.

### Alternatives (also free)

- **Netlify Drop**: go to app.netlify.com/drop and drag this folder in. Address: `https://<name>.netlify.app`.
- **Cloudflare Pages**: connect the GitHub repository; address `https://<name>.pages.dev`.

## Honest limitations of the free setup

- **Address**: you get a platform subdomain (`…github.io`, `…netlify.app`). A custom domain like `asmaothman.com` costs money yearly; you can connect one later without rebuilding the site.
- **Contact form**: static hosting has no server, so there is no form. The Contact page uses a direct email link plus a copy-email button, which always works. If you later want a form, Formspree and Netlify Forms have free tiers with monthly limits.
- **Search engines & link previews**: pages are drawn by JavaScript and use `#/` links (this makes the site work on GitHub Pages without extra setup). Google indexes JavaScript sites, but every page shares the same preview card when shared on social media. The home page preview is set in `index.html`.
- **Video size**: GitHub warns at files over 50 MB and blocks over 100 MB. Keep videos small, or upload long films to Vimeo/YouTube and link to them.
- **Fonts**: Google Fonts load from Google's servers; the site still works with fallback fonts if they're blocked.

## Checklist — what you need to supply

- [ ] Review all case-study text in `content/projects.js` (drafted from your portfolio PDF) and correct anything inaccurate.
- [ ] Add the **year** for each project that shows “—”.
- [ ] Confirm which client work you're allowed to show publicly.
- [ ] Replace the PDF-cut images with full-resolution exports.
- [x] LinkedIn added.
- [ ] Fix the typos in the CV before launch (DESIGHNER ×2, materails, ascross, Midgourney, HAPPENZE), then replace `assets/cv/Asmaa-Othman-CV.pdf`.
- [ ] Confirm the email and Instagram handle (`asmaothman.creative`).
- [ ] Rewrite or delete the three **sample journal articles**.
- [ ] Check the Guesswhat Exceptional font licence allows web embedding.
- [ ] After publishing: set `url` in `site.js` and the full `og:image` address in `index.html`.
