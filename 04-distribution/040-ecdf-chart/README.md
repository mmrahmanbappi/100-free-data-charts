# Cumulative Distribution Chart in HTML, CSS and JavaScript (Free)

![Cumulative Distribution Chart example: page load times for three versions of a website](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/04-distribution/040-ecdf-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/04-distribution/040-ecdf-chart/

Free cumulative distribution (ECDF) chart made with HTML, CSS and vanilla JavaScript. Compare speeds or times against a target. One file to download.

## What is a cumulative distribution chart?

A cumulative distribution chart, often called an ECDF, shows what share of values are at or below each point. The line starts at 0% and climbs to 100% as it counts every value from smallest to largest.

It answers questions like: what share of visits loaded within 2.5 seconds? Just find 2.5 on the bottom and read the height of each line. The further left a line climbs, the faster that version is.

## At a glance

- **Best for:** Reading what share is under a limit
- **Data you need:** A list of numbers for each group
- **Skip it when:** Audiences who have never seen one. Explain how to read it.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Page speed and response times
- Delivery or wait times against a promise
- Test scores against a pass mark
- Comparing before and after a change

## What you get

- Step lines built from the sorted data in plain JavaScript
- A dashed line for the 2.5 second target
- A crosshair that reads the share for every version at any time
- Hide a version from the key
- Lines reveal from left to right on load
- Arrow key support and a data table

## How the code works

```js
const times = [1.2, 1.6, 1.4, 2.1, 1.8, 2.6, 1.5, 3.2, 1.9, 1.3];
const s = times.slice().sort((a, b) => a - b);
const x = t => 40 + t / 4 * 540, y = p => 280 - p * 260;

let d = 'M' + x(0) + ',' + y(0);
s.forEach((t, i) => { d += 'H' + x(t) + 'V' + y((i + 1) / s.length); });
make('path', { d: d + 'H' + x(4), fill: 'none', stroke: '#16a34a', 'stroke-width': 3 });
drawLine(x(2.5), y(0), x(2.5), y(1), '#181d2b', 1.5, '6 4');
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called ecdf-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
