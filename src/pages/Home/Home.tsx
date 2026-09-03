import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { portfolioItems } from '../../data/portfolio';
import { services } from '../../data/services';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import FaqSection from '../../components/FaqSection/FaqSection';
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
          <div className="hero__eyebrow" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="hero__eyebrow-line" aria-hidden="true" />
              <span className="label hero__label">Mani Photography Thirukadaiyur</span>
            </div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, #D9B340 0%, #B8860B 100%)',
              border: '1px solid #FFD700',
              color: '#1A130B',
              padding: '6px 14px',
              borderRadius: '24px',
              fontSize: 'clamp(0.72rem, 2.5vw, 0.85rem)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
              marginTop: '6px',
              maxWidth: '100%'
            }}>
              👑 {language === 'en' ? 'Thirukadaiyur 60th, 70th & 80th Wedding Photography Specialist (Shashtiapthapoorthi & Sadabishegam)' : 'திருக்கடையூர் 60, 70 & 80ஆம் கல்யாண சிறப்பு புகைப்படக் கலைஞர் (சஷ்டியப்தபூர்த்தி & சதாபிஷேகம்)'}
            </span>
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

      {/* ── THIRUKADAIYUR MILESTONE SPECIALIST SECTION ── */}
      <section className="section section--dark thirukadaiyur-specialist" style={{
        background: 'linear-gradient(180deg, #1C1712 0%, #2A2118 100%)',
        borderTop: '1px solid rgba(217, 179, 64, 0.25)',
        borderBottom: '1px solid rgba(217, 179, 64, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-heading section-heading--dark" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label label-light" style={{ color: 'var(--clr-yellow)', letterSpacing: '0.1em' }}>
              🛕 {language === 'en' ? 'Thirukadaiyur Amritaghateswarar Abirami Temple' : 'திருக்கடையூர் ஸ்ரீ அமிர்தகடேஸ்வரர் அபிராமி கோயில்'}
            </span>
            <h2 className="display-md" style={{ color: 'var(--clr-white)', marginTop: '0.5rem' }}>
              {language === 'en' ? 'Specialist in 60th, 70th & 80th Milestone Weddings' : '60, 70 & 80ஆம் கல்யாண சடங்கு சிறப்பு புகைப்படக் கலைஞர்'}
            </h2>
            <p className="body-lg" style={{ color: 'rgba(250, 250, 248, 0.8)', maxWidth: '800px', margin: '1rem auto 0' }}>
              {language === 'en'
                ? 'Thirukadaiyur is world-famous for sacred longevity rituals. Located right in Thirukadaiyur, Mani Photography specializes in documenting sacred Kalasa Abhishekam, Mangalya Dharanam, and emotional family moments.'
                : 'திருக்கடையூர் ஆயுள் விருத்தி சடங்குகளுக்கு உலகப் புகழ்பெற்ற புனித தலமாகும். திருக்கடையூரில் உள்ள மணி போட்டோகிராபி, கலசாபிஷேகம், மாங்கல்ய தாரணம் மற்றும் குடும்பத்தினரின் ஆசி பெற உதவும் உணர்ச்சிப்பூர்வமான தருணங்களைப் படம் பிடிப்பதில் முன்னணி நிபுணத்துவம் பெற்றுள்ளது.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            {/* Card 1: 60th */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(217, 179, 64, 0.2)',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>👑</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--clr-yellow)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                {language === 'en' ? '60th Wedding (Shashtiapthapoorthi)' : '60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி)'}
              </h3>
              <p style={{ color: 'rgba(250, 250, 248, 0.75)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {language === 'en'
                  ? 'Celebrating 60 years of life and marital harmony with 60 Kalasa Abhishekam and thaali re-tying ceremony at Thirukadaiyur.'
                  : '60 ஆண்டுகள் ஆயுள் நிறைவு மற்றும் மாங்கல்ய பலம் பெற 60 கலச அபிஷேகம் மற்றும் இரண்டாம் முறை தாலி கட்டும் சடங்கு படப்பிடிப்பு.'}
              </p>
            </div>

            {/* Card 2: 70th */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(217, 179, 64, 0.2)',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>🔱</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--clr-yellow)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                {language === 'en' ? '70th Birthday (Bhimaratha Shanthi)' : '70ஆம் கல்யாணம் (பீமரத சாந்தி)'}
              </h3>
              <p style={{ color: 'rgba(250, 250, 248, 0.75)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {language === 'en'
                  ? 'Honouring 70 years of wisdom with sacred homam, temple rituals, and grand family gatherings in Thirukadaiyur.'
                  : '70 ஆண்டுகள் ஆயுள் சாந்தி சடங்குகள், ஹோமங்கள் மற்றும் குடும்பத்தினர் பங்கேற்கும் புனித சடங்குகளைப் பதிவு செய்தல்.'}
              </p>
            </div>

            {/* Card 3: 80th */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(217, 179, 64, 0.2)',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>🌕</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--clr-yellow)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                {language === 'en' ? '80th Birthday (Sadabishegam)' : '80ஆம் கல்யாணம் (சதாபிஷேகம்)'}
              </h3>
              <p style={{ color: 'rgba(250, 250, 248, 0.75)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {language === 'en'
                  ? 'Celebrating 1000 full moons (Sahasra Chandra Darsanam), 80 Kalasa Abhishekam, and multi-generational family blessings.'
                  : '1000 பிறை கண்ட அருமையான 80ஆம் ஆண்டு சதாபிஷேகம், 80 கலச அபிஷேகம் மற்றும் பேரக் குழந்தைகள் ஆசி பெறும் அரிய தருணங்கள்.'}
              </p>
            </div>

            {/* Card 4: Kanakabhishekam & Temple */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(217, 179, 64, 0.2)',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>✨</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--clr-yellow)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                {language === 'en' ? 'Kanakabhishekam & Temple Shoots' : 'கனகாபிஷேகம் & கோயில் படப்பிடிப்பு'}
              </h3>
              <p style={{ color: 'rgba(250, 250, 248, 0.75)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {language === 'en'
                  ? 'Specialized 90th & 100th milestone shoots, gold coin abhishekam, and Abirami Temple darshan memories.'
                  : '90 மற்றும் 100ஆம் ஆண்டு கனகாபிஷேகம், பொன் நாணய அபிஷேகம் மற்றும் அபிராமி அம்மன் கோயில் தரிசன நினைவுகள்.'}
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.875rem 2rem' }}>
              {language === 'en' ? 'Book Thirukadaiyur 60th / 80th Shoot →' : 'திருக்கடையூர் சடங்கு படப்பிடிப்பை பதிவு செய்ய →'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC VIDEO SHOWCASE ───────────────────── */}
      <section className="section section--dark video-showcase-section" style={{
        background: 'linear-gradient(180deg, #120E0B 0%, #1A140E 100%)',
        paddingBlock: '5rem',
        borderBottom: '1px solid rgba(217, 179, 64, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <SectionHeading
            label={homeT.videoShowcaseLabel}
            title={homeT.videoShowcaseTitle}
            subtitle={homeT.videoShowcaseSub}
            align="center"
            className="reveal"
          />

          <div className="video-showcase__wrapper reveal" style={{
            maxWidth: '1000px',
            margin: '2.5rem auto 0',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(217, 179, 64, 0.15)',
            border: '1px solid rgba(217, 179, 64, 0.35)',
            background: '#0D0A07'
          }}>
            {/* Header Badge */}
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(26, 19, 11, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              borderRadius: '30px',
              padding: '6px 14px',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#FFD700',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}>
              <span>🎬</span>
              <span>{language === 'en' ? 'Thirukadaiyur Event & Temple Highlights' : 'திருக்கடையூர் சடங்குகள் & கோயில் காட்சிகள்'}</span>
            </div>

            <video
              src={`${import.meta.env.BASE_URL}videos/thirukadaiyur-showcase.mp4`}
              poster={`${import.meta.env.BASE_URL}images/thirukadaiyur-video-poster.jpg`}
              controls
              preload="metadata"
              playsInline
              style={{
                width: '100%',
                display: 'block',
                maxHeight: '600px',
                objectFit: 'contain',
                background: '#000'
              }}
            />
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

      {/* ── FAQ SECTION (SEO RANKING) ──────────────────── */}
      <FaqSection />

      {/* ── CTA SECTION ─────────────────────────────────── */}
      <section className="section cta-section">
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
