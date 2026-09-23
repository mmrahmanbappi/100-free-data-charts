# Funnel Chart in HTML, CSS and JavaScript (Free)

![Funnel Chart example: shoppers moving from first visit to purchase in an online shop](preview.png)

**Live demo:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/028-funnel-chart/demo.html
**Details and code:** https://mmrahmanbappi.github.io/100-free-data-charts/03-part-to-whole/028-funnel-chart/

Free funnel chart made with HTML, CSS and vanilla JavaScript for sales and sign up steps. Drop off between steps and two views. One file to download.

## What is a funnel chart?

A funnel chart shows how many people make it through each step of a process, like visiting a shop, adding to cart and buying. Each step is a bar, and the bars get narrower as people drop out.

It shows where you lose the most people, which is where you should work first. The lost number between steps is often more useful than the step totals themselves.

## At a glance

- **Best for:** Steps in a process where people drop out
- **Data you need:** A name and a count for each step, in order
- **Skip it when:** Steps that are not in a fixed order.
- **Made with:** HTML, CSS and vanilla JavaScript. No library.

## When to use it

- Online shop checkout steps
- Sign up and onboarding flows
- Sales pipelines from lead to deal
- Job applications from applied to hired

## What you get

- Centered bars that shrink with each step
- Soft shapes between bars that show the flow
- The number and share lost between every step
- A switch between share of all visitors and step to step
- Bars grow out from the middle on load
- Keyboard support and a full data table

## How the code works

```js
const steps = [['Visited', 48200], ['Viewed a product', 21700], ['Added to cart', 7900], ['Bought', 2600]];
const cx = 320, maxW = 400, rowH = 60;

steps.forEach(([name, count], i) => {
  const w = count / steps[0][1] * maxW;
  drawRect(cx - w / 2, i * rowH, w, 40, '#5a3fd1');
  drawText(cx - maxW / 2 - 10, i * rowH + 25, name, 'end');
  drawText(cx + maxW / 2 + 10, i * rowH + 25, (count / steps[0][1] * 100).toFixed(1) + '%');
});
```

## How to use

1. **Download the file.** Click Download HTML file above. You get one file called funnel-chart.html with everything inside.
2. **Change the data.** Open the file in any code editor and find the DATA list near the bottom. Replace the names and numbers with your own.
3. **Change the colors and text.** Colors are at the top of the style tag. The title, subtitle and main point are plain HTML near the top of the body.
4. **Put it online.** Upload the file to any host, such as GitHub Pages, Netlify or your own server, or paste it into your site. There is no build step.

## License

MIT. Free for personal and commercial use.
