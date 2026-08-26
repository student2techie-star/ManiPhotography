import { useState } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import type { PortfolioItem } from '../../data/portfolio';
import './PortfolioGrid.css';

interface PortfolioGridProps {
  items: PortfolioItem[];
  columns?: 2 | 3 | 4;
}

export default function PortfolioGrid({ items, columns = 3 }: PortfolioGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i !== null ? (i - 1 + items.length) % items.length : null));
  const nextImage = () => setLightboxIndex(i => (i !== null ? (i + 1) % items.length : null));

  if (items.length === 0) {
    return (
      <div className="portfolio-grid__empty">
        <p className="body-md">No photographs in this category yet.</p>
        <p className="body-sm">Check back soon — more stories are being added.</p>
      </div>
    );
  }

  return (
    <>
      <div className={`portfolio-grid portfolio-grid--col-${columns}`} role="list">
        {items.map((item, index) => (
          <button
            key={item.id}
            className="portfolio-grid__item reveal"
            onClick={() => openLightbox(index)}
            aria-label={`View ${item.title}`}
            role="listitem"
          >
            <div className="portfolio-grid__img-wrap">
              <img
                src={item.image}
                alt={item.alt}
                className="portfolio-grid__img"
                loading="lazy"
                decoding="async"
                onError={e => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="portfolio-grid__placeholder img-placeholder" style={{ display: 'none' }}>
                <span className="label-light">{item.title}</span>
              </div>
              <div className="portfolio-grid__overlay" aria-hidden="true">
                <span className="portfolio-grid__title">{item.title}</span>
                <span className="portfolio-grid__category label-light">{item.category}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
