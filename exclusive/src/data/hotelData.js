export const hotelBrand = {
  name: "MAISON SYLVAN",
  subTitle: "Sanctuary of Light & Stone",
  tagline: "Where silence becomes an architectural art.",
  locationName: "Deià, Mallorca — Balearic Isles",
  coordinates: "39.7512° N, 2.6483° E",
  phone: "+34 971 884 210",
  whatsapp: "+34 682 910 445",
  email: "concierge@maisonsylvan.com",
  inquiriesEmail: "gatherings@maisonsylvan.com",
  instagram: "@maisonsylvan",
  address: "Camí Vell de Son Rullan, 14, 07179 Deià, Illes Balears, Spain",
  established: "1894",
  currencyRates: {
    EUR: { symbol: "€", rate: 1.0, code: "EUR" },
    USD: { symbol: "$", rate: 1.09, code: "USD" },
    GBP: { symbol: "£", rate: 0.86, code: "GBP" },
  }
};

export const heroData = {
  headline: "Where Silence Becomes an Architectural Art",
  subheading: "Twenty-four sculpted suites sheltered between ancient olive groves and the sapphire horizon of the Balearic Sea.",
  backgroundImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=88",
  altImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2200&q=88",
  badge: "EST. 1894 • REIMAGINED 2024",
};

export const storyData = {
  badge: "OUR PHILOSOPHY",
  headline: "A slow rhythm carved from lime plaster, aged teak, and morning salt mist.",
  manifesto: [
    "Maison Sylvan began not on a drafting table, but during a winter walk through centuries-old olive terraces in the Serra de Tramuntana. We listened to the stone before laying a single foundation.",
    "Originally an 1894 olive oil press and sanctuary for wandering painters, the estate has been quietly restored by master stone masons using hand-cut Marés limestone and breathable hydraulic lime.",
    "There are no brass elevators, velvet ropes, or digital chimes here. Only the scent of wild rosemary warming under the Mediterranean sun, the sound of water trickling into ancient stone cisterns, and rooms sculpted to frame the changing sky."
  ],
  stats: [
    { value: "24", label: "Private Sanctuaries", detail: "Scattered across terraced gardens" },
    { value: "1894", label: "Heritage Estate", detail: "Historic stone olive mill restored" },
    { value: "1", label: "Michelin Green Star", detail: "Estate-foraged wood-fired cuisine" },
    { value: "12 Ha", label: "Protected Groves", detail: "Ancient olive & wild almond trees" },
  ],
  images: {
    primary: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    secondary: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    texture: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=85",
  },
  quote: {
    text: "Architecture must be humble before the land. We do not impose our presence; we simply prepare a quiet frame for the sea.",
    author: "Mateo Carrió",
    role: "Lead Architect & Conservator"
  }
};

export const suitesCollection = [
  {
    id: "garden-pavilion",
    category: "garden",
    categoryLabel: "Garden Pavilions",
    title: "The Garden Olive Pavilion",
    subtitle: "Ground Floor • Private Courtyard & Herb Terrace",
    tagline: "Dappled afternoon shade and the fragrance of wild thyme.",
    priceEUR: 680,
    size: "68 m² / 730 sq ft",
    capacity: "2 Guests",
    bed: "King (Belgian Washed Linen)",
    view: "Ancient Olive Orchard & Courtyard",
    description: "Nestled quietly within the lower stone terraces, this sanctuary opens directly onto a private shaded courtyard with an outdoor rain shower, hand-carved stone daybed, and fragrant citrus trees.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Private walled courtyard with fig tree",
      "Outdoor heated stone rain shower",
      "Wood-burning Swedish fireplace",
      "Freestanding limestone soaking tub",
      "Curated botanical apothecary minibar",
      "Custom ceramic tableware by local artisan"
    ],
    amenities: ["High-speed Starlink Wi-Fi", "Daily estate breakfast included", "Sonos soundscape system", "Diptyque bath amenities", "Twice-daily housekeeping"]
  },
  {
    id: "cliffside-ocean-suite",
    category: "ocean",
    categoryLabel: "Cliffside Ocean Suites",
    title: "The Cliffside Horizon Suite",
    subtitle: "Elevated Terrace • Heated Saltwater Plunge Pool",
    tagline: "Uninterrupted vistas where the sea merges into the heavens.",
    priceEUR: 950,
    size: "86 m² / 925 sq ft",
    capacity: "2 Guests",
    bed: "Super King (Egyptian Cotton & Raw Silk)",
    view: "Panoramic Mediterranean Sea & Sunset",
    description: "Perched along the limestone crag, featuring wall-to-wall pocket glass doors that dissolve into an expansive cantilevered stone veranda. Watch the sun slip into the Balearic sea from your private heated plunge pool.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Private heated saltwater plunge pool",
      "Direct western sunset orientation",
      "Custom oak writing desk & daybed",
      "Sunken monolithic marble bath",
      "Private sommelier wine cooler with Balearic vintages",
      "Telescope for clear night stargazing"
    ],
    amenities: ["Daily sunset champagne & aperitivo", "Exclusive thermal bath morning access", "Bespoke pillow menu", "Private terrace dining service", "Valet unpack & press service"]
  },
  {
    id: "penthouse-belvedere",
    category: "penthouse",
    categoryLabel: "The Penthouses",
    title: "The Belvédère Master Suite",
    subtitle: "Top Tier • Dual Solarium & 360° Panorama",
    tagline: "The crown of the estate, surrounded only by light and wind.",
    priceEUR: 1480,
    size: "142 m² / 1,530 sq ft",
    capacity: "3 Guests",
    bed: "Custom Emperor Bed & Daybed",
    view: "360° Coastline, Serra Mountains & Groves",
    description: "Occupying the entire top level of the historic mill tower, The Belvédère offers soaring cedar beam ceilings, dual wrap-around solariums, an outdoor marble fireplace, and an open-air bronze soaking tub beneath the stars.",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Dual sun and shade rooftop solariums",
      "Open-air bronze soaking tub on terrace",
      "Private outdoor dining table for 6",
      "Bespoke vinyl listening corner with vintage turntable",
      "Dedicated estate butler service",
      "Private electric Fiat Jolly beach cruiser included"
    ],
    amenities: ["Complimentary airport chauffeur in electric Porsche", "Unlimited private spa cistern access", "In-suite private chef dining option", "Custom silk kimono robes to keep"]
  },
  {
    id: "historic-mill-villa",
    category: "villa",
    categoryLabel: "Standalone Villas",
    title: "La Casita del Molino (Private Villa)",
    subtitle: "Two-Bedroom Residence • Private Olive Grove & Pool",
    tagline: "Total seclusion for families and intimate reunions.",
    priceEUR: 2200,
    size: "210 m² / 2,260 sq ft",
    capacity: "4-5 Guests",
    bed: "Two King En-Suites + Reading Nook",
    view: "Private Estate Gardens & Mountain Ridge",
    description: "A detached 19th-century stone farmstead tucked into its own half-hectare grove. Complete with a private 14-meter dark stone lap pool, full artisanal chef's kitchen, outdoor wood-fire oven, and shaded pergolas.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Private 14m dark granite lap pool",
      "Private gated garden & orchard access",
      "Artisanal chef's kitchen & wood oven",
      "Two master suites with outdoor garden showers",
      "Private yoga deck under wild pine canopy",
      "Private wine cellar with sommelier selection"
    ],
    amenities: ["Private dedicated chef for breakfasts", "Daily wellness instructor on call", "Two electric estate buggies", "Personal concierge on call 24/7"]
  }
];

export const experiencesData = [
  {
    id: "roman-cistern",
    title: "The Subterranean Cistern Ritual",
    category: "Thermal Sanctuary",
    duration: "90 Minutes",
    schedule: "Daily at Dawn & Dusk",
    badge: "SIGNATURE SPA",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    description: "Carved directly into the limestone mountain, our subterranean thermal cistern features natural salt-flotation water at 37°C. Experience guided sound therapy, followed by cold plunge therapy and wild mint oil hydration.",
    details: [
      "Salt flotation pool with natural acoustic resonance",
      "Eucalyptus steam vault and crushed ice scrub",
      "Warm herbal tisane infused with estate-grown lemon verbena",
      "Limited to 4 guests per session for absolute tranquility"
    ]
  },
  {
    id: "llaut-coastal-charter",
    title: "Classic Llaüt Wooden Yacht Charter",
    category: "Maritime Discovery",
    duration: "Half or Full Day",
    schedule: "Morning 09:00 or Sunset 17:30",
    badge: "PRIVATE EXPEDITION",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
    description: "Board 'Aura', our restored 1968 Balearic wooden llaüt yacht. Captain Bernat navigates sheer emerald sea caves, private snorkeling coves accessible only by sea, and anchors for a lunch of freshly caught red prawns and chilled mineral wine.",
    details: [
      "Exclusive private charter with seasoned local skipper",
      "Artisanal picnic prepared by Chef Matteo on board",
      "Handcrafted snorkel gear, paddle boards, and solar shade",
      "Anchorage in secluded turquoise calas away from crowds"
    ]
  },
  {
    id: "olive-harvest-tasting",
    title: "Dawn Harvest & Cold-Press Mill Tasting",
    category: "Terroir & Heritage",
    duration: "2 Hours",
    schedule: "Tuesdays & Saturdays, 07:30",
    badge: "ESTATE RITUAL",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=85",
    description: "Walk the terraced groves as the sun crests the Tramuntana ridge. Learn ancient regenerative pruning methods, hand-pick Arbequina olives, and witness the cold extraction in our stone press before tasting fresh unclarified oil with warm sourdough.",
    details: [
      "Guided walk with Master Agronomist Joan",
      "First-press raw olive oil tasting flight with salt flakes",
      "Freshly baked carob and sourdough bread from our wood hearth",
      "Hand-numbered estate olive oil bottle to take home"
    ]
  },
  {
    id: "solarium-sundown",
    title: "Sunset Aperitivo at the Solarium",
    category: "Gastronomic Gathering",
    duration: "Every Evening",
    schedule: "18:30 – 20:30",
    badge: "COMPLIMENTARY GUEST RITUAL",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
    description: "As the limestone cliffs turn amber and rose, gather at the edge of the infinity saltwater pool. Sommelier Camilla uncorks biodynamic Mallorcan natural wines paired with warm Sobrassada tartlets, local Mahón cheeses, and smoked almonds.",
    details: [
      "Curated ambient acoustic music and fire bowls",
      "Rotating showcase of Balearic biodynamic vintages",
      "Bespoke botanical aperitifs infused with rosemary and bergamot",
      "Open to all staying guests with our compliments"
    ]
  }
];

export const diningData = {
  restaurantName: "L'ATELIER DE TERRE",
  subTitle: "Wood-Fired Terroir & Coastal Sea Foraging",
  headline: "Food rooted in ancient fire, sea salt, and living soil.",
  chef: {
    name: "Matteo Sanna & Camilla Vane",
    role: "Head Chef & Head Sommelier",
    bio: "After tenures in San Sebastián and Copenhagen, Matteo returned to his native Balearics to build a kitchen that honors zero-kilometer seasonality. Over 80% of our produce comes from our two-hectare biodynamic vegetable gardens and trusted local diving fishermen.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85"
  },
  accolades: [
    "Michelin Green Star for Sustainable Gastronomy 2024",
    "World's 50 Best Discovery Venue",
    "Exclusive Low-Intervention Balearic Wine Cellar (480 References)"
  ],
  atmosphereImages: [
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85"
  ],
  menus: {
    tasting: [
      {
        course: "First Movement",
        dish: "Sun-Ripened Yellow Figs & Sea Urchin",
        notes: "Smoked almond milk emulsion, wild marjoram oil, crisped sea salt cracker",
        pairing: "Can Majoral 'Galdent' Viognier, 2022"
      },
      {
        course: "Second Movement",
        dish: "Charcoal-Roasted Heirloom Artichoke",
        notes: "Cultured sheep whey broth, 30-year solera vinegar, grated black summer truffle",
        pairing: "4 Kilos '12 Volts' Callet-Fogoneu, 2021"
      },
      {
        course: "Third Movement",
        dish: "Line-Caught Wild Turbot in Fig Wood Smoke",
        notes: "Braised sea fennel, blistered cherry tomatoes, reduction of bones and roasted garum",
        pairing: "Soca-Rel 'Escursac' Ancestral Pet-Nat, 2023"
      },
      {
        course: "Fourth Movement",
        dish: "Mallorcan Black Pig Shoulder Slow-Roasted 18 Hours",
        notes: "Caramelized estate quince, wild thyme jus, hand-milled polenta",
        pairing: "Anima Negra 'Son Negre', 2019"
      },
      {
        course: "Sweet Finale",
        dish: "Frozen Sheep's Milk Curd & Smoked Olive Oil",
        notes: "Crystallized rosemary blossoms, wild mountain honey comb, sea salt dust",
        pairing: "Mortitx 'Dolç de Gel' Late Harvest Malvasia"
      }
    ],
    cellarBar: [
      {
        name: "L'Élixir de Tramuntana",
        ingredients: "Smoked gin, house-distilled wild pine liqueur, lemon balm, charred rosemary mist",
        price: "€22"
      },
      {
        name: "Sol de Deià",
        ingredients: "Organic mezcal, grilled estate blood orange cordial, dry vermouth, salt crystal rim",
        price: "€24"
      },
      {
        name: "Cisterna Fizz (Low ABV)",
        ingredients: "Verdelho grape must, clarified bergamot, fresh elderflower, sparkling mineral spring",
        price: "€18"
      }
    ]
  }
};

export const galleryItems = [
  {
    id: 1,
    category: "architecture",
    title: "The Main Loggia at Golden Hour",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    caption: "Hand-cut Marés limestone arches framing the western horizon."
  },
  {
    id: 2,
    category: "suites",
    title: "Linen & Morning Light in Suite 08",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
    caption: "Raw unbleached linen sheets and polished lime plaster walls."
  },
  {
    id: 3,
    category: "gastronomy",
    title: "Wood-Fired Hearth Plating",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85",
    caption: "Chef Matteo finishing a dish with wild sea fennel."
  },
  {
    id: 4,
    category: "grounds",
    title: "The Solarium Infinity Basin",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85",
    caption: "Natural saltwater infinity pool overlooking the Mediterranean."
  },
  {
    id: 5,
    category: "architecture",
    title: "The Roman Bath Cistern",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    caption: "Subterranean vaulted pool carved into living rock."
  },
  {
    id: 6,
    category: "suites",
    title: "Private Veranda at Twilight",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    caption: "Cantilevered stone terrace overlooking the sea."
  },
  {
    id: 7,
    category: "grounds",
    title: "Ancient Olive Orchard Path",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=900&q=85",
    caption: "Centuries-old twisted olive trunks along the stone stairways."
  },
  {
    id: 8,
    category: "gastronomy",
    title: "Cellar Natural Wine Pour",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
    caption: "Low-intervention Balearic vintages poured at cellar temperature."
  }
];

export const pressAndReviews = [
  {
    type: "press",
    publication: "Architectural Digest",
    headline: "The Art of Restraint",
    quote: "Maison Sylvan is a masterclass in quiet Mediterranean brutalism. It strips away the gilded clutter of traditional five-star hotels to reveal what truly matters: stone, light, scent, and absolute stillness.",
    date: "Annual Hospitality Issue",
    author: "Elena Rostova"
  },
  {
    type: "press",
    publication: "Condé Nast Traveler",
    headline: "The Gold List",
    quote: "A sanctuary where time feels elastic. You wake to the chime of distant sheep bells, swim in water carved from rock, and dine on food that tastes alive with the essence of wild sea and sun.",
    date: "Best Boutique Retreats in Europe",
    author: "Julian Thorne"
  },
  {
    type: "guest",
    publication: "Dispatch from Suite 14",
    headline: "Four Days Without a Clock",
    quote: "We intended to explore the entire island. Instead, we spent our entire stay reading under the fig trees, floating in the cistern at dusk, and watching the shadows crawl across the terrace stone. We left with our souls stitched back together.",
    date: "Stayed September 2024",
    author: "Helena & David K., Copenhagen"
  },
  {
    type: "guest",
    publication: "Dispatch from The Belvédère",
    headline: "Unmatched Hospitality",
    quote: "The team anticipates what you need before you recognize it yourself—a glass of chilled mountain spring water after an afternoon walk, a blanket laid over your chair as the twilight chill sets in. Perfection.",
    date: "Stayed July 2024",
    author: "Marc-Antoine de V., Geneva"
  }
];

export const eventsData = {
  badge: "PRIVATE GATHERINGS & RETREATS",
  headline: "An exclusive canvas for moments that defy ordinary time.",
  intro: "Whether hosting an intimate wedding beneath century-old pergolas, a private full-estate buyout, or an executive creative salon, Maison Sylvan offers a sanctuary where privacy and discreet attention are absolute.",
  pillars: [
    {
      title: "Estate Buyouts",
      capacity: "Up to 54 Guests across 24 Suites",
      desc: "Complete private reign over all 12 hectares, pools, restaurant, subterranean thermal cistern, and private gardens. Dedicated team of 32 discreet staff.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Intimate Weddings & Vows",
      capacity: "Up to 60 Guests",
      desc: "Ceremonies beneath the ancient olive grove pergola with views over the endless sea. Wood-fired reception dinner under candlelit stone vaults.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Creative Salons & Executive Retreats",
      capacity: "Up to 24 Guests",
      desc: "High-level strategic summits and creative residencies with bespoke dining, silent work spaces, and private boat expeditions.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=85"
    }
  ]
};
