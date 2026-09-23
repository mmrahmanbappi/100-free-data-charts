# Horizontal Bar Chart in HTML, CSS and JavaScript (Free)

![Horizontal Bar Chart example: the most borrowed library books of the year](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/005-horizontal-bar-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/005-horizontal-bar-chart/

Free horizontal bar chart made with HTML, CSS and vanilla JavaScript. Long labels stay readable. Top 5 or top 10 switch. One file to download.

## What is a horizontal bar chart?

A horizontal bar chart is a bar chart turned on its side. The bars grow from left to right, and the labels sit on the left where there is plenty of room to read them.

It is the best choice for rankings and for long labels, like book titles, product names or survey questions. People read top to bottom, so a sorted horizontal chart reads like a top 10 list.

## At a glance

- **Best for:** Rankings and items with long names
- **Data you need:** A name and a number for each item, sorted
- **Skip it when:** Dates or time. Time should run left to right.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Top 10 products, pages or search terms
- Survey questions with long wording
- Country or city rankings
- Most read articles or most borrowed books

## What you get

- Labels on the left with up to 250 pixels of room
- On phones the label moves above each bar
- A Top 5 and Top 10 switch
- The top three are highlighted in a stronger color
- Values written at the end of every bar
- Tooltips with the rank, keyboard support and a data table

## How the code works

```js
const books = [['The Quiet Orchard', 876], ['Salt and Silver', 1163]];
books.sort((a, b) => b[1] - a[1]); // biggest first
const max = books[0][1];

books.forEach(([title, count], i) => {
  const y = i * 36;
  drawText(240, y + 20, title, 'end');       // label on the left
  drawRect(250, y + 6, count / max * 400, 22, '#3b4cca');
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called horizontal-bar-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
