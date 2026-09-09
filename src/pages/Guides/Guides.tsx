import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { guidesData } from '../../data/guides';
import './Guides.css';

export default function Guides() {
  const { language } = useLanguage();

  useDocumentHead({
    title: language === 'en'
      ? 'Thirukadaiyur Ceremony Guides & Photography Tips | Mani Photography'
      : 'திருக்கடையூர் சடங்குகள் & போட்டோகிராஃபி வழிகாட்டி | மணி போட்டோகிராஃபி',
    description: language === 'en'
      ? 'Comprehensive guides to Thirukadaiyur 60th (Shashtiapthapoorthi), 70th (Bhimaratha Shanthi) & 80th (Sadabishegam) marriage rituals, timings, and photography tips.'
      : 'திருக்கடையூர் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி), 70ஆம் கல்யாணம் & 80ஆம் கல்யாண (சதாபிஷேகம்) சடங்கு வழிகாட்டி மற்றும் போட்டோகிராஃபி குறிப்புகள்.',
  });

  useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="badge badge--gold reveal">
            <BookOpen size={14} style={{ marginRight: '6px' }} />
            {language === 'en' ? 'Ceremony & Photography Guides' : 'சடங்குகள் & போட்டோகிராஃபி வழிகாட்டி'}
          </span>
          <h1 className="title-display page-hero__title reveal">
            {language === 'en' ? 'Thirukadaiyur Rituals & Photography Guides' : 'திருக்கடையூர் சடங்கு & புகைப்பட வழிகாட்டி'}
          </h1>
          <p className="body-lg page-hero__sub reveal">
            {language === 'en'
              ? 'Expert advice, ritual step-by-step guides, best timings, and photography tips for your family milestone celebrations.'
              : 'உங்கள் குடும்பத்தின் சிறப்பு சடங்குகளுக்கான வழிகாட்டுதல்கள், சிறந்த நேரங்கள் மற்றும் புகைப்படக் குறிப்புகள்.'}
          </p>
        </div>
      </div>

      {/* Guides List */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            badge={language === 'en' ? 'Articles & Advice' : 'கட்டுரைகள் & ஆலோசனைகள்'}
            title={language === 'en' ? 'Thirukadaiyur Ceremony Guides' : 'திருக்கடையூர் விழா வழிகாட்டிகள்'}
            subtitle={language === 'en'
              ? 'Everything you need to plan a memorable 60th, 70th & 80th wedding ceremony'
              : '60, 70 & 80ஆம் கல்யாணம் சிறப்பான முறையில் நடத்த தேவையான அனைத்து விவரங்கள்'}
          />

          <div className="guides-grid">
            {guidesData.map(guide => (
              <article key={guide.id} className="guide-card reveal">
                <div className="guide-card__img-wrap">
                  <div className="guide-card__badge">
                    {language === 'en' ? guide.category : guide.categoryTa}
                  </div>
                </div>
                <div className="guide-card__content">
                  <div className="guide-card__meta">
                    <span><Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} /> {guide.publishDate}</span>
                    <span>•</span>
                    <span><Clock size={13} style={{ display: 'inline', marginRight: '4px' }} /> {guide.readTime}</span>
                  </div>
                  <h2 className="guide-card__title">
                    {language === 'en' ? guide.titleEn : guide.titleTa}
                  </h2>
                  <p className="guide-card__summary">
                    {language === 'en' ? guide.summaryEn : guide.summaryTa}
                  </p>
                  <Link to={`/guides/${guide.slug}`} className="guide-card__link">
                    {language === 'en' ? 'Read Full Guide' : 'முழு வழிகாட்டியைப் படிக்க'} <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
