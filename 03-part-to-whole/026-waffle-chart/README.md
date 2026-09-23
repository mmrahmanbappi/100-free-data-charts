# Waffle Chart in HTML, CSS and JavaScript (Free)

![Waffle Chart example: how 100 new customers found a furniture shop](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/026-waffle-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/026-waffle-chart/

Free waffle chart made with HTML, CSS and vanilla JavaScript. 100 squares that make percentages easy to picture, with highlight on click. One file to download.

## What is a waffle chart?

A waffle chart is a grid of 100 squares where each square stands for 1%. The squares are colored by group, so 34 blue squares means 34 out of every 100.

People find it easier to picture 34 out of 100 people than a 34% slice of a pie. That makes waffle charts a friendly choice for reports and websites aimed at a general audience.

## At a glance

- **Best for:** Percentages that people should be able to picture
- **Data you need:** Whole number shares that add up to 100
- **Skip it when:** Many small groups or decimals.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- How customers found you
- Survey results for a general audience
- Share of people in each group
- Charity and public health reports

## What you get

- 100 squares in a 10 by 10 grid, filled in reading order
- A list with the big numbers next to the grid
- Click a source in the key to pick it out and fade the rest
- The squares fill in one by one on load
- Hover any square to see its group
- Stacks on phones with the list under the grid

## How the code works

```js
const groups = [['Friends and family', 34, '#3d5a80'], ['Web search', 27, '#98c1d9'], ['Instagram', 18, '#ee6c4d'], ['Walked past', 12, '#e0b04b'], ['Ads', 9, '#6b9080']];
const size = 28, gap = 4;
let i = 0;

groups.forEach(([name, count, color]) => {
  for (let n = 0; n < count; n++, i++) {
    const col = i % 10, row = Math.floor(i / 10);
    drawRect(col * size, row * size, size - gap, size - gap, color);
  }
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called waffle-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
