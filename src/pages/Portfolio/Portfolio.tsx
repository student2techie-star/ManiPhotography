import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { portfolioItems, portfolioCategories } from '../../data/portfolio';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { Sparkles, Camera } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language];
  const portT = t.portfolio;

  useDocumentHead({
    title: language === 'en'
      ? 'Thirukadaiyur Photography Portfolio | 60th, 70th & 80th Marriage Photos — Mani Photography'
      : 'திருக்கடையூர் போட்டோ கேலரி | 60, 70 & 80ஆம் கல்யாண படங்கள் — மணி போட்டோகிராஃபி',
    description: language === 'en'
      ? 'Explore our photography portfolio of 60th Marriage (Shashtiapthapoorthi), 70th (Bhimaratha Shanthi) & 80th (Sadabishegam) ceremonies at Thirukadaiyur Abirami Temple.'
      : 'திருக்கடையூர் அபிராமி அம்மன் கோயிலில் நடந்த 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி), 70ஆம் கல்யாணம் & 80ஆம் கல்யாண (சதாபிஷேகம்) புகைப்பட கேலரி.',
  });

  useScrollReveal();

  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === activeCategory);

  const getCatLabel = (id: string) => {
    return t.categories[id as keyof typeof t.categories] || id;
  };

  const getCatCount = (id: string) => {
    if (id === 'all') return portfolioItems.length;
    return portfolioItems.filter(i => i.category === id).length;
  };

  return (
    <main className="portfolio-page-wrapper">
      {/* ── CINEMATIC PORTFOLIO HERO ───────────────────────── */}
      <section className="portfolio-hero">
        <div className="portfolio-hero__bg">
          <img
            src={`${import.meta.env.BASE_URL}images/tamil-weddings/tamil_60th_marriage.jpg`}
            alt="Mani Photography Portfolio Showcase"
            className="portfolio-hero__img"
            loading="eager"
          />
          <div className="portfolio-hero__overlay" aria-hidden="true" />
        </div>

        <div className="container portfolio-hero__container">
          <div className="portfolio-hero__badge">
            <Sparkles size={14} className="portfolio-hero__badge-icon" />
            <span>{language === 'en' ? 'Curated Visual Archive' : 'சிறப்பு புகைப்படத் தொகுப்பு'}</span>
          </div>

          <h1 className="portfolio-hero__title">
            {portT.heroTitle}
          </h1>

          <p className="portfolio-hero__sub">
            {portT.heroSub}
          </p>

          {/* Quick Stats Pill */}
          <div className="portfolio-hero__stats">
            <div className="portfolio-hero__stat-item">
              <Camera size={14} />
              <span>{portfolioItems.length}+ {language === 'en' ? 'Featured Photographs' : 'புகைப்படங்கள்'}</span>
            </div>
            <span className="portfolio-hero__stat-divider">•</span>
            <div className="portfolio-hero__stat-item">
              <span>{portfolioCategories.length - 1} {language === 'en' ? 'Ceremony Categories' : 'சடங்கு பிரிவுகள்'}</span>
            </div>
            <span className="portfolio-hero__stat-divider">•</span>
            <div className="portfolio-hero__stat-item">
              <span>Thirukadaiyur Heritage</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS & INTERACTIVE GALLERY ──────────────── */}
      <section className="section section--dark portfolio-section">
        <div className="container">
          {/* Glass Segmented Category Filter Bar */}
          <div className="portfolio-filter-bar">
            <div className="portfolio-filters" role="tablist" aria-label="Portfolio categories">
              {portfolioCategories.map(cat => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`portfolio-filter-btn ${activeCategory === cat.id ? 'portfolio-filter-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="portfolio-filter-btn__label">{getCatLabel(cat.id)}</span>
                  <span className="portfolio-filter-btn__count">{getCatCount(cat.id)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="portfolio-gallery-area">
            <PortfolioGrid items={filtered} columns={4} />
          </div>
        </div>
      </section>

      {/* ── CATEGORY QUICK ACCESS SHOWCASE ─────────────────── */}
      <section className="section section--light portfolio-categories-section">
        <div className="container">
          <SectionHeading
            label={portT.browseLabel}
            title={portT.browseTitle}
            align="center"
            dark={false}
          />
          <div className="portfolio-cat-grid">
            {portfolioCategories.slice(1).map(cat => {
              const sampleItem = portfolioItems.find(i => i.category === cat.id);
              return (
                <Link
                  key={cat.id}
                  to={`/portfolio/${cat.id}/`}
                  className="portfolio-cat-card"
                >
                  {sampleItem && (
                    <div className="portfolio-cat-card__thumb">
                      <img src={sampleItem.image} alt={cat.label} loading="lazy" />
                      <div className="portfolio-cat-card__overlay" />
                    </div>
                  )}
                  <div className="portfolio-cat-card__info">
                    <span className="portfolio-cat-card__title">{getCatLabel(cat.id)}</span>
                    <span className="portfolio-cat-card__arrow">Explore →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ─────────────────────────────────── */}
      <section className="section section--dark portfolio-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label" style={{ color: 'var(--clr-yellow)', marginBottom: '0.75rem', display: 'inline-block' }}>
            ✦ {language === 'en' ? 'Book Your Sacred Date' : 'உங்கள் நாள் முன்பதிவு செய்ய'}
          </span>
          <h2 className="display-sm" style={{ marginBottom: '1rem', color: '#FFFFFF' }}>
            {portT.lovedTitle}
          </h2>
          <p className="body-lg" style={{ color: 'rgba(250, 250, 248, 0.75)', marginBottom: '2rem', maxWidth: '580px', marginInline: 'auto' }}>
            {portT.lovedSub}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact/" className="btn btn-primary">{t.common.bookShoot}</Link>
            <Link to="/services/" className="btn btn-outline">{t.nav.services}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
