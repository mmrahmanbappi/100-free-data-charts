# Heatmap in HTML, CSS and JavaScript (Free)

![Heatmap example: gym check-ins by day and hour](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/05-relationships/043-heatmap/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/05-relationships/043-heatmap/

Free heatmap made with HTML, CSS and vanilla JavaScript. A color grid of busy times with hover and full keyboard control. One file to download.

## What is a heatmap?

A heatmap is a grid of squares where color shows a value. Rows and columns are two categories, like days and hours, and darker squares mean bigger numbers.

Patterns jump out at once: the after work rush, quiet weekend evenings, busy Monday. People read color faster than numbers, which is why heatmaps are so popular for times and schedules.

## At a glance

- **Best for:** Patterns across two categories, like day and hour
- **Data you need:** A number for every row and column pair
- **Skip it when:** When exact values matter more than the pattern.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Busy times for shops, gyms or websites
- Sales by product and month
- Support tickets by team and weekday
- Any table of numbers people need to scan fast

## What you get

- A 7 by 17 grid built from plain SVG squares
- One color scale from pale to deep purple
- Numbers inside the squares when there is room
- Arrow keys move around the grid one square at a time
- Tooltips with the share of the busiest hour
- Short labels on phones and a full data table

## How the code works

```js
const days = ['Mon', 'Tue', 'Wed'];
const counts = [[27, 40, 30, 15, 60, 103], [31, 48, 33, 14, 57, 95], [30, 50, 32, 13, 51, 90]];
const max = 103, size = 40;

counts.forEach((row, i) => {
  drawText(40, 60 + i * size + 25, days[i], 'end');
  row.forEach((v, j) => {
    const t = v / max;
    const color = 'rgb(' + Math.round(247 - 173 * t) + ',' + Math.round(240 - 220 * t) + ',' + Math.round(252 - 142 * t) + ')';
    drawRect(50 + j * size, 60 + i * size, size - 3, size - 3, color);
  });
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called heatmap.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
