import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import LogoMark from '../LogoMark';
import { siteConfig } from '../../data/siteConfig';
import './Footer.css';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const portfolioLinks = [
  { label: 'Weddings', to: '/portfolio/weddings' },
  { label: 'Pre-Wedding', to: '/portfolio/pre-wedding' },
  { label: 'Tamil Weddings', to: '/portfolio/tamil-weddings' },
  { label: 'Temple', to: '/portfolio/temple' },
  { label: 'Baby Shower', to: '/portfolio/baby-shower' },
  { label: 'House Warming', to: '/portfolio/house-warming' },
  { label: 'Family Functions', to: '/portfolio/family-functions' },
];

export default function Footer() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

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
          <p className="footer__tagline">Stories worth remembering.</p>
          <p className="footer__desc body-sm">
            Capturing love, traditions, celebrations and the moments that become memories.
            Based in {siteConfig.location}.
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
          <h3 className="footer__heading">Pages</h3>
          <nav aria-label="Footer navigation">
            <ul className="footer__links">
              {footerLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Portfolio</h3>
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
          <h3 className="footer__heading">Get in Touch</h3>
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
              <span className="footer__contact-link">
                <MapPin size={14} aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </span>
            </li>
          </ul>
          <Link to="/contact" className="btn btn-primary footer__cta">Book a Shoot</Link>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Mani Photography. All rights reserved.
        </p>
        <p className="footer__copy">
          Photography is a way of feeling, of touching, of loving.
        </p>
      </div>
    </footer>
  );
}
