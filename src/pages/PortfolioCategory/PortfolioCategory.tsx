import { useParams, Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { portfolioItems, portfolioCategories } from '../../data/portfolio';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import '../Portfolio/Portfolio.css';
import './PortfolioCategory.css';

// Category-specific content in EN and TA
const categoryContentData: Record<string, {
  en: { title: string; heroTitle: string; subtitle: string; desc: string; metaDesc: string; ctaText: string };
  ta: { title: string; heroTitle: string; subtitle: string; desc: string; metaDesc: string; ctaText: string };
  heroImage: string;
  heroAlt: string;
}> = {
  weddings: {
    en: {
      title: 'Weddings',
      heroTitle: 'Wedding Photography',
      subtitle: 'Every emotion, every ritual, every celebration.',
      desc: 'From the first sacred ritual to the final joyful dance, we document your entire wedding day with sensitivity, artistry and love. Our approach blends candid storytelling with timeless portraits.',
      metaDesc: 'Wedding photography by Mani Photography — covering Tamil weddings, candid moments, portraits, rituals and receptions.',
      ctaText: 'Book a Wedding Shoot',
    },
    ta: {
      title: 'திருமணங்கள்',
      heroTitle: 'திருமண புகைப்படம்',
      subtitle: 'ஒவ்வொரு உணர்ச்சியும், ஒவ்வொரு சடங்கும், ஒவ்வொரு கொண்டாட்டமும்.',
      desc: 'முதல் புனிதமான சடங்கு முதல் இறுதி கொண்டாட்டம் வரை, உங்கள் திருமணத்தின் ஒவ்வொரு தருணத்தையும் ஆழமான அன்புடனும் கலைநயத்துடனும் பதிவு செய்கிறோம்.',
      metaDesc: 'மணி போட்டோகிராஃபி வழங்கும் திருமண புகைப்படம் — சடங்குகள், வரவேற்பு மற்றும் போர்ட்ரெய்ட் படங்கள்.',
      ctaText: 'திருமண ஷூட் முன்பதிவு செய்ய',
    },
    heroImage: `${import.meta.env.BASE_URL}images/weddings/wedding-01.jpg`,
    heroAlt: 'Tamil wedding ceremony photography',
  },
  'pre-wedding': {
    en: {
      title: 'Pre-Wedding',
      heroTitle: 'Pre-Wedding Photography',
      subtitle: 'Before the wedding, there is your story.',
      desc: 'A pre-wedding shoot is a relaxed creative session for couples to be photographed in locations that reflect their personality — temples, heritage architecture, nature, beaches or the city streets.',
      metaDesc: 'Pre-wedding couple photography by Mani Photography — beautiful, natural couple stories at temples, heritage locations and outdoors.',
      ctaText: 'Book a Pre-Wedding Shoot',
    },
    ta: {
      title: 'Pre-Wedding',
      heroTitle: 'திருமணத்திற்கு முந்தைய படங்கள்',
      subtitle: 'திருமணத்திற்கு முன், உங்கள் அழகிய கதை இருக்கிறது.',
      desc: 'தம்பதிகளின் அன்பை இயல்பாகப் படம் பிடிக்கும் சிறப்பான தருணம். உங்கள் ஆளுமையைப் பிரதிபலிக்கும் கோயில்கள், பாரம்பரிய இடங்கள் அல்லது இயற்கை எழில் கொஞ்சும் இடங்களில் படப்பிடிப்பு நடத்துகிறோம்.',
      metaDesc: 'மணி போட்டோகிராஃபி வழங்கும் திருமணத்திற்கு முந்தைய படப்பிடிப்பு (Pre-Wedding shoot).',
      ctaText: 'Pre-Wedding ஷூட் முன்பதிவு செய்ய',
    },
    heroImage: `${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-01.jpg`,
    heroAlt: 'Pre-wedding couple photography',
  },
  'tamil-weddings': {
    en: {
      title: 'Tamil Weddings',
      heroTitle: 'Tamil Wedding Photography',
      subtitle: 'Tradition, emotion and timeless memories.',
      desc: 'Tamil weddings are extraordinary events, rich with sacred ritual, vibrant colour, and deep family connection. We document every moment with cultural respect and photographic artistry — from muhurtham to reception.',
      metaDesc: 'Tamil wedding photography by Mani Photography — documenting muhurtham, thaali, oonjal, kanyadanam and all traditional rituals.',
      ctaText: 'Book a Tamil Wedding Shoot',
    },
    ta: {
      title: 'தமிழ் திருமணங்கள்',
      heroTitle: 'தமிழ் பாரம்பரிய திருமணங்கள்',
      subtitle: 'பாரம்பரியம், உணர்வுகள் மற்றும் அழியாத நினைவுகள்.',
      desc: 'தமிழ் திருமணங்கள் சடங்குகளும் வண்ணங்களும் நிறைந்தவை. தாலி கட்டும் நிகழ்வு, முகூர்த்தம், ஊஞ்சல், கன்னிகாதானம் மற்றும் மாலை மாற்றுதல் போன்ற ஒவ்வொரு சடங்கையும் ஆழமான மரியாதையுடன் படம் பிடிக்கிறோம்.',
      metaDesc: 'மணி போட்டோகிராஃபி வழங்கும் தமிழ் பாரம்பரிய திருமண புகைப்பட சேவை.',
      ctaText: 'தமிழ் திருமண ஷூட் முன்பதிவு செய்ய',
    },
    heroImage: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-01.jpg`,
    heroAlt: 'Tamil traditional wedding photography',
  },
  temple: {
    en: {
      title: 'Temple Photography',
      heroTitle: 'Temple Photography',
      subtitle: 'Timeless portraits in sacred spaces.',
      desc: 'Ancient temples provide extraordinary backdrops — carved stone pillars, flickering diyas, marigold garlands and the atmosphere of centuries of devotion. Our temple photography creates timeless, magazine-quality portraits.',
      metaDesc: 'Temple photography by Mani Photography — portrait sessions at South Indian temples, capturing tradition, spirituality and beauty.',
      ctaText: 'Book a Temple Shoot',
    },
    ta: {
      title: 'கோயில் படங்கள்',
      heroTitle: 'கோயில் புகைப்படம்',
      subtitle: 'புனிதமான இடங்களில் காலத்தால் அழியாத போர்ட்ரெய்ட்டுகள்.',
      desc: 'பண்டைய கோயில்கள் மிகச்சிறந்த பின்னணியை வழங்குகின்றன — கல் தூண்கள், அகல் விளக்குகள், சாமந்திப் பூக்கள் மற்றும் ஆன்மீக சூழலில் அழகிய போர்ட்ரெய்ட் படங்களை உருவாக்குகிறோம்.',
      metaDesc: 'மணி போட்டோகிராஃபி வழங்கும் கோயில் புகைப்பட சேவை.',
      ctaText: 'கோயில் ஷூட் முன்பதிவு செய்ய',
    },
    heroImage: `${import.meta.env.BASE_URL}images/temple/temple-01.jpg`,
    heroAlt: 'Temple photography with stone pillars and diya lamps',
  },
  'baby-shower': {
    en: {
      title: 'Baby Shower',
      heroTitle: 'Baby Shower Photography',
      subtitle: 'The beautiful anticipation of new life.',
      desc: 'A baby shower is a celebration of love and the precious anticipation of a new life. We capture the joy of the ceremony, the warmth of family, and the tender emotional moments that make this occasion unforgettable.',
      metaDesc: 'Baby shower and maternity photography by Mani Photography — capturing family joy, ceremonies and tender maternity portraits.',
      ctaText: 'Book a Baby Shower Shoot',
    },
    ta: {
      title: 'வளைகாப்பு',
      heroTitle: 'வளைகாப்பு புகைப்படம்',
      subtitle: 'புதிய வாழ்க்கையின் அழகிய எதிர்பார்ப்பு.',
      desc: 'வளைகாப்பு என்பது அன்பின் கொண்டாட்டமும் புதிய உயிரின் வருகையை எதிர்பார்க்கும் தருணமுமாகும். சடங்கின் மகிழ்ச்சியையும் குடும்பத்தின் அன்பையும் அப்படியே படம் பிடிக்கிறோம்.',
      metaDesc: 'மணி போட்டோகிராஃபி வழங்கும் வளைகாப்பு மற்றும் தாய்மை புகைப்பட சேவைகள்.',
      ctaText: 'வளைகாப்பு ஷூட் முன்பதிவு செய்ய',
    },
    heroImage: `${import.meta.env.BASE_URL}images/baby-shower/baby-shower-01.jpg`,
    heroAlt: 'Baby shower photography with family',
  },
  'house-warming': {
    en: {
      title: 'House Warming',
      heroTitle: 'House Warming Photography',
      subtitle: 'The joy of beginning a new chapter.',
      desc: "A house warming is one of life's most meaningful milestones. The kolam at the doorstep, the puja, the first steps through the door, the family gathered together — these moments deserve to be beautifully preserved.",
      metaDesc: 'House warming photography by Mani Photography — documenting Griha Pravesh ceremonies, family moments and new beginnings.',
      ctaText: 'Book a House Warming Shoot',
    },
    ta: {
      title: 'கிரகப்பிரவேசம்',
      heroTitle: 'கிரகப்பிரவேச புகைப்படம்',
      subtitle: 'புதிய அத்தியாயத்தைத் தொடங்குவதன் மகிழ்ச்சி.',
      desc: 'கிரகப்பிரவேசம் வாழ்க்கையின் முக்கிய மைல்கல்லாகும். வாசலில் கோலம், பூஜை, முதல் காலடி வைக்கும் தருணம் என அனைத்தையும் மிக நேர்த்தியாகப் படம் பிடிக்கிறோம்.',
      metaDesc: 'மணி போட்டோகிராஃபி வழங்கும் கிரகப்பிரவேச புகைப்பட சேவை.',
      ctaText: 'கிரகப்பிரவேச ஷூட் முன்பதிவு செய்ய',
    },
    heroImage: `${import.meta.env.BASE_URL}images/house-warming/house-warming-01.jpg`,
    heroAlt: 'House warming ceremony photography',
  },
  'family-functions': {
    en: {
      title: 'Family Functions',
      heroTitle: 'Family Function Photography',
      subtitle: 'Your people, your moments, your memories.',
      desc: 'From birthday milestones to naming ceremonies, anniversary celebrations to family portraits — every gathering is an opportunity to create beautiful memories. We bring the same care and artistry to every occasion.',
      metaDesc: 'Family function photography by Mani Photography — birthdays, anniversaries, naming ceremonies, engagements and family portraits.',
      ctaText: 'Book a Family Function Shoot',
    },
    ta: {
      title: 'குடும்ப விழாக்கள்',
      heroTitle: 'குடும்ப விழா புகைப்படம்',
      subtitle: 'உங்கள் உறவுகள், உங்கள் தருணங்கள், உங்கள் நினைவுகள்.',
      desc: 'பிறந்த நாள் விழா முதல் பெயர் சூட்டும் விழா, மணிவிழா மற்றும் குடும்ப புகைப்படங்கள் வரை அனைத்து நிகழ்வுகளையும் அதே கலைநயத்துடனும் கவனத்துடனும் படம் பிடிக்கிறோம்.',
      metaDesc: 'மணி போட்டோகிராஃபி வழங்கும் குடும்ப விழா புகைப்பட சேவைகள்.',
      ctaText: 'குடும்ப விழா ஷூட் முன்பதிவு செய்ய',
    },
    heroImage: `${import.meta.env.BASE_URL}images/family/family-01.jpg`,
    heroAlt: 'Family function photography',
  },
};

export default function PortfolioCategory() {
  const { category } = useParams<{ category: string }>();
  const { language } = useLanguage();
  const t = translations[language];

  const catData = category ? categoryContentData[category] : null;
  const content = catData ? catData[language] : null;

  const catLabel = t.categories[category as keyof typeof t.categories]
    || portfolioCategories.find(c => c.id === category)?.label
    || category
    || '';

  useDocumentHead({
    title: content
      ? `${content.title} | Mani Photography`
      : `${catLabel} | Mani Photography Portfolio`,
    description: content?.metaDesc ?? `${catLabel} photography by Mani Photography.`,
  });

  useScrollReveal();

  // Normalize: family-functions → family for data lookup
  const dataCategory = category === 'family-functions' ? 'family' : category ?? '';
  const items = portfolioItems.filter(i => i.category === dataCategory);

  if (!content || !catData) {
    return (
      <main>
        <div className="page-hero page-hero--dark">
          <div className="container">
            <span className="label page-hero__label">{t.portfolio.heroLabel}</span>
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
            src={catData.heroImage}
            alt={catData.heroAlt}
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
              <li><Link to="/">{t.nav.home}</Link></li>
              <li aria-hidden="true"> / </li>
              <li><Link to="/portfolio">{t.nav.portfolio}</Link></li>
              <li aria-hidden="true"> / </li>
              <li aria-current="page">{content.title}</li>
            </ol>
          </nav>
          <span className="label category-hero__label">{t.nav.portfolio}</span>
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
            {t.home.ctaTitle}
          </h2>
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-mid)', marginBottom: 'var(--space-8)' }}>
            {t.home.ctaDesc}
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">{content.ctaText}</Link>
            <Link to="/portfolio" className="btn btn-outline-dark">{language === 'en' ? 'Back to Portfolio' : 'போர்ட்ஃபோலியோ திரும்பு'}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
