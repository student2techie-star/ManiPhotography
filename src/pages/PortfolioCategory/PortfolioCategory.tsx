import { useParams, Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { portfolioItems, portfolioCategories } from '../../data/portfolio';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import '../Portfolio/Portfolio.css';
import './PortfolioCategory.css';

// Category-specific content
const categoryContent: Record<string, {
  title: string;
  heroTitle: string;
  subtitle: string;
  desc: string;
  heroImage: string;
  heroAlt: string;
  metaDesc: string;
}> = {
  weddings: {
    title: 'Weddings',
    heroTitle: 'Wedding Photography',
    subtitle: 'Every emotion, every ritual, every celebration.',
    desc: 'From the first sacred ritual to the final joyful dance, we document your entire wedding day with sensitivity, artistry and love. Our approach blends candid storytelling with timeless portraits.',
    heroImage: '/images/weddings/wedding-01.jpg',
    heroAlt: 'Tamil wedding ceremony photography',
    metaDesc: 'Wedding photography by Mani Photography — covering Tamil weddings, candid moments, portraits, rituals and receptions.',
  },
  'pre-wedding': {
    title: 'Pre-Wedding',
    heroTitle: 'Pre-Wedding Photography',
    subtitle: 'Before the wedding, there is your story.',
    desc: 'A pre-wedding shoot is a relaxed creative session for couples to be photographed in locations that reflect their personality — temples, heritage architecture, nature, beaches or the city streets.',
    heroImage: '/images/pre-wedding/pre-wedding-01.jpg',
    heroAlt: 'Pre-wedding couple photography',
    metaDesc: 'Pre-wedding couple photography by Mani Photography — beautiful, natural couple stories at temples, heritage locations and outdoors.',
  },
  'tamil-weddings': {
    title: 'Tamil Weddings',
    heroTitle: 'Tamil Wedding Photography',
    subtitle: 'Tradition, emotion and timeless memories.',
    desc: 'Tamil weddings are extraordinary events, rich with sacred ritual, vibrant colour, and deep family connection. We document every moment with cultural respect and photographic artistry — from muhurtham to reception.',
    heroImage: '/images/tamil-weddings/tamil-01.jpg',
    heroAlt: 'Tamil traditional wedding photography',
    metaDesc: 'Tamil wedding photography by Mani Photography — documenting muhurtham, thaali, oonjal, kanyadanam and all traditional rituals.',
  },
  temple: {
    title: 'Temple Photography',
    heroTitle: 'Temple Photography',
    subtitle: 'Timeless portraits in sacred spaces.',
    desc: 'Ancient temples provide extraordinary backdrops — carved stone pillars, flickering diyas, marigold garlands and the atmosphere of centuries of devotion. Our temple photography creates timeless, magazine-quality portraits.',
    heroImage: '/images/temple/temple-01.jpg',
    heroAlt: 'Temple photography with stone pillars and diya lamps',
    metaDesc: 'Temple photography by Mani Photography — portrait sessions at South Indian temples, capturing tradition, spirituality and beauty.',
  },
  'baby-shower': {
    title: 'Baby Shower',
    heroTitle: 'Baby Shower Photography',
    subtitle: 'The beautiful anticipation of new life.',
    desc: 'A baby shower is a celebration of love and the precious anticipation of a new life. We capture the joy of the ceremony, the warmth of family, and the tender emotional moments that make this occasion unforgettable.',
    heroImage: '/images/baby-shower/baby-shower-01.jpg',
    heroAlt: 'Baby shower photography with family',
    metaDesc: 'Baby shower and maternity photography by Mani Photography — capturing family joy, ceremonies and tender maternity portraits.',
  },
  'house-warming': {
    title: 'House Warming',
    heroTitle: 'House Warming Photography',
    subtitle: 'The joy of beginning a new chapter.',
    desc: 'A house warming is one of life\'s most meaningful milestones. The kolam at the doorstep, the puja, the first steps through the door, the family gathered together — these moments deserve to be beautifully preserved.',
    heroImage: '/images/house-warming/house-warming-01.jpg',
    heroAlt: 'House warming ceremony photography',
    metaDesc: 'House warming photography by Mani Photography — documenting Griha Pravesh ceremonies, family moments and new beginnings.',
  },
  'family-functions': {
    title: 'Family Functions',
    heroTitle: 'Family Function Photography',
    subtitle: 'Your people, your moments, your memories.',
    desc: 'From birthday milestones to naming ceremonies, anniversary celebrations to family portraits — every gathering is an opportunity to create beautiful memories. We bring the same care and artistry to every occasion.',
    heroImage: '/images/family/family-01.jpg',
    heroAlt: 'Family function photography',
    metaDesc: 'Family function photography by Mani Photography — birthdays, anniversaries, naming ceremonies, engagements and family portraits.',
  },
};

export default function PortfolioCategory() {
  const { category } = useParams<{ category: string }>();
  const content = category ? categoryContent[category] : null;
  const catLabel = portfolioCategories.find(c => c.id === category)?.label ?? category ?? '';

  useDocumentHead({
    title: content
      ? `${content.title} Photography | Mani Photography`
      : `${catLabel} | Mani Photography Portfolio`,
    description: content?.metaDesc ?? `${catLabel} photography by Mani Photography.`,
  });
  useScrollReveal();

  // Normalize: family-functions → family for data lookup
  const dataCategory = category === 'family-functions' ? 'family' : category ?? '';
  const items = portfolioItems.filter(i => i.category === dataCategory);

  if (!content) {
    // Fallback for unknown categories
    return (
      <main>
        <div className="page-hero page-hero--dark">
          <div className="container">
            <span className="label page-hero__label">Portfolio</span>
            <h1 className="display-md page-hero__title">{catLabel}</h1>
          </div>
        </div>
        <section className="section section--dark">
          <div className="container">
            <PortfolioGrid items={items} columns={3} />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Category Hero */}
      <section className="category-hero">
        <div className="category-hero__bg">
          <img
            src={content.heroImage}
            alt={content.heroAlt}
            className="img-cover"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="category-hero__overlay" aria-hidden="true" />
        </div>
        <div className="category-hero__content container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol className="breadcrumb__list">
              <li><Link to="/">Home</Link></li>
              <li aria-hidden="true"> / </li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li aria-hidden="true"> / </li>
              <li aria-current="page">{content.title}</li>
            </ol>
          </nav>
          <span className="label category-hero__label">Portfolio</span>
          <h1 className="display-md category-hero__title">{content.heroTitle}</h1>
          <p className="body-lg category-hero__subtitle">{content.subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="section section--light category-intro">
        <div className="container container--mid">
          <p className="body-lg category-intro__text">{content.desc}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section--dark">
        <div className="container">
          <PortfolioGrid items={items} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <section className="section section--light" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-sm reveal" style={{ color: 'var(--clr-text-dark)', marginBottom: 'var(--space-4)' }}>
            Ready to create your story?
          </h2>
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-mid)', marginBottom: 'var(--space-8)' }}>
            Get in touch to discuss your {content.title.toLowerCase()} photography.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Book a {content.title} Shoot</Link>
            <Link to="/portfolio" className="btn btn-outline-dark">Back to Portfolio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
