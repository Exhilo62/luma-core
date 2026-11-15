/* Shared helpers for every page. */
(function () {
  const L = window.LUMA;

  /* ---------- theme ---------- */
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("luma-theme"); } catch (e) {}
  if (saved) root.dataset.theme = saved;

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : !window.matchMedia("(prefers-color-scheme: light)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("luma-theme", root.dataset.theme); } catch (e) {}
  });

  /* ---------- before / after slider ---------- */
  document.addEventListener("input", (e) => {
    if (e.target.matches(".compare input")) {
      e.target.parentElement.style.setProperty("--pos", e.target.value + "%");
    }
  });

  /* ---------- placeholder art ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function placeholder(p, w, h, label) {
    const [a, b] = p.colors;
    const big = Math.round(Math.min(w, h) / 7);
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>` +
      `<pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#fff" stroke-opacity=".08"/></pattern></defs>` +
      `<rect width="${w}" height="${h}" fill="url(#g)"/><rect width="${w}" height="${h}" fill="url(#p)"/>` +
      `<circle cx="${w * 0.82}" cy="${h * 0.2}" r="${h * 0.42}" fill="#fff" fill-opacity=".1"/>` +
      `<circle cx="${w * 0.12}" cy="${h * 0.95}" r="${h * 0.5}" fill="#000" fill-opacity=".16"/>` +
      `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="700" font-size="${big}" fill="#fff">${esc(p.title)}</text>` +
      (label
        ? `<text x="50%" y="${h * 0.5 + big}" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="${Math.round(big * 0.42)}" fill="#fff" fill-opacity=".75">${esc(label)}</text>`
        : "") +
      `</svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  function initials(title) {
    return title.replace(/^The /, "").split(/[\s:]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }

  function icon(p) {
    if (p.images.icon) return p.images.icon;
    const [a, b] = p.colors;
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>` +
      `<rect width="96" height="96" fill="url(#g)"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="700" font-size="36" fill="#fff">${esc(initials(p.title))}</text></svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  const shot = (p) => p.images.after || placeholder(p, 800, 480, "Screenshot coming soon");

  /* Before/after slider for texture packs, plain screenshot for everything else. */
  function visual(p) {
    /* Slider needs a matching original shot; placeholders get a demo slider. */
    const demo = p.category === "texture" && !p.images.after;
    if (!p.images.before && !demo) {
      return `<img class="shot" src="${shot(p)}" alt="${esc(p.title)} screenshot">`;
    }
    const after = shot(p);
    const before = p.images.before || after;
    const fake = p.images.before ? "" : " lo";
    const labels = p.images.labels || ["Original", "4K"];
    return (
      `<div class="compare" style="--pos:50%">` +
      `<img class="after" src="${after}" alt="${esc(p.title)}: ${esc(labels[1])}">` +
      `<img class="before${fake}" src="${before}" alt="${esc(p.title)}: ${esc(labels[0])}">` +
      `<span class="tag l">${esc(labels[0])}</span><span class="tag r">${esc(labels[1])}</span>` +
      `<span class="handle" aria-hidden="true"></span>` +
      `<input type="range" min="0" max="100" value="50" aria-label="Compare ${esc(labels[0])} and ${esc(labels[1])}">` +
      `</div>`
    );
  }

  const STATUS = { released: "Released", beta: "Beta", complete: "Complete", dev: "In development", planned: "Planned" };
  function statusText(p) {
    return STATUS[p.status] + (p.version ? " · " + p.version : "");
  }
  /* Same as statusText, but the version sits in a span that a live GitHub release can update. */
  function statusHTML(p) {
    return STATUS[p.status] + (p.version ? ` · <span data-ver="${p.id}">${esc(p.version)}</span>` : "");
  }
  function chip(p) {
    return `<span class="chip ${p.status}">${statusHTML(p)}</span>`;
  }

  /* Large artwork block. images.art is the background (falls back to the main
     shot), images.logo an optional title logo for the top-right corner. */
  function card(p, i) {
    const art = p.images.art || shot(p);
    const pos = p.images.artPos || "center";
    const feature = p.images.feature ? `<img class="block-feature${p.images.featureWide ? " wide" : ""}" src="${p.images.feature}" alt="">` : "";
    const corner = feature ? "" : p.images.logo
      ? `<img class="block-logo" src="${p.images.logo}" alt="">`
      : p.images.icon ? `<img class="block-logo icon" src="${p.images.icon}" alt="">` : "";
    return (
      `<a class="block" href="project.html?id=${p.id}" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">` +
      `<img class="block-bg${p.images.artBlur ? " blur" : ""}" src="${art}" alt="" loading="lazy" style="object-position:${pos}${p.images.artFilter ? ";filter:" + p.images.artFilter : ""}">` + feature +
      `<div class="block-top">${chip(p)}${corner}</div>` +
      `<div class="block-body"><p class="eyebrow">${esc(p.platform)}</p>` +
      `<h3>${esc(p.title)}</h3>` +
      `<p class="tagline">${p.tagline.map((t) => `<span>${esc(t)}</span>`).join("")}</p>` +
      (p.stats ? `<p class="block-stats">${p.stats.slice(0, 2).map(([k, v]) => `<span><b>${esc(v)}</b> ${esc(k.toLowerCase())}</span>`).join("")}</p>` : "") +
      `<span class="btn">Explore project <span aria-hidden="true">→</span></span></div>` +
      `<span class="block-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span></a>`
    );
  }

  /* Footer brand row and links, the same on every page. */
  const foot = document.querySelector("footer .wrap");
  if (foot) {
    foot.insertAdjacentHTML("afterbegin",
      `<div class="foot-top"><a class="brand" href="index.html"><picture><source srcset="img/logo-icon.png" media="(prefers-reduced-motion: reduce)"><img src="img/logo-anim.gif" alt="" width="38" height="38" loading="lazy"></picture><img class="wordmark" src="img/wordmark.png" alt="Luma Core"></a>` +
      `<nav aria-label="Footer"><a href="index.html#packs">Texture packs</a><a href="index.html#ds">DS games</a><a href="index.html#companions">Companions</a>` +
      `<a href="index.html#apps">Apps</a><a href="index.html#progress">Progress</a><a href="index.html#next">What's next</a><a href="guide.html">Guide</a><a href="install.html">Manual install</a><a href="index.html#about">About</a><a href="credits.html">Credits</a></nav></div>`);
  }

  /* Fade sections in as they scroll into view. Skipped when motion is reduced. */
  document.addEventListener("DOMContentLoaded", () => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = document.querySelectorAll(".section-head, a.block, .feature, .credit, .shots figure, .comp, .topic, .fact, .p-sections section, .gallery a, .p-visual");
    if (!items.length) return;
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => { el.classList.add("rv"); io.observe(el); });
    /* Safety net: never leave anything hidden. */
    setTimeout(() => items.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight) el.classList.add("in"); }), 600);
  });

  /* Click a screenshot to see it large, instead of leaving the page. */
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".gallery a, .guide figure a, .shots a");
    if (!link) return;
    e.preventDefault();
    const img = link.querySelector("img");
    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Screenshot");
    box.innerHTML = `<img src="${link.getAttribute("href")}" alt="${img ? esc(img.alt) : ""}"><button type="button" aria-label="Close">×</button>`;
    const close = () => { box.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = (ev) => { if (ev.key === "Escape") close(); };
    box.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    document.body.appendChild(box);
    box.querySelector("button").focus();
  });

  /* Cards light up under the pointer. */
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest && e.target.closest(".feature, .comp, .topic, .prow, .fact, .credit, .p-sections section, .side");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  }, { passive: true });

  /* The top bar shows which section you are in. */
  document.addEventListener("DOMContentLoaded", () => {
    const links = [...document.querySelectorAll('.nav nav a[href^="#"]')];
    if (!links.length || !("IntersectionObserver" in window)) return;
    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        const a = byId.get(en.target.id);
        if (a) a.setAttribute("aria-current", "page");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((sec) => spy.observe(sec));
  });

  /* Numbers count up the first time they scroll into view. */
  document.addEventListener("DOMContentLoaded", () => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        const el = en.target, full = el.textContent, m = full.match(/^([\d,]+)(.*)$/);
        if (!m) return;
        const target = +m[1].replace(/,/g, ""), commas = m[1].includes(","), t0 = performance.now();
        if (target < 20 || m[2].startsWith(".")) return;
        const tick = (t) => {
          const k = Math.min(1, (t - t0) / 900), v = Math.round(target * (1 - Math.pow(1 - k, 3)));
          el.textContent = (commas ? v.toLocaleString("en-US") : v) + m[2];
          if (k < 1) requestAnimationFrame(tick); else el.textContent = full;
        };
        requestAnimationFrame(tick);
      });
    });
    document.querySelectorAll(".pills b, .fact b, .stat-tiles b").forEach((el) => io.observe(el));
  });

  /* Keyboard users can jump past the top bar. */
  const mainEl = document.querySelector("main");
  if (mainEl) {
    if (!mainEl.id) mainEl.id = "main";
    document.body.insertAdjacentHTML("afterbegin", `<a class="skip" href="#${mainEl.id}">Skip to content</a>`);
  }

  /* A thin bar across the top shows how far down the page you are, and a button takes you back up. */
  document.body.insertAdjacentHTML("beforeend",
    `<div class="scroll-bar" aria-hidden="true"></div><button class="to-top" type="button" aria-label="Back to top">↑</button>`);
  const bar = document.querySelector(".scroll-bar"), toTop = document.querySelector(".to-top");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    toTop.classList.toggle("show", scrollY > 700);
    document.body.style.setProperty("--sy", scrollY); /* the star field drifts as you scroll */
    document.querySelector(".nav").classList.toggle("scrolled", scrollY > 30);
    /* back at the very top, no section is "current" */
    if (scrollY < 200) document.querySelectorAll('.nav nav a[href^="#"][aria-current]').forEach((a) => a.removeAttribute("aria-current"));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  /* Artwork cards lean toward the pointer. */
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    document.querySelectorAll("a.block, .pg, .feature").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty("--ty", (x * 7).toFixed(2) + "deg");
        card.style.setProperty("--tx", (-y * 6).toFixed(2) + "deg");
      });
      card.addEventListener("pointerleave", () => { card.style.removeProperty("--tx"); card.style.removeProperty("--ty"); });
    });
  });

  /* Projects that name a GitHub repo show whatever its latest release is.
     The answer is remembered for an hour so visitors don't ask GitHub on every page. */
  function latestRelease(repo) {
    const key = "luma-release:" + repo;
    try {
      const hit = JSON.parse(sessionStorage.getItem(key) || "null");
      if (hit && Date.now() - hit.at < 3600000) return Promise.resolve(hit.r);
    } catch (e) {}
    return fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } })
      .then((res) => { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then((d) => {
        const r = { tag: d.tag_name, url: d.html_url, date: d.published_at,
          assets: (d.assets || []).map((a) => ({ name: a.name, url: a.browser_download_url, size: a.size })) };
        try { sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), r })); } catch (e) {}
        return r;
      });
  }
  document.addEventListener("DOMContentLoaded", () => {
    L.projects.filter((p) => p.github).forEach((p) => {
      latestRelease(p.github).then((r) => {
        if (!r.tag) return;
        document.querySelectorAll(`[data-ver="${p.id}"]`).forEach((el) => (el.textContent = r.tag));
        document.dispatchEvent(new CustomEvent("luma-release", { detail: { id: p.id, release: r } }));
      }).catch(() => {}); /* offline or rate-limited: the version written in data.js stays */
    });
  });

  /* A shooting star now and then. */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.insertAdjacentHTML("beforeend", `<div class="shooting" aria-hidden="true"></div>`);
  }

  /* Fill in the bits every page shares. */
  document.querySelectorAll("[data-site-name]").forEach((el) => (el.textContent = L.site.name));
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* Progress bar, or nothing when a project has no percentage. */
  function meter(p) {
    if (p.progress == null) return "";
    return `<div class="meter" role="progressbar" aria-label="${esc(p.title)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p.progress}"><span style="width:${p.progress}%"></span></div>`;
  }

  window.LumaUI = { meter, statusHTML, esc, placeholder, icon, shot, visual, chip, statusText, card };
})();
