// Content for every chart. Add new categories and charts here, then run: node scripts/build.js
// Copy rules: plain human language, short sentences, no em or en dashes, readers aged 20 to 50.

const SITE = {
  name: '70 Free Data Charts',
  base: 'https://mmrahmanbappi.github.io/70-free-data-charts/',
  repo: 'https://github.com/mmrahmanbappi/70-free-data-charts',
  author: 'mmrahmanbappi',
  author_url: 'https://github.com/mmrahmanbappi',
  published: '2026-09-23',
};

const CATEGORIES = [
  {
    num: 1, slug: '01-comparison', name: 'Comparison Charts', ready: true,
    keywords: 'bar chart html, comparison chart javascript, grouped bar chart, stacked bar chart, lollipop chart, dumbbell chart, bullet chart',
    title: 'Free Comparison Charts in HTML and JavaScript: Bar, Stacked, Bullet',
    desc: '10 free comparison charts made with HTML, CSS and vanilla JavaScript. Bar, grouped, stacked, 100% stacked, lollipop, dot plot, dumbbell, bullet and diverging.',
    intro: 'Comparison charts answer the most common question people ask about data: which one is bigger? These ten charts cover every way to compare values, from a simple bar chart to before and after dumbbells and target tracking bullet charts. Each one is a single HTML file with no library. Open the demo, change the numbers and put it on your site.',
  },
  {
    num: 2, slug: '02-trends-over-time', name: 'Trends Over Time', ready: true,
    keywords: 'line chart html, time series chart javascript, area chart, stacked area chart, streamgraph, candlestick chart, sparkline, slope chart',
    title: 'Free Time Series Charts in HTML and JavaScript: Line, Area, Candlestick',
    desc: '10 free time series charts made with HTML, CSS and vanilla JavaScript. Line, multi line, area, stacked area, streamgraph, step, sparkline, candlestick, slope, horizon.',
    intro: 'These charts show how numbers change over days, months and years. Start with a simple line chart, add more lines to compare, fill the area to show volume, or use a candlestick chart for prices. Every chart has a crosshair you can move with your mouse or the arrow keys, and every one is a single HTML file with no library.',
  },
  {
    num: 3, slug: '03-part-to-whole', name: 'Part to Whole', ready: true,
    keywords: 'pie chart html, donut chart javascript, treemap, sunburst chart, waffle chart, funnel chart, marimekko chart, circle packing',
    title: 'Free Part to Whole Charts in HTML and JavaScript: Pie, Donut, Treemap',
    desc: '10 free part to whole charts made with HTML, CSS and vanilla JavaScript. Pie, donut, semi donut, treemap, sunburst, waffle, Marimekko, funnel, icicle, circle packing.',
    intro: 'These charts show how a whole splits into parts: how people paid, where money goes, what fills a drive. Use a pie or donut for a few simple shares, a waffle when you want people to picture the numbers, and a treemap, sunburst or icicle for nested data. Each chart is one HTML file with no library.',
  },
  {
    num: 4, slug: '04-distribution', name: 'Distribution', ready: true,
    keywords: 'histogram html, box plot javascript, violin plot, density plot, ridgeline plot, beeswarm, population pyramid, error bars, ecdf',
    title: 'Free Distribution Charts in HTML and JavaScript: Histogram, Box Plot, Violin',
    desc: '10 free distribution charts made with HTML, CSS and vanilla JavaScript. Histogram, box plot, violin, density, ridgeline, beeswarm, strip plot, pyramid, error bars, ECDF.',
    intro: 'An average only tells part of the story. These charts show how numbers are spread out: where most values sit, how wide the range is, and which ones are unusual. Use a histogram for one set of numbers, a box or violin plot to compare groups, and a beeswarm or strip plot when you want every single value on show. All ten are single HTML files with no library.',
  },
  {
    num: 5, slug: '05-relationships', name: 'Relationships', ready: true,
    keywords: 'scatter plot html, bubble chart javascript, heatmap, correlation matrix, radar chart, parallel coordinates, quadrant chart, contour plot',
    title: 'Free Relationship Charts in HTML and JavaScript: Scatter, Bubble, Heatmap',
    desc: '10 free relationship charts made with HTML, CSS and vanilla JavaScript. Scatter, bubble, heatmap, correlation matrix, connected scatter, hexbin, contour, radar, parallel coordinates, quadrant.',
    intro: 'These charts show how two or more measures relate to each other. Does price drop as miles go up? Which hours are busiest? Which campaign gave the best value? Start with a scatter plot, add size with a bubble chart, or use a heatmap when both measures are categories. Every chart here is one HTML file with no library.',
  },
  {
    num: 6, slug: '06-flow-and-network', name: 'Flow and Network', ready: true,
    keywords: 'sankey diagram html, chord diagram javascript, network graph, arc diagram, alluvial diagram, tree diagram, dendrogram, org chart, flowchart, radial tree',
    title: 'Free Flow and Network Charts in HTML and JavaScript: Sankey, Chord, Tree',
    desc: '10 free flow and network charts made with HTML, CSS and vanilla JavaScript. Sankey, chord, arc, network graph, alluvial, tree, dendrogram, org chart, flowchart, radial tree.',
    intro: 'Some data is about connections: where people go next, who knows whom, how a company or a website is organized. These charts show flows between steps, links between people and the shape of hierarchies. Every layout, from the Sankey bands to the force directed network, is written in plain JavaScript in a single HTML file.',
  },
  {
    num: 7, slug: '07-dashboard-widgets', name: 'Dashboard Widgets', ready: true,
    keywords: 'gauge chart html, progress ring javascript, kpi card, calendar heatmap, gantt chart, waterfall chart, word cloud, pictogram, radial bar chart, timeline',
    title: 'Free Dashboard Widgets in HTML and JavaScript: Gauge, KPI Cards, Gantt',
    desc: '10 free dashboard widgets made with HTML, CSS and vanilla JavaScript. Gauge, progress rings, KPI cards, calendar heatmap, Gantt, waterfall, word cloud, pictogram, radial bar, timeline.',
    intro: 'Dashboards need more than bars and lines. These ten widgets cover the pieces people ask for most: a gauge for a score, rings for daily goals, KPI cards with trend lines, a year of activity, a project plan, a profit breakdown, a word cloud and more. Each one is a single HTML file with no library, ready to drop into your own dashboard.',
  },
];

const CHARTS = [
  {
    num: 1, cat: '01-comparison', slug: '001-bar-chart', name: 'Bar Chart',
    example: 'weekly bread sales at a bakery',
    title: 'Free Bar Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free bar chart made with HTML, CSS and vanilla JavaScript. No library. Sortable bars, tooltips, keyboard support and a data table. One file to download.',
    keywords: 'bar chart html, bar chart javascript, bar chart without library, svg bar chart, vertical bar chart, free bar chart template',
    what: [
      'A bar chart is a chart that compares amounts using bars of different heights. Each bar stands for one item, and the taller the bar, the bigger the number. It is the most used chart in the world because almost anyone can read it in a second.',
      'Bar charts work best when you have a list of separate things, like products, cities or teams, and one number for each. The bars always start at zero, so the length of each bar is honest about the size of the value.',
    ],
    glance: { best: 'Comparing one number across 3 to 15 items', data: 'A name and a number for each item', avoid: 'Showing change over many dates. Use a line chart.' },
    when: ['Sales by product or by store', 'Votes, sign ups or orders by category', 'Survey answers with one number each', 'Any ranking where the reader wants the biggest item'],
    instead: [['003-stacked-bar-chart', 'Your bars are made of parts, like sales by channel'], ['005-horizontal-bar-chart', 'Your labels are long, like book titles'], ['006-lollipop-chart', 'You have many bars and want a lighter look']],
    features: ['Pure SVG bars drawn with about 60 lines of plain JavaScript', 'A sort switch that reorders bars from most to least', 'The top value is highlighted so the main point stands out', 'Tooltips on hover and on keyboard focus', 'Labels tilt on small screens so nothing overlaps', 'A hidden data table for screen readers and copying'],
    code: `const data = [['Sourdough', 412], ['Rye', 268], ['Baguette', 355]];
const h = 300, gap = 20, barWidth = 120;
const max = Math.max(...data.map(d => d[1]));

data.forEach(([name, value], i) => {
  const barHeight = value / max * (h - 40);
  const x = gap + i * (barWidth + gap);
  drawRect(x, h - 20 - barHeight, barWidth, barHeight, '#3d6b4f');
  drawText(x + barWidth / 2, h - 4, name, 'middle');
});`,
    faq: [
      ['How do I make a bar chart in HTML without a library?', 'Draw it with SVG. Create one rect element per value, set its height from the value, and place it along the bottom. This template does exactly that in plain JavaScript, so there is nothing to install.'],
      ['Should a bar chart always start at zero?', 'Yes. People judge bars by their length. If the axis starts at 100 instead of 0, a small difference looks huge. Start at zero so the bars tell the truth.'],
      ['What is the difference between a bar chart and a histogram?', 'A bar chart compares separate items, like breads or cities, and the bars have gaps. A histogram shows how numbers are spread across ranges, like ages 20 to 29 and 30 to 39, and the bars touch.'],
      ['How many bars can a bar chart have?', 'Up to about 15 is comfortable. With more than that, sort the bars, show the top 10, or switch to a horizontal bar chart so the labels fit.'],
    ],
  },
  {
    num: 2, cat: '01-comparison', slug: '002-grouped-bar-chart', name: 'Grouped Bar Chart',
    example: 'cinema ticket sales for three locations per quarter',
    title: 'Free Grouped Bar Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free grouped bar chart made with HTML, CSS and vanilla JavaScript. Compare several series side by side, hide any series from the key. One file to download.',
    keywords: 'grouped bar chart, clustered bar chart, side by side bar chart javascript, multi series bar chart html, grouped column chart',
    what: [
      'A grouped bar chart, also called a clustered bar chart, puts two or more bars next to each other for every category. Each color stands for one series, so you can compare series inside a group and see how groups change.',
      'Use it when you have two ways to split your data, like quarter and location. The reader can compare Downtown with Harbor inside one quarter, or follow one color across the year.',
    ],
    glance: { best: 'Comparing 2 to 4 series across a few groups', data: 'A table with groups as rows and series as columns', avoid: 'More than 4 series. The groups get too crowded.' },
    when: ['Sales for several stores per quarter', 'This year compared with last year by month', 'Survey results split by age group', 'Test scores by class and subject'],
    instead: [['003-stacked-bar-chart', 'The total of each group matters more than each part'], ['008-dumbbell-chart', 'You only have two series, like before and after']],
    features: ['Bars grouped with a simple inner band layout', 'Click any name in the key to hide or show that series', 'The axis rescales when series are hidden', 'Short value labels like 18.4k above each bar', 'Dark theme with colors that stay readable', 'Tooltips, keyboard focus and a data table'],
    code: `const groups = ['Q1', 'Q2', 'Q3', 'Q4'];
const series = [
  { name: 'Downtown', color: '#f2b134', values: [18400, 21200, 26800, 31500] },
  { name: 'Harbor', color: '#6c8cff', values: [12100, 14900, 19700, 17800] }
];
const groupWidth = 600 / groups.length;
const barWidth = groupWidth * 0.8 / series.length;
const max = Math.max(...series.flatMap(s => s.values));

groups.forEach((g, gi) => {
  series.forEach((s, si) => {
    const x = gi * groupWidth + groupWidth * 0.1 + si * barWidth;
    const barHeight = s.values[gi] / max * 260;
    drawRect(x, 280 - barHeight, barWidth - 4, barHeight, s.color);
  });
});`,
    faq: [
      ['What is the difference between a grouped and a stacked bar chart?', 'A grouped bar chart puts bars side by side, so each value is easy to compare. A stacked bar chart piles them on top of each other, so the total is easy to see but the middle parts are harder to compare.'],
      ['How many series should a grouped bar chart have?', 'Two to four works best. With five or more colors in every group, readers lose track. Split the chart into small charts instead.'],
      ['Is a clustered bar chart the same as a grouped bar chart?', 'Yes. Clustered bar chart, grouped bar chart and side by side bar chart all mean the same thing.'],
      ['Can I hide a series in this chart?', 'Yes. Click a name in the key above the chart. The bars for that series disappear and the axis adjusts to the ones left.'],
    ],
  },
  {
    num: 3, cat: '01-comparison', slug: '003-stacked-bar-chart', name: 'Stacked Bar Chart',
    example: 'website visits by source for an outdoor shop',
    title: 'Free Stacked Bar Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free stacked bar chart made with HTML, CSS and vanilla JavaScript. Totals on top, parts inside, hide any part from the key. One file to download.',
    keywords: 'stacked bar chart, stacked column chart javascript, stacked bar chart html, stacked bar chart without library, svg stacked bar',
    what: [
      'A stacked bar chart shows a total and the parts that make it up in one bar. Each bar is split into colored pieces, one for each part, stacked from the bottom up. The full height of the bar is the total.',
      'It answers two questions at once: how big is the total, and what is it made of? It works best with a few parts, where the bottom part is the one people care about most, because the bottom piece is the easiest to compare.',
    ],
    glance: { best: 'Totals that are made of 2 to 5 parts', data: 'A table of groups with one number per part', avoid: 'Comparing the middle parts closely. Use grouped bars.' },
    when: ['Website visits by traffic source', 'Revenue by product line each month', 'Budget spent by department', 'Energy use by type across the year'],
    instead: [['004-100-percent-stacked-bar', 'You care about shares, not totals'], ['002-grouped-bar-chart', 'You need to compare every part exactly']],
    features: ['Parts stacked with a running total', 'The total is written on top of every bar', 'Hide any part from the key and the stack rebuilds', 'Tooltips show the value and its share of the month', 'Thin white gaps between parts so colors never blur', 'Keyboard support and a data table with totals'],
    code: `const months = ['Jan', 'Feb', 'Mar'];
const parts = [
  { name: 'Search', color: '#2f6f5e', values: [8200, 8600, 9400] },
  { name: 'Social', color: '#6fb59a', values: [3100, 4200, 3900] }
];
const scale = 260 / 16000; // pixels per visit

months.forEach((m, i) => {
  let stacked = 0;
  parts.forEach(p => {
    const h = p.values[i] * scale;
    drawRect(40 + i * 120, 280 - stacked - h, 80, h, p.color);
    stacked += h;
  });
});`,
    faq: [
      ['When should I use a stacked bar chart?', 'Use it when the total matters and you also want to show what it is made of, like visits split by source. If only the parts matter, a grouped bar chart is easier to read.'],
      ['Which part should go at the bottom of the stack?', 'Put the most important or the largest part at the bottom. It sits on a flat baseline, so it is the only part people can compare accurately across bars.'],
      ['How many parts can a stacked bar chart have?', 'Keep it to five or fewer. More colors make the middle pieces too thin to read.'],
      ['What is the difference between a stacked bar chart and a 100% stacked bar chart?', 'A normal stacked bar shows real numbers, so bar heights differ. A 100% stacked bar makes every bar the same height and shows percentages, so you compare shares instead of totals.'],
    ],
  },
  {
    num: 4, cat: '01-comparison', slug: '004-100-percent-stacked-bar', name: '100% Stacked Bar Chart',
    example: 'customer survey results for five grocery stores',
    title: 'Free 100% Stacked Bar Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free 100% stacked bar chart made with HTML, CSS and vanilla JavaScript. Built for survey and Likert results. Sort, hover and download one file.',
    keywords: '100 percent stacked bar chart, percent stacked bar javascript, likert scale chart, survey results chart html, stacked percentage bar',
    what: [
      'A 100% stacked bar chart shows how a whole is split into shares. Every bar has the same length because every bar is 100%. The colored pieces inside show what percent each answer or part takes.',
      'This chart is the standard way to show survey answers on a scale, like very unhappy to very happy. Because all bars are the same length, you can compare the mix between groups even when the groups had different numbers of people.',
    ],
    glance: { best: 'Survey answers and shares across groups', data: 'Percentages per group that add up to 100', avoid: 'When the real totals matter. Use a normal stacked bar.' },
    when: ['Customer or staff survey results', 'Market share by region', 'Device mix of your visitors by country', 'Time spent on tasks by team'],
    instead: [['003-stacked-bar-chart', 'The size of each total matters too'], ['010-diverging-bar-chart', 'You have one positive or negative number per item']],
    features: ['Horizontal bars so store names read easily', 'Colors run from red to green so the mood is clear at a glance', 'Percent labels inside every piece that has room', 'Sort by name or by happiest store', 'Tooltips show the percent and the number of people', 'Keyboard support and a full data table'],
    code: `const answers = ['#b83a2f', '#e8935a', '#c9ccc4', '#7fbf8e', '#2e7d4f'];
const stores = [['Elm Road', [6, 10, 22, 38, 24]], ['Hillcrest', [3, 7, 15, 41, 34]]];
const width = 500; // 100% of the bar

stores.forEach(([name, shares], row) => {
  let x = 120;
  shares.forEach((pct, i) => {
    const w = pct / 100 * width;
    drawRect(x, 20 + row * 50, w, 34, answers[i]);
    x += w;
  });
});`,
    faq: [
      ['What is a 100% stacked bar chart used for?', 'It shows shares of a whole. It is the most common chart for survey answers on a scale, because every group gets the same length and you compare the mix, not the size.'],
      ['How do I show Likert scale survey results?', 'Use a 100% stacked bar with one bar per group and colors running from negative to positive answers. Put neutral in the middle, like this template does.'],
      ['Do the values need to add up to 100?', 'Yes. Convert your counts to percentages first. If your numbers are counts, divide each by the row total and multiply by 100.'],
      ['Why are the bars horizontal?', 'Group names like store names are easier to read on the left side. Horizontal bars also match the way people read a scale, from left to right.'],
    ],
  },
  {
    num: 5, cat: '01-comparison', slug: '005-horizontal-bar-chart', name: 'Horizontal Bar Chart',
    example: 'the most borrowed library books of the year',
    title: 'Free Horizontal Bar Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free horizontal bar chart made with HTML, CSS and vanilla JavaScript. Long labels stay readable. Top 5 or top 10 switch. One file to download.',
    keywords: 'horizontal bar chart, horizontal bar chart javascript, horizontal bar chart html css, ranking chart, top 10 chart html',
    what: [
      'A horizontal bar chart is a bar chart turned on its side. The bars grow from left to right, and the labels sit on the left where there is plenty of room to read them.',
      'It is the best choice for rankings and for long labels, like book titles, product names or survey questions. People read top to bottom, so a sorted horizontal chart reads like a top 10 list.',
    ],
    glance: { best: 'Rankings and items with long names', data: 'A name and a number for each item, sorted', avoid: 'Dates or time. Time should run left to right.' },
    when: ['Top 10 products, pages or search terms', 'Survey questions with long wording', 'Country or city rankings', 'Most read articles or most borrowed books'],
    instead: [['001-bar-chart', 'Your labels are short and you have few items'], ['006-lollipop-chart', 'You have many items and want less ink']],
    features: ['Labels on the left with up to 250 pixels of room', 'On phones the label moves above each bar', 'A Top 5 and Top 10 switch', 'The top three are highlighted in a stronger color', 'Values written at the end of every bar', 'Tooltips with the rank, keyboard support and a data table'],
    code: `const books = [['The Quiet Orchard', 876], ['Salt and Silver', 1163]];
books.sort((a, b) => b[1] - a[1]); // biggest first
const max = books[0][1];

books.forEach(([title, count], i) => {
  const y = i * 36;
  drawText(240, y + 20, title, 'end');       // label on the left
  drawRect(250, y + 6, count / max * 400, 22, '#3b4cca');
});`,
    faq: [
      ['When should I use a horizontal bar chart instead of a vertical one?', 'Use horizontal bars when your labels are long or when you are showing a ranking. Use vertical bars for short labels and for anything over time.'],
      ['Should horizontal bars be sorted?', 'Almost always. Sorting from largest to smallest turns the chart into a ranked list that people can read in one pass.'],
      ['How do I stop long labels from being cut off?', 'Give the left side a fixed width for labels, and on small screens put the label above the bar. This template does both.'],
      ['Is a horizontal bar chart the same as a row chart?', 'Yes. Row chart and horizontal bar chart are two names for the same thing.'],
    ],
  },
  {
    num: 6, cat: '01-comparison', slug: '006-lollipop-chart', name: 'Lollipop Chart',
    example: 'average delivery time by city with a 24 hour target',
    title: 'Free Lollipop Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free lollipop chart made with HTML, CSS and vanilla JavaScript. A clean bar chart alternative with a target line. Sort and download one file.',
    keywords: 'lollipop chart, lollipop chart javascript, lollipop chart html, bar chart alternative, target line chart',
    what: [
      'A lollipop chart is a bar chart where each bar is replaced by a thin stick with a dot on top. It shows the same thing as a bar chart, but with far less ink, so a chart with many items still looks clean.',
      'The dot draws the eye to the exact value. That makes lollipop charts a good fit when you also have a target or limit line, because the dots above and below the line are easy to spot.',
    ],
    glance: { best: 'Many items where a bar chart feels heavy', data: 'A name and a number for each item', avoid: 'Very small differences. Bars show those better.' },
    when: ['Delivery or response times against a target', 'Scores for 10 or more teams', 'Monthly figures on a dashboard with little space', 'Rankings in reports and slides'],
    instead: [['001-bar-chart', 'You have a few items and want the simplest chart'], ['007-dot-plot', 'You have more than one value per item']],
    features: ['Sticks and dots that grow up from the axis', 'A dashed target line with its own label', 'Dots turn orange when they miss the target', 'Sort by fastest or slowest', 'Tooltips say how far each city is from the target', 'Keyboard support and a data table'],
    code: `const cities = [['Leeds', 18.4], ['Belfast', 31.2]];
const target = 24;
const y = hours => 280 - hours / 35 * 260;

cities.forEach(([city, hours], i) => {
  const x = 60 + i * 60;
  const color = hours <= target ? '#0e7c66' : '#d9480f';
  drawLine(x, 280, x, y(hours), color, 3);   // the stick
  drawCircle(x, y(hours), 10, color);         // the dot
});
drawLine(40, y(target), 600, y(target), '#d9480f', 1.5, '6 5');`,
    faq: [
      ['What is a lollipop chart used for?', 'It is used in the same places as a bar chart, when you compare one number across items. It looks lighter, so it works well with many items or next to a target line.'],
      ['Is a lollipop chart better than a bar chart?', 'Not better, just lighter. Bars are easier for judging small differences. Lollipops are cleaner when there are many items or when the exact point matters.'],
      ['How do I add a target line to a chart?', 'Draw a horizontal line at the target value across the full width of the chart and add a small label. Color the items above or below it so the result is obvious.'],
      ['Does a lollipop chart need to start at zero?', 'Yes. The stick length stands for the value, just like a bar, so the axis should start at zero.'],
    ],
  },
  {
    num: 7, cat: '01-comparison', slug: '007-dot-plot', name: 'Dot Plot',
    example: 'small, medium and large latte prices in eight cities',
    title: 'Free Dot Plot Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free dot plot made with HTML, CSS and vanilla JavaScript. Compare several values per row on one line. Sort, hide sizes, and download one file.',
    keywords: 'dot plot, dot plot chart javascript, cleveland dot plot, dot chart html, compare values chart',
    what: [
      'A dot plot shows values as dots on a line, one row per item. It is a simple way to compare several values for each item, like three sizes of coffee, without drawing three sets of bars.',
      'Because a dot is a point and not a length, a dot plot does not need to start at zero. You can zoom in on the range where your data lives, which makes small differences easier to see.',
    ],
    glance: { best: 'Two or three values per item, side by side', data: 'A name and 2 or 3 numbers for each item', avoid: 'Showing amounts as size. Use bars for that.' },
    when: ['Prices of the same product in different cities', 'Low, average and high scores per class', 'Men and women, or two age groups, per country', 'Planned and actual values per project'],
    instead: [['008-dumbbell-chart', 'You have exactly two values, like before and after'], ['002-grouped-bar-chart', 'The values are amounts that should start at zero']],
    features: ['One row per city with a soft line from lowest to highest price', 'Three dot colors for small, medium and large', 'Hide a size from the key and the lines adjust', 'Sort by medium price or by city name', 'An axis zoomed to the price range, from $3 to $6', 'Tooltips, keyboard support and a data table'],
    code: `const cities = [['Boston', [4.1, 4.9, 5.6]], ['Phoenix', [3.2, 3.8, 4.4]]];
const colors = ['#c7a8e8', '#8a5cc7', '#4b2a86'];
const x = price => 100 + (price - 3) / 3 * 480; // $3 to $6

cities.forEach(([city, prices], row) => {
  const y = 30 + row * 40;
  drawLine(x(Math.min(...prices)), y, x(Math.max(...prices)), y, '#e8e2ee', 6);
  prices.forEach((p, i) => drawCircle(x(p), y, 9, colors[i]));
});`,
    faq: [
      ['What is a dot plot?', 'A dot plot is a chart that shows values as dots along a line, one row per item. It is often used to compare two or three values for each item.'],
      ['What is a Cleveland dot plot?', 'It is the same chart, named after the statistician William Cleveland, who showed that people read dot positions more accurately than bar areas.'],
      ['Does a dot plot need to start at zero?', 'No. Dots mark a position, not a length, so you can start the axis near your lowest value. Bar charts are different and must start at zero.'],
      ['What is the difference between a dot plot and a scatter plot?', 'A dot plot has categories on one side, like cities. A scatter plot has numbers on both axes and shows how two numbers relate.'],
    ],
  },
  {
    num: 8, cat: '01-comparison', slug: '008-dumbbell-chart', name: 'Dumbbell Chart',
    example: 'commute times before and after a new tram line',
    title: 'Free Dumbbell Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free dumbbell chart made with HTML, CSS and vanilla JavaScript for before and after comparisons. Sort by change and download one file.',
    keywords: 'dumbbell chart, dumbbell plot javascript, before and after chart, connected dot plot, gap chart html',
    what: [
      'A dumbbell chart shows two values for each item as two dots joined by a line. It looks like a dumbbell from the gym. The length of the line shows the gap, and the side of each dot shows which value is higher.',
      'It is the clearest way to show a before and after change, or the gap between two groups, for many items at once. Sorting by the size of the change puts the biggest story at the top.',
    ],
    glance: { best: 'Before and after, or the gap between two groups', data: 'A name and two numbers for each item', avoid: 'More than two values per item. Use a dot plot.' },
    when: ['Results before and after a change or project', 'This year against last year for many items', 'The gap between two groups, like men and women', 'Planned against actual time or cost'],
    instead: [['002-grouped-bar-chart', 'The values are amounts and you have few items'], ['010-diverging-bar-chart', 'Only the change matters, not the two values']],
    features: ['A gray dot for before and a blue dot for after', 'The after dot slides into place so the change is felt', 'The minutes saved are written at the end of every row', 'Sort by biggest time saved or by district name', 'Separate tooltips for the before and after dot', 'Keyboard support and a data table with the change'],
    code: `const districts = [['Millbrook', 61, 43], ['Cathedral', 29, 27]];
const x = min => 110 + (min - 20) / 50 * 450; // 20 to 70 minutes

districts.forEach(([name, before, after], row) => {
  const y = 30 + row * 40;
  drawLine(x(before), y, x(after), y, '#0077b6', 3);
  drawCircle(x(before), y, 9, '#9aa9b6');
  drawCircle(x(after), y, 9, '#0077b6');
  drawText(x(before) + 16, y + 4, '-' + (before - after) + ' min');
});`,
    faq: [
      ['What is a dumbbell chart used for?', 'It shows the change between two values for each item, like before and after, or the gap between two groups. It is great when you have many items to compare.'],
      ['What is another name for a dumbbell chart?', 'People also call it a dumbbell plot, a connected dot plot, a gap chart or a barbell chart.'],
      ['How is a dumbbell chart different from a slope chart?', 'A dumbbell chart puts both values on the same row, which is easy to scan. A slope chart draws a line from a left axis to a right axis, which is better for showing who went up and who went down.'],
      ['How should I sort a dumbbell chart?', 'Sort by the size of the gap so the biggest change is at the top. Offer a second sort by name so people can find their own item.'],
    ],
  },
  {
    num: 9, cat: '01-comparison', slug: '009-bullet-chart', name: 'Bullet Chart',
    example: 'solar panel installs against target for six regions',
    title: 'Free Bullet Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free bullet chart made with HTML, CSS and vanilla JavaScript for KPIs and goals. Actual, target and ranges in one row. Download one file.',
    keywords: 'bullet chart, bullet graph javascript, kpi chart html, target vs actual chart, goal chart',
    what: [
      'A bullet chart shows a result, a target and how good the result is, all in one row. A dark bar shows the actual value, a short line shows the target, and gray bands behind show ranges like poor, fair and good.',
      'It was designed by Stephen Few as a small, honest replacement for dashboard gauges. You can stack many bullet charts in the space of one gauge, so a whole sales team fits on a single screen.',
    ],
    glance: { best: 'Goals, targets and KPIs on dashboards', data: 'Actual, target and 2 or 3 range limits per row', avoid: 'Showing trends. Pair it with a line chart.' },
    when: ['Sales against quota by rep or region', 'Budget spent against budget planned', 'Website goals like sign ups against target', 'Project progress against the plan'],
    instead: [['006-lollipop-chart', 'You only have one shared target for all items'], ['001-bar-chart', 'There are no targets or ranges']],
    features: ['Three gray range bands behind each bar', 'An orange target mark that is easy to spot', 'Percent of target written at the end of every row', 'Rows under target get an orange percent', 'Sort by best against target or by region name', 'Tooltips, keyboard support and a data table'],
    code: `const regions = [['South', 188, 170, [120, 150, 200]], ['East', 97, 140, [95, 125, 165]]];
const x = v => 90 + v / 200 * 450;
const bands = ['#cbc3a8', '#dcd6c2', '#eeeadf'];

regions.forEach(([name, actual, target, ranges], row) => {
  const y = 20 + row * 60;
  [...ranges].reverse().forEach((r, i) => drawRect(90, y, x(r) - 90, 40, bands[2 - i]));
  drawRect(90, y + 13, x(actual) - 90, 14, '#22211b');     // actual
  drawLine(x(target), y + 5, x(target), y + 35, '#e85d04', 4); // target
});`,
    faq: [
      ['What is a bullet chart?', 'A bullet chart is a bar that shows an actual value against a target, with shaded bands behind it for ranges like poor, fair and good. It is used on dashboards to track goals.'],
      ['Who invented the bullet chart?', 'Stephen Few, a data visualization expert, designed it in 2005 as a compact replacement for gauges and meters on dashboards.'],
      ['Why use a bullet chart instead of a gauge?', 'A bullet chart shows the same information in a fraction of the space and is easier to compare. Ten bullet charts fit where one gauge would.'],
      ['What do the gray bands mean in a bullet chart?', 'They show qualitative ranges. Here the darkest band is poor, the middle is fair and the lightest is good. You set the limits for each row.'],
    ],
  },
  {
    num: 10, cat: '01-comparison', slug: '010-diverging-bar-chart', name: 'Diverging Bar Chart',
    example: 'visitor gains and losses for ten city parks',
    title: 'Free Diverging Bar Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free diverging bar chart made with HTML, CSS and vanilla JavaScript for gains and losses. Positive right, negative left. Download one file.',
    keywords: 'diverging bar chart, positive negative bar chart, diverging bar chart javascript, gain loss chart html, percent change chart',
    what: [
      'A diverging bar chart shows positive and negative values going in opposite directions from a center line. Bars for gains go right, bars for losses go left, and each side gets its own color.',
      'It makes growth and decline clear at a glance. Use it for percent change, profit and loss, or any number that can be above or below zero or a target.',
    ],
    glance: { best: 'Values that can be positive or negative', data: 'A name and one number for each item, above or below zero', avoid: 'Values that are all positive. Use a normal bar chart.' },
    when: ['Percent change against last year', 'Profit and loss by product or store', 'Budget over or under by department', 'Temperature or score above or below average'],
    instead: [['008-dumbbell-chart', 'You want to show both the old and new values'], ['004-100-percent-stacked-bar', 'You have agree and disagree shares for survey questions']],
    features: ['A center line at zero with bars growing both ways', 'Green for growth, red for decline', 'Park names sit on the opposite side of each bar so they never overlap', 'Values with a plus or minus sign at the end of every bar', 'Sort by change or by park name', 'Tooltips, keyboard support and a data table'],
    code: `const parks = [['Beacon Hill', 24.1], ['Heron Marsh', -19.3]];
const zero = 320;
const x = pct => zero + pct / 30 * 280; // -30% to +30%

parks.forEach(([name, change], row) => {
  const y = 20 + row * 40;
  const up = change >= 0;
  drawRect(Math.min(zero, x(change)), y, Math.abs(x(change) - zero), 28, up ? '#13806b' : '#d1495b');
  drawText(up ? zero - 10 : zero + 10, y + 19, name, up ? 'end' : 'start');
});`,
    faq: [
      ['What is a diverging bar chart?', 'It is a bar chart where bars go left or right from a center line, depending on whether the value is negative or positive. It is used for change, profit and loss, and anything above or below a baseline.'],
      ['How do I show negative values in a bar chart?', 'Put zero in the middle and let negative bars grow to the left and positive bars to the right, each in its own color. That is exactly what a diverging bar chart does.'],
      ['Where should labels go in a diverging bar chart?', 'Put each label on the other side of the center line from its bar. That way labels never sit on top of bars, even when values are large.'],
      ['Which colors work best for gains and losses?', 'Use two clearly different colors, like green and red or blue and orange. Blue and orange are safer for people with red and green color blindness.'],
    ],
  },

  {
    num: 11, cat: '02-trends-over-time', slug: '011-line-chart', name: 'Line Chart',
    example: 'new members each month for a yoga studio app',
    title: 'Free Line Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free line chart made with HTML, CSS and vanilla JavaScript. No library. Hover crosshair, arrow key support, range switch and notes. One file to download.',
    keywords: 'line chart html, line chart javascript, line chart without library, svg line chart, time series chart, free line chart template',
    what: [
      'A line chart is a chart that shows how a number changes over time by joining data points with a line. Time runs from left to right, and the height of the line shows the value at each moment.',
      'Line charts are the best way to show a trend. The eye follows the line and sees at once whether things are going up, going down or repeating, like a rush of new members every January.',
    ],
    glance: { best: 'One number tracked over days, months or years', data: 'A date and a number for each point in time', avoid: 'Comparing separate items with no order. Use a bar chart.' },
    when: ['Sign ups, sales or visitors per month', 'Prices or rates over time', 'Temperatures, weights or any reading taken regularly', 'Showing seasonal patterns, like a yearly peak'],
    instead: [['012-multi-line-chart', 'You want to compare two to five things over the same time'], ['013-area-chart', 'You want to show volume, like total energy made'], ['016-step-line-chart', 'The value changes in jumps and stays flat between them']],
    features: ['A smooth SVG line with a point for every month', 'A crosshair that follows the mouse and shows the value and the change from the month before', 'Arrow keys move the crosshair for keyboard users', 'A switch between two years and the last 12 months', 'Notes on the chart that explain the January peaks', 'The line draws itself from left to right on load'],
    code: `const values = [320, 340, 310, 420, 460, 510, 480, 530];
const w = 600, h = 300;
const max = Math.max(...values);
const points = values.map((v, i) => [40 + i * (w - 60) / (values.length - 1), h - 30 - v / max * (h - 60)]);

make('path', {
  d: points.map((p, i) => (i ? 'L' : 'M') + p[0] + ',' + p[1]).join(''),
  fill: 'none', stroke: '#0f7b8a', 'stroke-width': 3
});
points.forEach(p => drawCircle(p[0], p[1], 4, '#0f7b8a'));`,
    faq: [
      ['How do I make a line chart in HTML without a library?', 'Turn each value into an x and y position, then join the positions into one SVG path using M for the first point and L for the rest. This template does that in plain JavaScript and adds axes, a crosshair and labels.'],
      ['Does a line chart have to start at zero?', 'No, not always. A line chart shows change, so you can zoom in on the range of your data. For counts like members or sales, starting at zero is still the most honest choice, and this template does that.'],
      ['Should I use a smooth or a straight line?', 'Straight lines are the most exact. A gentle curve is easier on the eye for monthly data. Avoid strong smoothing, because it can draw peaks that are not in the data.'],
      ['When should I use a bar chart instead of a line chart?', 'Use bars when the items have no order, like products or cities. Use a line when the items follow each other in time and you care about the trend.'],
    ],
  },
  {
    num: 12, cat: '02-trends-over-time', slug: '012-multi-line-chart', name: 'Multi Line Chart',
    example: 'average home prices in three neighborhoods over ten years',
    title: 'Free Multi Line Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free multi line chart made with HTML, CSS and vanilla JavaScript. Labels at the end of each line, crosshair with all values, toggles. One file to download.',
    keywords: 'multi line chart, multiple line chart javascript, line chart with multiple lines html, compare trends chart, multi series line chart',
    what: [
      'A multi line chart shows two or more lines on the same axes so you can compare how several things changed over the same time. Each line has its own color.',
      'It answers questions like: which neighborhood grew faster, and did they all dip in the same year? Putting the name at the end of each line saves the reader from looking back and forth at a key.',
    ],
    glance: { best: 'Comparing 2 to 5 trends over the same time', data: 'A date and one number per series for each point', avoid: 'More than 5 lines. It turns into spaghetti.' },
    when: ['Prices in several areas or stores', 'Your product against competitors', 'This year, last year and the year before by month', 'Traffic from several channels over time'],
    instead: [['011-line-chart', 'You only track one thing'], ['014-stacked-area-chart', 'The lines add up to a total you care about'], ['019-slope-chart', 'You only have a start and an end value']],
    features: ['Three lines with names written right at the end of each line', 'A crosshair that lists every value for the chosen year, biggest first', 'Click a name in the key to hide or show a line', 'The axis zooms to fit only the lines that are showing', 'On phones the end labels move into the key', 'Arrow key support and a full data table'],
    code: `const years = [2016, 2018, 2020, 2022, 2024, 2026];
const series = [
  { name: 'Old Harbor', color: '#5b3fa8', values: [312, 341, 372, 455, 462, 497] },
  { name: 'Southfield', color: '#1f9e89', values: [189, 201, 218, 276, 292, 321] }
];
const x = i => 50 + i * 90, y = v => 280 - (v - 150) / 350 * 260;

series.forEach(s => {
  const d = s.values.map((v, i) => (i ? 'L' : 'M') + x(i) + ',' + y(v)).join('');
  make('path', { d, fill: 'none', stroke: s.color, 'stroke-width': 3 });
  const last = s.values.length - 1;
  drawText(x(last) + 10, y(s.values[last]) + 4, s.name);
});`,
    faq: [
      ['How many lines can a line chart have?', 'Up to about five. With more, the lines cross so often that nobody can follow them. Highlight one line and gray out the rest, or make small separate charts.'],
      ['Should I use a legend or label the lines directly?', 'Label them directly when you can, by writing the name at the end of each line. It is faster to read. Keep a legend as well for hiding lines and for small screens.'],
      ['Can a multi line chart start above zero?', 'Yes. Line charts show change, so it is fine to zoom in on the range where the data lives, as long as the axis labels make the start value clear.'],
      ['What is the difference between a multi line chart and a stacked area chart?', 'A multi line chart shows each series on its own. A stacked area chart piles them up so you also see the total. Use lines when the series do not add up to anything.'],
    ],
  },
  {
    num: 13, cat: '02-trends-over-time', slug: '013-area-chart', name: 'Area Chart',
    example: 'solar power made each day by a family home',
    title: 'Free Area Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free area chart made with HTML, CSS and vanilla JavaScript. Gradient fill, average line, crosshair and keyboard support. One file to download.',
    keywords: 'area chart html, area chart javascript, svg area chart, gradient area chart, filled line chart',
    what: [
      'An area chart is a line chart with the space under the line filled in. The filled shape shows volume, so it works well for amounts that pile up, like energy made, water used or money earned.',
      'The fill makes the chart easier to read at a glance and gives a stronger sense of how much, not only which way. A soft gradient keeps the shape light so the line on top stays sharp.',
    ],
    glance: { best: 'One amount over time where volume matters', data: 'A date and a number for each point in time', avoid: 'Several overlapping series. The fills hide each other.' },
    when: ['Energy made or used each day', 'Website visits or revenue over time', 'Water, fuel or data usage', 'Any total that builds up over a period'],
    instead: [['011-line-chart', 'You only care about the trend, not the volume'], ['014-stacked-area-chart', 'Your total is made of several parts']],
    features: ['A gradient fill made with an SVG linearGradient', 'A dashed daily average line with its value written on it', 'A crosshair that says how far each day is above or below average', 'Cloudy days are flagged in the tooltip', 'The area reveals from left to right on load', 'Arrow key support and a data table'],
    code: `const values = [24.1, 26.3, 25.8, 18.2, 12.4, 21.7, 27.9];
const x = i => 40 + i * 90, y = v => 280 - v / 35 * 260;
const edge = values.map((v, i) => x(i) + ',' + y(v));

make('path', {
  d: 'M' + edge.join('L') + 'L' + x(values.length - 1) + ',280L' + x(0) + ',280Z',
  fill: '#e8a300', 'fill-opacity': 0.3
});
make('path', { d: 'M' + edge.join('L'), fill: 'none', stroke: '#e8a300', 'stroke-width': 3 });`,
    faq: [
      ['What is the difference between a line chart and an area chart?', 'They show the same data. An area chart fills the space under the line, which puts more weight on the amount. Use a line for the trend and an area when the size of the total matters.'],
      ['Does an area chart need to start at zero?', 'Yes. The filled area stands for the amount, so if the axis starts above zero, the area lies about the size. Line charts can zoom in, area charts should not.'],
      ['How do I add a gradient to an SVG area chart?', 'Add a linearGradient inside defs with two stops, a stronger color at the top and a faint one at the bottom, then set the area fill to url(#yourId). The template shows the exact code.'],
      ['Can I show more than one series in an area chart?', 'You can, but overlapping fills get muddy. Stack the series in a stacked area chart, or use a multi line chart instead.'],
    ],
  },
  {
    num: 14, cat: '02-trends-over-time', slug: '014-stacked-area-chart', name: 'Stacked Area Chart',
    example: 'hours watched each month on a streaming app, by device',
    title: 'Free Stacked Area Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free stacked area chart made with HTML, CSS and vanilla JavaScript. Layers add up to a total, hide any layer, crosshair with shares. One file to download.',
    keywords: 'stacked area chart, stacked area chart javascript, stacked area chart html, cumulative area chart, layered area chart',
    what: [
      'A stacked area chart shows several amounts over time, piled on top of each other. Each colored layer is one part, and the top edge of the whole stack is the total.',
      'It shows two things at once: how the total changed, and how the mix changed inside it. In this example you can see total viewing peak in winter while phones slowly take a bigger share.',
    ],
    glance: { best: 'A total over time and the parts that make it up', data: 'A date and one number per part for each point', avoid: 'Comparing the middle layers exactly. Use lines.' },
    when: ['Viewing, visits or sales by device or channel', 'Energy use by source over the year', 'Revenue by product line each month', 'Team hours split by type of work'],
    instead: [['012-multi-line-chart', 'You need to compare each part exactly'], ['015-streamgraph', 'You have many parts and care more about the flow than exact numbers'], ['003-stacked-bar-chart', 'You only have a few points in time']],
    features: ['Four smooth layers stacked with a running total', 'A crosshair that lists every device with its share and the total', 'Click a device in the key to hide it and restack the rest', 'Dark theme with bright, easy to tell apart colors', 'Layers reveal from left to right on load', 'Arrow key support and a data table with totals'],
    code: `const months = 6;
const layers = [
  { color: '#ff5d73', values: [42, 45, 51, 55, 49, 46] },
  { color: '#ffb547', values: [28, 29, 31, 33, 34, 36] }
];
const x = i => 40 + i * 110, y = v => 280 - v / 100 * 260;
let below = Array(months).fill(0);

layers.forEach(l => {
  const top = below.map((b, i) => b + l.values[i]);
  const up = top.map((v, i) => x(i) + ',' + y(v));
  const down = below.map((v, i) => x(i) + ',' + y(v)).reverse();
  make('path', { d: 'M' + up.join('L') + 'L' + down.join('L') + 'Z', fill: l.color });
  below = top;
});`,
    faq: [
      ['When should I use a stacked area chart?', 'Use it when the total matters and you also want to see how the parts change inside it over time, like viewing by device or energy by source.'],
      ['Which layer should go at the bottom?', 'Put the largest or the most stable layer at the bottom. It sits on a flat baseline, so it is the only layer people can read accurately.'],
      ['What is the difference between a stacked area chart and a streamgraph?', 'A stacked area chart builds up from zero, so you can read the total on the axis. A streamgraph centers the layers on a middle line, which looks more fluid but hides the exact total.'],
      ['How many layers can a stacked area chart have?', 'Keep it to five or fewer. Thin layers in the middle of a tall stack become impossible to read.'],
    ],
  },
  {
    num: 15, cat: '02-trends-over-time', slug: '015-streamgraph', name: 'Streamgraph',
    example: 'weekly listening hours by genre on a radio app',
    title: 'Free Streamgraph in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free streamgraph made with HTML, CSS and vanilla JavaScript. Flowing layers centered on a middle line, labels inside the streams, crosshair. One file to download.',
    keywords: 'streamgraph, streamgraph javascript, stream graph html, theme river chart, flowing area chart',
    what: [
      'A streamgraph is a stacked area chart that flows around a center line instead of sitting on the bottom. Each colored stream is one category, and its thickness shows how big it was at each moment.',
      'It is made for seeing rises and falls across many categories at once. It gives up exact totals in exchange for a clear picture of which streams grow, shrink or take over, like podcasts overtaking rock.',
    ],
    glance: { best: 'Many categories changing over time', data: 'A date and one number per category for each point', avoid: 'When people need exact numbers. Use lines or bars.' },
    when: ['Music, film or book genres over time', 'Topics people search or talk about each week', 'Product categories in an online shop over a year', 'Stories for reports and magazines where the shape is the point'],
    instead: [['014-stacked-area-chart', 'People need to read the total on an axis'], ['012-multi-line-chart', 'You have only a few categories and need exact values']],
    features: ['Six layers centered on a middle line so the chart is balanced', 'Genre names placed inside each stream where it is thickest', 'A crosshair that lists every genre for the chosen week, biggest first', 'Smooth curves that match exactly between layers', 'A slow reveal from left to right on load', 'Arrow key support and a full data table'],
    code: `const weeks = 5;
const streams = [
  { color: '#e4572e', values: [34, 36, 35, 38, 37] },
  { color: '#29335c', values: [30, 29, 28, 27, 26] },
  { color: '#8e5572', values: [9, 12, 15, 19, 22] }
];
const totals = Array.from({ length: weeks }, (v, i) => streams.reduce((a, s) => a + s.values[i], 0));
const x = i => 40 + i * 130, y = v => 160 - v * 1.6;
let below = totals.map(t => -t / 2); // center on the middle line

streams.forEach(s => {
  const top = below.map((b, i) => b + s.values[i]);
  const up = top.map((v, i) => x(i) + ',' + y(v));
  const down = below.map((v, i) => x(i) + ',' + y(v)).reverse();
  make('path', { d: 'M' + up.join('L') + 'L' + down.join('L') + 'Z', fill: s.color });
  below = top;
});`,
    faq: [
      ['What is a streamgraph used for?', 'It shows how many categories rise and fall over time. It is popular in news stories and reports where the overall shape tells the story better than exact numbers.'],
      ['How is a streamgraph different from a stacked area chart?', 'Both stack layers. A stacked area chart starts at zero, so you can read the total. A streamgraph centers the stack on a middle line, which looks smoother and makes each stream easier to follow.'],
      ['Why does a streamgraph have no y axis?', 'Because the layers float around a center line, a single axis would not give useful readings. The tooltip gives exact numbers instead.'],
      ['Is a streamgraph the same as a theme river?', 'Yes. ThemeRiver was an early name for this chart. Streamgraph is the name most people use today.'],
    ],
  },
  {
    num: 16, cat: '02-trends-over-time', slug: '016-step-line-chart', name: 'Step Line Chart',
    example: 'the interest rate on a savings account from 2021 to 2026',
    title: 'Free Step Line Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free step line chart made with HTML, CSS and vanilla JavaScript for prices and rates that change in jumps. Change points with tooltips. One file to download.',
    keywords: 'step line chart, step chart javascript, step line chart html, interest rate chart, price change chart',
    what: [
      'A step line chart shows a value that stays flat and then jumps to a new level, like a price, a rate or a plan limit. Instead of a sloped line between points, it draws a flat line and then a straight jump.',
      'A normal line chart would suggest the rate slowly slid from one level to the next, which never happened. The steps show the truth: the rate stayed the same until the day it changed.',
    ],
    glance: { best: 'Values that change in jumps and hold between them', data: 'The date of each change and the new value', avoid: 'Values measured all the time, like temperature.' },
    when: ['Interest rates and savings rates', 'Prices and subscription fees', 'Stock levels and plan limits', 'Tax bands and minimum wage history'],
    instead: [['011-line-chart', 'The value really changes smoothly between points'], ['018-candlestick-chart', 'You track a price that moves all day']],
    features: ['Flat lines and clean jumps drawn with SVG H and V commands', 'A dot at every change you can hover or reach with Tab', 'Tooltips that say raised or cut, from what to what', 'The peak is marked on the chart', 'A soft fill under the line to show the level', 'Keyboard support and a table of every change'],
    code: `const changes = [[2021, 0.10], [2022.2, 0.75], [2023, 3.00], [2023.5, 3.60], [2025, 2.85]];
const end = 2026.7;
const x = t => 40 + (t - 2021) / (end - 2021) * 540, y = r => 280 - r / 4 * 260;

let d = 'M' + x(changes[0][0]) + ',' + y(changes[0][1]);
changes.slice(1).forEach(([t, rate]) => { d += 'H' + x(t) + 'V' + y(rate); });
d += 'H' + x(end);
make('path', { d, fill: 'none', stroke: '#1b5e4a', 'stroke-width': 3 });
changes.forEach(([t, rate]) => drawCircle(x(t), y(rate), 5, '#1b5e4a'));`,
    faq: [
      ['What is a step line chart?', 'It is a line chart that moves in flat steps and sudden jumps, instead of slopes. It is used for values that stay the same until they change, like rates and prices.'],
      ['When should I use a step chart instead of a line chart?', 'Use a step chart when the value holds steady between changes. A normal line would draw a slope that suggests gradual change, which is misleading for rates, prices or limits.'],
      ['How do I draw steps in SVG?', 'Use the H command to draw flat to the next change date, then V to jump up or down to the new value. Repeat for each change and finish with H to the end date.'],
      ['Should the step happen before or after the date?', 'In most cases the new value starts on the change date, so draw flat until that date and then jump. This template works that way.'],
    ],
  },
  {
    num: 17, cat: '02-trends-over-time', slug: '017-sparkline', name: 'Sparkline',
    example: 'daily sales for six products in a shop dashboard',
    title: 'Free Sparkline Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free sparklines made with HTML, CSS and vanilla JavaScript inside a product table. Best and worst day dots, hover values, sorting. One file to download.',
    keywords: 'sparkline, sparkline javascript, sparkline html css, mini line chart, inline chart table, dashboard sparkline',
    what: [
      'A sparkline is a tiny line chart without axes, small enough to sit inside a table row or next to a number. It shows the shape of a trend in a word sized space.',
      'Sparklines were named by Edward Tufte, who called them data words. They are perfect for dashboards, where you want to see at a glance which products are rising and which are falling without opening a full chart.',
    ],
    glance: { best: 'Many small trends side by side in a table', data: 'A short list of numbers for each row', avoid: 'When people need exact values from the chart itself.' },
    when: ['Product or page lists in dashboards', 'Stock or crypto watch lists', 'KPI cards showing the last 30 days', 'Email reports where space is tight'],
    instead: [['011-line-chart', 'One trend deserves a full size chart'], ['020-horizon-chart', 'You have many long series and need to compare them closely']],
    features: ['Six sparklines inside a normal HTML table', 'A green dot for the best day, red for the slowest and blue for today', 'Hover any sparkline to read the value for that day', 'This week against last week, in green or red', 'Sort by most sold or by biggest change', 'Every sparkline redraws to fit its cell on any screen'],
    code: `const sales = [42, 45, 39, 51, 48, 55, 60, 52, 58, 63];
const w = 160, h = 40;
const lo = Math.min(...sales), hi = Math.max(...sales);
const x = i => 4 + i * (w - 8) / (sales.length - 1);
const y = v => h - 4 - (v - lo) / (hi - lo) * (h - 8);

make('path', { d: sales.map((v, i) => (i ? 'L' : 'M') + x(i) + ',' + y(v)).join(''), fill: 'none', stroke: '#2563c9', 'stroke-width': 2 });
drawCircle(x(sales.indexOf(hi)), y(hi), 3, '#16835a');
drawCircle(x(sales.indexOf(lo)), y(lo), 3, '#c8354b');`,
    faq: [
      ['What is a sparkline?', 'A sparkline is a very small line chart with no axes or labels, usually placed in a table or next to a number, that shows the shape of a recent trend.'],
      ['Who invented sparklines?', 'Edward Tufte, a well known writer on data design, named them and made them popular in his 2006 book Beautiful Evidence.'],
      ['Should a sparkline start at zero?', 'Usually not. A sparkline is about the shape of the trend, so it stretches to fill its space from the lowest to the highest value. Show the actual numbers next to it.'],
      ['How do I add sparklines to an HTML table?', 'Put an empty SVG in each table cell, then draw a short path in each one with JavaScript, sized to the width of the cell. This template does exactly that and redraws when the screen size changes.'],
    ],
  },
  {
    num: 18, cat: '02-trends-over-time', slug: '018-candlestick-chart', name: 'Candlestick Chart',
    example: 'daily share prices and volume for a made up robotics company',
    title: 'Free Candlestick Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free candlestick chart made with HTML, CSS and vanilla JavaScript. Open, high, low, close and volume with a crosshair and range switch. One file to download.',
    keywords: 'candlestick chart, candlestick chart javascript, ohlc chart html, stock chart without library, trading chart html',
    what: [
      'A candlestick chart shows four prices for each day: where the price opened, how high and low it went, and where it closed. The thick body runs from open to close, and the thin lines, called wicks, show the high and the low.',
      'Green candles closed higher than they opened and red candles closed lower. Traders read runs of candles to see buying and selling pressure, and the volume bars below show how busy each day was.',
    ],
    glance: { best: 'Prices that move within each day or period', data: 'Open, high, low and close for each day, plus volume', avoid: 'Audiences who do not trade. A line chart is clearer.' },
    when: ['Stock, fund and crypto prices', 'Currency exchange rates', 'Commodity prices like gold or oil', 'Any price with a daily range'],
    instead: [['011-line-chart', 'You only need the closing price'], ['016-step-line-chart', 'The price only changes now and then']],
    features: ['Candles with bodies and wicks drawn in SVG', 'Volume bars under the price in the same colors', 'A crosshair showing open, high, low, close, change and volume', 'A 30 day and 60 day switch', 'The latest price marked on the right side', 'Trading days only, with weekends skipped automatically'],
    code: `const days = [[48.1, 49.0, 47.6, 48.8], [48.8, 49.5, 48.2, 48.4], [48.4, 50.2, 48.3, 50.0]];
const y = p => 280 - (p - 47) / 4 * 260;

days.forEach(([open, high, low, close], i) => {
  const x = 60 + i * 40;
  const color = close >= open ? '#2fbf8f' : '#f0506e';
  drawLine(x, y(high), x, y(low), color, 1.5);                  // wick
  drawRect(x - 10, y(Math.max(open, close)), 20,
    Math.max(1, Math.abs(y(open) - y(close))), color);          // body
});`,
    faq: [
      ['How do you read a candlestick chart?', 'Each candle is one day. The body shows the open and close price and the wicks show the high and low. Green means the price closed higher than it opened, red means it closed lower.'],
      ['What is the difference between a candlestick chart and an OHLC chart?', 'They show the same four prices. An OHLC chart uses a line with small ticks for open and close, while a candlestick uses a filled body, which is easier to read at a glance.'],
      ['Why are there gaps for weekends?', 'Markets are closed at weekends, so there are no candles for those days. This template skips weekends so the candles sit side by side.'],
      ['Can I use this chart with live data?', 'Yes. Replace the ALL list with data from your own source in the same format: open, high, low, close and volume. Call the draw function again when new data arrives.'],
    ],
  },
  {
    num: 19, cat: '02-trends-over-time', slug: '019-slope-chart', name: 'Slope Chart',
    example: 'guest ratings for eight hotels in 2025 and 2026',
    title: 'Free Slope Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free slope chart made with HTML, CSS and vanilla JavaScript for comparing two points in time. Up and down colors, labels that never overlap. One file to download.',
    keywords: 'slope chart, slope graph javascript, slopegraph html, before after chart, two point comparison chart',
    what: [
      'A slope chart compares two points in time for many items. Each item is a line from its first value on the left to its second value on the right. Lines that go up improved and lines that go down got worse.',
      'The angle of each line tells the story at once. It is also the best way to show changes in rank, because lines that cross show items passing each other.',
    ],
    glance: { best: 'Many items compared at two moments', data: 'A name and two numbers for each item', avoid: 'More than two points in time. Use a line chart.' },
    when: ['Ratings or scores this year against last year', 'Rankings before and after a change', 'Prices in two different years', 'Results for each team at the start and the end of a project'],
    instead: [['008-dumbbell-chart', 'You want every item on its own row'], ['012-multi-line-chart', 'You have more than two points in time']],
    features: ['Green lines for gains and red lines for drops', 'Labels that move apart so they never overlap', 'Filters to show all hotels, only drops or only gains', 'A wide invisible hover area on each line so it is easy to point at', 'Lines grow from left to right on load', 'Keyboard support and a table with the change'],
    code: `const hotels = [['Station', 6.9, 7.6], ['Harbor', 8.7, 8.5], ['Downtown', 8.1, 8.6]];
const left = 150, right = 450;
const y = r => 280 - (r - 6.5) / 2.7 * 260;

hotels.forEach(([name, before, after]) => {
  const color = after >= before ? '#1f7a5c' : '#c2452d';
  drawLine(left, y(before), right, y(after), color, 3);
  drawText(left - 10, y(before) + 4, name + ' ' + before, 'end');
  drawText(right + 10, y(after) + 4, after + ' ' + name);
});`,
    faq: [
      ['What is a slope chart?', 'A slope chart draws a line for each item from its value at one time to its value at a later time. The slope of the line shows whether it went up or down and by how much.'],
      ['Who made slope charts popular?', 'Edward Tufte showed them in 1983 under the name slopegraph, and they have become common in news and reports since.'],
      ['How do I stop labels overlapping in a slope chart?', 'Sort the labels by height, then push each one down if it is too close to the one above. If the last label goes off the bottom, shift them all up. This template does exactly that.'],
      ['When should I use a dumbbell chart instead?', 'Use a dumbbell chart when you want to scan item by item on rows. Use a slope chart when changes in rank and the direction of change matter most.'],
    ],
  },
  {
    num: 20, cat: '02-trends-over-time', slug: '020-horizon-chart', name: 'Horizon Chart',
    example: 'daily temperature above or below normal for six cities over a year',
    title: 'Free Horizon Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free horizon chart made with HTML, CSS and vanilla JavaScript. Six cities and 365 days of data in a small space, with a crosshair. One file to download.',
    keywords: 'horizon chart, horizon graph javascript, horizon chart html, compact time series chart, temperature anomaly chart',
    what: [
      'A horizon chart packs a long time series into a thin strip by folding the values into colored bands. Small differences are light, bigger ones are darker, warm values are red and cool values are blue.',
      'Because each row is so short, you can stack many series and compare them day by day, like six cities over a whole year. It takes a minute to learn, then it becomes one of the most useful charts for dense data.',
    ],
    glance: { best: 'Many long series compared in little space', data: 'A value above or below a baseline for each day', avoid: 'Readers who need a chart they understand instantly.' },
    when: ['Temperature against normal for many cities', 'Server load or response times for many machines', 'Stock returns for many companies', 'Any daily reading for many sensors or places'],
    instead: [['013-area-chart', 'You only have one series'], ['017-sparkline', 'You want a quick trend, not a close comparison']],
    features: ['365 days for six cities drawn as solid SVG paths, not thousands of shapes', 'Three shades each for warmer and cooler, in steps of 4 degrees', 'A crosshair that reads every city for the chosen day', 'Month lines so you can find a date fast', 'On phones the city names move above each row', 'A summary table with warm days, cool days and extremes'],
    code: `const values = [1, 3, 6, 9, 5, 2, -1, -4, -7, -3, 0, 2]; // above or below normal
const band = 4, rowH = 40, base = 50, w = 30;
const warm = ['#f4b9a7', '#e0664a', '#a8231a'], cool = ['#b3cde8', '#5b92cc', '#1f4f8c'];

values.forEach((v, i) => {
  const shades = v >= 0 ? warm : cool;
  for (let k = 0; k < 3; k++) {
    const part = Math.max(0, Math.min(band, Math.abs(v) - k * band)) / band * rowH;
    if (part > 0) drawRect(20 + i * w, base - part, w, part, shades[k]);
  }
});`,
    faq: [
      ['How do you read a horizon chart?', 'Color tells you the direction, red for above normal and blue for below. Shade tells you the size, with darker meaning bigger. Taller color within a row means a larger value inside that band.'],
      ['Why use a horizon chart instead of a line chart?', 'A horizon chart shows the same detail in about a quarter of the height. That lets you stack many series and compare them, which would be a mess with many lines.'],
      ['How many bands should a horizon chart use?', 'Two to four bands work best. Three, like this template, is a good balance between detail and how easy it is to read.'],
      ['What data works in a horizon chart?', 'Any series with a clear baseline, like normal temperature, a target or zero change. Values above the baseline use one color and values below use another.'],
    ],
  },
  {
    num: 21, cat: '03-part-to-whole', slug: '021-pie-chart', name: 'Pie Chart',
    example: 'how customers paid at a cafe',
    title: 'Free Pie Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free pie chart made with HTML, CSS and vanilla JavaScript. No library. Labels with lines, slices that pop out on hover, keyboard support. One file to download.',
    keywords: 'pie chart html, pie chart javascript, pie chart without library, svg pie chart, pie chart css, free pie chart template',
    what: [
      'A pie chart is a circle divided into slices, where each slice shows one part of a whole. The bigger the share, the bigger the slice, and all the slices together make 100%.',
      'Pie charts are easy to understand because everyone has cut a pie or a pizza. They work best with two to five parts where one or two clearly stand out, like card and phone payments against cash.',
    ],
    glance: { best: 'A few shares of one whole, 2 to 5 slices', data: 'A name and a percent or count for each part', avoid: 'Many slices or slices of almost equal size. Use bars.' },
    when: ['How customers paid', 'Share of votes, answers or sales between a few options', 'Budget split into a few big parts', 'Simple reports and slides for a general audience'],
    instead: [['022-donut-chart', 'You want to show the total in the middle'], ['026-waffle-chart', 'You want people to picture each percent'], ['001-bar-chart', 'You have more than 5 parts or need exact comparisons']],
    features: ['Slices drawn with SVG arc paths in plain JavaScript', 'Labels outside the pie with thin lines, so small slices stay readable', 'Slices pop out when you hover or tab to them', 'Largest slice starts at 12 o clock and runs clockwise', 'The pie sweeps open on load', 'Keyboard support and a data table'],
    code: `const slices = [['Card', 46, '#7a4b2a'], ['Phone', 31, '#c98b4f'], ['Cash', 17, '#8fa37e'], ['Gift card', 6, '#d9c3a5']];
const cx = 200, cy = 150, r = 120;
let start = 0;

slices.forEach(([name, pct, color]) => {
  const end = start + pct / 100 * Math.PI * 2;
  const x1 = cx + r * Math.sin(start), y1 = cy - r * Math.cos(start);
  const x2 = cx + r * Math.sin(end), y2 = cy - r * Math.cos(end);
  const large = end - start > Math.PI ? 1 : 0;
  make('path', { d: 'M' + cx + ',' + cy + 'L' + x1 + ',' + y1 + 'A' + r + ',' + r + ' 0 ' + large + ' 1 ' + x2 + ',' + y2 + 'Z', fill: color });
  start = end;
});`,
    faq: [
      ['How do I make a pie chart in HTML without a library?', 'Draw each slice as an SVG path: a line from the center to the edge, an arc along the edge, and back to the center. Work out the angles from each share. This template does it in plain JavaScript.'],
      ['How many slices should a pie chart have?', 'Two to five. With more slices, the small ones become thin and hard to compare. Group small parts into Other, or use a bar chart.'],
      ['Should pie chart slices be sorted?', 'Yes. Start the biggest slice at 12 o clock and go clockwise from largest to smallest. It makes the chart much easier to read.'],
      ['Can I make a pie chart with CSS only?', 'Yes, with a conic-gradient background you can draw a simple pie in CSS. SVG is better when you need hover, tooltips, labels and keyboard support, like in this template.'],
    ],
  },
  {
    num: 22, cat: '03-part-to-whole', slug: '022-donut-chart', name: 'Donut Chart',
    example: 'workouts logged by members of a fitness app',
    title: 'Free Donut Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free donut chart made with HTML, CSS and vanilla JavaScript. Total in the middle, hover details, toggles and keyboard support. One file to download.',
    keywords: 'donut chart html, doughnut chart javascript, donut chart without library, svg donut chart, ring chart css',
    what: [
      'A donut chart is a pie chart with a hole in the middle. The ring shows the parts of a whole, and the empty center is a handy place for the total or for details about the part you point at.',
      'Because people read the length of the ring rather than the size of a wedge, many find donut charts a little easier to compare than pies. They also look lighter on dashboards.',
    ],
    glance: { best: 'A few shares with the total shown in the middle', data: 'A name and a count for each part', avoid: 'More than 6 parts. The ring gets too busy.' },
    when: ['Dashboard summaries with a total', 'Workout, task or ticket types', 'Budget or time split into a few parts', 'App screens with little space'],
    instead: [['021-pie-chart', 'You want the most familiar chart for a general audience'], ['023-semi-donut-chart', 'You are showing progress toward a goal']],
    features: ['A ring drawn with SVG arc paths', 'The total in the center changes to the share of the part you hover', 'Hide any part from the key and the ring rebuilds', 'Thick card colored gaps between parts', 'Dark theme with bright colors', 'Keyboard support and a data table'],
    code: `const parts = [['Running', 471, '#4ade80'], ['Cycling', 298, '#38bdf8'], ['Strength', 223, '#f472b6']];
const total = parts.reduce((a, p) => a + p[1], 0);
const cx = 200, cy = 150, r = 120, inner = 75;
let start = 0;
const pt = (rad, a) => (cx + rad * Math.sin(a)) + ',' + (cy - rad * Math.cos(a));

parts.forEach(([name, n, color]) => {
  const end = start + n / total * Math.PI * 2, big = end - start > Math.PI ? 1 : 0;
  make('path', { fill: color, d: 'M' + pt(r, start) + 'A' + r + ',' + r + ' 0 ' + big + ' 1 ' + pt(r, end) +
    'L' + pt(inner, end) + 'A' + inner + ',' + inner + ' 0 ' + big + ' 0 ' + pt(inner, start) + 'Z' });
  start = end;
});
drawText(cx, cy + 6, total, 'middle');`,
    faq: [
      ['What is the difference between a pie chart and a donut chart?', 'A donut chart is a pie with the middle cut out. The data is the same, but the empty center can hold a total or a label, and many people find the ring easier to read.'],
      ['Is it donut chart or doughnut chart?', 'Both spellings are used and mean the same thing. Donut is more common in American English and in search.'],
      ['How thick should the ring be?', 'About a third to a half of the radius. Too thin and the colors are hard to see, too thick and it looks like a pie again.'],
      ['What should go in the middle of a donut chart?', 'The total is the most useful choice. You can also show the share of the part the reader is pointing at, like this template does.'],
    ],
  },
  {
    num: 23, cat: '03-part-to-whole', slug: '023-semi-donut-chart', name: 'Semi Donut Chart',
    example: 'a fundraising appeal and the money still needed',
    title: 'Free Semi Donut Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free semi donut chart made with HTML, CSS and vanilla JavaScript. A half circle progress chart with parts and a goal. One file to download.',
    keywords: 'semi donut chart, half donut chart javascript, half pie chart html, progress gauge chart, fundraising progress chart',
    what: [
      'A semi donut chart, or half donut, is a donut chart cut in half. The ring runs from left to right over the top, which makes it look like a gauge and works well for progress toward a goal.',
      'Each colored part shows how much one source added, and a gray part shows what is still missing. The big number in the middle tells the main story at a glance.',
    ],
    glance: { best: 'Progress toward a goal, split by source', data: 'A goal and an amount for each part', avoid: 'Data that is not a share of a fixed total.' },
    when: ['Fundraising and donation drives', 'Sales toward a monthly target', 'Storage or budget used against a limit', 'Seats filled in a hall or class'],
    instead: [['022-donut-chart', 'There is no goal, only parts of a total'], ['009-bullet-chart', 'You need to track several goals side by side']],
    features: ['A half ring drawn from left to right over the top', 'A gray part for the money still needed', 'The amount in the middle counts up as the ring fills', 'Start and goal values at each end', 'Tooltips with each share of the goal', 'Keyboard support and a data table'],
    code: `const goal = 50000;
const parts = [[18400, '#1d8a6f'], [11200, '#58b89b'], [7300, '#f2b33d']];
parts.push([goal - parts.reduce((a, p) => a + p[0], 0), '#dfe7e4']); // still needed
const cx = 200, cy = 200, r = 150, inner = 95;
const pt = (rad, a) => (cx + rad * Math.sin(a)) + ',' + (cy - rad * Math.cos(a));
let start = -Math.PI / 2; // 9 o clock

parts.forEach(([amount, color]) => {
  const end = start + amount / goal * Math.PI;
  make('path', { fill: color, d: 'M' + pt(r, start) + 'A' + r + ',' + r + ' 0 0 1 ' + pt(r, end) +
    'L' + pt(inner, end) + 'A' + inner + ',' + inner + ' 0 0 0 ' + pt(inner, start) + 'Z' });
  start = end;
});`,
    faq: [
      ['What is a semi donut chart used for?', 'It is used for progress toward a goal, like money raised or sales against target, because the half ring reads like a gauge filling up.'],
      ['How is a semi donut different from a gauge chart?', 'A gauge usually has one value and a needle. A semi donut can show several parts in different colors, so you can see where the progress came from.'],
      ['How do I draw a half donut in SVG?', 'Use the same arc paths as a donut, but spread the angles over 180 degrees instead of 360, starting at 9 o clock and ending at 3 o clock.'],
      ['Should I show the amount still needed?', 'Yes. A gray part for what is left makes the gap clear and turns the chart into a call to action.'],
    ],
  },
  {
    num: 24, cat: '03-part-to-whole', slug: '024-treemap', name: 'Treemap',
    example: 'bookshop sales by section and genre',
    title: 'Free Treemap Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free treemap made with HTML, CSS and vanilla JavaScript. Nested boxes sized by value with a squarified layout written from scratch. One file to download.',
    keywords: 'treemap, treemap javascript, treemap html, squarified treemap, nested rectangle chart, treemap without library',
    what: [
      'A treemap shows parts of a whole as boxes, where the size of each box matches its value. Boxes can sit inside bigger boxes, so a treemap shows groups and the items inside them at the same time.',
      'It uses every pixel of space, which makes it great for data with many items. The squarified layout used here keeps boxes close to square, so they are easier to compare and to label.',
    ],
    glance: { best: 'Many items grouped into categories', data: 'A group, a name and a value for each item', avoid: 'Small differences that must be compared exactly.' },
    when: ['Sales by category and product', 'Budget by department and project', 'Disk or storage use by folder', 'Market size by sector and company'],
    instead: [['025-sunburst-chart', 'You want the hierarchy to be more visible as rings'], ['029-icicle-chart', 'You want to zoom into levels of a hierarchy'], ['005-horizontal-bar-chart', 'You only have one level and need exact ranking']],
    features: ['A squarified treemap layout in about 20 lines of JavaScript', 'Two levels: sections and the genres inside them', 'Each section has its own color with lighter shades for genres', 'Labels show only where they fit', 'Tooltips with the share of the whole shop', 'Keyboard support and a full data table'],
    code: `// Slice a rectangle into strips, one box per item (simple treemap)
const items = [['Mystery', 84], ['Romance', 67], ['Cooking', 45], ['Travel', 22]];
const total = items.reduce((a, i) => a + i[1], 0);
let x = 0, y = 0, w = 600, h = 300;

items.forEach(([name, value], i) => {
  const share = value / items.slice(i).reduce((a, it) => a + it[1], 0);
  if (w >= h) { const bw = w * share; drawRect(x, y, bw - 2, h - 2, '#b5473a'); drawText(x + 8, y + 20, name); x += bw; w -= bw; }
  else { const bh = h * share; drawRect(x, y, w - 2, bh - 2, '#b5473a'); drawText(x + 8, y + 20, name); y += bh; h -= bh; }
});`,
    faq: [
      ['What is a treemap used for?', 'A treemap shows how a total splits into many parts and groups, using box size for value. It is common for sales, budgets, storage and market data.'],
      ['What is a squarified treemap?', 'It is a layout method that keeps boxes as close to square as possible. Square boxes are easier to compare and have more room for labels than long thin strips.'],
      ['How many levels can a treemap show?', 'Two levels is the sweet spot. You can nest more, but the smaller boxes quickly become too small to read. Use zooming for deeper data.'],
      ['Is a treemap better than a pie chart?', 'For many items, yes. A pie gets unreadable after five slices, while a treemap can show dozens of items and their groups in the same space.'],
    ],
  },
  {
    num: 25, cat: '03-part-to-whole', slug: '025-sunburst-chart', name: 'Sunburst Chart',
    example: 'where a city sends its household waste',
    title: 'Free Sunburst Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free sunburst chart made with HTML, CSS and vanilla JavaScript. Two rings of nested data with details in the center on hover. One file to download.',
    keywords: 'sunburst chart, sunburst chart javascript, sunburst html, multi level pie chart, radial hierarchy chart',
    what: [
      'A sunburst chart shows nested data as rings. The inner ring holds the main groups, and each outer ring splits those groups into smaller parts. The angle of each piece shows its share of the whole.',
      'It is like a pie chart with extra layers. You can see the big split first and then follow any piece outward to see what it is made of, like recycled waste splitting into paper, plastic, glass and metal.',
    ],
    glance: { best: 'Two or three levels of nested shares', data: 'A group, a part and a value for each item', avoid: 'Comparing sizes in the outer ring exactly.' },
    when: ['Waste, energy or water broken down by type', 'Budget by department and team', 'Website traffic by channel and source', 'Survey answers by group and subgroup'],
    instead: [['024-treemap', 'You want to use space more efficiently'], ['022-donut-chart', 'You only have one level of data']],
    features: ['Two rings drawn with SVG arc paths', 'A piece with no parts can fill both rings', 'The center shows the total, then the share of whatever you point at', 'Names inside pieces that have enough room', 'The rings sweep open on load', 'Keyboard support and a full data table'],
    code: `const groups = [
  { color: '#2c7a4b', kids: [8200, 2600, 4100, 1900] },
  { color: '#7d746b', kids: [9800, 2300] }
];
const total = groups.flatMap(g => g.kids).reduce((a, b) => a + b, 0);
const cx = 200, cy = 150;
const pt = (r, a) => (cx + r * Math.sin(a)) + ',' + (cy - r * Math.cos(a));
const arc = (r0, r1, a0, a1, fill) => make('path', { fill, stroke: '#fff', d: 'M' + pt(r1, a0) + 'A' + r1 + ',' + r1 + ' 0 ' + (a1 - a0 > Math.PI ? 1 : 0) + ' 1 ' + pt(r1, a1) + 'L' + pt(r0, a1) + 'A' + r0 + ',' + r0 + ' 0 ' + (a1 - a0 > Math.PI ? 1 : 0) + ' 0 ' + pt(r0, a0) + 'Z' });
let a = 0;

groups.forEach(g => {
  const sum = g.kids.reduce((s, v) => s + v, 0);
  arc(40, 90, a, a + sum / total * Math.PI * 2, g.color);   // inner ring
  g.kids.forEach(v => { const b = a + v / total * Math.PI * 2; arc(92, 140, a, b, g.color); a = b; }); // outer ring
});`,
    faq: [
      ['What is a sunburst chart?', 'A sunburst chart is a set of rings that shows nested data. The inner ring holds the top level groups and each ring further out shows the parts inside them.'],
      ['When should I use a sunburst chart?', 'Use it when your data has two or three levels and you want people to see both the big split and what each group is made of.'],
      ['How is a sunburst different from a donut chart?', 'A donut chart has one ring. A sunburst has several, one for each level of the data.'],
      ['How many rings should a sunburst chart have?', 'Two or three. Past that, the outer pieces get very thin and the chart is hard to read.'],
    ],
  },
  {
    num: 26, cat: '03-part-to-whole', slug: '026-waffle-chart', name: 'Waffle Chart',
    example: 'how 100 new customers found a furniture shop',
    title: 'Free Waffle Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free waffle chart made with HTML, CSS and vanilla JavaScript. 100 squares that make percentages easy to picture, with highlight on click. One file to download.',
    keywords: 'waffle chart, waffle chart javascript, waffle chart html css, square pie chart, percentage grid chart',
    what: [
      'A waffle chart is a grid of 100 squares where each square stands for 1%. The squares are colored by group, so 34 blue squares means 34 out of every 100.',
      'People find it easier to picture 34 out of 100 people than a 34% slice of a pie. That makes waffle charts a friendly choice for reports and websites aimed at a general audience.',
    ],
    glance: { best: 'Percentages that people should be able to picture', data: 'Whole number shares that add up to 100', avoid: 'Many small groups or decimals.' },
    when: ['How customers found you', 'Survey results for a general audience', 'Share of people in each group', 'Charity and public health reports'],
    instead: [['021-pie-chart', 'You want the quickest chart for two or three shares'], ['004-100-percent-stacked-bar', 'You want to compare shares across several groups']],
    features: ['100 squares in a 10 by 10 grid, filled in reading order', 'A list with the big numbers next to the grid', 'Click a source in the key to pick it out and fade the rest', 'The squares fill in one by one on load', 'Hover any square to see its group', 'Stacks on phones with the list under the grid'],
    code: `const groups = [['Friends and family', 34, '#3d5a80'], ['Web search', 27, '#98c1d9'], ['Instagram', 18, '#ee6c4d'], ['Walked past', 12, '#e0b04b'], ['Ads', 9, '#6b9080']];
const size = 28, gap = 4;
let i = 0;

groups.forEach(([name, count, color]) => {
  for (let n = 0; n < count; n++, i++) {
    const col = i % 10, row = Math.floor(i / 10);
    drawRect(col * size, row * size, size - gap, size - gap, color);
  }
});`,
    faq: [
      ['What is a waffle chart?', 'A waffle chart is a 10 by 10 grid of squares where each square is 1%. Colored squares show how many out of every 100 belong to each group.'],
      ['Why use a waffle chart instead of a pie chart?', 'Counting squares is easier than judging angles. Saying 34 out of 100 also feels more real to most readers than a 34% slice.'],
      ['What if my percentages have decimals?', 'Round them to whole numbers and make sure they still add up to 100. If the decimals matter, use a bar chart instead.'],
      ['Is a waffle chart the same as a square pie chart?', 'Yes. Square pie chart and waffle chart are two names for the same idea.'],
    ],
  },
  {
    num: 27, cat: '03-part-to-whole', slug: '027-marimekko-chart', name: 'Marimekko Chart',
    example: 'e-bike market share by region and brand',
    title: 'Free Marimekko Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free Marimekko chart made with HTML, CSS and vanilla JavaScript. Variable width columns show market size and share at once. One file to download.',
    keywords: 'marimekko chart, mekko chart javascript, mosaic plot html, variable width stacked bar, market share chart',
    what: [
      'A Marimekko chart, often called a Mekko chart, is a 100% stacked bar chart where each column has a different width. The width shows how big each group is, and the colors inside show the shares within it.',
      'It answers two questions in one picture: which markets are biggest, and who leads in each one. Consultants and market researchers use it to show market share by region or segment.',
    ],
    glance: { best: 'Market share across segments of different size', data: 'A size for each group and shares inside each group', avoid: 'Audiences who have never seen one. Add a short guide.' },
    when: ['Market share by region and brand', 'Sales by channel and product', 'Customers by age group and plan', 'Budget by department and type of cost'],
    instead: [['004-100-percent-stacked-bar', 'All groups are the same size or size does not matter'], ['024-treemap', 'You care more about the size of each piece than the share']],
    features: ['Column widths set by how many bikes each region bought', 'Brand shares stacked to 100% inside each column', 'Percent labels inside every piece that has room', 'Tooltips with the share, the number of bikes and the share of all sales', 'Pieces grow into place on load', 'Keyboard support and a data table'],
    code: `const regions = [['North', 42, [38, 27, 21, 14]], ['South', 30, [22, 35, 25, 18]]];
const colors = ['#e76f51', '#2a9d8f', '#e9c46a', '#9aa5b5'];
const total = regions.reduce((a, r) => a + r[1], 0);
let x = 40;

regions.forEach(([name, size, shares]) => {
  const w = size / total * 520;
  let y = 280;
  shares.forEach((pct, i) => {
    const h = pct / 100 * 260;
    drawRect(x, y - h, w - 3, h - 1, colors[i]);
    y -= h;
  });
  drawText(x + w / 2, 298, name, 'middle');
  x += w;
});`,
    faq: [
      ['What is a Marimekko chart?', 'It is a stacked bar chart where each bar has a different width. Width shows the size of each group and the stacked colors show the shares inside it.'],
      ['Why is it called a Marimekko chart?', 'It is named after the Finnish design company Marimekko, because the blocks of color look like their bold printed fabrics.'],
      ['What is the difference between a Marimekko chart and a mosaic plot?', 'They are very close. Mosaic plot is the name used in statistics, often for counts in a table. Marimekko is the business name, usually for market share.'],
      ['How do I read a Marimekko chart?', 'Read the widths first to see which groups are biggest, then read the colors inside each column to see who leads in that group.'],
    ],
  },
  {
    num: 28, cat: '03-part-to-whole', slug: '028-funnel-chart', name: 'Funnel Chart',
    example: 'shoppers moving from first visit to purchase in an online shop',
    title: 'Free Funnel Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free funnel chart made with HTML, CSS and vanilla JavaScript for sales and sign up steps. Drop off between steps and two views. One file to download.',
    keywords: 'funnel chart, funnel chart javascript, sales funnel chart html, conversion funnel chart, checkout funnel',
    what: [
      'A funnel chart shows how many people make it through each step of a process, like visiting a shop, adding to cart and buying. Each step is a bar, and the bars get narrower as people drop out.',
      'It shows where you lose the most people, which is where you should work first. The lost number between steps is often more useful than the step totals themselves.',
    ],
    glance: { best: 'Steps in a process where people drop out', data: 'A name and a count for each step, in order', avoid: 'Steps that are not in a fixed order.' },
    when: ['Online shop checkout steps', 'Sign up and onboarding flows', 'Sales pipelines from lead to deal', 'Job applications from applied to hired'],
    instead: [['005-horizontal-bar-chart', 'You want exact comparisons without the funnel shape'], ['051-sankey-diagram', 'People can take different paths between steps']],
    features: ['Centered bars that shrink with each step', 'Soft shapes between bars that show the flow', 'The number and share lost between every step', 'A switch between share of all visitors and step to step', 'Bars grow out from the middle on load', 'Keyboard support and a full data table'],
    code: `const steps = [['Visited', 48200], ['Viewed a product', 21700], ['Added to cart', 7900], ['Bought', 2600]];
const cx = 320, maxW = 400, rowH = 60;

steps.forEach(([name, count], i) => {
  const w = count / steps[0][1] * maxW;
  drawRect(cx - w / 2, i * rowH, w, 40, '#5a3fd1');
  drawText(cx - maxW / 2 - 10, i * rowH + 25, name, 'end');
  drawText(cx + maxW / 2 + 10, i * rowH + 25, (count / steps[0][1] * 100).toFixed(1) + '%');
});`,
    faq: [
      ['What is a funnel chart used for?', 'It shows how many people pass through each step of a process and where they drop out. It is most common for sales, sign ups and checkout flows.'],
      ['How do I calculate conversion in a funnel?', 'Divide the count at a step by the count at the first step for overall conversion, or by the step before it for step to step conversion. This template shows both.'],
      ['Which step should I fix first?', 'Start with the step that loses the largest share of people. In the example, most shoppers who view a product never add it to the cart.'],
      ['Should a funnel chart have a funnel shape?', 'The shape helps people recognize it, but the bar widths must match the numbers. Avoid funnels drawn as fixed cones, because they hide the real drop off.'],
    ],
  },
  {
    num: 29, cat: '03-part-to-whole', slug: '029-icicle-chart', name: 'Icicle Chart',
    example: 'what is filling up a laptop drive',
    title: 'Free Icicle Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free icicle chart made with HTML, CSS and vanilla JavaScript. A zoomable hierarchy for folders, budgets or sitemaps. Click to zoom in and out. One file to download.',
    keywords: 'icicle chart, icicle chart javascript, zoomable icicle html, partition chart, hierarchy chart, disk usage chart',
    what: [
      'An icicle chart shows a hierarchy as rows of blocks. The first column is the whole, the next column splits it into groups, and the next splits each group again. Block height shows size.',
      'It is the flat, rectangle version of a sunburst, and it is easier to label. Clicking a block zooms in so its parts fill the whole height, which makes deep data easy to dig into.',
    ],
    glance: { best: 'Hierarchies you want to zoom into', data: 'A path of levels and a value for each leaf', avoid: 'Only one level. Use a bar chart.' },
    when: ['Disk or cloud storage use by folder', 'Budgets by department, team and line item', 'Website sections and pages by traffic', 'Company structure by headcount'],
    instead: [['024-treemap', 'You want every item visible at once in a compact box'], ['025-sunburst-chart', 'You want a round, more visual layout']],
    features: ['Three columns: all files, folders and what is inside them', 'Click a block to zoom in, click the left block to zoom out', 'Smooth animated zoom between levels', 'Works with the Enter key for keyboard users', 'Labels hide or shorten when a block is too small', 'A data table with every folder'],
    code: `const tree = [['Photos', [['Family', 58], ['Travel', 31]]], ['Videos', [['Home videos', 61], ['Downloads', 23]]]];
const total = tree.reduce((a, [, kids]) => a + kids.reduce((s, k) => s + k[1], 0), 0);
const h = 300, colW = 180;
let y = 0;

drawRect(0, 0, colW - 2, h, '#16202c');                       // the whole
tree.forEach(([name, kids]) => {
  const size = kids.reduce((s, k) => s + k[1], 0);
  drawRect(colW, y, colW - 2, size / total * h - 2, '#3a6ea5'); // folder
  let ky = y;
  kids.forEach(([, v]) => { drawRect(colW * 2, ky, colW - 2, v / total * h - 2, '#7fa3cc'); ky += v / total * h; });
  y += size / total * h;
});`,
    faq: [
      ['What is an icicle chart?', 'An icicle chart shows a hierarchy as columns of blocks. Each column splits the one before it into smaller parts, and the size of each block matches its value.'],
      ['What is the difference between an icicle chart and a sunburst chart?', 'They show the same data. The sunburst bends the levels into rings, and the icicle keeps them as straight columns, which makes labels easier to read.'],
      ['How do I zoom in an icicle chart?', 'Click a block. Its parts spread out to fill the full height. Click the first block, or the same block again, to zoom back out.'],
      ['Why is it called an icicle chart?', 'When drawn from top to bottom, the blocks hang down like icicles from a roof. This template draws it left to right, which fits labels better.'],
    ],
  },
  {
    num: 30, cat: '03-part-to-whole', slug: '030-circle-packing', name: 'Circle Packing Chart',
    example: 'staff at a food company grouped by department and team',
    title: 'Free Circle Packing Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free circle packing chart made with HTML, CSS and vanilla JavaScript. Nested circles sized by value, with a packing layout written from scratch. One file to download.',
    keywords: 'circle packing chart, circle packing javascript, packed bubble chart html, nested circles chart, bubble hierarchy',
    what: [
      'A circle packing chart shows groups as big circles with smaller circles packed inside them. The area of each circle matches its value, so bigger teams get bigger circles.',
      'It uses space less efficiently than a treemap, but the round shapes make the groups very easy to see. It is a friendly way to show the structure of a company, a budget or a collection.',
    ],
    glance: { best: 'Groups and the items inside them, shown softly', data: 'A group, a name and a value for each item', avoid: 'Comparing values exactly. Circle areas are hard to judge.' },
    when: ['Company teams by headcount', 'Products grouped by category', 'Topics grouped by theme', 'Budgets for a public or general audience'],
    instead: [['024-treemap', 'You want to use space fully and compare sizes more easily'], ['002-grouped-bar-chart', 'You need exact comparisons']],
    features: ['A packing layout where each circle touches two others', 'Circle area, not radius, matches headcount so sizes are honest', 'Department circles with their teams packed inside', 'The layout turns sideways on wide screens to use the space', 'Names shorten to fit small circles', 'Tooltips, keyboard support and a data table'],
    code: `// Place circles side by side, sized by area (simple version of packing)
const teams = [['Drivers', 31], ['Prep cooks', 22], ['Cashiers', 18], ['Chefs', 14]];
let x = 20;

teams.forEach(([name, people]) => {
  const r = Math.sqrt(people) * 10; // area matches the value
  drawCircle(x + r, 150, r, '#c05a2e');
  drawText(x + r, 154, name, 'middle');
  x += r * 2 + 8;
});`,
    faq: [
      ['What is a circle packing chart?', 'It is a chart that shows groups as large circles with smaller circles packed inside them. Each circle area matches a value, like the number of people in a team.'],
      ['Why use the square root for circle size?', 'A circle area grows with the square of its radius. Using the square root of the value for the radius makes the area match the value, so a team twice as big looks twice as big.'],
      ['How do you pack circles without overlap?', 'Place the largest circle first, then put each next circle where it touches two circles already placed without overlapping any, choosing the spot closest to the center. This template does that in plain JavaScript.'],
      ['Is circle packing better than a treemap?', 'A treemap is more exact and uses space better. Circle packing is easier on the eye and makes the groups stand out, so it suits a general audience.'],
    ],
  },
  {
    num: 31, cat: '04-distribution', slug: '031-histogram', name: 'Histogram',
    example: 'delivery times for 600 pizza orders',
    title: 'Free Histogram in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free histogram made with HTML, CSS and vanilla JavaScript. Adjustable bin width, median and target lines, tooltips and keyboard support. One file to download.',
    keywords: 'histogram html, histogram javascript, histogram without library, svg histogram, frequency chart, distribution chart',
    what: [
      'A histogram is a chart that shows how a set of numbers is spread out. It groups the numbers into ranges, called bins, and draws a bar for each range. The taller the bar, the more values fall in that range.',
      'It shows the shape of your data at a glance: where most values sit, whether there is a long tail, and whether there are two peaks. Changing the bin width can reveal more detail or smooth out noise.',
    ],
    glance: { best: 'Seeing how one set of numbers is spread', data: 'A list of numbers, usually 50 or more', avoid: 'Comparing separate categories. Use a bar chart.' },
    when: ['Delivery, wait or response times', 'Order values or basket sizes', 'Test scores or survey ratings', 'Ages, heights or any measured value'],
    instead: [['032-box-plot', 'You want to compare the spread of several groups'], ['034-density-plot', 'You want a smooth shape instead of bars'], ['040-ecdf-chart', 'You want to read what share is under a value']],
    features: ['Bins counted in plain JavaScript from the raw numbers', 'A switch between 2, 5 and 10 minute bins', 'A dashed line for the median and one for the 30 minute promise', 'Bars past the promise use a stronger color', 'Tooltips with the count and share of orders', 'A data table that updates with the bin width'],
    code: `const minutes = [22.4, 18.9, 31.2, 26.5, 24.1, 41.8, 19.7, 27.3, 23.0, 35.6];
const binWidth = 5, from = 10, to = 50;
const bins = [];
for (let b = from; b < to; b += binWidth) bins.push(minutes.filter(v => v >= b && v < b + binWidth).length);
const max = Math.max(...bins), barW = 560 / bins.length;

bins.forEach((count, i) => {
  const h = count / max * 250;
  drawRect(40 + i * barW, 280 - h, barW - 1, h, '#f08a6c');
});`,
    faq: [
      ['What is the difference between a histogram and a bar chart?', 'A histogram shows how numbers are spread across ranges, and its bars touch because the ranges join up. A bar chart compares separate items, like products, and its bars have gaps.'],
      ['How do I choose the bin width for a histogram?', 'Try a few. Too wide and you lose the shape, too narrow and the bars get noisy. A good start is about 10 to 20 bins across your data. This template lets you switch widths to compare.'],
      ['How many values do I need for a histogram?', 'At least 30, and ideally 100 or more. With fewer values, a strip plot or dot plot shows the data more honestly.'],
      ['What does a skewed histogram mean?', 'It means the values bunch up on one side with a long tail on the other. Delivery times are a classic example: most are quick, but a few take much longer.'],
    ],
  },
  {
    num: 32, cat: '04-distribution', slug: '032-box-plot', name: 'Box Plot',
    example: 'monthly rent for flats in six neighborhoods',
    title: 'Free Box Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free box plot made with HTML, CSS and vanilla JavaScript. Quartiles, whiskers, outliers and an option to show every point. One file to download.',
    keywords: 'box plot, box and whisker plot javascript, box plot html, boxplot without library, quartile chart, outlier chart',
    what: [
      'A box plot, also called a box and whisker plot, sums up a set of numbers in five values. The box holds the middle half of the data, the line inside is the median, and the whiskers reach out to the usual lowest and highest values.',
      'Anything far outside the whiskers is drawn as a dot, so unusual values stand out right away. Box plots are compact, which makes them ideal for comparing many groups side by side.',
    ],
    glance: { best: 'Comparing the spread of several groups', data: 'A list of numbers for each group', avoid: 'Groups with two peaks. A violin plot shows them.' },
    when: ['Rent, prices or salaries by area', 'Test scores by class or school', 'Delivery times by region', 'Lab or quality results by batch'],
    instead: [['033-violin-plot', 'You want to see the full shape, including two peaks'], ['037-strip-plot', 'You have few values and want to show every one'], ['031-histogram', 'You only have one group']],
    features: ['Quartiles and medians worked out in plain JavaScript', 'Whiskers that follow the standard 1.5 times the box height rule', 'Unusual listings drawn as red dots with their own tooltips', 'A switch to show every flat as a faint dot on top of the boxes', 'Groups sorted from most to least expensive', 'Keyboard support and a table of all five numbers'],
    code: `const rents = [1850, 1920, 1990, 2050, 2100, 2140, 2200, 2280, 2340, 2410, 2780];
const s = rents.slice().sort((a, b) => a - b);
const q = p => { const i = (s.length - 1) * p, lo = Math.floor(i); return s[lo] + (s[Math.ceil(i)] - s[lo]) * (i - lo); };
const q1 = q(0.25), median = q(0.5), q3 = q(0.75), iqr = q3 - q1;
const low = s.find(v => v >= q1 - 1.5 * iqr), high = s.filter(v => v <= q3 + 1.5 * iqr).pop();
const y = v => 280 - (v - 1600) / 1400 * 260;

drawLine(100, y(low), 100, y(high), '#172335', 1.5);             // whiskers
drawRect(70, y(q3), 60, y(q1) - y(q3), '#e3eaf8');              // box
drawLine(70, y(median), 130, y(median), '#3558a8', 3);           // median
s.filter(v => v > high || v < low).forEach(v => drawCircle(100, y(v), 4, '#d1495b'));`,
    faq: [
      ['How do you read a box plot?', 'The line in the box is the median. The box holds the middle 50% of values, from the lower quarter to the upper quarter. The whiskers show the usual range, and dots beyond them are unusual values.'],
      ['What counts as an outlier in a box plot?', 'The usual rule is any value more than 1.5 times the box height above the box or below it. This template uses that rule.'],
      ['When should I use a box plot instead of a histogram?', 'Use a box plot when you want to compare several groups at once. Use a histogram when you want to see the full shape of one group.'],
      ['What are the limits of a box plot?', 'It hides the shape inside the box. Two groups can have the same box but very different patterns, like two peaks. Show the points or use a violin plot when shape matters.'],
    ],
  },
  {
    num: 33, cat: '04-distribution', slug: '033-violin-plot', name: 'Violin Plot',
    example: 'coffee order waits at four cafes',
    title: 'Free Violin Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free violin plot made with HTML, CSS and vanilla JavaScript. Smooth distribution shapes with the median and middle half inside. One file to download.',
    keywords: 'violin plot, violin plot javascript, violin chart html, distribution shape chart, kde plot',
    what: [
      'A violin plot shows the full shape of a set of numbers as a smooth, mirrored outline. The wider the shape at a value, the more data points sit there. Most violin plots also hold a small box plot inside.',
      'It shows things a box plot hides, such as two peaks. In this example, one cafe has quick waits and slow waits but very few in between, which a box plot would miss completely.',
    ],
    glance: { best: 'Comparing the shape of several groups', data: 'A list of numbers for each group, 50 or more', avoid: 'Very small groups. Show the points instead.' },
    when: ['Wait or service times by location', 'Prices or ratings by category', 'Results from different test groups', 'Any data that might have two peaks'],
    instead: [['032-box-plot', 'You want a simpler summary most people know'], ['035-ridgeline-plot', 'You have many groups, like months of the year']],
    features: ['Smooth shapes made with a density estimate written in plain JavaScript', 'All shapes use the same scale so widths compare fairly', 'A dark bar for the middle half and a white dot for the median', 'Shapes open out from the center on load', 'Tooltips with the median and middle half', 'Keyboard support and a table of key numbers'],
    code: `const waits = [2.8, 3.1, 3.4, 2.6, 7.9, 8.4, 3.0, 8.8, 7.2, 3.3];
const bw = 0.6, cx = 200;
const density = t => waits.reduce((a, v) => a + Math.exp(-0.5 * ((t - v) / bw) ** 2), 0);
const ts = Array.from({ length: 60 }, (v, i) => i * 12 / 59);
const max = Math.max(...ts.map(density));
const y = t => 280 - t / 12 * 260;

const right = ts.map(t => (cx + density(t) / max * 60) + ',' + y(t));
const left = ts.map(t => (cx - density(t) / max * 60) + ',' + y(t)).reverse();
make('path', { d: 'M' + right.join('L') + 'L' + left.join('L') + 'Z', fill: '#6f4e37' });`,
    faq: [
      ['What is a violin plot?', 'A violin plot is a chart that shows how values are spread using a smooth, mirrored shape. Wide parts mean many values, thin parts mean few.'],
      ['What is the difference between a violin plot and a box plot?', 'A box plot shows five summary numbers. A violin plot shows the full shape of the data, so it can reveal two peaks or gaps that a box plot hides.'],
      ['How is the shape of a violin plot made?', 'It uses a kernel density estimate. Each value adds a small bell curve, and all the curves are added together into one smooth outline.'],
      ['When should I avoid violin plots?', 'Avoid them with very little data, because the smooth shape can suggest patterns that are not really there. Show the individual points instead.'],
    ],
  },
  {
    num: 34, cat: '04-distribution', slug: '034-density-plot', name: 'Density Plot',
    example: 'sunflower heights with and without plant feed',
    title: 'Free Density Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free density plot made with HTML, CSS and vanilla JavaScript. Two smooth distribution curves compared, with medians and a crosshair. One file to download.',
    keywords: 'density plot, density plot javascript, kde plot html, distribution curve chart, smooth histogram',
    what: [
      'A density plot is a smooth curve that shows how a set of numbers is spread out. It is like a histogram without the steps, which makes it easy to lay two groups on top of each other and compare them.',
      'The higher the curve, the more values sit at that point. In this example, the whole GrowRich curve sits to the right, which shows that fed plants grew taller across the board, not just on average.',
    ],
    glance: { best: 'Comparing the spread of two or three groups', data: 'A list of numbers for each group', avoid: 'Very small data sets. The curve can mislead.' },
    when: ['Test results before and after a change', 'Heights, weights or sizes of two groups', 'Prices from two sellers', 'Times for two versions of a process'],
    instead: [['031-histogram', 'You only have one group and want exact counts'], ['035-ridgeline-plot', 'You have many groups to compare']],
    features: ['Two smooth curves made with a density estimate in plain JavaScript', 'See through fills so both shapes stay visible', 'Dashed median lines with labels', 'Small ticks along the bottom for every single plant', 'A crosshair that tells you what share of each group is taller than a height', 'Arrow key support and a data table'],
    code: `const heights = [162, 171, 158, 180, 167, 175, 149, 169, 184, 166];
const bw = 7;
const xs = Array.from({ length: 80 }, (v, i) => 120 + i * 100 / 79);
const density = xs.map(x => heights.reduce((a, h) => a + Math.exp(-0.5 * ((x - h) / bw) ** 2), 0));
const max = Math.max(...density);
const pts = xs.map((x, i) => ((x - 120) * 5.6 + 20) + ',' + (280 - density[i] / max * 240));

make('path', { d: 'M20,280L' + pts.join('L') + 'L580,280Z', fill: '#e0a800', 'fill-opacity': 0.35 });
make('path', { d: 'M' + pts.join('L'), fill: 'none', stroke: '#e0a800', 'stroke-width': 3 });`,
    faq: [
      ['What is a density plot?', 'A density plot is a smooth curve that shows where values are common and where they are rare. It is a smooth version of a histogram.'],
      ['What does the y axis mean on a density plot?', 'It shows density, not a count. What matters is the shape and height compared with other points, which is why many density plots hide the y axis, like this one.'],
      ['How smooth should a density curve be?', 'That depends on the bandwidth. A small bandwidth follows every bump, a large one smooths everything away. Pick one that shows the real shape without noise.'],
      ['Density plot or histogram?', 'Use a histogram when people need exact counts. Use a density plot when you want to compare the shape of two or three groups on one chart.'],
    ],
  },
  {
    num: 35, cat: '04-distribution', slug: '035-ridgeline-plot', name: 'Ridgeline Plot',
    example: 'daily high temperatures for each month of the year',
    title: 'Free Ridgeline Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free ridgeline plot made with HTML, CSS and vanilla JavaScript. Twelve overlapping distribution curves in one compact chart. One file to download.',
    keywords: 'ridgeline plot, ridgeline chart javascript, joy plot html, stacked density plot, temperature distribution chart',
    what: [
      'A ridgeline plot stacks several density curves on top of each other, each one slightly overlapping the next, like a row of hills. Each ridge shows how values were spread in one group.',
      'It is perfect for groups that follow an order, like months of the year. You can watch the whole shape slide warmer in summer and cooler in winter in one glance.',
    ],
    glance: { best: 'Many ordered groups, like months or years', data: 'A list of numbers for each group', avoid: 'Groups with no natural order.' },
    when: ['Temperatures or rainfall by month', 'Prices or scores year by year', 'Response times by hour of the day', 'Ages or incomes across several surveys'],
    instead: [['033-violin-plot', 'You have only a few groups'], ['020-horizon-chart', 'You want to see each day in order, not the spread']],
    features: ['Twelve ridges drawn from density estimates in plain JavaScript', 'Each ridge colored by its middle temperature, from blue to red', 'Ridges overlap so the chart stays compact', 'Tooltips with the middle high, most days and the full range', 'Short month names on phones', 'Keyboard support and a data table'],
    code: `const months = [[8, 9, 11, 7, 10, 9], [15, 17, 16, 18, 14, 16], [26, 28, 27, 30, 25, 29]];
const colors = ['#4575b4', '#fee090', '#d73027'];
const bw = 1.5, step = 60;

months.forEach((temps, i) => {
  const base = 80 + i * step;
  const pts = [];
  for (let t = 0; t <= 36; t += 0.5) {
    const d = temps.reduce((a, v) => a + Math.exp(-0.5 * ((t - v) / bw) ** 2), 0) / temps.length;
    pts.push((40 + t * 15) + ',' + (base - d * 110));
  }
  make('path', { d: 'M40,' + base + 'L' + pts.join('L') + 'L580,' + base + 'Z', fill: colors[i], stroke: '#fff' });
});`,
    faq: [
      ['What is a ridgeline plot?', 'A ridgeline plot is a set of density curves stacked with a small overlap, one for each group, so you can compare how values are spread across many groups.'],
      ['Why is it also called a joy plot?', 'The name came from the album cover of Joy Division, which shows stacked lines in the same style. Ridgeline plot is the name most people use now.'],
      ['How many groups can a ridgeline plot show?', 'It works well with 5 to 20 groups. Twelve months, like in this template, is a classic use.'],
      ['Should the ridges overlap?', 'A little overlap keeps the chart compact and makes the shapes easier to compare. Too much and the peaks hide the ridges behind them.'],
    ],
  },
  {
    num: 36, cat: '04-distribution', slug: '036-beeswarm-plot', name: 'Beeswarm Plot',
    example: 'finish times for 300 marathon runners',
    title: 'Free Beeswarm Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free beeswarm plot made with HTML, CSS and vanilla JavaScript. Every data point shown without overlap, colored by group. One file to download.',
    keywords: 'beeswarm plot, beeswarm chart javascript, swarm plot html, dot distribution chart, every point chart',
    what: [
      'A beeswarm plot shows every single data point as a dot, placed along an axis and nudged sideways so no two dots overlap. Where many values are close together, the dots pile up into a swarm.',
      'It gives you the shape of a histogram and the detail of every point at the same time. People like it because each dot is a real person, order or event they can point at.',
    ],
    glance: { best: 'Showing every value while keeping the shape', data: 'A list of numbers, up to a few hundred', avoid: 'Thousands of points. Use a histogram.' },
    when: ['Race or exam results', 'Prices of every product in a range', 'Survey answers where each person matters', 'Stories about people, like ages of members'],
    instead: [['031-histogram', 'You have thousands of values'], ['037-strip-plot', 'You want several groups on separate rows']],
    features: ['300 dots placed without overlap by a simple layout in plain JavaScript', 'Dots colored by age group', 'Hide an age group from the key and the swarm rebuilds', 'A line marking four hours', 'Times shown as hours and minutes', 'A summary table for each age group'],
    code: `const times = [238, 241, 239, 250, 244, 262, 240, 246, 243, 255];
const x = t => 40 + (t - 200) * 7, r = 6, mid = 150;
const placed = [];

times.slice().sort((a, b) => a - b).forEach(t => {
  let y = mid;
  for (let k = 1; placed.some(p => Math.hypot(p[0] - x(t), p[1] - y) < r * 2); k++) {
    y = mid + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * r;   // try above, then below
  }
  placed.push([x(t), y]);
  drawCircle(x(t), y, r, '#38bdf8');
});`,
    faq: [
      ['What is a beeswarm plot?', 'A beeswarm plot is a chart where every value is a dot along an axis, moved sideways just enough to avoid overlapping. The pile of dots shows where values are common.'],
      ['How many points can a beeswarm plot show?', 'A few hundred works well. With thousands, the swarm gets too tall or the dots too small, and a histogram is clearer.'],
      ['What is the difference between a beeswarm and a strip plot?', 'A strip plot scatters dots randomly and they can overlap. A beeswarm places each dot carefully so none overlap, which looks neater and shows the shape better.'],
      ['Does the sideways position mean anything?', 'No. Only the position along the main axis carries the value. The sideways spread is just there to stop dots covering each other.'],
    ],
  },
  {
    num: 37, cat: '04-distribution', slug: '037-strip-plot', name: 'Strip Plot',
    example: 'train delays on five lines over 60 weekdays',
    title: 'Free Strip Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free strip plot made with HTML, CSS and vanilla JavaScript. Every point in each group shown as a dot, with the median marked. One file to download.',
    keywords: 'strip plot, strip chart javascript, jitter plot html, dot plot by group, individual values chart',
    what: [
      'A strip plot shows every value in each group as a dot along a line, one row per group. The dots are spread out a little at random, called jitter, so they do not sit exactly on top of each other.',
      'It is the most honest way to show small and medium data sets, because nothing is hidden or summed up. You see the usual values, the bad days and the gaps all at once.',
    ],
    glance: { best: 'Every value for a few groups, up to about 100 each', data: 'A list of numbers for each group', avoid: 'Very large groups. Dots turn into a blur.' },
    when: ['Delays or response times by route', 'Scores for each player or class', 'Daily sales by store', 'Any data where the bad days matter'],
    instead: [['032-box-plot', 'You want a short summary instead of every point'], ['036-beeswarm-plot', 'You have one group and want a neater layout']],
    features: ['One row per train line with 60 jittered dots', 'A dark mark for the middle day on each line', 'A shaded area for days more than 10 minutes late', 'Sort by most late or by name', 'Hover any dot to see the day and delay', 'A table with middle, average and bad days'],
    code: `const lines = [['Orange', [3.1, 12.4, 1.8, 5.6, 18.2, 2.9]], ['Green', [0.8, 1.2, 0.4, 2.1, 1.0, 0.6]]];
const x = min => 110 + min * 18;

lines.forEach(([name, delays], row) => {
  const y = 40 + row * 60;
  drawText(100, y + 4, name, 'end');
  delays.forEach(d => drawCircle(x(d), y + (Math.random() - 0.5) * 30, 5, '#1f6feb'));
});`,
    faq: [
      ['What is a strip plot?', 'A strip plot is a chart that shows every value as a dot along a line, usually with one row per group. It is also called a jitter plot or a one dimensional scatter plot.'],
      ['What is jitter in a strip plot?', 'Jitter is a small random nudge across the row, so dots with the same or close values do not hide each other. It carries no meaning of its own.'],
      ['When should I use a strip plot?', 'Use it when you have up to about 100 values per group and you want people to see every one, including the unusual ones.'],
      ['Can I combine a strip plot with a box plot?', 'Yes, and it is a very good idea. The box sums up the group and the dots show the detail. The box plot template in this collection has a switch for that.'],
    ],
  },
  {
    num: 38, cat: '04-distribution', slug: '038-population-pyramid', name: 'Population Pyramid',
    example: 'the age of a town in 2006 and 2026',
    title: 'Free Population Pyramid in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free population pyramid made with HTML, CSS and vanilla JavaScript. Two sided age chart with a year switch and comparison outline. One file to download.',
    keywords: 'population pyramid, age pyramid chart javascript, population pyramid html, age sex chart, demographic chart',
    what: [
      'A population pyramid shows how many people there are in each age group, with men on one side and women on the other. The youngest are at the bottom and the oldest at the top.',
      'Its shape tells a story. A wide base means many children, a straight column means a steady population, and a wide top means an ageing town. Comparing two years shows how a place has changed.',
    ],
    glance: { best: 'The age and sex make up of a population', data: 'A count of men and women for each age group', avoid: 'Data with no age groups.' },
    when: ['Towns, cities and countries', 'Staff of a company by age', 'Members of a club or customers of a shop', 'Planning schools, housing or health services'],
    instead: [['010-diverging-bar-chart', 'You have one value per item that can be positive or negative'], ['031-histogram', 'You only have ages, not men and women']],
    features: ['Men and women on opposite sides of a center line', 'A switch between 2006 and 2026', 'A dashed outline of the other year for a direct comparison', 'Age groups written in the middle', 'Bars grow outward from the center on load', 'Tooltips with both years, and a full data table'],
    code: `const ages = ['0-19', '20-39', '40-59', '60-79', '80+'];
const men = [640, 820, 700, 420, 90], women = [610, 800, 720, 480, 150];
const mid = 300, scale = 0.3, rowH = 40;

ages.slice().reverse().forEach((age, i) => {
  const k = ages.length - 1 - i, y = 20 + i * rowH;
  drawRect(mid - 30 - men[k] * scale, y, men[k] * scale, rowH - 6, '#3f7cc4');
  drawRect(mid + 30, y, women[k] * scale, rowH - 6, '#d9577f');
  drawText(mid, y + 22, age, 'middle');
});`,
    faq: [
      ['What is a population pyramid?', 'It is a pair of horizontal bar charts back to back, showing how many men and women there are in each age group, with the youngest at the bottom.'],
      ['How do you read a population pyramid?', 'Look at the shape. A wide bottom means a young population, a wide top means an old one. Compare the two sides to see where there are more men or more women.'],
      ['Should I use counts or percentages?', 'Use counts for one place and one year. Use percentages when comparing places or years with very different totals, so the shapes compare fairly.'],
      ['Why does the pyramid often get wider at the top for women?', 'Women tend to live longer, so in older age groups there are usually more women than men. You can see this in the top rows of the example.'],
    ],
  },
  {
    num: 39, cat: '04-distribution', slug: '039-error-bars', name: 'Error Bar Chart',
    example: 'battery life test results for five phones',
    title: 'Free Error Bar Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free error bar chart made with HTML, CSS and vanilla JavaScript. Averages with 95% confidence intervals and every test shown. One file to download.',
    keywords: 'error bars, error bar chart javascript, confidence interval chart html, mean and error chart, uncertainty chart',
    what: [
      'An error bar chart shows an average for each group plus a line that shows how sure we are about it. The longer the line, the less certain the average. Here the line is a 95% confidence interval.',
      'It stops people from reading too much into small differences. If two lines overlap a lot, the test cannot really say which group is better, even if one average is a little higher.',
    ],
    glance: { best: 'Averages from tests or samples, with their uncertainty', data: 'An average and a margin of error for each group', avoid: 'Data with no measure of uncertainty.' },
    when: ['Product tests and reviews', 'A and B tests on a website', 'Survey results with a margin of error', 'Science and lab results'],
    instead: [['032-box-plot', 'You want to show the spread of the data, not the certainty of the average'], ['007-dot-plot', 'There is no uncertainty to show']],
    features: ['A big dot for each average and a line with end caps for the 95% range', 'Every single test shown as a faint dot behind', 'A switch to hide the tests and show averages only', 'Phones sorted from longest to shortest battery life', 'Tooltips with the likely range and number of tests', 'Keyboard support and a data table'],
    code: `const phones = [['Arc One', 23.2, 1.0], ['Nova 12', 22.1, 1.2], ['Lumo 5', 17.3, 0.7]];
const x = h => 100 + (h - 12) * 30;

phones.forEach(([name, mean, margin], row) => {
  const y = 40 + row * 60;
  drawLine(x(mean - margin), y, x(mean + margin), y, '#172424', 2.5);      // range
  drawLine(x(mean - margin), y - 8, x(mean - margin), y + 8, '#172424', 2.5); // caps
  drawLine(x(mean + margin), y - 8, x(mean + margin), y + 8, '#172424', 2.5);
  drawCircle(x(mean), y, 8, '#0f766e');
  drawText(90, y + 4, name, 'end');
});`,
    faq: [
      ['What do error bars show?', 'Error bars show how uncertain a value is. They can show a confidence interval, the standard error or the standard deviation, so always say which one you use. This template uses 95% confidence intervals.'],
      ['What does a 95% confidence interval mean?', 'If you ran the same test many times, about 95% of the ranges worked out this way would contain the true average. In short, the true average is very likely inside the line.'],
      ['If error bars overlap, is there no difference?', 'Not always, but a large overlap means the data cannot clearly show a difference. Small overlaps need a proper statistical test to judge.'],
      ['How do I work out a 95% confidence interval?', 'Take the standard deviation of your results, divide by the square root of the number of results, and multiply by a value from the t table, about 2.2 for 12 tests.'],
    ],
  },
  {
    num: 40, cat: '04-distribution', slug: '040-ecdf-chart', name: 'Cumulative Distribution Chart',
    example: 'page load times for three versions of a website',
    title: 'Free ECDF Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free cumulative distribution (ECDF) chart made with HTML, CSS and vanilla JavaScript. Compare speeds or times against a target. One file to download.',
    keywords: 'ecdf chart, cumulative distribution chart javascript, cdf plot html, percentile chart, page speed chart',
    what: [
      'A cumulative distribution chart, often called an ECDF, shows what share of values are at or below each point. The line starts at 0% and climbs to 100% as it counts every value from smallest to largest.',
      'It answers questions like: what share of visits loaded within 2.5 seconds? Just find 2.5 on the bottom and read the height of each line. The further left a line climbs, the faster that version is.',
    ],
    glance: { best: 'Reading what share is under a limit', data: 'A list of numbers for each group', avoid: 'Audiences who have never seen one. Explain how to read it.' },
    when: ['Page speed and response times', 'Delivery or wait times against a promise', 'Test scores against a pass mark', 'Comparing before and after a change'],
    instead: [['031-histogram', 'You want to see where values bunch up'], ['034-density-plot', 'You want the shape rather than the running share']],
    features: ['Step lines built from the sorted data in plain JavaScript', 'A dashed line for the 2.5 second target', 'A crosshair that reads the share for every version at any time', 'Hide a version from the key', 'Lines reveal from left to right on load', 'Arrow key support and a data table'],
    code: `const times = [1.2, 1.6, 1.4, 2.1, 1.8, 2.6, 1.5, 3.2, 1.9, 1.3];
const s = times.slice().sort((a, b) => a - b);
const x = t => 40 + t / 4 * 540, y = p => 280 - p * 260;

let d = 'M' + x(0) + ',' + y(0);
s.forEach((t, i) => { d += 'H' + x(t) + 'V' + y((i + 1) / s.length); });
make('path', { d: d + 'H' + x(4), fill: 'none', stroke: '#16a34a', 'stroke-width': 3 });
drawLine(x(2.5), y(0), x(2.5), y(1), '#181d2b', 1.5, '6 4');`,
    faq: [
      ['What is an ECDF chart?', 'ECDF stands for empirical cumulative distribution function. It is a chart that shows, for every value, what share of the data is at or below it.'],
      ['How do you read an ECDF?', 'Pick a value on the bottom axis and go up to the line. The height is the share of values at or below that point. For example, 96% of visits loaded within 2.5 seconds.'],
      ['Why use an ECDF instead of a histogram?', 'An ECDF has no bins to choose, shows every value, and makes it easy to read percentiles and compare groups against a target.'],
      ['How do I find the median on an ECDF?', 'Go across from 50% on the side axis to the line, then down to the bottom axis. That value is the median.'],
    ],
  },
  {
    num: 41, cat: '05-relationships', slug: '041-scatter-plot', name: 'Scatter Plot',
    example: 'used car prices against mileage',
    title: 'Free Scatter Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free scatter plot made with HTML, CSS and vanilla JavaScript. No library. Trend line, groups, hover and arrow key control. One file to download.',
    keywords: 'scatter plot html, scatter plot javascript, scatter chart without library, svg scatter plot, trend line chart, xy chart',
    what: [
      'A scatter plot is a chart that shows the relationship between two numbers. Each item is a dot, placed by one value across the bottom and another up the side.',
      'The pattern of dots tells the story. Dots that slope down from left to right mean that as one number goes up, the other goes down, like car prices falling as the miles add up. A trend line sums up that pattern in one line.',
    ],
    glance: { best: 'Seeing if two numbers move together', data: 'Two numbers for each item', avoid: 'Data over time. Use a line chart.' },
    when: ['Price against age, size or mileage', 'Ad spend against sales', 'Study hours against test scores', 'Height against weight, or any two measures'],
    instead: [['042-bubble-chart', 'You have a third number to show as size'], ['046-hexbin-plot', 'You have thousands of points that overlap'], ['011-line-chart', 'One of your numbers is time']],
    features: ['120 dots in three colors for hatchback, sedan and SUV', 'A least squares trend line worked out in plain JavaScript', 'A label on the line that says what the slope means', 'Hover near a dot, or use the arrow keys, to read each car', 'Hide a car type from the key and the trend line updates', 'A switch to show or hide the trend line'],
    code: `const cars = [[12000, 24500], [45000, 19800], [78000, 15200], [101000, 12900], [130000, 9100]];
const x = m => 40 + m / 150000 * 540, y = p => 280 - p / 35000 * 260;
cars.forEach(([miles, price]) => drawCircle(x(miles), y(price), 6, '#e4572e'));

// trend line (least squares)
const n = cars.length, mx = cars.reduce((a, c) => a + c[0], 0) / n, my = cars.reduce((a, c) => a + c[1], 0) / n;
const b = cars.reduce((a, c) => a + (c[0] - mx) * (c[1] - my), 0) / cars.reduce((a, c) => a + (c[0] - mx) ** 2, 0);
const a = my - b * mx;
drawLine(x(0), y(a), x(150000), y(a + b * 150000), '#16222e', 2, '7 5');`,
    faq: [
      ['What is a scatter plot used for?', 'It shows whether two numbers are related. If the dots form a clear slope, one number tends to change when the other does.'],
      ['How do I add a trend line to a scatter plot?', 'Work out a least squares line: find the average of each number, then the slope that best fits the dots. This template shows the exact code in about five lines.'],
      ['Does a scatter plot show cause and effect?', 'No. It shows that two numbers move together, not that one causes the other. Something else may drive both.'],
      ['What if my dots overlap too much?', 'Make them smaller and see through, or switch to a hexbin plot, which counts dots into hexagons.'],
    ],
  },
  {
    num: 42, cat: '05-relationships', slug: '042-bubble-chart', name: 'Bubble Chart',
    example: 'ad campaigns compared on cost, conversion and budget',
    title: 'Free Bubble Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free bubble chart made with HTML, CSS and vanilla JavaScript. Three numbers per item as x, y and size, grouped by color. One file to download.',
    keywords: 'bubble chart html, bubble chart javascript, bubble chart without library, svg bubble chart, 3 variable chart',
    what: [
      'A bubble chart is a scatter plot where each dot is a bubble of a different size. It shows three numbers at once: one across the bottom, one up the side and one as the size of the bubble.',
      'Color can add a fourth piece of information, like the channel of each campaign. It is a quick way to spot items that punch above their weight, like a small email campaign that beats big video spend.',
    ],
    glance: { best: 'Comparing items on three numbers at once', data: 'Three numbers for each item, plus an optional group', avoid: 'More than about 30 bubbles. It gets crowded.' },
    when: ['Marketing campaigns by cost, results and budget', 'Countries by income, health and population', 'Products by price, rating and sales', 'Projects by cost, value and team size'],
    instead: [['041-scatter-plot', 'You only have two numbers'], ['050-quadrant-chart', 'You want to sort items into four groups']],
    features: ['Bubble area, not width, matches the budget so sizes are honest', 'Four colors for search, social, display and email', 'Labels that move to find space and hide only when there is none', 'A note on the chart that says where the best value is', 'Hover or use the arrow keys to read each campaign', 'Hide a channel from the key'],
    code: `const campaigns = [['Loyalty points', 0.06, 8.8, 1200], ['Spring sale', 1.10, 4.8, 9000], ['Summer video', 0.35, 1.4, 15000]];
const x = cpc => 40 + cpc / 1.6 * 540, y = cr => 280 - cr / 10 * 260;

campaigns.forEach(([name, cpc, conv, budget]) => {
  const r = Math.sqrt(budget) * 0.3; // area matches the budget
  drawCircle(x(cpc), y(conv), r, '#5ad19a');
  drawText(x(cpc) + r + 5, y(conv) + 4, name);
});`,
    faq: [
      ['What is a bubble chart?', 'A bubble chart is a scatter plot where each point is a circle sized by a third number. It shows three measures for each item in one view.'],
      ['How should bubble size be worked out?', 'Scale the area, not the radius. Use the square root of the value for the radius, otherwise big values look far bigger than they are.'],
      ['How many bubbles can a bubble chart show?', 'Up to about 30 works well. With more, bubbles overlap and labels no longer fit.'],
      ['What is the difference between a bubble chart and a scatter plot?', 'A scatter plot shows two numbers per item. A bubble chart adds a third one as size.'],
    ],
  },
  {
    num: 43, cat: '05-relationships', slug: '043-heatmap', name: 'Heatmap',
    example: 'gym check-ins by day and hour',
    title: 'Free Heatmap in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free heatmap made with HTML, CSS and vanilla JavaScript. A color grid of busy times with hover and full keyboard control. One file to download.',
    keywords: 'heatmap html, heatmap javascript, heat map without library, calendar heatmap grid, color grid chart',
    what: [
      'A heatmap is a grid of squares where color shows a value. Rows and columns are two categories, like days and hours, and darker squares mean bigger numbers.',
      'Patterns jump out at once: the after work rush, quiet weekend evenings, busy Monday. People read color faster than numbers, which is why heatmaps are so popular for times and schedules.',
    ],
    glance: { best: 'Patterns across two categories, like day and hour', data: 'A number for every row and column pair', avoid: 'When exact values matter more than the pattern.' },
    when: ['Busy times for shops, gyms or websites', 'Sales by product and month', 'Support tickets by team and weekday', 'Any table of numbers people need to scan fast'],
    instead: [['044-correlation-matrix', 'You want to show how measures relate to each other'], ['020-horizon-chart', 'You have one long time series per row']],
    features: ['A 7 by 17 grid built from plain SVG squares', 'One color scale from pale to deep purple', 'Numbers inside the squares when there is room', 'Arrow keys move around the grid one square at a time', 'Tooltips with the share of the busiest hour', 'Short labels on phones and a full data table'],
    code: `const days = ['Mon', 'Tue', 'Wed'];
const counts = [[27, 40, 30, 15, 60, 103], [31, 48, 33, 14, 57, 95], [30, 50, 32, 13, 51, 90]];
const max = 103, size = 40;

counts.forEach((row, i) => {
  drawText(40, 60 + i * size + 25, days[i], 'end');
  row.forEach((v, j) => {
    const t = v / max;
    const color = 'rgb(' + Math.round(247 - 173 * t) + ',' + Math.round(240 - 220 * t) + ',' + Math.round(252 - 142 * t) + ')';
    drawRect(50 + j * size, 60 + i * size, size - 3, size - 3, color);
  });
});`,
    faq: [
      ['What is a heatmap used for?', 'A heatmap shows patterns in a grid of numbers using color. It is common for busy times, schedules, sales by month and website clicks.'],
      ['How do I choose colors for a heatmap?', 'Use one color going from light to dark for values that only go up. Use two colors meeting at a neutral middle when values can be above or below a midpoint.'],
      ['Should I show numbers in a heatmap?', 'If there is room, yes. Color shows the pattern and the numbers give the exact value. On small screens, keep the numbers in the tooltip.'],
      ['Is a heatmap the same as a choropleth map?', 'No. A heatmap is a grid. A choropleth colors areas on a real map, like countries or regions.'],
    ],
  },
  {
    num: 44, cat: '05-relationships', slug: '044-correlation-matrix', name: 'Correlation Matrix',
    example: 'what drives daily sales at a cafe',
    title: 'Free Correlation Matrix in HTML and JavaScript (Live Demo)',
    desc: 'Free correlation matrix made with HTML, CSS and vanilla JavaScript. Color coded correlation values with plain English tooltips. One file to download.',
    keywords: 'correlation matrix, correlation heatmap javascript, correlation chart html, correlogram, pearson correlation chart',
    what: [
      'A correlation matrix is a grid that shows how strongly each pair of measures rises and falls together. Each square holds a number from -1 to +1, and color makes the strong links easy to spot.',
      'A value near +1 means the two go up together, near -1 means one goes up as the other goes down, and near 0 means there is no clear link. Only half the grid is shown, because the other half would repeat it.',
    ],
    glance: { best: 'Finding which measures are linked', data: 'Several numbers recorded for the same items or days', avoid: 'Proving cause and effect. It only shows links.' },
    when: ['Sales against weather, footfall and day of week', 'Survey questions that tend to be answered alike', 'Health, fitness or sensor readings', 'Choosing which measures to track'],
    instead: [['041-scatter-plot', 'You want to look closely at one pair'], ['043-heatmap', 'Your grid is two categories, not pairs of measures']],
    features: ['Correlation values shown in a lower triangle so nothing repeats', 'Blue for together, red for opposite, fading to white near zero', 'Tooltips that explain each value in plain English', 'Every square can be reached with the Tab key', 'Numbers inside squares when there is room', 'A full correlation table for copying'],
    code: `const names = ['Temperature', 'Iced drinks', 'Hot drinks'];
const m = [[1, 0.86, -0.55], [0.86, 1, -0.36], [-0.55, -0.36, 1]];
const size = 70;

for (let i = 0; i < names.length; i++) {
  for (let j = 0; j <= i; j++) {
    const r = m[i][j], alpha = 0.1 + Math.abs(r) * 0.9;
    drawRect(120 + j * size, 20 + i * size, size - 4, size - 4, (r >= 0 ? 'rgba(43,108,176,' : 'rgba(201,60,60,') + alpha + ')');
    drawText(120 + j * size + 33, 20 + i * size + 38, r.toFixed(2), 'middle');
  }
  drawText(110, 20 + i * size + 38, names[i], 'end');
}`,
    faq: [
      ['What is a correlation matrix?', 'It is a table of correlation values for every pair of measures, usually colored so strong links stand out. It is a quick way to see what is linked to what.'],
      ['What is a good correlation value?', 'As a rough guide, above 0.7 or below -0.7 is strong, 0.4 to 0.7 is moderate, and below 0.2 is almost no link. What counts as useful depends on your field.'],
      ['Why is only half of the matrix shown?', 'The grid is a mirror image: temperature against iced drinks is the same as iced drinks against temperature. Showing half avoids repeating every number.'],
      ['Does correlation mean causation?', 'No. Two things can rise together because a third thing drives both. Weekends raise both footfall and pastry sales, for example.'],
    ],
  },
  {
    num: 45, cat: '05-relationships', slug: '045-connected-scatter-plot', name: 'Connected Scatter Plot',
    example: 'monthly bike share trips against average temperature',
    title: 'Free Connected Scatter Plot in HTML and JavaScript (Live Demo)',
    desc: 'Free connected scatter plot made with HTML, CSS and vanilla JavaScript. Two measures over time joined in order, with a trend line. One file to download.',
    keywords: 'connected scatter plot, connected scatter javascript, scatter plot with lines html, two variables over time chart',
    what: [
      'A connected scatter plot is a scatter plot where the dots are joined in time order. Each dot is one moment, placed by two measures, and the line shows the path from one moment to the next.',
      'It shows how two things moved together over time. In this example, trips climb with temperature through spring, dip below the trend during the summer holidays, then come back down in autumn.',
    ],
    glance: { best: 'Two measures that change together over time', data: 'Two numbers for each point in time', avoid: 'Audiences new to charts. Label the path clearly.' },
    when: ['Sales against price month by month', 'Trips or visitors against temperature', 'Two economic measures over the years', 'Speed against distance during a race'],
    instead: [['012-multi-line-chart', 'You want both measures on a simple time axis'], ['041-scatter-plot', 'The order of the points does not matter']],
    features: ['Twelve months joined by arrows so the order is clear', 'Month names beside every dot', 'A dashed trend line to compare each month against', 'July and August marked in a second color', 'Tooltips that say how far above or below the trend each month was', 'Arrow key support and a data table'],
    code: `const temp = [3, 9, 17, 24, 19, 8], trips = [27, 44, 74, 88, 84, 43];
const names = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'];
const x = t => 40 + t / 26 * 540, y = n => 280 - (n - 20) / 80 * 260;
const pts = temp.map((t, i) => [x(t), y(trips[i])]);

make('path', { d: 'M' + pts.map(p => p.join(',')).join('L'), fill: 'none', stroke: '#0f8b7d', 'stroke-width': 2 });
pts.forEach((p, i) => { drawCircle(p[0], p[1], 6, '#0f8b7d'); drawText(p[0] + 10, p[1] + 4, names[i]); });`,
    faq: [
      ['What is a connected scatter plot?', 'It is a scatter plot with the points joined in time order, so you can see how two measures changed together from one period to the next.'],
      ['How do you read a connected scatter plot?', 'Follow the line from the first point to the last. Moving right means the bottom measure grew, moving up means the side measure grew.'],
      ['Why add arrows to the line?', 'Without arrows, readers may not know which end is the start. Arrows and labels make the direction of time obvious.'],
      ['When is a connected scatter plot better than two line charts?', 'When the link between the two measures is the story. Two line charts show each measure over time, but make it harder to see how they move together.'],
    ],
  },
  {
    num: 46, cat: '05-relationships', slug: '046-hexbin-plot', name: 'Hexbin Plot',
    example: 'distance and fare for 3,000 taxi rides',
    title: 'Free Hexbin Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free hexbin plot made with HTML, CSS and vanilla JavaScript. Thousands of points grouped into hexagons, colored by count. One file to download.',
    keywords: 'hexbin plot, hexbin chart javascript, hexagonal binning html, dense scatter plot, 2d histogram',
    what: [
      'A hexbin plot is a scatter plot for large data. Instead of drawing thousands of dots that pile on top of each other, it counts the points that fall in each hexagon and colors the hexagon by that count.',
      'You can see where most of the data sits, which a crowded scatter plot hides. Hexagons are used instead of squares because they fit together neatly and their centers are all the same distance apart.',
    ],
    glance: { best: 'Thousands of points on two measures', data: 'Two numbers for each item, ideally 1,000 or more', avoid: 'Small data sets. A scatter plot shows each point.' },
    when: ['Taxi or delivery rides by distance and price', 'Website visits by time on page and pages seen', 'Sensor readings with many samples', 'Property sales by size and price'],
    instead: [['041-scatter-plot', 'You have fewer than about 500 points'], ['043-heatmap', 'Both of your measures are categories']],
    features: ['3,000 rides counted into hexagons in plain JavaScript', 'A color scale from pale to deep blue by number of rides', 'A dashed line for the average fare formula', 'Hover or use the arrow keys to read each hexagon', 'Smaller hexagons on phones', 'A summary table by distance band'],
    code: `const rides = [[2.1, 7.9], [4.5, 12.1], [4.8, 12.6], [5.1, 13.0], [12.4, 27.5], [4.6, 12.2]];
const R = 14, dx = R * Math.sqrt(3), dy = R * 1.5;
const x = km => 40 + km / 30 * 540, y = f => 280 - f / 70 * 260;
const bins = {};

rides.forEach(([km, fare]) => {
  const row = Math.round(y(fare) / dy), col = Math.round((x(km) - (row % 2 ? dx / 2 : 0)) / dx);
  const key = row + ',' + col;
  bins[key] = (bins[key] || 0) + 1;
});
Object.entries(bins).forEach(([key, n]) => {
  const [row, col] = key.split(',').map(Number), cx = col * dx + (row % 2 ? dx / 2 : 0), cy = row * dy;
  const pts = [0, 1, 2, 3, 4, 5].map(k => (cx + R * Math.cos(Math.PI / 3 * k + Math.PI / 6)) + ',' + (cy + R * Math.sin(Math.PI / 3 * k + Math.PI / 6)));
  make('polygon', { points: pts.join(' '), fill: n > 1 ? '#1f4fd1' : '#a9bff5' });
});`,
    faq: [
      ['What is a hexbin plot?', 'It is a chart that groups many points into hexagon shaped bins and colors each hexagon by how many points it holds. It is used when a scatter plot has too many dots to read.'],
      ['Why use hexagons instead of squares?', 'Hexagons fit together with no gaps and are closer to circles, so each bin covers a more even area. This makes patterns look smoother and fairer than with squares.'],
      ['How big should the hexagons be?', 'Big enough that most hexagons hold several points, small enough to keep the shape. Try a few sizes. This template uses smaller hexagons on phones.'],
      ['Is a hexbin plot the same as a 2D histogram?', 'It is one kind of 2D histogram. A 2D histogram can use squares or hexagons. Hexbin simply means it uses hexagons.'],
    ],
  },
  {
    num: 47, cat: '05-relationships', slug: '047-contour-plot', name: 'Contour Plot',
    example: 'a hill walk with height lines and a trail',
    title: 'Free Contour Plot in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free contour plot made with HTML, CSS and vanilla JavaScript. Height lines drawn with marching squares, a trail and hover height. One file to download.',
    keywords: 'contour plot, contour map javascript, contour lines html, marching squares, topographic map chart, height map chart',
    what: [
      'A contour plot shows a surface on a flat map using lines. Each line joins points that share the same value, like the same height on a hill. Close lines mean a steep slope, far apart lines mean gentle ground.',
      'Hikers know these lines from maps, but the same chart works for any value that changes across two measures, like temperature across a region or profit across different prices and ad budgets.',
    ],
    glance: { best: 'A value that changes smoothly across two measures', data: 'A value for every point on a grid', avoid: 'Scattered data without a smooth surface.' },
    when: ['Hills and trail maps', 'Temperature or rainfall across an area', 'Results across two settings, like price and budget', 'Signal strength or noise across a room'],
    instead: [['043-heatmap', 'Your grid has only a few rows and columns'], ['046-hexbin-plot', 'You have raw points, not a surface']],
    features: ['Height lines every 50 meters drawn with marching squares in plain JavaScript', 'A soft color fill from green lowland to pale summit', 'Thicker lines every 200 meters', 'A trail that draws itself from the car park to the top', 'Hover anywhere, or move a marker with the arrow keys, to read the height', 'A table of heights along the trail'],
    code: `// Color a grid of cells by height (the base of a contour map)
const height = (x, y) => 150 + 460 * Math.exp(-(((x - 0.6) / 0.18) ** 2 + ((y - 0.45) / 0.2) ** 2));
const cols = 40, rows = 25, cell = 14;

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < cols; i++) {
    const z = height(i / cols, j / rows), t = (z - 150) / 460;
    drawRect(i * cell, j * cell, cell, cell, 'rgb(' + Math.round(200 - 40 * t) + ',' + Math.round(225 - 90 * t) + ',' + Math.round(180 - 80 * t) + ')');
  }
}`,
    faq: [
      ['What is a contour plot?', 'A contour plot draws lines that join points with the same value on a flat map. It is the same idea as the height lines on a hiking map.'],
      ['How are contour lines drawn?', 'With an algorithm called marching squares. It looks at each small square of a grid, checks which corners are above the chosen height, and draws a short line through the square where the height is crossed.'],
      ['What do lines close together mean?', 'They mean the value changes quickly over a short distance. On a hill map, that is a steep slope.'],
      ['Can I use contour plots for business data?', 'Yes. Any result that depends on two settings, like profit across price and ad spend, can be shown as a contour plot to find the best area.'],
    ],
  },
  {
    num: 48, cat: '05-relationships', slug: '048-radar-chart', name: 'Radar Chart',
    example: 'three laptops scored on six features',
    title: 'Free Radar Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free radar chart made with HTML, CSS and vanilla JavaScript. Compare several items across many scores, with toggles and tooltips. One file to download.',
    keywords: 'radar chart html, spider chart javascript, radar chart without library, web chart, star chart comparison',
    what: [
      'A radar chart, also called a spider chart, shows several scores on axes that spread out from a center, like spokes on a wheel. Each item is a shape joining its scores, and bigger shapes mean higher scores.',
      'The shape shows strengths and weak spots at a glance. A spiky shape is great at a few things and weak at others, while a round shape is a good all rounder.',
    ],
    glance: { best: 'Comparing 2 or 3 items across 5 to 8 scores', data: 'A score on the same scale for each feature', avoid: 'Many items. Shapes pile up and hide each other.' },
    when: ['Product comparisons and reviews', 'Player or team skills', 'Survey scores across several topics', 'Staff or course feedback'],
    instead: [['002-grouped-bar-chart', 'You need exact comparisons of each score'], ['049-parallel-coordinates', 'You have many items to compare']],
    features: ['Six axes with rings at 2, 4, 6, 8 and 10', 'See through shapes so all three laptops stay visible', 'A dot for each score with its own tooltip and Tab stop', 'Hide a laptop from the key', 'Shapes grow out from the center on load', 'Short axis names on phones'],
    code: `const axes = ['Battery', 'Speed', 'Screen', 'Weight', 'Value', 'Build'];
const scores = [9, 6, 7, 9, 6, 8];
const cx = 200, cy = 160, R = 120;
const at = (r, i) => [cx + r * Math.sin(i / axes.length * Math.PI * 2), cy - r * Math.cos(i / axes.length * Math.PI * 2)];

axes.forEach((a, i) => { const [x, y] = at(R, i); drawLine(cx, cy, x, y, '#e3e4ef'); drawText(...at(R + 16, i), a, 'middle'); });
make('polygon', { points: scores.map((s, i) => at(R * s / 10, i).join(',')).join(' '), fill: '#4f46e5', 'fill-opacity': 0.2, stroke: '#4f46e5', 'stroke-width': 2 });`,
    faq: [
      ['What is a radar chart used for?', 'It compares a few items across several scores on the same scale, like laptops on battery, speed and screen. The shapes show strengths and weak spots.'],
      ['Is a radar chart the same as a spider chart?', 'Yes. Radar chart, spider chart, web chart and star chart all mean the same thing.'],
      ['How many items can a radar chart compare?', 'Two or three. With more, the shapes overlap too much. Use small multiples, one radar per item, if you have more.'],
      ['What are the problems with radar charts?', 'The area of a shape depends on the order of the axes, and exact values are hard to read. Keep scores on one scale and use bars when precision matters.'],
    ],
  },
  {
    num: 49, cat: '05-relationships', slug: '049-parallel-coordinates', name: 'Parallel Coordinates Chart',
    example: 'rental flats compared on six measures',
    title: 'Free Parallel Coordinates Chart in HTML and JavaScript (Live Demo)',
    desc: 'Free parallel coordinates chart made with HTML, CSS and vanilla JavaScript. Filter many items across many measures by dragging on the axes. One file to download.',
    keywords: 'parallel coordinates, parallel coordinates chart javascript, parallel coordinates html, multi dimensional chart, brushing filter chart',
    what: [
      'A parallel coordinates chart shows many measures side by side as vertical axes. Each item is a line that crosses every axis at its value, so you can follow one flat across rent, size, rooms, distance and more.',
      'Its real power is filtering. Drag on an axis to keep only the items in that range, and the rest fade away. It turns a big table into a tool for finding the few options that tick every box.',
    ],
    glance: { best: 'Filtering many items across many measures', data: 'Several numbers for each item', avoid: 'Readers who need a quick, simple picture.' },
    when: ['Choosing a flat, car or laptop from many options', 'Comparing products on many specs', 'Finding patterns in survey or sensor data', 'Screening candidates, suppliers or stocks'],
    instead: [['048-radar-chart', 'You only compare two or three items'], ['044-correlation-matrix', 'You want to see which measures are linked']],
    features: ['Six axes, each with its own scale and units', 'Drag up or down on any axis to filter, click to clear', 'Quick filter buttons for common searches', 'A live count of how many flats match', 'Hover any line to see every value for that flat', 'Short axis names on phones and a full data table'],
    code: `const axes = [['Rent', 400, 1800], ['Size', 30, 115], ['Km to center', 0, 15]];
const flats = [[1450, 62, 3.2], [980, 41, 9.5], [1720, 98, 1.4]];
const x = i => 60 + i * 240, y = (v, [, lo, hi]) => 280 - (v - lo) / (hi - lo) * 250;

axes.forEach((a, i) => { drawLine(x(i), 30, x(i), 280, '#221e1a', 1.5); drawText(x(i), 20, a[0], 'middle'); });
flats.forEach(f => {
  const pts = f.map((v, i) => x(i) + ',' + y(v, axes[i]));
  make('path', { d: 'M' + pts.join('L'), fill: 'none', stroke: '#b45309', 'stroke-width': 2 });
});`,
    faq: [
      ['What is a parallel coordinates chart?', 'It is a chart with several vertical axes side by side, one per measure. Each item is drawn as a line that crosses every axis at its value.'],
      ['What is brushing in parallel coordinates?', 'Brushing means dragging along an axis to select a range. Only items inside all selected ranges stay highlighted, which makes it a powerful filter.'],
      ['How many lines can a parallel coordinates chart show?', 'Hundreds, if the lines are thin and see through. Filtering is what keeps it useful with many items.'],
      ['Does the order of the axes matter?', 'Yes. Patterns between two measures are easiest to see when their axes sit next to each other. Put related measures side by side.'],
    ],
  },
  {
    num: 50, cat: '05-relationships', slug: '050-quadrant-chart', name: 'Quadrant Chart',
    example: 'app features sorted by effort and impact',
    title: 'Free Quadrant Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free quadrant chart made with HTML, CSS and vanilla JavaScript. A priority matrix with draggable points and keyboard control. One file to download.',
    keywords: 'quadrant chart, priority matrix javascript, 2x2 matrix html, effort impact matrix, draggable chart',
    what: [
      'A quadrant chart is a scatter plot split into four boxes by two lines. Each box is a group with its own meaning, like do first, plan it, maybe later and skip for now.',
      'It is the chart behind the effort and impact matrix used by product and project teams. Placing every idea on one grid makes it easy to agree on what to do next, and dragging the dots makes it a working planning tool.',
    ],
    glance: { best: 'Sorting items into four clear groups', data: 'Two scores for each item', avoid: 'Data where the dividing lines have no real meaning.' },
    when: ['Product roadmaps and feature planning', 'Task lists by urgency and importance', 'Suppliers by cost and quality', 'Customers by value and growth'],
    instead: [['042-bubble-chart', 'You also want to show a third number as size'], ['041-scatter-plot', 'There are no natural groups']],
    features: ['Four tinted areas with titles and short explanations', 'Drag any dot to a new place and its group updates', 'Tab to a dot and move it with the arrow keys', 'Labels that move to avoid overlapping', 'The data table updates as you move dots', 'Tooltips with both scores and the group'],
    code: `const features = [['Faster search', 3, 8], ['Offline mode', 8, 8], ['CSV export', 2, 4.4], ['Team chat', 9, 4]];
const x = v => 40 + v * 54, y = v => 290 - v * 27;
const groups = ['#16a34a', '#2563eb', '#ca8a04', '#dc2626'];

drawLine(x(5), y(0), x(5), y(10), '#5c6377');
drawLine(x(0), y(5), x(10), y(5), '#5c6377');
features.forEach(([name, effort, impact]) => {
  const g = impact > 5 ? (effort <= 5 ? 0 : 1) : (effort <= 5 ? 2 : 3);
  drawCircle(x(effort), y(impact), 9, groups[g]);
  drawText(x(effort) + 14, y(impact) + 4, name);
});`,
    faq: [
      ['What is a quadrant chart?', 'A quadrant chart is a scatter plot divided into four areas by a horizontal and a vertical line. Each area represents a group, like quick wins or big projects.'],
      ['What is an effort and impact matrix?', 'It is a quadrant chart with effort on one axis and impact on the other. It helps teams pick work that gives the most value for the least effort.'],
      ['Where should the dividing lines go?', 'Usually at the middle of each scale, or at a meaningful value like a target or an average. Say what the lines mean so readers trust the groups.'],
      ['Can I move the dots in this template?', 'Yes. Drag any dot with a mouse or finger, or tab to it and use the arrow keys. The group and the data table update as you go.'],
    ],
  },
  {
    num: 51, cat: '06-flow-and-network', slug: '051-sankey-diagram', name: 'Sankey Diagram',
    example: 'website visitors from source to landing page to outcome',
    title: 'Free Sankey Diagram in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free Sankey diagram made with HTML, CSS and vanilla JavaScript. No library. Flows between steps sized by value, with hover highlights. One file to download.',
    keywords: 'sankey diagram html, sankey chart javascript, sankey without library, flow diagram, user path chart, energy flow chart',
    what: [
      'A Sankey diagram shows how an amount flows from one set of steps to the next. Blocks stand for steps, and the bands between them get wider the more of the amount takes that path.',
      'It is the best chart for questions like: where did our visitors come from, which page did they land on, and what did they do next? The widest bands show the most common paths at a glance.',
    ],
    glance: { best: 'Flows through two or more stages', data: 'A list of from, to and amount', avoid: 'Flows that loop back to an earlier step.' },
    when: ['Website visitor paths', 'Energy or money flows in a system', 'Budgets from income to spending', 'Materials from source to product'],
    instead: [['028-funnel-chart', 'Everyone follows the same single path'], ['055-alluvial-diagram', 'Your stages are points in time'], ['052-chord-diagram', 'Flows go both ways between the same groups']],
    features: ['A Sankey layout written in about 25 lines of JavaScript', 'Bands colored by where visitors came from', 'Hover a block to highlight every band that passes through it', 'Hover a band to see the number and its share', 'Labels with a soft outline so they stay readable over bands', 'A data table with every flow'],
    code: `const flows = [['Search', 'Home', 1800], ['Search', 'Blog', 1500], ['Social', 'Home', 900]];
const left = { Search: [20, 200], Social: [240, 60] };   // y and height of each block
const right = { Home: [40, 160], Blog: [220, 90] };
const used = {}, filled = {};
const scale = 0.06;

flows.forEach(([from, to, n]) => {
  const w = n * scale;
  const y1 = left[from][0] + (used[from] || 0), y2 = right[to][0] + (filled[to] || 0);
  used[from] = (used[from] || 0) + w; filled[to] = (filled[to] || 0) + w;
  make('path', { d: 'M60,' + y1 + 'C300,' + y1 + ' 300,' + y2 + ' 540,' + y2 + 'L540,' + (y2 + w) + 'C300,' + (y2 + w) + ' 300,' + (y1 + w) + ' 60,' + (y1 + w) + 'Z', fill: '#4f5bd5', 'fill-opacity': 0.4 });
});`,
    faq: [
      ['What is a Sankey diagram used for?', 'It shows how an amount moves between stages, like visitors from traffic source to page to sign up, or energy from source to use. Band width shows the amount on each path.'],
      ['How is a Sankey diagram different from a funnel chart?', 'A funnel shows one path where people drop out. A Sankey shows many paths that split and join, so you can see where each group ends up.'],
      ['Where does the name Sankey come from?', 'It is named after Matthew Sankey, an Irish engineer who used this style in 1898 to show the energy use of a steam engine.'],
      ['How do I make a Sankey diagram without a library?', 'Place the blocks in columns with heights that match their totals, then draw each flow as a curved band from the right edge of one block to the left edge of the next. This template does it in plain JavaScript.'],
    ],
  },
  {
    num: 52, cat: '06-flow-and-network', slug: '052-chord-diagram', name: 'Chord Diagram',
    example: 'customers switching between five phone networks',
    title: 'Free Chord Diagram in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free chord diagram made with HTML, CSS and vanilla JavaScript. Two way flows between groups shown as ribbons, with hover highlights. One file to download.',
    keywords: 'chord diagram, chord diagram javascript, chord chart html, circular flow chart, migration chart',
    what: [
      'A chord diagram arranges groups around a circle and joins them with ribbons. Each ribbon shows the flow between two groups, and its width at each end shows how much went in that direction.',
      'It is made for two way flows, like customers switching between phone networks or people moving between cities. You can see at once who gains, who loses and which pairs swap the most.',
    ],
    glance: { best: 'Two way flows between a handful of groups', data: 'A table of how much moved from each group to each other group', avoid: 'More than about 8 groups. It turns into a tangle.' },
    when: ['Customers switching between brands', 'People moving between cities or countries', 'Trade between regions', 'Messages or calls between teams'],
    instead: [['051-sankey-diagram', 'Flows go one way through stages'], ['043-heatmap', 'You want a grid that is easier to read exactly']],
    features: ['Arcs sized by how many people left each network', 'Ribbons drawn with SVG curves through the center', 'Each ribbon colored by the network that won the bigger share', 'Hover a network to highlight its ribbons and see its net gain', 'Hover a ribbon to see the numbers in both directions', 'A full from and to table'],
    code: `const names = ['Nova', 'Beam', 'Pulse'];
const m = [[0, 12, 8], [18, 0, 6], [9, 10, 0]];
const cx = 200, cy = 160, r = 120;
const total = m.flat().reduce((a, b) => a + b, 0);
const pt = a => (cx + r * Math.sin(a)) + ',' + (cy - r * Math.cos(a));
let a = 0; const spans = [];

m.forEach((row, i) => { spans.push(row.map(v => { const s = [a, a + v / total * Math.PI * 2]; a = s[1]; return s; })); });
for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) {
  const [s, t] = [spans[i][j], spans[j][i]];
  make('path', { fill: '#7c83ff', 'fill-opacity': 0.5, d: 'M' + pt(s[0]) + 'A' + r + ',' + r + ' 0 0 1 ' + pt(s[1]) + 'Q' + cx + ',' + cy + ' ' + pt(t[0]) + 'A' + r + ',' + r + ' 0 0 1 ' + pt(t[1]) + 'Q' + cx + ',' + cy + ' ' + pt(s[0]) + 'Z' });
}`,
    faq: [
      ['What is a chord diagram?', 'A chord diagram places groups around a circle and draws ribbons between them to show how much flows from each group to each other group.'],
      ['How do you read a chord diagram?', 'Pick a group on the circle. Each ribbon leaving it goes to another group. The width of the ribbon at each end shows how much moved in that direction.'],
      ['When is a chord diagram better than a Sankey diagram?', 'When flows go both ways between the same groups, like switching between networks. A Sankey is better when flows move forward through stages.'],
      ['How many groups can a chord diagram show?', 'About 5 to 8. With more, ribbons get too thin and cross too often to follow.'],
    ],
  },
  {
    num: 53, cat: '06-flow-and-network', slug: '053-arc-diagram', name: 'Arc Diagram',
    example: 'characters who share scenes in a novel',
    title: 'Free Arc Diagram in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free arc diagram made with HTML, CSS and vanilla JavaScript. Connections between items drawn as arcs above a line, with hover focus. One file to download.',
    keywords: 'arc diagram, arc diagram javascript, arc chart html, connection chart, character network',
    what: [
      'An arc diagram puts items in a row along a line and joins connected items with curved arcs above it. Thicker arcs mean stronger links, and bigger dots mean items with more connections.',
      'It is a tidy way to show a network when the order of the items matters, like characters grouped by family. Because every item sits on one line, labels never collide the way they can in a tangled network graph.',
    ],
    glance: { best: 'Small networks where order or grouping matters', data: 'A list of items and a list of links with strengths', avoid: 'Large networks with hundreds of links.' },
    when: ['Characters in a book, play or film', 'Songs or chapters that share themes', 'Teams that work together', 'Stations or stops with direct links'],
    instead: [['054-network-graph', 'You want the clusters to form on their own'], ['052-chord-diagram', 'You have flows with a direction and amount']],
    features: ['Arcs drawn with SVG arc paths above a single line', 'Arc width by number of shared scenes, dot size by total scenes', 'Arcs draw themselves on load', 'Hover a character to light up only their arcs', 'Sort by family or by most scenes', 'Tilted names on phones and a data table'],
    code: `const people = ['Nora', 'Elias', 'Ruth', 'Iris', 'Tom'];
const links = [[0, 1, 14], [0, 2, 9], [0, 3, 8], [3, 4, 7], [1, 2, 5]];
const x = i => 60 + i * 120, base = 260;

links.forEach(([a, b, n]) => {
  const r = (x(b) - x(a)) / 2;
  make('path', { d: 'M' + x(a) + ',' + base + 'A' + r + ',' + r + ' 0 0 1 ' + x(b) + ',' + base, fill: 'none', stroke: '#9c4a2f', 'stroke-width': 1 + n * 0.7, 'stroke-opacity': 0.5 });
});
people.forEach((p, i) => { drawCircle(x(i), base, 8, '#9c4a2f'); drawText(x(i), base + 26, p, 'middle'); });`,
    faq: [
      ['What is an arc diagram?', 'An arc diagram places items along a line and draws arcs between items that are connected. It is a simple way to show a network.'],
      ['When should I use an arc diagram instead of a network graph?', 'Use an arc diagram when the order of items matters or when you want neat, readable labels. Use a network graph when you want groups to form naturally.'],
      ['Does the order of items matter?', 'Yes. Putting related items next to each other gives short arcs and a cleaner picture. This template lets you sort by family or by number of scenes.'],
      ['How many items can an arc diagram show?', 'Up to about 30 is comfortable. With more, the arcs overlap into a solid shape.'],
    ],
  },
  {
    num: 54, cat: '06-flow-and-network', slug: '054-network-graph', name: 'Network Graph',
    example: 'who runs with whom in a running club',
    title: 'Free Network Graph in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free force directed network graph made with HTML, CSS and vanilla JavaScript. Draggable nodes, groups and hover highlights. One file to download.',
    keywords: 'network graph, force directed graph javascript, network diagram html, node link diagram, graph without library',
    what: [
      'A network graph shows things as dots, called nodes, and the links between them as lines. A force directed layout pushes all nodes apart and pulls linked nodes together, so tight groups form on their own.',
      'It reveals the shape of a network: close knit groups, loners and the few people who link groups together. In this example, two members connect three groups that would otherwise barely meet.',
    ],
    glance: { best: 'Seeing groups and key connectors in a network', data: 'A list of items and a list of links', avoid: 'Very large networks without filtering.' },
    when: ['Friends, members or team connections', 'Websites that link to each other', 'Products that are bought together', 'Emails or messages between people'],
    instead: [['053-arc-diagram', 'You want a tidy layout with readable labels'], ['052-chord-diagram', 'Links have amounts and directions between a few groups']],
    features: ['A force simulation written in about 20 lines of JavaScript', 'Nodes colored by group and sized by number of partners', 'Drag any member to rearrange the graph', 'Hover a member to light up only their running partners', 'The layout fits any screen size', 'A table sorted by the most connected members'],
    code: `const nodes = [{}, {}, {}, {}, {}].map(() => ({ x: 200 + Math.random() * 100, y: 150 + Math.random() * 100 }));
const links = [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4]];

for (let step = 0; step < 300; step++) {
  nodes.forEach((a, i) => nodes.forEach((b, j) => {            // push apart
    if (i >= j) return;
    const dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy + 0.1, f = 400 / d2;
    a.x -= dx * f; a.y -= dy * f; b.x += dx * f; b.y += dy * f;
  }));
  links.forEach(([i, j]) => {                                    // pull linked nodes together
    const a = nodes[i], b = nodes[j], dx = b.x - a.x, dy = b.y - a.y, f = 0.02;
    a.x += dx * f; a.y += dy * f; b.x -= dx * f; b.y -= dy * f;
  });
}
links.forEach(([i, j]) => drawLine(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y, '#9aa'));
nodes.forEach(n => drawCircle(n.x, n.y, 10, '#1f7a5a'));`,
    faq: [
      ['What is a force directed graph?', 'It is a network layout where nodes push away from each other and links pull connected nodes together, like springs. After many small steps, the layout settles into clear groups.'],
      ['How many nodes can a network graph show?', 'A few hundred in the browser. For larger networks, filter to the part that matters or group nodes together.'],
      ['Can I drag the nodes?', 'Yes. Grab any member and move them. The lines follow so you can untangle the view or pull a group apart.'],
      ['What does a node in the middle of two groups mean?', 'It usually marks a connector: someone who links groups that would otherwise not meet. In the example, Sam and Priya play that role.'],
    ],
  },
  {
    num: 55, cat: '06-flow-and-network', slug: '055-alluvial-diagram', name: 'Alluvial Diagram',
    example: 'customers changing plans over three years',
    title: 'Free Alluvial Diagram in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free alluvial diagram made with HTML, CSS and vanilla JavaScript. Shows how groups change over time, with hover to follow a plan. One file to download.',
    keywords: 'alluvial diagram, alluvial chart javascript, alluvial plot html, customer migration chart, plan change chart',
    what: [
      'An alluvial diagram shows how items move between groups over time. Each column is a point in time, blocks show the groups, and bands show items moving from one group to another between columns.',
      'It is like a Sankey diagram where the stages are dates. It answers questions like: how many free users became paying customers, and how many of them later cancelled?',
    ],
    glance: { best: 'The same items changing groups over time', data: 'Counts of items moving between groups for each step in time', avoid: 'Many groups per column. Bands get too thin.' },
    when: ['Customers moving between plans', 'Students changing subjects year to year', 'Voters or members changing groups', 'Staff moving between teams'],
    instead: [['051-sankey-diagram', 'Your stages are steps in a process, not dates'], ['014-stacked-area-chart', 'You only care about the size of each group over time']],
    features: ['Three columns for 2024, 2025 and 2026', 'Bands colored by the plan customers came from', 'Hover a block to see every band that passes through it', 'Hover a band to see how many stayed or moved', 'Bands reveal from left to right on load', 'A table of plan sizes each year'],
    code: `const years = [[600, 300, 100], [370, 315, 165]];   // Free, Basic, Pro
const moves = [[0, 0, 360], [0, 1, 120], [1, 1, 190], [1, 2, 60], [2, 2, 85]];
const colors = ['#9aa4c4', '#4dabf7', '#7048e8'], k = 0.28, gap = 14;
const tops = years.map(col => { let y = 20; return col.map(v => { const t = y; y += v * k + gap; return t; }); });
const outUsed = [0, 0, 0], inUsed = [0, 0, 0];

moves.forEach(([a, b, n]) => {
  const w = n * k, y1 = tops[0][a] + outUsed[a], y2 = tops[1][b] + inUsed[b];
  outUsed[a] += w; inUsed[b] += w;
  make('path', { d: 'M80,' + y1 + 'C300,' + y1 + ' 300,' + y2 + ' 520,' + y2 + 'V' + (y2 + w) + 'C300,' + (y2 + w) + ' 300,' + (y1 + w) + ' 80,' + (y1 + w) + 'Z', fill: colors[a], 'fill-opacity': 0.45 });
});`,
    faq: [
      ['What is an alluvial diagram?', 'It is a chart that shows how items move between groups across several points in time, using blocks for groups and bands for the moves.'],
      ['What is the difference between an alluvial diagram and a Sankey diagram?', 'They look alike. A Sankey usually shows flow through steps of a process. An alluvial diagram shows the same items being grouped differently over time.'],
      ['Why is it called alluvial?', 'The bands look like rivers splitting and joining, and alluvial means made by flowing water, like soil left by a river.'],
      ['How many time points can an alluvial diagram show?', 'Three to five columns work well. With more, the chart gets wide and the bands hard to follow.'],
    ],
  },
  {
    num: 56, cat: '06-flow-and-network', slug: '056-tree-diagram', name: 'Tree Diagram',
    example: 'a garden centre website map with monthly visits',
    title: 'Free Tree Diagram in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free collapsible tree diagram made with HTML, CSS and vanilla JavaScript. A sitemap you can fold and unfold, sized by visits. One file to download.',
    keywords: 'tree diagram html, collapsible tree javascript, tree chart without library, sitemap diagram, hierarchy tree',
    what: [
      'A tree diagram shows a hierarchy as branches. It starts from one root, splits into sections, and each section splits again, just like folders on a computer or pages on a website.',
      'Folding branches open and closed keeps big trees easy to read. Adding size to the circles, like monthly visits, turns a plain sitemap into a map of where people actually go.',
    ],
    glance: { best: 'Hierarchies you want to read branch by branch', data: 'A nested list of items, with a value for each end item', avoid: 'Comparing sizes exactly. Use a treemap.' },
    when: ['Website sitemaps', 'Folder and file structures', 'Product categories', 'Decision trees and family trees'],
    instead: [['024-treemap', 'You want to compare sizes and use space fully'], ['060-radial-tree', 'You want a round layout for many end items'], ['058-org-chart', 'You are showing people and roles']],
    features: ['A tidy tree layout that places each branch between its children', 'Circle size and branch width by monthly visits', 'Click or press Enter to fold and unfold sections', 'Folded sections turn dark so you know they hold more', 'Keyboard focus stays on the section you toggled', 'A table of every page with its visits'],
    code: `const tree = { name: 'Home', kids: [{ name: 'Shop', kids: [{ name: 'Plants' }, { name: 'Tools' }] }, { name: 'Advice', kids: [{ name: 'Blog' }] }] };
let row = 0;
function place(node, depth) {
  node.x = 60 + depth * 200;
  if (node.kids) { node.kids.forEach(k => place(k, depth + 1)); node.y = (node.kids[0].y + node.kids[node.kids.length - 1].y) / 2; }
  else node.y = 40 + row++ * 60;
}
place(tree, 0);
(function draw(n) {
  (n.kids || []).forEach(k => { make('path', { d: 'M' + n.x + ',' + n.y + 'C' + (n.x + 100) + ',' + n.y + ' ' + (k.x - 100) + ',' + k.y + ' ' + k.x + ',' + k.y, fill: 'none', stroke: '#b9d3c0', 'stroke-width': 2 }); draw(k); });
  drawCircle(n.x, n.y, 8, '#2f855a'); drawText(n.x + 12, n.y + 4, n.name);
})(tree);`,
    faq: [
      ['What is a tree diagram?', 'A tree diagram shows a hierarchy as a set of branches that start from one root and split into smaller and smaller parts.'],
      ['How do I make a collapsible tree in JavaScript?', 'Keep a closed flag on each branch, skip its children when laying out the tree, and redraw when the branch is clicked. This template does that without a library.'],
      ['How is the layout worked out?', 'End items get their own row, one after another. Each branch then sits halfway between its first and last child, and its depth sets how far right it goes.'],
      ['Is a tree diagram the same as a dendrogram?', 'No. A tree diagram shows a fixed structure, like a sitemap. A dendrogram shows items grouped by how similar they are, and the branch length has meaning.'],
    ],
  },
  {
    num: 57, cat: '06-flow-and-network', slug: '057-dendrogram', name: 'Dendrogram',
    example: 'grocery items that shoppers buy together',
    title: 'Free Dendrogram in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free dendrogram made with HTML, CSS and vanilla JavaScript. A cluster tree with a movable cut line that colors the groups. One file to download.',
    keywords: 'dendrogram, dendrogram javascript, cluster tree html, hierarchical clustering chart, similarity tree',
    what: [
      'A dendrogram is a tree that shows how items group together by how similar they are. Items that join close to the start are very alike, and items that only join near the end have little in common.',
      'Drawing a line across the tree splits the items into groups. Cut early and you get many small groups, cut late and you get a few big ones. It is the usual way to show the result of a clustering analysis.',
    ],
    glance: { best: 'Showing groups found by similarity', data: 'The result of a clustering: which items join and at what distance', avoid: 'Structures that are not based on similarity, like an org chart.' },
    when: ['Products bought together', 'Customers with similar habits', 'Songs, films or books with similar features', 'Survey answers or genes that behave alike'],
    instead: [['056-tree-diagram', 'You have a fixed hierarchy, like a sitemap'], ['044-correlation-matrix', 'You want to see every pair of items']],
    features: ['A cluster tree drawn with right angled lines', 'A cut line with three settings: 2, 4 or 8 groups', 'Groups below the cut line get their own color', 'Hover a join point to see which items it holds', 'The tree draws from left to right on load', 'A table that lists the items in each group'],
    code: `const tree = { h: 0.6, k: [{ h: 0.2, k: [{ n: 'Bread' }, { n: 'Butter' }] }, { h: 0.15, k: [{ n: 'Pasta' }, { n: 'Sauce' }] }] };
const x = h => 500 - h * 600;
let row = 0;
(function draw(n) {
  if (!n.k) { n.y = 40 + row++ * 50; n.x = x(0); drawText(n.x + 8, n.y + 4, n.n); return; }
  n.k.forEach(draw);
  n.y = (n.k[0].y + n.k[n.k.length - 1].y) / 2; n.x = x(n.h);
  n.k.forEach(c => make('path', { d: 'M' + c.x + ',' + c.y + 'H' + n.x + 'V' + n.y, fill: 'none', stroke: '#171c26', 'stroke-width': 2 }));
})(tree);`,
    faq: [
      ['What is a dendrogram?', 'A dendrogram is a tree diagram that shows how items were grouped by similarity. The point where two branches join shows how different they are.'],
      ['How do you read a dendrogram?', 'Items that join near zero are very similar. Follow the branches: the further along two items join, the less they have in common.'],
      ['How do I choose how many groups to use?', 'Look for a place where branches join far apart, leaving a big gap. Cutting in that gap gives natural groups. In the example, a cut at 0.5 gives four clear groups.'],
      ['What is hierarchical clustering?', 'It is a method that starts with every item on its own and keeps joining the two closest groups until everything is one group. A dendrogram shows every step of that process.'],
    ],
  },
  {
    num: 58, cat: '06-flow-and-network', slug: '058-org-chart', name: 'Org Chart',
    example: 'the team structure of a design studio',
    title: 'Free Org Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free org chart made with HTML, CSS and vanilla JavaScript. Collapsible teams, avatar initials and a phone friendly list view. One file to download.',
    keywords: 'org chart html, organization chart javascript, org chart template free, company structure chart, team chart',
    what: [
      'An org chart, short for organization chart, shows who works in a company and who reports to whom. The leader sits at the top, team leads below, and their team members below them.',
      'A good org chart helps new staff, clients and partners find the right person fast. Folding teams keeps a big company readable, and a list view makes it work on a phone.',
    ],
    glance: { best: 'People, roles and reporting lines', data: 'A name, role and manager for each person', avoid: 'Very large companies without folding or search.' },
    when: ['Company about and team pages', 'Onboarding guides for new staff', 'Project team structures', 'Clubs, schools and volunteer groups'],
    instead: [['056-tree-diagram', 'You are showing pages, files or categories'], ['030-circle-packing', 'You only need team sizes, not names']],
    features: ['Cards with initials, name and role for every person', 'Each team has its own color', 'Click a team lead, or press Enter, to fold the team', 'Folded teams show how many people are hidden', 'Turns into an indented list on phones', 'A table of everyone and who they report to'],
    code: `const ceo = { n: 'Maya Okafor', r: 'CEO' };
const leads = [{ n: 'Leo Park', r: 'Design' }, { n: 'Sofia Alvarez', r: 'Engineering' }, { n: 'Grace Mensah', r: 'Clients' }];
const card = (x, y, p) => { drawRect(x, y, 150, 46, '#e4ecfd'); drawText(x + 10, y + 20, p.n); drawText(x + 10, y + 37, p.r); };

card(225, 10, ceo);
drawLine(300, 56, 300, 80, '#5c6378', 1.5);
drawLine(95, 80, 505, 80, '#5c6378', 1.5);
leads.forEach((p, i) => { const x = 20 + i * 205; drawLine(x + 75, 80, x + 75, 100, '#5c6378', 1.5); card(x, 100, p); });`,
    faq: [
      ['What is an org chart?', 'An org chart is a diagram that shows the people in an organization, their roles and who reports to whom.'],
      ['How do I make an org chart in HTML?', 'Lay out cards in rows by level, draw lines from each manager to their team, and add folding so big teams stay readable. This template does all of that in plain JavaScript.'],
      ['How do I make an org chart work on a phone?', 'Switch to an indented list below a certain width, with each team listed under its lead. This template does that automatically.'],
      ['What should each card show?', 'At least a name and a role. A photo or initials helps people recognize each other. Keep extra details, like email, for a tooltip or a profile page.'],
    ],
  },
  {
    num: 59, cat: '06-flow-and-network', slug: '059-flowchart', name: 'Flowchart',
    example: 'how an online shop handles a return request',
    title: 'Free Flowchart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free flowchart made with HTML, CSS and vanilla JavaScript. Steps, decisions and arrows, with example cases that light up their path. One file to download.',
    keywords: 'flowchart html, flowchart javascript, process diagram html, decision flowchart, workflow diagram free',
    what: [
      'A flowchart shows the steps of a process and the choices along the way. Rectangles are steps, diamonds are yes or no questions, and arrows show what happens next.',
      'It turns a written process into something anyone can follow in seconds. Lighting up the path for a real example, like a faulty item, shows exactly what the customer and the team will go through.',
    ],
    glance: { best: 'Processes with steps and decisions', data: 'A list of steps, questions and the arrows between them', avoid: 'Processes with dozens of branches. Split them up.' },
    when: ['Customer service and returns processes', 'Sign up, approval and support workflows', 'Troubleshooting guides', 'Training material for new staff'],
    instead: [['051-sankey-diagram', 'You want to show how many people took each path'], ['056-tree-diagram', 'You have a hierarchy, not a process']],
    features: ['Steps, questions and start and finish shapes in plain SVG', 'Arrows with Yes and No labels', 'Buttons that light up the path for three example cases', 'The chosen path fades in step by step', 'Text wraps to fit each box on any screen', 'A table that writes out each path in words'],
    code: `const steps = [['Request comes in', 150, 20, 'box'], ['Within 30 days?', 150, 100, 'question'], ['Refund', 150, 190, 'box']];

steps.forEach(([label, x, y, kind]) => {
  if (kind === 'question') make('polygon', { points: [[x + 90, y], [x + 180, y + 30], [x + 90, y + 60], [x, y + 30]].map(p => p.join(',')).join(' '), fill: '#fff3d6', stroke: '#d9a520' });
  else drawRect(x, y, 180, 50, '#dcf0ee');
  drawText(x + 90, y + (kind === 'question' ? 34 : 30), label, 'middle');
});
drawLine(240, 70, 240, 100, '#6a645a', 1.5);
drawLine(240, 160, 240, 190, '#6a645a', 1.5);`,
    faq: [
      ['What do the shapes in a flowchart mean?', 'Rounded shapes mark the start and end, rectangles are steps, diamonds are questions with yes or no answers, and arrows show the order.'],
      ['How do I make a flowchart in HTML?', 'Place each step on a simple grid, draw rectangles and diamonds with SVG, and join them with arrow lines. This template does it in plain JavaScript with no library.'],
      ['How can a flowchart be interactive?', 'Add example cases that highlight the path they take, like this template does. It helps readers see how the process works for a real situation.'],
      ['How big should a flowchart be?', 'Keep it to about 15 shapes. If it grows past that, split it into smaller flowcharts that link to each other.'],
    ],
  },
  {
    num: 60, cat: '06-flow-and-network', slug: '060-radial-tree', name: 'Radial Tree',
    example: 'every music genre and style in a record shop',
    title: 'Free Radial Tree in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free radial tree made with HTML, CSS and vanilla JavaScript. A hierarchy laid out in a circle, with path highlights on hover. One file to download.',
    keywords: 'radial tree, radial tree javascript, radial dendrogram html, circular tree chart, hierarchy circle',
    what: [
      'A radial tree is a tree diagram wrapped into a circle. The root sits in the middle, the first level forms an inner ring, and the end items spread around the outside.',
      'Wrapping the tree gives the outer ring far more room than a straight line would, so it can hold many end items in a compact, eye catching layout.',
    ],
    glance: { best: 'Hierarchies with many end items', data: 'A nested list with a value for each end item', avoid: 'When people need to scan names quickly in a list.' },
    when: ['Music, book or film categories', 'Product ranges in a shop', 'Topics and subtopics of a course', 'Family trees and language families'],
    instead: [['056-tree-diagram', 'You want names in an easy top to bottom list'], ['025-sunburst-chart', 'Sizes matter more than the links']],
    features: ['A tree laid out around a circle with curved branches', 'Genre circles sized by records in stock', 'Style labels turn to follow the circle and flip so they are never upside down', 'Hover a style to trace its path back to the middle', 'Dark theme with a color for each genre', 'A table of every style with its stock'],
    code: `const genres = [['Rock', ['Punk', 'Indie', 'Metal']], ['Jazz', ['Swing', 'Bebop']], ['Pop', ['Dance', 'K-pop']]];
const cx = 200, cy = 160, inner = 60, outer = 130;
const all = genres.flatMap(g => g[1]);
const at = (r, a) => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
let i = 0;

drawCircle(cx, cy, 8, '#333');
genres.forEach(([name, styles]) => {
  const angles = styles.map(() => (i++ + 0.5) / all.length * Math.PI * 2);
  const [gx, gy] = at(inner, (angles[0] + angles[angles.length - 1]) / 2);
  drawLine(cx, cy, gx, gy, '#f4a259', 2); drawCircle(gx, gy, 6, '#f4a259');
  angles.forEach((a, k) => { const [x, y] = at(outer, a); drawLine(gx, gy, x, y, '#f4a259'); drawCircle(x, y, 4, '#f4a259'); drawText(...at(outer + 12, a), styles[k], 'middle'); });
});`,
    faq: [
      ['What is a radial tree?', 'A radial tree is a tree diagram arranged in a circle, with the root in the center and each level forming a ring further out.'],
      ['Why use a radial tree instead of a normal tree?', 'The outer ring has much more room than a straight edge, so a radial tree fits many end items in a square space.'],
      ['How do you keep labels readable in a radial tree?', 'Rotate each label to point away from the center, and flip labels on the left half so they read left to right. This template does both.'],
      ['Is a radial tree the same as a sunburst chart?', 'They show the same kind of data. A radial tree draws branches and dots, while a sunburst fills rings with sized pieces.'],
    ],
  },
  {
    num: 61, cat: '07-dashboard-widgets', slug: '061-gauge-chart', name: 'Gauge Chart',
    example: 'a hotel Net Promoter Score by quarter',
    title: 'Free Gauge Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free gauge chart made with HTML, CSS and vanilla JavaScript. No library. Colored zones, an animated needle and a quarter switch. One file to download.',
    keywords: 'gauge chart html, gauge chart javascript, speedometer chart, dial chart without library, nps gauge, kpi gauge',
    what: [
      'A gauge chart shows one number on a dial, like the speedometer in a car. A needle points to the value, and colored zones show at a glance whether it is poor, good or great.',
      'Gauges work well for a single score that people check often, like a Net Promoter Score or server load. The zones give the number meaning without anyone needing to know what a good score is.',
    ],
    glance: { best: 'One score against clear zones', data: 'One number and the limits of each zone', avoid: 'Comparing many scores. Use a bullet chart.' },
    when: ['Customer satisfaction and NPS scores', 'Server, battery or storage levels', 'Sales against a monthly target', 'Health or quality scores on a dashboard'],
    instead: [['009-bullet-chart', 'You need to compare several scores in little space'], ['062-progress-ring', 'You are tracking progress toward goals'], ['023-semi-donut-chart', 'The total is made of several parts']],
    features: ['A half circle dial with four colored zones', 'A needle that swings from the last value to the new one', 'The score counts up in the middle as the needle moves', 'A quarter switch to compare the year', 'The zone name appears in its own color', 'Tooltips on each zone and a data table'],
    code: `const score = 47, cx = 220, cy = 220, r = 160;
const angle = v => (-90 + (v + 100) / 200 * 180) * Math.PI / 180;   // -100 to +100 across the top
const zones = [[-100, 0, '#e5484d'], [0, 30, '#f5a524'], [30, 70, '#46a758'], [70, 100, '#1d6b3a']];
const pt = (rad, v) => (cx + rad * Math.sin(angle(v))) + ',' + (cy - rad * Math.cos(angle(v)));

zones.forEach(([a, b, color]) => make('path', { fill: color,
  d: 'M' + pt(r, a) + 'A' + r + ',' + r + ' 0 0 1 ' + pt(r, b) + 'L' + pt(r * 0.74, b) + 'A' + r * 0.74 + ',' + r * 0.74 + ' 0 0 0 ' + pt(r * 0.74, a) + 'Z' }));
make('line', { x1: cx, y1: cy, x2: pt(r * 0.7, score).split(',')[0], y2: pt(r * 0.7, score).split(',')[1], stroke: '#2a2014', 'stroke-width': 5 });
drawCircle(cx, cy, 10, '#2a2014');`,
    faq: [
      ['What is a gauge chart used for?', 'A gauge shows a single value against a scale with colored zones, like a speedometer. It is used for scores and levels that people check often.'],
      ['How do I make a gauge chart without a library?', 'Draw the zones as SVG arc paths across a half circle, then draw a needle rotated to the angle of your value. This template does it in plain JavaScript.'],
      ['What is a Net Promoter Score?', 'It asks customers how likely they are to recommend you from 0 to 10. The share of 9s and 10s minus the share of 0 to 6 gives a score from -100 to +100.'],
      ['Are gauge charts a good idea?', 'For one key number with clear zones, yes. For several numbers they take a lot of space, and a bullet chart shows the same thing more compactly.'],
    ],
  },
  {
    num: 62, cat: '07-dashboard-widgets', slug: '062-progress-ring', name: 'Progress Ring Chart',
    example: 'daily goals in a language learning app',
    title: 'Free Progress Ring Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free progress ring chart made with HTML, CSS and vanilla JavaScript. Concentric goal rings that fill up, with day and week views. One file to download.',
    keywords: 'progress ring, progress circle javascript, activity rings html, goal ring chart, circular progress bar css',
    what: [
      'A progress ring shows how close you are to a goal as a ring that fills up. An empty ring means you have not started, a full ring means the goal is done, and a second lap means you went past it.',
      'Stacking a few rings inside each other shows several goals at once in a small space. People love closing rings, which is why fitness and learning apps use them to keep users coming back.',
    ],
    glance: { best: 'Progress toward two to four goals', data: 'A current value and a target for each goal', avoid: 'Comparing sizes between goals. Use bars.' },
    when: ['Daily goals in fitness, learning or health apps', 'Project or course completion', 'Fundraising or savings progress', 'Team targets on a dashboard'],
    instead: [['061-gauge-chart', 'You show one score against zones, not a goal'], ['009-bullet-chart', 'You track many targets side by side']],
    features: ['Three rings inside each other, each with its own color', 'Rings fill up with a rounded end cap', 'Goals past 100% show a second lap', 'A switch between today, yesterday and this week', 'Big numbers and what is left to go beside the rings', 'Tooltips and a data table'],
    code: `const goals = [[18, 20, '#ff6b6b'], [34, 40, '#4dabf7'], [3, 3, '#51cf66']];
const cx = 160, cy = 160, width = 28;
const pt = (r, a) => (cx + r * Math.sin(a)) + ',' + (cy - r * Math.cos(a));

goals.forEach(([done, target, color], i) => {
  const r = 130 - i * (width + 6), a = Math.min(done / target, 0.9999) * Math.PI * 2;
  make('circle', { cx, cy, r, fill: 'none', stroke: color, 'stroke-opacity': 0.2, 'stroke-width': width });
  make('path', { d: 'M' + pt(r, 0) + 'A' + r + ',' + r + ' 0 ' + (a > Math.PI ? 1 : 0) + ' 1 ' + pt(r, a), fill: 'none', stroke: color, 'stroke-width': width, 'stroke-linecap': 'round' });
});`,
    faq: [
      ['What is a progress ring?', 'A progress ring is a circle that fills up as you get closer to a goal. It is a round version of a progress bar.'],
      ['How do I make a circular progress bar in HTML?', 'Draw a faint full circle as the track, then draw an SVG arc from the top to the angle of your progress. A round line cap gives it the familiar look.'],
      ['How do I show more than 100%?', 'Draw a second, slightly thinner arc on top for the part past the goal, like this template does. People instantly read it as an extra lap.'],
      ['How many rings should I use?', 'Two to four. More than that and the inner rings get too small to read.'],
    ],
  },
  {
    num: 63, cat: '07-dashboard-widgets', slug: '063-kpi-cards', name: 'KPI Cards with Sparklines',
    example: 'revenue, orders, average order and returns for an online shop',
    title: 'Free KPI Cards with Sparklines in HTML and JavaScript (Live Demo)',
    desc: 'Free KPI cards with sparklines made with HTML, CSS and vanilla JavaScript. Big numbers, change badges and mini charts with a range switch. One file to download.',
    keywords: 'kpi cards html, kpi dashboard template, stat cards css, metric cards with sparkline, dashboard cards javascript',
    what: [
      'KPI cards show the few numbers that matter most, each on its own card with a big value, a badge for the change since last period and a tiny trend line. KPI stands for key performance indicator.',
      'They sit at the top of most dashboards because they answer the first question anyone asks: how are we doing right now? The badge color tells you if the change is good or bad, which is not always the same as up or down.',
    ],
    glance: { best: 'The top numbers at the head of a dashboard', data: 'A daily value for each measure over two periods', avoid: 'Showing more than about six cards. Pick what matters.' },
    when: ['Online shop and app dashboards', 'Weekly or monthly reports', 'Team and project dashboards', 'Finance and sales summaries'],
    instead: [['017-sparkline', 'You want many small trends in a table'], ['011-line-chart', 'One measure needs a full size chart']],
    features: ['Four cards in a grid that stacks on phones', 'Change badges in green or red, with return rate treated as better when it falls', 'A sparkline in every card with hover values for each day', 'A switch between 7, 30 and 90 days', 'Every number is worked out from the daily data', 'A data table with this period and the one before'],
    code: `const days = [8620, 9140, 8890, 9760, 10210, 9980, 10640];
const total = days.reduce((a, b) => a + b, 0), before = 61200;
const change = (total - before) / before * 100;
const x = i => 20 + i * 36, lo = Math.min(...days), hi = Math.max(...days), y = v => 150 - (v - lo) / (hi - lo) * 40;

drawRect(10, 10, 240, 160, '#ffffff');
drawText(24, 40, 'Revenue');
drawText(24, 80, '$' + total.toLocaleString('en-US'));
drawText(24, 105, (change >= 0 ? '+' : '') + change.toFixed(1) + '% vs last week');
make('path', { d: 'M' + days.map((v, i) => x(i) + ',' + y(v)).join('L'), fill: 'none', stroke: '#3f7d4e', 'stroke-width': 2 });`,
    faq: [
      ['What is a KPI card?', 'A KPI card is a small box on a dashboard showing one key number, how it changed since the last period, and often a tiny trend line.'],
      ['How many KPI cards should a dashboard have?', 'Three to six. Choose the numbers people act on. Too many cards and none of them stand out.'],
      ['Should the change badge be green when the number goes up?', 'Only if up is good. For costs, return rates or complaints, a drop is good news, so the badge should be green when they fall. This template handles that.'],
      ['What should I compare against?', 'The period just before is the most common choice, as used here. The same period last year works better for seasonal businesses.'],
    ],
  },
  {
    num: 64, cat: '07-dashboard-widgets', slug: '064-calendar-heatmap', name: 'Calendar Heatmap',
    example: 'a year of code changes on an open source project',
    title: 'Free Calendar Heatmap in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free calendar heatmap made with HTML, CSS and vanilla JavaScript. A full year of daily activity in the style of a GitHub contribution graph. One file to download.',
    keywords: 'calendar heatmap, github contribution graph html, calendar heatmap javascript, daily activity chart, year heatmap',
    what: [
      'A calendar heatmap shows a year as a grid of small squares, one per day, arranged in weeks. The darker the square, the more activity on that day.',
      'Most people know it from GitHub profiles. It makes habits and patterns visible: busy weeks, quiet holidays, weekends off and streaks of daily work.',
    ],
    glance: { best: 'Daily activity over a whole year', data: 'A number for every day', avoid: 'Data that is not daily. Use a bar or line chart.' },
    when: ['Code commits or writing streaks', 'Workouts, study or habit tracking', 'Daily sales or bookings', 'Support tickets or website visits by day'],
    instead: [['043-heatmap', 'You compare hours against days of the week'], ['011-line-chart', 'You care about the trend more than single days']],
    features: ['365 squares laid out in weeks, Monday to Sunday', 'Five shades from no activity to 10 or more', 'Month labels across the top', 'Arrow keys move day by day and week by week', 'Scrolls sideways on phones so squares stay readable', 'A monthly summary table'],
    code: `const counts = Array.from({ length: 365 }, (v, i) => (i * 7919) % 11 > 6 ? (i * 31) % 12 : 0);
const shades = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const level = v => v === 0 ? 0 : v <= 2 ? 1 : v <= 5 ? 2 : v <= 9 ? 3 : 4;
const firstDay = 2, size = 10; // 1 January 2025 was a Wednesday

counts.forEach((v, i) => {
  const k = i + firstDay;
  drawRect(20 + Math.floor(k / 7) * size, 20 + (k % 7) * size, size - 2, size - 2, shades[level(v)]);
});`,
    faq: [
      ['What is a calendar heatmap?', 'A calendar heatmap is a grid of days, usually a year, where the color of each square shows how much happened on that day.'],
      ['How do I make a GitHub style contribution graph?', 'Put each day in a column for its week and a row for its weekday, then color it by its count in four or five steps. This template shows the full code.'],
      ['How many color steps should I use?', 'Four or five, plus one for zero. More steps are hard to tell apart.'],
      ['How do I make it work on a phone?', 'A full year needs about 53 columns, which is too many for a phone. Let the calendar scroll sideways, as this template does, so the squares stay big enough to tap.'],
    ],
  },
  {
    num: 65, cat: '07-dashboard-widgets', slug: '065-gantt-chart', name: 'Gantt Chart',
    example: 'a cafe renovation plan with tasks and milestones',
    title: 'Free Gantt Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free Gantt chart made with HTML, CSS and vanilla JavaScript. Tasks, progress, milestones, links between tasks and a today line. One file to download.',
    keywords: 'gantt chart html, gantt chart javascript, project timeline chart, gantt without library, project plan chart',
    what: [
      'A Gantt chart shows a project plan as bars on a timeline. Each task gets a row, and its bar runs from its start date to its end date. The filled part shows how much is done.',
      'Arrows show which tasks must finish before others can start, diamonds mark key dates, and a today line shows at a glance what is on track and what is running late.',
    ],
    glance: { best: 'Project plans with dates and order', data: 'A start date, end date and progress for each task', avoid: 'Hundreds of tasks. Group them into phases.' },
    when: ['Building, renovation and event projects', 'Software releases and marketing launches', 'Course and training schedules', 'Any plan you share with a team or client'],
    instead: [['070-timeline', 'You show past events, not a plan'], ['059-flowchart', 'Order matters but dates do not']],
    features: ['Task bars with a darker part for progress', 'Tasks colored by phase', 'Arrows that show which task comes first', 'Diamond milestones and a dashed today line', 'Tooltips with days left or start date', 'A switch to hide the arrows and a full task table'],
    code: `const tasks = [['Permits', '2026-08-10', '2026-08-28', 100], ['Plumbing', '2026-09-07', '2026-09-25', 80], ['Painting', '2026-10-12', '2026-10-21', 0]];
const start = new Date('2026-08-01'), end = new Date('2026-11-01');
const x = d => 120 + (new Date(d) - start) / (end - start) * 460;

tasks.forEach(([name, from, to, done], i) => {
  const y = 30 + i * 40;
  drawText(110, y + 18, name, 'end');
  drawRect(x(from), y, x(to) - x(from), 24, '#f0c9b8');
  drawRect(x(from), y, (x(to) - x(from)) * done / 100, 24, '#b5552d');
});
drawLine(x('2026-09-23'), 20, x('2026-09-23'), 150, '#b5552d', 2, '5 4'); // today`,
    faq: [
      ['What is a Gantt chart?', 'A Gantt chart is a bar chart of a project plan, with one bar per task placed on a timeline from its start to its end date.'],
      ['Who invented the Gantt chart?', 'It is named after Henry Gantt, an American engineer who made it popular around 1910 for planning factory work.'],
      ['What do the arrows in a Gantt chart mean?', 'They are dependencies. An arrow from one task to another means the second cannot start until the first is finished.'],
      ['How do I show progress in a Gantt chart?', 'Fill part of each bar in a darker color, sized to the share that is done, and add a today line so late tasks stand out.'],
    ],
  },
  {
    num: 66, cat: '07-dashboard-widgets', slug: '066-waterfall-chart', name: 'Waterfall Chart',
    example: 'how a bakery turns sales into profit',
    title: 'Free Waterfall Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free waterfall chart made with HTML, CSS and vanilla JavaScript. Shows how a starting value becomes a final total through gains and losses. One file to download.',
    keywords: 'waterfall chart html, waterfall chart javascript, bridge chart, profit and loss chart, cash flow chart',
    what: [
      'A waterfall chart shows how you get from one number to another, step by step. Each bar starts where the last one ended, going up for money in and down for money out, and the final bar shows the result.',
      'It is the clearest way to explain a profit and loss statement to people who do not read accounts. You can see at once which costs take the biggest bites out of sales.',
    ],
    glance: { best: 'Explaining how a total was built up', data: 'A list of positive and negative amounts in order', avoid: 'Data over time. Use a line or bar chart.' },
    when: ['Profit and loss for a business', 'Cash flow over a month or year', 'Budget changes from last year to this year', 'Explaining changes in headcount or stock'],
    instead: [['010-diverging-bar-chart', 'Each item stands on its own and does not add up'], ['003-stacked-bar-chart', 'You want to show parts of a total at several points in time']],
    features: ['Floating bars that start where the last one ended', 'Green for money in, red for money out, dark blue for the result', 'Dashed lines joining each step', 'Values in thousands above every bar', 'Tooltips with the running total', 'Tilted labels on phones and a full data table'],
    code: `const steps = [['Sales', 186400], ['Ingredients', -61200], ['Staff', -58900], ['Rent', -21600]];
const y = v => 280 - v / 200000 * 260;
let total = 0;

steps.forEach(([name, v], i) => {
  const from = total, to = total + v;
  drawRect(40 + i * 110, y(Math.max(from, to)), 80, Math.abs(y(from) - y(to)), v >= 0 ? '#2f8a57' : '#d0463b');
  drawText(80 + i * 110, 298, name, 'middle');
  total = to;
});
drawRect(40 + steps.length * 110, y(total), 80, y(0) - y(total), '#28435e');`,
    faq: [
      ['What is a waterfall chart?', 'A waterfall chart shows how a starting value is changed by a series of increases and decreases to reach a final value. Each bar floats where the previous one ended.'],
      ['What is a waterfall chart used for?', 'Mostly for finance: profit and loss, cash flow and budget changes. It is also handy for explaining any change made of several parts.'],
      ['Is a waterfall chart the same as a bridge chart?', 'Yes. It is also called a bridge chart, a cascade chart or a flying bricks chart.'],
      ['Should the axis start at zero?', 'Yes. The bars show amounts, so starting at zero keeps their sizes honest.'],
    ],
  },
  {
    num: 67, cat: '07-dashboard-widgets', slug: '067-word-cloud', name: 'Word Cloud',
    example: 'words guests use in hotel reviews',
    title: 'Free Word Cloud in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free word cloud made with HTML, CSS and vanilla JavaScript. Words sized by count and colored by sentiment, with a spiral layout and filters. One file to download.',
    keywords: 'word cloud html, word cloud javascript, tag cloud, word cloud without library, review word cloud',
    what: [
      'A word cloud shows a set of words where the size of each word matches how often it appears. The biggest words are the ones people use most.',
      'It is a quick, friendly way to sum up a pile of text like reviews or survey answers. Coloring words by meaning, like praise and complaints, turns it from decoration into something you can act on.',
    ],
    glance: { best: 'A quick feel for common words in text', data: 'A list of words with a count for each', avoid: 'Exact comparisons. Use a bar chart.' },
    when: ['Customer reviews and survey answers', 'Common search terms on your site', 'Topics in comments or support tickets', 'Themes from workshops and interviews'],
    instead: [['005-horizontal-bar-chart', 'You need an exact ranking of words'], ['026-waffle-chart', 'You want shares of a few answers']],
    features: ['A spiral layout that places the biggest words first without overlaps', 'Word sizes measured with canvas so they fit exactly', 'Green for praise, red for complaints, gray for topics', 'Filters for praise and complaints only', 'Every word has a tooltip and a Tab stop', 'A table of every word and its count'],
    code: `const words = [['friendly', 142], ['clean', 128], ['location', 118], ['small', 48], ['noisy', 41]];
const ctx = document.createElement('canvas').getContext('2d');
const placed = [], cx = 300, cy = 150;

words.forEach(([word, count]) => {
  const size = 14 + Math.sqrt(count) * 3; ctx.font = size + 'px sans-serif';
  const w = ctx.measureText(word).width, h = size;
  for (let t = 0; t < 2000; t++) {
    const x = cx + t * 0.9 * Math.cos(t * 0.35) - w / 2, y = cy + t * 0.6 * Math.sin(t * 0.35);
    if (placed.some(p => x < p.x + p.w && x + w > p.x && y - h < p.y && y > p.y - p.h)) continue;
    placed.push({ x, y, w, h });
    make('text', { x, y, 'font-size': size }).textContent = word;
    break;
  }
});`,
    faq: [
      ['What is a word cloud?', 'A word cloud is a picture of words where each word is sized by how often it appears in a text. It is also called a tag cloud.'],
      ['How does a word cloud place the words?', 'It starts at the center and moves outward along a spiral, placing each word at the first spot where it does not overlap any word already placed. Bigger words go first.'],
      ['Are word clouds useful?', 'For a quick overview, yes. They are not good for exact comparisons, so pair them with a bar chart of the top words when numbers matter.'],
      ['Should I remove common words?', 'Yes. Words like the, and or very should be dropped before counting, or they will crowd out the words that tell you something.'],
    ],
  },
  {
    num: 68, cat: '07-dashboard-widgets', slug: '068-pictogram-chart', name: 'Pictogram Chart',
    example: 'trees planted by a charity each year',
    title: 'Free Pictogram Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free pictogram chart made with HTML, CSS and vanilla JavaScript. Icons stand for amounts, with part icons for the remainder. One file to download.',
    keywords: 'pictogram chart, pictograph javascript, icon chart html, isotype chart, infographic chart',
    what: [
      'A pictogram chart uses rows of small icons to show amounts. Each icon stands for a fixed number, like 100 trees, and a part icon shows what is left over.',
      'Icons make numbers feel real and memorable, which is why pictograms are popular in reports, infographics and charity updates. Counting trees is more engaging than reading a bar.',
    ],
    glance: { best: 'Friendly counts for reports and infographics', data: 'A number for each group and a value per icon', avoid: 'Very large ranges or precise comparisons.' },
    when: ['Charity and impact reports', 'People, homes or items counted by year', 'School and community newsletters', 'Infographics for social media'],
    instead: [['026-waffle-chart', 'You want to show shares out of 100'], ['005-horizontal-bar-chart', 'You need exact comparisons']],
    features: ['Tree icons drawn as a single SVG path, no images', 'Part icons clipped to show the exact remainder', 'Faint outlines behind each icon so part trees read clearly', 'A lighter color for this year so far', 'Icons appear one by one on load', 'Totals beside every row and in the data table'],
    code: `const years = [['2021', 340], ['2022', 520], ['2023', 610]];
const per = 100, size = 34;
const tree = (x, y, s) => 'M' + (x + s / 2) + ',' + y + 'L' + (x + s) + ',' + (y + s * 0.8) + 'H' + (x + s * 0.6) + 'V' + (y + s) + 'H' + (x + s * 0.4) + 'V' + (y + s * 0.8) + 'H' + x + 'Z';

years.forEach(([year, count], row) => {
  const y = 20 + row * 50;
  drawText(50, y + 24, year, 'end');
  for (let i = 0; i < count / per; i++) {
    const part = Math.min(1, count / per - i);
    make('path', { d: tree(60 + i * size, y, size - 4), fill: '#2f8a3a', 'fill-opacity': part < 1 ? 0.4 : 1 });
  }
});`,
    faq: [
      ['What is a pictogram chart?', 'A pictogram chart uses repeated icons to show quantities, where each icon stands for a set amount. It is also called a pictograph or isotype chart.'],
      ['How do I show a part of an icon?', 'Clip the last icon to a rectangle as wide as the remainder, like 40% of the icon for 40 trees when each icon is 100. This template uses an SVG clipPath for that.'],
      ['What should each icon stand for?', 'Pick a round number that keeps rows between about 3 and 15 icons. Say what one icon means in the legend.'],
      ['Who invented pictograms for data?', 'Otto and Marie Neurath developed the Isotype system in Vienna in the 1920s, which set the rules for picture charts that are still used today.'],
    ],
  },
  {
    num: 69, cat: '07-dashboard-widgets', slug: '069-radial-bar-chart', name: 'Radial Bar Chart',
    example: 'monthly sales for a surf shop',
    title: 'Free Radial Bar Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free radial bar chart made with HTML, CSS and vanilla JavaScript. Bars arranged in a circle, ideal for months or hours. One file to download.',
    keywords: 'radial bar chart, circular bar chart javascript, circular barplot html, polar bar chart, seasonal chart',
    what: [
      'A radial bar chart puts bars in a circle instead of a row. Each bar grows outward from the middle, and the whole set goes around like a clock.',
      'It suits data that repeats in a cycle, like months of the year or hours of the day, because December sits right next to January again. The shape of a busy season jumps out at once.',
    ],
    glance: { best: 'Values that follow a cycle, like months or hours', data: 'A value for each step of the cycle', avoid: 'Exact comparisons. Outer bars look bigger than they are.' },
    when: ['Sales or visitors by month', 'Traffic or calls by hour of day', 'Rainfall or temperature through the year', 'Eye catching summaries for reports'],
    instead: [['001-bar-chart', 'You need exact comparisons'], ['048-radar-chart', 'You compare several items across the same measures']],
    features: ['Twelve bars drawn as SVG arc shapes around a circle', 'Bars colored by season', 'Rings for $25k steps with labels', 'The yearly total in the middle', 'Bars grow outward one after another on load', 'Tooltips with each month and its share of the year'],
    code: `const sales = [18, 21, 29, 41, 58, 79, 96, 92, 64, 38, 24, 31];
const cx = 200, cy = 180, inner = 40;
const pt = (r, a) => (cx + r * Math.sin(a)) + ',' + (cy - r * Math.cos(a));
const step = Math.PI * 2 / 12;

sales.forEach((v, i) => {
  const a0 = i * step + 0.03, a1 = (i + 1) * step - 0.03, outer = inner + v * 1.3;
  make('path', { fill: '#fbbf24', d: 'M' + pt(outer, a0) + 'A' + outer + ',' + outer + ' 0 0 1 ' + pt(outer, a1) + 'L' + pt(inner, a1) + 'A' + inner + ',' + inner + ' 0 0 0 ' + pt(inner, a0) + 'Z' });
});`,
    faq: [
      ['What is a radial bar chart?', 'A radial bar chart is a bar chart wrapped into a circle, with each bar growing outward from the center.'],
      ['When should I use a radial bar chart?', 'For values that follow a cycle, like months or hours, where the end joins back to the start. It also makes a striking summary graphic.'],
      ['What are the downsides of a radial bar chart?', 'Bars on the outside cover more area than bars near the middle, so differences can look bigger than they are. Use a normal bar chart when precision matters.'],
      ['What is the difference between a radial bar chart and a pie chart?', 'In a pie chart the angle of each slice shows its share. In a radial bar chart every bar has the same angle and the length shows the value.'],
    ],
  },
  {
    num: 70, cat: '07-dashboard-widgets', slug: '070-timeline', name: 'Timeline',
    example: 'the history of a solar installer from 2014 to 2026',
    title: 'Free Timeline Chart in HTML, CSS and JavaScript (Live Demo)',
    desc: 'Free timeline made with HTML, CSS and vanilla JavaScript. Events in order with categories, details on hover and a phone friendly layout. One file to download.',
    keywords: 'timeline html, timeline chart javascript, company history timeline, vertical timeline css, event timeline',
    what: [
      'A timeline shows events in the order they happened, placed along a line by date. Spacing the events by real time shows fast and slow periods, not just the order.',
      'Timelines are perfect for company histories, project stories and personal milestones. Color by category helps readers pick out the kinds of events that matter to them.',
    ],
    glance: { best: 'Events in date order', data: 'A date, a title and a short note for each event', avoid: 'Lots of events on the same day. Group them.' },
    when: ['Company history and about pages', 'Project milestones and launches', 'Product release history', 'Personal, school or family stories'],
    instead: [['065-gantt-chart', 'You show a plan with start and end dates'], ['016-step-line-chart', 'You track a value that changes at each event']],
    features: ['Events placed by real date along a line', 'Cards above and below the line so they never overlap', 'Colors for milestones, products and company news', 'Tooltips with the full story of each event', 'Turns into a top to bottom list on phones', 'A table of every event with its details'],
    code: `const events = [[2014.2, 'Founded'], [2016.5, '100 homes'], [2021.7, '1,000 homes'], [2026.6, '5,000 homes']];
const x = year => 40 + (year - 2014) / 13 * 520, mid = 150;

drawLine(20, mid, 580, mid, '#e9e5d6', 5);
events.forEach(([year, title], i) => {
  const up = i % 2 === 0, y = up ? mid - 60 : mid + 60;
  drawLine(x(year), mid, x(year), y, '#e8a300', 2);
  drawCircle(x(year), mid, 7, '#e8a300');
  drawText(x(year), y + (up ? -6 : 16), title, 'middle');
});`,
    faq: [
      ['How do I make a timeline in HTML?', 'Draw a line, place a dot for each event at a position based on its date, and add a label above or below. This template does it in SVG with plain JavaScript.'],
      ['Should events be spaced by date or evenly?', 'By date, when the gaps matter, like seven years to the first 1,000 installs. Even spacing is fine when only the order matters.'],
      ['How do I stop timeline labels overlapping?', 'Alternate them above and below the line and vary the height of the connecting lines, like this template does.'],
      ['How do I make a timeline work on a phone?', 'Switch to a vertical timeline that runs top to bottom, with text beside each dot. This template does that automatically below 640 pixels.'],
    ],
  },
];

module.exports = { SITE, CATEGORIES, CHARTS };
