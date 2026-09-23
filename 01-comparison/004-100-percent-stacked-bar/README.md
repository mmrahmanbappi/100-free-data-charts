# 100% Stacked Bar Chart in HTML, CSS and JavaScript (Free)

![100% Stacked Bar Chart example: customer survey results for five grocery stores](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/004-100-percent-stacked-bar/demo.html
**Details and code:** https://mmrahmanbappi.github.io/70-free-data-charts/01-comparison/004-100-percent-stacked-bar/

Free 100% stacked bar chart made with HTML, CSS and vanilla JavaScript. Built for survey and Likert results. Sort, hover and download one file.

## What is a 100% stacked bar chart?

A 100% stacked bar chart shows how a whole is split into shares. Every bar has the same length because every bar is 100%. The colored pieces inside show what percent each answer or part takes.

This chart is the standard way to show survey answers on a scale, like very unhappy to very happy. Because all bars are the same length, you can compare the mix between groups even when the groups had different numbers of people.

## At a glance

- **Best for:** Survey answers and shares across groups
- **Data you need:** Percentages per group that add up to 100
- **Skip it when:** When the real totals matter. Use a normal stacked bar.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Customer or staff survey results
- Market share by region
- Device mix of your visitors by country
- Time spent on tasks by team

## What you get

- Horizontal bars so store names read easily
- Colors run from red to green so the mood is clear at a glance
- Percent labels inside every piece that has room
- Sort by name or by happiest store
- Tooltips show the percent and the number of people
- Keyboard support and a full data table

## How the code works

```js
const answers = ['#b83a2f', '#e8935a', '#c9ccc4', '#7fbf8e', '#2e7d4f'];
const stores = [['Elm Road', [6, 10, 22, 38, 24]], ['Hillcrest', [3, 7, 15, 41, 34]]];
const width = 500; // 100% of the bar

stores.forEach(([name, shares], row) => {
  let x = 120;
  shares.forEach((pct, i) => {
    const w = pct / 100 * width;
    drawRect(x, 20 + row * 50, w, 34, answers[i]);
    x += w;
  });
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called 100-percent-stacked-bar.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
