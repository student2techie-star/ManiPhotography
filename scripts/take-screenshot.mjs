import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5174/portfolio/', { waitUntil: 'networkidle0' });
  // Wait 2.5s for preloader to fade out (preloader fades after 1800ms + 800ms)
  await new Promise(r => setTimeout(r, 2800));
  
  await page.screenshot({ path: 'scripts/portfolio-screenshot.png', fullPage: false });
  console.log('SCREENSHOT SAVED to scripts/portfolio-screenshot.png');
  await browser.close();
})();
