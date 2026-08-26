import { useEffect, useState } from 'react';
import LogoMark from '../LogoMark';
import './Preloader.css';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 800);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${fading ? 'preloader--fade-out' : ''}`}>
      <div className="preloader__content">
        <LogoMark className="preloader__logo" rotating={true} />
        <div className="preloader__text">Mani Photography</div>
      </div>
    </div>
  );
}
