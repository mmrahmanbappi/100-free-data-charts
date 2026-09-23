/**
 * Builds every chart page, category page, the home page, READMEs and the sitemap from charts.js.
 * Plain Node.js, no packages. Run from the repo root:  node scripts/build.js
 */
const fs = require('fs');
const path = require('path');
const { SITE, CATEGORIES, CHARTS } = require('./charts');

const ROOT = path.dirname(__dirname);
const B = SITE.base;

const e = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const json = o => JSON.stringify(o).replace(/</g, '\\u003c');
const pad = n => String(n).padStart(3, '0');
const out = (p, text) => { const f = path.join(ROOT, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, text); };

const HELPERS = `const svg = document.querySelector('svg');
function make(tag, attrs) {
  const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  svg.appendChild(n);
  return n;
}
function drawRect(x, y, width, height, fill) { return make('rect', { x, y, width, height, fill }); }
function drawCircle(cx, cy, r, fill) { return make('circle', { cx, cy, r, fill }); }
function drawLine(x1, y1, x2, y2, stroke, width, dash) {
  return make('line', { x1, y1, x2, y2, stroke, 'stroke-width': width || 1, 'stroke-dasharray': dash || 'none' });
}
function drawText(x, y, str, anchor) {
  const t = make('text', { x, y, 'text-anchor': anchor || 'start' });
  t.textContent = str;
  return t;
}`;

const CSS = `:root{--bg:#fbfbf8;--ink:#17191f;--muted:#5a5f6b;--line:#e4e3dc;--blue:#2445d6;--card:#fff}
*{box-sizing:border-box;margin:0}
body{font-family:"Instrument Sans",system-ui,sans-serif;background:var(--bg);color:var(--ink);line-height:1.65;font-size:17px}
a{color:var(--blue)}
a:focus-visible,button:focus-visible,summary:focus-visible{outline:3px solid var(--blue);outline-offset:3px}
.bar{border-bottom:1px solid var(--line);background:#fff}
.bar div{max-width:1120px;margin:0 auto;padding:14px 22px;display:flex;justify-content:space-between;align-items:center;gap:16px}
.bar a.logo{font-family:"Bricolage Grotesque",sans-serif;font-weight:800;font-size:1.25rem;color:var(--ink);text-decoration:none}
.bar nav a{margin-left:18px;color:var(--ink);font-weight:600;text-decoration:none}
.wrap{max-width:1120px;margin:0 auto;padding:0 22px}
.crumbs{font-size:.9rem;color:var(--muted);padding:22px 0 0}
.crumbs a{color:var(--muted)}
h1,h2,h3{font-family:"Bricolage Grotesque",sans-serif;line-height:1.15;letter-spacing:-.01em}
h1{font-size:clamp(2rem,4.5vw,3.2rem);font-weight:800;margin:14px 0 14px;max-width:24ch}
h2{font-size:1.6rem;margin:0 0 14px}
h3{font-size:1.15rem}
.lead{font-size:1.15rem;color:var(--muted);max-width:62ch}
.actions{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0}
.btn{display:inline-block;padding:12px 20px;border-radius:10px;font-weight:700;text-decoration:none;border:2px solid var(--ink);color:var(--ink);background:#fff}
.btn.main{background:var(--ink);color:#fff}
.shot{display:block;border-radius:14px;overflow:hidden;border:1px solid var(--line);box-shadow:0 20px 50px rgba(20,20,40,.12)}
.shot img{display:block;width:100%;height:auto}
.cols{display:grid;grid-template-columns:1.4fr 1fr;gap:50px;padding:60px 0}
.cols p{margin-bottom:14px;max-width:65ch}
ul.list{padding-left:20px}
ul.list li{margin-bottom:6px}
.box{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:24px}
dl.glance dt{font-weight:700;margin-top:12px}
dl.glance dt:first-child{margin-top:0}
dl.glance dd{margin:2px 0 0;color:var(--muted)}
.two{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-bottom:50px}
.code{position:relative;margin:0 0 30px}
pre{background:#1d2030;color:#e8eaf3;border-radius:14px;padding:24px;overflow-x:auto;font-size:.9rem;line-height:1.6}
.copy{position:absolute;top:12px;right:12px;font:inherit;font-size:.85rem;font-weight:700;border:0;border-radius:8px;padding:6px 12px;background:#fff;color:var(--ink);cursor:pointer}
ol.steps{padding-left:22px;max-width:65ch;margin-bottom:60px}
ol.steps li{margin-bottom:8px}
details{border-top:1px solid var(--line);padding:16px 0}
details:last-child{border-bottom:1px solid var(--line)}
summary{font-weight:700;cursor:pointer;font-size:1.05rem}
details p{margin-top:10px;color:var(--muted);max-width:70ch}
.faq{margin-bottom:60px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px;margin:26px 0 60px}
.tile{display:block;text-decoration:none;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden}
.tile img{display:block;width:100%;height:auto;aspect-ratio:16/10;object-fit:cover;object-position:top;border-bottom:1px solid var(--line)}
.tile div{padding:14px 16px}
.tile small{color:var(--muted)}
.tile:hover{border-color:var(--ink)}
.cat{margin:50px 0 10px;display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap}
.soon{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;margin:20px 0 70px}
.soon div{border:1px dashed #c9c7bd;border-radius:12px;padding:18px;color:var(--muted)}
.soon b{color:var(--ink);display:block}
.pager{display:flex;justify-content:space-between;gap:16px;margin:0 0 60px;flex-wrap:wrap}
footer{border-top:1px solid var(--line);padding:30px 22px;text-align:center;color:var(--muted);font-size:.95rem}
@media(max-width:820px){.cols,.two{grid-template-columns:1fr;gap:30px}.cols{padding:40px 0}.bar nav a:first-child{display:none}}`;

const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Instrument+Sans:wght@400;600;700&display=swap" rel="stylesheet">';

function head(title, desc, url, image, keywords, schema) {
  const t = e(title), d = e(desc);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t}</title>
<meta name="description" content="${d}">
<meta name="keywords" content="${e(keywords)}">
<meta name="author" content="${e(SITE.author)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${d}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1280">
<meta property="og:image:height" content="800">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${t}">
<meta name="twitter:description" content="${d}">
<meta name="twitter:image" content="${image}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%2317191f'/><rect x='14' y='30' width='9' height='20' rx='2' fill='%23fff'/><rect x='28' y='18' width='9' height='32' rx='2' fill='%23fff'/><rect x='42' y='24' width='9' height='26' rx='2' fill='%23fff'/></svg>">
${FONTS}
<style>${CSS}</style>
<script type="application/ld+json">${json(schema)}</script>
</head>
<body>
<header class="bar"><div><a class="logo" href="${B}">100 Free Data Charts</a><nav><a href="${B}#categories">Categories</a><a href="${SITE.repo}">GitHub</a></nav></div></header>
`;
}

function foot() {
  return `<footer>Free under the MIT license. Made by <a href="${SITE.author_url}">${SITE.author}</a>. <a href="${SITE.repo}">Star the repo on GitHub</a> to get new charts.</footer>
<script>document.querySelectorAll('.copy').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(b.nextElementSibling.innerText).then(()=>{const t=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=t,1500)})})</script>
</body>
</html>`;
}

const crumbs = items => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })) });
const faqSchema = faq => ({ '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const catOf = slug => CATEGORIES.find(c => c.slug === slug);
const curl = c => `${B}${c.cat}/${c.slug}/`;
const inCat = slug => CHARTS.filter(c => c.cat === slug);
const bySlug = slug => CHARTS.find(c => c.slug === slug);
const lis = arr => arr.map(x => `<li>${e(x)}</li>`).join('');
const faqHtml = faq => faq.map(([q, a]) => `<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('');
const itemsList = items => items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: curl(c), name: c.name }));

function tile(c, prefix) {
  const n = e(c.name);
  return `<a class="tile" href="${prefix}${c.slug}/"><img src="${prefix}${c.slug}/preview.png" alt="${n} example: ${e(c.example)}" loading="lazy" width="1280" height="800"><div><h3>${pad(c.num)}. ${n}</h3><small>Example: ${e(c.example)}</small></div></a>`;
}

const STEPS = c => [
  ['Download the file', 'Click Download HTML file above. You get one file called ' + c.slug.slice(4) + '.html with everything inside.'],
  ['Change the data', 'Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.'],
  ['Change the colors and text', 'Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.'],
  ['Put it online', 'Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.'],
];

function chartPage(c, i, sib) {
  const cat = catOf(c.cat);
  const url = curl(c), img = url + 'preview.png';
  const fname = c.slug.slice(4) + '.html';
  const person = { '@type': 'Person', name: SITE.author, url: SITE.author_url };
  const steps = STEPS(c);
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': url, url, name: c.title, description: c.desc,
      isPartOf: { '@type': 'WebSite', name: SITE.name, url: B },
      about: { '@type': 'DefinedTerm', name: c.name, description: c.what[0], inDefinedTermSet: B },
      primaryImageOfPage: { '@type': 'ImageObject', url: img, width: 1280, height: 800 },
      datePublished: SITE.published, dateModified: SITE.published, inLanguage: 'en', author: person },
    { '@type': 'SoftwareSourceCode', name: `${c.name} in HTML, CSS and JavaScript`, description: c.desc,
      image: img, url, codeRepository: SITE.repo, codeSampleType: 'full solution',
      programmingLanguage: ['HTML', 'CSS', 'JavaScript'], runtimePlatform: 'Web browser',
      license: 'https://opensource.org/licenses/MIT', isAccessibleForFree: true, keywords: c.keywords, author: person,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
    { '@type': 'HowTo', name: `How to add this ${c.name.toLowerCase()} to your website`, totalTime: 'PT10M',
      tool: [{ '@type': 'HowToTool', name: 'A code editor' }, { '@type': 'HowToTool', name: 'A web browser' }],
      step: steps.map(([name, text], k) => ({ '@type': 'HowToStep', position: k + 1, name, text })) },
    crumbs([['Home', B], [cat.name, B + cat.slug + '/'], [c.name, url]]),
    faqSchema(c.faq)] };
  const n = e(c.name), nl = e(c.name.toLowerCase()), cn = e(cat.name);
  const what = c.what.map(p => `<p>${e(p)}</p>`).join('');
  const instead = c.instead.map(([slug, why]) => { const o = bySlug(slug); return `<li><a href="../${slug}/">${e(o.name)}</a>: ${e(why.charAt(0).toLowerCase() + why.slice(1))}</li>`; }).join('');
  const prev = sib[i - 1], next = sib[i + 1];
  const pager = `<nav class="pager" aria-label="More charts">${prev ? `<a href="../${prev.slug}/">Previous: ${e(prev.name)}</a>` : '<span></span>'}${next ? `<a href="../${next.slug}/">Next: ${e(next.name)}</a>` : '<span></span>'}</nav>`;
  const related = sib.filter(s => s.slug !== c.slug).map(s => tile(s, '../')).join('');
  const body = `<main class="wrap">
<p class="crumbs"><a href="${B}">Home</a> / <a href="../">${cn}</a> / ${n}</p>
<h1>${n} in HTML, CSS and JavaScript</h1>
<p class="lead">${e(c.what[0].split('. ')[0])}. This free template draws one with plain SVG and vanilla JavaScript, no chart library. The example shows ${e(c.example)}.</p>
<div class="actions"><a class="btn main" href="demo.html">Open live demo</a><a class="btn" href="demo.html" download="${fname}">Download HTML file</a><a class="btn" href="${SITE.repo}/tree/main/${c.cat}/${c.slug}">View code on GitHub</a></div>
<a class="shot" href="demo.html"><img src="preview.png" alt="${n} made with HTML and JavaScript showing ${e(c.example)}" width="1280" height="800"></a>
<section class="cols"><div><h2>What is a ${nl}?</h2>${what}</div>
<div class="box"><h3 style="margin-bottom:12px">At a glance</h3><dl class="glance"><dt>Best for</dt><dd>${e(c.glance.best)}</dd><dt>Data you need</dt><dd>${e(c.glance.data)}</dd><dt>Skip it when</dt><dd>${e(c.glance.avoid)}</dd><dt>Made with</dt><dd>HTML, CSS and vanilla JavaScript. No library.</dd></dl></div></section>
<section class="two"><div><h2>When to use a ${nl}</h2><ul class="list">${lis(c.when)}</ul></div>
<div><h2>When to pick another chart</h2><ul class="list">${instead}</ul></div></section>
<section><h2>What you get in this template</h2><ul class="list" style="margin-bottom:50px">${lis(c.features)}</ul></section>
<section><h2>How the code works</h2><p style="margin-bottom:14px;max-width:65ch">Here is a short version of the idea behind this ${nl}. The full file adds the axis, labels, tooltips, sorting and resizing on top of it.</p>
<div class="code"><button class="copy" type="button">Copy code</button><pre><code>${e(c.code)}</code></pre></div>
<p style="margin-bottom:14px;max-width:65ch">The example uses four tiny helpers that create SVG shapes. Put them above the code and it runs as is.</p>
<div class="code" style="margin-bottom:60px"><button class="copy" type="button">Copy helpers</button><pre><code>${e(HELPERS)}</code></pre></div></section>
<section><h2>How to add it to your website</h2><ol class="steps">${steps.map(([name, text]) => `<li><b>${e(name)}.</b> ${e(text)}</li>`).join('')}</ol></section>
<section class="faq"><h2>Questions people ask</h2>${faqHtml(c.faq)}</section>
${pager}
<section><h2>More ${cn.toLowerCase()}</h2><div class="grid">${related}</div></section>
</main>
`;
  out(`${c.cat}/${c.slug}/index.html`, head(c.title, c.desc, url, img, c.keywords, schema) + body + foot());

  const readme = `# ${c.name} in HTML, CSS and JavaScript (Free)

![${c.name} example: ${c.example}](preview.png)

**Live demo:** ${url}demo.html
**Details and code:** ${url}

${c.desc}

## What is a ${c.name.toLowerCase()}?

${c.what.join('\n\n')}

## At a glance

- **Best for:** ${c.glance.best}
- **Data you need:** ${c.glance.data}
- **Skip it when:** ${c.glance.avoid}
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

${c.when.map(x => '- ' + x).join('\n')}

## What you get

${c.features.map(x => '- ' + x).join('\n')}

## How the code works

\`\`\`js
${c.code}
\`\`\`

## How to use

${steps.map(([name, text], k) => `${k + 1}. **${name}.** ${text}`).join('\n')}

## License

MIT. Free for personal and commercial use.
`;
  out(`${c.cat}/${c.slug}/README.md`, readme);
}

function categoryPage(cat) {
  const items = inCat(cat.slug);
  const url = B + cat.slug + '/';
  const img = curl(items[0]) + 'preview.png';
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', '@id': url, url, name: cat.title, description: cat.desc,
      isPartOf: { '@type': 'WebSite', name: SITE.name, url: B }, inLanguage: 'en',
      mainEntity: { '@type': 'ItemList', numberOfItems: items.length, itemListElement: itemsList(items) } },
    crumbs([['Home', B], [cat.name, url]])] };
  const body = `<main class="wrap">
<p class="crumbs"><a href="${B}">Home</a> / ${e(cat.name)}</p>
<h1>${e(cat.name)} in HTML and JavaScript</h1>
<p class="lead">${e(cat.intro)}</p>
<div class="grid">${items.map(c => tile(c, '')).join('')}</div>
</main>
`;
  out(`${cat.slug}/index.html`, head(cat.title, cat.desc, url, img, cat.keywords, schema) + body + foot());
}

function home() {
  const n = CHARTS.length;
  const title = '100 Free Data Charts in HTML, CSS and JavaScript (No Library)';
  const desc = n >= 100
    ? '100 free charts made with HTML, CSS and vanilla JavaScript. Bar, line, pie, maps and 3D charts with live demos. One file each, no library.'
    : `${n} free charts made with HTML, CSS and vanilla JavaScript, growing to 100. Bar, stacked, bullet and more, each with a live demo. No library.`;
  const img = curl(CHARTS[0]) + 'preview.png';
  const faq = [
    ['Are these charts really free?', 'Yes. Every chart is released under the MIT license. You can use them on personal sites, client work and paid products without asking.'],
    ['Do I need a chart library like Chart.js or D3?', 'No. Every chart is drawn with plain SVG and vanilla JavaScript. There is nothing to install and no library to load, so pages stay small and fast.'],
    ['How do I use one of these charts on my website?', 'Open the chart, click Download HTML file, replace the numbers in the DATA list with your own and upload the file. You can also copy the SVG and script into an existing page.'],
    ['Do the charts work on phones?', 'Yes. Every chart redraws itself to fit the screen, moves labels on small screens and supports touch, mouse and keyboard.'],
    ['Are the charts accessible?', 'Each value can be reached with the Tab key and read out by screen readers, and every chart includes a data table. Animations turn off for people who prefer reduced motion.'],
  ];
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', '@id': B + '#site', url: B, name: SITE.name, description: desc, inLanguage: 'en',
      publisher: { '@type': 'Person', name: SITE.author, url: SITE.author_url } },
    { '@type': 'CollectionPage', url: B, name: title, description: desc, isPartOf: { '@id': B + '#site' },
      mainEntity: { '@type': 'ItemList', numberOfItems: n, itemListElement: itemsList(CHARTS) } },
    faqSchema(faq)] };
  let sections = '', soon = '';
  for (const cat of CATEGORIES) {
    const cn = e(cat.name);
    if (cat.ready) {
      const items = inCat(cat.slug);
      sections += `<div class="cat"><h2>${cat.num}. ${cn}</h2><a href="${cat.slug}/">See all ${items.length} ${cn.toLowerCase()}</a></div><div class="grid">${items.map(c => tile(c, cat.slug + '/')).join('')}</div>`;
    } else soon += `<div><b>${cat.num}. ${cn}</b>Coming soon</div>`;
  }
  const body = `<main class="wrap">
<h1 style="margin-top:50px">100 free data charts you can put on any website</h1>
<p class="lead">${n >= 100 ? 'All 100 charts are live.' : n + ' charts are live, with more added in batches of ten.'} Every chart is drawn with plain HTML, CSS and vanilla JavaScript, with no chart library. Each one comes with a live demo, a clear guide on when to use it, the key code, and a single HTML file to download. Change the numbers, keep the design. Free for commercial use.</p>
<div class="actions"><a class="btn main" href="#categories">See the charts</a><a class="btn" href="${SITE.repo}/archive/refs/heads/main.zip">Download everything (ZIP)</a><a class="btn" href="${SITE.repo}">Star on GitHub</a></div>
<section id="categories">${sections}
${soon ? `<h2 style="margin-top:30px">More categories on the way</h2><div class="soon">${soon}</div>` : ''}</section>
<section class="faq"><h2>Questions people ask</h2>${faqHtml(faq)}</section>
</main>
`;
  out('index.html', head(title, desc, B, img, 'free charts html, javascript charts without library, svg charts, bar chart html css, chart templates free, vanilla javascript charts', schema) + body + foot());
}

function rootReadme() {
  const rows = CHARTS.map(c => `| ${pad(c.num)} | [${c.name}](${curl(c)}) | ${c.example.charAt(0).toUpperCase() + c.example.slice(1)} | [Demo](${curl(c)}demo.html) | <img src="${c.cat}/${c.slug}/preview.png" width="260" alt="${c.name} preview"> |`).join('\n');
  const cats = CATEGORIES.map(c => `- ${c.num}. ${c.name} (${c.ready ? 'live' : 'coming soon'})`).join('\n');
  out('README.md', `# 100 Free Data Charts

Charts you can put on any website, built with plain HTML, CSS and vanilla JavaScript. No chart library, no framework, no build step. Each chart has a live demo, a guide on when to use it and a single HTML file you can download.

**Live gallery:** ${B}

![Bar chart preview](01-comparison/001-bar-chart/preview.png)

## All charts

| # | Chart | Example | Live | Preview |
|---|---|---|---|---|
${rows}

## Categories

${cats}

## How to use a chart

1. Open the chart folder and download \`demo.html\`.
2. Replace the numbers in the \`DATA\` list with your own.
3. Change the colors at the top of the style tag.
4. Upload it anywhere: GitHub Pages, Netlify, Vercel or your own server.

## Why no library?

Libraries are great, but for one chart on one page they add weight you do not need. These charts use SVG, which every browser already understands, and a few dozen lines of JavaScript. You can read every line and change anything.

## Build the pages yourself

The pages, READMEs and sitemap are generated from \`scripts/charts.js\`.

\`\`\`
node scripts/build.js        # pages, READMEs, sitemap
node scripts/screenshot.js   # preview images (needs Chrome)
\`\`\`

## License

MIT. Use these charts in personal and commercial projects. A star on the repo helps more people find them.
`);
}

function sitemap() {
  const urls = [B, ...CATEGORIES.filter(c => c.ready).map(c => B + c.slug + '/'), ...CHARTS.flatMap(c => [curl(c), curl(c) + 'demo.html'])];
  out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u => `<url><loc>${u}</loc><lastmod>${SITE.published}</lastmod></url>`).join('')}</urlset>\n`);
  out('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${B}sitemap.xml\n`);
}

for (const cat of CATEGORIES) {
  if (!cat.ready) continue;
  const sib = inCat(cat.slug);
  sib.forEach((c, i) => chartPage(c, i, sib));
  categoryPage(cat);
}
home(); rootReadme(); sitemap();
console.log(`Built ${CHARTS.length} charts`);
