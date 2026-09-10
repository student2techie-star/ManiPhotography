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

  const endpoints = [
    'https://www.bing.com/indexnow',
    'https://api.indexnow.org/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`✅ Successfully submitted ${urlList.length} URLs to IndexNow via ${endpoint}! (Status: ${response.status})`);
        return;
      } else {
        console.log(`⚠️ ${endpoint} returned HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`❌ Error submitting to ${endpoint}:`, error.message);
    }
  }
}

submitIndexNow();
