// ============================================================
// PORTFOLIO DATA
// Add/remove/update images here — no need to touch any component
// Place real images in /public/images/{category}/
// ============================================================

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export const portfolioCategories = [
  { id: 'all', label: 'All' },
  { id: 'shashti-poorthi', label: '60th & 80th Weddings' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'tamil-weddings', label: 'Tamil Weddings' },
  { id: 'temple', label: 'Temple' },
  { id: 'baby-shower', label: 'Baby Shower' },
  { id: 'house-warming', label: 'House Warming' },
  { id: 'family', label: 'Family' },
  { id: 'events', label: 'Events' },
];

export const portfolioItems: PortfolioItem[] = [
  // ── 60th & 80th Weddings ─────────────────────────────────
  { id: 'sp-01', category: 'shashti-poorthi', title: '60th Wedding (Shashtiapthapoorthi)', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-60th-birthday-shashtiapthapoorthi-photography.webp`, alt: 'Thirukadaiyur 60th birthday Shashtiapthapoorthi ceremony photography', featured: true },
  { id: 'sp-02', category: 'shashti-poorthi', title: '80th Wedding (Sathabishegam)', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-70th-birthday-bhimaratha-shanthi-photography.webp`, alt: 'Thirukadaiyur 80th wedding Sathabishegam ritual photography', featured: true },
  { id: 'sp-03', category: 'shashti-poorthi', title: 'Kalasa Abhishekam Blessings', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-60th-wedding-kalasa-abhishekam.webp`, alt: 'Kalasa Abhishekam Thirukadaiyur Abirami temple shoot', featured: true },
  { id: 'sp-04', category: 'shashti-poorthi', title: 'Grandparents & Family', image: `${import.meta.env.BASE_URL}images/family/thirukadaiyur-multi-generational-family-portrait.webp`, alt: 'Multi-generational family portrait Thirukadaiyur' },

  // ── Weddings ────────────────────────────────────────────
  { id: 'w-01', category: 'weddings', title: 'Tamil Wedding Muhurtham', image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-wedding-photography-muhurtham.webp`, alt: 'Thirukadaiyur Tamil wedding ceremony photography', featured: true },
  { id: 'w-02', category: 'weddings', title: 'Traditional Couple Portrait', image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-traditional-tamil-wedding-couple.webp`, alt: 'Traditional Tamil wedding couple candid shoot' },
  { id: 'w-03', category: 'weddings', title: 'Mangalya Dharanam', image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-kalyanam-mangalya-dharanam.webp`, alt: 'Thirukadaiyur kalyanam Mangalya Dharanam ritual' },
  { id: 'w-04', category: 'weddings', title: 'Reception Stage Decor', image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-wedding-reception-stage-decor.webp`, alt: 'Wedding reception stage decor photography' },
  { id: 'w-05', category: 'weddings', title: 'Candid Wedding Expressions', image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-candid-wedding-moments.webp`, alt: 'Candid wedding moments Thirukadaiyur' },
  { id: 'w-06', category: 'weddings', title: 'Garland Exchange', image: `${import.meta.env.BASE_URL}images/weddings/thirukadaiyur-wedding-ritual-garland-exchange.webp`, alt: 'Garland exchange during wedding ceremony', featured: true },

  // ── Pre-Wedding ─────────────────────────────────────────
  { id: 'pw-01', category: 'pre-wedding', title: 'Pre-Wedding Shoot', image: `${import.meta.env.BASE_URL}images/pre-wedding/thirukadaiyur-pre-wedding-couple-photoshoot.webp`, alt: 'Pre-wedding couple shoot Thirukadaiyur', featured: true },
  { id: 'pw-02', category: 'pre-wedding', title: 'Romantic Outdoor Shoot', image: `${import.meta.env.BASE_URL}images/pre-wedding/thirukadaiyur-outdoor-romantic-couple-shoot.webp`, alt: 'Outdoor romantic couple pre-wedding shoot' },
  { id: 'pw-03', category: 'pre-wedding', title: 'Sunset Silhouette', image: `${import.meta.env.BASE_URL}images/pre-wedding/thirukadaiyur-sunset-pre-wedding-photography.webp`, alt: 'Sunset pre-wedding photography Thirukadaiyur' },
  { id: 'pw-04', category: 'pre-wedding', title: 'Traditional Attire Couple', image: `${import.meta.env.BASE_URL}images/pre-wedding/thirukadaiyur-traditional-attire-couple-portrait.webp`, alt: 'Traditional attire pre-wedding portrait' },

  // ── Tamil Weddings ──────────────────────────────────────
  { id: 'tw-01', category: 'tamil-weddings', title: 'Shashtiapthapoorthi Ceremony', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-60th-birthday-shashtiapthapoorthi-photography.webp`, alt: 'Shashtiapthapoorthi 60th wedding Tamil ceremony', featured: true },
  { id: 'tw-02', category: 'tamil-weddings', title: 'Bhimaratha Shanthi 70th', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-70th-birthday-bhimaratha-shanthi-photography.webp`, alt: 'Bhimaratha Shanthi 70th wedding ritual photography' },
  { id: 'tw-03', category: 'tamil-weddings', title: 'Kalasa Abhishekam Water Pouring', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-60th-wedding-kalasa-abhishekam.webp`, alt: 'Kalasa Abhishekam water pouring ritual' },
  { id: 'tw-04', category: 'tamil-weddings', title: 'Vedic Homam Ceremony', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-traditional-tamil-homam-ceremony.webp`, alt: 'Vedic Homam ceremony photography Thirukadaiyur' },
  { id: 'tw-05', category: 'tamil-weddings', title: 'Family Blessings Ritual', image: `${import.meta.env.BASE_URL}images/tamil-weddings/thirukadaiyur-60th-marriage-family-blessings.webp`, alt: 'Family blessings during 60th marriage' },

  // ── Temple ──────────────────────────────────────────────
  { id: 't-01', category: 'temple', title: 'Abirami Temple Courtyard', image: `${import.meta.env.BASE_URL}images/temple/thirukadaiyur-amritaghateswarar-abirami-temple-photography.webp`, alt: 'Thirukadaiyur Amritaghateswarar Abirami temple photography', featured: true },
  { id: 't-02', category: 'temple', title: 'Gopuram Pillar Portrait', image: `${import.meta.env.BASE_URL}images/temple/thirukadaiyur-temple-courtyard-candid-portrait.webp`, alt: 'Temple gopuram pillar portrait photography' },
  { id: 't-03', category: 'temple', title: 'Sanctum Diya Lighting', image: `${import.meta.env.BASE_URL}images/temple/thirukadaiyur-temple-sanctum-blessings-shoot.webp`, alt: 'Thirukadaiyur temple sanctum blessings shoot' },

  // ── Baby Shower ─────────────────────────────────────────
  { id: 'bs-01', category: 'baby-shower', title: 'Seemantham Celebration', image: `${import.meta.env.BASE_URL}images/baby-shower/thirukadaiyur-seemantham-baby-shower-photography.webp`, alt: 'Thirukadaiyur Seemantham baby shower photography', featured: true },
  { id: 'bs-02', category: 'baby-shower', title: 'Bangles Ceremony', image: `${import.meta.env.BASE_URL}images/baby-shower/thirukadaiyur-bangles-ceremony-baby-shower-moments.webp`, alt: 'Bangles ceremony baby shower photography' },
  { id: 'bs-03', category: 'baby-shower', title: 'Maternity Family Blessings', image: `${import.meta.env.BASE_URL}images/baby-shower/thirukadaiyur-maternity-family-blessings-shoot.webp`, alt: 'Maternity family blessings photoshoot' },

  // ── House Warming ───────────────────────────────────────
  { id: 'hw-01', category: 'house-warming', title: 'Grihapravesam Ceremony', image: `${import.meta.env.BASE_URL}images/house-warming/thirukadaiyur-grihapravesam-house-warming-photography.webp`, alt: 'Thirukadaiyur Grihapravesam house warming photography', featured: true },
  { id: 'hw-02', category: 'house-warming', title: 'Milk Boiling Ritual', image: `${import.meta.env.BASE_URL}images/house-warming/thirukadaiyur-milk-boiling-grihapravesam-ceremony.webp`, alt: 'Milk boiling Grihapravesam ceremony' },
  { id: 'hw-03', category: 'house-warming', title: 'New Home Pooja', image: `${import.meta.env.BASE_URL}images/house-warming/thirukadaiyur-new-home-pooja-family-portrait.webp`, alt: 'New home pooja family portrait Thirukadaiyur' },

  // ── Family ──────────────────────────────────────────────
  { id: 'f-01', category: 'family', title: 'Multi-Generational Family', image: `${import.meta.env.BASE_URL}images/family/thirukadaiyur-multi-generational-family-portrait.webp`, alt: 'Multi-generational family portrait Thirukadaiyur', featured: true },
  { id: 'f-02', category: 'family', title: 'Grandparents & Grandchildren', image: `${import.meta.env.BASE_URL}images/family/thirukadaiyur-grandparents-children-family-photoshoot.webp`, alt: 'Grandparents with grandchildren family photoshoot' },
  { id: 'f-03', category: 'family', title: 'Family Function Gathering', image: `${import.meta.env.BASE_URL}images/family/thirukadaiyur-family-reunion-event-photography.webp`, alt: 'Family function gathering photography Thirukadaiyur' },

  // ── Events ──────────────────────────────────────────────
  { id: 'e-01', category: 'events', title: 'Traditional Function', image: `${import.meta.env.BASE_URL}images/events/thirukadaiyur-traditional-function-celebration.webp`, alt: 'Thirukadaiyur traditional function celebration photography', featured: true },
  { id: 'e-02', category: 'events', title: 'Cultural Stage Event', image: `${import.meta.env.BASE_URL}images/events/thirukadaiyur-cultural-event-stage-photography.webp`, alt: 'Cultural event stage photography' },
  { id: 'e-03', category: 'events', title: 'Birthday Celebration', image: `${import.meta.env.BASE_URL}images/events/thirukadaiyur-birthday-party-event-photography.webp`, alt: 'Birthday party event photography Thirukadaiyur' },
  { id: 'e-04', category: 'events', title: 'Reception Stage Setup', image: `${import.meta.env.BASE_URL}images/events/thirukadaiyur-traditional-reception-catering-setup.webp`, alt: 'Traditional reception stage setup photography' },
];

export default portfolioItems;
