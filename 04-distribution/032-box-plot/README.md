# Box Plot in HTML, CSS and JavaScript (Free)

![Box Plot example: monthly rent for flats in six neighborhoods](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/04-distribution/032-box-plot/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/04-distribution/032-box-plot/

Free box plot made with HTML, CSS and vanilla JavaScript. Quartiles, whiskers, outliers and an option to show every point. One file to download.

## What is a box plot?

A box plot, also called a box and whisker plot, sums up a set of numbers in five values. The box holds the middle half of the data, the line inside is the median, and the whiskers reach out to the usual lowest and highest values.

Anything far outside the whiskers is drawn as a dot, so unusual values stand out right away. Box plots are compact, which makes them ideal for comparing many groups side by side.

## At a glance

- **Best for:** Comparing the spread of several groups
- **Data you need:** A list of numbers for each group
- **Skip it when:** Groups with two peaks. A violin plot shows them.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Rent, prices or salaries by area
- Test scores by class or school
- Delivery times by region
- Lab or quality results by batch

## What you get

- Quartiles and medians worked out in plain JavaScript
- Whiskers that follow the standard 1.5 times the box height rule
- Unusual listings drawn as red dots with their own tooltips
- A switch to show every flat as a faint dot on top of the boxes
- Groups sorted from most to least expensive
- Keyboard support and a table of all five numbers

## How the code works

```js
const rents = [1850, 1920, 1990, 2050, 2100, 2140, 2200, 2280, 2340, 2410, 2780];
const s = rents.slice().sort((a, b) => a - b);
const q = p => { const i = (s.length - 1) * p, lo = Math.floor(i); return s[lo] + (s[Math.ceil(i)] - s[lo]) * (i - lo); };
const q1 = q(0.25), median = q(0.5), q3 = q(0.75), iqr = q3 - q1;
const low = s.find(v => v >= q1 - 1.5 * iqr), high = s.filter(v => v <= q3 + 1.5 * iqr).pop();
const y = v => 280 - (v - 1600) / 1400 * 260;

drawLine(100, y(low), 100, y(high), '#172335', 1.5);             // whiskers
drawRect(70, y(q3), 60, y(q1) - y(q3), '#e3eaf8');              // box
drawLine(70, y(median), 130, y(median), '#3558a8', 3);           // median
s.filter(v => v > high || v < low).forEach(v => drawCircle(100, y(v), 4, '#d1495b'));
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called box-plot.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
