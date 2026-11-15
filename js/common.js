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

  /* Games Luma Core made something for wear a gold Forged tag, as they do in the app. */
  function forged(p) {
    return p.category === "texture" || p.category === "ds" ? `<span class="forged-tag">Forged</span>` : "";
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
      `<div class="block-top"><span class="block-tags">${chip(p)}${forged(p)}</span>${corner}</div>` +
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
      `<nav aria-label="Footer"><a href="index.html#packs">3DS packs</a><a href="index.html#ds">DS games</a><a href="index.html#companions">Companions</a>` +
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

  /* Search across the site: press / or Ctrl+K, or use the button in the top bar. */
  (function () {
    const bar = document.querySelector(".nav .wrap"), toggle = document.querySelector("[data-theme-toggle]");
    if (!bar || !toggle) return;
    toggle.insertAdjacentHTML("beforebegin", `<button class="icon-btn" type="button" data-search aria-label="Search the site" title="Search ( / )">⌕</button>`);
    const kinds = { texture: "Texture pack", ds: "DS game", app: "Luma Core" };
    const plain = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const index = [
      ...L.projects.map((p) => ({ t: p.title, s: kinds[p.category] + " · " + p.platform, u: "project.html?id=" + p.id, i: p.images.icon, k: (p.title + " " + p.platform + " " + p.description).toLowerCase() })),
      ...(L.site.guideTopics || []).map(([t, s, a]) => ({ t, s: "Guide · " + s, u: "guide.html#" + a, k: (t + " " + s + " guide").toLowerCase() })),
      ...(L.site.companions || []).map(([t, sys]) => ({ t, s: "Companion · " + sys, u: "index.html#companions", k: (t + " companion").toLowerCase() })),
      { t: "User guide", s: "Page", u: "guide.html", k: "user guide manual help how" },
      { t: "Manual install", s: "Page", u: "install.html", k: "manual install download texture pack azahar" },
      { t: "What's next", s: "Home page", u: "index.html#next", k: "whats next planned roadmap beta" },
      { t: "Project progress", s: "Home page", u: "index.html#progress", k: "progress status complete" },
      { t: "Credits", s: "Page", u: "credits.html", k: "credits thanks licence" }
    ];
    let box = null, list = null, input = null, at = 0, hits = [];
    const draw = () => {
      list.innerHTML = hits.length
        ? hits.map((h, n) => `<a href="${h.u}" class="${n === at ? "on" : ""}">${h.i ? `<img src="${h.i}" alt="">` : `<span class="dot" aria-hidden="true">✦</span>`}<span><b>${esc(h.t)}</b><small>${esc(h.s)}</small></span></a>`).join("")
        : `<p class="none">Nothing found. Try another word.</p>`;
      const on = list.querySelector(".on");
      if (on) on.scrollIntoView({ block: "nearest" });
    };
    const find = () => {
      const words = plain(input.value).split(/\s+/).filter(Boolean);
      /* a match in the name counts for more than a match in the description */
      const score = (x) => { const t = plain(x.t); return words.reduce((n, w) => n + (t.startsWith(w) ? 3 : t.includes(w) ? 2 : 0), 0); };
      hits = (words.length
        ? index.filter((x) => words.every((w) => plain(x.k).includes(w))).map((x, n) => [score(x), n, x]).sort((m, o) => o[0] - m[0] || m[1] - o[1]).map((m) => m[2])
        : index.slice(0, 8)).slice(0, 12);
      at = 0;
      draw();
    };
    const close = () => { if (box) { box.remove(); box = null; } };
    const open = () => {
      if (box) return;
      box = document.createElement("div");
      box.className = "search";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-label", "Search the site");
      box.innerHTML = `<div class="search-panel"><input type="search" placeholder="Search packs, apps, companions and the guide" aria-label="Search" autocomplete="off"><div class="search-list"></div><p class="search-tip">↑ ↓ to move · Enter to open · Esc to close</p></div>`;
      document.body.appendChild(box);
      input = box.querySelector("input"); list = box.querySelector(".search-list");
      input.addEventListener("input", find);
      box.addEventListener("click", (e) => { if (e.target === box) close(); });
      find();
      input.focus();
    };
    document.addEventListener("click", (e) => { if (e.target.closest("[data-search]")) open(); });
    document.addEventListener("keydown", (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
      if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); open(); return; }
      if (!box) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowDown") { e.preventDefault(); at = Math.min(hits.length - 1, at + 1); draw(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); at = Math.max(0, at - 1); draw(); }
      else if (e.key === "Enter" && hits[at]) { location.href = hits[at].u; close(); }
    });
  })();

  /* A small secret: the classic code (up up down down left right left right B A) sets off a shower of stars. */
  (function () {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let at = 0;
    document.addEventListener("keydown", (e) => {
      if (e.target.closest && e.target.closest("input, textarea, select")) return;
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      at = k === code[at] ? at + 1 : k === code[0] ? 1 : 0;
      if (at < code.length) return;
      at = 0;
      const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const colors = ["#ffd766", "#ffab2e", "#6ee7ff", "#b58cff", "#ff8fb1", "#ffffff"];
      const box = document.createElement("div");
      box.className = "star-shower";
      box.setAttribute("aria-hidden", "true");
      if (!calm) for (let i = 0; i < 70; i++) {
        box.insertAdjacentHTML("beforeend", `<i style="left:${Math.random() * 100}%;color:${colors[i % colors.length]};font-size:${14 + Math.random() * 26}px;animation-delay:${Math.random() * 1.4}s;animation-duration:${2.2 + Math.random() * 1.8}s;--sway:${(Math.random() - 0.5) * 240}px">✦</i>`);
      }
      const note = document.createElement("div");
      note.className = "secret-note";
      note.setAttribute("role", "status");
      note.textContent = "✦ Secret found: a wish on every star ✦";
      document.body.append(box, note);
      setTimeout(() => { box.remove(); note.remove(); }, 5600);
    });
  })();

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

  window.LumaUI = { meter, statusHTML, forged, esc, placeholder, icon, shot, visual, chip, statusText, card };
})();
