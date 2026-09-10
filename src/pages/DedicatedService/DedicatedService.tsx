import { Link, useParams } from 'react-router-dom';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { dedicatedServices, allServices, type ServiceItem } from '../../data/services';
import { portfolioItems } from '../../data/portfolio';
import { siteConfig } from '../../data/siteConfig';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '../../components/SEO/JsonLd';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MessageCircle, CheckCircle2, ChevronRight, MapPin, Calendar, Camera } from 'lucide-react';
import './DedicatedService.css';

interface DedicatedServiceProps {
  routeSlug?: string;
}

export default function DedicatedService({ routeSlug }: DedicatedServiceProps) {
  const params = useParams<{ slug?: string }>();
  const activeSlug = routeSlug || params.slug || 'wedding-photography-thirukadaiyur';
  const { language } = useLanguage();

  const service: ServiceItem =
    dedicatedServices.find(s => s.slug === activeSlug || s.id === activeSlug) ||
    allServices.find(s => s.slug === activeSlug || s.id === activeSlug) ||
    dedicatedServices[0];

  const pageTitle = language === 'ta' && service.metaTitleTa ? service.metaTitleTa : service.metaTitle;
  const pageDesc = language === 'ta' && service.metaDescTa ? service.metaDescTa : service.metaDesc;
  const h1Title = language === 'ta' && service.heroTitleTa ? service.heroTitleTa : service.heroTitle || service.title;
  const fullDescription = language === 'ta' && service.fullDescTa ? service.fullDescTa : service.fullDesc;
  const includesList = language === 'ta' && service.includesTa ? service.includesTa : service.includes;

  const currentUrl = `https://thirukadaiyurmaniphotography.in${service.dedicatedRoute || `/services/${service.slug}`}`;

  // Structured Data JSON-LD schemas
  const serviceSchema = getServiceSchema(service.title, pageDesc, currentUrl, service.image);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: currentUrl },
  ]);
  const faqSchema = service.faqs ? getFaqSchema(service.faqs) : null;
  const combinedSchema = faqSchema ? [serviceSchema, breadcrumbSchema, faqSchema] : [serviceSchema, breadcrumbSchema];

  useDocumentHead({
    title: pageTitle,
    description: pageDesc,
    ogImage: service.image,
    canonicalUrl: currentUrl,
    schema: combinedSchema,
  });

  useScrollReveal();

  const relevantPortfolio = portfolioItems.slice(0, 6);
  const otherServices = dedicatedServices.filter(s => s.id !== service.id).slice(0, 4);

  const waMessage = `Hi Mani Photography, I am interested in booking your ${service.title}. Could you please share package details and availability?`;
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="dedicated-service-page">
      {/* ── BREADCRUMBS & HERO SECTION ── */}
      <section className="dedicated-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/services">Services</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <div className="dedicated-hero__grid">
            <div className="dedicated-hero__content">
              <span className="hero-badge label">
                {service.icon} {language === 'en' ? 'Thirukadaiyur Photography Specialist' : 'திருக்கடையூர் புகைப்பட சேவை'}
              </span>
              <h1 className="display-md dedicated-hero__title">
                {h1Title}
              </h1>
              <p className="body-lg dedicated-hero__sub">
                {fullDescription}
              </p>
              <div className="dedicated-hero__ctas">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-wa">
                  <MessageCircle size={18} />
                  <span>{language === 'en' ? 'Check Availability on WhatsApp' : 'வாட்ஸ்அப் மூலம் தொடர்பு கொள்க'}</span>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="btn btn-outline">
                  <Phone size={18} />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            <div className="dedicated-hero__image-wrap">
              <img
                src={service.image}
                alt={service.alt}
                className="img-cover dedicated-hero__img"
                width="800"
                height="600"
              />
              <div className="dedicated-hero__image-badge">
                <Camera size={20} />
                <span>{language === 'en' ? 'Local Thirukadaiyur Team' : 'திருக்கடையூர் லோக்கல் டீம்'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT THE SERVICE INCLUDES ── */}
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label={language === 'en' ? 'Package Highlights' : 'சிறப்பு அம்சங்கள்'}
            title={language === 'en' ? `What Our ${service.title} Includes` : 'எங்கள் புகைப்பட சேவையில் உள்ளவை'}
            dark={false}
          />
          <div className="includes-grid">
            {includesList.map((item, idx) => (
              <div key={idx} className="includes-card reveal">
                <CheckCircle2 size={24} className="includes-card__icon" />
                <span className="body-md includes-card__text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH & WHY CHOOSE US ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="approach-grid">
            <div className="approach-content reveal-left">
              <SectionHeading
                label={language === 'en' ? 'Why Mani Photography?' : 'எங்களை ஏன் தேர்ந்தெடுக்க வேண்டும்?'}
                title={language === 'en' ? 'Experienced Local Thirukadaiyur Photographers' : 'திருக்கடையூர் அனுபவமிக்க புகைப்படக் கலைஞர்கள்'}
              />
              <p className="body-lg text-muted">
                {language === 'en'
                  ? 'With years of hands-on experience documenting sacred rituals at Sri Amritaghateswarar Abirami Temple and surrounding marriage halls, we know every ritual sequence, priest timing, and lighting window.'
                  : 'திருக்கடையூர் கோயில் மற்றும் சுற்றியுள்ள மண்டபங்களில் சடங்குகளைப் படம் பிடித்த நீண்டகால அனுபவத்துடன், ஒவ்வொரு ஹோமம் மற்றும் சடங்கின் முக்கிய தருணங்களை நாங்கள் தவறவிடாமல் பதிவு செய்கிறோம்.'}
              </p>
              <ul className="approach-bullets">
                <li>
                  <strong>{language === 'en' ? 'Zero Distraction:' : 'சடங்குகளுக்கு இடையூறின்றி:'}</strong> {language === 'en' ? 'We capture emotional moments without disturbing priests or sacred homams.' : 'ஹோமங்கள் மற்றும் அர்ச்சகர்களுக்கு இடையூறு செய்யாமல் படம்பிடித்தல்.'}
                </li>
                <li>
                  <strong>{language === 'en' ? 'High-Speed Lenses:' : 'உயர்தர கேமராக்கள்:'}</strong> {language === 'en' ? 'Crisp capture of Kalasa Abhishekam water droplets and Thaali Dharanam.' : 'கலசாபிஷேக புனிதநீர் தெளிக்கும் அரிய காட்சிப்பதிவு.'}
                </li>
                <li>
                  <strong>{language === 'en' ? 'Multi-Generational Portraits:' : 'தலைமுறை குடும்ப படங்கள்:'}</strong> {language === 'en' ? 'Grandparents, children, and grandchildren brought together beautifully.' : 'தாத்தா, பாட்டி, பிள்ளைகள் & பேரக்குழந்தைகளின் நினைவுகள்.'}
                </li>
              </ul>
            </div>

            {/* Service Area Box */}
            <div className="service-area-box reveal-right">
              <div className="service-area-box__header">
                <MapPin size={28} className="service-area-box__icon" />
                <div>
                  <h3 className="title-md">{language === 'en' ? 'Genuine Service Areas' : 'நாங்கள் சேவை வழங்கும் ஊர்கள்'}</h3>
                  <p className="body-sm text-muted">{language === 'en' ? 'Based in Thirukadaiyur & serving surrounding regions' : 'திருக்கடையூர் மற்றும் சுற்றியுள்ள பகுதிகள்'}</p>
                </div>
              </div>
              <div className="service-area-tags">
                <span>Thirukadaiyur</span>
                <span>Mayiladuthurai</span>
                <span>Karaikal</span>
                <span>Sirkazhi</span>
                <span>Chidambaram</span>
                <span>Nagapattinam</span>
                <span>Tharangambadi</span>
                <span>Kumbakonam</span>
                <span>Thanjavur</span>
              </div>
              <div className="service-area-cta">
                <Calendar size={18} />
                <span>{language === 'en' ? 'Book early for peak Muhurtham dates!' : 'முக்கிய முகூர்த்த நாட்களுக்கு முன்பதிவு செய்க!'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PORTFOLIO EXAMPLES ── */}
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label={language === 'en' ? 'Portfolio Gallery' : 'புகைப்பட கேலரி'}
            title={language === 'en' ? `Recent ${service.title} Work` : 'எங்கள் சமீபத்திய புகைப்படங்கள்'}
            dark={false}
          />
          <PortfolioGrid items={relevantPortfolio} columns={3} />
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/portfolio" className="btn btn-outline-dark">
              {language === 'en' ? 'View Full Portfolio →' : 'அனைத்து புகைப்படங்களையும் பார்க்க →'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section section--dark">
          <div className="container">
            <SectionHeading
              label="FAQs"
              title={language === 'en' ? `Frequently Asked Questions about ${service.title}` : 'அடிக்கடி கேட்கப்படும் கேள்விகள்'}
              align="center"
            />
            <div className="service-faq-grid">
              {service.faqs.map((faq, i) => (
                <div key={i} className="service-faq-card reveal">
                  <h3 className="service-faq-card__q title-sm">
                    {language === 'ta' && faq.questionTa ? faq.questionTa : faq.question}
                  </h3>
                  <p className="service-faq-card__a body-md text-muted">
                    {language === 'ta' && faq.answerTa ? faq.answerTa : faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ── */}
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label={language === 'en' ? 'Explore More' : 'மற்ற சேவைகள்'}
            title={language === 'en' ? 'Related Photography Services' : 'தொடர்புடைய புகைப்பட சேவைகள்'}
            dark={false}
          />
          <div className="related-services-grid">
            {otherServices.map(other => (
              <Link to={other.dedicatedRoute || `/services/${other.slug}`} key={other.id} className="related-service-card">
                <div className="related-service-card__icon">{other.icon}</div>
                <h3 className="title-sm">{other.title}</h3>
                <p className="body-sm text-muted">{other.shortDesc}</p>
                <span className="related-service-card__link">{language === 'en' ? 'View Details →' : 'விவரங்கள் பார்க்க →'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL BOOKING CTA ── */}
      <section className="section dedicated-cta-section">
        <div className="container text-center reveal">
          <span className="label text-yellow">Mani Photography Thirukadaiyur</span>
          <h2 className="display-md text-white" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            {language === 'en' ? `Ready to Book Your ${service.title}?` : 'உங்கள் சடங்கு படப்பிடிப்பை முன்பதிவு செய்ய தயாரா?'}
          </h2>
          <p className="body-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {language === 'en'
              ? 'Contact us today to discuss your event dates, mandapam details, and custom photography options in Thirukadaiyur.'
              : 'உங்கள் விழா நாள் மற்றும் விவரங்களை எங்களுடன் பகிர்ந்துகொள்ள வாட்ஸ்அப் அல்லது போன் மூலம் தொடர்புகொள்ளவும்.'}
          </p>
          <div className="dedicated-cta-actions">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-wa">
              <MessageCircle size={18} />
              <span>{language === 'en' ? 'WhatsApp Us Now' : 'வாட்ஸ்அப் மூலம் பேச'}</span>
            </a>
            <a href={`tel:${siteConfig.phone}`} className="btn btn-outline">
              <Phone size={18} />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
