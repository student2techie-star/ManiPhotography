import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:5174/portfolio/', { waitUntil: 'networkidle0' });
  
  const content = await page.evaluate(() => {
    const el = document.querySelector('.portfolio-hero');
    const root = document.getElementById('root');
    const main = document.querySelector('main');
    return {
      hasHero: !!el,
      hasMain: !!main,
      mainHtml: main ? main.innerHTML.slice(0, 300) : 'NO MAIN',
      bodyBg: window.getComputedStyle(document.body).backgroundColor,
      heroComputed: el ? {
        display: window.getComputedStyle(el).display,
        height: window.getComputedStyle(el).height,
        visibility: window.getComputedStyle(el).visibility,
        opacity: window.getComputedStyle(el).opacity,
      } : null
    };
  });
  
  console.log('EVALUATE RESULT:', JSON.stringify(content, null, 2));
  await browser.close();
})();
