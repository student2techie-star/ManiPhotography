import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { portfolioItems } from '../../data/portfolio';
import { services } from '../../data/services';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './Home.css';

const featuredPortfolio = portfolioItems.filter(i => i.featured).slice(0, 9);

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const homeT = t.home;

  const homeMeta = {
    title: language === 'en'
      ? 'Mani Photography | Wedding & Event Photography in Thirukadaiyur, Mayiladuthurai'
      : 'மணி போட்டோகிராஃபி | திருக்கடையூர், மயிலாடுதுறை திருமண & நிகழ்வு புகைப்படம்',
    description: language === 'en'
      ? 'Mani Photography — capturing beautiful weddings, Tamil traditional ceremonies, pre-wedding shoots, baby showers, house warmings and family functions. Premium photography in Thirukadaiyur, Mayiladuthurai, Tamil Nadu.'
      : 'மணி போட்டோகிராஃபி — தமிழ் பாரம்பரிய திருமணங்கள், pre-wedding ஷூட், வளைகாப்பு, கிரகப்பிரவேசம் மற்றும் குடும்ப விழாக்களுக்கான உயர்தர புகைப்படம். திருக்கடையூர், மயிலாடுதுறை, தமிழ்நாடு.',
  };

  useDocumentHead(homeMeta);
  useScrollReveal();

  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero image
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      const img = hero.querySelector('.hero__bg-img') as HTMLElement;
      if (img) img.style.transform = `scale(1.08) translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('intro');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const philosophyItems = [
    { num: '01', title: homeT.philosophyItem1Title, desc: homeT.philosophyItem1Desc },
    { num: '02', title: homeT.philosophyItem2Title, desc: homeT.philosophyItem2Desc },
    { num: '03', title: homeT.philosophyItem3Title, desc: homeT.philosophyItem3Desc },
    { num: '04', title: homeT.philosophyItem4Title, desc: homeT.philosophyItem4Desc },
  ];

  const trustItems = [
    homeT.trustItem1,
    homeT.trustItem2,
    homeT.trustItem3,
    homeT.trustItem4,
    homeT.trustItem5,
    homeT.trustItem6,
    homeT.trustItem7,
    homeT.trustItem8,
  ];

  const testimonials = [
    { quote: homeT.t1Quote, name: homeT.t1Name, event: homeT.t1Event },
    { quote: homeT.t2Quote, name: homeT.t2Name, event: homeT.t2Event },
    { quote: homeT.t3Quote, name: homeT.t3Name, event: homeT.t3Event },
  ];

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="hero" ref={heroRef} aria-label="Hero — Mani Photography">
        <div className="hero__bg">
          <video
            src={`${import.meta.env.BASE_URL}images/hero-video.mp4`}
            className="hero__bg-video"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero__bg-fallback" aria-hidden="true" />
          <div className="hero__overlay" aria-hidden="true" />
        </div>

        <div className="hero__content container">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" aria-hidden="true" />
            <span className="label hero__label">Mani Photography</span>
          </div>
          <h1 className="hero__headline display-xl">
            {homeT.heroTitleLine1}<br />
            <em>{homeT.heroTitleLine2}</em>
          </h1>
          <p className="hero__sub body-lg">
            {homeT.heroSub}
          </p>
          <div className="hero__ctas">
            <Link to="/portfolio" className="btn btn-primary">{t.common.viewWork}</Link>
            <Link to="/contact" className="btn btn-outline">{t.common.bookShoot}</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero__stats" aria-label="Studio statistics">
          <div className="hero__stat">
            <span className="hero__stat-num">10+</span>
            <span className="hero__stat-label">{homeT.statYears}</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">500+</span>
            <span className="hero__stat-label">{homeT.statWeddings}</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">2000+</span>
            <span className="hero__stat-label">{homeT.statFamilies}</span>
          </div>
        </div>

        <button className="hero__scroll-indicator" onClick={scrollToContent} aria-label="Scroll to content">
          <span className="hero__scroll-line" aria-hidden="true" />
          <ChevronDown size={14} />
        </button>
      </section>

      {/* ── INTRO / ABOUT ───────────────────────────────── */}
      <section className="section section--light intro-section" id="intro">
        <div className="container">
          <div className="intro-section__grid">
            <div className="intro-section__image reveal-left">
              <div className="intro-section__img-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}images/about/about-01.jpg`}
                  alt="Photography at a Tamil wedding ceremony"
                  className="img-cover"
                  loading="lazy"
                  width="720"
                  height="900"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '500px' }}>
                  <span className="label-light">{t.categories.weddings}</span>
                </div>
              </div>
              <div className="intro-section__badge" aria-hidden="true">
                <span className="label-light">{t.common.since}</span>
                <span className="intro-section__badge-year">2015</span>
              </div>
            </div>

            <div className="intro-section__content reveal-right">
              <SectionHeading
                label={homeT.aboutLabel}
                title={homeT.aboutTitle}
                dark={false}
              />
              <p className="body-lg intro-section__text">
                {homeT.aboutP1}
              </p>
              <p className="body-md intro-section__text">
                {homeT.aboutP2}
              </p>
              <p className="body-md intro-section__text">
                {homeT.aboutP3}
              </p>
              <div className="intro-section__ctas">
                <Link to="/about" className="btn btn-primary">{homeT.ourStoryBtn}</Link>
                <Link to="/contact" className="btn btn-outline-dark">{t.common.bookShoot}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section className="section section--dark services-home">
        <div className="container">
          <SectionHeading
            label={homeT.servicesLabel}
            title={homeT.servicesTitle}
            subtitle={homeT.servicesSub}
            className="reveal"
          />
          <div className="services-home__grid">
            {services.slice(0, 8).map((service, i) => {
              const localizedService = t.serviceItems[service.id as keyof typeof t.serviceItems] || {
                title: service.title,
                shortDesc: service.shortDesc,
              };
              return (
                <Link
                  to={`/services`}
                  key={service.id}
                  className={`service-card reveal reveal-delay-${(i % 4) + 1}`}
                >
                  <div className="service-card__img-wrap">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="service-card__img"
                      loading="lazy"
                      width="600"
                      height="400"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const next = e.currentTarget.nextElementSibling as HTMLElement;
                        if (next) next.style.display = 'flex';
                      }}
                    />
                    <div className="img-placeholder service-card__placeholder" style={{ display: 'none' }}>
                      <span className="label-light">{localizedService.title}</span>
                    </div>
                    <div className="service-card__overlay" aria-hidden="true" />
                  </div>
                  <div className="service-card__body">
                    <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
                    <h3 className="service-card__title title-sm">{localizedService.title}</h3>
                    <p className="service-card__desc body-sm">{localizedService.shortDesc}</p>
                    <span className="service-card__link label-light">{t.nav.explore}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED GALLERY ────────────────────────────── */}
      <section className="section section--light gallery-home">
        <div className="container">
          <div className="gallery-home__header reveal">
            <SectionHeading
              label={homeT.portfolioLabel}
              title={homeT.portfolioTitle}
              subtitle={homeT.portfolioSub}
              dark={false}
            />
            <Link to="/portfolio" className="btn btn-outline-dark gallery-home__see-all">
              {t.common.viewAll}
            </Link>
          </div>
          <PortfolioGrid items={featuredPortfolio} columns={3} />
          <div className="gallery-home__cta reveal">
            <Link to="/portfolio" className="btn btn-primary">{t.common.explorePortfolio}</Link>
          </div>
        </div>
      </section>

      {/* ── WEDDING FEATURE ─────────────────────────────── */}
      <section className="wedding-feature" aria-label="Wedding photography feature">
        <div className="wedding-feature__bg">
          <img
            src={`${import.meta.env.BASE_URL}images/weddings/wedding-01.jpg`}
            alt="Tamil wedding couple during their ceremony"
            className="img-cover"
            loading="lazy"
            width="1920"
            height="1080"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="wedding-feature__overlay" aria-hidden="true" />
        </div>
        <div className="container">
          <div className="wedding-feature__content reveal">
            <span className="label wedding-feature__label">{homeT.weddingLabel}</span>
            <span className="accent-line" aria-hidden="true" />
            <h2 className="display-md wedding-feature__title">
              {homeT.weddingTitleLine1}<br />
              <em>{homeT.weddingTitleLine2}</em>
            </h2>
            <p className="body-lg wedding-feature__desc">
              {homeT.weddingDesc}
            </p>
            <Link to="/portfolio/weddings" className="btn btn-primary">{homeT.weddingBtn}</Link>
          </div>
        </div>
      </section>

      {/* ── TAMIL WEDDING ───────────────────────────────── */}
      <section className="section section--dark tamil-section">
        <div className="container">
          <div className="tamil-section__grid">
            <div className="tamil-section__content reveal-left">
              <SectionHeading
                label={homeT.tamilLabel}
                title={homeT.tamilTitle}
              />
              <p className="body-lg tamil-section__text">
                {homeT.tamilP1}
              </p>
              <p className="body-md tamil-section__text">
                {homeT.tamilP2}
              </p>
              <Link to="/portfolio/tamil-weddings" className="btn btn-primary">{homeT.tamilBtn}</Link>
            </div>
            <div className="tamil-section__images reveal-right">
              <div className="tamil-section__img-primary">
                <img
                  src={`${import.meta.env.BASE_URL}images/tamil-weddings/tamil-01.jpg`}
                  alt="Thaali ceremony during a Tamil wedding"
                  className="img-cover"
                  loading="lazy"
                  width="720"
                  height="900"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '400px' }}>
                  <span className="label-light">{t.categories['tamil-weddings']}</span>
                </div>
              </div>
              <div className="tamil-section__img-secondary">
                <img
                  src={`${import.meta.env.BASE_URL}images/tamil-weddings/tamil-02.jpg`}
                  alt="Oonjal ceremony at a Tamil wedding"
                  className="img-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '200px' }}>
                  <span className="label-light">Tamil Ritual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRE-WEDDING ─────────────────────────────────── */}
      <section className="section section--light prewedding-section">
        <div className="container">
          <div className="prewedding-section__grid">
            <div className="prewedding-section__images reveal-left">
              <div className="prewedding-section__img-main">
                <img
                  src={`${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-01.jpg`}
                  alt="Couple at a heritage architecture location"
                  className="img-cover"
                  loading="lazy"
                  width="720"
                  height="900"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '500px' }}>
                  <span className="label-light">{t.categories['pre-wedding']}</span>
                </div>
              </div>
            </div>
            <div className="prewedding-section__content reveal-right">
              <SectionHeading
                label={homeT.preweddingLabel}
                title={homeT.preweddingTitle}
                dark={false}
              />
              <p className="body-lg prewedding-section__text">
                {homeT.preweddingDesc}
              </p>
              <div className="prewedding-section__locations">
                {(language === 'en'
                  ? ['Temple', 'Heritage Architecture', 'Nature & Gardens', 'Beaches', 'City Streets', 'Traditional Locations']
                  : ['கோயில்கள்', 'பாரம்பரிய இடங்கள்', 'இயற்கை எழில்', 'கடற்கரைகள்', 'நகர வீதிகள்', 'பாரம்பரிய இடங்கள்']
                ).map(loc => (
                  <span key={loc} className="prewedding-section__loc-tag">{loc}</span>
                ))}
              </div>
              <Link to="/portfolio/pre-wedding" className="btn btn-primary">{homeT.preweddingBtn}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS GRID ─────────────────────────────────── */}
      <section className="section section--dark events-section">
        <div className="container">
          <SectionHeading
            label={homeT.eventsLabel}
            title={homeT.eventsTitle}
            subtitle={homeT.eventsSub}
            align="center"
            className="reveal"
          />
          <div className="events-section__grid">
            {[
              { title: t.categories.events, image: `${import.meta.env.BASE_URL}images/events/event-01.jpg`, slug: 'events', desc: language === 'en' ? 'The beginning of your forever.' : 'உங்கள் புதிய பயணத்தின் தொடக்கம்.' },
              { title: t.categories['baby-shower'], image: `${import.meta.env.BASE_URL}images/baby-shower/baby-shower-01.jpg`, slug: 'baby-shower', desc: language === 'en' ? 'Beautiful anticipation, captured.' : 'புதிய வரவின் எதிர்பார்ப்பு, படம் பிடிக்கப்பட்டது.' },
              { title: t.categories['house-warming'], image: `${import.meta.env.BASE_URL}images/house-warming/house-warming-01.jpg`, slug: 'house-warming', desc: language === 'en' ? 'The joy of a new beginning.' : 'புதிய தொடக்கத்தின் மகிழ்ச்சி.' },
              { title: language === 'en' ? 'Birthday' : 'பிறந்த நாள்', image: `${import.meta.env.BASE_URL}images/events/event-02.jpg`, slug: 'events', desc: language === 'en' ? 'Milestone moments, beautifully preserved.' : 'வாழ்வின் மைல்கல் தருணங்கள்.' },
              { title: language === 'en' ? 'Naming Ceremony' : 'பெயர் சூட்டும் விழா', image: `${import.meta.env.BASE_URL}images/events/event-03.jpg`, slug: 'events', desc: language === 'en' ? 'Welcoming a new life with love.' : 'புதிய உயிரை அன்புடன் வரவேற்போம்.' },
              { title: t.categories.family, image: `${import.meta.env.BASE_URL}images/family/family-01.jpg`, slug: 'family', desc: language === 'en' ? 'Your people, together.' : 'உங்கள் குடும்பம், ஒன்றாக.' },
            ].map((event, i) => (
              <Link
                to={`/portfolio/${event.slug}`}
                key={event.title}
                className={`event-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="event-card__img-wrap">
                  <img
                    src={event.image}
                    alt={`${event.title} photography`}
                    className="event-card__img"
                    loading="lazy"
                    width="400"
                    height="500"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = 'flex';
                    }}
                  />
                  <div className="img-placeholder event-card__placeholder" style={{ display: 'none' }}>
                    <span className="label-light">{event.title}</span>
                  </div>
                  <div className="event-card__overlay" aria-hidden="true" />
                </div>
                <div className="event-card__body">
                  <h3 className="event-card__title title-sm">{event.title}</h3>
                  <p className="event-card__desc body-sm">{event.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────── */}
      <section className="section section--light philosophy-section">
        <div className="container">
          <SectionHeading
            label={homeT.philosophyLabel}
            title={homeT.philosophyTitle}
            align="center"
            dark={false}
            className="reveal"
          />
          <div className="philosophy-section__grid">
            {philosophyItems.map((item, i) => (
              <div key={item.num} className={`philosophy-card reveal reveal-delay-${i + 1}`}>
                <span className="philosophy-card__num label">{item.num}</span>
                <span className="accent-line" aria-hidden="true" />
                <h3 className="philosophy-card__title display-sm">{item.title}</h3>
                <p className="philosophy-card__desc body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ───────────────────────────────────────── */}
      <section className="section section--dark trust-section">
        <div className="container">
          <SectionHeading
            label={homeT.trustLabel}
            title={homeT.trustTitle}
            align="center"
            className="reveal"
          />
          <div className="trust-section__grid">
            {trustItems.map((item, i) => (
              <div key={item} className={`trust-item reveal reveal-delay-${(i % 4) + 1}`}>
                <span className="trust-item__check" aria-hidden="true">✦</span>
                <span className="trust-item__label body-md">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="section section--light testimonials-section">
        <div className="container">
          <SectionHeading
            label={homeT.testimonialsLabel}
            title={homeT.testimonialsTitle}
            align="center"
            dark={false}
            className="reveal"
          />
          <div className="testimonials-section__grid">
            {testimonials.map((tItem, i) => (
              <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <span className="testimonial-card__quote-mark" aria-hidden="true">"</span>
                <blockquote className="testimonial-card__quote body-lg">{tItem.quote}</blockquote>
                <div className="testimonial-card__author">
                  <span className="accent-line accent-line--sm" aria-hidden="true" />
                  <span className="testimonial-card__name body-md">{tItem.name}</span>
                  <span className="testimonial-card__event label-light">{tItem.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-section__bg">
          <img
            src={`${import.meta.env.BASE_URL}images/temple/temple-01.jpg`}
            alt="Beautiful temple photography backdrop"
            className="img-cover"
            loading="lazy"
            width="1920"
            height="1080"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="cta-section__overlay" aria-hidden="true" />
        </div>
        <div className="cta-section__content container reveal">
          <span className="label cta-section__label">{homeT.ctaLabel}</span>
          <span className="accent-line accent-line--center" aria-hidden="true" />
          <h2 className="display-md cta-section__title">
            {homeT.ctaTitle}
          </h2>
          <p className="body-lg cta-section__desc">
            {homeT.ctaDesc}
          </p>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-primary">{t.common.sendEnquiry}</Link>
            <Link to="/portfolio" className="btn btn-outline">{t.common.viewWork}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
