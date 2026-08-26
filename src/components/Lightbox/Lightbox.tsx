import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';
import './Lightbox.css';

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = items[currentIndex];
  const total = items.length;

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${current.title}`}
      onClick={onClose}
    >
      {/* Close */}
      <button className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <X size={22} />
      </button>

      {/* Counter */}
      <div className="lightbox__counter" aria-live="polite">
        {currentIndex + 1} / {total}
      </div>

      {/* Image */}
      <div className="lightbox__image-wrap" onClick={e => e.stopPropagation()}>
        <img
          src={current.image}
          alt={current.alt}
          className="lightbox__image"
          loading="eager"
        />
        {current.title && (
          <p className="lightbox__caption">{current.title}</p>
        )}
      </div>

      {/* Prev */}
      {total > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={e => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next */}
      {total > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={e => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
}
