import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import LogoMark from '../LogoMark';
import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './Footer.css';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const footerNavLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.portfolio, to: '/portfolio' },
    { label: t.nav.services, to: '/services' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.contact, to: '/contact' },
  ];

  const portfolioLinks = [
    { label: t.categories['weddings'], to: '/portfolio/weddings' },
    { label: t.categories['pre-wedding'], to: '/portfolio/pre-wedding' },
    { label: t.categories['tamil-weddings'], to: '/portfolio/tamil-weddings' },
    { label: t.categories['temple'], to: '/portfolio/temple' },
    { label: t.categories['baby-shower'], to: '/portfolio/baby-shower' },
    { label: t.categories['house-warming'], to: '/portfolio/house-warming' },
    { label: t.categories['family-functions'], to: '/portfolio/family-functions' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <LogoMark className="footer__logo-icon" />
            <div className="footer__logo-text">
              <span className="footer__logo-main">Mani Photography</span>
              <span className="footer__logo-sub">Premium Photography</span>
            </div>
          </Link>
          <span className="accent-line" aria-hidden="true" />
          <p className="footer__tagline">{t.common.tagline}</p>
          <p className="footer__desc body-sm">
            {t.common.footerDesc}
          </p>
          <div className="footer__socials">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
              <img src={`${import.meta.env.BASE_URL}images/instagram.svg`} alt="Instagram" style={{ width: 16, height: 16, opacity: 0.8 }} />
            </a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <img src={`${import.meta.env.BASE_URL}images/facebook.svg`} alt="Facebook" style={{ width: 16, height: 16, opacity: 0.8 }} />
            </a>
            <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
              <img src={`${import.meta.env.BASE_URL}images/youtube.svg`} alt="YouTube" style={{ width: 16, height: 16, opacity: 0.8 }} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{t.nav.portfolio}</h3>
          <nav aria-label="Footer navigation">
            <ul className="footer__links">
              {footerNavLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{t.portfolio.browseTitle}</h3>
          <nav aria-label="Portfolio categories">
            <ul className="footer__links">
              {portfolioLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{t.contact.infoTitle}</h3>
          <ul className="footer__contact">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="footer__contact-link">
                <Phone size={14} aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                <MessageCircle size={14} aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="footer__contact-link">
                <Mail size={14} aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                <MapPin size={14} aria-hidden="true" />
                <span>{t.common.location}</span>
              </a>
            </li>
          </ul>
          <Link to="/contact" className="btn btn-primary footer__cta">{t.common.bookShoot}</Link>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {t.common.allRights}
        </p>
        <p className="footer__copy">
          {t.common.quoteText}
        </p>
      </div>
    </footer>
  );
}
