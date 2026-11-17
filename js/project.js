/* Project detail page: project.html?id=<id> */
(function () {
  const { site, projects } = window.LUMA;
  const UI = window.LumaUI;
  const page = document.getElementById("page");
  const id = new URLSearchParams(location.search).get("id");
  const index = projects.findIndex((p) => p.id === id);

  if (index < 0) {
    document.title = "Not found · " + site.name;
    page.innerHTML =
      `<section class="block"><div class="wrap"><div class="section-head"><h1>Project not found</h1>` +
      `<p class="muted">That project doesn't exist, or its link has changed.</p></div>` +
      `<a class="btn primary" href="index.html">Back to all projects</a></div></section>`;
    return;
  }

  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const isPack = p.category === "texture";
  const isDs = p.category === "ds";
  /* Up to three others of the same kind, starting with the one after this. */
  const sameKind = projects.filter((q) => q.category === p.category);
  const at = sameKind.indexOf(p);
  const prevP = sameKind[(at - 1 + sameKind.length) % sameKind.length], nextP = sameKind[(at + 1) % sameKind.length];
  /* Left and right arrow keys flip to the previous or next project of the same kind. */
  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || sameKind.length < 2) return;
    if (e.target.closest("input, textarea, select, button, [contenteditable], dialog, .lightbox, .search")) return;
    if (document.querySelector(".lightbox, .search, dialog[open]")) return;
    if (e.key === "ArrowLeft") location.href = "project.html?id=" + prevP.id;
    if (e.key === "ArrowRight") location.href = "project.html?id=" + nextP.id;
  });
  const related = [1, 2, 3].map((n) => sameKind[(at + n) % sameKind.length]).filter((q, i, arr) => q !== p && arr.indexOf(q) === i);
  document.title = p.title + " · " + site.name;

  /* Download buttons. A pack downloads from Luma Core's storage; other projects use their own link. */
  const packUrl = (file) => `${site.packHost}/${file}`;
  const checksum = (k) => `<details class="sum"><summary>Checksum (SHA-256)</summary><code>${k.sha256}</code></details>`;
  let download;
  const open = site.downloadsOpen || (p.pack && p.pack.open);
  const closedNote = `<p class="soon-note">${UI.esc(site.downloadsNote)}</p>`;
  if (p.links.download) {
    download = `<a class="btn primary" href="${p.links.download}">Download${p.status === "beta" ? " beta" : ""}${p.version ? ` <span data-ver="${p.id}">${UI.esc(p.version)}</span>` : ""}</a>`;
    if (p.pack && open) {
      download += `<a class="btn" href="${packUrl(p.pack.file)}">HD texture pack · ${p.pack.size}</a>` +
        (p.pack.addon ? `<a class="btn small" href="${packUrl(p.pack.addon.file)}">Title screen add-on · ${p.pack.addon.size}</a>` : "") +
        checksum(p.pack) + `<a class="btn small" href="install.html#dqxi">How to install the pack →</a>`;
    } else if (p.pack) {
      download += `<span class="btn" aria-disabled="true">HD texture pack · coming soon</span>` + closedNote;
    }
  } else if (p.pack && open) {
    download = `<a class="btn primary" href="${packUrl(p.pack.file)}">Download pack · ${p.pack.size}</a>` + checksum(p.pack) +
      `<a class="btn small" href="install.html#${isDs ? "ds" : "azahar-pc"}">Manual install guide →</a>`;
  } else if (p.pack) {
    download = `<span class="btn" aria-disabled="true">Download coming soon</span>` + closedNote +
      `<a class="btn small" href="install.html#${isDs ? "ds" : "azahar-pc"}">Manual install guide →</a>`;
  } else {
    download = `<span class="btn" aria-disabled="true">Download coming soon</span>`;
  }
  const source = (p.links.source ? `<a class="btn" href="${p.links.source}">Source / details</a>` : "") +
    (p.links.discord ? `<a class="btn discord" href="${p.links.discord}" target="_blank" rel="noopener">Support on Discord <span aria-hidden="true">↗</span></a>` : "");

  const [aw, ah] = (p.images.aspect || "5 / 3").split("/").map(Number);
  const hasSlider = p.images.before || (isPack && !p.images.after);
  const labels = p.images.labels || ["the original", "the 4K pack"];

  /* Extra sections. Packs and DS games also get their shared notes. */
  const allSections = (p.sections || []).concat(isPack ? site.packSections : isDs ? site.dsSections : []);
  const rich = (t) => UI.esc(t).replace(/`([^`]+)`/g, "<code>$1</code>");
  const sections = allSections.length
    ? `<div class="p-sections">` + allSections.map((sec) =>
        `<section><h2>${UI.esc(sec.h)}</h2>` +
        (sec.p ? `<p>${rich(sec.p)}</p>` : "") +
        (sec.list ? `<ul>${sec.list.map((i) => `<li>${rich(i)}</li>`).join("")}</ul>` : "") +
        (sec.chips ? `<p class="chips">${sec.chips.map((c) => `<span>${UI.esc(c)}</span>`).join("")}</p>` : "") +
        `</section>`).join("") + `</div>`
    : "";
  const guideLinks = p.guide || (isPack ? site.packGuide : isDs ? site.dsGuide : []);
  const guide = guideLinks.length
    ? `<div class="p-sections"><section><h2>In the guide</h2><div class="guide-links">` +
      guideLinks.map(([label, anchor]) => `<a href="guide.html#${anchor}">${UI.esc(label)} →</a>`).join("") + `</div></section></div>`
    : "";

  /* Videos show as a picture with a play button; the player loads only when clicked. */
  /* Our own video files play on the page itself, and load only when play is pressed. */
  const clips = p.clips && p.clips.length
    ? `<div class="p-sections"><section><h2>New video</h2>` + p.clips.map(([src, poster, title, text]) =>
        `<figure class="clip"><video controls playsinline preload="none" poster="${poster}" width="1280" height="720"><source src="${src}" type="video/mp4"><a href="${src}">Download the video</a></video>` +
        `<figcaption><b>${UI.esc(title)}</b><span>${UI.esc(text)}</span></figcaption></figure>`).join("") + `</section></div>`
    : "";
  const videos = p.videos && p.videos.length
    ? `<div class="p-sections"><section><h2>Watch</h2><div class="videos">` +
      p.videos.map(([vid, title]) =>
        `<button class="yt" type="button" data-yt="${vid}" aria-label="Play video: ${UI.esc(title)}">` +
        `<img src="https://i.ytimg.com/vi/${vid}/hqdefault.jpg" alt="" loading="lazy"><span class="yt-play" aria-hidden="true"></span>` +
        `<span class="yt-title">${UI.esc(title)}</span></button>`).join("") +
      `</div></section></div>`
    : "";

  /* A wall of small pictures. With "items" it becomes a set of named, tiered cards that can be filtered. */
  const TIERS = [["bronze", "Bronze", 5], ["silver", "Silver", 10], ["gold", "Gold", 25], ["platinum", "Platinum", 50]];
  let wall = "";
  if (p.wall && p.wall.items) {
    const it = p.wall.items;
    wall =
      `<section class="block" style="padding-top:0" id="wall"><div class="wrap"><div class="section-head"><h2>${UI.esc(p.wall.title)}</h2>` +
      `<p class="muted">${UI.esc(p.wall.text)}</p></div>` +
      /* Where the points come from: one segment per tier, as wide as its share of the points. */
      `<div class="points-bar" role="group" aria-label="Points by tier">` +
      TIERS.map(([k, label, pts]) => { const n = it.filter((x) => x[3] === k).length;
        return `<button type="button" class="${k}" data-go-tier="${k}" style="flex:${n * pts}" title="Show ${label}"><b>${n * pts}</b><span>${n} ${label} × ${pts}</span></button>`; }).join("") +
      `</div><p class="points-sum muted"><b>${it.reduce((t, x) => t + TIERS.find((r) => r[0] === x[3])[2], 0)} points</b> across ${it.length} achievements. Pick a tier to see only those.</p>` +
      `<div class="tabs tier-tabs" role="group" aria-label="Filter by tier"><button type="button" data-tier="all" aria-pressed="true">All <small>${it.length}</small></button>` +
      TIERS.map(([k, label]) => `<button type="button" data-tier="${k}" aria-pressed="false"><i class="${k}"></i>${label} <small>${it.filter((x) => x[3] === k).length}</small></button>`).join("") + `</div>` +
      `<div class="badge-grid">` +
      it.map(([file, name, text, tier, group]) =>
        `<div class="badge-card ${tier}" data-tier="${tier}"><img src="img/badges/${file}.webp" alt="" loading="lazy">` +
        `<b>${UI.esc(name)}</b><span class="how">${UI.esc(text)}</span>` +
        `<span class="meta"><i class="${tier}"></i>${TIERS.find((t) => t[0] === tier)[2]} points · ${UI.esc(group)}</span></div>`).join("") +
      `</div></div></section>`;
  } else if (p.wall) {
    wall =
      `<section class="block" style="padding-top:0"><div class="wrap"><div class="section-head"><h2>${UI.esc(p.wall.title)}</h2>` +
      `<p class="muted">${UI.esc(p.wall.text)}</p></div><div class="wall">` +
      p.wall.images.map((src) => `<img src="${src}" alt="" loading="lazy">`).join("") + `</div></div></section>`;
  }

  const milestones = p.milestones
    ? `<h2 style="font-size:1.3rem;margin-top:30px">Milestones</h2><ul class="checks" style="margin-top:12px">` +
      p.milestones.map((m) => `<li class="${m.done ? "done" : ""}">${UI.esc(m.name)}</li>`).join("") + `</ul>`
    : "";

  const gallery = p.images.gallery && p.images.gallery.length
    ? `<section class="block" style="padding-top:0"><div class="wrap"><div class="section-head"><h2>Screenshots</h2></div>` +
      `<div class="gallery${p.images.gallery.length === 1 ? " solo" : ""}">${p.images.gallery.map((src) => `<a href="${src}"><img src="${src}" alt="${UI.esc(p.title)} screenshot" loading="lazy"></a>`).join("")}</div></div></section>`
    : "";

  /* Top of the page: text on the left, picture on the right. Very wide
     pictures (app screens spanning both displays) go underneath instead. */
  const ratio = aw / ah;
  const wide = ratio > 1.9;
  const backdrop = p.images.art || p.images.after;
  const statTiles = p.stats
    ? `<div class="stat-tiles">${p.stats.map(([k, v]) => `<div><b${p.github && v === p.version ? ` data-ver="${p.id}"` : ""}>${UI.esc(v)}</b><span>${UI.esc(k)}</span></div>`).join("")}</div>`
    : "";
  const worksWith = isPack ? ["Azahar", "Citra-based emulators", "Luma Core"] : isDs ? ["Luma Core only"] : [];
  const compat = worksWith.length
    ? `<p class="compat"><span class="compat-label">Works with</span>${worksWith.map((w) => `<span>${w}</span>`).join("")}</p>`
    : "";
  const visual =
    `<div class="p-pic"><div class="p-visual" style="--r:${ratio.toFixed(3)};aspect-ratio:${aw} / ${ah}">${UI.visual(p)}</div>` +
    (hasSlider ? `<button class="enlarge" type="button">Enlarge <span aria-hidden="true">⤢</span></button>` +
      `<p class="hint">Drag the slider to compare ${UI.esc(labels[0])} with ${UI.esc(labels[1])}.</p>` : "") + `</div>`;

  page.innerHTML =
    `<section class="p-hero" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">` +
    (backdrop ? `<img class="p-backdrop" src="${backdrop}" alt=""${p.images.art && p.images.artFilter ? ` style="filter:blur(34px) brightness(0.5) ${p.images.artFilter}"` : ""}>` : "") +
    `<div class="wrap">` +
    `<div class="p-top"><a class="back" href="index.html#${isPack ? "packs" : isDs ? "ds" : "apps"}"><span aria-hidden="true">←</span> ${isPack ? "All 3DS packs" : isDs ? "All DS games" : "All Luma apps"}</a>` +
    (sameKind.length > 1
      ? `<nav class="flip" aria-label="${isPack ? "3DS packs" : isDs ? "DS games" : "Luma apps"}">` +
        `<a href="project.html?id=${prevP.id}" rel="prev" title="${UI.esc(prevP.title)}" aria-label="Previous: ${UI.esc(prevP.title)}">‹</a>` +
        `<span class="flip-dots" aria-hidden="true">${sameKind.map((q) => `<a href="project.html?id=${q.id}" tabindex="-1" title="${UI.esc(q.title)}"${q === p ? ' class="on"' : ""}></a>`).join("")}</span>` +
        `<span class="flip-n"><b>${String(at + 1).padStart(2, "0")}</b> / ${String(sameKind.length).padStart(2, "0")}</span>` +
        `<a href="project.html?id=${nextP.id}" rel="next" title="${UI.esc(nextP.title)}" aria-label="Next: ${UI.esc(nextP.title)}">›</a></nav>`
      : "") + `</div>` +
    `<div class="p-top${wide ? " stack" : ""}">` +
    `<div class="p-head">` +
    (p.images.logo ? `<img class="p-logo" src="${p.images.logo}" alt="">`
      : p.images.icon ? `<img class="p-logo icon" src="${p.images.icon}" alt="">` : "") +
    `<span class="block-tags">${UI.chip(p)}${UI.forged(p)}</span><p class="eyebrow">${UI.esc(p.platform)}</p>` +
    `<h1>${UI.esc(p.title)}</h1><p class="tagline">${p.tagline.map((t) => `<span>${UI.esc(t)}</span>`).join(" ")}</p>` +
    statTiles + compat + `</div>` + visual +
    `</div></div></section>` +

    `<section class="block"><div class="wrap p-body"><div>` +
    (p.notice ? `<p class="notice"><b>${UI.esc(UI.statusText(p).split(" · ")[0])}</b>${UI.esc(p.notice)}</p>` : "") +
    `<p class="lead">${UI.esc(p.description)}</p>` +
    `<ul class="features">${p.features.map((f) => `<li>${UI.esc(f)}</li>`).join("")}</ul>` +
    milestones + clips + videos + sections + guide +
    `</div><aside class="side">` +
    (p.progress == null
      ? `<div><p class="eyebrow">Status</p><p class="pct" style="font-size:1.5rem">${UI.statusHTML(p)}</p></div>`
      : `<div><p class="eyebrow">Progress</p><p class="pct">${p.progress}%</p></div>`) +
    UI.meter(p) +
    (p.note ? `<p class="muted" style="font-size:.92rem">${UI.esc(p.note)}</p>` : "") +
    download + source +
    (site.disclaimers[p.category] ? `<p class="disclaimer">${UI.esc(site.disclaimers[p.category])}</p>` : "") +
    `</aside></div></section>` +

    gallery + wall +

    `<section class="block" style="padding-top:0"><div class="wrap"><div class="section-head"><p class="eyebrow">Keep exploring</p><h2>${isPack ? "More 3DS texture packs" : isDs ? "More optimized games" : "More from Luma Core"}</h2></div>` +
    (p.category === "app"
      ? `<nav class="dock" aria-label="Luma apps">` + sameKind.filter((q) => q.images.icon).map((q) =>
          `<a href="project.html?id=${q.id}" style="--c1:${q.colors[0]}"${q === p ? ` aria-current="page"` : ""}><img src="${q.images.icon}" alt=""><span>${UI.esc(q.title.replace(" English Patch", ""))}</span></a>`).join("") + `</nav>`
      : "") +
    `<div class="pager three">` +
    related.map((q) =>
      `<a class="pg" href="project.html?id=${q.id}" style="--c1:${q.colors[0]};--c2:${q.colors[1]}">` +
      `<img src="${q.images.art || UI.shot(q)}" alt="" loading="lazy"${q.images.artFilter ? ` style="filter:${q.images.artFilter}"` : ""}>` +
      `<span class="pg-label">${UI.esc(UI.statusText(q))}</span><b>${UI.esc(q.title)}</b>` +
      `<span class="pg-sub">${UI.esc(q.platform)}</span></a>`).join("") +
    `</div></div></section>`;

  /* When GitHub answers with the latest release, point the buttons at its files. */
  document.addEventListener("luma-release", (e) => {
    if (e.detail.id !== p.id) return;
    const r = e.detail.release;
    const main = page.querySelector(".side .btn.primary");
    if (!main) return;
    main.href = r.url;
    const kinds = [[/android.*\.apk$/i, "Android app"], [/linux/i, "Linux, Steam Deck, macOS"], [/patch_v[\d.]+\.zip$/i, "Windows"]];
    const files = kinds.map(([re, label]) => { const a = r.assets.find((x) => re.test(x.name)); return a ? [label, a] : null; }).filter(Boolean);
    const when = r.date ? new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "";
    main.insertAdjacentHTML("afterend",
      `<div class="rel"><p class="rel-head">Latest release ${UI.esc(r.tag)}${when ? " · " + when : ""}</p>` +
      files.map(([label, a]) => `<a class="rel-file" href="${a.url}"><span>${label}</span><small>${(a.size / 1e6).toFixed(1)} MB</small></a>`).join("") + `</div>`);
  });

  /* Tier buttons above the achievements. */
  page.addEventListener("click", (e) => {
    const seg = e.target.closest("[data-go-tier]");
    if (seg) { const tab = page.querySelector(`.tier-tabs button[data-tier="${seg.dataset.goTier}"]`); if (tab) tab.click(); return; }
    const b = e.target.closest(".tier-tabs button");
    if (!b) return;
    page.querySelectorAll(".tier-tabs button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    page.querySelectorAll(".badge-card").forEach((c) => (c.hidden = b.dataset.tier !== "all" && c.dataset.tier !== b.dataset.tier));
  });

  /* Open the comparison large, with the slider still working. */
  page.addEventListener("click", (e) => {
    if (!e.target.closest(".enlarge")) return;
    const box = document.createElement("div");
    box.className = "lightbox cmp";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Comparison");
    box.innerHTML = `<div class="cmp-frame" style="--r:${ratio.toFixed(3)};aspect-ratio:${aw} / ${ah}">${UI.visual(p)}</div>` +
      `<button type="button" aria-label="Close">×</button>`;
    const close = () => { box.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = (ev) => { if (ev.key === "Escape") close(); };
    box.addEventListener("click", (ev) => { if (ev.target === box || ev.target.closest("button")) close(); });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(box);
    box.querySelector("input").focus();
  });

  page.addEventListener("click", (e) => {
    const b = e.target.closest(".yt");
    if (!b) return;
    const frame = document.createElement("iframe");
    frame.className = "yt-frame";
    frame.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
    frame.title = b.querySelector(".yt-title").textContent;
    frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    b.replaceWith(frame);
  });
  /* ---------- live download count, read from the project's GitHub releases ---------- */
  (function () {
    if (!p.github) return;
    const key = "luma-downloads:" + p.github;
    function load() {
      try {
        const hit = JSON.parse(sessionStorage.getItem(key) || "null");
        if (hit && Date.now() - hit.at < 3600000) return Promise.resolve(hit.d);
      } catch (e) {}
      const all = [];
      const fetchPage = (n) => fetch(`https://api.github.com/repos/${p.github}/releases?per_page=100&page=${n}`, { headers: { Accept: "application/vnd.github+json" } })
        .then((res) => { if (!res.ok) throw new Error(res.status); return res.json(); })
        .then((list) => { all.push(...list); return list.length === 100 && n < 10 ? fetchPage(n + 1) : all; });
      return fetchPage(1).then((list) => {
        const d = { releases: list.length, total: 0, win: 0, android: 0, linux: 0 };
        list.forEach((r) => (r.assets || []).forEach((a) => {
          d.total += a.download_count;
          if (/android/i.test(a.name)) d.android += a.download_count;
          else if (/linux/i.test(a.name)) d.linux += a.download_count;
          else if (/English_Patch_v/i.test(a.name)) d.win += a.download_count;
        }));
        try { sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), d })); } catch (e) {}
        return d;
      });
    }
    load().then((d) => {
      const tiles = page.querySelector(".stat-tiles");
      if (!tiles || !d.total) return;
      const n = (v) => v.toLocaleString("en-US");
      tiles.insertAdjacentHTML("beforeend", `<div class="dl-tile"><b>${n(d.total)}</b><span>Downloads</span></div>`);
      const parts = [["Windows patch", d.win], ["Android patcher", d.android], ["Linux patch", d.linux]].filter((x) => x[1]);
      tiles.insertAdjacentHTML("afterend",
        `<p class="dl-count"><span class="live-dot" aria-hidden="true"></span>Live from GitHub: ${n(d.total)} downloads across ${d.releases} releases` +
        (parts.length ? ` (${parts.map(([k, v]) => `${k} ${n(v)}`).join(", ")})` : "") +
        `. Every file fetched counts once, so someone who updates through several versions is counted each time.</p>`);
    }).catch(() => {});
  })();
})();
