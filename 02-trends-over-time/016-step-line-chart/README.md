# Step Line Chart in HTML, CSS and JavaScript (Free)

![Step Line Chart example: the interest rate on a savings account from 2021 to 2026](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/02-trends-over-time/016-step-line-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/02-trends-over-time/016-step-line-chart/

Free step line chart made with HTML, CSS and vanilla JavaScript for prices and rates that change in jumps. Change points with tooltips. One file to download.

## What is a step line chart?

A step line chart shows a value that stays flat and then jumps to a new level, like a price, a rate or a plan limit. Instead of a sloped line between points, it draws a flat line and then a straight jump.

A normal line chart would suggest the rate slowly slid from one level to the next, which never happened. The steps show the truth: the rate stayed the same until the day it changed.

## At a glance

- **Best for:** Values that change in jumps and hold between them
- **Data you need:** The date of each change and the new value
- **Skip it when:** Values measured all the time, like temperature.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Interest rates and savings rates
- Prices and subscription fees
- Stock levels and plan limits
- Tax bands and minimum wage history

## What you get

- Flat lines and clean jumps drawn with SVG H and V commands
- A dot at every change you can hover or reach with Tab
- Tooltips that say raised or cut, from what to what
- The peak is marked on the chart
- A soft fill under the line to show the level
- Keyboard support and a table of every change

## How the code works

```js
const changes = [[2021, 0.10], [2022.2, 0.75], [2023, 3.00], [2023.5, 3.60], [2025, 2.85]];
const end = 2026.7;
const x = t => 40 + (t - 2021) / (end - 2021) * 540, y = r => 280 - r / 4 * 260;

let d = 'M' + x(changes[0][0]) + ',' + y(changes[0][1]);
changes.slice(1).forEach(([t, rate]) => { d += 'H' + x(t) + 'V' + y(rate); });
d += 'H' + x(end);
make('path', { d, fill: 'none', stroke: '#1b5e4a', 'stroke-width': 3 });
changes.forEach(([t, rate]) => drawCircle(x(t), y(rate), 5, '#1b5e4a'));
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called step-line-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
