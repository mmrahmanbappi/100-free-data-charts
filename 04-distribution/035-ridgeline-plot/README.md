# Ridgeline Plot in HTML, CSS and JavaScript (Free)

![Ridgeline Plot example: daily high temperatures for each month of the year](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/04-distribution/035-ridgeline-plot/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/04-distribution/035-ridgeline-plot/

Free ridgeline plot made with HTML, CSS and vanilla JavaScript. Twelve overlapping distribution curves in one compact chart. One file to download.

## What is a ridgeline plot?

A ridgeline plot stacks several density curves on top of each other, each one slightly overlapping the next, like a row of hills. Each ridge shows how values were spread in one group.

It is perfect for groups that follow an order, like months of the year. You can watch the whole shape slide warmer in summer and cooler in winter in one glance.

## At a glance

- **Best for:** Many ordered groups, like months or years
- **Data you need:** A list of numbers for each group
- **Skip it when:** Groups with no natural order.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Temperatures or rainfall by month
- Prices or scores year by year
- Response times by hour of the day
- Ages or incomes across several surveys

## What you get

- Twelve ridges drawn from density estimates in plain JavaScript
- Each ridge colored by its middle temperature, from blue to red
- Ridges overlap so the chart stays compact
- Tooltips with the middle high, most days and the full range
- Short month names on phones
- Keyboard support and a data table

## How the code works

```js
const months = [[8, 9, 11, 7, 10, 9], [15, 17, 16, 18, 14, 16], [26, 28, 27, 30, 25, 29]];
const colors = ['#4575b4', '#fee090', '#d73027'];
const bw = 1.5, step = 60;

months.forEach((temps, i) => {
  const base = 80 + i * step;
  const pts = [];
  for (let t = 0; t <= 36; t += 0.5) {
    const d = temps.reduce((a, v) => a + Math.exp(-0.5 * ((t - v) / bw) ** 2), 0) / temps.length;
    pts.push((40 + t * 15) + ',' + (base - d * 110));
  }
  make('path', { d: 'M40,' + base + 'L' + pts.join('L') + 'L580,' + base + 'Z', fill: colors[i], stroke: '#fff' });
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called ridgeline-plot.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
