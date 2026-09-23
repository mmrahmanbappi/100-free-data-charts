# 100 Free Data Charts

Charts you can put on any website, built with plain HTML, CSS and vanilla JavaScript. No chart library, no framework, no build step. Each chart has a live demo, a guide on when to use it and a single HTML file you can download.

**Live gallery:** https://mmrahmanbappi.github.io/100-free-data-charts/

![Bar chart preview](01-comparison/001-bar-chart/preview.png)

## All charts

| # | Chart | Example | Live | Preview |
|---|---|---|---|---|
| 001 | [Bar Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/001-bar-chart/) | Weekly bread sales at a bakery | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/001-bar-chart/demo.html) | <img src="01-comparison/001-bar-chart/preview.png" width="260" alt="Bar Chart preview"> |
| 002 | [Grouped Bar Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/002-grouped-bar-chart/) | Cinema ticket sales for three locations per quarter | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/002-grouped-bar-chart/demo.html) | <img src="01-comparison/002-grouped-bar-chart/preview.png" width="260" alt="Grouped Bar Chart preview"> |
| 003 | [Stacked Bar Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/003-stacked-bar-chart/) | Website visits by source for an outdoor shop | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/003-stacked-bar-chart/demo.html) | <img src="01-comparison/003-stacked-bar-chart/preview.png" width="260" alt="Stacked Bar Chart preview"> |
| 004 | [100% Stacked Bar Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/004-100-percent-stacked-bar/) | Customer survey results for five grocery stores | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/004-100-percent-stacked-bar/demo.html) | <img src="01-comparison/004-100-percent-stacked-bar/preview.png" width="260" alt="100% Stacked Bar Chart preview"> |
| 005 | [Horizontal Bar Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/005-horizontal-bar-chart/) | The most borrowed library books of the year | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/005-horizontal-bar-chart/demo.html) | <img src="01-comparison/005-horizontal-bar-chart/preview.png" width="260" alt="Horizontal Bar Chart preview"> |
| 006 | [Lollipop Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/006-lollipop-chart/) | Average delivery time by city with a 24 hour target | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/006-lollipop-chart/demo.html) | <img src="01-comparison/006-lollipop-chart/preview.png" width="260" alt="Lollipop Chart preview"> |
| 007 | [Dot Plot](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/007-dot-plot/) | Small, medium and large latte prices in eight cities | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/007-dot-plot/demo.html) | <img src="01-comparison/007-dot-plot/preview.png" width="260" alt="Dot Plot preview"> |
| 008 | [Dumbbell Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/008-dumbbell-chart/) | Commute times before and after a new tram line | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/008-dumbbell-chart/demo.html) | <img src="01-comparison/008-dumbbell-chart/preview.png" width="260" alt="Dumbbell Chart preview"> |
| 009 | [Bullet Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/009-bullet-chart/) | Solar panel installs against target for six regions | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/009-bullet-chart/demo.html) | <img src="01-comparison/009-bullet-chart/preview.png" width="260" alt="Bullet Chart preview"> |
| 010 | [Diverging Bar Chart](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/010-diverging-bar-chart/) | Visitor gains and losses for ten city parks | [Demo](https://mmrahmanbappi.github.io/100-free-data-charts/01-comparison/010-diverging-bar-chart/demo.html) | <img src="01-comparison/010-diverging-bar-chart/preview.png" width="260" alt="Diverging Bar Chart preview"> |

## Categories

- 1. Comparison Charts (live)
- 2. Trends Over Time (coming soon)
- 3. Part to Whole (coming soon)
- 4. Distribution (coming soon)
- 5. Relationships (coming soon)
- 6. Flow and Network (coming soon)
- 7. Dashboard Widgets (coming soon)
- 8. Maps and Globes (coming soon)
- 9. 3D Charts (coming soon)
- 10. 3D Science and Space (coming soon)

## How to use a chart

1. Open the chart folder and download `demo.html`.
2. Replace the numbers in the `DATA` list with your own.
3. Change the colors at the top of the style tag.
4. Upload it anywhere: GitHub Pages, Netlify, Vercel or your own server.

## Why no library?

Libraries are great, but for one chart on one page they add weight you do not need. These charts use SVG, which every browser already understands, and a few dozen lines of JavaScript. You can read every line and change anything.

## Build the pages yourself

The pages, READMEs and sitemap are generated from `scripts/charts.js`.

```
node scripts/build.js        # pages, READMEs, sitemap
node scripts/screenshot.js   # preview images (needs Chrome)
```

## License

MIT. Use these charts in personal and commercial projects. A star on the repo helps more people find them.
