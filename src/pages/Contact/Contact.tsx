import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { siteConfig } from '../../data/siteConfig';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './Contact.css';

interface FormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  eventType?: string;
}

const eventTypes = [
  'Wedding',
  'Pre-Wedding',
  'Engagement',
  'Tamil Traditional Function',
  'Temple Shoot',
  'Baby Shower',
  'House Warming',
  'Birthday',
  'Family Function',
  'Other',
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!/^[+\d\s()-]{7,15}$/.test(data.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (!data.eventType) errors.eventType = 'Please select an event type.';
  return errors;
}

export default function Contact() {
  useDocumentHead({
    title: 'Contact & Booking | Mani Photography',
    description: 'Get in touch with Mani Photography to book a shoot for your wedding, pre-wedding, baby shower, house warming or any special occasion. Located in Thirukadaiyur, Mayiladuthurai, Tamil Nadu.',
  });
  useScrollReveal();

  const [form, setForm] = useState<FormData>({ name: '', phone: '', eventType: '', eventDate: '', location: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) setErrors(er => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    
    const waText = `New Enquiry from ${form.name}\nPhone: ${form.phone}\nEvent Type: ${form.eventType}\nEvent Date: ${form.eventDate || 'Not specified'}\nLocation: ${form.location || 'Not specified'}`;
    const targetWa = siteConfig.whatsapp;
    const waUrl = `https://wa.me/${targetWa}?text=${encodeURIComponent(waText)}`;
    
    // Slight delay for feedback
    await new Promise(r => setTimeout(r, 600));
    window.open(waUrl, '_blank');
    
    setSubmitting(false);
    setSubmitted(true);
  };

  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <main>
      {/* Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">Get in Touch</span>
          <h1 className="display-md page-hero__title">Let's Create Something Beautiful.</h1>
          <p className="body-lg page-hero__sub">
            Tell us about your event and we'll get back to you to discuss how we can help.
          </p>
        </div>
      </div>

      <section className="section section--light contact-section">
        <div className="container">
          <div className="contact-section__grid">
            {/* Info Panel */}
            <div className="contact-info reveal-left">
              <h2 className="title-lg contact-info__title" style={{ color: 'var(--clr-text-dark)', marginBottom: 'var(--space-3)' }}>
                Contact Details
              </h2>
              <span className="accent-line" aria-hidden="true" />
              <p className="body-md contact-info__desc">
                Reach us through any of the channels below, or fill in the form and we'll respond promptly.
              </p>

              <ul className="contact-info__list">
                <li className="contact-info__item">
                  <Phone size={18} className="contact-info__icon" aria-hidden="true" />
                  <div>
                    <span className="contact-info__label">Phone</span>
                    <a href={`tel:${siteConfig.phone}`} className="contact-info__value">{siteConfig.phone}</a>
                  </div>
                </li>
                <li className="contact-info__item">
                  <MessageCircle size={18} className="contact-info__icon" aria-hidden="true" />
                  <div>
                    <span className="contact-info__label">WhatsApp</span>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="contact-info__value">
                      Message on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="contact-info__item">
                  <Mail size={18} className="contact-info__icon" aria-hidden="true" />
                  <div>
                    <span className="contact-info__label">Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="contact-info__value">{siteConfig.email}</a>
                  </div>
                </li>
                <li className="contact-info__item">
                  <MapPin size={18} className="contact-info__icon" aria-hidden="true" />
                  <div>
                    <span className="contact-info__label">Location</span>
                    <span className="contact-info__value">{siteConfig.location}</span>
                  </div>
                </li>
              </ul>

              <div className="contact-info__socials">
                <span className="contact-info__social-label label">Follow Our Work</span>
                <div className="contact-info__social-links">
                  <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-info__social-btn">
                    <img src={`${import.meta.env.BASE_URL}images/instagram.svg`} alt="Instagram" style={{ width: 20, height: 20, opacity: 0.8 }} />
                  </a>
                  <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="contact-info__social-btn">
                    <img src={`${import.meta.env.BASE_URL}images/facebook.svg`} alt="Facebook" style={{ width: 20, height: 20, opacity: 0.8 }} />
                  </a>
                  <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="contact-info__social-btn">
                    <img src={`${import.meta.env.BASE_URL}images/youtube.svg`} alt="YouTube" style={{ width: 20, height: 20, opacity: 0.8 }} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap reveal-right">
              {submitted ? (
                <div className="contact-success" role="alert">
                  <span className="contact-success__icon" aria-hidden="true">✦</span>
                  <h2 className="title-lg contact-success__title">Enquiry Sent!</h2>
                  <p className="body-lg contact-success__msg">
                    Thank you for reaching out. We'll review your details and get back to you shortly to discuss your photography.
                  </p>
                  <p className="body-md" style={{ color: 'var(--clr-text-muted)' }}>
                    In the meantime, feel free to browse our portfolio for inspiration.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />
                      {errors.name && <span className="contact-form__error" role="alert">{errors.name}</span>}
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        className={`contact-form__input ${errors.phone ? 'contact-form__input--error' : ''}`}
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91 00000 00000"
                        autoComplete="tel"
                        required
                      />
                      {errors.phone && <span className="contact-form__error" role="alert">{errors.phone}</span>}
                    </div>
                  </div>


                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="eventType">Event Type *</label>
                      <select
                        id="eventType"
                        className={`contact-form__input contact-form__select ${errors.eventType ? 'contact-form__input--error' : ''}`}
                        value={form.eventType}
                        onChange={update('eventType')}
                        required
                      >
                        <option value="">Select event type...</option>
                        {eventTypes.map(et => (
                          <option key={et} value={et}>{et}</option>
                        ))}
                      </select>
                      {errors.eventType && <span className="contact-form__error" role="alert">{errors.eventType}</span>}
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="eventDate">Event Date</label>
                      <input
                        id="eventDate"
                        type="date"
                        className="contact-form__input"
                        value={form.eventDate}
                        onChange={update('eventDate')}
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="location">Event Location</label>
                    <input
                      id="location"
                      type="text"
                      className="contact-form__input"
                      value={form.location}
                      onChange={update('location')}
                      placeholder="City / Venue"
                      autoComplete="address-level2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary contact-form__submit"
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ─────────────────────────────────── */}
      <section className="section contact-map-section" style={{ padding: 0, marginTop: 'var(--space-8)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.485078500662!2d79.8055!3d11.0805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5538e1b12d5d85%3A0xc34a5d8b80b2a3a1!2sThirukadaiyur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mani Photography Studio Location"
        />
      </section>
    </main>
  );
}
