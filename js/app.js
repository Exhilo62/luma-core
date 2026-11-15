/* Home page */
(function () {
  const { site, projects } = window.LUMA;
  const UI = window.LumaUI;
  const $ = (id) => document.getElementById(id);
  const packs = projects.filter((p) => p.category === "texture");
  const apps = projects.filter((p) => p.category === "app");
  const pad = (n) => String(n).padStart(2, "0");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- hero showcase ----------
     Two modes share the Thor: our texture packs (with the before/after slider),
     and Luma Core Home as it looks on the device. */
  const hero = document.querySelector(".hero");
  let current = 0;
  let timer = null;
  let mode = "packs";

  const abs = (src) => new URL(src, location.href).href;
  const packSlide = (p) => ({
    title: p.title, platform: p.platform, tagline: p.tagline, colors: p.colors, icon: UI.icon(p),
    link: "project.html?id=" + p.id, linkText: "Explore pack", fill: abs(UI.shot(p)),
    top: UI.visual(p),
    bottom:
      `<div class="panel" style="--c1:${p.colors[0]}">` +
      `<div class="row"><img src="${UI.icon(p)}" alt=""><b>${UI.esc(p.title)}</b></div>` +
      `<small>${UI.statusText(p)}</small>` +
      `<div class="meter"><span style="width:${p.progress}%"></span></div>` +
      `<small>${p.progress}% complete${p.pack ? " · " + p.pack.size : ""}</small></div>`
  });
  const screenSlide = ([img, title, line1, line2, anchor, c1, c2]) => ({
    title, platform: "Luma Core Home · on the AYN Thor", tagline: [line1, line2], colors: [c1, c2], icon: "img/logo-icon.png",
    link: "guide.html#" + anchor, linkText: "Read in the guide", fill: abs(img),
    top: `<div class="screen-shot top" role="img" aria-label="${UI.esc(title)}: top screen" style="background-image:url('${abs(img)}')"></div>`,
    bottom: `<div class="screen-shot bot" role="img" aria-label="${UI.esc(title)}: bottom screen" style="background-image:url('${abs(img)}')"></div>`
  });
  const decks = { packs: packs.map(packSlide), screens: site.screens.map(screenSlide) };
  const labels = { packs: "Featured texture packs · drag the slider", screens: "Luma Core Home · as it looks on the Thor" };
  let slides = decks.packs;

  function buildStrip() {
    $("heroTotal").textContent = pad(slides.length);
    $("heroStrip").innerHTML = slides
      .map((s, i) => `<button type="button" data-i="${i}"><img src="${s.icon}" alt=""><span>${UI.esc(s.title)}</span></button>`)
      .join("");
    $("showcaseLabel").textContent = labels[mode];
    hero.dataset.mode = mode;
  }

  function show(i) {
    current = (i + slides.length) % slides.length;
    const s = slides[current];
    hero.style.setProperty("--c1", s.colors[0]);
    hero.style.setProperty("--c2", s.colors[1]);
    $("heroNum").textContent = pad(current + 1);
    $("heroPlatform").textContent = s.platform;
    $("heroTitle").textContent = s.title;
    $("heroTagline").innerHTML = s.tagline.map((t) => `<span>${UI.esc(t)}</span>`).join("");
    $("heroLink").href = s.link;
    $("heroLink").innerHTML = `${s.linkText} <span aria-hidden="true">→</span>`;
    $("heroTop").innerHTML = s.top;
    $("heroTop").style.setProperty("--fill", `url("${s.fill}")`);
    $("heroBottom").innerHTML = s.bottom;
    const strip = $("heroStrip");
    strip.querySelectorAll("button").forEach((b, n) => b.setAttribute("aria-current", n === current));
    /* keep the chosen item in view inside the strip, without moving the page */
    const btn = strip.children[current];
    if (btn && strip.scrollWidth > strip.clientWidth) strip.scrollTo({ left: btn.offsetLeft - (strip.clientWidth - btn.clientWidth) / 2, behavior: calm ? "auto" : "smooth" });
    /* the text beside the Thor slides in each time the selection changes */
    const info = document.querySelector(".hero-info");
    info.classList.remove("swap");
    void info.offsetWidth;
    info.classList.add("swap");
  }

  function autoplay(on) {
    clearInterval(timer);
    if (on && !calm) timer = setInterval(() => show(current + 1), 7000);
  }

  document.querySelector(".mode-tabs").onclick = (e) => {
    const b = e.target.closest("button");
    if (!b || b.dataset.mode === mode) return;
    mode = b.dataset.mode;
    slides = decks[mode];
    document.querySelectorAll(".mode-tabs button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    buildStrip();
    show(0);
  };

  hero.addEventListener("keydown", (e) => {
    if (e.target.matches("input")) return; /* arrow keys on the slider move the slider */
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
  $("heroPrev").onclick = () => show(current - 1);
  $("heroNext").onclick = () => show(current + 1);
  $("heroStrip").onclick = (e) => {
    const b = e.target.closest("button");
    if (b) show(+b.dataset.i);
  };
  /* Stop rotating as soon as the visitor interacts, so the slider doesn't jump away. */
  ["pointerdown", "keydown", "focusin"].forEach((ev) => hero.addEventListener(ev, () => autoplay(false)));
  hero.addEventListener("mouseenter", () => autoplay(false));
  hero.addEventListener("mouseleave", () => autoplay(true));

  /* site.heroStart picks which pack the showcase opens on. */
  buildStrip();
  show(Math.max(0, packs.findIndex((p) => p.id === site.heroStart)));
  autoplay(true);

  /* ---------- intro pills ---------- */
  const dsGames = projects.filter((p) => p.category === "ds");
  $("introPills").innerHTML = [
    [packs.length, "4K texture packs"],
    [dsGames.length, "optimized DS games"],
    [site.companions.length, "companions"],
    [apps.filter((p) => p.platform.startsWith("Luma Core")).length, "Luma apps"],
    ["5", "systems on one shelf"]
  ].map(([n, t]) => `<span><b>${n}</b>${t}</span>`).join("");

  /* ---------- scrolling band of everything on the site ---------- */
  const band = projects.filter((p) => p.images.icon)
    .map((p) => `<span><img src="${p.images.icon}" alt="">${UI.esc(p.title)}</span>`).join("");
  $("marquee").innerHTML = band + band;

  /* ---------- the Thor is a 3D object that turns toward the pointer ---------- */
  const rig = document.querySelector(".hero .t-rig");
  const stage = document.querySelector(".hero-grid");
  if (rig) {
    /* Thickness: copies of each slab stacked behind its face. */
    const layers = (n) => Array.from({ length: n }, (_, i) => `<i class="t-depth" style="--i:${i + 1}"></i>`).join("");
    rig.querySelector(".t-lid").insertAdjacentHTML("afterbegin", layers(5));
    rig.querySelector(".t-base").insertAdjacentHTML("afterbegin", layers(9));

    /* Controls built up in slices so they have real sides when the device turns. */
    const slices = (cls, n) => Array.from({ length: n }, (_, i) => `<i class="${cls}" style="--i:${i + 1}"></i>`).join("");
    rig.querySelectorAll(".t-stick").forEach((st) => {
      st.innerHTML = slices("st-stem", 6) + slices("st-cap", 5) + `<i class="st-top"></i>`;
    });
    rig.querySelectorAll(".t-abxy b").forEach((b) => {
      b.innerHTML = slices("bt-side", 5) + `<span class="bt-top">${b.textContent}</span>`;
    });
    rig.querySelector(".t-dpad").innerHTML = slices("dp-side", 4) + `<i class="dp-top"></i>`;

    if (window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) {
      stage.addEventListener("pointermove", (e) => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        rig.style.setProperty("--ry", (x * 26).toFixed(2) + "deg");
        rig.style.setProperty("--rx", (-y * 16).toFixed(2) + "deg");
      });
      stage.addEventListener("pointerleave", () => { rig.style.removeProperty("--ry"); rig.style.removeProperty("--rx"); });
    }
  }

  /* ---------- the comparison slider sweeps once, to show it can be dragged ---------- */
  if ("IntersectionObserver" in window && !calm) {
    const once = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      once.disconnect();
      const cmp = document.querySelector("#heroTop .compare"), input = cmp && cmp.querySelector("input");
      if (!cmp) return;
      const keys = [[0, 50], [0.3, 80], [0.7, 22], [1, 50]], dur = 2400;
      let t0 = null;
      const step = (t) => {
        if (!cmp.isConnected) return;
        if (t0 === null) t0 = t;
        const k = Math.min(1, (t - t0) / dur);
        let i = 1;
        while (i < keys.length - 1 && k > keys[i][0]) i++;
        const [ka, va] = keys[i - 1], [kb, vb] = keys[i], f = (k - ka) / (kb - ka), e = f * f * (3 - 2 * f);
        const v = va + (vb - va) * e;
        cmp.style.setProperty("--pos", v + "%");
        input.value = v;
        if (k < 1) requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 500);
    }, { threshold: 0.35 });
    once.observe(hero); /* the section, not the tilted 3D screen, so the check is reliable */
  }

  /* ---------- sparkles around the logo ---------- */
  const intro = document.querySelector(".intro");
  if (intro && !calm) {
    const spots = [[8, 12, 1.1], [18, 46, 0.7], [27, 4, 0.9], [72, 6, 0.8], [84, 30, 1.2], [92, 10, 0.7], [14, 70, 0.6], [88, 62, 0.9], [50, -2, 0.6], [66, 44, 0.5]];
    intro.insertAdjacentHTML("afterbegin", `<div class="sparkles" aria-hidden="true">` +
      spots.map(([x, y, sz], i) => `<span style="left:${x}%;top:${y}%;font-size:${sz}rem;animation-delay:${(i * 0.37).toFixed(2)}s">✦</span>`).join("") + `</div>`);
  }

  /* ---------- two screens, one Home: a labelled capture ---------- */
  (function () {
    const box = $("anatomy"), a = site.anatomy;
    box.innerHTML =
      `<div class="anatomy-pic"><img src="${a.img}" alt="Luma Core Home across both screens" loading="lazy">` +
      a.points.map(([x, y, title], i) => `<button type="button" class="dot-n" data-n="${i}" style="left:${x}%;top:${y}%" aria-label="${i + 1}: ${UI.esc(title)}">${i + 1}</button>`).join("") + `</div>` +
      `<ol class="anatomy-list">` +
      a.points.map(([, , title, text], i) => `<li data-n="${i}" tabindex="0"><span class="num">${i + 1}</span><div><b>${UI.esc(title)}</b><p>${UI.esc(text)}</p></div></li>`).join("") + `</ol>`;
    const mark = (n) => box.querySelectorAll("[data-n]").forEach((el) => el.classList.toggle("on", el.dataset.n === String(n)));
    ["pointerover", "focusin", "click"].forEach((ev) => box.addEventListener(ev, (e) => {
      const el = e.target.closest("[data-n]");
      if (el) mark(el.dataset.n);
    }));
    mark(0);
  })();

  /* ---------- app tour ---------- */
  const tourTabs = $("tourTabs"), tourStage = $("tourStage");
  let tourAt = 0, tourTimer = null;
  tourTabs.innerHTML = site.highlights
    .map(([, title], i) => `<button type="button" role="tab" data-i="${i}"><span class="n">${pad(i + 1)}</span>${UI.esc(title)}<i></i></button>`)
    .join("");
  function tourShow(i) {
    tourAt = (i + site.highlights.length) % site.highlights.length;
    const [img, title, text, anchor] = site.highlights[tourAt];
    tourStage.innerHTML =
      `<div class="tour-pic" style="--fill:url('${new URL(img, location.href).href}')"><img src="${img}" alt="${UI.esc(title)} in Luma Core"></div>` +
      `<div class="tour-text"><h3>${UI.esc(title)}</h3><p>${UI.esc(text)}</p>` +
      `<a class="more" href="guide.html#${anchor}">Read about it in the guide <span aria-hidden="true">→</span></a></div>`;
    tourTabs.querySelectorAll("button").forEach((b, n) => b.setAttribute("aria-selected", n === tourAt));
  }
  function tourPlay(on) {
    clearInterval(tourTimer);
    $("tour").classList.toggle("playing", on);
    if (on && !calm) tourTimer = setInterval(() => tourShow(tourAt + 1), 6000);
  }
  tourTabs.onclick = (e) => {
    const b = e.target.closest("button");
    if (b) { tourShow(+b.dataset.i); tourPlay(false); }
  };
  $("tour").addEventListener("mouseenter", () => tourPlay(false));
  $("tour").addEventListener("mouseleave", () => tourPlay(true));
  tourShow(0);
  tourPlay(true);

  /* ---------- card grids ---------- */
  $("packGrid").innerHTML = packs.map(UI.card).join("") +
    `<a class="block soon" href="#next"><span class="soon-plus" aria-hidden="true">+</span>` +
    `<div class="block-body"><p class="eyebrow">Planned</p><h3>More packs on the way</h3>` +
    `<p class="tagline"><span>More 3DS games are planned,</span><span>and these packs keep improving.</span></p>` +
    `<span class="btn">See what's next <span aria-hidden="true">→</span></span></div></a>`;
  $("appGrid").innerHTML = apps.map(UI.card).join("");
  /* A dock of the Luma apps' own tiles, like the Home bar: each opens its page. */
  $("appDock").innerHTML = apps.filter((p) => p.images.icon)
    .map((p) => `<a href="project.html?id=${p.id}" style="--c1:${p.colors[0]}"><img src="${p.images.icon}" alt=""><span>${UI.esc(p.title.replace(" English Patch", ""))}</span></a>`)
    .join("");
  $("dsGrid").innerHTML = dsGames.map(UI.card).join("");

  /* ---------- the packs in numbers, and what 4x means ---------- */
  (function () {
    const stat = (p, name) => (p.stats.find((x) => x[0] === name) || [])[1] || "0";
    const files = packs.reduce((n, p) => n + +stat(p, "Files").replace(/,/g, ""), 0);
    const gb = packs.reduce((n, p) => n + parseFloat(stat(p, "Size")), 0);
    $("packBand").innerHTML =
      `<div class="stat-tiles">` +
      [[packs.length, "Packs"], [files.toLocaleString("en-US"), "Pack files"], [gb.toFixed(1) + " GB", "In all"], ["16x", "The pixels"]]
        .map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join("") + `</div>` +
      `<div class="px-demo" role="img" aria-label="One original pixel beside the sixteen that replace it">` +
      `<span class="px one"></span><span class="px-arrow" aria-hidden="true">→</span>` +
      `<span class="px many">${"<i></i>".repeat(16)}</span>` +
      `<p><b>What 4x means.</b> Every texture is redrawn at four times its width and four times its height, so each original pixel becomes sixteen.</p></div>`;
  })();

  /* ---------- a drifting ribbon of the real Luma achievement badges ---------- */
  (function () {
    const a = projects.find((p) => p.id === "achievements"), box = $("badgeRibbon");
    if (!a || !a.wall || !a.wall.items) { box.remove(); return; }
    const it = a.wall.items;
    const row = it.map(([file, , , tier]) => `<img class="${tier}" src="img/badges/${file}.webp" alt="" loading="lazy">`).join("");
    box.innerHTML =
      `<span class="ribbon-text"><b>${it.length} Luma achievements</b><small>Bronze to Platinum · see them all <span aria-hidden="true">→</span></small></span>` +
      `<span class="ribbon-view" aria-hidden="true"><span class="ribbon-track">${row}${row}</span></span>`;
  })();

  /* ---------- what each system gets ---------- */
  (function () {
    const n = (k, one, many) => `${k} ${k === 1 ? one : many}`;
    const comp = (sys) => site.companions.filter((c) => c[1] === sys).length;
    const fill = { gbc: n(comp("GBC"), "game", "games"), gba: n(comp("GBA"), "games", "games"), ds: n(dsGames.length, "game", "games"), packs: n(packs.length, "texture pack", "texture packs") };
    $("sysRow").innerHTML = site.systems.map(([code, name, color, href, go, points]) =>
      `<a class="sys-card" href="${href}" style="--k:${color}"><span class="sys-code" aria-hidden="true">${code}</span>` +
      `<b>${UI.esc(name)}</b><ul>` +
      points.map((t, i) => `<li${i === 0 ? ' class="lead"' : ""}>${UI.esc(t.replace(/\{(\w+)\}/, (m, k) => fill[k]))}</li>`).join("") +
      `</ul><span class="sys-go">${UI.esc(go)} <span aria-hidden="true">→</span></span></a>`).join("");
  })();

  /* ---------- progress ---------- */
  function row(p) {
    return (
      `<a class="prow" href="project.html?id=${p.id}" style="--c1:${p.colors[0]}"><div class="prow-top"><img src="${UI.icon(p)}" alt="">` +
      `<div><h3>${UI.esc(p.title)}</h3><p class="sub">${UI.statusHTML(p)}</p></div>` +
      (p.progress == null ? `<span class="dotstate ${p.status}" title="${UI.statusText(p)}"></span>` : `<span class="pct">${p.progress}<small>%</small></span>`) +
      `</div>` + UI.meter(p) + `</a>`
    );
  }
  function renderRows(filter) {
    $("progressRows").innerHTML = projects.filter((p) => filter === "all" || p.category === filter).map(row).join("");
  }
  document.querySelector(".tabs").onclick = (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    document.querySelectorAll(".tabs button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderRows(b.dataset.filter);
  };
  renderRows("all");

  /* A one-line tally above the list: how many are complete, in beta, in development. */
  const kinds = [["complete", "Complete"], ["released", "Released"], ["beta", "Beta"], ["dev", "In development"], ["planned", "Planned"]]
    .map(([k, label]) => [k, label, projects.filter((p) => p.status === k).length]).filter((x) => x[2]);
  $("tally").innerHTML =
    `<div class="tally-bar">${kinds.map(([k, , n]) => `<span class="${k}" style="flex:${n}"></span>`).join("")}</div>` +
    `<div class="tally-key">${kinds.map(([k, label, n]) => `<span><i class="${k}"></i><b>${n}</b> ${label.toLowerCase()}</span>`).join("")}</div>`;

  /* ---------- companions ---------- */
  $("companionShots").innerHTML = site.companionShots
    .map(([src, caption]) => `<figure><a href="${src}"><img src="${src}" alt="${UI.esc(caption)}" loading="lazy"></a><figcaption>${UI.esc(caption)}</figcaption></figure>`)
    .join("");
  $("companionGrid").innerHTML = site.companions
    .map(([title, system, tabs, detail]) =>
      `<div class="comp"><span class="comp-top"><span class="sys ${system.toLowerCase()}">${system}</span><span class="forged-tag small">Forged</span></span><b>${UI.esc(title)}</b>` +
      `<span class="tabs-line">${tabs.map((t) => `<i>${UI.esc(t)}</i>`).join("")}</span>` +
      (detail ? `<span class="comp-detail">${UI.esc(detail)}</span>` : "") + `</div>`)
    .join("");
  $("companionGrid").insertAdjacentHTML("beforeend",
    `<a class="comp soon" href="#next"><span class="sys">Planned</span><b>More companions on the way</b>` +
    `<span class="tabs-line"><i>More games planned</i></span></a>`);
  $("companionNote").textContent = site.companionNote;

  /* ---------- downloads closed? say when they open ---------- */
  document.querySelectorAll("[data-downloads-note]").forEach((el) => {
    if (site.downloadsOpen) el.remove(); else el.textContent = site.downloadsNote;
  });

  /* ---------- small print under each section ---------- */
  document.querySelectorAll("[data-disclaimer]").forEach((el) => (el.textContent = site.disclaimers[el.dataset.disclaimer]));

  /* ---------- beta call-out ---------- */
  $("betaTitle").innerHTML = UI.esc(site.beta.title).replace("Beta testing", `<span class="grad">Beta testing</span>`);
  $("betaText").textContent = site.beta.text;
  $("betaPoints").innerHTML = site.beta.points.map((t) => `<li>${UI.esc(t)}</li>`).join("");

  /* ---------- latest updates ---------- */
  $("newsList").innerHTML = site.news
    .map(([date, title, text, link]) =>
      `<a class="news-item" href="${link}" data-news="${(link.match(/id=([\w-]+)/) || [])[1] || ""}"><time>${UI.esc(date)}</time>` +
      `<div><h3>${UI.esc(title)}</h3><p>${UI.esc(text)}</p></div><span aria-hidden="true">→</span></a>`)
    .join("");

  /* A news entry about a project with a GitHub repo shows that repo's newest release. */
  document.addEventListener("luma-release", (e) => {
    const item = document.querySelector(`.news-item[data-news="${e.detail.id}"]`);
    if (!item) return;
    const r = e.detail.release, h = item.querySelector("h3");
    h.textContent = h.textContent.replace(/v\d[\w.]*/, r.tag);
    if (r.date) item.querySelector("time").textContent = new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  });

  /* ---------- what's next ---------- */
  $("wipLine").textContent = site.wip + " Here is what we are planning to add.";
  $("nextGrid").innerHTML = site.roadmap
    .map(([sym, title, text, link]) =>
      `<a class="next-card" href="${link}"><span class="next-sym" aria-hidden="true">${sym}</span>` +
      `<span class="next-tag"><i></i>Planned</span><h3>${UI.esc(title)}</h3><p>${UI.esc(text)}</p></a>`)
    .join("");

  /* ---------- guide teaser ---------- */
  $("guideTopics").innerHTML = site.guideTopics
    .map(([title, text, anchor]) => `<a class="topic" href="guide.html#${anchor}"><b>${UI.esc(title)}</b><span>${UI.esc(text)}</span></a>`)
    .join("");

  /* ---------- about ---------- */
  $("aboutText").textContent = site.about;
  const links = [];
  if (site.links.github) links.push(`<a class="btn" href="${site.links.github}">GitHub</a>`);
  if (site.links.discord) links.push(`<a class="btn" href="${site.links.discord}">Discord</a>`);
  $("aboutLinks").innerHTML = links.join("");
  if (site.logo) $("aboutLogo").innerHTML = `<img src="${site.logo}" alt="${UI.esc(site.name)} logo">`;
  $("facts").innerHTML = site.facts.map(([n, t]) => `<div class="fact"><b>${n}</b><span>${t}</span></div>`).join("");
})();
