# Grouped Bar Chart in HTML, CSS and JavaScript (Free)

![Grouped Bar Chart example: cinema ticket sales for three locations per quarter](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/002-grouped-bar-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/002-grouped-bar-chart/

Free grouped bar chart made with HTML, CSS and vanilla JavaScript. Compare several series side by side, hide any series from the key. One file to download.

## What is a grouped bar chart?

A grouped bar chart, also called a clustered bar chart, puts two or more bars next to each other for every category. Each color stands for one series, so you can compare series inside a group and see how groups change.

Use it when you have two ways to split your data, like quarter and location. The reader can compare Downtown with Harbor inside one quarter, or follow one color across the year.

## At a glance

- **Best for:** Comparing 2 to 4 series across a few groups
- **Data you need:** A table with groups as rows and series as columns
- **Skip it when:** More than 4 series. The groups get too crowded.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Sales for several stores per quarter
- This year compared with last year by month
- Survey results split by age group
- Test scores by class and subject

## What you get

- Bars grouped with a simple inner band layout
- Click any name in the key to hide or show that series
- The axis rescales when series are hidden
- Short value labels like 18.4k above each bar
- Dark theme with colors that stay readable
- Tooltips, keyboard focus and a data table

## How the code works

```js
const groups = ['Q1', 'Q2', 'Q3', 'Q4'];
const series = [
  { name: 'Downtown', color: '#f2b134', values: [18400, 21200, 26800, 31500] },
  { name: 'Harbor', color: '#6c8cff', values: [12100, 14900, 19700, 17800] }
];
const groupWidth = 600 / groups.length;
const barWidth = groupWidth * 0.8 / series.length;
const max = Math.max(...series.flatMap(s => s.values));

groups.forEach((g, gi) => {
  series.forEach((s, si) => {
    const x = gi * groupWidth + groupWidth * 0.1 + si * barWidth;
    const barHeight = s.values[gi] / max * 260;
    drawRect(x, 280 - barHeight, barWidth - 4, barHeight, s.color);
  });
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called grouped-bar-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
