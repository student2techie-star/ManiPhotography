import { siteConfig } from '../../data/siteConfig';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Photographer',
    '@id': `${siteConfig.siteUrl}/#organization`,
    name: 'Mani Photography Thirukadaiyur',
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/images/og-image.jpg`,
    telephone: '+918111085865',
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Amritaghateswarar Abirami Temple',
      addressLocality: 'Thirukadaiyur',
      addressRegion: 'Tamil Nadu',
      postalCode: '609311',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.0747031,
      longitude: 79.8039706,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Thirukadaiyur' },
      { '@type': 'AdministrativeArea', name: 'Mayiladuthurai' },
      { '@type': 'AdministrativeArea', name: 'Karaikal' },
      { '@type': 'AdministrativeArea', name: 'Sirkazhi' },
      { '@type': 'AdministrativeArea', name: 'Chidambaram' },
      { '@type': 'AdministrativeArea', name: 'Nagapattinam' },
      { '@type': 'AdministrativeArea', name: 'Tharangambadi' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '21:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Thirukadaiyur Photography Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: '60th Birthday / Shashtiapthapoorthi Photography' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: '70th Birthday / Bhimaratha Shanthi Photography' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: '80th Birthday / Sadabishegam Photography' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Wedding Photography & Videography' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Temple Photography Thirukadaiyur' },
        },
      ],
    },
    sameAs: [
      siteConfig.instagram,
      siteConfig.facebook,
      siteConfig.youtube,
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    name: 'Mani Photography Thirukadaiyur',
    url: siteConfig.siteUrl,
    publisher: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
    inLanguage: ['en', 'ta'],
  };
}

export function getServiceSchema(serviceName: string, description: string, url: string, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: serviceName,
    description: description,
    provider: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
    url: url,
    image: image ? (image.startsWith('http') ? image : `${siteConfig.siteUrl}${image}`) : `${siteConfig.siteUrl}/images/og-image.jpg`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Thirukadaiyur, Mayiladuthurai, Tamil Nadu',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

