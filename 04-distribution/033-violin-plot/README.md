# Violin Plot in HTML, CSS and JavaScript (Free)

![Violin Plot example: coffee order waits at four cafes](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/04-distribution/033-violin-plot/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/04-distribution/033-violin-plot/

Free violin plot made with HTML, CSS and vanilla JavaScript. Smooth distribution shapes with the median and middle half inside. One file to download.

## What is a violin plot?

A violin plot shows the full shape of a set of numbers as a smooth, mirrored outline. The wider the shape at a value, the more data points sit there. Most violin plots also hold a small box plot inside.

It shows things a box plot hides, such as two peaks. In this example, one cafe has quick waits and slow waits but very few in between, which a box plot would miss completely.

## At a glance

- **Best for:** Comparing the shape of several groups
- **Data you need:** A list of numbers for each group, 50 or more
- **Skip it when:** Very small groups. Show the points instead.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Wait or service times by location
- Prices or ratings by category
- Results from different test groups
- Any data that might have two peaks

## What you get

- Smooth shapes made with a density estimate written in plain JavaScript
- All shapes use the same scale so widths compare fairly
- A dark bar for the middle half and a white dot for the median
- Shapes open out from the center on load
- Tooltips with the median and middle half
- Keyboard support and a table of key numbers

## How the code works

```js
const waits = [2.8, 3.1, 3.4, 2.6, 7.9, 8.4, 3.0, 8.8, 7.2, 3.3];
const bw = 0.6, cx = 200;
const density = t => waits.reduce((a, v) => a + Math.exp(-0.5 * ((t - v) / bw) ** 2), 0);
const ts = Array.from({ length: 60 }, (v, i) => i * 12 / 59);
const max = Math.max(...ts.map(density));
const y = t => 280 - t / 12 * 260;

const right = ts.map(t => (cx + density(t) / max * 60) + ',' + y(t));
const left = ts.map(t => (cx - density(t) / max * 60) + ',' + y(t)).reverse();
make('path', { d: 'M' + right.join('L') + 'L' + left.join('L') + 'Z', fill: '#6f4e37' });
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called violin-plot.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
