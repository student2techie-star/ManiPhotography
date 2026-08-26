import { useEffect } from 'react';

interface HeadMeta {
  title: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function useDocumentHead({ title, description, ogImage, ogUrl }: HeadMeta) {
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
      setMeta('og:image', ogImage, true);
      setMeta('twitter:image', ogImage);
    }
    if (ogUrl) {
      setMeta('og:url', ogUrl, true);
    }
    setMeta('og:title', title, true);
    setMeta('twitter:title', title);
  }, [title, description, ogImage, ogUrl]);
}
