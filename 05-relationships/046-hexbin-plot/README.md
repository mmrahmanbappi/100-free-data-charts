# Hexbin Plot in HTML, CSS and JavaScript (Free)

![Hexbin Plot example: distance and fare for 3,000 taxi rides](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/05-relationships/046-hexbin-plot/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/05-relationships/046-hexbin-plot/

Free hexbin plot made with HTML, CSS and vanilla JavaScript. Thousands of points grouped into hexagons, colored by count. One file to download.

## What is a hexbin plot?

A hexbin plot is a scatter plot for large data. Instead of drawing thousands of dots that pile on top of each other, it counts the points that fall in each hexagon and colors the hexagon by that count.

You can see where most of the data sits, which a crowded scatter plot hides. Hexagons are used instead of squares because they fit together neatly and their centers are all the same distance apart.

## At a glance

- **Best for:** Thousands of points on two measures
- **Data you need:** Two numbers for each item, ideally 1,000 or more
- **Skip it when:** Small data sets. A scatter plot shows each point.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Taxi or delivery rides by distance and price
- Website visits by time on page and pages seen
- Sensor readings with many samples
- Property sales by size and price

## What you get

- 3,000 rides counted into hexagons in plain JavaScript
- A color scale from pale to deep blue by number of rides
- A dashed line for the average fare formula
- Hover or use the arrow keys to read each hexagon
- Smaller hexagons on phones
- A summary table by distance band

## How the code works

```js
const rides = [[2.1, 7.9], [4.5, 12.1], [4.8, 12.6], [5.1, 13.0], [12.4, 27.5], [4.6, 12.2]];
const R = 14, dx = R * Math.sqrt(3), dy = R * 1.5;
const x = km => 40 + km / 30 * 540, y = f => 280 - f / 70 * 260;
const bins = {};

rides.forEach(([km, fare]) => {
  const row = Math.round(y(fare) / dy), col = Math.round((x(km) - (row % 2 ? dx / 2 : 0)) / dx);
  const key = row + ',' + col;
  bins[key] = (bins[key] || 0) + 1;
});
Object.entries(bins).forEach(([key, n]) => {
  const [row, col] = key.split(',').map(Number), cx = col * dx + (row % 2 ? dx / 2 : 0), cy = row * dy;
  const pts = [0, 1, 2, 3, 4, 5].map(k => (cx + R * Math.cos(Math.PI / 3 * k + Math.PI / 6)) + ',' + (cy + R * Math.sin(Math.PI / 3 * k + Math.PI / 6)));
  make('polygon', { points: pts.join(' '), fill: n > 1 ? '#1f4fd1' : '#a9bff5' });
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called hexbin-plot.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
