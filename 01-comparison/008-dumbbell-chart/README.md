# Dumbbell Chart in HTML, CSS and JavaScript (Free)

![Dumbbell Chart example: commute times before and after a new tram line](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/008-dumbbell-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/008-dumbbell-chart/

Free dumbbell chart made with HTML, CSS and vanilla JavaScript for before and after comparisons. Sort by change and download one file.

## What is a dumbbell chart?

A dumbbell chart shows two values for each item as two dots joined by a line. It looks like a dumbbell from the gym. The length of the line shows the gap, and the side of each dot shows which value is higher.

It is the clearest way to show a before and after change, or the gap between two groups, for many items at once. Sorting by the size of the change puts the biggest story at the top.

## At a glance

- **Best for:** Before and after, or the gap between two groups
- **Data you need:** A name and two numbers for each item
- **Skip it when:** More than two values per item. Use a dot plot.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Results before and after a change or project
- This year against last year for many items
- The gap between two groups, like men and women
- Planned against actual time or cost

## What you get

- A gray dot for before and a blue dot for after
- The after dot slides into place so the change is felt
- The minutes saved are written at the end of every row
- Sort by biggest time saved or by district name
- Separate tooltips for the before and after dot
- Keyboard support and a data table with the change

## How the code works

```js
const districts = [['Millbrook', 61, 43], ['Cathedral', 29, 27]];
const x = min => 110 + (min - 20) / 50 * 450; // 20 to 70 minutes

districts.forEach(([name, before, after], row) => {
  const y = 30 + row * 40;
  drawLine(x(before), y, x(after), y, '#0077b6', 3);
  drawCircle(x(before), y, 9, '#9aa9b6');
  drawCircle(x(after), y, 9, '#0077b6');
  drawText(x(before) + 16, y + 4, '-' + (before - after) + ' min');
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called dumbbell-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
