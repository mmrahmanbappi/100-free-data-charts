# Correlation Matrix in HTML, CSS and JavaScript (Free)

![Correlation Matrix example: what drives daily sales at a cafe](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/05-relationships/044-correlation-matrix/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/05-relationships/044-correlation-matrix/

Free correlation matrix made with HTML, CSS and vanilla JavaScript. Color coded correlation values with plain English tooltips. One file to download.

## What is a correlation matrix?

A correlation matrix is a grid that shows how strongly each pair of measures rises and falls together. Each square holds a number from -1 to +1, and color makes the strong links easy to spot.

A value near +1 means the two go up together, near -1 means one goes up as the other goes down, and near 0 means there is no clear link. Only half the grid is shown, because the other half would repeat it.

## At a glance

- **Best for:** Finding which measures are linked
- **Data you need:** Several numbers recorded for the same items or days
- **Skip it when:** Proving cause and effect. It only shows links.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Sales against weather, footfall and day of week
- Survey questions that tend to be answered alike
- Health, fitness or sensor readings
- Choosing which measures to track

## What you get

- Correlation values shown in a lower triangle so nothing repeats
- Blue for together, red for opposite, fading to white near zero
- Tooltips that explain each value in plain English
- Every square can be reached with the Tab key
- Numbers inside squares when there is room
- A full correlation table for copying

## How the code works

```js
const names = ['Temperature', 'Iced drinks', 'Hot drinks'];
const m = [[1, 0.86, -0.55], [0.86, 1, -0.36], [-0.55, -0.36, 1]];
const size = 70;

for (let i = 0; i < names.length; i++) {
  for (let j = 0; j <= i; j++) {
    const r = m[i][j], alpha = 0.1 + Math.abs(r) * 0.9;
    drawRect(120 + j * size, 20 + i * size, size - 4, size - 4, (r >= 0 ? 'rgba(43,108,176,' : 'rgba(201,60,60,') + alpha + ')');
    drawText(120 + j * size + 33, 20 + i * size + 38, r.toFixed(2), 'middle');
  }
  drawText(110, 20 + i * size + 38, names[i], 'end');
}
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called correlation-matrix.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
