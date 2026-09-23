# Histogram in HTML, CSS and JavaScript (Free)

![Histogram example: delivery times for 600 pizza orders](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/04-distribution/031-histogram/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/04-distribution/031-histogram/

Free histogram made with HTML, CSS and vanilla JavaScript. Adjustable bin width, median and target lines, tooltips and keyboard support. One file to download.

## What is a histogram?

A histogram is a chart that shows how a set of numbers is spread out. It groups the numbers into ranges, called bins, and draws a bar for each range. The taller the bar, the more values fall in that range.

It shows the shape of your data at a glance: where most values sit, whether there is a long tail, and whether there are two peaks. Changing the bin width can reveal more detail or smooth out noise.

## At a glance

- **Best for:** Seeing how one set of numbers is spread
- **Data you need:** A list of numbers, usually 50 or more
- **Skip it when:** Comparing separate categories. Use a bar chart.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Delivery, wait or response times
- Order values or basket sizes
- Test scores or survey ratings
- Ages, heights or any measured value

## What you get

- Bins counted in plain JavaScript from the raw numbers
- A switch between 2, 5 and 10 minute bins
- A dashed line for the median and one for the 30 minute promise
- Bars past the promise use a stronger color
- Tooltips with the count and share of orders
- A data table that updates with the bin width

## How the code works

```js
const minutes = [22.4, 18.9, 31.2, 26.5, 24.1, 41.8, 19.7, 27.3, 23.0, 35.6];
const binWidth = 5, from = 10, to = 50;
const bins = [];
for (let b = from; b < to; b += binWidth) bins.push(minutes.filter(v => v >= b && v < b + binWidth).length);
const max = Math.max(...bins), barW = 560 / bins.length;

bins.forEach((count, i) => {
  const h = count / max * 250;
  drawRect(40 + i * barW, 280 - h, barW - 1, h, '#f08a6c');
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called histogram.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
