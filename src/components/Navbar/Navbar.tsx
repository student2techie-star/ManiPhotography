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

          {/* Actions: Segmented Language Switcher (Desktop) + Hamburger */}
          <div className="navbar__actions">
            <div className="segmented-lang-switch segmented-lang-switch--desktop" role="group" aria-label="Language selection">
              <button
                type="button"
                className={`segmented-lang-switch__btn ${language === 'en' ? 'segmented-lang-switch__btn--active' : ''}`}
                onClick={() => language !== 'en' && toggleLanguage()}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                className={`segmented-lang-switch__btn ${language === 'ta' ? 'segmented-lang-switch__btn--active' : ''}`}
                onClick={() => language !== 'ta' && toggleLanguage()}
                aria-label="Switch to Tamil"
              >
                தமிழ்
              </button>
            </div>

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

      {/* Mobile Menu (Half Screen Side Drawer with Close Icon) */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="mobile-menu__header">
          <div className="mobile-menu__brand">
            <LogoMark className="mobile-menu__brand-icon" />
            <span className="mobile-menu__brand-text">Mani Photography</span>
          </div>
          <button
            type="button"
            className="mobile-menu__close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

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

          {/* Mobile Language Switcher (Segmented Switch Pill) */}
          <div
            className="mobile-menu__lang-box"
            style={{ '--i': navLinks.length } as React.CSSProperties}
          >
            <span className="mobile-menu__lang-title">
              <Globe size={15} /> Language / மொழி
            </span>
            <div className="segmented-lang-switch segmented-lang-switch--full" role="group" aria-label="Mobile language selection">
              <button
                type="button"
                className={`segmented-lang-switch__btn ${language === 'en' ? 'segmented-lang-switch__btn--active' : ''}`}
                onClick={() => language !== 'en' && toggleLanguage()}
              >
                English
              </button>
              <button
                type="button"
                className={`segmented-lang-switch__btn ${language === 'ta' ? 'segmented-lang-switch__btn--active' : ''}`}
                onClick={() => language !== 'ta' && toggleLanguage()}
              >
                தமிழ்
              </button>
            </div>
          </div>

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
