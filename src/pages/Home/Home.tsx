import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { portfolioItems } from '../../data/portfolio';
import { services } from '../../data/services';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import './Home.css';

const featuredPortfolio = portfolioItems.filter(i => i.featured).slice(0, 9);

const philosophyItems = [
  {
    num: '01',
    title: 'Authentic',
    desc: 'Real emotions over forced moments. We capture your celebration as it truly unfolds — unscripted, honest and full of life.',
  },
  {
    num: '02',
    title: 'Timeless',
    desc: 'Images designed to remain beautiful and meaningful years from now. We avoid trends that date quickly.',
  },
  {
    num: '03',
    title: 'Cinematic',
    desc: 'Beautiful compositions, thoughtful lighting and visual storytelling that transforms moments into art.',
  },
  {
    num: '04',
    title: 'Personal',
    desc: 'Every couple, family and celebration is unique. Your photographs should tell your story, not anyone else\'s.',
  },
];

const trustItems = [
  'Professional Photography',
  'Candid Storytelling',
  'Traditional & Modern Styles',
  'High-Quality Editing',
  'Personalized Experience',
  'Reliable Event Coverage',
  'Digital Gallery Delivery',
  'Experienced & Passionate Team',
];

// Placeholder testimonials — REPLACE with real client testimonials before go-live
const testimonials = [
  {
    quote: 'Every photograph from our wedding tells a story. We relive our day every time we look through the album.',
    name: 'Priya & Karthik',
    event: 'Tamil Wedding',
  },
  {
    quote: 'The pre-wedding shoot was so relaxed and natural. The photographs came out beyond what we imagined.',
    name: 'Deepa & Arun',
    event: 'Pre-Wedding Shoot',
  },
  {
    quote: 'They captured every ritual of our house warming with such care and sensitivity. Truly beautiful work.',
    name: 'Meena & Suresh',
    event: 'House Warming',
  },
];

const homeMeta = {
  title: 'Mani Photography | Wedding & Event Photography in Thirukadaiyur, Mayiladuthurai',
  description:
    'Mani Photography — capturing beautiful weddings, Tamil traditional ceremonies, pre-wedding shoots, baby showers, house warmings and family functions. Premium photography in Thirukadaiyur, Mayiladuthurai, Tamil Nadu.',
};

export default function Home() {
  useDocumentHead(homeMeta);
  useScrollReveal();

  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero image
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      const img = hero.querySelector('.hero__bg-img') as HTMLElement;
      if (img) img.style.transform = `scale(1.08) translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('intro');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="hero" ref={heroRef} aria-label="Hero — Mani Photography">
        <div className="hero__bg">
          <video
            src={`${import.meta.env.BASE_URL}images/hero-video.mp4`}
            className="hero__bg-video"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero__bg-fallback" aria-hidden="true" />
          <div className="hero__overlay" aria-hidden="true" />
        </div>

        <div className="hero__content container">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" aria-hidden="true" />
            <span className="label hero__label">Mani Photography</span>
          </div>
          <h1 className="hero__headline display-xl">
            Stories Worth<br />
            <em>Remembering.</em>
          </h1>
          <p className="hero__sub body-lg">
            Capturing love, traditions, celebrations and the moments that become memories.
          </p>
          <div className="hero__ctas">
            <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
            <Link to="/contact" className="btn btn-outline">Book a Shoot</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero__stats" aria-label="Studio statistics">
          <div className="hero__stat">
            <span className="hero__stat-num">10+</span>
            <span className="hero__stat-label">Years of Excellence</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">500+</span>
            <span className="hero__stat-label">Weddings Captured</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">2000+</span>
            <span className="hero__stat-label">Happy Families</span>
          </div>
        </div>

        <button className="hero__scroll-indicator" onClick={scrollToContent} aria-label="Scroll to content">
          <span className="hero__scroll-line" aria-hidden="true" />
          <ChevronDown size={14} />
        </button>
      </section>

      {/* ── INTRO / ABOUT ───────────────────────────────── */}
      <section className="section section--light intro-section" id="intro">
        <div className="container">
          <div className="intro-section__grid">
            <div className="intro-section__image reveal-left">
              <div className="intro-section__img-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}images/about/about-01.jpg`}
                  alt="Photography at a Tamil wedding ceremony"
                  className="img-cover"
                  loading="lazy"
                  width="720"
                  height="900"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '500px' }}>
                  <span className="label-light">Wedding Photography</span>
                </div>
              </div>
              <div className="intro-section__badge" aria-hidden="true">
                <span className="label-light">Since</span>
                <span className="intro-section__badge-year">2015</span>
              </div>
            </div>

            <div className="intro-section__content reveal-right">
              <SectionHeading
                label="About Us"
                title="We don't just capture moments. We preserve them."
                dark={false}
              />
              <p className="body-lg intro-section__text">
                Mani Photography is built on one belief — that every family, every couple and every celebration deserves beautiful, authentic photographs that tell their unique story.
              </p>
              <p className="body-md intro-section__text">
                We work across weddings, pre-weddings, Tamil traditional ceremonies, family functions, baby showers, house warmings, engagements and other special occasions — bringing the same passion and care to every shoot, whether it is an intimate gathering or a grand celebration.
              </p>
              <p className="body-md intro-section__text">
                From quiet glances to unforgettable rituals, from laughter between cousins to a grandmother's emotional blessing — these are the moments that truly matter. We make sure you never forget them.
              </p>
              <div className="intro-section__ctas">
                <Link to="/about" className="btn btn-primary">Our Story</Link>
                <Link to="/contact" className="btn btn-outline-dark">Book a Shoot</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section className="section section--dark services-home">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title="What We Capture"
            subtitle="From sacred rituals to candid celebrations, we document life's most meaningful moments with artistry and care."
            className="reveal"
          />
          <div className="services-home__grid">
            {services.slice(0, 8).map((service, i) => (
              <Link
                to={`/services`}
                key={service.id}
                className={`service-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="service-card__img-wrap">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-card__img"
                    loading="lazy"
                    width="600"
                    height="400"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = 'flex';
                    }}
                  />
                  <div className="img-placeholder service-card__placeholder" style={{ display: 'none' }}>
                    <span className="label-light">{service.title}</span>
                  </div>
                  <div className="service-card__overlay" aria-hidden="true" />
                </div>
                <div className="service-card__body">
                  <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
                  <h3 className="service-card__title title-sm">{service.title}</h3>
                  <p className="service-card__desc body-sm">{service.shortDesc}</p>
                  <span className="service-card__link label-light">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED GALLERY ────────────────────────────── */}
      <section className="section section--light gallery-home">
        <div className="container">
          <div className="gallery-home__header reveal">
            <SectionHeading
              label="Portfolio"
              title="Selected Stories"
              subtitle="A glimpse into the moments we've had the privilege of preserving."
              dark={false}
            />
            <Link to="/portfolio" className="btn btn-outline-dark gallery-home__see-all">
              View All Work
            </Link>
          </div>
          <PortfolioGrid items={featuredPortfolio} columns={3} />
          <div className="gallery-home__cta reveal">
            <Link to="/portfolio" className="btn btn-primary">Explore Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ── WEDDING FEATURE ─────────────────────────────── */}
      <section className="wedding-feature" aria-label="Wedding photography feature">
        <div className="wedding-feature__bg">
          <img
            src={`${import.meta.env.BASE_URL}images/weddings/wedding-01.jpg`}
            alt="Tamil wedding couple during their ceremony"
            className="img-cover"
            loading="lazy"
            width="1920"
            height="1080"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="wedding-feature__overlay" aria-hidden="true" />
        </div>
        <div className="container">
          <div className="wedding-feature__content reveal">
            <span className="label wedding-feature__label">Weddings</span>
            <span className="accent-line" aria-hidden="true" />
            <h2 className="display-md wedding-feature__title">
              Your Wedding.<br />Your Story.<br />
              <em>Your Way.</em>
            </h2>
            <p className="body-lg wedding-feature__desc">
              From quiet glances to unforgettable celebrations, we document your wedding with a balance of candid emotion, timeless portraits and authentic traditions.
            </p>
            <Link to="/portfolio/weddings" className="btn btn-primary">Explore Wedding Stories</Link>
          </div>
        </div>
      </section>

      {/* ── TAMIL WEDDING ───────────────────────────────── */}
      <section className="section section--dark tamil-section">
        <div className="container">
          <div className="tamil-section__grid">
            <div className="tamil-section__content reveal-left">
              <SectionHeading
                label="Tamil Weddings"
                title="Rooted in Tradition. Captured for Generations."
              />
              <p className="body-lg tamil-section__text">
                Tamil weddings are among the most beautiful and meaningful ceremonies in the world — rich with ritual, colour, family and spirituality. The thaali ceremony, the muhurtham, oonjal, kanyadanam, garland exchange, temple blessings — each moment carries centuries of tradition.
              </p>
              <p className="body-md tamil-section__text">
                We approach Tamil wedding photography with deep cultural respect and genuine love for the traditions we capture. Our goal is to preserve not just images, but the living heritage of your family.
              </p>
              <Link to="/portfolio/tamil-weddings" className="btn btn-primary">View Tamil Wedding Stories</Link>
            </div>
            <div className="tamil-section__images reveal-right">
              <div className="tamil-section__img-primary">
                <img
                  src={`${import.meta.env.BASE_URL}images/tamil-weddings/tamil-01.jpg`}
                  alt="Thaali ceremony during a Tamil wedding"
                  className="img-cover"
                  loading="lazy"
                  width="720"
                  height="900"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '400px' }}>
                  <span className="label-light">Tamil Wedding</span>
                </div>
              </div>
              <div className="tamil-section__img-secondary">
                <img
                  src={`${import.meta.env.BASE_URL}images/tamil-weddings/tamil-02.jpg`}
                  alt="Oonjal ceremony at a Tamil wedding"
                  className="img-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '200px' }}>
                  <span className="label-light">Tamil Ritual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRE-WEDDING ─────────────────────────────────── */}
      <section className="section section--light prewedding-section">
        <div className="container">
          <div className="prewedding-section__grid">
            <div className="prewedding-section__images reveal-left">
              <div className="prewedding-section__img-main">
                <img
                  src={`${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-01.jpg`}
                  alt="Couple at a heritage architecture location"
                  className="img-cover"
                  loading="lazy"
                  width="720"
                  height="900"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '500px' }}>
                  <span className="label-light">Pre-Wedding</span>
                </div>
              </div>
            </div>
            <div className="prewedding-section__content reveal-right">
              <SectionHeading
                label="Pre-Wedding"
                title="Before the Wedding, There Is Your Story."
                dark={false}
              />
              <p className="body-lg prewedding-section__text">
                A pre-wedding shoot is a chance to capture the quiet tenderness and joyful anticipation before the big day. We create beautiful couple stories in locations that reflect your personality and love.
              </p>
              <div className="prewedding-section__locations">
                {['Temple', 'Heritage Architecture', 'Nature & Gardens', 'Beaches', 'City Streets', 'Traditional Locations'].map(loc => (
                  <span key={loc} className="prewedding-section__loc-tag">{loc}</span>
                ))}
              </div>
              <Link to="/portfolio/pre-wedding" className="btn btn-primary">View Pre-Wedding Stories</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS GRID ─────────────────────────────────── */}
      <section className="section section--dark events-section">
        <div className="container">
          <SectionHeading
            label="Celebrations"
            title="Every Celebration Deserves to be Remembered"
            subtitle="From intimate family moments to grand occasions — we photograph them all with equal care."
            align="center"
            className="reveal"
          />
          <div className="events-section__grid">
            {[
              { title: 'Engagement', image: `${import.meta.env.BASE_URL}images/events/event-01.jpg`, slug: 'events', desc: 'The beginning of your forever.' },
              { title: 'Baby Shower', image: `${import.meta.env.BASE_URL}images/baby-shower/baby-shower-01.jpg`, slug: 'baby-shower', desc: 'Beautiful anticipation, captured.' },
              { title: 'House Warming', image: `${import.meta.env.BASE_URL}images/house-warming/house-warming-01.jpg`, slug: 'house-warming', desc: 'The joy of a new beginning.' },
              { title: 'Birthday', image: `${import.meta.env.BASE_URL}images/events/event-02.jpg`, slug: 'events', desc: 'Milestone moments, beautifully preserved.' },
              { title: 'Naming Ceremony', image: `${import.meta.env.BASE_URL}images/events/event-03.jpg`, slug: 'events', desc: 'Welcoming a new life with love.' },
              { title: 'Family Portrait', image: `${import.meta.env.BASE_URL}images/family/family-01.jpg`, slug: 'family', desc: 'Your people, together.' },
            ].map((event, i) => (
              <Link
                to={`/portfolio/${event.slug}`}
                key={event.title}
                className={`event-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="event-card__img-wrap">
                  <img
                    src={event.image}
                    alt={`${event.title} photography`}
                    className="event-card__img"
                    loading="lazy"
                    width="400"
                    height="500"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = 'flex';
                    }}
                  />
                  <div className="img-placeholder event-card__placeholder" style={{ display: 'none' }}>
                    <span className="label-light">{event.title}</span>
                  </div>
                  <div className="event-card__overlay" aria-hidden="true" />
                </div>
                <div className="event-card__body">
                  <h3 className="event-card__title title-sm">{event.title}</h3>
                  <p className="event-card__desc body-sm">{event.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────── */}
      <section className="section section--light philosophy-section">
        <div className="container">
          <SectionHeading
            label="Philosophy"
            title="Our Approach"
            align="center"
            dark={false}
            className="reveal"
          />
          <div className="philosophy-section__grid">
            {philosophyItems.map((item, i) => (
              <div key={item.num} className={`philosophy-card reveal reveal-delay-${i + 1}`}>
                <span className="philosophy-card__num label">{item.num}</span>
                <span className="accent-line" aria-hidden="true" />
                <h3 className="philosophy-card__title display-sm">{item.title}</h3>
                <p className="philosophy-card__desc body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ───────────────────────────────────────── */}
      <section className="section section--dark trust-section">
        <div className="container">
          <SectionHeading
            label="Why Choose Us"
            title="Our Promise to You"
            align="center"
            className="reveal"
          />
          <div className="trust-section__grid">
            {trustItems.map((item, i) => (
              <div key={item} className={`trust-item reveal reveal-delay-${(i % 4) + 1}`}>
                <span className="trust-item__check" aria-hidden="true">✦</span>
                <span className="trust-item__label body-md">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      {/* NOTE: Replace placeholder testimonials below with real client reviews before launch */}
      <section className="section section--light testimonials-section">
        <div className="container">
          <SectionHeading
            label="Kind Words"
            title="What Our Clients Say"
            align="center"
            dark={false}
            className="reveal"
          />
          <div className="testimonials-section__grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <span className="testimonial-card__quote-mark" aria-hidden="true">"</span>
                <blockquote className="testimonial-card__quote body-lg">{t.quote}</blockquote>
                <div className="testimonial-card__author">
                  <span className="accent-line accent-line--sm" aria-hidden="true" />
                  <span className="testimonial-card__name body-md">{t.name}</span>
                  <span className="testimonial-card__event label-light">{t.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-section__bg">
          <img
            src={`${import.meta.env.BASE_URL}images/temple/temple-01.jpg`}
            alt="Beautiful temple photography backdrop"
            className="img-cover"
            loading="lazy"
            width="1920"
            height="1080"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="cta-section__overlay" aria-hidden="true" />
        </div>
        <div className="cta-section__content container reveal">
          <span className="label cta-section__label">Start Your Story</span>
          <span className="accent-line accent-line--center" aria-hidden="true" />
          <h2 className="display-md cta-section__title">
            Let's Create Something <em>Beautiful.</em>
          </h2>
          <p className="body-lg cta-section__desc">
            Every moment is worth remembering. Let us help you preserve yours.
          </p>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-primary">Send an Enquiry</Link>
            <Link to="/portfolio" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
