import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './About.css';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const aboutT = t.about;

  useDocumentHead({
    title: language === 'en'
      ? 'About Mani Photography Thirukadaiyur | Temple Specialist Photographer'
      : 'மணி போட்டோகிராஃபி பற்றி | திருக்கடையூர் கோயில் ஸ்பெஷலிஸ்ட் போட்டோகிராபர்',
    description: language === 'en'
      ? 'Meet Mani Photography — Thirukadaiyur Amritaghateswarar Abirami Temple specialist photographer with decades of expertise in 60th, 70th & 80th milestone wedding rituals.'
      : 'மணி போட்டோகிராஃபி பற்றி அறியவும் — திருக்கடையூர் அமிர்தகடேஸ்வரர் அபிராமி அம்மன் கோயிலில் 60, 70, 80ஆம் கல்யாண சடங்குகளை சிறப்பான முறையில் படம்பிடிக்கும் போட்டோகிராபர்.',
  });

  useScrollReveal();

  const values = [
    { icon: '📸', title: aboutT.values.v1Title, desc: aboutT.values.v1Desc },
    { icon: '🎨', title: aboutT.values.v2Title, desc: aboutT.values.v2Desc },
    { icon: '🤝', title: aboutT.values.v3Title, desc: aboutT.values.v3Desc },
    { icon: '✨', title: aboutT.values.v4Title, desc: aboutT.values.v4Desc },
  ];

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="page-hero page-hero--dark about-hero">
        <div className="container">
          <div className="editorial-tagline-pill" style={{ marginBottom: '1rem' }}>
            <span className="pill-dot">✦</span>
            <span>{aboutT.heroLabel}</span>
          </div>
          <h1 className="display-md page-hero__title">{aboutT.heroTitle}</h1>
          <p className="body-lg page-hero__sub">
            {aboutT.heroSub}
          </p>
        </div>
      </div>

      {/* ── LEAD PHOTOGRAPHER STORY (EDITORIAL COLLAGE) ─── */}
      <section className="section section--light about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image reveal-left">
              <div className="about-story-collage">
                <div className="about-story-collage__main">
                  <img
                    src={`${import.meta.env.BASE_URL}images/about/thirukadaiyur-lead-photographer-mani.webp`}
                    alt="Mani Photography — Lead Photographer in Thirukadaiyur"
                    className="img-cover"
                    loading="lazy"
                    width="800"
                    height="1000"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = 'flex';
                    }}
                  />
                  <div className="img-placeholder" style={{ display: 'none', minHeight: '450px' }}>
                    <span className="label-light">Mani Photography</span>
                  </div>
                  <span className="collage-badge-tag">Lead Artist & Founder</span>
                </div>

                <div className="about-story-collage__side-badge">
                  <div className="about-experience-box">
                    <span className="about-experience-box__number">10+</span>
                    <span className="about-experience-box__label">Years of Mastery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-story__content reveal-right">
              <div className="editorial-tagline-pill">
                <span className="pill-dot">✦</span>
                <span>{language === 'en' ? 'Our Origin & Vision' : 'எங்கள் பயணம் & பார்வை'}</span>
              </div>
              <SectionHeading
                label={aboutT.whoWeAreLabel}
                title={aboutT.whoWeAreTitle}
                dark={false}
              />
              <p className="body-lg about-story__text">
                {aboutT.storyP1}
              </p>
              <p className="body-md about-story__text">
                {aboutT.storyP2}
              </p>
              <p className="body-md about-story__text">
                {aboutT.storyP3}
              </p>

              {/* Thirukadaiyur Milestone Speciality Box (Editorial Badge) */}
              <div className="about-temple-badge-box">
                <div className="about-temple-badge-box__header">
                  <span className="about-temple-badge-box__icon">🛕</span>
                  <span className="about-temple-badge-box__title">
                    {language === 'en' ? 'Thirukadaiyur Temple Ritual Specialist' : 'திருக்கடையூர் கோயில் சடங்கு சிறப்பு நிபுணர்'}
                  </span>
                </div>
                <p className="body-sm about-temple-badge-box__desc">
                  {language === 'en'
                    ? 'Specializing in 60th Birthday / Marriage (Shashtiapthapoorthi), 70th Birthday (Bhimaratha Shanthi), 80th Birthday (Sadabishegam) and Kanakabhishekam photography at Amritaghateswarar Abirami Temple.'
                    : 'திருக்கடையூர் ஸ்ரீ அமிர்தகடேஸ்வரர் அபிராமி திருக்கோயிலில் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி), 70ஆம் கல்யாணம் (பீமரத சாந்தி), 80ஆம் கல்யாணம் (சதாபிஷேகம்) மற்றும் கனகாபிஷேக சடங்குகளைப் படம் பிடிப்பதில் முன்னணி அனுபவம்.'}
                </p>
              </div>

              {/* Service Area */}
              <div className="about-service-area">
                <span className="label about-service-area__label">{aboutT.serviceAreaLabel}</span>
                <p className="body-md" style={{ color: 'var(--clr-text-mid)' }}>
                  {aboutT.serviceAreaText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTOGRAPHY STYLE & CRAFT (EDITORIAL DUAL FRAME) ── */}
      <section className="section section--light about-style" style={{ borderTop: '1px solid var(--clr-border-light)' }}>
        <div className="container">
          <div className="about-style__grid">
            <div className="reveal-left">
              <div className="editorial-tagline-pill">
                <span className="pill-dot">✦</span>
                <span>{language === 'en' ? 'Craftsmanship & Soul' : 'கலை நுணுக்கம்'}</span>
              </div>
              <SectionHeading
                label={aboutT.styleLabel}
                title={aboutT.styleTitle}
                dark={false}
              />
              <p className="body-lg about-style__text">
                {aboutT.styleP1}
              </p>
              <p className="body-md about-style__text">
                {aboutT.styleP2}
              </p>
              <p className="body-md about-style__text">
                {aboutT.styleP3}
              </p>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <Link to="/portfolio" className="btn btn-primary">{t.common.explorePortfolio}</Link>
              </div>
            </div>

            <div className="about-style__images reveal-right">
              <div className="about-style-collage">
                <div className="about-style__img about-style__img--tall">
                  <img
                    src={`${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-wedding-photography-muhurtham.webp`}
                    alt="Candid wedding photography example"
                    className="img-cover"
                    loading="lazy"
                    width="500"
                    height="700"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = 'flex';
                    }}
                  />
                  <div className="img-placeholder" style={{ display: 'none', minHeight: '320px' }}>
                    <span className="label-light">{t.categories.weddings}</span>
                  </div>
                  <span className="collage-badge-tag">Sacred Muhurtham</span>
                </div>
                <div className="about-style__img about-style__img--short">
                  <img
                    src={`${import.meta.env.BASE_URL}images/temple/thirukadaiyur-amritaghateswarar-abirami-temple-photography.webp`}
                    alt="Temple photography example"
                    className="img-cover"
                    loading="lazy"
                    width="500"
                    height="400"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = 'flex';
                    }}
                  />
                  <div className="img-placeholder" style={{ display: 'none', minHeight: '220px' }}>
                    <span className="label-light">{t.categories.temple}</span>
                  </div>
                  <span className="collage-badge-tag collage-badge-tag--bottom">Abirami Temple Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PHILOSOPHY & VALUES (EDITORIAL BENTO) ─── */}
      <section className="section section--dark about-philosophy">
        <div className="container">
          <SectionHeading
            label={aboutT.approachLabel}
            title={aboutT.approachTitle}
            align="center"
            className="reveal"
          />
          <div className="about-philosophy__grid">
            {values.map((v, i) => (
              <div key={v.title} className={`about-value reveal reveal-delay-${i + 1}`}>
                <div className="about-value__top-row">
                  <span className="about-value__icon">{v.icon}</span>
                  <span className="about-value__num">0{i + 1}</span>
                </div>
                <h3 className="about-value__title title-md">{v.title}</h3>
                <p className="about-value__desc body-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────────────── */}
      <section className="section section--dark about-cta-section" style={{ textAlign: 'center', borderTop: '1px solid rgba(217, 179, 64, 0.2)' }}>
        <div className="container">
          <span className="editorial-pill-label" style={{ marginBottom: '1rem' }}>✦ Let's Create Timeless Art</span>
          <h2 className="display-sm reveal" style={{ marginTop: '0.75rem', marginBottom: 'var(--space-4)', color: 'var(--clr-white)' }}>
            {t.home.ctaTitle}
          </h2>
          <p className="body-lg reveal" style={{ color: 'rgba(250, 250, 248, 0.8)', marginBottom: 'var(--space-8)', maxWidth: '540px', marginInline: 'auto' }}>
            {t.home.ctaDesc}
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">{t.common.getInTouch}</Link>
            <Link to="/portfolio" className="btn btn-outline">{t.common.explorePortfolio}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
