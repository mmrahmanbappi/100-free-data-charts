# Stacked Bar Chart in HTML, CSS and JavaScript (Free)

![Stacked Bar Chart example: website visits by source for an outdoor shop](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/003-stacked-bar-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/003-stacked-bar-chart/

Free stacked bar chart made with HTML, CSS and vanilla JavaScript. Totals on top, parts inside, hide any part from the key. One file to download.

## What is a stacked bar chart?

A stacked bar chart shows a total and the parts that make it up in one bar. Each bar is split into colored pieces, one for each part, stacked from the bottom up. The full height of the bar is the total.

It answers two questions at once: how big is the total, and what is it made of? It works best with a few parts, where the bottom part is the one people care about most, because the bottom piece is the easiest to compare.

## At a glance

- **Best for:** Totals that are made of 2 to 5 parts
- **Data you need:** A table of groups with one number per part
- **Skip it when:** Comparing the middle parts closely. Use grouped bars.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Website visits by traffic source
- Revenue by product line each month
- Budget spent by department
- Energy use by type across the year

## What you get

- Parts stacked with a running total
- The total is written on top of every bar
- Hide any part from the key and the stack rebuilds
- Tooltips show the value and its share of the month
- Thin white gaps between parts so colors never blur
- Keyboard support and a data table with totals

## How the code works

```js
const months = ['Jan', 'Feb', 'Mar'];
const parts = [
  { name: 'Search', color: '#2f6f5e', values: [8200, 8600, 9400] },
  { name: 'Social', color: '#6fb59a', values: [3100, 4200, 3900] }
];
const scale = 260 / 16000; // pixels per visit

months.forEach((m, i) => {
  let stacked = 0;
  parts.forEach(p => {
    const h = p.values[i] * scale;
    drawRect(40 + i * 120, 280 - stacked - h, 80, h, p.color);
    stacked += h;
  });
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called stacked-bar-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
