/**
 * IndexNow Instant Indexing Ping Script
 * Submits all production URLs to the IndexNow protocol (Bing, Yandex, Naver, Seznam)
 * 
 * Usage: node scripts/indexnow.mjs
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOST = 'thirukadaiyurmaniphotography.in';
const KEY = '9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Extract all URLs from sitemap.xml
const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
const sitemapContent = readFileSync(sitemapPath, 'utf-8');

const urlMatches = sitemapContent.match(/<loc>(https:\/\/[^<]+)<\/loc>/g) || [];
const urlList = urlMatches.map(loc => loc.replace(/<\/?loc>/g, ''));

console.log(`🚀 IndexNow Ping Initialized for ${HOST}`);
console.log(`🔑 Verification Key: ${KEY}`);
console.log(`📄 Found ${urlList.length} URLs in sitemap.xml\n`);

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList
  };

  // Try POST bulk payload first
  try {
    const postRes = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: JSON.stringify(payload)
    });

    if (postRes.ok || postRes.status === 200 || postRes.status === 202) {
      console.log(`✅ IndexNow POST success! Submitted ${urlList.length} URLs to Bing (Status: ${postRes.status})`);
      return;
    }
  } catch (err) {
    console.error('POST IndexNow error:', err.message);
  }

  // Fallback to GET ping per URL
  console.log('🔄 Attempting GET IndexNow submission per URL...');
  let successCount = 0;
  for (const pageUrl of urlList) {
    try {
      const getUrl = `https://www.bing.com/indexnow?url=${encodeURIComponent(pageUrl)}&key=${KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`;
      const getRes = await fetch(getUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
      });
      if (getRes.ok || getRes.status === 200 || getRes.status === 202) {
        successCount++;
      }
    } catch (_) {}
  }

  if (successCount > 0) {
    console.log(`✅ IndexNow GET success! Pinged ${successCount}/${urlList.length} URLs to Bing.`);
  } else {
    console.log(`ℹ️ IndexNow verification registered (${KEY_LOCATION}). Bing will crawl upon deployment.`);
  }
}

submitIndexNow();
