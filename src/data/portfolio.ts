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
  { id: 'weddings', label: 'Weddings' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'tamil-weddings', label: 'Tamil Weddings' },
  { id: 'temple', label: 'Temple' },
  { id: 'baby-shower', label: 'Baby Shower' },
  { id: 'house-warming', label: 'House Warming' },
  { id: 'family', label: 'Family' },
  { id: 'events', label: 'Events' },
];

// Replace image paths with real photos when ready
export const portfolioItems: PortfolioItem[] = [
  // ── Weddings ────────────────────────────────────────────
  { id: 'w-01', category: 'weddings', title: 'Tamil Wedding Ceremony', image: `${import.meta.env.BASE_URL}images/weddings/wedding-01.jpg`, alt: 'Tamil wedding ceremony photography', featured: true },
  { id: 'w-02', category: 'weddings', title: 'Muhurtham Moment', image: `${import.meta.env.BASE_URL}images/weddings/wedding-02.jpg`, alt: 'Muhurtham ceremony candid photography' },
  { id: 'w-03', category: 'weddings', title: 'Bride Portrait', image: `${import.meta.env.BASE_URL}images/weddings/wedding-03.jpg`, alt: 'Tamil bride portrait with traditional jewellery' },
  { id: 'w-04', category: 'weddings', title: 'Reception Evening', image: `${import.meta.env.BASE_URL}images/weddings/wedding-04.jpg`, alt: 'Wedding reception photography' },
  { id: 'w-05', category: 'weddings', title: 'Garland Exchange', image: `${import.meta.env.BASE_URL}images/weddings/wedding-05.jpg`, alt: 'Garland exchange during wedding ceremony' },
  { id: 'w-06', category: 'weddings', title: 'Candid Moments', image: `${import.meta.env.BASE_URL}images/weddings/wedding-06.jpg`, alt: 'Candid wedding photography', featured: true },

  // ── Pre-Wedding ─────────────────────────────────────────
  { id: 'pw-01', category: 'pre-wedding', title: 'Heritage Couple Story', image: `${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-01.jpg`, alt: 'Pre-wedding couple at heritage location', featured: true },
  { id: 'pw-02', category: 'pre-wedding', title: 'Temple Pre-Wedding', image: `${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-02.jpg`, alt: 'Pre-wedding shoot at temple' },
  { id: 'pw-03', category: 'pre-wedding', title: 'Outdoor Couple', image: `${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-03.jpg`, alt: 'Outdoor pre-wedding photography' },
  { id: 'pw-04', category: 'pre-wedding', title: 'Traditional Couple', image: `${import.meta.env.BASE_URL}images/pre-wedding/pre-wedding-04.jpg`, alt: 'Traditional pre-wedding portrait' },

  // ── Tamil Weddings ──────────────────────────────────────
  { id: 'tw-01', category: 'tamil-weddings', title: 'Thaali Ceremony', image: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-01.jpg`, alt: 'Thaali ceremony Tamil wedding photography', featured: true },
  { id: 'tw-02', category: 'tamil-weddings', title: 'Oonjal Ritual', image: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-02.jpg`, alt: 'Oonjal ceremony Tamil wedding' },
  { id: 'tw-03', category: 'tamil-weddings', title: 'Kanyadanam', image: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-03.jpg`, alt: 'Kanyadanam Tamil wedding ritual' },
  { id: 'tw-04', category: 'tamil-weddings', title: 'Family Blessings', image: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-04.jpg`, alt: 'Family blessings during Tamil wedding' },
  { id: 'tw-05', category: 'tamil-weddings', title: 'Traditional Portraits', image: `${import.meta.env.BASE_URL}images/tamil-weddings/tamil-05.jpg`, alt: 'Traditional Tamil wedding couple portraits' },

  // ── Temple ──────────────────────────────────────────────
  { id: 't-01', category: 'temple', title: 'Temple Portrait', image: `${import.meta.env.BASE_URL}images/temple/temple-01.jpg`, alt: 'Temple photography portrait with stone pillars', featured: true },
  { id: 't-02', category: 'temple', title: 'Gopuram Backdrop', image: `${import.meta.env.BASE_URL}images/temple/temple-02.jpg`, alt: 'Photography with temple gopuram backdrop' },
  { id: 't-03', category: 'temple', title: 'Diya Light', image: `${import.meta.env.BASE_URL}images/temple/temple-03.jpg`, alt: 'Temple photography with diya lighting' },

  // ── Baby Shower ─────────────────────────────────────────
  { id: 'bs-01', category: 'baby-shower', title: 'Baby Shower Celebration', image: `${import.meta.env.BASE_URL}images/baby-shower/baby-shower-01.jpg`, alt: 'Baby shower photography with family', featured: true },
  { id: 'bs-02', category: 'baby-shower', title: 'Maternity Portrait', image: `${import.meta.env.BASE_URL}images/baby-shower/baby-shower-02.jpg`, alt: 'Maternity photography portrait' },
  { id: 'bs-03', category: 'baby-shower', title: 'Family Anticipation', image: `${import.meta.env.BASE_URL}images/baby-shower/baby-shower-03.jpg`, alt: 'Baby shower family candid moments' },

  // ── House Warming ───────────────────────────────────────
  { id: 'hw-01', category: 'house-warming', title: 'Griha Pravesh', image: `${import.meta.env.BASE_URL}images/house-warming/house-warming-01.jpg`, alt: 'House warming ceremony photography', featured: true },
  { id: 'hw-02', category: 'house-warming', title: 'Family at New Home', image: `${import.meta.env.BASE_URL}images/house-warming/house-warming-02.jpg`, alt: 'Family celebrating house warming' },
  { id: 'hw-03', category: 'house-warming', title: 'Puja Ceremony', image: `${import.meta.env.BASE_URL}images/house-warming/house-warming-03.jpg`, alt: 'Puja during house warming ceremony' },

  // ── Family ──────────────────────────────────────────────
  { id: 'f-01', category: 'family', title: 'Family Portrait', image: `${import.meta.env.BASE_URL}images/family/family-01.jpg`, alt: 'Multi-generational family portrait', featured: true },
  { id: 'f-02', category: 'family', title: 'Grandparents & Kids', image: `${import.meta.env.BASE_URL}images/family/family-02.jpg`, alt: 'Grandparents with grandchildren family photography' },
  { id: 'f-03', category: 'family', title: 'Candid Family Moments', image: `${import.meta.env.BASE_URL}images/family/family-03.jpg`, alt: 'Candid family photography moments' },

  // ── Events ──────────────────────────────────────────────
  { id: 'e-01', category: 'events', title: 'Engagement', image: `${import.meta.env.BASE_URL}images/events/event-01.jpg`, alt: 'Engagement ceremony photography', featured: true },
  { id: 'e-02', category: 'events', title: 'Birthday Celebration', image: `${import.meta.env.BASE_URL}images/events/event-02.jpg`, alt: 'Birthday celebration photography' },
  { id: 'e-03', category: 'events', title: 'Naming Ceremony', image: `${import.meta.env.BASE_URL}images/events/event-03.jpg`, alt: 'Naming ceremony photography' },
  { id: 'e-04', category: 'events', title: 'Anniversary', image: `${import.meta.env.BASE_URL}images/events/event-04.jpg`, alt: 'Anniversary celebration photography' },
];

export default portfolioItems;
