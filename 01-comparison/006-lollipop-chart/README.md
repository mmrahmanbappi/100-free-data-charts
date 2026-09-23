# Lollipop Chart in HTML, CSS and JavaScript (Free)

![Lollipop Chart example: average delivery time by city with a 24 hour target](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/006-lollipop-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/006-lollipop-chart/

Free lollipop chart made with HTML, CSS and vanilla JavaScript. A clean bar chart alternative with a target line. Sort and download one file.

## What is a lollipop chart?

A lollipop chart is a bar chart where each bar is replaced by a thin stick with a dot on top. It shows the same thing as a bar chart, but with far less ink, so a chart with many items still looks clean.

The dot draws the eye to the exact value. That makes lollipop charts a good fit when you also have a target or limit line, because the dots above and below the line are easy to spot.

## At a glance

- **Best for:** Many items where a bar chart feels heavy
- **Data you need:** A name and a number for each item
- **Skip it when:** Very small differences. Bars show those better.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Delivery or response times against a target
- Scores for 10 or more teams
- Monthly figures on a dashboard with little space
- Rankings in reports and slides

## What you get

- Sticks and dots that grow up from the axis
- A dashed target line with its own label
- Dots turn orange when they miss the target
- Sort by fastest or slowest
- Tooltips say how far each city is from the target
- Keyboard support and a data table

## How the code works

```js
const cities = [['Leeds', 18.4], ['Belfast', 31.2]];
const target = 24;
const y = hours => 280 - hours / 35 * 260;

cities.forEach(([city, hours], i) => {
  const x = 60 + i * 60;
  const color = hours <= target ? '#0e7c66' : '#d9480f';
  drawLine(x, 280, x, y(hours), color, 3);   // the stick
  drawCircle(x, y(hours), 10, color);         // the dot
});
drawLine(40, y(target), 600, y(target), '#d9480f', 1.5, '6 5');
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called lollipop-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
