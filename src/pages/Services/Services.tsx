import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { services } from '../../data/services';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Services.css';

export default function Services() {
  useDocumentHead({
    title: 'Services | Mani Photography — Wedding, Pre-Wedding & Event Photography',
    description: 'Mani Photography offers wedding photography & cinematography, pre-wedding shoots, Tamil traditional photography, temple shoots, baby shower, house warming, engagement and family function photography.',
  });
  useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">What We Offer</span>
          <h1 className="display-md page-hero__title">Our Services</h1>
          <p className="body-lg page-hero__sub">
            Premium photography and cinematography for every occasion, delivered with care and artistry.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="section section--dark services-page">
        <div className="container">
          {services.map((service, i) => (
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
                  <span className="label-light">{service.title}</span>
                </div>
              </div>
              <div className="service-detail__content">
                <span className="service-detail__icon">{service.icon}</span>
                <SectionHeading
                  label="Service"
                  title={service.title}
                />
                <p className="body-lg service-detail__full-desc">{service.fullDesc}</p>
                <div className="service-detail__includes">
                  <h3 className="service-detail__includes-title label">What's Included</h3>
                  <ul className="service-detail__includes-list">
                    {service.includes.map(item => (
                      <li key={item} className="service-detail__includes-item">
                        <span aria-hidden="true" className="service-detail__check">✦</span>
                        <span className="body-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-primary service-detail__cta">
                  Enquire About This Service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section--light" style={{ textAlign: 'center' }}>
        <div className="container">
          <SectionHeading
            label="Ready to Begin?"
            title="Let's Discuss Your Vision"
            align="center"
            dark={false}
            className="reveal"
          />
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-mid)', marginBottom: 'var(--space-8)', maxWidth: '560px', marginInline: 'auto' }}>
            Every celebration is unique. Get in touch to discuss your specific requirements and we'll create the perfect plan for your photography.
          </p>
          <Link to="/contact" className="btn btn-primary reveal">Book a Shoot</Link>
        </div>
      </section>
    </main>
  );
}
