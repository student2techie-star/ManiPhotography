---
name: react-spa-seo-prerender
description: Static HTML prerendering and comprehensive local SEO audit workflow for React/Vite SPAs.
---

# React SPA SEO & Static Pre-Rendering Workflow

When building or auditing React / Vite single-page applications that need high search engine visibility and local search dominance:

## 1. Post-Build Static Prerender Architecture
- Maintain a post-build script (`scripts/prerender-meta.mjs`) executed after `vite build`.
- For each route, generate a static `dist/<route>/index.html` file containing populated `<title>`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph, Twitter Cards, and `JSON-LD` schemas.
- Ensure all public SEO routes are listed in `scripts/prerender-meta.mjs`.

## 2. Dynamic Head Hook (`useDocumentHead.ts`)
- Implement a custom React hook to update `document.title`, `<meta name="description">`, `<link rel="canonical">`, and `<script type="application/ld+json">` dynamically on client-side route transitions.

## 3. SEO Audit Protocol
- **Accessibility & HTTP Status**: Verify direct GET requests to all routes return HTTP 200 without requiring client-side JS execution.
- **Headings**: Ensure exactly one visible `<h1>` tag per page, followed by a clean H1 -> H2 -> H3 hierarchy.
- **Structured Data (JSON-LD)**: Implement valid `LocalBusiness`, `WebSite`, `Service`, `BreadcrumbList`, and `FAQPage` schemas.
- **Sitemap & Robots**: Keep `public/sitemap.xml` in sync with all pre-rendered static routes with valid HTTPS URLs.
- **NAP Consistency**: Enforce identical Name, Address, and Phone details across static HTML, JSON-LD schemas, and visible UI components.
- **Image Optimization**: Use WebP format, explicit width/height dimensions, eager hero LCP loading, and lazy loading for below-the-fold assets.
