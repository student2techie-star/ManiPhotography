import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const t = translations[language].common;
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label={t.chatWhatsApp}
      title="Chat on WhatsApp"
    >
      <svg className="whatsapp-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
        {/* Green Speech Bubble */}
        <path
          fill="#25D366"
          d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"
        />
        {/* White Phone Handle */}
        <path
          fill="#FFFFFF"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        />
      </svg>
      <span className="whatsapp-btn__label">{t.chatWhatsApp}</span>
    </a>
  );
}
