import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import LogoMark from '../LogoMark';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const navLinks = [
    { to: '/', label: t.home },
    { to: '/portfolio', label: t.portfolio },
    { to: '/services', label: t.services },
    { to: '/about', label: t.about },
    { to: '/contact', label: t.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <div className="navbar__inner container">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Mani Photography — Home">
            <LogoMark className="navbar__logo-icon" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-main">Mani Photography</span>
              <span className="navbar__logo-sub">Premium Photography</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions: Language Switcher + Hamburger */}
          <div className="navbar__actions">
            {/* Language Switcher Button */}
            <button
              type="button"
              className="lang-switcher"
              onClick={toggleLanguage}
              title={language === 'en' ? 'Switch to Tamil (தமிழ்)' : 'Switch to English'}
              aria-label="Toggle language between English and Tamil"
            >
              <Globe size={15} className="lang-switcher__icon" aria-hidden="true" />
              <span className={`lang-switcher__option ${language === 'en' ? 'lang-switcher__option--active' : ''}`}>EN</span>
              <span className="lang-switcher__divider">|</span>
              <span className={`lang-switcher__option ${language === 'ta' ? 'lang-switcher__option--active' : ''}`}>தமிழ்</span>
            </button>

            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <nav className="mobile-menu__nav" aria-label="Mobile navigation links">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`}
              style={{ '--i': i } as React.CSSProperties}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile Language Switcher */}
          <button
            type="button"
            className="lang-switcher lang-switcher--mobile"
            onClick={toggleLanguage}
            style={{ '--i': navLinks.length } as React.CSSProperties}
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'தமிழ் மொழியில் மாற்றுக' : 'Switch to English'}</span>
          </button>

          <Link to="/contact" className="btn btn-primary mobile-menu__cta" style={{ '--i': navLinks.length + 1 } as React.CSSProperties}>
            {t.bookShoot}
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}
