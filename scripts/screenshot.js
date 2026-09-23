/**
 * Saves preview.png (1280x800) for every demo.html using headless Chrome.
 * Plain Node.js, no packages. Run from the repo root:  node scripts/screenshot.js
 * Set CHROME=/path/to/chrome if Chrome is not on your PATH.
 * The ?static flag in the URL skips the animations so the picture shows the finished chart.
 */
const fs = require('fs');
const path = require('path');
const { execSync, execFileSync } = require('child_process');

const root = path.dirname(__dirname);
let chrome = process.env.CHROME;
if (!chrome) {
  try { chrome = execSync('command -v google-chrome || command -v chromium || command -v chromium-browser', { shell: '/bin/sh' }).toString().trim(); } catch (err) { chrome = ''; }
}
if (!chrome) { console.error('Chrome not found. Install Chrome or set CHROME.'); process.exit(1); }

for (const cat of fs.readdirSync(root).filter(d => /^\d\d-/.test(d))) {
  for (const item of fs.readdirSync(path.join(root, cat))) {
    const demo = path.join(root, cat, item, 'demo.html');
    if (!fs.existsSync(demo)) continue;
    const png = path.join(root, cat, item, 'preview.png');
    try {
      execFileSync(chrome, ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--window-size=1280,800',
        '--virtual-time-budget=3000', '--screenshot=' + png, 'file://' + demo + '?static'], { stdio: 'ignore' });
      console.log('saved ' + path.relative(root, png));
    } catch (err) {
      console.log('FAILED ' + path.relative(root, png));
    }
  }
}
