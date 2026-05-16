import { SHIPS } from "./constants";
import type {
  BookingInfo,
  MediaItem,
  MediaSection,
  ShipDetails,
  ShipMeta,
  ShipSuite,
  ShipSuiteDetails,
} from "./ship-types";

type SuiteSeed = {
  title: string;
  priceLabel: string;
  capacityLabel: string;
  description: string;
  highlights: string[];
  imageSrc: string;
};

const HERO_VIDEO_BY_SLUG: Record<string, string> = {
  "the-wave-2": "https://res.cloudinary.com/doxxexlxe/video/upload/q_auto,vc_auto/v1778941081/The_Wave_2_Child_Zone_u1dfci.mp4",
  "the-wave": "https://res.cloudinary.com/doxxexlxe/video/upload/q_auto,vc_auto/v1778942043/The_Wave_Optimized._pmhf08.mp4",
  "the-river-cruise": "https://res.cloudinary.com/doxxexlxe/video/upload/q_auto,vc_auto/v1778942477/River_Cruise_Ovc_4K_2023_okwngh.mp4",
};

const SHIP_CONTENT: Record<string, Pick<ShipMeta, "tagline" | "about" | "highlights">> = {
  "the-wave-2": {
    tagline: "Flagship Floating Resort",
    about: [
      "M.V. The Wave 2 delivers a full-scale cruise experience with dedicated zones for play, wellness, and relaxation.",
      "From panoramic suites to curated dining and open social decks, every detail is arranged for comfort on long journeys.",
    ],
    highlights: [
      "Infinity Royal Suite collection",
      "Dedicated play and interaction zones",
      "Panorama suite selections",
      "Family-first onboard layouts",
    ],
  },
  "the-wave": {
    tagline: "Signature Bay Cruise",
    about: [
      "M.V. The Wave is built for effortless cruising with generous social spaces, serene cabins, and scenic observation decks.",
      "Its balanced layout blends leisure, dining, and relaxation areas for families and premium group travel.",
    ],
    highlights: [
      "Multi-zone dining and food spaces",
      "Open deck pool views",
      "Family-friendly play areas",
      "Private balcony scenes",
    ],
  },
  "the-river-cruise": {
    tagline: "Classic River Escape",
    about: [
      "The River Cruise offers a calm, cinematic river journey with comfortable cabins and curated communal spaces.",
      "Designed for scenic travel, it pairs open decks with cozy interiors for a complete experience on the water.",
    ],
    highlights: [
      "Spacious cabin layouts",
      "Open deck river views",
      "Onboard facilities and services",
      "Documentary-ready travel routes",
    ],
  },
};

const BOOKING_INFO: Record<string, BookingInfo> = {
  "the-wave-2": {
    pricePerPerson: "From ?85,000 / person",
    inclusions: ["Luxury suite stay", "Dining access", "Onboard recreation", "Concierge support"],
    notes: ["Rates vary by suite category and travel date.", "Menus and special requests are available on the Dining page."],
  },
  "the-wave": {
    pricePerPerson: "From ?78,000 / person",
    inclusions: ["Premium cabin stay", "Dining access", "Family amenities", "Concierge support"],
    notes: ["Rates vary by cabin type and travel date.", "Menus and special requests are available on the Dining page."],
  },
  "the-river-cruise": {
    pricePerPerson: "From ?55,000 / person",
    inclusions: ["Boutique cabin stay", "River dining", "Sightseeing deck access", "Concierge support"],
    notes: ["Rates vary by cabin type and route.", "Menus and special requests are available on the Dining page."],
  },
};

const SUITES_BY_SLUG: Record<string, SuiteSeed[]> = {
  "the-wave-2": [
    {
      title: "Infinity Royal Suite",
      priceLabel: "From ?25,000 / night",
      capacityLabel: "Up to 2 guests",
      description: "Luxury suite with a private panoramic view and a polished, high-comfort finish.",
      highlights: ["Panoramic views", "Private lounge feel", "Signature luxury finish"],
      imageSrc: "/ships/the-wave-2/Infinity%20Royal%20Suite/DSC05250.jpg",
    },
    {
      title: "Panorama Deluxe Suite",
      priceLabel: "From ?18,000 / night",
      capacityLabel: "Up to 2 guests",
      description: "Deluxe suite with a bright layout designed for relaxed cruising and wide-angle views.",
      highlights: ["Wide balcony feel", "Relaxed layout", "Premium suite finish"],
      imageSrc: "/ships/the-wave-2/Panorama%20Deluxe%20Suite/DSC05157.jpg",
    },
    {
      title: "Panorama King Suite",
      priceLabel: "From ?22,000 / night",
      capacityLabel: "Up to 2 guests",
      description: "King suite with a spacious interior and a refined setting for premium travelers.",
      highlights: ["Spacious interior", "Premium privacy", "Elegant finish"],
      imageSrc: "/ships/the-wave-2/Panorama%20King%20Suite/DSC05210.jpg",
    },
    {
      title: "Panorama Triple Suite",
      priceLabel: "From ?24,000 / night",
      capacityLabel: "Up to 3 guests",
      description: "Triple suite made for small groups with an open layout and broad exterior views.",
      highlights: ["Group-friendly layout", "Broad views", "Comfort for three"],
      imageSrc: "/ships/the-wave-2/Panorama%20Triple%20Suite/DSC05274.jpg",
    },
    {
      title: "Vip Panorama Triple Suite",
      priceLabel: "From ?30,000 / night",
      capacityLabel: "Up to 3 guests",
      description: "VIP triple suite with the most elevated presentation in the panorama collection.",
      highlights: ["VIP treatment", "Panorama styling", "Best-in-class comfort"],
      imageSrc: "/ships/the-wave-2/VIP%20Panorama%20Triple%20Suite/DSC05280.jpg",
    },
  ],
  "the-wave": [
    {
      title: "Couple Bed Cabin",
      priceLabel: "From ?16,000 / night",
      capacityLabel: "Up to 2 guests",
      description: "A cozy premium cabin setup for couples and short scenic journeys.",
      highlights: ["Couple-friendly", "Comfort cabin", "Elegant interior"],
      imageSrc: "/ships/the-wave/The%20Wave%20Picture/Couple%20Bed%20The%20Wave.jpg",
    },
    {
      title: "Family Cabin",
      priceLabel: "From ?20,000 / night",
      capacityLabel: "Up to 4 guests",
      description: "Family-focused cabin with practical space and easy access to common amenities.",
      highlights: ["Family layout", "Extra space", "Balanced comfort"],
      imageSrc: "/ships/the-wave/The%20Wave%20Picture/4%20Bed%20The%20Wave.jpg",
    },
    {
      title: "Single Bed Cabin",
      priceLabel: "From ?12,000 / night",
      capacityLabel: "Up to 1 guest",
      description: "Compact private cabin ideal for solo guests on shorter trips.",
      highlights: ["Private cabin", "Solo traveler", "Efficient comfort"],
      imageSrc: "/ships/the-wave/The%20Wave%20Picture/Singel%20Bed%20The%20Wave.jpg",
    },
  ],
  "the-river-cruise": [
    {
      title: "River View Cabin",
      priceLabel: "From ?14,000 / night",
      capacityLabel: "Up to 2 guests",
      description: "A calm river-facing cabin made for scenic routes and restful nights.",
      highlights: ["River-facing", "Comfort bedding", "Quiet atmosphere"],
      imageSrc: "/ships/the-river-cruise/River%20Cruise%20Photo/RiverCruise.jpg",
    },
    {
      title: "Vip Couple Cabin",
      priceLabel: "From ?19,000 / night",
      capacityLabel: "Up to 2 guests",
      description: "Premium couple cabin with upgraded furnishings and private comfort.",
      highlights: ["VIP furnishing", "Couple-focused", "Premium comfort"],
      imageSrc: "/ships/the-river-cruise/River%20Cruise%20Photo/VIP%20Couple%20bed.jpg",
    },
    {
      title: "Bank Bed Cabin",
      priceLabel: "From ?13,000 / night",
      capacityLabel: "Up to 3 guests",
      description: "Practical multi-guest cabin ideal for group or family river travel.",
      highlights: ["Group-friendly", "Practical layout", "Value comfort"],
      imageSrc: "/ships/the-river-cruise/River%20Cruise%20Photo/2%2B1%20bed%20bank.jpg",
    },
  ],
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function mediaImage(src: string, title: string): MediaItem {
  return {
    src,
    title,
    type: "image",
    caption: title,
  };
}

function buildSuites(slug: string): ShipSuite[] {
  const seeds = SUITES_BY_SLUG[slug] ?? [];
  return seeds.map((seed) => {
    const image = mediaImage(seed.imageSrc, seed.title);
    return {
      slug: slugify(seed.title),
      title: seed.title,
      priceLabel: seed.priceLabel,
      capacityLabel: seed.capacityLabel,
      description: seed.description,
      highlights: seed.highlights,
      image,
      gallery: [image],
    };
  });
}

export function getShipSlugs() {
  return SHIPS.map((ship) => ship.id);
}

export function getShipSuiteParams() {
  return SHIPS.flatMap((ship) => {
    const details = getShipDetails(ship.id);
    return details?.suites.map((suite) => ({ id: ship.id, suite: suite.slug })) ?? [];
  });
}

export function getShipDetails(slug: string): ShipDetails | null {
  const ship = SHIPS.find((item) => item.id === slug);
  if (!ship) {
    return null;
  }

  const content = SHIP_CONTENT[slug] ?? {
    tagline: "Signature Voyage",
    about: ["An elevated cruise experience designed for comfort, space, and memorable journeys."],
    highlights: ship.amenities,
  };

  const meta: ShipMeta = {
    id: ship.id,
    slug,
    name: ship.name,
    tagline: content.tagline,
    description: ship.description,
    capacityLabel: ship.capacity,
    amenities: ship.amenities,
    about: content.about,
    highlights: content.highlights,
  };

  const suites = buildSuites(slug);
  const suiteSections: MediaSection[] = suites.map((suite) => ({
    id: suite.slug,
    title: suite.title,
    items: suite.gallery,
  }));

  const galleryItems: MediaItem[] = [mediaImage(ship.image, ship.name), ...suites.map((suite) => suite.image).filter(Boolean) as MediaItem[]];
  
  const shipAreaLabels = [
    "Balcony",
    "Corridor",
    "Play Zone",
    "Food Zone",
    "Swimming Pool",
    "Bedrooms & Suites",
    "Exterior Views",
  ];
  
  const gallerySections: MediaSection[] = [
    {
      id: "highlights",
      title: "Gallery Highlights",
      items: galleryItems,
    },
    ...shipAreaLabels.map((label) => ({
      id: label.toLowerCase().replace(/\s+/g, "-"),
      title: label,
      items: [],
    })),
  ];

  const heroVideoSrc = HERO_VIDEO_BY_SLUG[slug];
  const heroVideo = heroVideoSrc
    ? {
        src: heroVideoSrc,
        title: `${ship.name} Hero Video`,
        type: "video" as const,
      }
    : undefined;

  return {
    meta,
    hero: {
      video: heroVideo,
      image: mediaImage(ship.image, ship.name),
    },
    gallerySections,
    suiteSections,
    suites,
    foodSections: [],
    docs: [],
    booking: BOOKING_INFO[slug] ?? {
      pricePerPerson: "Price on request / person",
      inclusions: ["Cabin stay", "Dining access", "Concierge support"],
      notes: ["Final price depends on ship, cabin category, and travel date."],
    },
    videos: heroVideo ? [heroVideo] : [],
  };
}

export function getShipSuiteDetails(shipSlug: string, suiteSlug: string): ShipSuiteDetails | null {
  const details = getShipDetails(shipSlug);
  if (!details) {
    return null;
  }

  const suite = details.suites.find((item) => item.slug === suiteSlug);
  if (!suite) {
    return null;
  }

  return {
    ship: details.meta,
    booking: details.booking,
    suite,
  };
}
