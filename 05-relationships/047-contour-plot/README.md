# Contour Plot in HTML, CSS and JavaScript (Free)

![Contour Plot example: a hill walk with height lines and a trail](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/05-relationships/047-contour-plot/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/05-relationships/047-contour-plot/

Free contour plot made with HTML, CSS and vanilla JavaScript. Height lines drawn with marching squares, a trail and hover height. One file to download.

## What is a contour plot?

A contour plot shows a surface on a flat map using lines. Each line joins points that share the same value, like the same height on a hill. Close lines mean a steep slope, far apart lines mean gentle ground.

Hikers know these lines from maps, but the same chart works for any value that changes across two measures, like temperature across a region or profit across different prices and ad budgets.

## At a glance

- **Best for:** A value that changes smoothly across two measures
- **Data you need:** A value for every point on a grid
- **Skip it when:** Scattered data without a smooth surface.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Hills and trail maps
- Temperature or rainfall across an area
- Results across two settings, like price and budget
- Signal strength or noise across a room

## What you get

- Height lines every 50 meters drawn with marching squares in plain JavaScript
- A soft color fill from green lowland to pale summit
- Thicker lines every 200 meters
- A trail that draws itself from the car park to the top
- Hover anywhere, or move a marker with the arrow keys, to read the height
- A table of heights along the trail

## How the code works

```js
// Color a grid of cells by height (the base of a contour map)
const height = (x, y) => 150 + 460 * Math.exp(-(((x - 0.6) / 0.18) ** 2 + ((y - 0.45) / 0.2) ** 2));
const cols = 40, rows = 25, cell = 14;

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < cols; i++) {
    const z = height(i / cols, j / rows), t = (z - 150) / 460;
    drawRect(i * cell, j * cell, cell, cell, 'rgb(' + Math.round(200 - 40 * t) + ',' + Math.round(225 - 90 * t) + ',' + Math.round(180 - 80 * t) + ')');
  }
}
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called contour-plot.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
