import { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../data/siteConfig';
import './Chatbot.css';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: string }[];
}

function RobotCameraIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="2" r="1.5" fill="#FFD700" />
      <line x1="12" y1="3.5" x2="12" y2="6" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3.5" y="6" width="17" height="11" rx="3" fill="#1C1917" stroke="#FFD700" strokeWidth="1.5" />
      <circle cx="8" cy="11.5" r="2.2" fill="#D9B340" />
      <circle cx="8" cy="11.5" r="1" fill="#1C1917" />
      <circle cx="16" cy="11.5" r="2.2" fill="#22C55E" />
      <circle cx="16" cy="11.5" r="1" fill="#1C1917" />
      <rect x="10.5" y="7" width="3" height="1.5" rx="0.5" fill="#FFD700" />
      <path d="M6 17.5h12a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a1 1 0 011-1z" fill="#B8860B" stroke="#FFD700" strokeWidth="0.8" />
      <circle cx="12" cy="19.5" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting based on language
  useEffect(() => {
    const initialMsg: Message = {
      id: 'welcome',
      sender: 'bot',
      text: language === 'en'
        ? 'Welcome to Mani Photography Thirukadaiyur! 🤖 Camera Robot Assistant is here. How can we assist your booking today?'
        : 'திருக்கடையூர் மணி போட்டோகிராஃபி கேமரா ரோபோ உதவியாளருக்கு நல்வரவு! 🤖 உங்களுக்கு எப்படி உதவ முடியும்?',
      options: [
        {
          label: language === 'en' ? '🛕 60th & 80th Weddings' : '🛕 60 & 80ஆம் கல்யாணம்',
          action: 'shashti',
        },
        {
          label: language === 'en' ? '📍 Studio & Temple Location' : '📍 கோயில் & கடை அமைவிடம்',
          action: 'location',
        },
        {
          label: language === 'en' ? '💰 Package Details & Booking' : '💰 கட்டணம் & முன்பதிவு',
          action: 'booking',
        },
        {
          label: language === 'en' ? '💬 Direct WhatsApp Chat' : '💬 வாட்ஸ்அப் தொடர்பு',
          action: 'whatsapp',
        },
      ],
    };
    setMessages([initialMsg]);
  }, [language]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendOption = (action: string, labelText: string) => {
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: labelText,
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message;

      if (action === 'shashti') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'We are Thirukadaiyur Amritaghateswarar Abirami Temple specialists for Shashtiapthapoorthi (60th), Bhimaratha Shanthi (70th) & Sadabishegam (80th) ceremonies! We capture Kalasa Abhishekam, Mangalya Dharanam re-tying & family blessings.'
            : 'திருக்கடையூர் அபிராமி திருக்கோயிலில் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி), 70ஆம் கல்யாணம் (பீமரத சாந்தி) மற்றும் 80ஆம் கல்யாணம் (சதாபிஷேகம்) சடங்குகளை சிறப்பான முறையில் படம் பிடிப்பதில் முன்னணி நிபுணர்.',
          options: [
            { label: language === 'en' ? '📞 Call Us Now' : '📞 எங்களை அழைக்க', action: 'call' },
            { label: language === 'en' ? '💬 WhatsApp Booking' : '💬 வாட்ஸ்அப் பதிவு', action: 'whatsapp' },
          ],
        };
      } else if (action === 'location') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'We are located right near Amritaghateswarar Abirami Temple, Thirukadaiyur, Mayiladuthurai, Tamil Nadu 609311.'
            : 'நாங்கள் திருக்கடையூர் ஸ்ரீ அமிர்தகடேஸ்வரர் அபிராமி அம்மன் திருக்கோயில் அருகே அமைந்துளோம்.',
          options: [
            { label: language === 'en' ? '🗺️ Open Google Maps' : '🗺️ கூகிள் மேப்ஸ் திறக்க', action: 'maps' },
          ],
        };
      } else if (action === 'booking') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'Our packages cover temple Kalasa Abhishekam, mandapam photography, high-resolution edited galleries and optional cinematic videos. Contact us for custom quotes!'
            : 'எங்கள் பேக்கேஜ்களில் கோயில் அபிஷேகம், மண்டப சடங்குகள், உயர்தர எடிட் ஆல்பம் மற்றும் சினிமா வீடியோக்கள் அடங்கும்.',
          options: [
            { label: language === 'en' ? '💬 Chat on WhatsApp' : '💬 வாட்ஸ்அப்பில் கேட்க', action: 'whatsapp' },
          ],
        };
      } else if (action === 'call') {
        window.location.href = `tel:${siteConfig.phone}`;
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? `Calling Mani Photography at ${siteConfig.phone}...`
            : `மணி போட்டோகிராஃபியை அழைக்கிறோம்: ${siteConfig.phone}...`,
        };
      } else if (action === 'maps') {
        window.open(siteConfig.mapsUrl, '_blank');
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'Opening Google Maps location...'
            : 'கூகிள் மேப்ஸ் அமைவிடம் திறக்கப்படுகிறது...',
        };
      } else if (action === 'whatsapp') {
        const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
        window.open(url, '_blank');
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'Redirecting to WhatsApp for instant booking...'
            : 'வாட்ஸ்அப் மூலம் உடனடியாக பேச இணைக்கப்படுகிறீர்கள்...',
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'Thank you! You can reach us directly via phone (+91 93602 93815) or WhatsApp.'
            : 'நன்றி! எங்களை +91 93602 93815 என்ற எண்ணில் நேரடியாக அழைக்கலாம்.',
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botResponse: Message;

      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('பணம்') || lower.includes('கட்டணம்')) {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'For custom ceremony photography quotes and special package offers, please chat with us on WhatsApp or call +91 93602 93815!'
            : 'சிறப்பு பேக்கேஜ் கட்டண விவரங்களுக்கு எங்களை +91 93602 93815 என்ற எண்ணில் தொடர்பு கொள்ளவும்.',
          options: [{ label: '💬 WhatsApp Chat', action: 'whatsapp' }],
        };
      } else {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'Thank you for your inquiry! Our Thirukadaiyur team is ready to help you. Speak directly with us on WhatsApp for instant assistance.'
            : 'உங்கள் செய்திக்கு நன்றி! எங்களை வாட்ஸ்அப் மூலம் தொடர்பு கொண்டு உடனடி தகவல் பெறலாம்.',
          options: [{ label: '💬 Talk on WhatsApp', action: 'whatsapp' }],
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 700);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        type="button"
        className={`chatbot-trigger ${isOpen ? 'chatbot-trigger--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Camera Robot Assistant Chat"
        title="Camera Robot AI Assistant"
      >
        <span className="chatbot-trigger__badge" aria-hidden="true" />
        {isOpen ? <X size={22} /> : <RobotCameraIcon size={26} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header__title">
              <div className="chatbot-header__avatar">
                <RobotCameraIcon size={22} />
              </div>
              <div>
                <span className="chatbot-header__name">Camera Robot AI</span>
                <span className="chatbot-header__status">
                  <span className="chatbot-header__dot" /> Thirukadaiyur Assistant
                </span>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-header__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-body">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`chatbot-msg chatbot-msg--${msg.sender}`}
              >
                <div className="chatbot-msg__bubble">
                  {msg.text}
                </div>
                {msg.options && (
                  <div className="chatbot-msg__options">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="chatbot-option-btn"
                        onClick={() => handleSendOption(opt.action, opt.label)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-msg chatbot-msg--bot">
                <div className="chatbot-msg__bubble chatbot-msg__typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form className="chatbot-footer" onSubmit={handleCustomSubmit}>
            <input
              type="text"
              className="chatbot-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={language === 'en' ? 'Ask a question...' : 'கேள்வி கேட்க...'}
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Send Message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
