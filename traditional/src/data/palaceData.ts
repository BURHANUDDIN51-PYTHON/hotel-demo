import type { Suite, DiningVenue, RoyalExperience, WellnessTreatment, GalleryItem, RoyalTestimonial } from '../types';
import { PALACE_IMAGERY } from './imagery';

export const PALACE_INFO = {
  name: "Taj Lake Palace",
  officialTitle: "Taj Lake Palace, Udaipur",
  palaceHeritageName: "Jag Niwas",
  tagline: "The Floating White Marble Sanctuary of Lake Pichola",
  city: "Udaipur, Rajasthan, India",
  coordinates: "24.5753° N, 73.6800° E",
  elevation: "598 metres above sea level",
  foundingYear: "1743 – 1746 A.D.",
  founder: "Maharana Jagat Singh II (62nd Custodian of the House of Mewar)",
  heritageConversion: "1963 by Maharana Bhagwat Singh",
  tajStewardship: "Managed by Taj Hotels since 1971",
  address: "P.O. Box No. 5, Lake Pichola, Udaipur, Rajasthan 313001, India",
  phone: "+91 294 242 8800",
  conciergeEmail: "lakepalace.udaipur@tajhotels.com",
};

export const SIGNATURE_HIGHLIGHTS = [
  {
    id: "four-acre-island",
    title: "A Four-Acre Island of White Marble",
    subtitle: "Built upon natural lake bedrock in 1746",
    description: "Unlike any other palace in the world, Jag Niwas is built directly upon a four-acre natural stone reef in the centre of Lake Pichola. Its pure white Makrana marble walls seem to rise straight from the shimmering water.",
    statistic: "4 Acres Suspended on Water",
  },
  {
    id: "lily-pond-courtyard",
    title: "The Lily Pond & Courtyard Fountains",
    subtitle: "The serene heart of Jag Niwas",
    description: "Surrounded by scalloped marble archways and fragrant frangipani trees, the inner lily pond reflects open desert skies and provides a natural cooling sanctuary amidst the heat of Rajasthan.",
    statistic: "18th-Century Thermodynamic Design",
  },
  {
    id: "scalloped-jharokhas",
    title: "East-Facing Scalloped Jharokhas",
    subtitle: "Designed to greet Surya, the Sun God",
    description: "Because the Sisodia Maharanas claim descent from the Sun Dynasty (Suryavansh), the palace was oriented to face east, allowing the morning sun to illuminate its hand-carved balconies and stained-glass peacocks.",
    statistic: "Oriented to the Rising Sun",
  },
  {
    id: "gangaur-barge",
    title: "The 150-Year-Old Gangaur Barge",
    subtitle: "The ceremonial boat of Mewar monarchs",
    description: "The historical Gangaur barge, once used by the Maharanas for sacred religious processions, now hosts private candlelit dinners afloat Lake Pichola, attended by private butlers and live sitar artists.",
    statistic: "Historic 1870s Imperial Vessel",
  }
];

export const SUITES: Suite[] = [
  {
    id: "shambhu-prakash-suite",
    name: "The Grand Presidential Suite",
    subheading: "The Shambhu Prakash Suite",
    size: "1,800 sq. ft / 167 sq. m",
    view: "Panoramic 360° Lake Pichola, City Palace & Jag Mandir",
    occupancy: "Up to 3 Guests",
    priceStarting: "₹ 3,75,000 / Night",
    description: "Named after Maharana Shambhu Singh, who ruled Mewar from 1861 to 1874, this presidential sanctuary is furnished with aristocratic European antiques, high-curved arches, and hand-embroidered silks. Its private adjoining terrace commands an unrivaled panorama of the City Palace across the lake.",
    quote: "To watch the sun set over the Aravalli hills from the Shambhu Prakash terrace is to understand why Udaipur was named the Venice of the East.",
    image: PALACE_IMAGERY.suiteShambhuPrakash,
    gallery: [
      PALACE_IMAGERY.suiteShambhuPrakash,
      PALACE_IMAGERY.suiteBathroomMarble,
      PALACE_IMAGERY.heritageJali
    ],
    features: [
      "Original 19th-century European and Mewari antique collection",
      "Private adjoining lake terrace with outdoor daybed",
      "Extensive private library with rare historical volumes on Mewar",
      "Spacious Makrana white marble bathroom with standalone deep soaking tub",
      "Round-the-clock dedicated Taj Palace Butler"
    ],
    amenities: [
      { title: "Private Boat Transfer", description: "Exclusive arrival across Lake Pichola aboard the royal palace boat" },
      { title: "Personal Palace Butler", description: "Dedicated royal butler trained in the historic etiquette of the House of Mewar" },
      { title: "Ceremonial Rose Welcome", description: "Traditional shower of rose petals and ceremonial welcome at the palace jetty" },
      { title: "Chamber Bar Reserve", description: "Curated selection of single malts, vintage wines, and organic Mewar teas" }
    ]
  },
  {
    id: "mayur-mahal-suite",
    name: "The Grand Royal Suite",
    subheading: "Mayur Mahal (The Peacock Suite)",
    size: "1,200 sq. ft / 111 sq. m",
    view: "Direct Lake Pichola & Sunset Horizon Vista",
    occupancy: "Up to 2 Guests",
    priceStarting: "₹ 2,65,000 / Night",
    description: "Mayur Mahal pays homage to India's national bird and the beloved emblem of Rajasthan. The suite's carved marble jharokha features an extraordinary stained-glass peacock mosaic that scatters jewel-toned light across the polished marble floors as the sun traces its arc across the sky.",
    quote: "When afternoon light passes through the peacock stained glass, the entire chamber glows in amethyst, emerald, and gold.",
    image: PALACE_IMAGERY.suiteMayurMahal,
    gallery: [
      PALACE_IMAGERY.suiteMayurMahal,
      PALACE_IMAGERY.lilyPond,
      PALACE_IMAGERY.heroDusk
    ],
    features: [
      "Historic stained-glass peacock jharokha with silk bolsters",
      "Hand-chiseled Makrana marble columns and ceiling mouldings",
      "Panoramic views of the sunset reflecting in Lake Pichola",
      "Sunken marble bath overlooking the water",
      "Authentic Rajput handcrafted teakwood furnishings"
    ],
    amenities: [
      { title: "Evening Sunset Cruise", description: "Complimentary evening cruise past Jag Mandir Island aboard the palace boat" },
      { title: "In-Suite Dining Service", description: "Bespoke four-course dinner served inside your private jharokha" },
      { title: "J Wellness Bath Ritual", description: "Aromatherapy bath prepared with rose petals and sandalwood essential oils" },
      { title: "Taj Butler Care", description: "Personalized packing, unpacking, and palace itinerary coordination" }
    ]
  },
  {
    id: "khush-mahal-suite",
    name: "The Grand Royal Suite",
    subheading: "Khush Mahal (The Queen's Palace)",
    size: "1,150 sq. ft / 107 sq. m",
    view: "Overlooking the Inner Courtyard & Lake Pichola",
    occupancy: "Up to 2 Guests",
    priceStarting: "₹ 2,20,000 / Night",
    description: "Once the secluded private apartment of royal queens, Khush Mahal radiates tranquility. Adorned with antique Belgian glass chandeliers, hand-painted floral motifs, and an antique four-poster bed draped in pure raw silk.",
    quote: "A sanctuary of quiet elegance, where the only sound is the gentle splash of courtyard fountains.",
    image: PALACE_IMAGERY.suiteKhushMahal,
    gallery: [
      PALACE_IMAGERY.suiteKhushMahal,
      PALACE_IMAGERY.heritageCourtyard,
      PALACE_IMAGERY.wellnessRituals
    ],
    features: [
      "Authentic 18th-century royal queen's private chamber layout",
      "Antique cut-glass chandeliers and hand-carved stone alcoves",
      "Four-poster teak bed draped in fine Rajasthani silk",
      "Carved marble window seat overlooking the central courtyard",
      "Custom forest-honey and vetiver bathroom amenities"
    ],
    amenities: [
      { title: "Palace Historian Tour", description: "Private guided tour of the secret architectural chambers of Jag Niwas" },
      { title: "Afternoon High Tea", description: "Traditional Mewar high tea served in the courtyard with local savoury delicacies" },
      { title: "Bespoke Linen Selection", description: "Custom thread-count and botanical pillow menu tailored to your preference" },
      { title: "24-Hour Butler Assistance", description: "Unobtrusive, attentive service preserving privacy at all times" }
    ]
  },
  {
    id: "sajjan-niwas-suite",
    name: "The Royal Suite",
    subheading: "Sajjan Niwas Suite",
    size: "950 sq. ft / 88 sq. m",
    view: "Direct Lake Pichola & City Palace Vista",
    occupancy: "Up to 2 Guests",
    priceStarting: "₹ 1,85,000 / Night",
    description: "Constructed during the reign of Maharana Sajjan Singh in 1884, this suite displays historic Mewari frescoes, scalloped marble archways, and large windows that bring the gentle ripples of Lake Pichola directly into the living space.",
    quote: "You feel as though the palace is gently drifting upon the water, suspended between stone and sky.",
    image: PALACE_IMAGERY.suiteSajjanNiwas,
    gallery: [
      PALACE_IMAGERY.suiteSajjanNiwas,
      PALACE_IMAGERY.diningBhairo,
      PALACE_IMAGERY.heroNight
    ],
    features: [
      "Original 1884 wall frescoes and decorative glass inlays",
      "Deeply cushioned marble window perches over the lake",
      "Spacious marble bathroom with rainwater shower",
      "Handmade rugs woven by master artisans of Mewar",
      "Direct sightlines across to the illuminated City Palace"
    ],
    amenities: [
      { title: "Arrival Welcome Ceremony", description: "Ceremonial aarti and garland greeting at the palace jetty" },
      { title: "Yoga & Meditation", description: "Morning pranayama session guided by our resident yoga master" },
      { title: "Fresh Flower Service", description: "Daily arrangements of fresh white tuberoses and Udaipur damask roses" },
      { title: "Night Turndown Ritual", description: "Artisanal saffron milk and handmade almond confections at bedtime" }
    ]
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: "neel-kamal",
    name: "Neel Kamal",
    tagline: "Authentic Royal Mewari & Indian Fine Dining",
    timing: "Dinner: 19:30 – 23:00 (Prior Reservation Required)",
    dressCode: "Elegant Evening Attire",
    setting: "Overlooking the Inner Lotus Lily Pond",
    description: "Named after the blue lotus, Neel Kamal celebrates the culinary repertoire of the Mewar royal kitchens. Prepared on wood-fired deghs and served under glowing chandeliers, each recipe has been handed down through generations of royal khansamas.",
    image: PALACE_IMAGERY.diningNeelKamal,
    signatureDishes: [
      {
        name: "Mewari Laal Maas",
        origin: "Mewar Royal Court Recipe",
        description: "Tender mountain mutton braised in Mathania chillies, garlic, and smoked cloves, simmered slowly in a heavy brass vessel.",
        pairing: "Full-bodied Cabernet Sauvignon"
      },
      {
        name: "Ker Sangri Ke Koftey",
        origin: "Marwar Desert Classic",
        description: "Dumplings of wild desert beans and caper berries simmered in a silky golden yogurt and coriander sauce.",
        pairing: "Chardonnay with subtle oak"
      },
      {
        name: "Safed Maas",
        origin: "Udaipur Royal Hunting Lodge",
        description: "Delicately spiced lamb cooked in an ivory-white sauce of almonds, cashews, cardamoms, and fresh cream.",
        pairing: "Pinot Noir"
      },
      {
        name: "Gulab Ki Kheer",
        origin: "Palace Confectionery",
        description: "Slow-reduced buffalo milk pudding infused with fresh Udaipur damask roses and edible silver leaf.",
        pairing: "Sauternes dessert wine"
      }
    ]
  },
  {
    id: "bhairo",
    name: "Bhairo",
    tagline: "Contemporary European Dining on the Palace Rooftop",
    timing: "Dinner: 19:00 – 23:00 (Seasonal: October to April)",
    dressCode: "Formal / Elegant Evening Attire",
    setting: "Open-air rooftop overlooking the illuminated City Palace",
    description: "Perched atop the highest terrace of Taj Lake Palace, Bhairo offers an unforgettable open-air gastronomic experience. Savor modern European fare crafted with seasonal ingredients while gazing across Lake Pichola at the glowing facade of Udaipur.",
    image: PALACE_IMAGERY.diningBhairo,
    signatureDishes: [
      {
        name: "Charcoal Grilled Black Cod",
        origin: "Bhairo Signature",
        description: "Pan-seared cod with saffron velouté, glazed winter greens, and cauliflower mousseline.",
        pairing: "Puligny-Montrachet"
      },
      {
        name: "Truffled Morel Risotto",
        origin: "European Contemporary",
        description: "Carnaroli rice slow-cooked with Himalayan morels, aged Parmigiano Reggiano, and white truffle oil.",
        pairing: "Barolo DOCG"
      },
      {
        name: "New Zealand Lamb Rack",
        origin: "Rooftop Grill",
        description: "Herb-crusted lamb rack with roasted shallot purée, rosemary jus, and baby root vegetables.",
        pairing: "Bordeaux Grand Cru"
      }
    ]
  },
  {
    id: "jharokha",
    name: "Jharokha",
    tagline: "All-Day Dining Framed by Scalloped Marble Arches",
    timing: "07:00 – 23:00 Continuous",
    dressCode: "Smart Casual Luxury",
    setting: "Direct view of Lake Pichola through marble balconies",
    description: "Framed by scalloped white marble jharokhas that overlook the waters of Lake Pichola, Jharokha is the informal culinary soul of the palace. Serving traditional Indian breakfasts, light lunches, and international comfort cuisine.",
    image: PALACE_IMAGERY.diningJharokha,
    signatureDishes: [
      {
        name: "Royal Mewar Breakfast Thali",
        origin: "Udaipur Morning Ritual",
        description: "Freshly prepared kachoris, saffron-scented poha, house-made preserves, and artisanal filter coffee.",
        pairing: "Fresh pomegranate & mint juice"
      },
      {
        name: "Dal Baati Churma",
        origin: "Traditional Rajasthan",
        description: "Crispy ghee-soaked wheat dumplings served with five-lentil stew and sweet crushed wheat churma.",
        pairing: "Spiced Masala Buttermilk"
      }
    ]
  },
  {
    id: "amrit-sagar",
    name: "Amrit Sagar",
    tagline: "The Palace Bar & Library Lounge",
    timing: "11:00 – Midnight",
    dressCode: "Smart Casual",
    setting: "Intimate lounge with carved wood and stained glass",
    description: "Meaning 'Ocean of Nectar', Amrit Sagar is an intimate retreat featuring rare single malts, aged cognacs, vintage champagnes, and handcrafted signature cocktails infused with Indian botanicals.",
    image: PALACE_IMAGERY.diningAmritSagar,
    signatureDishes: [
      {
        name: "The Jag Niwas Elixir",
        origin: "Taj Signature Cocktail",
        description: "Single malt whisky infused with roasted green cardamom, sweet vermouth, and a flamed orange peel.",
        pairing: "Spiced Roasted Marwar Nuts"
      },
      {
        name: "Pichola Royal Spritz",
        origin: "Sunset Aperitif",
        description: "Champagne, elderflower cordial, fresh pomegranate seeds, and damask rose mist.",
        pairing: "Crispy Lotus Stem chips"
      }
    ]
  },
  {
    id: "gangaur-barge",
    name: "The Gangaur Ceremonial Royal Barge",
    tagline: "Private Dining Afloat Lake Pichola",
    timing: "Sunset & Dinner Cruises (By Exclusive Appointment)",
    dressCode: "Ceremonial / Royal Elegant",
    setting: "150-year-old historic boat floating on Lake Pichola",
    description: "The Gangaur was built over a century and a half ago for the Maharanas of Mewar. Today, it offers one of the most exclusive dining experiences in the world: a private candlelit cruise across Lake Pichola with dedicated butlers, live classical musicians, and a personalized four-course banquet.",
    image: PALACE_IMAGERY.diningGangaurBarge,
    signatureDishes: [
      {
        name: "The Imperial Four-Course Water Banquet",
        origin: "Bespoke Barge Menu",
        description: "Individually curated courses served course-by-course as the barge drifts between Jag Mandir and the City Palace.",
        pairing: "Vintage Dom Pérignon Champagne"
      }
    ]
  }
];

export const EXPERIENCES: RoyalExperience[] = [
  {
    id: "boat-arrival",
    timeSlot: "Upon Arrival",
    period: "dawn",
    title: "Private Boat Arrival across Lake Pichola",
    subtitle: "A ceremonial journey across sacred waters",
    location: "Departing from City Palace Jetty",
    duration: "15 Minutes",
    description: "Your journey begins at the private Taj jetty on the mainland. Step aboard our handcrafted motor launch for a serene glide across Lake Pichola. As the boat approaches Jag Niwas, attendants greet you with a ceremonial shower of rose petals and a cold spiced beverage.",
    image: PALACE_IMAGERY.expPicholaBoatArrival,
    highlight: "Arriving at the palace jetty while rose petals drift across the white marble steps.",
    tag: "Serenity"
  },
  {
    id: "heritage-walk",
    timeSlot: "17:30 – 18:30 Daily",
    period: "dusk",
    title: "The Palace Heritage Walk with Resident Historian",
    subtitle: "Unlocking three centuries of Mewar chronicles",
    location: "Throughout Jag Niwas Chambers",
    duration: "1 Hour",
    description: "Join our resident palace historian as he walks you through hidden corridors, whispering fountains, and private courtyards. Discover how Maharana Jagat Singh II built this summer retreat in 1746 and how it was saved and restored by Taj Hotels.",
    image: PALACE_IMAGERY.expHeritageWalk,
    highlight: "Viewing rare archival photographs and hearing firsthand legends of the royal court.",
    tag: "Heritage"
  },
  {
    id: "sunset-cruise",
    timeSlot: "17:00 – 18:00 Daily",
    period: "dusk",
    title: "Sunset Cruise past Jag Mandir Island",
    subtitle: "Golden hour beneath the ancient Aravalli peaks",
    location: "Lake Pichola Circuit",
    duration: "1 Hour",
    description: "Glide silently across Lake Pichola as the sun descends behind the Aravalli hills, casting molten gold reflections across the water. The cruise passes Jag Mandir—the 17th-century island palace where Prince Khurram (later Emperor Shah Jahan) sought refuge.",
    image: PALACE_IMAGERY.expSunsetJagMandir,
    highlight: "Panoramic vantage point of the entire City Palace facade glowing in evening light.",
    tag: "Adventure"
  },
  {
    id: "classical-sitar",
    timeSlot: "19:30 – 21:30 Daily",
    period: "night",
    title: "Classical Raag Recital in the Lily Pond Courtyard",
    subtitle: "Acoustic strings beneath the desert stars",
    location: "The Central Courtyard",
    duration: "2 Hours",
    description: "Every evening, descendants of hereditary court musicians perform classical North Indian raags on sitar, sarangi, and tabla beside the lit lily pond. The natural acoustics of the white marble archways amplify every melodic nuance.",
    image: PALACE_IMAGERY.expClassicalSitar,
    highlight: "The gentle resonance of classical strings echoing across the calm lake waters.",
    tag: "Culture" as any
  }
];

export const WELLNESS_TREATMENTS: WellnessTreatment[] = [
  {
    id: "spa-boat-experience",
    name: "The J Wellness Spa Boat",
    sanskritName: "जल विहार चिकित्सा",
    duration: "180 Minutes",
    description: "The signature experience of Taj Lake Palace: a private luxury spa boat floating in the gentle waters of Lake Pichola. Equipped with a private relaxation deck, steam room, and outdoor plunge pool, this experience redefines holistic wellbeing.",
    ingredients: ["Cold-pressed Virgin Coconut Oil", "Pure Sandalwood Extract", "Kashmiri Rose Water", "Holy Basil Infusion"],
    benefit: "Unmatched serenity, complete cellular renewal, and the therapeutic rhythm of gentle water motion.",
    ritualSteps: [
      "Boarding the private Spa Boat at the palace pier",
      "Foot cleansing ritual with holy basil and rose petals on the open deck",
      "Synchronized full-body aromatherapy massage",
      "Private steam session and soak in the outdoor heated plunge pool while drifting on Pichola"
    ]
  },
  {
    id: "mewar-khasa",
    name: "Mewar Khasa Royal Body Scrub & Wrap",
    sanskritName: "मेवाड़ खास उपनहनम्",
    duration: "120 Minutes",
    description: "An authentic royal treatment inspired by the beauty rituals of the Mewar royal household. Sun-dried desert herbs, hand-pounded lentils, and pure saffron paste exfoliate and nourish the skin.",
    ingredients: ["Kashmiri Saffron Threads", "Mysore Sandalwood Paste", "Sun-dried Lentil Flour", "Fresh Rose Petals"],
    benefit: "Deep detoxification, improved skin luminescence, and profound muscular release.",
    ritualSteps: [
      "Traditional dry silk glove friction massage",
      "Gentle exfoliation with natural Mewar herbal blend",
      "Warm saffron cream cocoon wrap in unbleached linen",
      "Refreshing rosewater head and scalp marma massage"
    ]
  },
  {
    id: "vishram-relaxation",
    name: "Vishram Deep Tissue Body Massage",
    sanskritName: "विश्राम सम्वाहनम्",
    duration: "90 Minutes",
    description: "A restorative deep-tissue therapy utilizing heated sesame oil infused with ginger, black pepper, and eucalyptus to dissolve chronic muscle fatigue and tension.",
    ingredients: ["Warm Sesame Oil", "Black Pepper Essence", "Wild Ginger Extract", "Camphor Mist"],
    benefit: "Relief of joint stiffness, stimulation of blood circulation, and deep physical calm.",
    ritualSteps: [
      "Grounding herbal foot bath",
      "Rhythmic acupressure along major meridian pathways",
      "Deep friction strokes targeting the upper back and shoulders",
      "Warm herbal compress and grounding warm herbal tea"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Taj Lake Palace Floating on Lake Pichola",
    location: "Pichola Vista",
    category: "architecture",
    image: PALACE_IMAGERY.heroDusk,
    aspect: "wide",
    caption: "The four-acre white marble palace seemingly adrift upon the glassy waters of Lake Pichola at sunset."
  },
  {
    id: "g2",
    title: "Scalloped Mewari Marble Arches",
    location: "Inner Cloisters",
    category: "architecture",
    image: PALACE_IMAGERY.heritageArches,
    aspect: "portrait",
    caption: "Intricate 18th-century cusped archways framing the sunlight and lake breezes."
  },
  {
    id: "g3",
    title: "The Shambhu Prakash Presidential Suite",
    location: "North Pavilion",
    category: "suites",
    image: PALACE_IMAGERY.suiteShambhuPrakash,
    aspect: "landscape",
    caption: "The grandest suite of the palace with antique European furniture and direct panoramic views."
  },
  {
    id: "g4",
    title: "Bhairo Rooftop Terrace at Night",
    location: "Palace Rooftop",
    category: "gastronomy",
    image: PALACE_IMAGERY.diningBhairo,
    aspect: "landscape",
    caption: "Candlelit fine dining suspended high above the water with views of the illuminated City Palace."
  },
  {
    id: "g5",
    title: "The Lily Pond Courtyard",
    location: "Central Enclosure",
    category: "courtyards",
    image: PALACE_IMAGERY.lilyPond,
    aspect: "portrait",
    caption: "The peaceful green courtyard where fountains whisper and fresh lotus blossoms float."
  },
  {
    id: "g6",
    title: "The 150-Year-Old Gangaur Barge",
    location: "Lake Pichola",
    category: "ceremonies",
    image: PALACE_IMAGERY.diningGangaurBarge,
    aspect: "landscape",
    caption: "The historic ceremonial royal barge carrying guests across Lake Pichola for private banquets."
  },
  {
    id: "g7",
    title: "Makrana White Marble Hammam",
    location: "Royal Suite",
    category: "suites",
    image: PALACE_IMAGERY.suiteBathroomMarble,
    aspect: "portrait",
    caption: "Sunken bath carved from pure white marble, filled with fresh Udaipur roses."
  },
  {
    id: "g8",
    title: "City Palace Across Lake Pichola",
    location: "Lake Pichola East Bank",
    category: "architecture",
    image: PALACE_IMAGERY.locationCityPalaceView,
    aspect: "portrait",
    caption: "The historic City Palace of Udaipur viewed across the serene waters of Lake Pichola."
  }
];

export const TESTIMONIALS: RoyalTestimonial[] = [
  {
    id: "t1",
    author: "H.H. The Maharaja of Jodhpur",
    title: "Royal Patron",
    date: "Annual Winter Residence",
    city: "Rajasthan, India",
    quote: "Jag Niwas remains the crown jewel of Mewar. Taj Hotels has preserved the sanctity of the architecture while maintaining an unmatched standard of Indian hospitality.",
    sealText: "TAJ ROYAL PATRON"
  },
  {
    id: "t2",
    author: "Sir Richard & Lady Jacqueline Croft",
    title: "Distinguished International Connoisseurs",
    date: "October 2025",
    city: "London, United Kingdom",
    quote: "Arriving by boat at dusk as rose petals fell upon our shoulders is a moment we shall remember for a lifetime. To be surrounded by white marble and water under the Udaipur stars is pure magic.",
    sealText: "HERITAGE CHRONICLER"
  },
  {
    id: "t3",
    author: "Elena Rostova",
    title: "Architectural Digest Contributing Editor",
    date: "January 2026",
    city: "Paris & Milan",
    quote: "The restraint of the restoration is what makes Taj Lake Palace peerless. There is no artificial excess—only the pure, timeless poetry of Makrana marble, Lake Pichola, and the Aravalli horizon.",
    sealText: "ARCHITECTURAL CITATION"
  }
];
