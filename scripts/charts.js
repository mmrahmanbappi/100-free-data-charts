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
  { num: 2, slug: '02-trends-over-time', name: 'Trends Over Time', ready: false },
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
];

module.exports = { SITE, CATEGORIES, CHARTS };
