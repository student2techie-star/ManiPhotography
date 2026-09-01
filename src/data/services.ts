// ============================================================
// SERVICES DATA
// ============================================================

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  alt: string;
  includes: string[];
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: 'shashti-poorthi',
    slug: 'shashti-poorthi',
    title: '60th & 80th Wedding Photography (Sashtiapthapoorthi & Sathabishegam)',
    shortDesc: 'Thirukadaiyur specialists for 60th (Shashtiapthapoorthi) and 80th (Sathabishegam) milestone weddings.',
    fullDesc:
      'Thirukadaiyur is world-renowned for sacred milestone wedding ceremonies — Shashtiapthapoorthi (60th Wedding), Bheemaratha Shanthi (70th Wedding), Sathabishegam (80th Wedding) and Kanakabhishekam. Based right in Thirukadaiyur, we are specialists in documenting these divine rituals, sacred kalasa abhishekam, re-tying of the thaali, family blessings and emotional multi-generational moments.',
    image: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-01.jpg`,
    alt: '60th and 80th wedding photography Thirukadaiyur',
    icon: '👑',
    includes: [
      'Thirukadaiyur Temple & Mandapam Coverage',
      'Kalasa Abhishekam ritual photography',
      'Mangalya Dharanam (re-tying of thaali) coverage',
      'Multi-generational family portraits',
      'Grandchildren & children blessing portraits',
      'High-resolution edited gallery',
      'Cinematic video recording optional',
    ],
  },
  {
    id: 'wedding-photography',
    slug: 'wedding-photography',
    title: 'Wedding Photography',
    shortDesc: 'From the first ritual to the final celebration, every emotion captured naturally.',
    fullDesc:
      'Your wedding day is one of the most important days of your life. We document every precious ritual, quiet glance, tearful blessing and joyful celebration with sensitivity and artistry. Our approach blends candid storytelling with timeless portraits to give you a complete visual narrative of your day.',
    image: `${import.meta.env.BASE_URL}images/weddings/wedding-01.jpg`,
    alt: 'Tamil wedding photography',
    icon: '💍',
    includes: [
      'Full day coverage',
      'Candid & traditional photography',
      'Bride & groom portraits',
      'Family & group portraits',
      'Reception photography',
      'Edited high-resolution gallery',
      'Online gallery delivery',
    ],
  },
  {
    id: 'wedding-cinematography',
    slug: 'wedding-cinematography',
    title: 'Wedding Cinematography',
    shortDesc: 'Cinematic wedding films that preserve every emotion, ritual and celebration.',
    fullDesc:
      'Beyond photographs, our cinematic wedding films bring your story to life. From the emotional muhurtham to the lively reception, we craft films that you will treasure for generations. Our approach is documentary-style — real, authentic and beautifully edited.',
    image: `${import.meta.env.BASE_URL}images/weddings/wedding-02.jpg`,
    alt: 'Wedding cinematography',
    icon: '🎬',
    includes: [
      'Full day filming',
      'Cinematic highlight film',
      'Full ceremony recording',
      'Drone footage (where permitted)',
      'Professionally edited video',
      'Online video delivery',
    ],
  },
  {
    id: 'pre-wedding',
    slug: 'pre-wedding',
    title: 'Pre-Wedding Photography',
    shortDesc: 'Beautiful couple stories created around your personality, culture and connection.',
    fullDesc:
      'Before the big day, there is your story. A pre-wedding shoot is a relaxed, creative session to capture the chemistry and love between you as a couple. We choose locations that reflect your personality — from heritage architecture to temples, nature, beaches or streets.',
    image: `${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-01.jpg`,
    alt: 'Pre-wedding couple photography',
    icon: '💏',
    includes: [
      'Up to 4-hour session',
      'Multiple outfit changes',
      'Location scouting',
      'Natural & posed portraits',
      'Edited high-resolution gallery',
      'Online delivery',
    ],
  },
  {
    id: 'tamil-traditional',
    slug: 'tamil-traditional',
    title: 'Tamil Traditional Photography',
    shortDesc: 'Authentic photography celebrating Tamil traditions, rituals and heritage.',
    fullDesc:
      'Tamil weddings are rich with tradition, ritual and emotion. From the sacred thaali ceremony to the joyful oonjal, from kanyadanam to the garland exchange, we document every ritual with cultural sensitivity and photographic artistry. Your traditions deserve to be preserved beautifully.',
    image: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-01.jpg`,
    alt: 'Tamil traditional wedding photography',
    icon: '🪔',
    includes: [
      'Complete ritual documentation',
      'Muhurtham photography',
      'Thaali ceremony coverage',
      'Family ritual portraits',
      'Traditional couple portraits',
      'High-resolution edited gallery',
    ],
  },
  {
    id: 'temple-photography',
    slug: 'temple-photography',
    title: 'Temple Photography',
    shortDesc: 'Timeless portraits surrounded by architecture, tradition and spirituality.',
    fullDesc:
      'Ancient temples provide an extraordinary backdrop — carved stone pillars, flickering diyas, marigold garlands and the atmosphere of centuries of tradition. Our temple photography sessions create timeless, magazine-quality portraits that honour both the location and the person.',
    image: `${import.meta.env.BASE_URL}images/temple/temple-01.jpg`,
    alt: 'Temple photography portraits',
    icon: '🛕',
    includes: [
      'Up to 3-hour session',
      'Location-specific photography',
      'Traditional & editorial portraits',
      'Edited high-resolution gallery',
    ],
  },
  {
    id: 'engagement',
    slug: 'engagement',
    title: 'Engagement Photography',
    shortDesc: 'The beginning of your forever — captured with joy and emotion.',
    fullDesc:
      'An engagement ceremony marks the beautiful beginning of a new chapter. We capture the ring moment, the family celebrations, the emotional blessings and all the candid joy in between. Delivered as a complete visual story of your special day.',
    image: `${import.meta.env.BASE_URL}images/events/event-01.jpg`,
    alt: 'Engagement ceremony photography',
    icon: '💒',
    includes: [
      'Full ceremony coverage',
      'Candid & traditional photography',
      'Family portraits',
      'Couple portraits',
      'Edited high-resolution gallery',
    ],
  },
  {
    id: 'baby-shower',
    slug: 'baby-shower',
    title: 'Baby Shower Photography',
    shortDesc: 'Capturing the excitement, love and beautiful anticipation of your growing family.',
    fullDesc:
      'A baby shower is a celebration of love and the beautiful anticipation of new life. We capture the joy of the ceremony, the warmth of family, the decorations and the precious moments that make this occasion unforgettable — including maternity portraits if you wish.',
    image: `${import.meta.env.BASE_URL}images/baby-shower/baby-shower-01.jpg`,
    alt: 'Baby shower and maternity photography',
    icon: '🍼',
    includes: [
      'Ceremony coverage',
      'Maternity portraits',
      'Family candid photography',
      'Detail shots',
      'Edited gallery delivery',
    ],
  },
  {
    id: 'house-warming',
    slug: 'house-warming',
    title: 'House Warming Photography',
    shortDesc: 'Preserving the joy and emotions of beginning a new chapter in your new home.',
    fullDesc:
      'Griha Pravesh is one of life\'s most meaningful milestones. The kolam at the doorstep, the puja, the first steps through the door, the family gathered around — these moments deserve to be preserved with care and artistry. We document every ritual and every smile.',
    image: `${import.meta.env.BASE_URL}images/house-warming/house-warming-01.jpg`,
    alt: 'House warming ceremony photography',
    icon: '🏠',
    includes: [
      'Full ceremony coverage',
      'Puja ritual documentation',
      'Family portraits',
      'Candid celebration moments',
      'Edited gallery delivery',
    ],
  },
  {
    id: 'family-functions',
    slug: 'family-functions',
    title: 'Family Function Photography',
    shortDesc: 'The people, laughter and moments that make every celebration special.',
    fullDesc:
      'From birthday milestones to naming ceremonies, anniversary celebrations to family portraits, we bring the same care and artistry to every occasion. Because every celebration — big or small — deserves to be beautifully remembered.',
    image: `${import.meta.env.BASE_URL}images/family/family-01.jpg`,
    alt: 'Family function photography',
    icon: '👨‍👩‍👧‍👦',
    includes: [
      'Full event coverage',
      'Group & family portraits',
      'Candid moments',
      'Detail photography',
      'Edited gallery delivery',
    ],
  },
  {
    id: 'candid',
    slug: 'candid',
    title: 'Candid Photography',
    shortDesc: 'Natural photographs that capture real emotions without forced poses.',
    fullDesc:
      'The best photographs are the ones you didn\'t know were being taken. Our candid approach means we blend into the background of your event and capture the real, unscripted moments — the tears of joy, the laughter between cousins, the quiet tender glances.',
    image: `${import.meta.env.BASE_URL}images/weddings/wedding-06.jpg`,
    alt: 'Candid event photography',
    icon: '📸',
    includes: [
      'Unobtrusive documentation',
      'Real emotion photography',
      'Natural light preference',
      'Full event coverage',
      'Edited candid gallery',
    ],
  },
];

export default services;
