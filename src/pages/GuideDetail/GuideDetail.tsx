import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Phone, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { useLanguage } from '../../context/LanguageContext';
import { guidesData } from '../../data/guides';
import { siteConfig } from '../../data/siteConfig';
import NotFound from '../NotFound/NotFound';
import './GuideDetail.css';

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const guide = guidesData.find(g => g.slug === slug);

  useDocumentHead({
    title: guide
      ? `${language === 'en' ? guide.titleEn : guide.titleTa} | Mani Photography`
      : 'Guide Not Found | Mani Photography',
    description: guide
      ? (language === 'en' ? guide.summaryEn : guide.summaryTa)
      : 'Thirukadaiyur photography guide',
  });

  useScrollReveal();

  if (!guide) {
    return <NotFound />;
  }

  const content = language === 'en' ? guide.contentEn : (guide.contentTa || guide.contentEn);
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi Mani Photography, I read your guide on ' + guide.titleEn + ' and would like to enquire about photography booking.')}`;

  return (
    <main className="guide-detail">
      <div className="container guide-detail__container">
        {/* Back Link */}
        <Link to="/guides" className="guide-detail__back">
          <ArrowLeft size={16} /> {language === 'en' ? 'Back to All Guides' : 'அனைத்து வழிகாட்டிகளுக்கும் திரும்ப'}
        </Link>

        {/* Header */}
        <header className="guide-detail__header">
          <span className="guide-detail__category">
            {language === 'en' ? guide.category : guide.categoryTa}
          </span>
          <h1 className="guide-detail__title">
            {language === 'en' ? guide.titleEn : guide.titleTa}
          </h1>
          <div className="guide-detail__meta">
            <span><Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} /> {guide.publishDate}</span>
            <span>•</span>
            <span><Clock size={14} style={{ display: 'inline', marginRight: '4px' }} /> {guide.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="guide-detail__article">
          <p className="guide-detail__intro">
            {content.intro}
          </p>

          {content.sections.map((sec, idx) => (
            <div key={idx} className="guide-detail__section">
              <h2 className="guide-detail__heading">{sec.heading}</h2>
              <p className="guide-detail__body">{sec.body}</p>
              {sec.bulletPoints && (
                <ul className="guide-detail__list">
                  {sec.bulletPoints.map((pt, pidx) => (
                    <li key={pidx} className="guide-detail__list-item">
                      <span className="guide-detail__list-bullet">✦</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* CTA Box */}
          <div className="guide-detail__cta">
            <h3 className="guide-detail__cta-title">
              {language === 'en' ? 'Planning a Ceremony in Thirukadaiyur?' : 'திருக்கடையூரில் விழா திட்டமிடுகிறீர்களா?'}
            </h3>
            <p className="guide-detail__cta-sub">
              {language === 'en'
                ? 'Book Thirukadaiyur’s leading specialist photographer for 60th, 70th & 80th milestone weddings. We ensure every ritual and smile is captured flawlessly.'
                : '60, 70 & 80ஆம் கல்யாண புகைப்பட முன்பதிவுக்கு மணி போட்டோகிராஃபியைத் தொடர்பு கொள்ளவும்.'}
            </p>
            <div className="guide-detail__cta-btns">
              <a href={`tel:${siteConfig.phone}`} className="btn btn-primary">
                <Phone size={16} /> {siteConfig.phone}
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ color: '#25D366' }}>
                <MessageCircle size={16} /> {language === 'en' ? 'Enquire on WhatsApp' : 'வாட்ஸ்அப்பில் விசாரிக்க'}
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
