import { Link } from 'react-router-dom';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { useLanguage } from '../../context/LanguageContext';
import './NotFound.css';

export default function NotFound() {
  const { language } = useLanguage();

  useDocumentHead({
    title: language === 'en'
      ? 'Page Not Found | Mani Photography'
      : 'பக்கம் கிடைக்கவில்லை | மணி போட்டோகிராஃபி',
  });

  return (
    <main className="not-found">
      <div className="not-found__bg">
        <img
          src={`${import.meta.env.BASE_URL}images/hero.jpg`}
          alt="Background"
          className="img-cover"
          loading="lazy"
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="not-found__overlay" aria-hidden="true" />
      </div>
      <div className="not-found__content container">
        <span className="not-found__icon" aria-hidden="true">✦</span>
        <h1 className="display-md not-found__title">
          {language === 'en' ? 'Looks like this moment got away.' : 'இந்த பக்கம் இங்கு காணப்படவில்லை.'}
        </h1>
        <p className="body-lg not-found__desc">
          {language === 'en'
            ? "The page you're looking for doesn't exist or has moved."
            : 'நீங்கள் தேடும் பக்கம் இங்கு இல்லை அல்லது நகர்த்தப்பட்டுள்ளது.'}
        </p>
        <Link to="/" className="btn btn-primary not-found__btn">
          {language === 'en' ? 'Return Home' : 'முகப்பிற்குத் திரும்பு'}
        </Link>
      </div>
    </main>
  );
}
