import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { portfolioItems, portfolioCategories } from '../../data/portfolio';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './Portfolio.css';

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language];
  const portT = t.portfolio;

  useDocumentHead({
    title: language === 'en'
      ? 'Portfolio | Mani Photography — Wedding, Pre-Wedding & Event Gallery'
      : 'போர்ட்ஃபோலியோ | மணி போட்டோகிராஃபி — புகைப்பட கேலரி',
    description: language === 'en'
      ? 'Browse our complete portfolio of weddings, Tamil traditional ceremonies, pre-wedding shoots, temple photography, baby showers, house warmings and family functions.'
      : 'எங்கள் புகைப்பட கேலரியைப் பார்க்கவும் — திருமணங்கள், தமிழ் பாரம்பரிய சடங்குகள், pre-wedding, கோயில் படங்கள், வளைகாப்பு, கிரகப்பிரவேசம் & குடும்ப விழாக்கள்.',
  });

  useScrollReveal();

  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === activeCategory);

  const getCatLabel = (id: string) => {
    return t.categories[id as keyof typeof t.categories] || id;
  };

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">{portT.heroLabel}</span>
          <h1 className="display-md page-hero__title">{portT.heroTitle}</h1>
          <p className="body-lg page-hero__sub">
            {portT.heroSub}
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
                {getCatLabel(cat.id)}
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
            label={portT.browseLabel}
            title={portT.browseTitle}
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
                <span className="portfolio-cat-card__title title-md">{getCatLabel(cat.id)}</span>
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
            {portT.lovedTitle}
          </h2>
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-muted)', marginBottom: 'var(--space-8)' }}>
            {portT.lovedSub}
          </p>
          <Link to="/contact" className="btn btn-primary reveal">{t.common.bookShoot}</Link>
        </div>
      </section>
    </main>
  );
}
