# Diverging Bar Chart in HTML, CSS and JavaScript (Free)

![Diverging Bar Chart example: visitor gains and losses for ten city parks](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/010-diverging-bar-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/010-diverging-bar-chart/

Free diverging bar chart made with HTML, CSS and vanilla JavaScript for gains and losses. Positive right, negative left. Download one file.

## What is a diverging bar chart?

A diverging bar chart shows positive and negative values going in opposite directions from a center line. Bars for gains go right, bars for losses go left, and each side gets its own color.

It makes growth and decline clear at a glance. Use it for percent change, profit and loss, or any number that can be above or below zero or a target.

## At a glance

- **Best for:** Values that can be positive or negative
- **Data you need:** A name and one number for each item, above or below zero
- **Skip it when:** Values that are all positive. Use a normal bar chart.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Percent change against last year
- Profit and loss by product or store
- Budget over or under by department
- Temperature or score above or below average

## What you get

- A center line at zero with bars growing both ways
- Green for growth, red for decline
- Park names sit on the opposite side of each bar so they never overlap
- Values with a plus or minus sign at the end of every bar
- Sort by change or by park name
- Tooltips, keyboard support and a data table

## How the code works

```js
const parks = [['Beacon Hill', 24.1], ['Heron Marsh', -19.3]];
const zero = 320;
const x = pct => zero + pct / 30 * 280; // -30% to +30%

parks.forEach(([name, change], row) => {
  const y = 20 + row * 40;
  const up = change >= 0;
  drawRect(Math.min(zero, x(change)), y, Math.abs(x(change) - zero), 28, up ? '#13806b' : '#d1495b');
  drawText(up ? zero - 10 : zero + 10, y + 19, name, up ? 'end' : 'start');
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called diverging-bar-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
