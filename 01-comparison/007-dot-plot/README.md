# Dot Plot in HTML, CSS and JavaScript (Free)

![Dot Plot example: small, medium and large latte prices in eight cities](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/007-dot-plot/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/007-dot-plot/

Free dot plot made with HTML, CSS and vanilla JavaScript. Compare several values per row on one line. Sort, hide sizes, and download one file.

## What is a dot plot?

A dot plot shows values as dots on a line, one row per item. It is a simple way to compare several values for each item, like three sizes of coffee, without drawing three sets of bars.

Because a dot is a point and not a length, a dot plot does not need to start at zero. You can zoom in on the range where your data lives, which makes small differences easier to see.

## At a glance

- **Best for:** Two or three values per item, side by side
- **Data you need:** A name and 2 or 3 numbers for each item
- **Skip it when:** Showing amounts as size. Use bars for that.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Prices of the same product in different cities
- Low, average and high scores per class
- Men and women, or two age groups, per country
- Planned and actual values per project

## What you get

- One row per city with a soft line from lowest to highest price
- Three dot colors for small, medium and large
- Hide a size from the key and the lines adjust
- Sort by medium price or by city name
- An axis zoomed to the price range, from $3 to $6
- Tooltips, keyboard support and a data table

## How the code works

```js
const cities = [['Boston', [4.1, 4.9, 5.6]], ['Phoenix', [3.2, 3.8, 4.4]]];
const colors = ['#c7a8e8', '#8a5cc7', '#4b2a86'];
const x = price => 100 + (price - 3) / 3 * 480; // $3 to $6

cities.forEach(([city, prices], row) => {
  const y = 30 + row * 40;
  drawLine(x(Math.min(...prices)), y, x(Math.max(...prices)), y, '#e8e2ee', 6);
  prices.forEach((p, i) => drawCircle(x(p), y, 9, colors[i]));
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called dot-plot.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
