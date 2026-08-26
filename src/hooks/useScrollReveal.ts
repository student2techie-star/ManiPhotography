import { useEffect, useRef, useCallback } from 'react';

/**
 * Intersection Observer hook that adds 'visible' class to elements
 * with the given selector inside the root element.
 */
export function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right') {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observerRef.current?.observe(el));
  }, [selector]);

  useEffect(() => {
    // Small timeout to ensure DOM is rendered
    const t = setTimeout(observe, 100);
    return () => {
      clearTimeout(t);
      observerRef.current?.disconnect();
    };
  }, [observe]);
}
