export interface GuidePost {
  id: string;
  slug: string;
  category: string;
  categoryTa: string;
  titleEn: string;
  titleTa: string;
  summaryEn: string;
  summaryTa: string;
  readTime: string;
  publishDate: string;
  coverImage: string;
  galleryImages: string[];
  keywords: string[];
  contentEn: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
  contentTa: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
}

export const guidesData: GuidePost[] = [
  {
    id: '1',
    slug: 'thirukadaiyur-60th-marriage-shashtiapthapoorthi-guide',
    category: '60th Marriage (Shashtiapthapoorthi)',
    categoryTa: '60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி)',
    titleEn: 'Complete Guide to 60th Marriage (Shashtiapthapoorthi) Rituals in Thirukadaiyur Temple',
    titleTa: 'திருக்கடையூர் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி) சடங்குகள் & புகைப்பட வழிகாட்டி',
    summaryEn: 'Everything you need to know about celebrating your parents 60th Wedding (Shashtiapthapoorthi) at Thirukadaiyur Amritaghateswarar Abirami Temple — Kalasa Abhishekam, Mangalya Dharanam, and Photography Tips.',
    summaryTa: 'திருக்கடையூர் அமிர்தகடேஸ்வரர் அபிராமி அம்மன் கோயிலில் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி) நடத்தும் முறை, கலச அபிஷேகம், மாங்கல்ய தாரணம் மற்றும் புகைப்பட வழிகாட்டி.',
    readTime: '6 min read',
    publishDate: '2026-09-05',
    coverImage: '/images/guides/shashtiapthapoorthi-60th.png',
    galleryImages: [
      '/images/guides/shashtiapthapoorthi-60th.png',
      '/images/tamil-weddings/tamil-01.jpg',
      '/images/temple/temple-01.jpg'
    ],
    keywords: [
      'Thirukadaiyur 60th wedding photography',
      'Shashtiapthapoorthi photographer Thirukadaiyur',
      'Thirukadaiyur 60th marriage procedure',
      'Kalasa Abhishekam Thirukadaiyur',
      '60ஆம் கல்யாணம் திருக்கடையூர்',
      'சஷ்டியப்தபூர்த்தி போட்டோகிராபி'
    ],
    contentEn: {
      intro: 'Thirukadaiyur Sri Amritaghateswarar Abirami Temple in Mayiladuthurai district is world-renowned as the most sacred place for celebrating Shashtiapthapoorthi (completion of 60 years / 60th Wedding Anniversary). Lord Shiva defeated Yama (the god of death) here to protect Markandeya, bestowing the blessing of longevity (Ayush). Celebrating your parents 60th marriage here brings good health, divine grace, and family prosperity.',
      sections: [
        {
          heading: '1. Significance of Shashtiapthapoorthi (60th Marriage)',
          body: 'When a person reaches 60 years of age (specifically entering the 61st year), one complete cycle of 60 Tamil years in the Hindu calendar is completed. Performing Shashtiapthapoorthi at Thirukadaiyur cleanses past karmas and invokes the blessings of Lord Amritaghateswarar, Goddess Abirami, and the Ashtadikkpalakas for long life (Ayush Homam).'
        },
        {
          heading: '2. Key Sacred Rituals Included in the Ceremony',
          body: 'The 60th marriage ritual consists of several grand Vedic homams and sacred re-marriage ceremonies:',
          bulletPoints: [
            'Ganapathy Homam, Navagraha Homam & Ayush Homam to invoke health and long life.',
            'Kalasa Sthapana & Kalasa Abhishekam: 60, 108, or 368 holy water pots (Kalasams) blessed with mantras and poured over the couple.',
            'Mangalya Dharanam: The husband re-ties the sacred Thaali (Mangalsutra) around his wife’s neck amidst divine nadaswaram music.',
            'Garland Exchange (Maalai Maatral) & Ring Exchange representing eternal companionship.',
            'Dharshan of Goddess Abirami & Lord Amritaghateswarar followed by taking blessings from elders and family members.'
          ]
        },
        {
          heading: '3. Essential Photography Moments to Capture',
          body: 'At Mani Photography, we specialize in capturing the emotional essence of Shashtiapthapoorthi weddings without disturbing sacred homams:',
          bulletPoints: [
            'Kalasa Abhishekam Water Drops: High-speed candid capture of holy water poured over the couple.',
            'Mangalya Dharanam Moment: The exact second of Thaali re-tying with family members showering flowers.',
            'Multi-Generational Portraits: Grandparents with children, daughters-in-law, sons-in-law, and grandchildren.',
            'Temple Outer Mantapam Portraits: Traditional saree and dhoti portraits against ancient temple stone pillars.'
          ]
        },
        {
          heading: '4. Best Timings & Planning Tips',
          body: 'Morning slots (6:00 AM to 11:30 AM) are ideal for performing Ayush Homam and Kalasa Abhishekam inside or near temple mandapams. We recommend booking mandapams and photography at least 2–4 weeks in advance, especially during auspicious muhurtham days.'
        }
      ],
      faqs: [
        {
          question: 'What is the best photographer for 60th marriage in Thirukadaiyur?',
          answer: 'Mani Photography Thirukadaiyur (+91 93602 93815) is the leading specialist photographer for 60th Marriage (Shashtiapthapoorthi), 70th & 80th (Sadabishegam) milestone weddings at Amritaghateswarar Abirami Temple.'
        },
        {
          question: 'Is photography allowed inside Thirukadaiyur Temple?',
          answer: 'Photography is permitted in the mandapams, homam halls, and outer temple courtyards where ceremonies take place. Sanctum sanctorum photography is strictly prohibited per temple guidelines.'
        }
      ]
    },
    contentTa: {
      intro: 'மயிலாடுதுறை மாவட்டம் திருக்கடையூர் அருள்மிகு அமிர்தகடேஸ்வரர் அபிராமி அம்மன் திருக்கோயில் 60ஆம் கல்யாணம் (சஷ்டியப்தபூர்த்தி) நடத்த உலகப் புகழ்பெற்ற திருத்தலமாகும். மார்க்கண்டேயனுக்காக எமனையே உதைத்து நீண்ட ஆயுளை இறைவன் அளித்த தலம் இதுவாகும். உங்கள் பெற்றோரின் 60வது பிறந்தநாள் / திருமண நாளை இங்கு கொண்டாடுவது அவர்களுக்கு நோயற்ற வாழ்வும் நீண்ட ஆயுளும் தரும்.',
      sections: [
        {
          heading: '1. சஷ்டியப்தபூர்த்தி (60ஆம் கல்யாணம்) முக்கியத்துவம்',
          body: 'ஒருவர் 60 வயதை நிறைவு செய்து 61வது வயதில் அடிஎடுத்து வைக்கும் போது தமிழ் ஆண்டின் 60 வருட சுழற்சி நிறைகின்றது. திருக்கடையூரில் ஆயுஷ் ஹோமம் மற்றும் கலசாபிஷேகம் செய்வதன் மூலம் ஆயுள் விருத்தியும் அபிராமி அம்மனின் பரிபூரண அருளும் கிடைக்கும்.'
        },
        {
          heading: '2. சஷ்டியப்தபூர்த்தி சடங்குகள்',
          body: 'இந்த புனித விழாவில் நடைபெறும் முக்கியமான வேத சடங்குகள்:',
          bulletPoints: [
            'கணபதி ஹோமம், நவகிரக ஹோமம் மற்றும் ஆயுஷ் ஹோமம்.',
            'கலச ஸ்தாபனம் & கலசாபிஷேகம்: 60 அல்லது 108 புனிதநீர் கலசங்கள் கொண்டு தம்பதியருக்கு அபிஷேகம்.',
            'மாங்கல்ய தாரணம்: கணவர் தன் மனைவிக்கு மீண்டும் திருமாங்கல்யம் சூட்டுதல்.',
            'மாலை மாற்றுதல் & மோதிரம் அணிவித்தல்.',
            'அபிராமி அம்மன் & அமிர்தகடேஸ்வரர் தரிசனம் மற்றும் குடும்பத்தினரின் ஆசி பெறுதல்.'
          ]
        },
        {
          heading: '3. புகைப்படத்தில் தவறவிடக் கூடாத தருணங்கள்',
          body: 'மணி போட்டோகிராஃபியில் சடங்குகளுக்கு இடையூறு இல்லாமல் உணர்வுபூர்வமான தருணங்களைப் பதிவு செய்கிறோம்:',
          bulletPoints: [
            'கலசாபிஷேக நீர் சொட்டும் தருணம்.',
            'மாங்கல்ய தாரணத்தின் போது உறவினர்கள் அட்சதை தூவும் காட்சி.',
            'மூன்று தலைமுறை குடும்பப் படங்கள் (தாத்தா-பாட்டி, பிள்ளைகள், பேரக்குழந்தைகள்).',
            'திருக்கடையூர் கோயில் மண்டப பின்னணியில் பாரம்பரிய புகைப்படங்கள்.'
          ]
        }
      ]
    }
  },
  {
    id: '2',
    slug: 'thirukadaiyur-80th-marriage-sadabishegam-guide',
    category: '80th Marriage (Sadabishegam)',
    categoryTa: '80ஆம் கல்யாணம் (சதாபிஷேகம்)',
    titleEn: '80th Marriage (Sadabishegam) & 70th (Bhimaratha Shanthi) Photography Guide',
    titleTa: 'திருக்கடையூர் 80ஆம் கல்யாணம் (சதாபிஷேகம்) & 70ஆம் கல்யாணம் புகைப்பட வழிகாட்டி',
    summaryEn: 'Guide to celebrating Sadabishegam (seeing 1,000 full moons / 80th Marriage) and Bhimaratha Shanthi (70th Birthday) at Thirukadaiyur Temple with family portraits and photography tips.',
    summaryTa: '1000 பௌர்ணமிகளைக் கண்ட பாக்கியசாலிகளான பெற்றோருக்கு திருக்கடையூரில் சதாபிஷேகம் (80ஆம் கல்யாணம்) மற்றும் பீமரத சாந்தி (70ஆம் கல்யாணம்) நடத்தும் முறை.',
    readTime: '5 min read',
    publishDate: '2026-09-06',
    coverImage: '/images/guides/sadabishegam-80th.png',
    galleryImages: [
      '/images/guides/sadabishegam-80th.png',
      '/images/tamil-weddings/tamil-02.jpg',
      '/images/family/family-01.jpg'
    ],
    keywords: [
      'Sadabishegam photographer Thirukadaiyur',
      '80th wedding photography Thirukadaiyur',
      'Bhimaratha Shanthi 70th wedding photographer',
      '80ஆம் கல்யாணம் சதாபிஷேகம்',
      'பீமரத சாந்தி திருக்கடையூர்'
    ],
    contentEn: {
      intro: 'Reaching 80 years of age means experiencing 1,000 full moons (Sahasra Chandra Darshan). Celebrating Sadabishegam (80th Wedding) or Bhimaratha Shanthi (70th Birthday) at Thirukadaiyur Temple is a rare, divine blessing for the entire family. It is a moment of deep gratitude where children and grandchildren gather to honor the patriarch and matriarch of the family.',
      sections: [
        {
          heading: '1. What is Sadabishegam (80th Marriage)?',
          body: 'Sadabishegam is performed upon completion of 80 years of age. Having witnessed 1,000 full moons, the couple is considered living devas whose blessings bring immensurable fortune to children, grandchildren, and great-grandchildren.'
        },
        {
          heading: '2. Multi-Generational Family Photography',
          body: 'Sadabishegam ceremonies usually bring together 3 to 4 generations of family members under one roof in Thirukadaiyur. Our photography focuses heavily on candid smiles, traditional feet-touching blessings (Pada Pooja), and grand group portraits.'
        }
      ]
    },
    contentTa: {
      intro: '80 வயதை எட்டுவது என்பது 1000 பௌர்ணமிகளைக் கண்ட அபூர்வ பாக்கியமாகும் (சஹஸ்ர சந்திர தர்சனம்). திருக்கடையூர் தலத்தில் சதாபிஷேகம் (80ஆம் கல்யாணம்) அல்லது பீமரத சாந்தி (70ஆம் கல்யாணம்) நடத்துவது அந்த குடும்பத்திற்கே பேரருள் ஆகும்.',
      sections: [
        {
          heading: '1. சதாபிஷேகம் (80ஆம் கல்யாணம்) சிறப்புகள்',
          body: '80 வயது நிறைவடைந்த தம்பதியரை வணங்கி ஆசி பெறுவது அவர்களின் பிள்ளைகள், பேரக் குழந்தைகள் மற்றும் கொள்ளுப் பேரக் குழந்தைகளுக்கு பெரும் நன்மைகளைத் தரும்.'
        }
      ]
    }
  },
  {
    id: '3',
    slug: 'thirukadaiyur-temple-photography-rules-timings-tips',
    category: 'Temple Photography Tips',
    categoryTa: 'கோயில் போட்டோகிராபி உதவிக்குறிப்புகள்',
    titleEn: 'Best Timings, Temple Etiquette & Photography Tips for Thirukadaiyur Temple',
    titleTa: 'திருக்கடையூர் கோயில் போட்டோகிராபி நேரங்கள், விதிகள் & குறிப்புகள்',
    summaryEn: 'Essential guide for families visiting Thirukadaiyur — morning homam timings, traditional clothing guidelines, mandapam selection, and professional photography booking advice.',
    summaryTa: 'திருக்கடையூர் வரும் குடும்பங்களுக்கான வழிகாட்டி — காலை ஹோம நேரங்கள், ஆடை கட்டுப்பாடுகள், மண்டபத் தேர்வு மற்றும் போட்டோகிராபி குறிப்புகள்.',
    readTime: '4 min read',
    publishDate: '2026-09-07',
    coverImage: '/images/temple/temple-01.jpg',
    galleryImages: [
      '/images/temple/temple-01.jpg',
      '/images/temple/temple-02.jpg',
      '/images/temple/temple-03.jpg'
    ],
    keywords: [
      'Thirukadaiyur temple photography rules',
      'Thirukadaiyur temple darshan timing',
      'Thirukadaiyur mandapam photography',
      'திருக்கடையூர் கோயில் நேரங்கள்'
    ],
    contentEn: {
      intro: 'Planning a trip to Thirukadaiyur for a milestone ceremony requires proper coordination of temple darshan timings, homam mandapams, travel, and professional photography.',
      sections: [
        {
          heading: '1. Best Photography Hours in Thirukadaiyur',
          body: 'Early morning hours (6:00 AM – 9:00 AM) offer soft golden sunlight around temple outer courtyards and mandapams, ideal for crisp traditional family portraits.'
        },
        {
          heading: '2. Traditional Attire Recommendations',
          body: 'Pattu Veshti (Silk Dhoti & Angavastram) for men and Kanchipuram Silk Sarees for women enhance the royal traditional look in photographs.'
        }
      ]
    },
    contentTa: {
      intro: 'திருக்கடையூரில் சிறப்பு சடங்குகளைத் திட்டமிடும் போது கோயில் தரிசன நேரங்கள், ஹோம மண்டபங்கள் மற்றும் புகைப்படக் கலைஞரை சரியாகத் தேர்ந்தெடுப்பது அவசியமாகும்.',
      sections: [
        {
          heading: '1. சிறந்த புகைப்பட நேரங்கள்',
          body: 'காலை 6:00 மணி முதல் 9:00 மணி வரை கோயில் வெளி மண்டபங்களில் இயற்கை வெளிச்சத்தில் படங்கள் எடுக்க சிறந்த நேரமாகும்.'
        }
      ]
    }
  },
  {
    id: '4',
    slug: 'thirunallar-saneeswarar-temple-parihara-pooja-photography-guide',
    category: 'Thirunallar Saneeswarar Temple',
    categoryTa: 'திருநள்ளாறு சனீஸ்வரன் கோயில்',
    titleEn: 'Thirunallar Saneeswarar Temple Parihara Pooja & Photography Guide',
    titleTa: 'திருநள்ளாறு சனீஸ்வரன் கோயில் பரிகார பூஜை & புகைப்பட வழிகாட்டி',
    summaryEn: 'Complete guide to Thirunallar Sri Darbaranyeswarar Saneeswara Temple — Nala Theertham holy bath, Til Homam / Parihara Pooja, Saturday rush timings, and professional family photography.',
    summaryTa: 'திருநள்ளாறு ஸ்ரீ தர்பாரண்யேஸ்வரர் சனீஸ்வரன் கோயிலில் எள்ளு தீபம், நள தீர்த்த குளியல், பரிகார பூஜைகள் மற்றும் போட்டோகிராஃபி விவரங்கள்.',
    readTime: '5 min read',
    publishDate: '2026-09-08',
    coverImage: '/images/guides/thirunallar-temple.png',
    galleryImages: [
      '/images/guides/thirunallar-temple.png',
      '/images/temple/temple-02.jpg',
      '/images/temple/temple-03.jpg'
    ],
    keywords: [
      'Thirunallar Saneeswarar Temple photography',
      'Thirunallar photographer',
      'Thirunallar Parihara Pooja photographer',
      'Nala Theertham Thirunallar',
      'திருநள்ளாறு சனீஸ்வரன் கோயில் போட்டோகிராஃபி',
      'திருநள்ளாறு பரிகார பூஜை'
    ],
    contentEn: {
      intro: 'Located just 25 km from Thirukadaiyur in Karaikal, Thirunallar Sri Darbaranyeswarar Saneeswarar Temple is world-famous as the foremost temple for Lord Shani (Saneeswara Bhagavan). Devotees visit Thirunallar to perform Parihara Poojas, take a holy dip in Nala Theertham to dispel Saturn doshas, and seek health, wealth, and peace for their families.',
      sections: [
        {
          heading: '1. Significance of Thirunallar Saneeswarar Temple',
          body: 'Lord Shani resides as a benevolent deity (Anugraha Murthy) in Thirunallar. It is the sacred sthalam where King Nala was liberated from Saturn’s influence after bathing in Nala Theertham.'
        },
        {
          heading: '2. Major Rituals & Family Photography Moments',
          body: 'Our photography service covers all important family moments during your Thirunallar visit:',
          bulletPoints: [
            'Nala Theertham Sacred Dip: Documenting family members after taking the holy bath.',
            'Til Deepam (Sesame Oil Lamps): Warm candid portraits as family members light sesame oil lamps.',
            'Saneeswara Abhishekam & Archana: Documenting temple visit and family traditional portraits.',
            'Combined Thirukadaiyur & Thirunallar Package: Full day photography covering both sacred temples.'
          ]
        },
        {
          heading: '3. Saturday Rush & Best Visiting Timings',
          body: 'Saturdays are peak days at Thirunallar. For peaceful family photography and quick darshan, early morning hours (5:00 AM – 8:00 AM) or weekdays (Monday to Thursday) are highly recommended.'
        }
      ],
      faqs: [
        {
          question: 'Do you offer photography coverage for Thirunallar Temple trips from Thirukadaiyur?',
          answer: 'Yes! Mani Photography (+91 93602 93815) provides full-day combined photography packages covering both Thirukadaiyur Abirami Temple and Thirunallar Saneeswarar Temple.'
        }
      ]
    },
    contentTa: {
      intro: 'திருக்கடையூரில் இருந்து வெறும் 25 கி.மீ தொலைவில் காரைக்காலில் அமைந்துள்ள திருநள்ளாறு ஸ்ரீ தர்பாரண்யேஸ்வரர் சனீஸ்வரன் கோயில் நள தீர்த்தத்தில் நீராடி சனீஸ்வர பகவானை தரிசித்து ஏழரை சனி, அஷ்டம சனி தோஷங்களிலிருந்து நிவாரணம் பெற லட்சக்கணக்கான பக்தர்கள் வரும் தலமாகும்.',
      sections: [
        {
          heading: '1. திருநள்ளாறு சனீஸ்வரன் கோயில் சிறப்புகள்',
          body: 'நள சக்கரவர்த்தி சனீஸ்வரனின் பிடியிலிருந்து விடுபட்டு அமைதி பெற்ற புனிதத் தலம் இதுவாகும். இங்கு எள்ளு தீபம் ஏற்றி வழிபடுவது குடும்பத்திற்கு பெரு நன்மைகளைத் தரும்.'
        },
        {
          heading: '2. சனீஸ்வரன் கோயில் சடங்குகள் & போட்டோகிராஃபி',
          body: 'மணி போட்டோகிராஃபி மூலம் திருக்கடையூர் மற்றும் திருநள்ளாறு இரண்டு கோயில்களையும் ஒரே நாளில் கவர் செய்யும் சிறப்பு புகைப்பட பேக்கேஜ்கள் வழங்கப்படுகின்றன.'
        }
      ]
    }
  },
  {
    id: '5',
    slug: 'how-to-reach-thirukadaiyur-travel-guide-bus-train-car-flight',
    category: 'Travel & Routes Guide',
    categoryTa: 'பயண வழிகாட்டி',
    titleEn: 'How to Reach Thirukadaiyur Temple: Complete Directions by Flight, Train, Bus & Car',
    titleTa: 'திருக்கடையூர் கோயில் அடைவது எப்படி? பஸ், ரயில், கார் & விமான பயண வழிகாட்டி',
    summaryEn: 'Complete travel route guide to Thirukadaiyur Amritaghateswarar Abirami Temple from Chennai, Bangalore, Trichy, Coimbatore, Pondicherry, and overseas via Flight, Train, Bus, and Self-drive Car.',
    summaryTa: 'சென்னை, பெங்களூரு, திருச்சி, கோயம்புத்தூர் போன்ற நகரங்களில் இருந்து திருக்கடையூர் அமிர்தகடேஸ்வரர் கோயிலுக்கு பஸ், ரயில், கார் மற்றும் விமானம் மூலம் வரும் முழுமையான பயண வழிகாட்டி.',
    readTime: '6 min read',
    publishDate: '2026-09-09',
    coverImage: '/images/temple/temple-01.jpg',
    galleryImages: [
      '/images/temple/temple-01.jpg',
      '/images/temple/temple-02.jpg',
      '/images/guides/thirunallar-temple.png'
    ],
    keywords: [
      'How to reach Thirukadaiyur',
      'Nearest airport to Thirukadaiyur',
      'Nearest railway station to Thirukadaiyur',
      'Chennai to Thirukadaiyur route',
      'Bangalore to Thirukadaiyur bus car train',
      'திருக்கடையூர் பஸ் ரயில் வழிகள்',
      'திருக்கடையூர் செல்ல வழி'
    ],
    contentEn: {
      intro: 'Thirukadaiyur Sri Amritaghateswarar Abirami Temple is situated in Mayiladuthurai District along the East Coast of Tamil Nadu, located between Sirkazhi and Karaikal. Whether you are traveling from major Indian metros like Chennai, Bangalore, and Hyderabad, or flying in from abroad (USA, Singapore, Malaysia) for your parents 60th, 70th, or 80th wedding ceremony, here is the complete step-by-step travel route guide by Air, Train, Bus, and Car.',
      sections: [
        {
          heading: '1. By Flight / Air (Nearest Airports)',
          body: 'For NRI families and devotees flying in from outside Tamil Nadu:',
          bulletPoints: [
            'Tiruchirappalli International Airport (TRZ) - NEAREST AIRPORT (~145 km, 3.5 hrs drive): Direct international flights from Singapore, Malaysia, Dubai, Colombo, and domestic connections from major Indian cities. Taxis & buses available from Trichy Airport directly to Thirukadaiyur via Thanjavur & Kumbakonam.',
            'Chennai International Airport (MAA) (~285 km, 6 hrs drive): Major international hub with direct flights nationwide and globally. From Chennai, you can take a private taxi via ECR (East Coast Road), a direct train to Mayiladuthurai, or an AC sleeper bus.',
            'Puducherry Airport (PNY) (~130 km, 3 hrs drive): Regional airport with flights from Bangalore and Hyderabad. From Pondicherry, take ECR highway to Thirukadaiyur via Cuddalore & Chidambaram.'
          ]
        },
        {
          heading: '2. By Train (Nearest Railway Stations)',
          body: 'Traveling by train is comfortable and convenient for families traveling with elders:',
          bulletPoints: [
            'Mayiladuthurai Junction (MV) - NEAREST MAJOR RAILWAY STATION (~24 km, 35 mins drive): Connected directly with daily express and superfast trains from Chennai Egmore (Chozhan Express, Uzhavan Express, Rockfort Express), Bangalore (Mysore-Mayiladuthurai Express), Coimbatore (Janshatabdi Express), Trichy, and Madurai. Taxis and local buses run every 10 minutes from Mayiladuthurai station to Thirukadaiyur.',
            'Sirkazhi Railway Station (SY) (~30 km, 40 mins drive): Stops for several express trains on the Main Line.',
            'Karaikal Railway Station (KIK) (~25 km, 35 mins drive): Convenient if coming via Nagapattinam / Velankanni railway line.'
          ]
        },
        {
          heading: '3. By Bus (Direct Government & Private Buses)',
          body: 'Thirukadaiyur is located directly on the Main East Coast Highway (ECR / State Highway 49) connecting Chidambaram and Karaikal:',
          bulletPoints: [
            'From Chennai (CMBT / Kilambakkam Bus Terminus): Frequent SETC, PRTC, and luxury AC Sleeper buses (KPN, Rathimeena, Universal) operate directly from Chennai to Thirukadaiyur / Karaikal / Nagapattinam via ECR or Vikravandi-Jayankondam route (Travel time: 6 to 7 hours).',
            'From Bangalore (Shantinagar / Satellite Bus Stand): KSRTC and private AC sleeper buses operate daily night buses to Mayiladuthurai and Karaikal.',
            'From Pondicherry, Cuddalore, Chidambaram, Kumbakonam, Thanjavur, Trichy, Coimbatore, and Madurai: Continuous government and private buses available throughout the day.',
            'Local Shuttle Buses: Local buses ply every 10 minutes between Mayiladuthurai New Bus Stand and Karaikal / Nagapattinam, dropping passengers right in front of the Thirukadaiyur Temple bus stop.'
          ]
        },
        {
          heading: '4. By Car / Taxi / Driving Directions',
          body: 'Driving to Thirukadaiyur is a pleasant journey through coastal countryside and temple towns. Recommended driving routes:',
          bulletPoints: [
            'From Chennai (~285 km | 6 Hours): Route 1 (Scenic ECR): Chennai → Mahabalipuram → Puducherry → Cuddalore → Chidambaram → Sirkazhi → Thirukadaiyur. Route 2 (NH32 via Panruti): Chennai → Tindivanam → Vikravandi → Panruti → Vridhachalam → Jayankondam → Mayiladuthurai → Thirukadaiyur.',
            'From Bangalore (~430 km | 8.5 Hours): Bangalore → Hosur → Krishnagiri → Dharmapuri → Salem → Attur → Perambalur → Jayankondam → Mayiladuthurai → Thirukadaiyur.',
            'From Trichy (~145 km | 3.5 Hours): Trichy → Thanjavur → Kumbakonam → Mayiladuthurai → Thirukadaiyur.',
            'From Coimbatore (~330 km | 7 Hours): Coimbatore → Karur → Trichy → Thanjavur → Kumbakonam → Mayiladuthurai → Thirukadaiyur.'
          ]
        },
        {
          heading: '5. Photography & Accommodation Arrangements',
          body: 'Once you reach Thirukadaiyur, we recommend reaching your lodge or homam mandapam at least 1 to 2 hours prior to your scheduled muhurtham time. Mani Photography (+91 93602 93815) provides end-to-end photography coverage right from your hotel arrival, mandapam homam, Kalasa Abhishekam, Mangalya Dharanam, to outer temple portraits.'
        }
      ],
      faqs: [
        {
          question: 'What is the nearest airport to Thirukadaiyur Temple?',
          answer: 'Tiruchirappalli International Airport (TRZ) is the nearest airport to Thirukadaiyur, located approximately 145 km away (3.5 hours drive by taxi or bus).'
        },
        {
          question: 'What is the nearest railway station to Thirukadaiyur?',
          answer: 'Mayiladuthurai Junction (MV) is the nearest major railway station, located just 24 km from Thirukadaiyur Temple. Buses and taxis are available outside the station every 10 minutes.'
        }
      ]
    },
    contentTa: {
      intro: 'திருக்கடையூர் ஸ்ரீ அமிர்தகடேஸ்வரர் அபிராமி அம்மன் திருக்கோயில் மயிலாடுதுறை மாவட்டத்தில் சீர்காழிக்கும் காரைக்காலுக்கும் இடையே கிழக்கு கடற்கரை சாலையில் அமைந்துள்ளது. சென்னை, பெங்களூரு, கோவை, திருச்சி போன்ற நகரங்களில் இருந்தும் அல்லது வெளிநாடுகளில் இருந்தும் 60, 70, 80ஆம் கல்யாண விழாக்களுக்காக குடும்பத்துடன் வருவோருக்கான முழுமையான பயண வழிகாட்டி இதோ.',
      sections: [
        {
          heading: '1. விமானம் மூலம் வருவதற்கு (அருகில் உள்ள விமான நிலையங்கள்)',
          body: 'வெளிநாடுகள் மற்றும் பிற மாநிலங்களிலிருந்து வருவோருக்கு அருகில் உள்ள விமான நிலையங்கள்:',
          bulletPoints: [
            'திருச்சி சர்வதேச விமான நிலையம் (TRZ) - மிக அருகில் உள்ள விமான நிலையம் (~145 கி.மீ, 3.5 மணி நேரம்): சிங்கப்பூர், மலேசியா, துபாய் மற்றும் இந்திய நகரங்களிலிருந்தும் நேரடி விமானங்கள் உள்ளன. திருச்சியில் இருந்து கார்/டாக்ஸி மூலம் தஞ்சாவூர்-கும்பகோணம் வழியாக திருக்கடையூர் வரலாம்.',
            'சென்னை சர்வதேச விமான நிலையம் (MAA) (~285 கி.மீ, 6 மணி நேரம்): சென்னையில் இருந்து ECR கடற்கரை சாலை வழியாக கார், நேரடி ரயில் அல்லது ஏசி பஸ் மூலம் திருக்கடையூர் வரலாம்.',
            'புதுச்சேரி விமான நிலையம் (PNY) (~130 கி.மீ, 3 மணி நேரம்): பெங்களூரு மற்றும் ஹைதராபாத்திலிருந்து விமானங்கள் இயக்கப்படுகின்றன.'
          ]
        },
        {
          heading: '2. ரயில் மூலம் வருவதற்கு (அருகில் உள்ள ரயில் நிலையங்கள்)',
          body: 'வயதான பெற்றோருடன் பயணிப்பவர்களுக்கு ரயில் பயணம் மிகவும் வசதியானது:',
          bulletPoints: [
            'மயிலாடுதுறை ஜங்ஷன் (MV) - மிக அருகில் உள்ள பிரதான ரயில் நிலையம் (~24 கி.மீ, 35 நிமிடங்கள்): சென்னை எழும்பூர் (சோழன் எக்ஸ்பிரஸ், உழவன் எக்ஸ்பிரஸ், ராக்ஃபோர்ட்), பெங்களூரு, கோயம்புத்தூர், திருச்சி, மதுரையில் இருந்து தினசரி ரயில்கள் உள்ளன. மயிலாடுதுறை ரயில் நிலையத்திலிருந்து 10 நிமிடத்திற்கு ஒருமுறை திருக்கடையூருக்கு பஸ் மற்றும் டாக்ஸிகள் கிடைக்கின்றன.',
            'சீர்காழி ரயில் நிலையம் (SY) (~30 கி.மீ).',
            'காரைக்கால் ரயில் நிலையம் (KIK) (~25 கி.மீ).'
          ]
        },
        {
          heading: '3. பஸ் மூலம் வருவதற்கு (அரசு & தனியார் பேருந்துகள்)',
          body: 'திருக்கடையூர் கிழக்கு கடற்கரை சாலையில் (ECR) நேரிடையாக அமைந்துள்ளது:',
          bulletPoints: [
            'சென்னையிலிருந்து (கிளாம்பாக்கம் / கோயம்பேடு): SETC, PRTC மற்றும் தனியார் ஸ்லீப்பர் பஸ்கள் நேரடி திருக்கடையூர் / காரைக்கால் பேருந்துகள் இயங்குகின்றன.',
            'பெங்களூருவில் இருந்து: KSRTC மற்றும் பிரைவேட் ஸ்லீப்பர் பஸ்கள் மயிலாடுதுறை/காரைக்காலுக்கு தினமும் இரவு இயக்கப்படுகின்றன.',
            'திருச்சி, கும்பகோணம், தஞ்சாவூர், புதுச்சேரி, கோவை, மதுரையிலிருந்து: தொடர்ச்சியான பேருந்து வசதிகள் உள்ளன.'
          ]
        },
        {
          heading: '4. கார் / டாக்ஸி சுயப் பயணம் செய்வோருக்கு',
          body: 'காரில் திருக்கடையூர் வருவதற்கான சிறந்த பாதைகள்:',
          bulletPoints: [
            'சென்னையிலிருந்து (285 கி.மீ | 6 மணி நேரம்): ECR சாலை வழி: சென்னை → மகாபலிபுரம் → புதுச்சேரி → கடலூர் → молоко → சிதம்பரம் → சீர்காழி → திருக்கடையூர்.',
            'பெங்களூருவிலிருந்து (430 கி.மீ | 8.5 மணி நேரம்): பெங்களூரு → சேலம் → ஆத்தூர் → பெரம்பலூர் → ஜெயங்கொண்டம் → மயிலாடுதுறை → திருக்கடையூர்.',
            'திருச்சியிலிருந்து (145 கி.மீ | 3.5 மணி நேரம்): திருச்சி → தஞ்சாவூர் → கும்பகோணம் → மயிலாடுதுறை → திருக்கடையூர்.'
          ]
        }
      ]
    }
  }
];

export default guidesData;

