import { Link } from 'react-router-dom';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import './NotFound.css';

export default function NotFound() {
  useDocumentHead({ title: 'Page Not Found | Mani Photography' });

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
        <h1 className="display-md not-found__title">Looks like this moment got away.</h1>
        <p className="body-lg not-found__desc">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn btn-primary not-found__btn">Return Home</Link>
      </div>
    </main>
  );
}
