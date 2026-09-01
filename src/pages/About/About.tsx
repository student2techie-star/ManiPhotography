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
      ? 'About | Mani Photography — Our Story & Approach'
      : 'எங்களைப் பற்றி | மணி போட்டோகிராஃபி — எங்கள் கதை & அணுகுமுறை',
    description: language === 'en'
      ? 'Learn about Mani Photography — our story, our approach to photography, and what makes us different. We capture authentic emotions at weddings, Tamil ceremonies, pre-wedding shoots and family celebrations.'
      : 'மணி போட்டோகிராஃபி பற்றி அறியவும் — எங்கள் கதை, எங்கள் புகைப்பட அணுகுமுறை. திருமணங்கள், தமிழ் சடங்குகள், pre-wedding படப்பிடிப்புகளில் உண்மையான உணர்ச்சிகளைப் பதிவு செய்கிறோம்.',
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
      {/* Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">{aboutT.heroLabel}</span>
          <h1 className="display-md page-hero__title">{aboutT.heroTitle}</h1>
          <p className="body-lg page-hero__sub">
            {aboutT.heroSub}
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section section--light about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image reveal-left">
              <div className="about-story__img-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}images/about/about-01.jpg`}
                  alt="Mani Photography — behind the scenes at a wedding"
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
                <div className="img-placeholder" style={{ display: 'none', minHeight: '500px' }}>
                  <span className="label-light">Mani Photography</span>
                </div>
              </div>
            </div>

            <div className="about-story__content reveal-right">
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

              {/* Service Area */}
              <div className="about-service-area">
                <span className="label about-service-area__label">{aboutT.serviceAreaLabel}</span>
                <p className="body-md" style={{ color: 'var(--clr-text-mid)' }}>
                  {aboutT.serviceAreaText}
                </p>
              </div>

              {/* Thirukadaiyur Milestone Speciality Box */}
              <div style={{
                marginTop: '1.75rem',
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.08) 0%, rgba(184, 134, 11, 0.15) 100%)',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem'
              }}>
                <span style={{
                  display: 'inline-block',
                  color: 'var(--clr-yellow-deep)',
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}>
                  🛕 {language === 'en' ? 'Thirukadaiyur Temple Ritual Specialist' : 'திருக்கடையூர் கோயில் சடங்கு சிறப்பு நிபுணர்'}
                </span>
                <p className="body-sm" style={{ color: 'var(--clr-text-dark)', fontWeight: 500, margin: 0 }}>
                  {language === 'en'
                    ? 'Specializing in 60th Birthday / Marriage (Shashtiapthapoorthi), 70th Birthday (Bhimaratha Shanthi), 80th Birthday (Sadabishegam) and Kanakabhishekam photography at Amritaghateswarar Abirami Temple.'
                    : 'திருக்கடையூர் ஸ்ரீ அமிர்தகடேஸ்வரர் அபிராமி திருக்கோயிலில் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி), 70ஆம் கல்யாணம் (பீமரத சாந்தி), 80ஆம் கல்யாணம் (சதாபிஷேகம்) மற்றும் கனகாபிஷேக சடங்குகளைப் படம் பிடிப்பதில் முன்னணி அனுபவம்.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
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
                <span className="about-value__icon">{v.icon}</span>
                <h3 className="about-value__title title-md">{v.title}</h3>
                <p className="about-value__desc body-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Style */}
      <section className="section section--light about-style">
        <div className="container">
          <div className="about-style__grid">
            <div className="reveal-left">
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
            </div>
            <div className="about-style__images reveal-right">
              <div className="about-style__img about-style__img--tall">
                <img
                  src={`${import.meta.env.BASE_URL}images/weddings/wedding-01.jpg`}
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
                <div className="img-placeholder" style={{ display: 'none', minHeight: '300px' }}>
                  <span className="label-light">{t.categories.weddings}</span>
                </div>
              </div>
              <div className="about-style__img about-style__img--short">
                <img
                  src={`${import.meta.env.BASE_URL}images/temple/temple-01.jpg`}
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
                <div className="img-placeholder" style={{ display: 'none', minHeight: '200px' }}>
                  <span className="label-light">{t.categories.temple}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-sm reveal" style={{ marginBottom: 'var(--space-4)' }}>
            {t.home.ctaTitle}
          </h2>
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-muted)', marginBottom: 'var(--space-8)', maxWidth: '500px', marginInline: 'auto' }}>
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
