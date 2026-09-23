# Slope Chart in HTML, CSS and JavaScript (Free)

![Slope Chart example: guest ratings for eight hotels in 2025 and 2026](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/02-trends-over-time/019-slope-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/02-trends-over-time/019-slope-chart/

Free slope chart made with HTML, CSS and vanilla JavaScript for comparing two points in time. Up and down colors, labels that never overlap. One file to download.

## What is a slope chart?

A slope chart compares two points in time for many items. Each item is a line from its first value on the left to its second value on the right. Lines that go up improved and lines that go down got worse.

The angle of each line tells the story at once. It is also the best way to show changes in rank, because lines that cross show items passing each other.

## At a glance

- **Best for:** Many items compared at two moments
- **Data you need:** A name and two numbers for each item
- **Skip it when:** More than two points in time. Use a line chart.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Ratings or scores this year against last year
- Rankings before and after a change
- Prices in two different years
- Results for each team at the start and the end of a project

## What you get

- Green lines for gains and red lines for drops
- Labels that move apart so they never overlap
- Filters to show all hotels, only drops or only gains
- A wide invisible hover area on each line so it is easy to point at
- Lines grow from left to right on load
- Keyboard support and a table with the change

## How the code works

```js
const hotels = [['Station', 6.9, 7.6], ['Harbor', 8.7, 8.5], ['Downtown', 8.1, 8.6]];
const left = 150, right = 450;
const y = r => 280 - (r - 6.5) / 2.7 * 260;

hotels.forEach(([name, before, after]) => {
  const color = after >= before ? '#1f7a5c' : '#c2452d';
  drawLine(left, y(before), right, y(after), color, 3);
  drawText(left - 10, y(before) + 4, name + ' ' + before, 'end');
  drawText(right + 10, y(after) + 4, after + ' ' + name);
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called slope-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
