import { useEffect } from 'react';

interface HeadMeta {
  title: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  canonicalUrl?: string;
  schema?: object | object[];
}

export function useDocumentHead({ title, description, ogImage, ogUrl, ogType, canonicalUrl, schema }: HeadMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, true);
      setMeta('twitter:description', description);
    }
    if (ogImage) {
      const fullImg = ogImage.startsWith('http') ? ogImage : `https://thirukadaiyurmaniphotography.in${ogImage}`;
      setMeta('og:image', fullImg, true);
      setMeta('twitter:image', fullImg);
    }

    // Set og:type (defaults to 'website')
    setMeta('og:type', ogType || 'website', true);

    let rawPath = window.location.pathname;
    if (rawPath !== '/' && !rawPath.endsWith('/')) {
      rawPath += '/';
    }
    let currentCanonical = canonicalUrl || ogUrl || `https://thirukadaiyurmaniphotography.in${rawPath}`;
    if (!currentCanonical.endsWith('/') && !currentCanonical.includes('?')) {
      currentCanonical += '/';
    }
    setMeta('og:url', currentCanonical, true);

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', currentCanonical);

    setMeta('og:title', title, true);
    setMeta('twitter:title', title);

    const publishedDate = '2026-09-01T00:00:00+05:30';
    const modifiedDate = new Date().toISOString();
    setMeta('publish_date', publishedDate);
    setMeta('article:published_time', publishedDate, true);
    setMeta('article:modified_time', modifiedDate, true);
    setMeta('og:updated_time', modifiedDate, true);

    let schemaScript = document.querySelector<HTMLScriptElement>('script[data-dynamic-schema="true"]');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('data-dynamic-schema', 'true');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, ogImage, ogUrl, ogType, canonicalUrl, schema]);
}
