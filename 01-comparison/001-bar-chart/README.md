# Bar Chart in HTML, CSS and JavaScript (Free)

![Bar Chart example: weekly bread sales at a bakery](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/001-bar-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/001-bar-chart/

Free bar chart made with HTML, CSS and vanilla JavaScript. No library. Sortable bars, tooltips, keyboard support and a data table. One file to download.

## What is a bar chart?

A bar chart is a chart that compares amounts using bars of different heights. Each bar stands for one item, and the taller the bar, the bigger the number. It is the most used chart in the world because almost anyone can read it in a second.

Bar charts work best when you have a list of separate things, like products, cities or teams, and one number for each. The bars always start at zero, so the length of each bar is honest about the size of the value.

## At a glance

- **Best for:** Comparing one number across 3 to 15 items
- **Data you need:** A name and a number for each item
- **Skip it when:** Showing change over many dates. Use a line chart.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Sales by product or by store
- Votes, sign ups or orders by category
- Survey answers with one number each
- Any ranking where the reader wants the biggest item

## What you get

- Pure SVG bars drawn with about 60 lines of plain JavaScript
- A sort switch that reorders bars from most to least
- The top value is highlighted so the main point stands out
- Tooltips on hover and on keyboard focus
- Labels tilt on small screens so nothing overlaps
- A hidden data table for screen readers and copying

## How the code works

```js
const data = [['Sourdough', 412], ['Rye', 268], ['Baguette', 355]];
const h = 300, gap = 20, barWidth = 120;
const max = Math.max(...data.map(d => d[1]));

data.forEach(([name, value], i) => {
  const barHeight = value / max * (h - 40);
  const x = gap + i * (barWidth + gap);
  drawRect(x, h - 20 - barHeight, barWidth, barHeight, '#3d6b4f');
  drawText(x + barWidth / 2, h - 4, name, 'middle');
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called bar-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
