# Line Chart in HTML, CSS and JavaScript (Free)

![Line Chart example: new members each month for a yoga studio app](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/02-trends-over-time/011-line-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/02-trends-over-time/011-line-chart/

Free line chart made with HTML, CSS and vanilla JavaScript. No library. Hover crosshair, arrow key support, range switch and notes. One file to download.

## What is a line chart?

A line chart is a chart that shows how a number changes over time by joining data points with a line. Time runs from left to right, and the height of the line shows the value at each moment.

Line charts are the best way to show a trend. The eye follows the line and sees at once whether things are going up, going down or repeating, like a rush of new members every January.

## At a glance

- **Best for:** One number tracked over days, months or years
- **Data you need:** A date and a number for each point in time
- **Skip it when:** Comparing separate items with no order. Use a bar chart.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Sign ups, sales or visitors per month
- Prices or rates over time
- Temperatures, weights or any reading taken regularly
- Showing seasonal patterns, like a yearly peak

## What you get

- A smooth SVG line with a point for every month
- A crosshair that follows the mouse and shows the value and the change from the month before
- Arrow keys move the crosshair for keyboard users
- A switch between two years and the last 12 months
- Notes on the chart that explain the January peaks
- The line draws itself from left to right on load

## How the code works

```js
const values = [320, 340, 310, 420, 460, 510, 480, 530];
const w = 600, h = 300;
const max = Math.max(...values);
const points = values.map((v, i) => [40 + i * (w - 60) / (values.length - 1), h - 30 - v / max * (h - 60)]);

make('path', {
  d: points.map((p, i) => (i ? 'L' : 'M') + p[0] + ',' + p[1]).join(''),
  fill: 'none', stroke: '#0f7b8a', 'stroke-width': 3
});
points.forEach(p => drawCircle(p[0], p[1], 4, '#0f7b8a'));
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called line-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
