import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');

// Read routes from the existing prerender-meta script
const metaScriptContent = fs.readFileSync(path.join(__dirname, 'prerender-meta.mjs'), 'utf-8');
const routesMatch = metaScriptContent.match(/const routes = (\[[\s\S]*?\]);/);
let routes = [];
if (routesMatch) {
  routes = new Function(`return ${routesMatch[1]}`)();
} else {
  console.error("Could not parse routes from prerender-meta.mjs");
  process.exit(1);
}

// Add root path if not present
if (!routes.find(r => r.path === '/')) {
  routes.unshift({ path: '/' });
}

async function startServer() {
  const app = express();
  // Serve static files from DIST
  app.use(express.static(DIST));
  // Fallback for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(DIST, 'index.html'));
  });
  return new Promise((resolve) => {
    const server = app.listen(0, () => {
      resolve({ server, port: server.address().port });
    });
  });
}

async function prerender() {
  console.log('\n🚀 Starting Puppeteer prerendering for full HTML body...');
  const { server, port } = await startServer();
  console.log(`📡 Local server listening on port ${port}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (const route of routes) {
    const routePath = route.path.endsWith('/') ? route.path.slice(0, -1) : route.path;
    const url = `http://localhost:${port}${routePath || '/'}`;
    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      // Wait for React to mount and populate the #root element
      await page.waitForFunction('document.querySelector("#root").innerHTML.length > 50', { timeout: 10000 }).catch(() => {});
      
      const html = await page.evaluate(() => {
        return '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
      });

      const dirPath = path.join(DIST, routePath || '');
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      const filePath = path.join(dirPath, 'index.html');
      
      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`  ✅ Saved full HTML: ${route.path || '/'}`);
    } catch (e) {
      console.error(`  ❌ Failed to prerender ${route.path || '/'}:`, e);
    }
  }

  await browser.close();
  server.close();
  console.log('🎉 Puppeteer Prerendering complete!\n');
}

prerender();
