import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { siteConfig } from '../../data/siteConfig';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, User, Sparkles, CheckCircle2, Star, Camera } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './Contact.css';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const contactT = t.contact;

  useDocumentHead({
    title: language === 'en'
      ? 'Contact Mani Photography Thirukadaiyur (+91 81110 85865)'
      : 'மணி போட்டோகிராஃபி தொடர்பு கொள்ள (+91 81110 85865)',
    description: language === 'en'
      ? 'Contact Mani Photography Thirukadaiyur. Call +91 81110 85865 or send a message directly on WhatsApp.'
      : 'மணி போட்டோகிராஃபி திருக்கடையூர். அழைக்கவும்: +91 81110 85865 அல்லது வாட்ஸ்அப் மூலம் தொடர்புகொள்ளவும்.',
  });

  useScrollReveal();

  const [form, setForm] = useState<FormData>({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = contactT.errName;
    if (!data.phone.trim()) errs.phone = contactT.errPhone;
    else if (!/^[+\d\s()-]{7,15}$/.test(data.phone.trim())) errs.phone = contactT.errPhoneValid;
    return errs;
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) setErrors(er => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);

    const waText = `Hi Mani Photography,\nMy Name: ${form.name}\nPhone: ${form.phone}${form.message ? `\nMessage: ${form.message}` : ''}`;
    const targetWa = siteConfig.whatsapp;
    const waUrl = `https://wa.me/${targetWa}?text=${encodeURIComponent(waText)}`;

    await new Promise(r => setTimeout(r, 400));
    window.open(waUrl, '_blank');

    setSubmitting(false);
    setSubmitted(true);
  };

  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <main className="contact-page">
      {/* Hero */}
      <div className="page-hero page-hero--dark contact-hero">
        <div className="container">
          <span className="label page-hero__label">{contactT.heroLabel}</span>
          <h1 className="display-md page-hero__title">{contactT.heroTitle}</h1>
          <p className="body-lg page-hero__sub">
            {contactT.heroSub}
          </p>
        </div>
      </div>

      <section className="section section--light contact-section">
        <div className="container">
          <div className="contact-showcase-grid">
            {/* ── LEFT: Studio Profile & Trust Card ── */}
            <div className="studio-card reveal-left">
              {/* Photographer Photo & Status */}
              <div className="studio-card__hero">
                <div className="studio-card__avatar-wrap">
                  <img
                    src={`${import.meta.env.BASE_URL}images/about/thirukadaiyur-lead-photographer-mani.webp`}
                    alt="Mani - Lead Photographer"
                    className="studio-card__avatar"
                    loading="lazy"
                  />
                  <div className="studio-card__available-chip" title="Available for bookings">
                    <span className="online-indicator" />
                    <span>{language === 'en' ? 'Available Today' : 'இன்று முன்பதிவு உண்டு'}</span>
                  </div>
                </div>

                <div className="studio-card__profile">
                  <span className="label studio-card__tag">
                    <Camera size={13} style={{ display: 'inline', marginRight: 4 }} />
                    {language === 'en' ? 'Lead Master Photographer' : 'முதன்மை புகைப்பட கலைஞர்'}
                  </span>
                  <h2 className="studio-card__name">Mani</h2>
                  <p className="studio-card__role">
                    {language === 'en' 
                      ? 'Thirukadaiyur Temple & Ritual Specialist' 
                      : 'திருக்கடையூர் கோயில் & சடங்கு சிறப்பு புகைப்பட கலைஞர்'}
                  </p>

                  <div className="studio-card__rating">
                    <div className="stars">
                      <Star size={16} fill="var(--clr-yellow)" color="var(--clr-yellow)" />
                      <Star size={16} fill="var(--clr-yellow)" color="var(--clr-yellow)" />
                      <Star size={16} fill="var(--clr-yellow)" color="var(--clr-yellow)" />
                      <Star size={16} fill="var(--clr-yellow)" color="var(--clr-yellow)" />
                      <Star size={16} fill="var(--clr-yellow)" color="var(--clr-yellow)" />
                    </div>
                    <span className="rating-score">4.9 / 5.0</span>
                    <span className="rating-count">{language === 'en' ? '(100+ Happy Families)' : '(100+ குடும்பங்கள்)'}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="studio-card__quick-actions">
                <a href={`tel:${siteConfig.phone}`} className="studio-action-btn studio-action-btn--phone">
                  <Phone size={18} />
                  <div>
                    <span className="action-btn-label">{language === 'en' ? 'Call Studio' : 'அழைக்க'}</span>
                    <strong className="action-btn-val">{siteConfig.phone}</strong>
                  </div>
                </a>

                <a href={waLink} target="_blank" rel="noopener noreferrer" className="studio-action-btn studio-action-btn--wa">
                  <MessageCircle size={18} />
                  <div>
                    <span className="action-btn-label">{language === 'en' ? 'Chat WhatsApp' : 'வாட்ஸ்அப்'}</span>
                    <strong className="action-btn-val">{language === 'en' ? 'Instant Chat' : 'உடனடி அரட்டை'}</strong>
                  </div>
                </a>
              </div>

              {/* Contact Info Items List */}
              <ul className="studio-contact-list">
                <li className="studio-contact-item">
                  <MapPin size={18} className="contact-icon" />
                  <div>
                    <span className="contact-label">{contactT.locationLabel}</span>
                    <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact-val">
                      {language === 'en' ? 'Sannathi Street, Thirukadaiyur' : 'சன்னதி தெரு, திருக்கடையூர்'}
                    </a>
                  </div>
                </li>
                <li className="studio-contact-item">
                  <Mail size={18} className="contact-icon" />
                  <div>
                    <span className="contact-label">{contactT.emailLabel}</span>
                    <a href={`mailto:${siteConfig.email}`} className="contact-val">{siteConfig.email}</a>
                  </div>
                </li>
              </ul>

              {/* Social and Listings Bar */}
              <div className="studio-card__footer">
                <span className="footer-tag">{language === 'en' ? 'Verified Listings' : 'சரிபார்க்கப்பட்டது'}:</span>
                <div className="footer-links">
                  <a
                    href="https://www.justdial.com/Mayiladuthurai/Mani-Photography-Tirucadaiyur/9999P4364-4364-230128175613-F5L3_BZDET"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-pill-btn"
                  >
                    <img src={`${import.meta.env.BASE_URL}images/justdial.svg`} alt="JustDial" style={{ width: 14, height: 14 }} />
                    <span>JustDial 4.9★</span>
                  </a>
                  <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="footer-pill-btn" aria-label="Instagram">
                    <img src={`${import.meta.env.BASE_URL}images/instagram.svg`} alt="Instagram" style={{ width: 14, height: 14 }} />
                    <span>Instagram</span>
                  </a>
                  <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" className="footer-pill-btn" aria-label="YouTube">
                    <img src={`${import.meta.env.BASE_URL}images/youtube.svg`} alt="YouTube" style={{ width: 14, height: 14 }} />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Sleek Glassmorphism Message Form ── */}
            <div className="contact-form-wrap reveal-right">
              <div className="contact-form-header">
                <div className="contact-form-header__badge">
                  <Sparkles size={14} className="sparkle-icon" />
                  <span>{language === 'en' ? 'Quick Contact' : 'விரைவு தொடர்பு'}</span>
                </div>
                <h3 className="contact-form-header__title">
                  {language === 'en' ? 'Send a Direct Message' : 'நேரடி செய்தி அனுப்பவும்'}
                </h3>
                <p className="contact-form-header__desc">
                  {language === 'en' 
                    ? 'Enter your name and number below. Mani Photography will connect with you right away.' 
                    : 'உங்கள் பெயர் மற்றும் எண்ணைப் பதிவிடவும். மணி போட்டோகிராஃபி உங்களுடன் உடனடியாக தொடர்புகொள்ளும்.'}
                </p>
              </div>

              {submitted ? (
                <div className="contact-success" role="alert">
                  <div className="contact-success__badge">
                    <CheckCircle2 size={36} color="var(--clr-yellow)" />
                  </div>
                  <h2 className="title-lg contact-success__title">{contactT.successTitle}</h2>
                  <p className="body-lg contact-success__msg">
                    {contactT.successMsg}
                  </p>
                  <p className="body-md" style={{ color: 'var(--clr-text-muted)' }}>
                    {contactT.successSub}
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-outline" 
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', phone: '', message: '' });
                    }}
                  >
                    {language === 'en' ? 'Send Another Message' : 'மற்றொரு செய்தி அனுப்பவும்'}
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="name">
                      <span>{language === 'en' ? 'Your Full Name' : 'உங்கள் முழு பெயர்'}</span> <span className="req-star">*</span>
                    </label>
                    <div className="input-icon-wrap">
                      <User size={18} className="input-leading-icon" aria-hidden="true" />
                      <input
                        id="name"
                        type="text"
                        className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
                        value={form.name}
                        onChange={update('name')}
                        placeholder={contactT.formNamePlaceholder}
                        autoComplete="name"
                        required
                      />
                    </div>
                    {errors.name && <span className="contact-form__error" role="alert">{errors.name}</span>}
                  </div>

                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="phone">
                      <span>{language === 'en' ? 'Phone / WhatsApp Number' : 'தொலைபேசி / வாட்ஸ்அப் எண்'}</span> <span className="req-star">*</span>
                    </label>
                    <div className="input-icon-wrap">
                      <Phone size={18} className="input-leading-icon" aria-hidden="true" />
                      <input
                        id="phone"
                        type="tel"
                        className={`contact-form__input ${errors.phone ? 'contact-form__input--error' : ''}`}
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder={contactT.formPhonePlaceholder}
                        autoComplete="tel"
                        required
                      />
                    </div>
                    {errors.phone && <span className="contact-form__error" role="alert">{errors.phone}</span>}
                  </div>

                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="message">
                      <span>{language === 'en' ? 'Message / Ceremony Details (Optional)' : 'செய்தி அல்லது விழா விவரங்கள் (விருப்பத்தேர்வு)'}</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="contact-form__input contact-form__textarea"
                      value={form.message}
                      onChange={update('message')}
                      placeholder={language === 'en' ? 'Tell us about your event date, ritual type or photoshoot questions...' : 'உங்கள் விழா தேதி, நிகழ்வு அல்லது போட்டோஷூட் கேள்விகளை இங்கே குறிப்பிடவும்...'}
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="contact-form__footer">
                    <button
                      type="submit"
                      className="btn btn-primary contact-form__submit"
                      disabled={submitting}
                      aria-busy={submitting}
                    >
                      <MessageCircle size={18} className="btn-icon" />
                      <span>{submitting ? (language === 'en' ? 'Connecting...' : 'இணைக்கிறது...') : (language === 'en' ? 'Message on WhatsApp' : 'வாட்ஸ்அப்பில் அனுப்பவும்')}</span>
                    </button>

                    <div className="contact-form__guarantee">
                      <ShieldCheck size={18} className="guarantee-icon" />
                      <div>
                        <strong>{language === 'en' ? 'Direct Studio Connect' : 'நேரடி ஸ்டுடியோ தொடர்பு'}</strong>
                        <span>{language === 'en' ? 'Immediate response & genuine package quotes' : 'உடனடி பதில் & சிறந்த கட்டண விவரங்கள்'}</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ─────────────────────────────────── */}
      <section className="section contact-map-section" style={{ padding: 0, marginTop: 'var(--space-8)' }}>
        <iframe
          src={siteConfig.googleMapsEmbed}
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mani Thirukkadaiyur Photography Studio Location"
        />
      </section>
    </main>
  );
}
