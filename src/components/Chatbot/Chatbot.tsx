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

function renderFormattedText(text: string) {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const parts = line.split('**');
    return (
      <span key={lineIdx}>
        {parts.map((part, partIdx) =>
          partIdx % 2 === 1 ? (
            <strong key={partIdx} className="chatbot-bold">{part}</strong>
          ) : (
            part
          )
        )}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    );
  });
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
        ? 'Welcome to Mani Photography Thirukadaiyur! 🤖 I am your AI Guide & Booking Assistant. Ask me anything about ceremonies, travel routes, rules, or packages!'
        : 'திருக்கடையூர் மணி போட்டோகிராஃபி கேமரா ரோபோ உதவியாளருக்கு நல்வரவு! 🤖 விழாக்கள், பயண வழிகள், கோயில் விதிகள் அல்லது பேக்கேஜ்கள் குறித்து எதுவேண்டுமானாலும் கேட்கலாம்!',
      options: [
        {
          label: language === 'en' ? '🛕 60th & 80th Weddings' : '🛕 60 & 80ஆம் கல்யாணம்',
          action: 'shashti',
        },
        {
          label: language === 'en' ? '✈️ How to Reach Thirukadaiyur' : '✈️ திருக்கடையூர் செல்ல வழி',
          action: 'travel',
        },
        {
          label: language === 'en' ? '🪐 Thirunallar Temple Guide' : '🪐 திருநள்ளாறு சனீஸ்வரன் கோயில்',
          action: 'thirunallar',
        },
        {
          label: language === 'en' ? '📸 Temple Photography Rules' : '📸 கோயில் போட்டோகிராஃபி விதிகள்',
          action: 'rules',
        },
        {
          label: language === 'en' ? '💰 Packages & Booking' : '💰 கட்டணம் & முன்பதிவு',
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
            ? '🛕 **60th (Shashtiapthapoorthi)** & **80th (Sadabishegam)** ceremonies celebrate health & longevity at Thirukadaiyur Temple.\n✦ Key rituals: Ganapathy/Ayush Homam, 60/108 Kalasa Abhishekam, Mangalya Dharanam (Thaali re-tying) & Garland exchange.\n✦ We specialize in capturing candid homam moments, sacred water drops, and 3 to 4-generation family portraits!'
            : '🛕 **60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி)** & **80ஆம் கல்யாணம் (சதாபிஷேகம்)** ஆயுள் விருத்திக்கான புனித விழாக்களாகும்.\n✦ முக்கிய சடங்குகள்: கணபதி/ஆயுஷ் ஹோமம், கலசாபிஷேகம், மாங்கல்ய தாரணம் & மாலை மாற்றுதல்.\n✦ 3-4 தலைமுறை குடும்பப் படங்களை படம் பிடிப்பதில் நாங்கள் முதன்மை நிபுணர்கள்!',
          options: [
            { label: language === 'en' ? '📖 Read 60th Guide' : '📖 60ஆம் கல்யாண வழிகாட்டி', action: 'guide-60' },
            { label: language === 'en' ? '📖 Read 80th Guide' : '📖 80ஆம் கல்யாண வழிகாட்டி', action: 'guide-80' },
            { label: language === 'en' ? '💬 WhatsApp Booking' : '💬 வாட்ஸ்அப் பதிவு', action: 'whatsapp' },
          ],
        };
      } else if (action === 'travel') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? '✈️ **How to Reach Thirukadaiyur Temple**:\nPlease select your preferred mode of travel below for step-by-step directions:'
            : '✈️ **திருக்கடையூர் கோயில் அடைவது எப்படி**:\nஉங்கள் பயண வழியை கீழே தேர்ந்தெடுக்கவும்:',
          options: [
            { label: language === 'en' ? '✈️ By Flight / Air' : '✈️ விமானம் மூலம்', action: 'travel-flight' },
            { label: language === 'en' ? '🚆 By Train' : '🚆 ரயில் மூலம்', action: 'travel-train' },
            { label: language === 'en' ? '🚌 By Bus' : '🚌 பஸ் மூலம்', action: 'travel-bus' },
            { label: language === 'en' ? '🚗 By Car / Driving' : '🚗 கார் மூலம்', action: 'travel-car' },
            { label: language === 'en' ? '📖 Full Travel Guide' : '📖 முழு வழிகாட்டி', action: 'guide-travel' },
          ],
        };
      } else if (action === 'travel-flight') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? '✈️ **By Flight / Air Route Guide**:\n\n• **Tiruchirappalli International Airport (TRZ - 145 km, 3.5 hrs)**:\nNearest operational airport with direct flights from **Singapore**, **Malaysia**, **Dubai**, **Colombo** & major Indian cities. Taxis available directly from **Trichy Airport** to **Thirukadaiyur**.\n\n• **Chennai International Airport (MAA - 285 km, 6 hrs)**:\nMajor international hub for all domestic & international flights.'
            : '✈️ **விமானம் மூலம் பயண வழிகாட்டி**:\n\n• **திருச்சி சர்வதேச விமான நிலையம் (TRZ - 145 கி.மீ)**:\nமிக அருகில் உள்ள விமான நிலையம். **சிங்கப்பூர்**, **மலேசியா**, **துபாய்** மற்றும் இந்திய நகரங்களிலிருந்து நேரடி விமானங்கள் உண்டு. திருச்சியிலிருந்து டாக்ஸிகள் கிடைக்கின்றன.\n\n• **சென்னை விமான நிலையம் (MAA - 285 கி.மீ)**:\nஅனைத்து சர்வதேச விமானங்களுக்கான முதன்மை மையம்.',
          options: [
            { label: language === 'en' ? '🚆 Check Train Routes' : '🚆 ரயில் வழி பார்க்க', action: 'travel-train' },
            { label: language === 'en' ? '🚌 Check Bus Routes' : '🚌 பஸ் வழி பார்க்க', action: 'travel-bus' },
            { label: language === 'en' ? '🗺️ Google Maps' : '🗺️ கூகிள் மேப்ஸ்', action: 'maps' },
          ],
        };
      } else if (action === 'travel-train') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? '🚆 **By Train Route Guide**:\n\n• **Mayiladuthurai Junction (MV - 24 km, 35 mins)**:\nNearest major railway station.\n\n• **Direct Trains From**: **Chennai Egmore** (Chozhan, Uzhavan, Rockfort Express), **Bangalore** (Mysore-Mayiladuthurai Express), **Coimbatore** (Janshatabdi Express), **Trichy** & **Madurai**.\n\n• **Local Transport**: Taxis and shuttle buses run every 10 mins from **Mayiladuthurai Station** directly to **Thirukadaiyur**.'
            : '🚆 **ரயில் மூலம் பயண வழிகாட்டி**:\n\n• **மயிலாடுதுறை ஜங்ஷன் (MV - 24 கி.மீ)**:\nமிக அருகில் உள்ள பிரதான ரயில் நிலையம்.\n\n• **நேரடி ரயில்கள்**: **சென்னை** (சோழன், உழவன், ராக்ஃபோர்ட் எக்ஸ்பிரஸ்), **பெங்களூரு**, **கோயம்புத்தூர்**, **திருச்சி**, **மதுரை**.\n\n• **உள்ளூர் பஸ்கள்**: மயிலாடுதுறை நிலையத்திலிருந்து 10 நிமிடத்திற்கு ஒருமுறை திருக்கடையூருக்கு பஸ்கள் உண்டு.',
          options: [
            { label: language === 'en' ? '🚌 Check Bus Routes' : '🚌 பஸ் வழி பார்க்க', action: 'travel-bus' },
            { label: language === 'en' ? '🚗 Check Car Routes' : '🚗 கார் வழி பார்க்க', action: 'travel-car' },
            { label: language === 'en' ? '📖 Full Travel Guide' : '📖 முழு வழிகாட்டி', action: 'guide-travel' },
          ],
        };
      } else if (action === 'travel-bus') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? '🚌 By Bus Route Guide:\n\n• From Chennai:\nFrequent SETC, PRTC & AC Sleeper buses (KPN, Rathimeena) from CMBT / Kilambakkam directly to Thirukadaiyur via ECR (6-7 hrs).\n\n• From Bangalore:\nDaily night AC sleeper buses via KSRTC & private buses to Mayiladuthurai & Karaikal.\n\n• Local Shuttle Buses:\nBuses run every 10 mins between Mayiladuthurai Bus Stand & Karaikal, stopping right in front of Thirukadaiyur Temple.'
            : '🚌 பஸ் மூலம் பயண வழிகாட்டி:\n\n• சென்னையிலிருந்து:\nகிளாம்பாக்கம் / கோயம்பேட்டிலிருந்து நேரடி ECR ஏசி ஸ்லீப்பர் பேருந்துகள் (6-7 மணி நேரம்).\n\n• பெங்களூருவிலிருந்து:\nKSRTC & பிரைவேட் ஸ்லீப்பர் பஸ்கள் தினமும் இரவு இயங்குகின்றன.\n\n• உள்ளூர் பஸ்கள்:\nமயிலாடுதுறையிலிருந்து 10 நிமிடத்திற்கு ஒருமுறை திருக்கடையூர் கோயில் பஸ் நிறுத்தம் வரை பேருந்துகள் உண்டு.',
          options: [
            { label: language === 'en' ? '🚗 Check Car Routes' : '🚗 கார் வழி பார்க்க', action: 'travel-car' },
            { label: language === 'en' ? '✈️ Check Flights' : '✈️ விமான வழி பார்க்க', action: 'travel-flight' },
            { label: language === 'en' ? '📖 Full Travel Guide' : '📖 முழு வழிகாட்டி', action: 'guide-travel' },
          ],
        };
      } else if (action === 'travel-car') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? '🚗 **By Car / Driving Route Guide**:\n• **From Chennai (285 km | 6 hrs)**: Scenic ECR Highway (Chennai → Mahabalipuram → Puducherry → Cuddalore → Chidambaram → Sirkazhi → Thirukadaiyur).\n• **From Bangalore (430 km | 8.5 hrs)**: Bangalore → Hosur → Krishnagiri → Salem → Attur → Perambalur → Jayankondam → Mayiladuthurai → Thirukadaiyur.\n• **From Trichy (145 km | 3.5 hrs)**: Trichy → Thanjavur → Kumbakonam → Mayiladuthurai → Thirukadaiyur.'
            : '🚗 **கார் / டாக்ஸி சுயப் பயண வழிகாட்டி**:\n• **சென்னையிலிருந்து (285 கி.மீ | 6 மணி நேரம்)**: ECR சாலை வழி: சென்னை → மகாபலிபுரம் → புதுச்சேரி → கடலூர் → சிதம்பரம் → சீர்காழி → திருக்கடையூர்.\n• **பெங்களூருவிலிருந்து (430 கி.மீ | 8.5 மணி நேரம்)**: பெங்களூரு → சேலம் → ஆத்தூர் → பெரம்பலூர் → ஜெயங்கொண்டம் → மயிலாடுதுறை → திருக்கடையூர்.\n• **திருச்சியிலிருந்து (145 கி.மீ | 3.5 மணி நேரம்)**: திருச்சி → தஞ்சாவூர் → கும்பகோணம் → மயிலாடுதுறை → திருக்கடையூர்.',
          options: [
            { label: language === 'en' ? '🗺️ Open Google Maps' : '🗺️ கூகிள் மேப்ஸ்', action: 'maps' },
            { label: language === 'en' ? '💬 WhatsApp Support' : '💬 வாட்ஸ்அப் உதவி', action: 'whatsapp' },
          ],
        };
      } else if (action === 'thirunallar') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? '🪐 **Thirunallar Saneeswarar Temple** (25 km from Thirukadaiyur):\n✦ Famous for Nala Theertham holy dip, Til Oil Lamp lighting & Saturn Parihara Poojas.\n✦ Mani Photography provides full-day combined photography packages covering both Thirukadaiyur Abirami Temple & Thirunallar Temple!'
            : '🪐 **திருநள்ளாறு சனீஸ்வரன் கோயில்** (திருக்கடையூரிலிருந்து 25 கி.மீ):\n✦ நள தீர்த்த குளியல், எள்ளு தீபம் மற்றும் பரிகார பூஜைகளுக்கான புனித தலம்.\n✦ இரண்டு கோயில்களையும் ஒரே நாளில் கவர் செய்யும் சிறப்பு புகைப்பட பேக்கேஜ்கள் எங்களிடம் உண்டு!',
          options: [
            { label: language === 'en' ? '📖 Read Thirunallar Guide' : '📖 திருநள்ளாறு வழிகாட்டி', action: 'guide-thirunallar' },
            { label: language === 'en' ? '💬 Book Combined Package' : '💬 பேக்கேஜ் விசாரிக்க', action: 'whatsapp' },
          ],
        };
      } else if (action === 'rules') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? '📸 **Temple Photography Rules & Best Timings**:\n• **Best Hours**: 6:00 AM – 9:00 AM for soft golden sunlight.\n• **Attire**: Traditional Pattu Veshti for men & Kanchipuram Silk Sarees for women.\n• **Permissions**: Allowed in homam halls, mandapams & outer courtyards. Sanctum photography is restricted.'
            : '📸 **கோயில் போட்டோகிராஃபி விதிகள் & சிறந்த நேரங்கள்**:\n• **சிறந்த நேரம்**: காலை 6:00 - 9:00 மணி வரை.\n• **ஆடை முறை**: ஆண்கள் பட்டு வேஷ்டி, பெண்கள் காஞ்சிபுரம் பட்டுப்புடவை.\n• மண்டபங்கள் மற்றும் ஹோம கூடங்களில் படம் எடுக்க அனுமதிக்கப்படும்.',
          options: [
            { label: language === 'en' ? '📖 Read Rules Guide' : '📖 விதிகள் வழிகாட்டி', action: 'guide-rules' },
            { label: language === 'en' ? '📞 Call Photographer' : '📞 போட்டோகிராஃபரை அழைக்க', action: 'call' },
          ],
        };
      } else if (action === 'location') {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'We are located right near Sri Amritaghateswarar Abirami Temple, Thirukadaiyur, Mayiladuthurai district, Tamil Nadu 609311.'
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
            ? 'Our packages cover temple Kalasa Abhishekam, mandapam photography, high-resolution edited galleries and optional cinematic LED videos. Contact us for custom quotes!'
            : 'எங்கள் பேக்கேஜ்களில் கோயில் அபிஷேகம், மண்டப சடங்குகள், உயர்தர எடிட் ஆல்பம் மற்றும் சினிமா வீடியோக்கள் அடங்கும்.',
          options: [
            { label: language === 'en' ? '📞 Call +91 93602 93815' : '📞 அழைக்க +91 93602 93815', action: 'call' },
            { label: language === 'en' ? '💬 Chat on WhatsApp' : '💬 வாட்ஸ்அப்பில் கேட்க', action: 'whatsapp' },
          ],
        };
      } else if (action === 'guide-60') {
        window.location.href = '/guides/thirukadaiyur-60th-marriage-shashtiapthapoorthi-guide';
        botResponse = { id: (Date.now() + 1).toString(), sender: 'bot', text: 'Opening 60th Marriage Guide...' };
      } else if (action === 'guide-80') {
        window.location.href = '/guides/thirukadaiyur-80th-marriage-sadabishegam-guide';
        botResponse = { id: (Date.now() + 1).toString(), sender: 'bot', text: 'Opening 80th Marriage Guide...' };
      } else if (action === 'guide-travel') {
        window.location.href = '/guides/how-to-reach-thirukadaiyur-travel-guide-bus-train-car-flight';
        botResponse = { id: (Date.now() + 1).toString(), sender: 'bot', text: 'Opening Travel Route Guide...' };
      } else if (action === 'guide-thirunallar') {
        window.location.href = '/guides/thirunallar-saneeswarar-temple-parihara-pooja-photography-guide';
        botResponse = { id: (Date.now() + 1).toString(), sender: 'bot', text: 'Opening Thirunallar Temple Guide...' };
      } else if (action === 'guide-rules') {
        window.location.href = '/guides/thirukadaiyur-temple-photography-rules-timings-tips';
        botResponse = { id: (Date.now() + 1).toString(), sender: 'bot', text: 'Opening Temple Rules Guide...' };
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

      if (lower.includes('reach') || lower.includes('travel') || lower.includes('flight') || lower.includes('airport') || lower.includes('train') || lower.includes('bus') || lower.includes('car') || lower.includes('route') || lower.includes('செல்ல வழி') || lower.includes('பயணம்') || lower.includes('ரயில்')) {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? '✈️ **Nearest Airport**: Tiruchirappalli (TRZ - 145 km) or Chennai (MAA - 285 km).\n🚆 **Nearest Railway**: Mayiladuthurai Junction (MV - 24 km, 35 mins drive).\n🚌 **Buses**: Direct sleeper buses from Chennai & Bangalore.\n🚗 **Car**: ECR Route via Pondicherry & Chidambaram.'
            : '✈️ **அருகில் உள்ள விமான நிலையம்**: திருச்சி (TRZ - 145 கி.மீ) அல்லது சென்னை (MAA - 285 கி.மீ).\n🚆 **அருகில் உள்ள ரயில் நிலையம்**: மயிலாடுதுறை ஜங்ஷன் (MV - 24 கி.மீ).\n🚌 **பஸ்**: சென்னை & பெங்களூருவிலிருந்து நேரடி பஸ்கள்.',
          options: [
            { label: language === 'en' ? '📖 Read Full Travel Guide' : '📖 முழு வழிகாட்டி படிக்க', action: 'guide-travel' },
            { label: language === 'en' ? '🗺️ Google Maps Location' : '🗺️ மேப்ஸ் பார்க்க', action: 'maps' },
          ],
        };
      } else if (lower.includes('60') || lower.includes('80') || lower.includes('shashti') || lower.includes('sadabishegam') || lower.includes('bhimaratha') || lower.includes('70') || lower.includes('wedding') || lower.includes('marriage') || lower.includes('கல்யாணம்') || lower.includes('சஷ்டியப்தபூர்த்தி') || lower.includes('சதாபிஷேகம்')) {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? '🛕 We specialize in 60th (Shashtiapthapoorthi), 70th (Bhimaratha Shanthi) & 80th (Sadabishegam) ritual photography & LED candid videos at Thirukadaiyur Temple!'
            : '🛕 திருக்கடையூர் 60, 70 மற்றும் 80ஆம் கல்யாண சடங்குகளை படம் பிடிப்பதில் மணி போட்டோகிராஃபி முன்னணி நிபுணர்!',
          options: [
            { label: '📖 60th Marriage Guide', action: 'guide-60' },
            { label: '📖 80th Marriage Guide', action: 'guide-80' },
            { label: '💬 Book Photographer', action: 'whatsapp' },
          ],
        };
      } else if (lower.includes('thirunallar') || lower.includes('saneeswarar') || lower.includes('shani') || lower.includes('parihara') || lower.includes('திருநள்ளாறு') || lower.includes('சனீஸ்வரன்')) {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? '🪐 Thirunallar Saneeswarar Temple is just 25 km from Thirukadaiyur! We offer full day combined photography packages for both temples.'
            : '🪐 திருநள்ளாறு சனீஸ்வரன் கோயில் திருக்கடையூரிலிருந்து 25 கி.மீ தொலைவில் உள்ளது! இரண்டு கோயில்களுக்கும் ஒரே நாளில் புகைப்பட சேவை வழங்குகிறோம்.',
          options: [
            { label: '📖 Thirunallar Guide', action: 'guide-thirunallar' },
            { label: '💬 Enquire Package', action: 'whatsapp' },
          ],
        };
      } else if (lower.includes('rules') || lower.includes('timing') || lower.includes('dress') || lower.includes('attire') || lower.includes('camera') || lower.includes('நேரங்கள்') || lower.includes('ஆடை') || lower.includes('விதிகள்')) {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? '📸 Best photography hours: 6:00 AM – 9:00 AM. Attire: Pattu Veshti (Dhoti) & Kanchipuram Silk Sarees. Photography permitted in mandapams & homam halls.'
            : '📸 சிறந்த புகைப்பட நேரம்: காலை 6:00 - 9:00 மணி. ஆடை: பட்டு வேஷ்டி & காஞ்சிபுரம் பட்டுப்புடவை.',
          options: [
            { label: '📖 Read Temple Rules', action: 'guide-rules' },
            { label: '💬 WhatsApp Chat', action: 'whatsapp' },
          ],
        };
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('package') || lower.includes('பணம்') || lower.includes('கட்டணம்') || lower.includes('விலை')) {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'For custom ceremony photography quotes and special package offers, please chat with us on WhatsApp or call +91 93602 93815!'
            : 'சிறப்பு பேக்கேஜ் கட்டண விவரங்களுக்கு எங்களை +91 93602 93815 என்ற எண்ணில் தொடர்பு கொள்ளவும்.',
          options: [
            { label: '📞 Call +91 93602 93815', action: 'call' },
            { label: '💬 WhatsApp Chat', action: 'whatsapp' },
          ],
        };
      } else {
        botResponse = {
          id: Date.now().toString(),
          sender: 'bot',
          text: language === 'en'
            ? 'Thank you for your inquiry! Our Thirukadaiyur team is ready to help you. Speak directly with us on WhatsApp or call +91 93602 93815 for instant assistance.'
            : 'உங்கள் செய்திக்கு நன்றி! எங்களை வாட்ஸ்அப் அல்லது +91 93602 93815 என்ற எண்ணில் தொடர்பு கொண்டு உடனடி தகவல் பெறலாம்.',
          options: [
            { label: '📞 Call Us', action: 'call' },
            { label: '💬 Talk on WhatsApp', action: 'whatsapp' },
          ],
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
        {isOpen ? <X size={18} /> : <RobotCameraIcon size={22} />}
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
                  {renderFormattedText(msg.text)}
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
