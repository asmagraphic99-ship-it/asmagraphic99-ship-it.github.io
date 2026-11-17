/* Scroll-driven motion layer (inspired by 3D "portfolio sneak peek" reels).
   It only animates what app.js already renders: no content, text or order is
   changed. Remove this file and motion.css to go back to the plain site. */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const main = document.getElementById("main");
  if (!main) return;
  document.documentElement.classList.add("mx-on");

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const isRTL = () => document.documentElement.dir === "rtl";

  // Which elements get which effect. Selectors match the markup app.js renders.
  const GROUPS = [
    { sel: ".g-title .g-main", fx: "title" },
    { sel: ".g-title .g-alt", fx: "fade" },
    { sel: ".lead, .pull, .case-intro", fx: "blur" },
    { sel: ".svc", fx: "card" },
    { sel: ".pf-card, .work-item, .motion-tile, .post-card, .case-gallery figure, .gallery figure", fx: "fly" },
    { sel: ".ai-tools li", fx: "scatter" },
    { sel: ".stat", fx: "pop" },
    { sel: ".xp-row", fx: "slide" },
    { sel: ".s-fig", fx: "fly" },
    { sel: ".contact-band h2, .big-email", fx: "blur" },
  ];

  let items = [];
  let hero = null;
  let marquee = null;

  function docTop(el) {
    let y = 0;
    for (let n = el; n; n = n.offsetParent) y += n.offsetTop;
    return y;
  }
  function docLeft(el) {
    let x = 0;
    for (let n = el; n; n = n.offsetParent) x += n.offsetLeft;
    return x;
  }

  function collect() {
    items.forEach((it) => { it.el.style.transform = it.el.style.opacity = it.el.style.filter = ""; });
    items = [];
    const seen = new Set();
    GROUPS.forEach((g) => {
      main.querySelectorAll(g.sel).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        el.classList.add("mx", "mx-" + g.fx);
        const sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        items.push({ el, fx: g.fx, i: sib, seed: Math.sin((sib + 1) * 12.9898) });
      });
    });
    const h = main.querySelector(".hero");
    hero = h ? {
      el: h,
      photo: h.querySelector(".hero-photo"),
      l1: h.querySelector(".hero-title .l1"),
      l2: h.querySelector(".hero-title .l2"),
      copy: h.querySelector(".hero-copy"),
    } : null;
    marquee = main.querySelector(".marquee-track");
    measure();
  }

  let vw = innerWidth, vh = innerHeight;
  function measure() {
    vw = innerWidth; vh = innerHeight;
    items.forEach((it) => {
      it.top = docTop(it.el);
      it.h = it.el.offsetHeight;
      const cx = docLeft(it.el) + it.el.offsetWidth / 2;
      it.side = clamp((cx - vw / 2) / (vw / 2), -1, 1); // -1 left … 1 right
    });
  }

  // Smoothed scroll for a soft, cinematic feel.
  let sy = scrollY, lastSy = scrollY, vel = 0;

  function frame() {
    const target = scrollY;
    sy += (target - sy) * 0.14;
    if (Math.abs(target - sy) < 0.3) sy = target;
    vel += ((sy - lastSy) - vel) * 0.15;
    lastSy = sy;

    const k = vw < 700 ? 0.6 : 1; // calmer on phones

    for (let n = 0; n < items.length; n++) {
      const it = items[n];
      const top = it.top - sy;               // element top in the viewport
      if (top > vh * 1.3 || top + it.h < -vh * 0.6) continue;
      const p = ease(clamp((vh - top) / (vh * 0.7), 0, 1)); // 0 below → 1 settled
      const r = 1 - p;
      const el = it.el.style;
      switch (it.fx) {
        case "title": {
          const x = r * (isRTL() ? -6 : 6) * k;
          el.transform = `translate3d(${x}vw, ${r * 40}px, 0) scale(${1 + r * 0.12})`;
          el.filter = r > 0.01 ? `blur(${r * 14}px)` : "";
          el.opacity = 0.15 + p * 0.85;
          break;
        }
        case "fade":
          el.opacity = p; el.transform = `translateY(${r * 16}px)`; break;
        case "blur":
          el.transform = `translateY(${r * 36}px)`;
          el.filter = r > 0.01 ? `blur(${r * 10}px)` : "";
          el.opacity = p; break;
        case "card": {
          // Cards drop in tilted and fanned, then lie flat — like the service cards in the reel.
          const d = clamp(p * 1.25 - it.i * 0.08, 0, 1), q = 1 - ease(d);
          const rz = (it.i % 2 ? 1 : -1) * 10 * q * k;
          el.transform = `perspective(900px) translate3d(0, ${q * 120}px, ${-q * 260}px) rotateX(${q * 55 * k}deg) rotateZ(${rz}deg)`;
          el.opacity = clamp(d * 1.6, 0, 1); break;
        }
        case "fly": {
          // Work floats up out of depth from its side of the screen, then drifts toward you as it leaves.
          const exit = clamp(-top / (vh * 0.9), 0, 1);
          const s = it.side || (it.i % 2 ? 0.6 : -0.6);
          const tx = s * r * 14 * k, ry = -s * r * 28 * k, rx = r * 22 * k;
          const tz = -r * 380 * k + exit * 120 * k;
          el.transform = `perspective(1100px) translate3d(${tx}vw, ${r * 90 - exit * 40}px, ${tz}px) rotateX(${rx - exit * 8 * k}deg) rotateY(${ry}deg)`;
          el.opacity = clamp(p * 1.4, 0, 1) * (1 - exit * 0.5);
          el.filter = r > 0.05 ? `blur(${r * 6}px)` : "";
          break;
        }
        case "scatter": {
          // Tool chips tumble in like the floating app icons.
          const a = it.seed;
          el.transform = `perspective(700px) translate3d(${a * 60 * r * k}px, ${r * 70}px, ${-r * 200}px) rotate(${a * 40 * r}deg) rotateY(${a * 50 * r}deg)`;
          el.opacity = p; break;
        }
        case "pop":
          el.transform = `perspective(800px) translateZ(${-r * 300}px) rotateX(${r * 40}deg)`;
          el.opacity = p; el.filter = r > 0.01 ? `blur(${r * 8}px)` : ""; break;
        case "slide":
          el.transform = `translateX(${(isRTL() ? -1 : 1) * r * 8}vw)`;
          el.opacity = p; break;
      }
    }

    // Hero: the photo pushes toward you and the name splits apart as you scroll away.
    if (hero && sy < vh * 1.5) {
      const q = clamp(sy / (hero.el.offsetHeight || vh), 0, 1);
      const dir = isRTL() ? -1 : 1;
      if (hero.photo) {
        hero.photo.style.transform = `translate3d(0, ${q * 60}px, 0) scale(${1 + q * 0.22})`;
        hero.photo.style.opacity = 1 - q * 0.7;
      }
      if (hero.l1) hero.l1.style.transform = `translate3d(${-dir * q * 12}vw, 0, 0)`;
      if (hero.l2) hero.l2.style.transform = `translate3d(${dir * q * 12}vw, 0, 0)`;
      if (hero.copy) { const b = clamp((q - 0.55) / 0.45, 0, 1); hero.copy.style.filter = b > 0.01 ? `blur(${b * 6}px)` : ""; }
    }

    // Brand names lean into the scroll speed.
    if (marquee) marquee.style.setProperty("--mx-skew", clamp(-vel * 0.25, -12, 12).toFixed(2) + "deg");

    requestAnimationFrame(frame);
  }

  let tCollect = null, tMeasure = null;
  const reMeasure = () => { clearTimeout(tMeasure); tMeasure = setTimeout(measure, 120); };
  new MutationObserver(() => { clearTimeout(tCollect); tCollect = setTimeout(collect, 60); }).observe(main, { childList: true });
  addEventListener("resize", reMeasure);
  addEventListener("load", measure);
  if ("ResizeObserver" in window) new ResizeObserver(reMeasure).observe(main);

  collect();
  requestAnimationFrame(frame);
})();
