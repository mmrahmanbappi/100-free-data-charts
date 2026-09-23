# Stacked Area Chart in HTML, CSS and JavaScript (Free)

![Stacked Area Chart example: hours watched each month on a streaming app, by device](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/02-trends-over-time/014-stacked-area-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/02-trends-over-time/014-stacked-area-chart/

Free stacked area chart made with HTML, CSS and vanilla JavaScript. Layers add up to a total, hide any layer, crosshair with shares. One file to download.

## What is a stacked area chart?

A stacked area chart shows several amounts over time, piled on top of each other. Each colored layer is one part, and the top edge of the whole stack is the total.

It shows two things at once: how the total changed, and how the mix changed inside it. In this example you can see total viewing peak in winter while phones slowly take a bigger share.

## At a glance

- **Best for:** A total over time and the parts that make it up
- **Data you need:** A date and one number per part for each point
- **Skip it when:** Comparing the middle layers exactly. Use lines.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Viewing, visits or sales by device or channel
- Energy use by source over the year
- Revenue by product line each month
- Team hours split by type of work

## What you get

- Four smooth layers stacked with a running total
- A crosshair that lists every device with its share and the total
- Click a device in the key to hide it and restack the rest
- Dark theme with bright, easy to tell apart colors
- Layers reveal from left to right on load
- Arrow key support and a data table with totals

## How the code works

```js
const months = 6;
const layers = [
  { color: '#ff5d73', values: [42, 45, 51, 55, 49, 46] },
  { color: '#ffb547', values: [28, 29, 31, 33, 34, 36] }
];
const x = i => 40 + i * 110, y = v => 280 - v / 100 * 260;
let below = Array(months).fill(0);

layers.forEach(l => {
  const top = below.map((b, i) => b + l.values[i]);
  const up = top.map((v, i) => x(i) + ',' + y(v));
  const down = below.map((v, i) => x(i) + ',' + y(v)).reverse();
  make('path', { d: 'M' + up.join('L') + 'L' + down.join('L') + 'Z', fill: l.color });
  below = top;
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called stacked-area-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
