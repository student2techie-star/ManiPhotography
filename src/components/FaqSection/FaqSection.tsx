import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import SectionHeading from '../SectionHeading/SectionHeading';
import './FaqSection.css';

export default function FaqSection() {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section--light faq-section">
      <div className="container">
        <SectionHeading
          label={t.label}
          title={t.title}
          align="center"
        />
        <p className="body-lg faq-section__sub">{t.sub}</p>

        <div className="faq-accordion">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__q-text">
                    <HelpCircle size={18} className="faq-item__q-icon" />
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`faq-item__chevron ${isOpen ? 'faq-item__chevron--open' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="faq-item__answer">
                    <p className="body-md">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
