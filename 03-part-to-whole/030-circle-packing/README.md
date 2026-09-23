# Circle Packing Chart in HTML, CSS and JavaScript (Free)

![Circle Packing Chart example: staff at a food company grouped by department and team](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/030-circle-packing/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/030-circle-packing/

Free circle packing chart made with HTML, CSS and vanilla JavaScript. Nested circles sized by value, with a packing layout written from scratch. One file to download.

## What is a circle packing chart?

A circle packing chart shows groups as big circles with smaller circles packed inside them. The area of each circle matches its value, so bigger teams get bigger circles.

It uses space less efficiently than a treemap, but the round shapes make the groups very easy to see. It is a friendly way to show the structure of a company, a budget or a collection.

## At a glance

- **Best for:** Groups and the items inside them, shown softly
- **Data you need:** A group, a name and a value for each item
- **Skip it when:** Comparing values exactly. Circle areas are hard to judge.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Company teams by headcount
- Products grouped by category
- Topics grouped by theme
- Budgets for a public or general audience

## What you get

- A packing layout where each circle touches two others
- Circle area, not radius, matches headcount so sizes are honest
- Department circles with their teams packed inside
- The layout turns sideways on wide screens to use the space
- Names shorten to fit small circles
- Tooltips, keyboard support and a data table

## How the code works

```js
// Place circles side by side, sized by area (simple version of packing)
const teams = [['Drivers', 31], ['Prep cooks', 22], ['Cashiers', 18], ['Chefs', 14]];
let x = 20;

teams.forEach(([name, people]) => {
  const r = Math.sqrt(people) * 10; // area matches the value
  drawCircle(x + r, 150, r, '#c05a2e');
  drawText(x + r, 154, name, 'middle');
  x += r * 2 + 8;
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called circle-packing.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
