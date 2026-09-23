# Icicle Chart in HTML, CSS and JavaScript (Free)

![Icicle Chart example: what is filling up a laptop drive](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/029-icicle-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/029-icicle-chart/

Free icicle chart made with HTML, CSS and vanilla JavaScript. A zoomable hierarchy for folders, budgets or sitemaps. Click to zoom in and out. One file to download.

## What is a icicle chart?

An icicle chart shows a hierarchy as rows of blocks. The first column is the whole, the next column splits it into groups, and the next splits each group again. Block height shows size.

It is the flat, rectangle version of a sunburst, and it is easier to label. Clicking a block zooms in so its parts fill the whole height, which makes deep data easy to dig into.

## At a glance

- **Best for:** Hierarchies you want to zoom into
- **Data you need:** A path of levels and a value for each leaf
- **Skip it when:** Only one level. Use a bar chart.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Disk or cloud storage use by folder
- Budgets by department, team and line item
- Website sections and pages by traffic
- Company structure by headcount

## What you get

- Three columns: all files, folders and what is inside them
- Click a block to zoom in, click the left block to zoom out
- Smooth animated zoom between levels
- Works with the Enter key for keyboard users
- Labels hide or shorten when a block is too small
- A data table with every folder

## How the code works

```js
const tree = [['Photos', [['Family', 58], ['Travel', 31]]], ['Videos', [['Home videos', 61], ['Downloads', 23]]]];
const total = tree.reduce((a, [, kids]) => a + kids.reduce((s, k) => s + k[1], 0), 0);
const h = 300, colW = 180;
let y = 0;

drawRect(0, 0, colW - 2, h, '#16202c');                       // the whole
tree.forEach(([name, kids]) => {
  const size = kids.reduce((s, k) => s + k[1], 0);
  drawRect(colW, y, colW - 2, size / total * h - 2, '#3a6ea5'); // folder
  let ky = y;
  kids.forEach(([, v]) => { drawRect(colW * 2, ky, colW - 2, v / total * h - 2, '#7fa3cc'); ky += v / total * h; });
  y += size / total * h;
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called icicle-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
