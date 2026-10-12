import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { allServices as services } from '../../data/services';
import type { ServiceItem } from '../../data/services';
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
      ? 'Thirukadaiyur 60th, 70th & 80th Marriage Photography Packages | Mani Photography'
      : 'திருக்கடையூர் 60, 70 & 80ஆம் கல்யாண போட்டோகிராஃபி பேக்கேஜ்கள் | மணி போட்டோகிராஃபி',
    description: language === 'en'
      ? 'Specialist packages for Thirukadaiyur 60th Wedding (Shashtiapthapoorthi), 70th (Bhimaratha Shanthi) & 80th (Sadabishegam) ritual photography & LED candid videos at Amritaghateswarar Abirami Temple.'
      : 'திருக்கடையூர் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி), 70ஆம் கல்யாணம் & 80ஆம் கல்யாண (சதாபிஷேகம்) சடங்கு புகைப்படங்கள், LED & candid வீடியோ பேக்கேஜ்கள்.',
  });

  useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <div className="page-hero services-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">{servT.heroLabel}</span>
          <h1 className="display-md page-hero__title">{servT.heroTitle}</h1>
          <p className="body-lg page-hero__sub">
            {servT.heroSub}
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="section section--dark services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service: ServiceItem) => {
              const localized = t.serviceItems[service.id as keyof typeof t.serviceItems] || {
                title: service.title,
                fullDesc: service.fullDesc,
                includes: service.includes,
              };

              return (
                <article
                  key={service.id}
                  className="service-card reveal"
                  id={service.slug}
                >
                  <div className="service-card__image-wrap">
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
                    <div className="img-placeholder" style={{ display: 'none', minHeight: '180px' }}>
                      <span className="label-light">{localized.title}</span>
                    </div>
                    <span className="service-card__icon-badge">{service.icon}</span>
                  </div>

                  <div className="service-card__body">
                    <h2 className="service-card__title">{localized.title}</h2>
                    <p className="service-card__desc">{localized.fullDesc}</p>

                    <div className="service-card__includes">
                      <span className="service-card__includes-label">{servT.whatsIncluded}</span>
                      <ul className="service-card__includes-list">
                        {localized.includes.slice(0, 3).map(item => (
                          <li key={item} className="service-card__includes-item">
                            <span aria-hidden="true" className="service-card__check">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-card__actions">
                      <Link to="/contact" className="btn btn-primary service-card__btn">
                        {servT.enquireService}
                      </Link>
                      <Link
                        to={service.dedicatedRoute || `/services/${service.slug}`}
                        className="btn btn-outline service-card__btn"
                      >
                        {language === 'en' ? 'View Details' : 'மேலும் அறிய'}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
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
