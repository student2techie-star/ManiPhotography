import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { portfolioItems, portfolioCategories } from '../../data/portfolio';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import { Link } from 'react-router-dom';
import './Portfolio.css';

export default function Portfolio() {
  useDocumentHead({
    title: 'Portfolio | Mani Photography — Wedding, Pre-Wedding & Event Gallery',
    description: 'Browse our complete portfolio of weddings, Tamil traditional ceremonies, pre-wedding shoots, temple photography, baby showers, house warmings and family functions.',
  });
  useScrollReveal();

  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === activeCategory);

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">Our Work</span>
          <h1 className="display-md page-hero__title">Portfolio</h1>
          <p className="body-lg page-hero__sub">
            A collection of stories we've had the honour of preserving.
          </p>
        </div>
      </div>

      {/* Filters + Grid */}
      <section className="section section--dark portfolio-page">
        <div className="container">
          {/* Category Filters */}
          <div className="portfolio-filters reveal" role="tablist" aria-label="Portfolio categories">
            {portfolioCategories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`portfolio-filter-btn ${activeCategory === cat.id ? 'portfolio-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="portfolio-page__grid">
            <PortfolioGrid items={filtered} columns={3} />
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="section section--light portfolio-categories-section">
        <div className="container">
          <SectionHeading
            label="Browse by Story"
            title="Explore by Category"
            align="center"
            dark={false}
            className="reveal"
          />
          <div className="portfolio-cat-grid">
            {portfolioCategories.slice(1).map(cat => (
              <Link
                key={cat.id}
                to={`/portfolio/${cat.id}`}
                className="portfolio-cat-card reveal"
              >
                <span className="portfolio-cat-card__title title-md">{cat.label}</span>
                <span className="portfolio-cat-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-sm reveal" style={{ marginBottom: 'var(--space-6)' }}>
            Loved what you saw?
          </h2>
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-muted)', marginBottom: 'var(--space-8)' }}>
            Let's create something beautiful together.
          </p>
          <Link to="/contact" className="btn btn-primary reveal">Book a Shoot</Link>
        </div>
      </section>
    </main>
  );
}
