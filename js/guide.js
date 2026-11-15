/*
  Guide page. Shows guide/USER_GUIDE.md, the same file that ships with Luma Core.
  To update the guide: replace guide/USER_GUIDE.md and the pictures in guide/img.
  The small renderer below covers the Markdown the guide uses: headings, paragraphs,
  bullet and numbered lists, pictures, tables, quotes, bold, italic, code and links.
*/
(function () {
  const out = document.getElementById("guide");
  const toc = document.getElementById("toc");
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  /* Screenshots left out of the web copy of the guide because they still show
     the project's old name. Take new ones in the app, then remove them here. */
  const SKIP = ["setup-welcome.jpg", "setup-steps.jpg", "shop-download.jpg"];
  const slug = (s) => s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

  function inline(text) {
    let s = esc(text);
    const codes = [];
    s = s.replace(/`([^`]+)`/g, (m, c) => "\u0000" + (codes.push(c) - 1) + "\u0000");
    /* A bold controller button, such as **A** or **L / R**, is drawn as a small button cap. */
    s = s.replace(/\*\*((?:A|B|X|Y|L2|R2|L|R|Start|Select)(?: \/ (?:A|B|X|Y|L2|R2|L|R))?)\*\*/g, (m, keys) =>
      keys.split(" / ").map((k) => `<kbd class="pad ${k.length === 1 && "ABXY".includes(k) ? "face " + k.toLowerCase() : "wide"}">${k}</kbd>`).join('<span class="pad-or">/</span>'));
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, "$1<em>$2</em>");
    /* Links to sections stay links; links to other .md files become plain text. */
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, label, href) =>
      href.startsWith("#") || /^https?:/.test(href) ? `<a href="${href}">${label}</a>` : label);
    return s.replace(/\u0000(\d+)\u0000/g, (m, i) => `<code>${codes[+i]}</code>`);
  }

  function render(md) {
    const lines = md.replace(/\r/g, "").split("\n");
    const html = [];
    const heads = [];
    let para = [], list = null, table = null, skip = false;

    const flushPara = () => { if (para.length) { html.push(`<p>${inline(para.join(" "))}</p>`); para = []; } };
    const flushList = () => {
      if (list) { html.push(`<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${list.tag}>`); list = null; }
    };
    const flushTable = () => {
      if (!table) return;
      const rows = table.filter((r) => !/^\|[\s:|-]+\|$/.test(r)).map((r) => r.slice(1, -1).split("|").map((c) => inline(c.trim())));
      html.push(`<div class="table-wrap"><table><thead><tr>${rows[0].map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>` +
        rows.slice(1).map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("") + `</tbody></table></div>`);
      table = null;
    };
    const flush = () => { flushPara(); flushList(); flushTable(); };

    for (const raw of lines) {
      const line = raw.trimEnd();
      let m;
      if ((m = line.match(/^(#{1,3})\s+(.*)$/))) {
        flush();
        const level = m[1].length, text = m[2];
        skip = level === 2 && text === "Contents"; /* the page has its own contents list */
        if (skip) continue;
        const id = slug(text);
        if (level > 1) heads.push({ level, text, id });
        html.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
        continue;
      }
      if (skip) continue;
      if (!line.trim()) { flush(); continue; }
      if ((m = line.match(/^\s*!\[([^\]]*)\]\(([^)]+)\)\s*$/))) {
        flush();
        if (SKIP.some((name) => m[2].endsWith(name))) continue;
        html.push(`<figure><a href="${m[2]}"><img src="${m[2]}" alt="${esc(m[1])}" loading="lazy"></a><figcaption>${inline(m[1])}</figcaption></figure>`);
        continue;
      }
      if (line.startsWith("|")) { flushPara(); flushList(); (table = table || []).push(line.trim()); continue; }
      if ((m = line.match(/^>\s?(.*)$/))) { flush(); html.push(`<blockquote>${inline(m[1])}</blockquote>`); continue; }
      if ((m = line.match(/^\s*(?:([-*])|(\d+)\.)\s+(.*)$/))) {
        flushPara(); flushTable();
        const tag = m[1] ? "ul" : "ol";
        if (!list || list.tag !== tag) { flushList(); list = { tag, items: [] }; }
        list.items.push(m[3]);
        continue;
      }
      if (list && /^\s+/.test(raw)) { list.items[list.items.length - 1] += " " + line.trim(); continue; }
      flushList(); flushTable();
      para.push(line.trim());
    }
    flush();
    return { html: html.join("\n"), heads };
  }

  fetch("guide/USER_GUIDE.md")
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then((md) => {
      const { html, heads } = render(md);
      out.innerHTML = html;
      toc.innerHTML = heads.map((h) => `<a class="l${h.level}" href="#${h.id}">${esc(h.text)}</a>`).join("");

      /* Arriving with #section in the address: jump there now that it exists. */
      if (location.hash) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) target.scrollIntoView();
      }

      /* Search: keep only the contents entries whose section mentions the words typed. */
      const sections = [];
      out.querySelectorAll("h2").forEach((h) => {
        let text = h.textContent, el = h.nextElementSibling;
        const subs = [];
        while (el && el.tagName !== "H2") { text += " " + el.textContent; if (el.tagName === "H3") subs.push(el.id); el = el.nextElementSibling; }
        sections.push({ id: h.id, subs, text: text.toLowerCase() });
      });
      const box = document.getElementById("guideSearch"), found = document.getElementById("guideFound");
      box.addEventListener("input", () => {
        const words = box.value.toLowerCase().split(/\s+/).filter(Boolean);
        let n = 0;
        sections.forEach((sec) => {
          const hit = words.every((w) => sec.text.includes(w));
          if (hit) n++;
          [sec.id, ...sec.subs].forEach((id) => { const a = toc.querySelector(`a[href="#${id}"]`); if (a) a.hidden = !hit; });
        });
        found.textContent = words.length ? (n ? `${n} section${n === 1 ? "" : "s"} mention this` : "Nothing found. Try another word.") : "";
        document.querySelector(".guide-toc details").open = true;
      });

      /* Highlight the section being read. */
      const links = new Map([...toc.querySelectorAll("a")].map((a) => [a.getAttribute("href").slice(1), a]));
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.removeAttribute("aria-current"));
          const a = links.get(e.target.id);
          if (a) a.setAttribute("aria-current", "true");
        });
      }, { rootMargin: "-90px 0px -75% 0px" });
      out.querySelectorAll("h2, h3").forEach((h) => spy.observe(h));

      /* On a phone the contents list starts closed and closes after a tap. */
      const details = document.querySelector(".guide-toc details");
      if (window.matchMedia("(max-width: 860px)").matches) {
        details.open = false;
        toc.addEventListener("click", () => (details.open = false));
      }
    })
    .catch(() => {
      out.innerHTML = `<h1>Luma Core user guide</h1><p>The guide could not be loaded. If you opened this page straight from a folder, view the site through a web server instead.</p>`;
    });
})();
