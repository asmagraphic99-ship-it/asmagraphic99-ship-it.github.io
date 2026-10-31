/* ==========================================================================
   Portfolio engine — renders every page from the files in /content.
   No build step and no libraries: open index.html or host the folder as-is.
   You don't need to edit this file to change text, projects or articles.
   ========================================================================== */
(function () {
  "use strict";

  const P = window.PORTFOLIO || {};
  const SITE = P.site || {};
  const PROJECTS = (P.projects || []).filter((p) => p && p.slug);
  const CATS = P.categories || {};
  const POSTS = (P.journal || []).filter((a) => a && a.slug && !a.draft) // drafts stay hidden until draft: false.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const UI = P.ui || {};

  const $main = document.getElementById("main");
  const $header = document.getElementById("site-header");
  const $headerInner = document.getElementById("header-inner");
  const $menu = document.getElementById("menu-panel");
  const $footer = document.getElementById("site-footer");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------ Language */
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } },
  };
  let lang = store.get("ao-lang") === "ar" ? "ar" : "en";
  const other = () => (lang === "en" ? "ar" : "en");

  function t(key, ...args) {
    const v = (UI[lang] && UI[lang][key]) ?? (UI.en && UI.en[key]) ?? key;
    return typeof v === "function" ? v(...args) : v;
  }
  function L(obj, l = lang) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[l] || obj.en || "";
  }
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  const isArabic = (s) => /[؀-ۿ]/.test(String(s || ""));
  const pad = (n) => String(n).padStart(2, "0");
  const num = (n) => (lang === "ar" ? String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]) : String(n));

  function applyLang() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    const skip = document.querySelector("[data-skip]");
    if (skip) skip.textContent = t("skip");
  }

  function fmtDate(iso) {
    const d = new Date(iso + "T12:00:00");
    if (isNaN(d)) return esc(iso);
    try {
      return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA-u-ca-gregory-nu-arab" : "en-GB", { day: "numeric", month: "short", year: "numeric" }).format(d);
    } catch (e) { return iso; }
  }
  function readingTime(text) {
    const words = String(text || "").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / (lang === "ar" ? 180 : 210)));
  }

  /* ------------------------------------------------------------- Pieces */
  const ICON_REG =
    '<svg class="reg-mark" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 1.5v21M1.5 12h21" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="2.6" fill="currentColor"/></svg>';
  const ARROW = '<span class="arrow" aria-hidden="true">→</span>';
  const ARROW_UP = '<span class="arrow" aria-hidden="true">↗</span>';

  function img(src, alt, extra = "") {
    if (!src) return placeholder("");
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" data-fallback ${extra}>`;
  }
  function placeholder(path) {
    return `<div class="placeholder"><strong>${esc(t("image_missing"))}</strong>${path ? `<code>${esc(t("image_missing_hint", path))}</code>` : ""}</div>`;
  }
  function catName(key, l = lang) { return L(CATS[key], l) || key; }
  function projectIndex(p) { return PROJECTS.indexOf(p) + 1; }

  // Big two-script title: grainy serif word in the page language + the other script laid over it.
  function gTitle(main, alt, tag = "h2", id = "") {
    return `<${tag} class="g-title"${id ? ` id="${id}"` : ""}><span class="g-main grain">${esc(main)}</span>${alt ? `<span class="g-alt" lang="${other()}" aria-hidden="true">${esc(alt)}</span>` : ""}</${tag}>`;
  }
  const uiOther = (key) => { const v = (UI[other()] || {})[key]; return typeof v === "string" ? v : ""; };

  // Sector line, one-line outcome and up to three discipline tags under a project card.
  function cardInfo(p) {
    const tags = (p.services || []).slice(0, 3).map((x) => `<li>${esc(L(x))}</li>`).join("");
    return `<div class="card-info">
      ${p.sector ? `<p class="slug sector">${esc(L(p.sector))}</p>` : ""}
      ${p.oneLine ? `<p class="one-line">${esc(L(p.oneLine))}</p>` : ""}
      ${tags ? `<ul class="tags">${tags}</ul>` : ""}
    </div>`;
  }

  function workCard(p, opts = {}) {
    const { cls = "", ratio = "ratio-32", headingTag = "h3" } = opts;
    const n = projectIndex(p);
    const alt = L(p.title, other());
    const meta = [p.sector ? L(p.sector) : catName(p.category), p.selfInitiated ? t("self_initiated") : ""].filter(Boolean).map(esc).join(" · ");
    return `
      <a class="work-item ${cls}" href="#/work/${esc(p.slug)}" data-reveal>
        <div class="fig crop"><div class="media ${ratio}">${img(p.cover, L(p.coverAlt))}</div></div>
        <div class="cap">
          <p class="slug"><span class="accent">${num(pad(n))}</span> — ${meta}</p>
          <${headingTag}><span>${esc(L(p.title))}</span>${alt && alt !== L(p.title) ? `<span class="alt" lang="${other()}" dir="auto">${esc(alt)}</span>` : ""}</${headingTag}>
          ${opts.summary ? (p.oneLine ? `<p>${esc(L(p.oneLine))}</p>${(p.services || []).length ? `<ul class="tags">${p.services.slice(0, 3).map((x) => `<li>${esc(L(x))}</li>`).join("")}</ul>` : ""}` : `<p>${esc(L(p.summary))}</p>`) : ""}
          ${opts.link ? `<span class="text-link">${esc(t("view_case"))} ${ARROW}</span>` : ""}
        </div>
      </a>`;
  }

  // Motion tile: plays the project's first video silently while on screen.
  function motionTile(p) {
    const vid = (p.gallery || []).find((g) => g.type === "video");
    const media = vid
      ? `<video src="${esc(vid.src)}" poster="${esc(vid.poster || p.cover)}" muted loop playsinline preload="none" data-autoplay aria-label="${esc(L(p.title))}"></video>`
      : img(p.cover, L(p.coverAlt));
    return `
      <a class="motion-tile" href="#/work/${esc(p.slug)}" data-reveal>
        <div class="crop"><div class="media ratio-45">${media}${vid ? `<span class="play-tag">▶ ${esc(t("reel"))}</span>` : ""}</div></div>
        <div class="cap"><p class="slug"><span class="accent">${esc(catName(p.category))}</span></p><h3>${esc(L(p.title))}</h3></div>
      </a>`;
  }

  // One tile per video: plays silently while on screen, opens the motion page.
  function videoTile(p, g) {
    const cap = p.category === "ai-video" ? L(p.title) : (L(g.caption || {}) || L(p.title));
    return `
      <a class="motion-tile" href="#/work/${esc(p.slug)}" data-reveal>
        <div class="crop"><div class="media ratio-916"><video src="${esc(g.src)}" poster="${esc(g.poster || p.cover)}" muted loop playsinline preload="none" data-autoplay aria-label="${esc(cap)}"></video><span class="play-tag">▶ ${esc(t("reel"))}</span></div></div>
        <div class="cap"><p class="slug"><span class="accent">${esc(L(p.client))}</span></p><h3>${esc(cap)}</h3></div>
      </a>`;
  }

  function postCard(a, i) {
    const body = L(a.body);
    const cover = a.cover
      ? img(a.cover, L(a.title))
      : typeCover(a, i);
    return `
      <a class="post-card" href="#/journal/${esc(a.slug)}" data-reveal>
        <div class="crop"><div class="media ratio-43">${cover}</div></div>
        <div class="meta-row slug"><span class="accent">${esc(L(a.category))}</span><span>${fmtDate(a.date)}</span><span>${esc(t("min_read", readingTime(body)))}</span></div>
        <h3>${esc(L(a.title))}</h3>
        <p>${esc(L(a.excerpt))}</p>
        ${a.draft ? `<span class="badge">${esc(t("draft"))}</span>` : ""}
      </a>`;
  }
  function typeCover(a, i) {
    const g = a.coverGlyph || (L(a.title).trim()[0] || "·");
    return `<div class="type-cover" aria-hidden="true"><span class="glyph ${isArabic(g) ? "" : "is-latin"}">${esc(g)}</span>
      <span class="tc-slug slug"><span>${esc(t("journal"))}</span><span>№ ${num(pad(POSTS.length - i))}</span></span></div>`;
  }

  /* --------------------------------------------------------- Header/nav */
  const NAV = [
    { href: "#/work", key: "nav_work", match: /^\/work/ },
    { href: "#/about", key: "nav_about", match: /^\/about/ },
    POSTS.length && { href: "#/journal", key: "nav_journal", match: /^\/journal/ },
    { href: "#/contact", key: "nav_contact", match: /^\/contact/ },
  ].filter(Boolean);
  function navLinks(path) {
    return NAV.map((n) => `<a href="${n.href}"${n.match.test(path) ? ' aria-current="page"' : ""}>${esc(t(n.key))}</a>`).join("");
  }
  function langButton() {
    const label = t("lang_switch");
    return `<button class="lang-toggle" type="button" data-lang-toggle aria-label="${esc(t("lang_switch_label"))}" lang="${other()}"><span class="${other() === "ar" ? "lt-ar" : ""}">${esc(label)}</span></button>`;
  }
  function renderHeader(path) {
    $headerInner.innerHTML = `
      <a class="brand" href="#/" aria-label="${esc(L(SITE.name))}"><span class="brand-name">${esc(L(SITE.name))}<span class="dot">.</span></span></a>
      <nav class="nav" aria-label="Main">${navLinks(path)}</nav>
      <div class="header-tools">
        ${langButton()}
        <a class="btn btn--proof btn--sm header-cta" href="#/contact">${esc(t("lets_talk"))}</a>
        <button class="menu-btn" type="button" data-menu-open aria-expanded="false" aria-controls="menu-panel"><span>${esc(t("menu"))}</span><span class="bars" aria-hidden="true"></span></button>
      </div>`;
    $menu.innerHTML = `
      <div class="wrap menu-top">
        <a class="brand" href="#/"><span class="brand-name">${esc(L(SITE.name))}<span class="dot">.</span></span></a>
        <button type="button" class="menu-btn" style="display:inline-flex" data-menu-close>${esc(t("close"))} ✕</button>
      </div>
      <nav class="wrap" aria-label="Mobile">${navLinks(path)}</nav>
      <div class="wrap menu-foot">
        <a class="slug" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
        <span class="slug">${esc(L(SITE.location))}</span>
      </div>`;
  }
  let lastFocus = null;
  function openMenu() {
    lastFocus = document.activeElement;
    $menu.hidden = false;
    document.body.style.overflow = "hidden";
    const btn = $headerInner.querySelector("[data-menu-open]");
    if (btn) btn.setAttribute("aria-expanded", "true");
    const first = $menu.querySelector("nav a");
    if (first) first.focus();
  }
  function closeMenu(restore = true) {
    if ($menu.hidden) return;
    $menu.hidden = true;
    document.body.style.overflow = "";
    const btn = $headerInner.querySelector("[data-menu-open]");
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (restore && lastFocus) lastFocus.focus();
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    const socials = socialList();
    $footer.innerHTML = `
      <div class="wrap">
        <div class="footer-grid">
          <div><h2>${esc(L(SITE.name))}</h2><p class="muted" style="margin-top:8px">${esc(L(SITE.role))}<br>${esc(L(SITE.location))}</p><p class="footer-sign" lang="en" aria-hidden="true">${esc(L(SITE.name, "en"))}</p></div>
          <ul class="footer-list">${NAV.map((n) => `<li><a href="${n.href}">${esc(t(n.key))}</a></li>`).join("")}</ul>
          <ul class="footer-list">${(SITE.services || []).slice(0, 5).map((sv) => `<li>${esc(L(sv))}</li>`).join("")}</ul>
          <ul class="footer-list">
            <li><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
            ${socials.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)} ${ARROW_UP}</a></li>`).join("")}
          </ul>
        </div>
        <div class="footer-base slug">
          <span>© ${num(year)} ${esc(L(SITE.name))} · ${esc(t("rights"))}</span>
          <span>${esc(t("colophon"))}</span>
        </div>
      </div>`;
  }
  function socialList() {
    const l = SITE.links || {};
    const handle = (url) => { try { return new URL(url).pathname.replace(/\/+$/, "").split("/").pop(); } catch (e) { return ""; } };
    return [
      l.behance && { name: "Behance", url: l.behance, handle: handle(l.behance) },
      l.instagram && { name: "Instagram", url: l.instagram, handle: "@" + handle(l.instagram) },
      l.linkedin && { name: "LinkedIn", url: l.linkedin, handle: handle(l.linkedin) },
    ].filter(Boolean);
  }

  /* --------------------------------------------------------------- Pages */
  function pageHome() {
    const featured = PROJECTS.filter((p) => p.featured);
    const nameParts = L(SITE.name).split(" ");
    const otherName = L(SITE.name, other());
    const year = new Date().getFullYear();
    const yearsExp = SITE.since ? year - SITE.since : 0;

    function pfCard(p) {
      return `
      <a class="pf-card" href="#/work/${esc(p.slug)}" data-reveal>
        <div class="crop"><div class="media ratio-43">${img(p.cover, L(p.coverAlt))}</div>
          <div class="pf-cap"><h3>${esc(L(p.title))}</h3><p>${esc(p.selfInitiated ? t("self_initiated") : L(p.client))}</p></div>
        </div>
        ${cardInfo(p)}
      </a>`;
    }
    function xpSection() {
      const xp = SITE.experience || [];
      if (!xp.length) return "";
      const head = (x, plus) => `<span class="yr">${esc(x.years)}</span><span class="rl">${esc(L(x.role))}</span><span class="co">${esc(L(x.company))} · ${esc(L(x.place))}</span>${plus ? `<span class="plus" aria-hidden="true">+</span>` : "<span></span>"}`;
      const row = (x, i) => (x.summary || x.highlights)
        ? `<details class="xp-row"${i === 0 ? " open" : ""}><summary>${head(x, true)}</summary>
          <div class="xp-detail">${x.summary ? `<p>${esc(L(x.summary))}</p>` : ""}${x.highlights ? `<ul>${x.highlights.map((h) => `<li>${esc(L(h))}</li>`).join("")}</ul>` : ""}</div></details>`
        : `<div class="xp-row"><div class="xp-static">${head(x, false)}</div></div>`;
      const recent = xp.slice(0, 3), earlier = xp.slice(3);
      return `<section class="wrap section" data-tone="espresso" aria-labelledby="xp-title">
        <div class="section-head">${gTitle(t("xp_home_title"), uiOther("xp_home_title"), "h2", "xp-title")}<a class="text-link" href="#/about">${esc(t("more_about"))} ${ARROW}</a></div>
        <p class="lead muted sel-lead">${esc(t("xp_home_lead"))}</p>
        <div class="xp-list">${recent.map(row).join("")}
          ${earlier.length ? `<details class="xp-more"><summary class="text-link"><span class="when-closed">${esc(t("show_earlier"))} ↓</span><span class="when-open">${esc(t("hide_earlier"))} ↑</span></summary>${earlier.map((x, i) => row(x, i + 3)).join("")}</details>` : ""}
        </div>
      </section>`;
    }
    const motionProjects = PROJECTS.filter((p) => p.category === "motion" || p.category === "ai-video");
    const counts = Object.keys(CATS).map((k) => ({ k, n: PROJECTS.filter((p) => p.category === k).length })).filter((c) => c.n);
    const about = (SITE.about && SITE.about[lang]) || [];

    return {
      title: `${L(SITE.name)} — ${L(SITE.role)}`,
      description: L(SITE.headline),
      html: `
      <section class="wrap hero" data-tone="espresso" aria-labelledby="hero-title">
        <div class="hero-grid">
          <div class="hero-photo"><span class="hero-poly" aria-hidden="true"></span>${SITE.heroPhoto ? `<img src="${esc(SITE.heroPhoto)}" alt="${esc(L(SITE.name))}" fetchpriority="high" data-fallback>` : ""}</div>
          <div class="hero-copy">
            <p class="slug">${esc(t("portfolio"))} · <span class="accent">${num(SITE.since || "")}—${num(year)}</span> · ${esc(L(SITE.location))}</p>
            <h1 class="hero-title" id="hero-title">
              <span class="l1 grain">${esc(nameParts[0] || "")}</span>
              <span class="l2 grain">${esc(nameParts.slice(1).join(" "))}</span>
              <span class="hi" aria-hidden="true">${esc(t("hello"))}</span>
            </h1>
            <p class="hero-ar" lang="${other()}">${esc(otherName)}</p>
            <p class="hero-role">${esc(L(SITE.role))}</p>
            <p class="hero-headline">${esc(L(SITE.headline))}</p>
            <p class="hero-intro">${esc(L(SITE.intro))}</p>
            <div class="cta-row">
              <a class="btn btn--proof" href="#/work">${esc(t("see_work"))} ${ARROW}</a>
              <a class="btn" href="#/contact">${esc(t("start_project"))}</a>
              ${SITE.cv ? `<a class="btn" href="${esc(SITE.cv)}" target="_blank" rel="noopener">${esc(t("cv"))} <span aria-hidden="true">↓</span></a>` : ""}
            </div>
            ${(SITE.experience || [])[0] ? `<p class="now-line"><span class="dot" aria-hidden="true"></span><span class="slug accent">${esc(t("now_label"))}</span> ${esc(L(SITE.role))} · ${esc(L(SITE.experience[0].company))}, ${esc(L(SITE.experience[0].place))}</p>` : ""}
          </div>
        </div>
      </section>

      <section class="wrap stats-band" data-tone="espresso" aria-label="${esc(t("years_exp"))}">
        <div class="stats-row">
          ${yearsExp > 0 ? `<span class="stat"><b class="grain">+${num(yearsExp)}</b><span class="slug">${esc(t("years_exp"))}</span></span>` : ""}
          <span class="stat"><b class="grain">${num(PROJECTS.length)}</b><span class="slug">${esc(t("projects_label"))}</span></span>
          <span class="stat"><b class="grain">${num(counts.length)}</b><span class="slug">${esc(t("stat_disciplines"))}</span></span>
        </div>
      </section>

      <section class="wrap section" data-tone="espresso" aria-labelledby="svc-title">
        <div class="section-head">${gTitle(t("services_title"), uiOther("services_title"), "h2", "svc-title")}</div>
        <ol class="svc-grid">
          ${(SITE.services || []).map((sv, i) => `<li class="svc" data-reveal><span class="slug accent">${num(pad(i + 1))}</span><h3>${esc(L(sv))}</h3><p class="svc-alt" lang="${other()}">${esc(L(sv, other()))}</p></li>`).join("")}
        </ol>
        <div class="ai-kit" data-reveal>
          <span class="slug accent">${esc(t("extra_skills"))}</span>
          <ul class="ai-tools extra-skills">${(SITE.skills || []).map((x) => `<li>${esc(L(x))}</li>`).join("")}</ul>
          <p class="ai-hf">${esc(t("ai_hf"))}</p>
          <ul class="ai-tools">${["ChatGPT", "Higgsfield AI", "Adobe Firefly", "Midjourney", "Microsoft Copilot", "Canva AI"].map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      </section>

      <section class="wrap section" data-tone="copper" aria-labelledby="sel-title">
        <div class="section-head">
          ${gTitle(t("selected_work"), uiOther("selected_work"), "h2", "sel-title")}
        </div>
        <p class="lead muted sel-lead">${esc(t("sel_lead"))}</p>
        <div class="pf-grid">${featured.map(pfCard).join("") || `<p class="empty">${esc(t("gallery_empty"))}</p>`}</div>
        <div class="center-cta"><a class="btn btn--proof" href="#/work">${esc(t("view_all"))} (${num(PROJECTS.length)}) ${ARROW}</a></div>
      </section>

      ${motionProjects.length ? `
      <section class="wrap section" data-tone="olive" aria-labelledby="motion-title">
        <div class="section-head">${gTitle(t("motion_title"), uiOther("motion_title"), "h2", "motion-title")}<a class="text-link" href="#/work/${esc((motionProjects.find((p) => p.category === "motion") || motionProjects[0]).slug)}">${esc(t("view_all"))} ${ARROW}</a></div>
        <p class="lead muted" style="margin-top:-24px;margin-bottom:clamp(32px,4vw,56px)">${esc(t("motion_lead"))}</p>
        <div class="motion-grid">${motionProjects.flatMap((p) => (p.gallery || []).filter((g) => g.type === "video").map((g) => videoTile(p, g))).join("")}</div>
      </section>` : ""}

      ${xpSection()}

      ${(SITE.brands || []).length ? `
      <section class="section brands" data-tone="espresso" aria-labelledby="brands-title">
        <div class="wrap section-head">${gTitle(t("brands_title"), uiOther("brands_title"), "h2", "brands-title")}</div>
        <div class="marquee" aria-hidden="true"><div class="marquee-track">${[0, 1].map(() => SITE.brands.map((b) => `<span>${esc(b)}</span>`).join("")).join("")}</div></div>
        <p class="visually-hidden">${esc(SITE.brands.join(", "))}</p>
      </section>` : ""}

      <section class="wrap section" data-tone="espresso" aria-labelledby="about-title">
        <div class="split">
          <div class="s-fig crop" data-reveal><div class="media ratio-45">${img(SITE.portrait, L(SITE.name))}</div></div>
          <div class="s-body" data-reveal>
            ${gTitle(t("about_title_big"), uiOther("about_title_big"), "h2", "about-title")}
            <p class="lead">${esc(about[0] || "")}</p>
            ${SITE.quote ? `<blockquote class="pull">${esc(L(SITE.quote))}</blockquote>` : ""}
            <a class="text-link" href="#/about">${esc(t("more_about"))} ${ARROW}</a>
          </div>
        </div>
      </section>

      ${POSTS.length ? `
      <section class="wrap section" data-tone="copper" aria-labelledby="journal-title">
        <div class="section-head">${gTitle(t("journal"), uiOther("journal"), "h2", "journal-title")}<a class="text-link" href="#/journal">${esc(t("read_journal"))} ${ARROW}</a></div>
        <div class="journal-grid">${POSTS.slice(0, 2).map(postCard).join("")}</div>
      </section>` : ""}

      ${contactBand()}`,
    };
  }

  function contactBand() {
    return `
      <section class="contact-band" data-tone="olive" aria-labelledby="cta-title">
        <div class="wrap">
          <fieldset class="box">
            <legend>${esc(t("nav_contact"))}</legend>
            <p class="now-line avail"><span class="dot" aria-hidden="true"></span>${esc(t("availability"))}</p>
            <h2 id="cta-title">${esc(t("contact_big"))}</h2>
            <div><a class="big-email" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></div>
            <div class="contact-actions">
              <button class="btn" type="button" data-copy="${esc(SITE.email)}">${esc(t("copy_email"))}</button>
              <span class="muted">${esc(t("contact_lead"))}</span>
            </div>
          </fieldset>
        </div>
      </section>`;
  }

  function pageWork(query) {
    const active = query.get("c") && CATS[query.get("c")] ? query.get("c") : "all";
    const list = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
    const keys = Object.keys(CATS).filter((k) => PROJECTS.some((p) => p.category === k));
    const btn = (k, label, n) =>
      `<button type="button" data-filter="${esc(k)}" aria-pressed="${k === active}">${esc(label)} <span class="n">${num(pad(n))}</span></button>`;
    // alternate 7/5 and 5/7 column spans so rows stay asymmetric but balanced
    const items = list.map((p, i) => {
      const row = Math.floor(i / 2), first = i % 2 === 0;
      const wide = (row % 2 === 0) === first;
      return workCard(p, { cls: wide ? "w7" : `w5 ${first ? "" : "drop"}`, ratio: wide ? "ratio-43" : "ratio-45", headingTag: "h2", summary: true });
    }).join("");
    return {
      title: `${t("nav_work")} — ${L(SITE.name)}`,
      description: `${L(SITE.name)}: ${Object.keys(CATS).map((k) => catName(k)).join(", ")}.`,
      keepScroll: true,
      html: `
      <section class="wrap page-head" data-tone="espresso">
        <p class="slug">${esc(t("all_work"))} · ${esc(t("projects_count", PROJECTS.length))}</p>
        ${gTitle(t("nav_work_big"), uiOther("nav_work_big"), "h1")}
      </section>
      <div class="wrap" data-tone="copper">
        <div class="filters-wrap"><div class="filters" role="group" aria-label="${esc(t("filter_label"))}">
          ${btn("all", t("filter_all"), PROJECTS.length)}
          ${keys.map((k) => btn(k, catName(k), PROJECTS.filter((p) => p.category === k).length)).join("")}
        </div></div>
        <div class="work-grid">${items || `<p class="empty">${esc(t("gallery_empty"))}</p>`}</div>
      </div>
      <div style="height:var(--section)"></div>
      ${contactBand()}`,
    };
  }

  function pageCase(slug) {
    const p = PROJECTS.find((x) => x.slug === slug);
    if (!p) return pageNotFound();
    const i = PROJECTS.indexOf(p);
    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    const s = p.sections || {};
    const order = ["brief", "audience", "concept", "strategy", "visual", "development", "role"];
    const rows = [];
    order.filter((k) => L(s[k]).trim()).forEach((k) => {
      rows.push({ label: t(k === "brief" && p.selfInitiated ? "s_brief_self" : "s_" + k), body: `<p class="body">${esc(L(s[k]))}</p>` });
      if (k === "visual" && p.palette && p.palette.length) {
        rows.push({ label: t("palette"), body: `<div class="body chips">${p.palette.map((c) => `<span class="chip"><i style="background:${esc(c)}"></i><span class="slug" dir="ltr">${esc(c)}</span></span>`).join("")}</div>` });
      }
    });
    if (p.palette && p.palette.length && !rows.some((r) => r.label === t("palette"))) {
      rows.push({ label: t("palette"), body: `<div class="body chips">${p.palette.map((c) => `<span class="chip"><i style="background:${esc(c)}"></i><span class="slug" dir="ltr">${esc(c)}</span></span>`).join("")}</div>` });
    }
    if (p.deliverables && p.deliverables.length) {
      rows.push({ label: t("s_deliverables"), body: `<ul class="body deliv">${p.deliverables.map((d, j) => `<li><span class="slug">${num(pad(j + 1))}</span><span>${esc(L(d))}</span></li>`).join("")}</ul>` });
    }
    // Numbered because the sections follow the order of the design process.
    const rowsHtml = rows.map((r, j) => `<div class="case-row" data-reveal><p class="label slug"><span class="accent">${num(pad(j + 1))}</span> — ${esc(r.label)}</p>${r.body}</div>`).join("");

    const gallery = (p.gallery || []).map((g, j) => {
      const cap = L(g.caption);
      const inner = g.type === "video"
        ? `<video src="${esc(g.src)}" ${g.poster ? `poster="${esc(g.poster)}"` : ""} controls playsinline preload="metadata" aria-label="${esc(cap || t("play_video"))}"></video>`
        : img(g.src, cap || L(p.title));
      return `<figure class="${g.wide ? "wide" : ""}" data-reveal><div class="crop"><div class="media" style="background:none">${inner}</div></div>
        ${cap ? `<figcaption class="slug"><span class="accent">${num(pad(projectIndex(p)))}.${num(j + 1)}</span> — ${esc(cap)}</figcaption>` : ""}</figure>`;
    }).join("");

    const services = (p.services || []).map((x) => esc(L(x))).join("<br>");
    const alt = L(p.title, other());
    return {
      title: `${L(p.title)} — ${L(SITE.name)}`,
      description: L(p.summary),
      image: p.cover,
      html: `
      <article>
        <header class="wrap case-head" data-tone="espresso">
          <p class="slug"><span class="accent">${num(pad(i + 1))} / ${num(pad(PROJECTS.length))}</span> · <a href="#/work?c=${esc(p.category)}">${esc(catName(p.category))}</a></p>
          ${gTitle(L(p.title), alt !== L(p.title) ? alt : "", "h1")}
          ${p.selfInitiated ? `<p class="self-note"><span class="slug accent">${esc(t("self_initiated"))}</span> <span>${esc(t("self_initiated_note"))}</span></p>` : ""}
          <p class="lead">${esc(L(p.summary))}</p>
          <fieldset class="box"><legend>${esc(t("project_info"))}</legend>
            <dl class="meta-grid">
              <div><dt class="slug">${esc(t(p.selfInitiated ? "brand" : "client"))}</dt><dd>${esc(L(p.client))}${p.selfInitiated ? `<br><span class="muted">${esc(t("self_initiated"))}</span>` : ""}</dd></div>
              <div><dt class="slug">${esc(t("category"))}</dt><dd>${esc(catName(p.category))}</dd></div>
              <div><dt class="slug">${esc(t("services"))}</dt><dd>${services || "—"}</dd></div>
            </dl>
          </fieldset>
        </header>
        <div class="wrap case-cover" data-tone="copper"><div class="crop"><div class="media" style="background:none">${p.cover ? `<img src="${esc(p.cover)}" alt="${esc(L(p.coverAlt))}" data-fallback>` : `<div class="media is-static">${placeholder("assets/work/" + p.slug + "/cover.webp")}</div>`}</div></div></div>
        <div class="wrap case-sections" data-tone="espresso">${rowsHtml}</div>
        <div class="wrap" data-tone="olive">
          ${gallery ? `<div class="gallery">${gallery}</div>` : `<p class="empty slug">${esc(t("gallery_empty"))}</p>`}
        </div>
        <nav class="wrap case-nav" aria-label="${esc(t("nav_work"))}">
          <a href="#/work/${esc(prev.slug)}"><span class="slug">${lang === "ar" ? "→" : "←"} ${esc(t("prev_project"))}</span><span class="t">${esc(L(prev.title))}</span></a>
          <a href="#/work/${esc(next.slug)}"><span class="slug">${esc(t("next_project"))} ${lang === "ar" ? "←" : "→"}</span><span class="t">${esc(L(next.title))}</span></a>
        </nav>
        <div class="wrap" style="padding-block:24px var(--section)"><a class="text-link" href="#/work">${esc(t("back_to_work"))} ${ARROW}</a></div>
      </article>`,
    };
  }

  function pageAbout() {
    const paras = (SITE.about && (SITE.about[lang] || SITE.about.en)) || [];
    const xp = SITE.experience || [];
    const yearsExp = SITE.since ? new Date().getFullYear() - SITE.since : 0;
    const cvBtn = SITE.cv
      ? `<a class="btn btn--proof" href="${esc(SITE.cv)}" download>${esc(t("cv"))} <span class="arrow" aria-hidden="true">↓</span></a>`
      : `<span class="btn" aria-disabled="true">${esc(t("cv_missing"))}</span>`;
    return {
      title: `${t("about_title")} — ${L(SITE.name)}`,
      description: (paras[0] || "").slice(0, 160),
      html: `
      <section class="wrap page-head" data-tone="espresso">
        <p class="slug">${esc(L(SITE.role))} · ${esc(L(SITE.location))}</p>
        ${gTitle(t("about_title_big"), uiOther("about_title_big"), "h1")}
      </section>
      <div class="wrap about-grid" data-tone="copper">
        <div class="a-fig"><div class="crop"><div class="media ratio-45">${img(SITE.portrait, L(SITE.name))}</div></div>
          ${yearsExp > 0 ? `<div class="years-badge"><b class="grain">+${num(yearsExp)}</b><span>${esc(t("years_exp"))}</span></div>` : ""}</div>
        <div class="a-body">
          <fieldset class="box" data-reveal><legend>${esc(t("about_me"))}</legend>
            <div class="prose" style="display:grid;gap:1em;max-width:none">${paras.map((x, j) => `<p class="${j === 0 ? "lead" : ""}" style="max-width:none">${esc(x)}</p>`).join("")}</div></fieldset>
          ${SITE.quote ? `<blockquote class="pull" data-reveal>${esc(L(SITE.quote))}</blockquote>` : ""}
          <fieldset class="box" data-reveal><legend>${esc(t("capabilities"))}</legend>
            <ul class="cols-2">${(SITE.services || []).concat(SITE.skills || []).map((s) => `<li>${esc(L(s))}</li>`).join("")}</ul></fieldset>
          <fieldset class="box" data-reveal data-tone="olive"><legend>${esc(t("experience"))}</legend>
            <div class="xp-grid">
              ${xp.map((x) => `<div class="xp-item"><span class="yr">${esc(x.years)}</span><span class="co">${esc(L(x.company))}</span><span class="pl">${esc(L(x.place))}</span><span class="rl">${esc(L(x.role))}</span></div>`).join("")}
            </div></fieldset>
          ${SITE.education ? `<fieldset class="box" data-reveal><legend>${esc(t("education"))}</legend>
            <div class="xp-item"><span class="yr">${esc(SITE.education.years)}</span><span class="co">${esc(L(SITE.education.detail))}</span><span class="rl">${esc(L(SITE.education.title))}</span></div></fieldset>` : ""}
          ${(SITE.languages || []).length ? `<fieldset class="box" data-reveal><legend>${esc(t("languages"))}</legend>
            <div class="xp-grid">${SITE.languages.map((l) => `<div class="xp-item"><span class="co">${esc(L(l.name))}</span><span class="rl">${esc(L(l.level))}</span></div>`).join("")}</div></fieldset>` : ""}
          <fieldset class="box" data-reveal><legend>${esc(t("tools"))}</legend>
            <ul class="tools">${(SITE.tools || []).map((x) => `<li dir="ltr">${esc(L(x))}</li>`).join("")}</ul></fieldset>
          <div class="cta-row" data-reveal>${cvBtn}<a class="btn" href="#/contact">${esc(t("get_in_touch"))} ${ARROW}</a></div>
        </div>
      </div>`,
    };
  }

  function pageJournal() {
    return {
      title: `${t("journal")} — ${L(SITE.name)}`,
      description: t("journal_intro"),
      html: `
      <section class="wrap page-head" data-tone="espresso">
        <p class="slug">${esc(t("journal"))} · ${num(pad(POSTS.length))}</p>
        ${gTitle(t("journal"), uiOther("journal"), "h1")}
        <p class="lead muted">${esc(t("journal_intro"))}</p>
      </section>
      <div class="wrap" data-tone="copper" style="padding-bottom:var(--section)">
        <div class="journal-grid">${POSTS.map(postCard).join("") || `<p class="empty">—</p>`}</div>
      </div>`,
    };
  }

  function pageArticle(slug) {
    const i = POSTS.findIndex((x) => x.slug === slug);
    if (i < 0) return pageNotFound();
    const a = POSTS[i];
    const body = L(a.body);
    return {
      title: `${L(a.title)} — ${L(SITE.name)}`,
      description: L(a.excerpt),
      image: a.cover,
      html: `
      <article class="wrap" data-tone="espresso">
        <div class="article">
          <header class="article-head">
            <div class="meta-row slug"><a class="accent" href="#/journal">${esc(t("journal"))}</a><span>${esc(L(a.category))}</span><span>${fmtDate(a.date)}</span><span>${esc(t("min_read", readingTime(body)))}</span>${a.draft ? `<span class="badge">${esc(t("draft"))}</span>` : ""}</div>
            <h1>${esc(L(a.title))}</h1>
            <p class="lead muted" style="max-width:none">${esc(L(a.excerpt))}</p>
          </header>
          <div class="cover crop"><div class="media ratio-169">${a.cover ? img(a.cover, L(a.title)) : typeCover(a, i)}</div></div>
          <div class="md">${md(body)}</div>
          <div style="padding-block:56px var(--section)"><a class="text-link" href="#/journal">${esc(t("back_to_journal"))} ${ARROW}</a></div>
        </div>
      </article>`,
    };
  }

  function pageContact() {
    const socials = socialList();
    return {
      title: `${t("contact_title")} — ${L(SITE.name)}`,
      description: t("contact_intro"),
      html: `
      <section class="wrap page-head" data-tone="espresso">
        <p class="slug">${esc(L(SITE.location))} · <span dir="ltr">21.54°N 39.17°E</span></p>
        ${gTitle(t("contact_title_big"), uiOther("contact_title_big"), "h1")}
        <p class="lead muted">${esc(t("contact_intro"))}</p>
        <p class="now-line avail"><span class="dot" aria-hidden="true"></span>${esc(t("availability"))}</p>
      </section>
      <div class="wrap contact-page" data-tone="copper">
        <fieldset class="box"><legend>${esc(t("email"))}</legend>
          <div style="display:grid;gap:22px">
            <div><a class="big-email" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></div>
            <div class="contact-actions"><button class="btn" type="button" data-copy="${esc(SITE.email)}">${esc(t("copy_email"))}</button></div>
            <p class="note">${esc(t("no_form_note"))}</p>
          </div>
        </fieldset>
        ${socials.length ? `<fieldset class="box"><legend>${esc(t("elsewhere"))}</legend>
          <ul class="socials">${socials.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener"><span>${esc(s.name)} ${ARROW_UP}</span><span class="handle" dir="ltr">${esc(s.handle)}</span></a></li>`).join("")}</ul></fieldset>` : ""}
      </div>`,
    };
  }

  function pageNotFound() {
    return {
      title: `404 — ${L(SITE.name)}`,
      description: t("not_found_lead"),
      notFound: true,
      html: `
      <section class="wrap page-head" data-tone="espresso" style="padding-bottom:var(--section)">
        <p class="slug"><span class="accent">404</span></p>
        ${gTitle("404", "", "h1")}
        <p class="lead">${esc(t("not_found"))}</p>
        <p class="muted">${esc(t("not_found_lead"))}</p>
        <div class="cta-row" style="margin-top:32px"><a class="btn btn--proof" href="#/">${esc(t("go_home"))} ${ARROW}</a><a class="btn" href="#/work">${esc(t("all_work"))}</a></div>
      </section>`,
    };
  }

  /* ------------------------------------------------------ Tiny Markdown */
  function inline(s) {
    let h = esc(s);
    h = h.replace(/`([^`]+)`/g, "<code>$1</code>");
    h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    h = h.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
    h = h.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, txt, url) => {
      if (!/^(https?:|mailto:|#|assets\/)/.test(url)) return txt;
      const ext = /^https?:/.test(url);
      return `<a href="${url}"${ext ? ' target="_blank" rel="noopener"' : ""}>${txt}</a>`;
    });
    return h;
  }
  function md(src) {
    const blocks = String(src || "").replace(/\r/g, "").split(/\n\s*\n/);
    return blocks.map((b) => {
      const lines = b.split("\n").map((l) => l.trimEnd()).filter((l) => l.trim() !== "");
      if (!lines.length) return "";
      const first = lines[0].trim();
      let m;
      if ((m = first.match(/^(#{2,3})\s+(.*)$/))) return `<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`;
      if ((m = first.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/))) return `<figure><div class="crop">${img(m[2], m[1])}</div>${m[1] ? `<figcaption class="slug">${esc(m[1])}</figcaption>` : ""}</figure>`;
      if (lines.every((l) => /^\s*[-*]\s+/.test(l))) return `<ul>${lines.map((l) => `<li>${inline(l.replace(/^\s*[-*]\s+/, ""))}</li>`).join("")}</ul>`;
      if (lines.every((l) => /^\s*>/.test(l))) return `<blockquote class="pull">${inline(lines.map((l) => l.replace(/^\s*>\s?/, "")).join(" "))}</blockquote>`;
      return `<p>${inline(lines.join(" "))}</p>`;
    }).join("\n");
  }

  /* -------------------------------------------------------------- Router */
  function parseHash() {
    let h = decodeURIComponent(location.hash.replace(/^#/, "")) || "/";
    if (!h.startsWith("/")) h = "/" + h; // plain #anchors still land on a page
    const [path, qs] = h.split("?");
    return { path: path.replace(/\/+$/, "") || "/", query: new URLSearchParams(qs || "") };
  }
  function resolve(path, query) {
    let m;
    if (path === "/") return pageHome();
    if (path === "/work") return pageWork(query);
    if ((m = path.match(/^\/work\/([\w-]+)$/))) return pageCase(m[1]);
    if (path === "/about") return pageAbout();
    if (path === "/journal") return pageJournal();
    if ((m = path.match(/^\/journal\/([\w-]+)$/))) return pageArticle(m[1]);
    if (path === "/contact") return pageContact();
    return pageNotFound();
  }

  let lastPath = null;
  let firstRender = true;
  function render(opts = {}) {
    const { path, query } = parseHash();
    const page = resolve(path, query);
    const samePage = lastPath === path;
    closeMenu(false);
    renderHeader(path);
    renderFooter();

    const swap = () => {
      $main.innerHTML = page.html;
      setMeta(page);
      wireReveal();
      wireTones();
      wireVideos();
      if (!(samePage && page.keepScroll) && !opts.keepScroll) {
        window.scrollTo({ top: 0, behavior: "auto" });
        if (!firstRender) { const h1 = $main.querySelector("h1"); ($main).focus({ preventScroll: true }); if (h1) h1.setAttribute("tabindex", "-1"); }
      }
      if (!reduceMotion && !firstRender && !samePage) {
        $main.classList.remove("is-leaving");
        $main.classList.add("is-entering");
        setTimeout(() => $main.classList.remove("is-entering"), 520);
      }
      firstRender = false;
      lastPath = path;
    };
    if (!reduceMotion && !firstRender && !samePage && !opts.keepScroll) {
      $main.classList.add("is-leaving");
      setTimeout(swap, 170);
    } else swap();
  }

  function setMeta(page) {
    document.title = page.title;
    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el && val) el.setAttribute(attr, val); };
    set('meta[name="description"]', "content", page.description);
    set('meta[property="og:title"]', "content", page.title);
    set('meta[property="og:description"]', "content", page.description);
  }

  /* ------------------------------------------------------------ Motion */
  let io = null;
  function wireReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    if (io) io.disconnect();
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          e.target.classList.remove("is-pre");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    const vh = window.innerHeight;
    $main.querySelectorAll("[data-reveal]").forEach((el) => {
      // Only elements below the first screen start hidden, so the page is complete at rest.
      if (el.getBoundingClientRect().top > vh * 0.92) {
        el.classList.add("is-pre");
        io.observe(el);
      }
    });
  }

  /* ------------------------------------------- Animated letter background */
  // Giant Arabic letters from the name drift behind the page and move at
  // different speeds as you scroll. The page colour shifts per section.
  const TONES = { espresso: "#100D0B", copper: "#1C110C", olive: "#11130F" };
  const GLYPHS = [
    { c: "أ", x: -6, y: 4, size: 118, speed: 0.22, rot: -6, dur: 46 },
    { c: "س", x: 44, y: 46, size: 86, speed: 0.42, rot: 5, dur: 38, copper: true },
    { c: "م", x: 72, y: -14, size: 78, speed: 0.14, rot: 0, dur: 52 },
    { c: "ع", x: 6, y: 128, size: 104, speed: 0.56, rot: -3, dur: 41 },
    { c: "ث", x: 58, y: 178, size: 96, speed: 0.48, rot: 7, dur: 44 },
    { c: "ن", x: -2, y: 236, size: 112, speed: 0.66, rot: -8, dur: 50, copper: true },
  ];
  const LOOP = 300; // vh: letters recycle through this band, so the drift never runs out
  let stageEls = [];
  function buildStage() {
    const stage = document.createElement("div");
    stage.className = "bg-stage";
    stage.setAttribute("aria-hidden", "true");
    stage.innerHTML = GLYPHS.map((g) =>
      `<div class="bg-glyph${g.copper ? " is-copper" : ""}" style="left:${g.x}vw;top:0;font-size:${g.size}vh;--rot:${g.rot}deg;--dur:${g.dur}s"><span>${g.c}</span></div>`).join("");
    document.body.prepend(stage);
    stageEls = [...stage.children];
    placeGlyphs();
  }
  function placeGlyphs() {
    const vh = window.innerHeight / 100;
    const s = reduceMotion ? 0 : window.scrollY;
    stageEls.forEach((el, i) => {
      const g = GLYPHS[i];
      const yvh = (((g.y - (s * g.speed) / vh) % LOOP) + LOOP) % LOOP - 100; // -100vh … 200vh
      const xvw = reduceMotion ? 0 : Math.sin((s / vh / 100) * g.speed * 2 + i) * 4;
      el.style.transform = `translate3d(${xvw}vw, ${yvh}vh, 0)`;
    });
  }
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (reduceMotion || ticking) return;
    ticking = true;
    requestAnimationFrame(() => { placeGlyphs(); ticking = false; });
  }, { passive: true });
  window.addEventListener("resize", placeGlyphs);

  let vidIO = null;
  function wireVideos() {
    if (vidIO) vidIO.disconnect();
    const vids = $main.querySelectorAll("video[data-autoplay]");
    if (reduceMotion || !vids.length || !("IntersectionObserver" in window)) return;
    vidIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause();
      });
    }, { threshold: 0.4 });
    vids.forEach((v) => vidIO.observe(v));
  }

  let toneIO = null;
  function wireTones() {
    if (toneIO) toneIO.disconnect();
    const setTone = (name) => document.body.style.setProperty("--bg", TONES[name] || TONES.espresso);
    setTone("espresso");
    if (!("IntersectionObserver" in window)) return;
    toneIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setTone(e.target.getAttribute("data-tone")); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    $main.querySelectorAll("[data-tone]").forEach((el) => toneIO.observe(el));
  }

  /* ------------------------------------------------------------ Events */
  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest("[data-lang-toggle]");
    if (langBtn) {
      lang = other();
      store.set("ao-lang", lang);
      applyLang();
      render({ keepScroll: true });
      const again = document.querySelector("[data-lang-toggle]");
      if (again) again.focus();
      return;
    }
    if (e.target.closest("[data-menu-open]")) { openMenu(); return; }
    if (e.target.closest("[data-menu-close]")) { closeMenu(); return; }
    const f = e.target.closest("[data-filter]");
    if (f) {
      const k = f.getAttribute("data-filter");
      const target = k === "all" ? "#/work" : `#/work?c=${k}`;
      if (location.hash !== target) location.hash = target;
      return;
    }
    const c = e.target.closest("[data-copy]");
    if (c) {
      const text = c.getAttribute("data-copy");
      const done = (ok) => {
        const old = c.textContent;
        c.textContent = ok ? t("copied") : t("copy_failed");
        setTimeout(() => (c.textContent = old), 1800);
        if (!ok) { const a = $main.querySelector(".big-email"); if (a) { const r = document.createRange(); r.selectNodeContents(a); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => done(true), () => done(false));
      else done(false);
      return;
    }
    const a = e.target.closest('a[href^="#/"]');
    if (a && !$menu.hidden) closeMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$menu.hidden) closeMenu();
  });
  // Missing images become a labelled placeholder instead of a broken icon.
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (!(el instanceof HTMLImageElement) || !el.hasAttribute("data-fallback")) return;
    const box = el.closest(".media") || el.parentElement;
    const path = el.getAttribute("src");
    const holder = document.createElement("div");
    holder.className = "media is-static";
    holder.innerHTML = placeholder(path);
    if (box && box.classList.contains("media") && /ratio-/.test(box.className)) box.innerHTML = placeholder(path);
    else el.replaceWith(holder);
  }, true);
  window.addEventListener("hashchange", () => {
    const { path } = parseHash();
    render({ keepScroll: path === lastPath && path === "/work" });
  });
  window.addEventListener("scroll", () => { $header.classList.toggle("is-scrolled", window.scrollY > 8); }, { passive: true });

  applyLang();
  buildStage();
  render();
})();
