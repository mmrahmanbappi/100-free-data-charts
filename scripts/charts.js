// Content for every chart. Add new categories and charts here, then run: node scripts/build.js
// Copy rules: plain human language, short sentences, no em or en dashes, readers aged 20 to 50.

const SITE = {
  name: '100 Free Data Charts',
  base: 'https://mmrahmanbappi.github.io/100-free-data-charts/',
  repo: 'https://github.com/mmrahmanbappi/100-free-data-charts',
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
  { num: 3, slug: '03-part-to-whole', name: 'Part to Whole', ready: false },
  { num: 4, slug: '04-distribution', name: 'Distribution', ready: false },
  { num: 5, slug: '05-relationships', name: 'Relationships', ready: false },
  { num: 6, slug: '06-flow-and-network', name: 'Flow and Network', ready: false },
  { num: 7, slug: '07-dashboard-widgets', name: 'Dashboard Widgets', ready: false },
  { num: 8, slug: '08-maps-and-globes', name: 'Maps and Globes', ready: false },
  { num: 9, slug: '09-3d-charts', name: '3D Charts', ready: false },
  { num: 10, slug: '10-3d-science-and-space', name: '3D Science and Space', ready: false },
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
];

module.exports = { SITE, CATEGORIES, CHARTS };
