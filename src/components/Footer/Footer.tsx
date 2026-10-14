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

  const quickLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.portfolio, to: '/portfolio/' },
    { label: t.nav.services, to: '/services/' },
    { label: language === 'en' ? 'Ceremony Guides' : 'வழிகாட்டிகள்', to: '/guides/' },
    { label: t.nav.about, to: '/about/' },
    { label: t.nav.contact, to: '/contact/' },
  ];

  const specialistLinks = [
    { label: language === 'en' ? '60th Birthday (Shashti)' : '60ஆம் கல்யாணம்', to: '/60th-birthday-photography-thirukadaiyur/' },
    { label: language === 'en' ? '70th Birthday (Bhimaratha)' : '70ஆம் கல்யாணம்', to: '/70th-birthday-photography-thirukadaiyur/' },
    { label: language === 'en' ? '80th Birthday (Sadabishegam)' : '80ஆம் கல்யாணம்', to: '/80th-birthday-photography-thirukadaiyur/' },
    { label: language === 'en' ? 'Temple Photography' : 'கோயில் போட்டோகிராஃபி', to: '/temple-photography-thirukadaiyur/' },
    { label: language === 'en' ? 'Wedding Muhurtham' : 'திருமண போட்டோகிராஃபி', to: '/wedding-photography-thirukadaiyur/' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top container">
        {/* Col 1: Brand & Socials */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <LogoMark className="footer__logo-icon" />
            <div className="footer__logo-text">
              <span className="footer__logo-main">Mani Photography</span>
              <span className="footer__logo-sub">Thirukadaiyur Specialist</span>
            </div>
          </Link>
          <p className="footer__desc">
            {language === 'en'
              ? 'Premier photography studio in Thirukadaiyur capturing sacred milestone weddings, temple rituals & weddings.'
              : 'திருக்கடையூரில் 60, 70, 80ஆம் ஆண்டு ஆயுள் சாந்தி சடங்குகள் மற்றும் திருமணங்களை நேர்த்தியாகப் படம் பிடிக்கும் முன்னோடி ஸ்டுடியோ.'}
          </p>
          <div className="footer__socials">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
              <img src={`${import.meta.env.BASE_URL}images/instagram.svg`} alt="Instagram" width="16" height="16" />
            </a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <img src={`${import.meta.env.BASE_URL}images/facebook.svg`} alt="Facebook" width="16" height="16" />
            </a>
            <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
              <img src={`${import.meta.env.BASE_URL}images/youtube.svg`} alt="YouTube" width="16" height="16" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="footer__col">
          <h3 className="footer__heading">{language === 'en' ? 'Explore' : 'பக்கங்கள்'}</h3>
          <ul className="footer__links">
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Milestone Ceremonies */}
        <div className="footer__col">
          <h3 className="footer__heading">{language === 'en' ? 'Specialities' : 'சிறப்பு சடங்குகள்'}</h3>
          <ul className="footer__links">
            {specialistLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Book */}
        <div className="footer__col footer__col--contact">
          <h3 className="footer__heading">{t.contact.infoTitle}</h3>
          <ul className="footer__contact">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="footer__contact-link">
                <Phone size={13} aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                <MessageCircle size={13} aria-hidden="true" />
                <span>WhatsApp Chat</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="footer__contact-link">
                <Mail size={13} aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                <MapPin size={13} aria-hidden="true" />
                <span>{t.common.location}</span>
              </a>
            </li>
          </ul>
          <Link to="/contact/" className="footer__cta">{t.common.bookShoot} →</Link>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer__bottom container">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Mani Photography · {t.common.allRights}
        </p>
        <p className="footer__copy footer__copy--sub">
          {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
