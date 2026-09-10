// ============================================================
// SERVICES DATA — THIRUKADAIYUR MANI PHOTOGRAPHY
// Dedicated SEO Service Pages & Architecture
// ============================================================

export interface ServiceFaq {
  question: string;
  answer: string;
  questionTa?: string;
  answerTa?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  dedicatedRoute?: string;
  title: string;
  titleTa?: string;
  heroTitle?: string;
  heroTitleTa?: string;
  metaTitle: string;
  metaTitleTa: string;
  metaDesc: string;
  metaDescTa: string;
  shortDesc: string;
  shortDescTa?: string;
  fullDesc: string;
  fullDescTa?: string;
  image: string;
  alt: string;
  icon: string;
  includes: string[];
  includesTa?: string[];
  faqs?: ServiceFaq[];
}

export const dedicatedServices: ServiceItem[] = [
  {
    id: 'wedding-photography-thirukadaiyur',
    slug: 'wedding-photography-thirukadaiyur',
    dedicatedRoute: '/wedding-photography-thirukadaiyur',
    title: 'Wedding Photography in Thirukadaiyur',
    titleTa: 'திருக்கடையூர் திருமண போட்டோகிராஃபி',
    heroTitle: 'Wedding Photography in Thirukadaiyur & Mayiladuthurai',
    heroTitleTa: 'திருக்கடையூர் & மயிலாடுதுறை திருமண புகைப்படக் கலை',
    metaTitle: 'Wedding Photography in Thirukadaiyur | Mani Photography',
    metaTitleTa: 'திருக்கடையூர் திருமண போட்டோகிராஃபி | மணி போட்டோகிராஃபி',
    metaDesc: 'Professional wedding photography in Thirukadaiyur & Mayiladuthurai. Documenting Tamil rituals, candid moments, muhurtham, and reception with timeless artistry.',
    metaDescTa: 'திருக்கடையூர் & மயிலாடுதுறையில் சிறந்த திருமண போட்டோகிராஃபி. தமிழ் சடங்குகள், முகூர்த்தம் மற்றும் ரிசப்ஷன் படப்பிடிப்பு. முன்பதிவு செய்க: +91 81110 85865.',
    shortDesc: 'Complete wedding photography documenting sacred Tamil rituals, muhurtham, and receptions across Thirukadaiyur & Mayiladuthurai.',
    fullDesc: 'Your wedding day is a tapestry of traditional rituals, deep family emotions, and unforgettable celebrations. Based right in Thirukadaiyur, Mani Photography captures every precious detail — from Nishchayathartham and Janavasam to Kanyadanam, Mangalya Dharanam, Oonjal, and grand receptions. We blend unobtrusive candid storytelling with regal traditional portraiture so you can relive your divine day forever.',
    image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-wedding-photography-muhurtham.webp`,
    alt: 'Traditional Tamil wedding photography in Thirukadaiyur',
    icon: '💍',
    includes: [
      'Full Day Traditional & Candid Photography',
      'Muhurtham & Thaali Ceremony Documentation',
      'Bride & Groom Regal Portrait Session',
      'Multi-Generational Family & Group Photography',
      'High-Resolution Professionally Retouched Gallery',
      'Custom Printed Flush-Mount Wedding Albums',
      'Online Cloud Gallery for Family Sharing',
    ],
    includesTa: [
      'முழு நாள் பாரம்பரிய & கேண்டிட் போட்டோகிராஃபி',
      'முகூர்த்தம் & மாங்கல்ய தாரணம் முழு படப்பிடிப்பு',
      'மணமகன் & மணமகள் போர்ட்ரெய்ட் ஷூட்',
      'குடும்பத்தினர் மற்றும் உறவினர்கள் குழுப் படங்கள்',
      'உயர்தர எடிட் செய்யப்பட்ட டிஜிட்டல் படங்கள்',
      'பிரீமியம் ஆல்பம் அச்சடிப்பு வசதி',
    ],
    faqs: [
      {
        question: 'Do you cover weddings outside Thirukadaiyur?',
        answer: 'Yes! We cover weddings across Thirukadaiyur, Mayiladuthurai, Karaikal, Sirkazhi, Chidambaram, Nagapattinam, Thanjavur, Kumbakonam, and throughout Tamil Nadu.',
        questionTa: 'திருக்கடையூர் தவிர மற்ற ஊர்களில் திருமணம் படம்பிடிப்பீர்களா?',
        answerTa: 'ஆம்! திருக்கடையூர், மயிலாடுதுறை, காரைக்கால், சீர்காழி, சிதம்பரம், நாகப்பட்டினம், தஞ்சாவூர், கும்பகோணம் உட்பட தமிழ்நாடு முழுவதும் படப்பிடிப்பு செய்கிறோம்.'
      },
      {
        question: 'What is included in your Thirukadaiyur wedding package?',
        answer: 'Our packages include full coverage of all rituals, high-resolution edited images, candid portraiture, family group photos, and optional luxury photo albums and 4K videography.',
        questionTa: 'திருமண போட்டோகிராஃபி பேக்கேஜில் எவை சேர்க்கப்பட்டுள்ளன?',
        answerTa: 'அனைத்து சடங்குகளின் முழு படப்பிடிப்பு, HD எடிட் படங்கள், கேண்டிட் போர்ட்ரெய்ட்டுகள், குடும்பப் படங்கள் மற்றும் ஆல்பம்/வீடியோ வசதிகள் அடங்கும்.'
      }
    ]
  },
  {
    id: '60th-birthday-photography-thirukadaiyur',
    slug: '60th-birthday-photography-thirukadaiyur',
    dedicatedRoute: '/60th-birthday-photography-thirukadaiyur',
    title: '60th Birthday Photography in Thirukadaiyur (Shashtiapthapoorthi)',
    titleTa: 'திருக்கடையூர் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி) போட்டோகிராஃபி',
    heroTitle: '60th Birthday Photography in Thirukadaiyur (Shashtiapthapoorthi)',
    heroTitleTa: 'திருக்கடையூர் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி) சிறப்பு புகைப்படங்கள்',
    metaTitle: '60th Birthday Photography Thirukadaiyur | Shashtiapthapoorthi Specialist',
    metaTitleTa: 'திருக்கடையூர் 60ஆம் கல்யாணம் போட்டோகிராஃபி | சஷ்டியப்தபூர்த்தி மணி போட்டோகிராஃபி',
    metaDesc: 'Specialist 60th birthday (Shashtiapthapoorthi / 60ஆம் கல்யாணம்) photographer at Thirukadaiyur Amritaghateswarar Abirami Temple. Kalasa Abhishekam & Thaali re-tying coverage.',
    metaDescTa: 'திருக்கடையூர் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி) சிறப்பு புகைப்படக் கலைஞர். கலசாபிஷேகம், மாங்கல்ய தாரணம் மற்றும் குடும்ப ஆசி படப்பிடிப்பு. அழைக்க: +91 81110 85865.',
    shortDesc: 'Specialist photography for 60th birthday marriage rituals (Shashtiapthapoorthi) at Thirukadaiyur Abirami Temple.',
    fullDesc: 'Celebrating your parents 60th Birthday (Shashtiapthapoorthi / 60ஆம் கல்யாணம்) at Thirukadaiyur Sri Amritaghateswarar Abirami Temple is one of life’s greatest blessings. As Thirukadaiyur locals, Mani Photography specializes in documenting sacred 60 Kalasa Abhishekam, Ayush Homam, Mangalya Dharanam (thaali re-tying), and joyous multi-generational family moments with utmost devotion and visual excellence.',
    image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-60th-birthday-shashtiapthapoorthi-photography.webp`,
    alt: '60th Birthday Shashtiapthapoorthi photography in Thirukadaiyur temple',
    icon: '👑',
    includes: [
      'Thirukadaiyur Temple & Homam Mandapam Full Coverage',
      'Ayush Homam & 60 Kalasa Abhishekam High-Speed Capture',
      'Mangalya Dharanam (Thaali Re-tying) Emotional Moment Capture',
      'Grandparents with Children & Grandchildren Group Portraits',
      'Temple Outer Courtyard Traditional Family Photoshoot',
      'Edited High-Resolution Digital Album',
      'Cinematic Video & LED Highlights Optional',
    ],
    includesTa: [
      'திருக்கடையூர் கோயில் மற்றும் ஹோம மண்டப முழு படப்பிடிப்பு',
      'ஆயுஷ் ஹோமம் & 60 கலசாபிஷேக புனிதநீர் தெளிக்கும் அரிய தருணம்',
      'இரண்டாம் முறை மாங்கல்ய தாரணம் (தாலி கட்டும் சடங்கு)',
      'பேரக் குழந்தைகள் மற்றும் குடும்பத்தினரின் ஆசி படங்கள்',
      'கோயில் வெளி மண்டப குடும்ப போர்ட்ரெய்ட் ஷூட்',
    ],
    faqs: [
      {
        question: 'Who is the best photographer for 60th marriage in Thirukadaiyur?',
        answer: 'Mani Photography Thirukadaiyur (+91 81110 85865) is the leading specialist photographer for 60th Marriage (Shashtiapthapoorthi), 70th & 80th (Sadabishegam) milestone weddings at Amritaghateswarar Abirami Temple.',
        questionTa: 'திருக்கடையூரில் 60ஆம் கல்யாணத்திற்கு சிறந்த போட்டோகிராபர் யார்?',
        answerTa: 'மணி போட்டோகிராஃபி திருக்கடையூர் (+91 81110 85865) 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி), 70ஆம் கல்யாணம் மற்றும் 80ஆம் கல்யாண சடங்குகளைப் படம் பிடிப்பதில் முன்னணி நிபுணத்துவம் பெற்றுள்ளது.'
      },
      {
        question: 'Do you document Kalasa Abhishekam water pouring moments?',
        answer: 'Yes! We use high-speed lenses and camera equipment to capture crisp, emotional shots of the 60 Kalasa holy water abhishekam without disrupting the holy priests or rituals.',
        questionTa: 'கலசாபிஷேக புனிதநீர் தெளிக்கும் தருணங்களை தெளிவாக படம் பிடிப்பீர்களா?',
        answerTa: 'ஆம்! சடங்குகளுக்கு இடையூறு இல்லாமல் உயர்தர கேமராக்கள் மூலம் கலசாபிஷேக தருணங்கள் மிகத் தெளிவாக படம் பிடிக்கப்படுகின்றன.'
      }
    ]
  },
  {
    id: '70th-birthday-photography-thirukadaiyur',
    slug: '70th-birthday-photography-thirukadaiyur',
    dedicatedRoute: '/70th-birthday-photography-thirukadaiyur',
    title: '70th Birthday Photography in Thirukadaiyur (Bhimaratha Shanthi)',
    titleTa: 'திருக்கடையூர் 70ஆம் கல்யாணம் (பீமரத சாந்தி) போட்டோகிராஃபி',
    heroTitle: '70th Birthday Photography in Thirukadaiyur (Bhimaratha Shanthi)',
    heroTitleTa: 'திருக்கடையூர் 70ஆம் கல்யாணம் (பீமரத சாந்தி) சிறப்பு புகைப்படங்கள்',
    metaTitle: '70th Birthday Photography Thirukadaiyur | Bhimaratha Shanthi Specialist',
    metaTitleTa: 'திருக்கடையூர் 70ஆம் கல்யாணம் போட்டோகிராஃபி | பீமரத சாந்தி மணி போட்டோகிராஃபி',
    metaDesc: 'Specialist 70th birthday (Bhimaratha Shanthi / 70ஆம் கல்யாணம்) photography in Thirukadaiyur. Documenting 70th marriage homam, temple rituals, and family gatherings.',
    metaDescTa: 'திருக்கடையூர் 70ஆம் கல்யாணம் (பீமரத சாந்தி) சடங்குகள் மற்றும் குடும்ப விழா புகைப்படங்கள். மணி போட்டோகிராஃபி திருக்கடையூர்: +91 81110 85865.',
    shortDesc: 'Dedicated photography for Bhimaratha Shanthi (70th Birthday Marriage) at Thirukadaiyur Amritaghateswarar Abirami Temple.',
    fullDesc: 'Entering the 70th year of life (Bhimaratha Shanthi / 70ஆம் கல்யாணம்) is a sacred milestone honoring 70 years of wisdom, devotion, and family guidance. At Thirukadaiyur, this auspicious occasion invokes divine protection and long health. Mani Photography documents the entire ceremony with reverence, highlighting the bond between elders and multi-generational family members.',
    image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-70th-birthday-bhimaratha-shanthi-photography.webp`,
    alt: '70th Birthday Bhimaratha Shanthi ceremony in Thirukadaiyur',
    icon: '🔱',
    includes: [
      'Complete Bhimaratha Shanthi Homam Coverage',
      'Kalasa Abhishekam & Temple Darshan Moments',
      'Pada Pooja & Family Blessing Documentation',
      'Generational Family Group Portraits',
      'Retouched High-Resolution Photo Gallery',
    ],
    includesTa: [
      'பீமரத சாந்தி ஹோம சடங்குகள் முழு படப்பிடிப்பு',
      'கலசாபிஷேகம் & கோயில் தரிசன தருணங்கள்',
      'பாத பூஜை மற்றும் குடும்பத்தினர் ஆசி படங்கள்',
      'தலைமுறை தலைமுறையான குடும்ப போர்ட்ரெய்ட்',
    ],
    faqs: [
      {
        question: 'Why perform 70th birthday (Bhimaratha Shanthi) photography at Thirukadaiyur?',
        answer: 'Thirukadaiyur is the world sthalam for longevity rituals. Capturing Bhimaratha Shanthi here preserves once-in-a-lifetime family blessings for generations to come.',
        questionTa: 'திருக்கடையூரில் 70ஆம் கல்யாணம் படம்பிடிப்பதன் சிறப்பு என்ன?',
        answerTa: 'ஆயுள் விருத்தி தலமான திருக்கடையூரில் 70ஆம் ஆண்டு பீமரத சாந்தி சடங்குகளை படம் பிடிப்பது குடும்பத்தினருக்கு என்றும் நிலைத்து நிற்கும் நினைவாகும்.'
      }
    ]
  },
  {
    id: '80th-birthday-photography-thirukadaiyur',
    slug: '80th-birthday-photography-thirukadaiyur',
    dedicatedRoute: '/80th-birthday-photography-thirukadaiyur',
    title: '80th Birthday Photography in Thirukadaiyur (Sadabishegam)',
    titleTa: 'திருக்கடையூர் 80ஆம் கல்யாணம் (சதாபிஷேகம்) போட்டோகிராஃபி',
    heroTitle: '80th Birthday Photography in Thirukadaiyur (Sadabishegam)',
    heroTitleTa: 'திருக்கடையூர் 80ஆம் கல்யாணம் (சதாபிஷேகம்) சிறப்பு புகைப்படங்கள்',
    metaTitle: '80th Birthday Photography Thirukadaiyur | Sadabishegam Specialist',
    metaTitleTa: 'திருக்கடையூர் 80ஆம் கல்யாணம் போட்டோகிராஃபி | சதாபிஷேகம் மணி போட்டோகிராஃபி',
    metaDesc: 'Specialist 80th birthday (Sadabishegam / 80ஆம் கல்யாணம்) photographer at Thirukadaiyur Abirami Temple. Capturing 1000 full moon blessings, 80 Kalasams & family portraits.',
    metaDescTa: 'திருக்கடையூர் 80ஆம் கல்யாணம் (சதாபிஷேகம்) 1000 பிறை கண்ட அருமையான நிகழ்வு புகைப்படங்கள். மணி போட்டோகிராஃபி திருக்கடையூர்: +91 81110 85865.',
    shortDesc: 'Specialized photography for Sadabishegam (80th Birthday Marriage / 1,000 Full Moons) at Thirukadaiyur.',
    fullDesc: 'Reaching 80 years of age means witnessing 1,000 full moons (Sahasra Chandra Darshan / சஹஸ்ர சந்திர தர்சனம்). Celebrating Sadabishegam (80th Wedding / 80ஆம் கல்யாணம்) at Thirukadaiyur Sri Amritaghateswarar Abirami Temple is a divine celebration of life and marital longevity. Mani Photography creates timeless heirlooms capturing great-grandparents, grandparents, children, and great-grandchildren celebrating together.',
    image: `${import.meta.env.BASE_URL}images/guides/thirukadaiyur-80th-birthday-sadabishegam-photography.webp`,
    alt: '80th Birthday Sadabishegam ceremony photography Thirukadaiyur',
    icon: '🌕',
    includes: [
      '80 Kalasa Abhishekam & Sahasra Chandra Darshan Ritual Coverage',
      'Re-tying of Thaali & Blessing Ceremony Documentation',
      '4-Generational Great-Grandchildren Group Portraits',
      'Temple Mandapam & Sanctum Outer Portraits',
      'Digital Edited Gallery & Album Delivery',
    ],
    includesTa: [
      '80 கலசாபிஷேகம் & சதாபிஷேக ஹோம முழு படப்பிடிப்பு',
      '4 தலைமுறை குடும்பத்தினர் மற்றும் கொள்ளுப் பேரப் பிள்ளைகள் குழு படங்கள்',
      'திருக்கடையூர் கோயில் மண்டப போர்ட்ரெய்ட் ஷூட்',
    ],
    faqs: [
      {
        question: 'What is Sadabishegam photography in Thirukadaiyur?',
        answer: 'Sadabishegam celebrates completing 80 years of age (seeing 1000 full moons). Our photography documents the 80 Kalasa Abhishekam, thaali re-tying, and 4-generational family blessings.',
        questionTa: 'திருக்கடையூர் சதாபிஷேக போட்டோகிராஃபி என்பது என்ன?',
        answerTa: '80 வயது நிறைவடைந்து 1000 பிறை கண்ட தம்பதியரின் 80 கலசாபிஷேகம், மாங்கல்ய தாரணம் மற்றும் 4 தலைமுறை குடும்ப ஆசிகளைப் படம் பிடிப்பதாகும்.'
      }
    ]
  },
  {
    id: 'shashtiapthapoorthi-photography',
    slug: 'shashtiapthapoorthi-photography',
    dedicatedRoute: '/shashtiapthapoorthi-photography',
    title: 'Shashtiapthapoorthi Photography Thirukadaiyur',
    titleTa: 'சஷ்டியப்தபூர்த்தி போட்டோகிராஃபி திருக்கடையூர்',
    heroTitle: 'Shashtiapthapoorthi (60th Marriage) Photography Specialist',
    heroTitleTa: 'சஷ்டியப்தபூர்த்தி (60ஆம் கல்யாணம்) சிறப்பு புகைப்படக் கலைஞர்',
    metaTitle: 'Shashtiapthapoorthi Photography Thirukadaiyur | 60th Wedding Specialist',
    metaTitleTa: 'சஷ்டியப்தபூர்த்தி போட்டோகிராஃபி திருக்கடையூர் | மணி போட்டோகிராஃபி',
    metaDesc: 'Expert Shashtiapthapoorthi (60th marriage / 60ஆம் கல்யாணம்) photography in Thirukadaiyur. Authentic ritual coverage, Kalasa Abhishekam & multi-generational family photos.',
    metaDescTa: 'திருக்கடையூர் சஷ்டியப்தபூர்த்தி (60ஆம் கல்யாணம்) புகைப்பட சேவை. கலசாபிஷேகம், மாங்கல்ய தாரணம் மற்றும் குடும்ப படங்கள். தொடர்புக்கு: +91 81110 85865.',
    shortDesc: 'Dedicated Shashtiapthapoorthi (60th Marriage) ceremony photography in Thirukadaiyur.',
    fullDesc: 'Shashtiapthapoorthi marks the completion of 60 years in a person’s life. Thirukadaiyur is the supreme sthalam to perform this ritual for health, long life, and family prosperity. Mani Photography brings extensive local experience, knowing every mandapam, priest timing, and lighting angle to preserve your sacred memories perfectly.',
    image: `${import.meta.env.BASE_URL}images/guides/thirukadaiyur-60th-birthday-shashtiapthapoorthi-guide.webp`,
    alt: 'Shashtiapthapoorthi 60th marriage rituals in Thirukadaiyur',
    icon: '🪔',
    includes: [
      'Vedic Homam & Kalasa Abhishekam Coverage',
      'Mangalya Dharanam & Ring Exchange',
      'Family & Grandchildren Blessings',
      'Temple Mantapam Couple Portraits',
      'Edited Gallery Delivery',
    ],
    includesTa: [
      'வேத ஹோமங்கள் & கலசாபிஷேகம் படப்பிடிப்பு',
      'மாங்கல்ய தாரணம் & மாலை மாற்றுதல்',
      'குடும்பத்தினரின் ஆசி தருணங்கள்',
    ],
    faqs: [
      {
        question: 'How early should we book a photographer for Shashtiapthapoorthi in Thirukadaiyur?',
        answer: 'We recommend booking 2 to 4 weeks in advance, especially during auspicious muhurtham days when Thirukadaiyur mandapams are busy.',
        questionTa: 'திருக்கடையூர் சஷ்டியப்தபூர்த்திக்கு எவ்வளவு நாட்களுக்கு முன் முன்பதிவு செய்ய வேண்டும்?',
        answerTa: 'சுப முகூர்த்த நாட்களில் மண்டபங்கள் விரைவாக முன்பதிவு செய்யப்படுவதால் 2 முதல் 4 வாரங்களுக்கு முன்பே தொடர்புகொள்வது நல்லது.'
      }
    ]
  },
  {
    id: 'temple-photography-thirukadaiyur',
    slug: 'temple-photography-thirukadaiyur',
    dedicatedRoute: '/temple-photography-thirukadaiyur',
    title: 'Thirukadaiyur Temple Photography',
    titleTa: 'திருக்கடையூர் கோயில் போட்டோகிராஃபி',
    heroTitle: 'Thirukadaiyur Temple & Heritage Photography',
    heroTitleTa: 'திருக்கடையூர் கோயில் & பாரம்பரிய போர்ட்ரெய்ட் போட்டோகிராஃபி',
    metaTitle: 'Thirukadaiyur Temple Photography | Mani Photography',
    metaTitleTa: 'திருக்கடையூர் கோயில் போட்டோகிராஃபி | மணி போட்டோகிராஃபி',
    metaDesc: 'Timeless temple portrait photography in Thirukadaiyur Sri Amritaghateswarar Abirami Temple & nearby temples like Thirunallar Saneeswarar Temple.',
    metaDescTa: 'திருக்கடையூர் ஸ்ரீ அமிர்தகடேஸ்வரர் அபிராமி கோயில் மற்றும் திருநள்ளாறு கோயில்களில் பாரம்பரிய போர்ட்ரெய்ட் புகைப்படங்கள். மணி போட்டோகிராஃபி: +91 81110 85865.',
    shortDesc: 'Timeless temple portraits and family photography at Thirukadaiyur Abirami Temple and surrounding heritage shrines.',
    fullDesc: 'Ancient temples offer a breathtaking setting — centuries-old carved granite pillars, sacred diyas, bronze lamps, and spiritual serenity. Mani Photography offers specialized outdoor mandapam and temple courtyard portraiture for couples, families, and milestone celebrations in Thirukadaiyur and nearby Thirunallar Saneeswarar Temple.',
    image: `${import.meta.env.BASE_URL}images/temple/thirukadaiyur-amritaghateswarar-abirami-temple-photography.webp`,
    alt: 'Temple photography in Thirukadaiyur Abirami Temple outer mandapam',
    icon: '🛕',
    includes: [
      'Temple Outer Mandapam & Courtyard Shoots',
      'Traditional Silk Attire Couple Portraits',
      'Family Sacred Darshan Memory Capture',
      'Combined Thirukadaiyur & Thirunallar Packages',
      'Edited High-Resolution Gallery',
    ],
    includesTa: [
      'கோயில் வெளி மண்டபம் மற்றும் பிரகார படப்பிடிப்பு',
      'பாரம்பரிய பட்டு உடைகளில் போர்ட்ரெய்ட் ஷூட்',
      'திருக்கடையூர் & திருநள்ளாறு இணைந்து படம் பிடிக்கும் பேக்கேஜ்',
    ],
    faqs: [
      {
        question: 'Is photography allowed inside Thirukadaiyur Temple?',
        answer: 'Photography is permitted in temple mandapams, homam halls, and outer courtyards where ceremonies take place. Sanctum sanctorum photography is strictly prohibited per temple rules.',
        questionTa: 'திருக்கடையூர் கோயிலுக்குள் போட்டோ எடுக்க அனுமதி உண்டா?',
        answerTa: 'கோயில் வெளி மண்டபங்கள், ஹோம கூடங்கள் மற்றும் பிரகாரங்களில் சடங்குகள் படம்பிடிக்க அனுமதியுண்டு. மூலவர் சந்நிதியில் படம்பிடிக்க அனுமதியில்லை.'
      }
    ]
  },
  {
    id: 'wedding-videography-thirukadaiyur',
    slug: 'wedding-videography-thirukadaiyur',
    dedicatedRoute: '/wedding-videography-thirukadaiyur',
    title: 'Wedding Videography in Thirukadaiyur',
    titleTa: 'திருக்கடையூர் திருமண வீடியோகிராஃபி',
    heroTitle: 'Wedding Videography & Cinematic Films in Thirukadaiyur',
    heroTitleTa: 'திருக்கடையூர் திருமண வீடியோகிராஃபி & சினிமாட்டிக் பிலிம்ஸ்',
    metaTitle: 'Wedding Videography Thirukadaiyur | LED & 4K Cinema Films',
    metaTitleTa: 'திருக்கடையூர் திருமண வீடியோகிராஃபி | மணி போட்டோகிராஃபி',
    metaDesc: 'Cinematic wedding videography & 4K video recording in Thirukadaiyur. Covering 60th, 70th, 80th milestone weddings, traditional Tamil marriages & LED screen setups.',
    metaDescTa: 'திருக்கடையூர் திருமண வீடியோகிராஃபி, 4K சினிமாட்டிக் பிலிம்ஸ் & LED திரை அமைப்பு. 60ஆம் கல்யாணம் மற்றும் திருமண வீடியோ படப்பிடிப்பு. அழைக்க: +91 81110 85865.',
    shortDesc: 'Cinematic 4K wedding videography, traditional full-length recordings, and LED screen setups in Thirukadaiyur.',
    fullDesc: 'Relive the sound of Nadaswaram, sacred Vedic chants, joyful laughter, and emotional blessings with our cinematic wedding videography. We provide 4K UHD video recording, short teaser films, full traditional ritual videos, and live LED screen displays for weddings and milestone celebrations across Thirukadaiyur and Mayiladuthurai.',
    image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-traditional-tamil-wedding-couple.webp`,
    alt: 'Wedding videography camera setup in Thirukadaiyur',
    icon: '🎬',
    includes: [
      '4K Ultra HD Cinematic Film & Full Ritual Recording',
      'Teaser & Reel Highlights for Social Media',
      'Traditional Nadaswaram & Vedic Mantra Audio Sync',
      'Live LED Wall / TV Screen Setup for Mandapams',
      'Online Cloud & USB Drive Delivery',
    ],
    includesTa: [
      '4K அல்ட்ரா HD சினிமாட்டிக் பிலிம் & முழு வீடியோ',
      'சோஷியல் மீடியா ரீல்ஸ் & ஹைலைட்ஸ் வீடியோ',
      'லைவ் LED திரை அமைப்பு மண்டபங்களுக்கு',
      'பென் டிரைவ் மற்றும் ஆன்லைன் மூலம் வழங்குதல்',
    ],
    faqs: [
      {
        question: 'Do you provide live LED wall setups for Thirukadaiyur mandapams?',
        answer: 'Yes! We provide live LED screen setups and multi-camera live switching for Thirukadaiyur marriage halls and mandapams.',
        questionTa: 'திருக்கடையூர் மண்டபங்களுக்கு லைவ் LED திரை வசதி உள்ளதா?',
        answerTa: 'ஆம்! திருக்கடையூர் திருமண மண்டபங்களுக்கு லைவ் LED திரை அமைப்பு மற்றும் மல்டி-கேமரா லைவ் வீடியோ வசதி வழங்குகிறோம்.'
      }
    ]
  }
];

export const allServices: ServiceItem[] = [
  ...dedicatedServices,
  {
    id: 'pre-wedding',
    slug: 'pre-wedding',
    title: 'Pre-Wedding Photography',
    metaTitle: 'Pre-Wedding Photography Thirukadaiyur | Couple Shoots',
    metaTitleTa: 'Pre-Wedding போட்டோகிராஃபி | மணி போட்டோகிராஃபி',
    metaDesc: 'Romantic and creative pre-wedding photoshoot in Thirukadaiyur, Mayiladuthurai, heritage temples & beaches.',
    metaDescTa: 'திருக்கடையூர் மற்றும் பாரம்பரிய இடங்களில் Pre-Wedding தம்பதியர் புகைப்படங்கள்.',
    shortDesc: 'Beautiful couple stories created around your personality, culture and connection.',
    fullDesc: 'Before the big day, there is your story. A pre-wedding shoot is a relaxed, creative session to capture the chemistry and love between you as a couple. We choose locations that reflect your personality — from heritage architecture to temples, nature, beaches or streets.',
    image: `${import.meta.env.BASE_URL}images/pre-wedding/thirukadaiyur-pre-wedding-couple-photoshoot.webp`,
    alt: 'Pre-wedding couple photography',
    icon: '💏',
    includes: [
      'Up to 4-hour session',
      'Multiple outfit changes',
      'Location scouting',
      'Natural & posed portraits',
      'Edited high-resolution gallery',
    ],
  },
  {
    id: 'baby-shower',
    slug: 'baby-shower',
    title: 'Baby Shower Photography (Seemantham)',
    metaTitle: 'Baby Shower & Seemantham Photography Thirukadaiyur',
    metaTitleTa: 'வளைகாப்பு போட்டோகிராஃபி | மணி போட்டோகிராஃபி',
    metaDesc: 'Capturing the excitement, love and beautiful anticipation of your growing family with Seemantham & baby shower photography.',
    metaDescTa: 'திருக்கடையூரில் வளைகாப்பு (சீமந்தம்) மற்றும் மகப்பேறு புகைப்பட சேவை.',
    shortDesc: 'Capturing the excitement, love and beautiful anticipation of your growing family.',
    fullDesc: 'A baby shower (Seemantham) is a celebration of love and the beautiful anticipation of new life. We capture the joy of the ceremony, the warmth of family, the decorations and the precious moments that make this occasion unforgettable.',
    image: `${import.meta.env.BASE_URL}images/baby-shower/thirukadaiyur-seemantham-baby-shower-photography.webp`,
    alt: 'Baby shower and seemantham photography',
    icon: '🍼',
    includes: [
      'Ceremony coverage',
      'Maternity portraits',
      'Family candid photography',
      'Edited gallery delivery',
    ],
  },
  {
    id: 'house-warming',
    slug: 'house-warming',
    title: 'House Warming Photography (Griha Pravesham)',
    metaTitle: 'House Warming Photography Thirukadaiyur | Griha Pravesham',
    metaTitleTa: 'கிரகப்பிரவேசம் போட்டோகிராஃபி | மணி போட்டோகிராஃபி',
    metaDesc: 'Preserving the joy and emotions of beginning a new chapter in your new home with Griha Pravesham photography.',
    metaDescTa: 'திருக்கடையூர் மற்றும் சுற்றியுள்ள ஊர்களில் கிரகப்பிரவேச விழா புகைப்படங்கள்.',
    shortDesc: 'Preserving the joy and emotions of beginning a new chapter in your new home.',
    fullDesc: 'Griha Pravesh is one of life\'s most meaningful milestones. The kolam at the doorstep, the puja, the first steps through the door, the family gathered around — these moments deserve to be preserved with care and artistry.',
    image: `${import.meta.env.BASE_URL}images/house-warming/thirukadaiyur-grihapravesam-house-warming-photography.webp`,
    alt: 'House warming ceremony photography',
    icon: '🏠',
    includes: [
      'Full ceremony coverage',
      'Puja ritual documentation',
      'Family portraits',
      'Edited gallery delivery',
    ],
  },
  {
    id: 'family-functions',
    slug: 'family-functions',
    title: 'Family Function Photography',
    metaTitle: 'Family Function Photography Thirukadaiyur',
    metaTitleTa: 'குடும்ப விழா போட்டோகிராஃபி | மணி போட்டோகிராஃபி',
    metaDesc: 'Capturing laughter, tradition and memories at birthdays, naming ceremonies, and family gatherings in Thirukadaiyur.',
    metaDescTa: 'திருக்கடையூரில் பிறந்தநாள், பெயர் சூட்டு விழா மற்றும் குடும்ப விழாக்கள்.',
    shortDesc: 'The people, laughter and moments that make every celebration special.',
    fullDesc: 'From birthday milestones to naming ceremonies, anniversary celebrations to family portraits, we bring the same care and artistry to every occasion. Because every celebration — big or small — deserves to be beautifully remembered.',
    image: `${import.meta.env.BASE_URL}images/family/family-01.jpg`,
    alt: 'Family function photography',
    icon: '👨‍👩‍👧‍👦',
    includes: [
      'Full event coverage',
      'Group & family portraits',
      'Candid moments',
      'Edited gallery delivery',
    ],
  }
];

export default dedicatedServices;
