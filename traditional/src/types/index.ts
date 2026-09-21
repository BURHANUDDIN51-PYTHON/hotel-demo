export type AtmosphereMode = 'surya' | 'sandhya' | 'chandra'; // Dawn, Sunset, Moonlight

export interface Suite {
  id: string;
  name: string;
  subheading: string;
  size: string;
  view: string;
  occupancy: string;
  description: string;
  quote: string;
  image: string;
  gallery: string[];
  features: string[];
  amenities: {
    title: string;
    description: string;
  }[];
  priceStarting: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  tagline: string;
  timing: string;
  dressCode: string;
  setting: string;
  description: string;
  image: string;
  signatureDishes: {
    name: string;
    origin: string;
    description: string;
    pairing?: string;
  }[];
}

export interface RoyalExperience {
  id: string;
  timeSlot: string;
  period: 'dawn' | 'afternoon' | 'dusk' | 'night';
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  description: string;
  image: string;
  highlight: string;
  tag: 'Serenity' | 'Gastronomy' | 'Heritage' | 'Adventure';
}

export interface WellnessTreatment {
  id: string;
  name: string;
  sanskritName: string;
  duration: string;
  description: string;
  ingredients: string[];
  benefit: string;
  ritualSteps: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'architecture' | 'suites' | 'courtyards' | 'gastronomy' | 'ceremonies';
  image: string;
  aspect: 'portrait' | 'landscape' | 'wide';
  caption: string;
}

export interface RoyalTestimonial {
  id: string;
  author: string;
  title: string;
  date: string;
  city: string;
  quote: string;
  sealText: string;
}

export interface ConciergeInquiry {
  fullName: string;
  email: string;
  phone: string;
  arrivalDate: string;
  departureDate: string;
  selectedSuite: string;
  guests: string;
  enhancements: string[];
  bespokeNotes: string;
}
