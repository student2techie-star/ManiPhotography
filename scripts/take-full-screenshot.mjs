import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5174/portfolio/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2200));
  
  await page.screenshot({ path: 'scripts/portfolio-fullpage.png', fullPage: true });
  console.log('FULLPAGE SCREENSHOT SAVED');
  await browser.close();
})();
