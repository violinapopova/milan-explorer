export type PlaceCategory = 'landmark' | 'event' | 'food' | 'shopping';

export interface Place {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  rating: number;
  category: PlaceCategory;
  openingHours: string;
  ticketPrice: string;
  featured?: boolean;
  /** WGS84 coordinates for map markers */
  coordinates: { latitude: number; longitude: number };
}

/**
 * Photos: Wikimedia Commons (various CC licenses). No local assets required.
 * Replace any `imageUrl` with `require('../assets/your-photo.jpg')` if you bundle your own.
 */
const WIKI = {
  duomo:
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg',
  sforza:
    'https://upload.wikimedia.org/wikipedia/commons/f/f0/Castello_Sforzesco_%28Milan%29_-_main_entrance.jpg',
  navigli:
    'https://upload.wikimedia.org/wikipedia/commons/d/da/Sunset_On_Naviglio_Grande_%28248958685%29.jpeg',
  fashionDistrict:
    'https://upload.wikimedia.org/wikipedia/commons/4/41/Delicatessen_in_Via_Montenapoleone%2C_Milan.jpg',
  galleria:
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Galleria_Vittorio_Emanuele_II_2382.jpg',
  /** Canal-side Naviglio — typical aperitivo setting */
  aperitivo:
    'https://upload.wikimedia.org/wikipedia/commons/2/28/108_Alzaia_Naviglio_Grande%2C_L%27Artiglio_LU03108.jpg',
  fashionWeek:
    'https://upload.wikimedia.org/wikipedia/commons/0/01/Milan_Semaine_de_la_mode_f%C3%A9minine_sept-2018_%282%29.jpg',
  scala:
    'https://upload.wikimedia.org/wikipedia/commons/5/52/Exterior_of_La_Scala%2C_Milan.jpg',
} as const;

export const places: Place[] = [
  {
    id: 'duomo',
    title: 'Duomo di Milano',
    description: "Milan's gothic masterpiece and the city's spiritual heart.",
    longDescription:
      'The Duomo di Milano is one of the largest cathedrals in the world and took nearly six centuries to complete. Climb to the rooftop terraces for unforgettable views across Milan and intimate proximity to countless spires and statues.',
    imageUrl: WIKI.duomo,
    rating: 4.9,
    category: 'landmark',
    openingHours: 'Daily 9:00–19:00 (terraces vary)',
    ticketPrice: 'Cathedral free; terraces from €14',
    featured: true,
    coordinates: { latitude: 45.464_211, longitude: 9.191_383 },
  },
  {
    id: 'sforza',
    title: 'Sforza Castle',
    description: 'Renaissance fortress housing museums and Michelangelo’s final sculpture.',
    longDescription:
      'Castello Sforzesco guarded Milan for centuries. Today its vast courtyards and museums hold art from ancient Egypt to the unfinished Pietà Rondanini by Michelangelo — a contemplative masterpiece.',
    imageUrl: WIKI.sforza,
    rating: 4.7,
    category: 'landmark',
    openingHours: 'Tue–Sun 10:00–17:30 (castle grounds earlier)',
    ticketPrice: 'Museum bundle from €10; grounds free',
    featured: true,
    coordinates: { latitude: 45.470_477, longitude: 9.179_265 },
  },
  {
    id: 'navigli',
    title: 'Navigli Canals',
    description: 'Golden-hour strolls, reflections, and the aperitivo rhythm.',
    longDescription:
      'The Navigli district channels Milan’s creative soul. By day, browse boutiques and galleries; by evening, join locals for an aperitivo along the water as lanterns shimmer on the canals.',
    imageUrl: WIKI.navigli,
    rating: 4.8,
    category: 'landmark',
    openingHours: 'District open 24/7; venues vary',
    ticketPrice: 'Free to explore',
    featured: true,
    coordinates: { latitude: 45.448_44, longitude: 9.179_6 },
  },
  {
    id: 'fashion-district',
    title: 'Fashion District',
    description: 'Quadrilatero: Via Montenapoleone and the world’s finest ateliers.',
    longDescription:
      'The Quadrilatero della Moda is where elegance meets craft. Window displays along Via Montenapoleone and Via della Spiga tell the story of Italian luxury — even a stroll here feels like a front-row seat.',
    imageUrl: WIKI.fashionDistrict,
    rating: 4.6,
    category: 'shopping',
    openingHours: 'Boutiques typically Mon–Sat 10:00–19:30',
    ticketPrice: 'Browsing priceless; budget optional',
    featured: true,
    coordinates: { latitude: 45.468_945, longitude: 9.197_388 },
  },
  {
    id: 'galleria',
    title: 'Galleria Vittorio Emanuele II',
    description: 'The “living room of Milan” under a soaring glass dome.',
    longDescription:
      'Cross the mosaic floor beneath the iron-and-glass vault of Italy’s oldest active shopping gallery. Historic cafés and the Duomo’s silhouette at either end make this passage pure Milanese theater.',
    imageUrl: WIKI.galleria,
    rating: 4.8,
    category: 'landmark',
    openingHours: 'Shops & cafés ~9:00–22:00',
    ticketPrice: 'Free to enter',
    coordinates: { latitude: 45.465_759, longitude: 9.189_754 },
  },
  {
    id: 'aperitivo',
    title: 'Aperitivo on the Terraces',
    description: 'Spritz, cicchetti, and golden hour — from rooftops to the Navigli.',
    longDescription:
      'Milan perfected the aperitivo: a golden-hour ritual of sparkling drinks and generous bites. Join the crowd along the Navigli or above Porta Nuova — everywhere, the city loosens its tie and raises a glass.',
    imageUrl: WIKI.aperitivo,
    rating: 4.7,
    category: 'food',
    openingHours: 'Typically 18:00–22:00',
    ticketPrice: 'From ~€12 with buffet stations',
    coordinates: { latitude: 45.484_196, longitude: 9.189_078 },
  },
  {
    id: 'fashion-week',
    title: 'Milano Fashion Week',
    description: 'Runways, showrooms, and the pulse of global style.',
    longDescription:
      'During Fashion Week, Milan becomes a moving tableau of tailoring and innovation. Even without invitations, the energy in Brera and 5 Vie is electric — pop-up installations spill into historic streets.',
    imageUrl: WIKI.fashionWeek,
    rating: 4.8,
    category: 'event',
    openingHours: 'Seasonal — check official WCM schedule',
    ticketPrice: 'Public shows vary; many events industry-only',
    coordinates: { latitude: 45.471_94, longitude: 9.187_73 },
  },
  {
    id: 'scala',
    title: 'Teatro alla Scala',
    description: 'Opera and ballet in one of the world’s most storied houses.',
    longDescription:
      'La Scala has premiered works by Verdi and Puccini. Whether you attend a performance or explore the museum, the red-and-gold auditorium embodies Milan’s devotion to music.',
    imageUrl: WIKI.scala,
    rating: 4.9,
    category: 'landmark',
    openingHours: 'Museum 9:00–17:30; performances evenings',
    ticketPrice: 'Museum ~€12; opera from ~€35',
    coordinates: { latitude: 45.467_403, longitude: 9.189_47 },
  },
];

export function getPlaceById(id: string): Place | undefined {
  return places.find((p) => p.id === id);
}

export const featuredPlaces = places.filter((p) => p.featured);
