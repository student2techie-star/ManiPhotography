import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { services } from '../../data/services';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './Services.css';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const servT = t.services;

  useDocumentHead({
    title: language === 'en'
      ? 'Services | Mani Photography — Wedding, Pre-Wedding & Event Photography'
      : 'சேவைகள் | மணி போட்டோகிராஃபி — திருமண & நிகழ்வு புகைப்பட சேவைகள்',
    description: language === 'en'
      ? 'Mani Photography offers wedding photography & cinematography, pre-wedding shoots, Tamil traditional photography, temple shoots, baby shower, house warming, engagement and family function photography.'
      : 'மணி போட்டோகிராஃபி வழங்கும் திருமண புகைப்படம், cinematography, pre-wedding ஷூட், தமிழ் சடங்கு படங்கள், கோயில் படங்கள், வளைகாப்பு, கிரகப்பிரவேசம் & குடும்ப விழா புகைப்பட சேவைகள்.',
  });

  useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">{servT.heroLabel}</span>
          <h1 className="display-md page-hero__title">{servT.heroTitle}</h1>
          <p className="body-lg page-hero__sub">
            {servT.heroSub}
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="section section--dark services-page">
        <div className="container">
          {services.map((service, i) => {
            const localized = t.serviceItems[service.id as keyof typeof t.serviceItems] || {
              title: service.title,
              fullDesc: service.fullDesc,
              includes: service.includes,
            };

            return (
              <article
                key={service.id}
                className={`service-detail reveal ${i % 2 === 0 ? 'service-detail--normal' : 'service-detail--reversed'}`}
                id={service.slug}
              >
                <div className="service-detail__image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="img-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = 'flex';
                    }}
                  />
                  <div className="img-placeholder" style={{ display: 'none', minHeight: '400px' }}>
                    <span className="label-light">{localized.title}</span>
                  </div>
                </div>
                <div className="service-detail__content">
                  <span className="service-detail__icon">{service.icon}</span>
                  <SectionHeading
                    label={servT.heroLabel}
                    title={localized.title}
                  />
                  <p className="body-lg service-detail__full-desc">{localized.fullDesc}</p>
                  <div className="service-detail__includes">
                    <h3 className="service-detail__includes-title label">{servT.whatsIncluded}</h3>
                    <ul className="service-detail__includes-list">
                      {localized.includes.map(item => (
                        <li key={item} className="service-detail__includes-item">
                          <span aria-hidden="true" className="service-detail__check">✦</span>
                          <span className="body-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="btn btn-primary service-detail__cta">
                    {servT.enquireService}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section section--light" style={{ textAlign: 'center' }}>
        <div className="container">
          <SectionHeading
            label={servT.readyTitle}
            title={servT.readyTitle}
            align="center"
            dark={false}
            className="reveal"
          />
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-mid)', marginBottom: 'var(--space-8)', maxWidth: '560px', marginInline: 'auto' }}>
            {servT.readySub}
          </p>
          <Link to="/contact" className="btn btn-primary reveal">{t.common.bookShoot}</Link>
        </div>
      </section>
    </main>
  );
}
