# Pie Chart in HTML, CSS and JavaScript (Free)

![Pie Chart example: how customers paid at a cafe](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/03-part-to-whole/021-pie-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/03-part-to-whole/021-pie-chart/

Free pie chart made with HTML, CSS and vanilla JavaScript. No library. Labels with lines, slices that pop out on hover, keyboard support. One file to download.

## What is a pie chart?

A pie chart is a circle divided into slices, where each slice shows one part of a whole. The bigger the share, the bigger the slice, and all the slices together make 100%.

Pie charts are easy to understand because everyone has cut a pie or a pizza. They work best with two to five parts where one or two clearly stand out, like card and phone payments against cash.

## At a glance

- **Best for:** A few shares of one whole, 2 to 5 slices
- **Data you need:** A name and a percent or count for each part
- **Skip it when:** Many slices or slices of almost equal size. Use bars.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- How customers paid
- Share of votes, answers or sales between a few options
- Budget split into a few big parts
- Simple reports and slides for a general audience

## What you get

- Slices drawn with SVG arc paths in plain JavaScript
- Labels outside the pie with thin lines, so small slices stay readable
- Slices pop out when you hover or tab to them
- Largest slice starts at 12 o clock and runs clockwise
- The pie sweeps open on load
- Keyboard support and a data table

## How the code works

```js
const slices = [['Card', 46, '#7a4b2a'], ['Phone', 31, '#c98b4f'], ['Cash', 17, '#8fa37e'], ['Gift card', 6, '#d9c3a5']];
const cx = 200, cy = 150, r = 120;
let start = 0;

slices.forEach(([name, pct, color]) => {
  const end = start + pct / 100 * Math.PI * 2;
  const x1 = cx + r * Math.sin(start), y1 = cy - r * Math.cos(start);
  const x2 = cx + r * Math.sin(end), y2 = cy - r * Math.cos(end);
  const large = end - start > Math.PI ? 1 : 0;
  make('path', { d: 'M' + cx + ',' + cy + 'L' + x1 + ',' + y1 + 'A' + r + ',' + r + ' 0 ' + large + ' 1 ' + x2 + ',' + y2 + 'Z', fill: color });
  start = end;
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called pie-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
