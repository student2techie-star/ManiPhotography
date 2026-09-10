/**
 * Post-build Pre-rendering Script
 * 
 * Generates SEO-critical meta tags in static HTML files for each route.
 * This ensures Google sees correct titles, descriptions, canonical URLs,
 * and structured data even without JavaScript execution.
 * 
 * Run after `vite build` via: node scripts/prerender-meta.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE_URL = 'https://thirukadaiyurmaniphotography.in';

// Define all routes with their SEO metadata
const routes = [
  {
    path: '/wedding-photography-thirukadaiyur',
    title: 'Wedding Photography in Thirukadaiyur | Mani Photography',
    description: 'Professional wedding photography in Thirukadaiyur & Mayiladuthurai. Documenting Tamil rituals, candid moments, muhurtham, and reception with timeless artistry.',
    ogImage: '/images/weddings/wedding-01.jpg',
  },
  {
    path: '/60th-birthday-photography-thirukadaiyur',
    title: '60th Birthday Photography Thirukadaiyur | Shashtiapthapoorthi Specialist',
    description: 'Specialist 60th birthday (Shashtiapthapoorthi) photographer at Thirukadaiyur Amritaghateswarar Abirami Temple. Kalasa Abhishekam & Thaali re-tying coverage.',
    ogImage: '/images/guides/shashtiapthapoorthi-60th.png',
  },
  {
    path: '/70th-birthday-photography-thirukadaiyur',
    title: '70th Birthday Photography Thirukadaiyur | Bhimaratha Shanthi Specialist',
    description: 'Specialist 70th birthday (Bhimaratha Shanthi) photography in Thirukadaiyur. Documenting 70th marriage homam, temple rituals, and family gatherings.',
    ogImage: '/images/tamil-weddings/tamil-02.jpg',
  },
  {
    path: '/80th-birthday-photography-thirukadaiyur',
    title: '80th Birthday Photography Thirukadaiyur | Sadabishegam Specialist',
    description: 'Specialist 80th birthday (Sadabishegam) photographer at Thirukadaiyur Abirami Temple. Capturing 1000 full moon blessings, 80 Kalasams & family portraits.',
    ogImage: '/images/guides/sadabishegam-80th.png',
  },
  {
    path: '/shashtiapthapoorthi-photography',
    title: 'Shashtiapthapoorthi Photography Thirukadaiyur | 60th Wedding Specialist',
    description: 'Expert Shashtiapthapoorthi (60th marriage) photography in Thirukadaiyur. Authentic ritual coverage, Kalasa Abhishekam & multi-generational family photos.',
    ogImage: '/images/guides/shashtiapthapoorthi-60th.png',
  },
  {
    path: '/temple-photography-thirukadaiyur',
    title: 'Thirukadaiyur Temple Photography | Mani Photography',
    description: 'Timeless temple portrait photography in Thirukadaiyur Sri Amritaghateswarar Abirami Temple & nearby temples like Thirunallar Saneeswarar Temple.',
    ogImage: '/images/temple/temple-01.jpg',
  },
  {
    path: '/wedding-videography-thirukadaiyur',
    title: 'Wedding Videography Thirukadaiyur | LED & 4K Cinema Films',
    description: 'Cinematic wedding videography & 4K video recording in Thirukadaiyur. Covering 60th, 70th, 80th milestone weddings, traditional Tamil marriages & LED screen setups.',
    ogImage: '/images/weddings/wedding-02.jpg',
  },
  {
    path: '/portfolio',
    title: 'Photography Portfolio | Mani Photography Thirukadaiyur',
    description: 'Browse our photography portfolio — weddings, 60th & 80th birthday ceremonies, temple portraits, pre-wedding shoots, and family celebrations in Thirukadaiyur.',
    ogImage: '/images/weddings/wedding-01.jpg',
  },
  {
    path: '/services',
    title: 'Photography Services | Mani Photography Thirukadaiyur',
    description: 'Explore our photography services — wedding photography, 60th/70th/80th birthday ceremonies, temple photography, videography, and more in Thirukadaiyur.',
    ogImage: '/images/og-image.jpg',
  },
  {
    path: '/about',
    title: 'About Mani Photography Thirukadaiyur | Temple Specialist Photographer',
    description: 'Meet Mani Photography — Thirukadaiyur Amritaghateswarar Abirami Temple specialist photographer with expertise in 60th, 70th & 80th milestone wedding rituals.',
    ogImage: '/images/about/about-01.jpg',
  },
  {
    path: '/contact',
    title: 'Contact Mani Photography Thirukadaiyur | Book Your Shoot',
    description: 'Book your Thirukadaiyur 60th Wedding (Shashtiapthapoorthi), 70th & 80th (Sadabishegam) photoshoot. Call +91 81110 85865 or WhatsApp Mani Photography.',
    ogImage: '/images/og-image.jpg',
  },
  {
    path: '/guides',
    title: 'Thirukadaiyur Ceremony Guides & Photography Tips | Mani Photography',
    description: 'Comprehensive guides to Thirukadaiyur 60th (Shashtiapthapoorthi), 70th (Bhimaratha Shanthi) & 80th (Sadabishegam) marriage rituals, timings, and photography tips.',
    ogImage: '/images/og-image.jpg',
  },
];

function generateHTML(route) {
  const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf-8');
  const canonical = `${SITE_URL}${route.path}`;
  const ogImage = `${SITE_URL}${route.ogImage}`;

  // Replace title
  let html = indexHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace canonical URL & Hreflang alternates
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="en" href=".*?" \/>/,
    `<link rel="alternate" hreflang="en" href="${canonical}" />`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="ta" href=".*?" \/>/,
    `<link rel="alternate" hreflang="ta" href="${canonical}" />`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="x-default" href=".*?" \/>/,
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/,
    `<meta property="og:image" content="${ogImage}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  // Inject route-specific Service schema for landing pages
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': route.title,
    'serviceType': route.title,
    'description': route.description,
    'provider': {
      '@id': `${SITE_URL}/#organization`
    },
    'url': canonical,
    'image': ogImage,
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Thirukadaiyur, Mayiladuthurai, Tamil Nadu'
    },
    'datePublished': '2026-09-01T00:00:00+05:30',
    'dateModified': '2026-09-10T08:55:00+05:30'
  };

  const schemaScript = `\n  <script type="application/ld+json">\n  ${JSON.stringify(serviceSchema, null, 2).replace(/\n/g, '\n  ')}\n  </script>\n</head>`;
  html = html.replace('</head>', schemaScript);

  return html;
}

console.log('🔍 Pre-rendering SEO meta tags for static routes...\n');

for (const route of routes) {
  const dirPath = join(DIST, route.path);
  const filePath = join(dirPath, 'index.html');

  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }

  const html = generateHTML(route);
  writeFileSync(filePath, html, 'utf-8');
  console.log(`  ✅ ${route.path}/index.html → "${route.title}"`);
}

console.log(`\n🎉 Pre-rendered ${routes.length} routes successfully!`);
