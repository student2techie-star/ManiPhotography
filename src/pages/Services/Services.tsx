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
          {services.map((service: ServiceItem, i: number) => {
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
