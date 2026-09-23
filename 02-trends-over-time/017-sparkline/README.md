# Sparkline in HTML, CSS and JavaScript (Free)

![Sparkline example: daily sales for six products in a shop dashboard](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/02-trends-over-time/017-sparkline/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/02-trends-over-time/017-sparkline/

Free sparklines made with HTML, CSS and vanilla JavaScript inside a product table. Best and worst day dots, hover values, sorting. One file to download.

## What is a sparkline?

A sparkline is a tiny line chart without axes, small enough to sit inside a table row or next to a number. It shows the shape of a trend in a word sized space.

Sparklines were named by Edward Tufte, who called them data words. They are perfect for dashboards, where you want to see at a glance which products are rising and which are falling without opening a full chart.

## At a glance

- **Best for:** Many small trends side by side in a table
- **Data you need:** A short list of numbers for each row
- **Skip it when:** When people need exact values from the chart itself.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Product or page lists in dashboards
- Stock or crypto watch lists
- KPI cards showing the last 30 days
- Email reports where space is tight

## What you get

- Six sparklines inside a normal HTML table
- A green dot for the best day, red for the slowest and blue for today
- Hover any sparkline to read the value for that day
- This week against last week, in green or red
- Sort by most sold or by biggest change
- Every sparkline redraws to fit its cell on any screen

## How the code works

```js
const sales = [42, 45, 39, 51, 48, 55, 60, 52, 58, 63];
const w = 160, h = 40;
const lo = Math.min(...sales), hi = Math.max(...sales);
const x = i => 4 + i * (w - 8) / (sales.length - 1);
const y = v => h - 4 - (v - lo) / (hi - lo) * (h - 8);

make('path', { d: sales.map((v, i) => (i ? 'L' : 'M') + x(i) + ',' + y(v)).join(''), fill: 'none', stroke: '#2563c9', 'stroke-width': 2 });
drawCircle(x(sales.indexOf(hi)), y(hi), 3, '#16835a');
drawCircle(x(sales.indexOf(lo)), y(lo), 3, '#c8354b');
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called sparkline.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
