import fs from "node:fs";
import path from "node:path";
import { SHIPS } from "./constants";
import type { BookingInfo, MediaItem, MediaSection, ShipDetails, ShipMeta, ShipSuite, ShipSuiteDetails } from "./ship-types";

const SHIP_CONTENT: Record<string, Pick<ShipMeta, "tagline" | "about" | "highlights">> = {
  "the-wave-2": {
    tagline: "Flagship Floating Resort",
    about: [
      "M.V. The Wave 2 delivers a full-scale cruise experience with dedicated zones for play, wellness, and relaxation.",
      "From panoramic suites to curated dining and open social decks, every detail is arranged for comfort on long journeys."
    ],
    highlights: [
      "Infinity Royal Suite collection",
      "Dedicated play and interaction zones",
      "Panorama suite selections",
      "Family-first onboard layouts"
    ]
  },
  "the-wave": {
    tagline: "Signature Bay Cruise",
    about: [
      "M.V. The Wave is built for effortless cruising with generous social spaces, serene cabins, and scenic observation decks.",
      "Its balanced layout blends leisure, dining, and relaxation areas for families and premium group travel."
    ],
    highlights: [
      "Multi-zone dining and food spaces",
      "Open deck pool views",
      "Family-friendly play areas",
      "Private balcony scenes"
    ]
  },
  "the-river-cruise": {
    tagline: "Classic River Escape",
    about: [
      "The River Cruise offers a calm, cinematic river journey with comfortable cabins and curated communal spaces.",
      "Designed for scenic travel, it pairs open decks with cozy interiors for a complete experience on the water."
    ],
    highlights: [
      "Spacious cabin layouts",
      "Open deck river views",
      "Onboard facilities and services",
      "Documentary-ready travel routes"
    ]
  }
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);
const PDF_EXTENSIONS = new Set([".pdf"]);
const WAVE_2_HERO_VIDEO_URL = "https://res.cloudinary.com/doxxexlxe/video/upload/v1778941081/The_Wave_2_Child_Zone_u1dfci.mp4";

const SUITE_KEYWORDS = [
  "suite",
  "vip",
  "deluxe",
  "king",
  "triple",
  "couple",
  "bed",
  "room"
];

const KEYWORD_GROUPING_SLUGS = new Set(["the-wave", "the-river-cruise"]);

const WAVE_2_SUITE_ORDER = [
  "infinity royal suite",
  "panorama deluxe suite",
  "panorama king suite",
  "panorama triple suite",
  "vip panorama triple suite"
];
const WAVE_2_SUITE_SET = new Set(WAVE_2_SUITE_ORDER);

const KEYWORD_GROUPS: Array<{ title: string; keywords: string[] }> = [
  { title: "Balcony", keywords: ["balcony"] },
  { title: "Play Zone", keywords: ["play", "playground", "child zone"] },
  { title: "Food Zone", keywords: ["food", "dining", "conference"] },
  { title: "Swimming Pool", keywords: ["pool", "suming", "summing"] },
  { title: "Bedrooms & Suites", keywords: ["bed", "couple", "vip", "room"] },
  { title: "Corridors & Stairs", keywords: ["corridor", "stear", "stair", "steer", "wash", "bathroom"] },
  { title: "Exterior Views", keywords: ["back side", "night", "head", "ship", "cruise", "wave"] }
];

const DOC_RULES: Array<{ id: string; title: string; keywords: string[]; description?: string }> = [
  { id: "facilities", title: "Facilities", keywords: ["facilities"] },
  { id: "food-menu", title: "Food Menu", keywords: ["food menu", "menu"] },
  { id: "price-chart", title: "Price Chart", keywords: ["price", "tariff"] },
  { id: "package", title: "Package Includes & Excludes", keywords: ["package includes", "package excludes", "includes, excludes"] },
  { id: "policies", title: "Policies & Payments", keywords: ["payment", "cancellation", "bank details", "policy"] },
  { id: "itinerary", title: "Tour Itinerary", keywords: ["itinerary"] },
  { id: "layout", title: "Layouts & Deck Plans", keywords: ["layout"] },
  { id: "company", title: "Company Information", keywords: ["company information", "authorized agents", "clients"] },
  { id: "safety", title: "Power & Safety Measures", keywords: ["power", "safety"] }
];

const BOOKING_INFO: Record<string, BookingInfo> = {
  "the-wave-2": {
    pricePerPerson: "From ৳85,000 / person",
    inclusions: ["Luxury suite stay", "Dining access", "Onboard recreation", "Concierge support"],
    notes: ["Rates vary by suite category and travel date.", "Food and facilities can be selected on the dedicated pages."]
  },
  "the-wave": {
    pricePerPerson: "From ৳78,000 / person",
    inclusions: ["Premium cabin stay", "Dining access", "Family amenities", "Concierge support"],
    notes: ["Rates vary by cabin type and travel date.", "Food and facility documents are available separately."]
  },
  "the-river-cruise": {
    pricePerPerson: "From ৳55,000 / person",
    inclusions: ["Boutique cabin stay", "River dining", "Sightseeing deck access", "Concierge support"],
    notes: ["Rates vary by cabin type and route.", "Menus and policies are shown on the food page."]
  }
};

const SUITE_INFO: Record<string, Pick<ShipSuite, "priceLabel" | "capacityLabel" | "description" | "highlights">> = {
  "infinity royal suite": {
    priceLabel: "From ৳25,000 / night",
    capacityLabel: "Up to 2 guests",
    description: "Luxury suite with a private panoramic view and a polished, high-comfort finish.",
    highlights: ["Panoramic views", "Private lounge feel", "Signature luxury finish"]
  },
  "panorama deluxe suite": {
    priceLabel: "From ৳18,000 / night",
    capacityLabel: "Up to 2 guests",
    description: "Deluxe suite with a bright layout designed for relaxed cruising and wide-angle views.",
    highlights: ["Wide balcony feel", "Relaxed layout", "Premium suite finish"]
  },
  "panorama king suite": {
    priceLabel: "From ৳22,000 / night",
    capacityLabel: "Up to 2 guests",
    description: "King suite with a spacious interior and a refined setting for premium travelers.",
    highlights: ["Spacious interior", "Premium privacy", "Elegant finish"]
  },
  "panorama triple suite": {
    priceLabel: "From ৳24,000 / night",
    capacityLabel: "Up to 3 guests",
    description: "Triple suite made for small groups with an open layout and broad exterior views.",
    highlights: ["Group-friendly layout", "Broad views", "Comfort for three"]
  },
  "vip panorama triple suite": {
    priceLabel: "From ৳30,000 / night",
    capacityLabel: "Up to 3 guests",
    description: "VIP triple suite with the most elevated presentation in the panorama collection.",
    highlights: ["VIP treatment", "Panorama styling", "Best-in-class comfort"]
  }
};

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
    highlights: ship.amenities
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
    highlights: content.highlights
  };

  const assetBase = path.join(process.cwd(), "public", "ships", slug);
  const assets = readShipAssets(assetBase, slug);

  return {
    meta,
    ...assets
  };
}

function readShipAssets(assetBase: string, slug: string) {
  const empty: Omit<ShipDetails, "meta"> = {
    hero: {},
    gallerySections: [],
    suiteSections: [],
    suites: [],
    foodSections: [],
    docs: [],
    booking: {
      pricePerPerson: '',
      inclusions: [],
      notes: []
    },
    videos: []
  };

  if (!fs.existsSync(assetBase)) {
    return empty;
  }

  const entries = fs.readdirSync(assetBase, { withFileTypes: true });
  const folders = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  const rootFiles = entries.filter((entry) => entry.isFile()).map((entry) => entry.name);

  const docsMap = new Map<string, MediaSection>();
  const videos: MediaItem[] = [];
  const rootGallery: MediaItem[] = [];
  let heroVideo: MediaItem | undefined;
  let heroImage: MediaItem | undefined;

  rootFiles.forEach((fileName) => {
    const ext = path.extname(fileName).toLowerCase();
    const publicPath = buildPublicPath(["ships", slug, fileName]);
    const title = formatTitle(removeExtension(fileName));

    if (VIDEO_EXTENSIONS.has(ext)) {
      const item: MediaItem = { src: publicPath, title, type: "video" };
      videos.push(item);
      if (!heroVideo) {
        heroVideo = item;
      }
      return;
    }

    if (!IMAGE_EXTENSIONS.has(ext) && !PDF_EXTENSIONS.has(ext)) {
      return;
    }

    const item: MediaItem = {
      src: publicPath,
      title,
      type: PDF_EXTENSIONS.has(ext) ? "pdf" : "image",
      caption: title
    };

    if (slug === "the-wave-2" && fileName.toLowerCase() === "ship.jpg" && item.type === "image") {
      heroImage = item;
    }

    const docCategory = matchDocCategory(fileName);
    if (docCategory) {
      const existing = docsMap.get(docCategory.id);
      if (existing) {
        existing.items.push(item);
      } else {
        docsMap.set(docCategory.id, {
          id: docCategory.id,
          title: docCategory.title,
          description: docCategory.description,
          items: [item]
        });
      }
      return;
    }

    rootGallery.push(item);
    if (!heroImage && item.type === "image") {
      heroImage = item;
    }
  });

  const gallerySections: MediaSection[] = [];
  const suiteSections: MediaSection[] = [];
  const foodSections: MediaSection[] = [];
  const allImages: MediaItem[] = [...rootGallery];
  const isWave2 = slug === "the-wave-2";

  if (folders.length > 0) {
    folders.forEach((folderName) => {
      const folderPath = path.join(assetBase, folderName);
      const files = fs.readdirSync(folderPath, { withFileTypes: true });
      const mediaFiles = files
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()));

      if (mediaFiles.length === 0) {
        return;
      }

      const itemsWithMatch = mediaFiles.map((file) => {
        const publicPath = buildPublicPath(["ships", slug, folderName, file]);
        const title = formatTitle(removeExtension(file));
        const item: MediaItem = { src: publicPath, title, type: "image", caption: title };
        allImages.push(item);
        return { item, matchName: file.toLowerCase() };
      });

      if (KEYWORD_GROUPING_SLUGS.has(slug)) {
        const groupedSections = groupByKeywords(itemsWithMatch);
        groupedSections.forEach((section) => {
          gallerySections.push(section);
        });
        return;
      }

      const section: MediaSection = {
        id: slugify(folderName),
        title: formatTitle(folderName),
        items: itemsWithMatch.map((entry) => entry.item)
      };

      if (isWave2) {
        const normalizedTitle = normalizeTitle(folderName);
        if (WAVE_2_SUITE_SET.has(normalizedTitle)) {
          suiteSections.push(section);
        } else {
          gallerySections.push(section);
        }
        return;
      }

      if (isSuiteFolder(folderName)) {
        suiteSections.push(section);
      } else {
        gallerySections.push(section);
      }
    });
  }

  if (rootGallery.length > 0) {
    gallerySections.push({
      id: "highlights",
      title: "Gallery Highlights",
      items: rootGallery
    });
  }

  if (!heroImage) {
    const firstImage = allImages.find((item) => item.type === "image");
    if (firstImage) {
      heroImage = firstImage;
    }
  }

  if (slug === "the-wave-2") {
    heroVideo = {
      src: WAVE_2_HERO_VIDEO_URL,
      title: "The Wave 2 Child Zone",
      type: "video"
    };
  }

  if (suiteSections.length === 0 && !isWave2) {
    const suiteItems = allImages.filter((item) => isSuiteMatch(item.title));
    if (suiteItems.length > 0) {
      suiteSections.push({
        id: "signature-suites",
        title: "Signature Suites",
        items: suiteItems
      });
    }
  }

  if (isWave2) {
    const ordered = WAVE_2_SUITE_ORDER.map((title) =>
      suiteSections.find((section) => normalizeTitle(section.title) === title)
    ).filter(Boolean) as MediaSection[];
    suiteSections.length = 0;
    suiteSections.push(...ordered);
  }

  const suites = buildSuites(suiteSections);

  const docs = DOC_RULES.map((rule) => docsMap.get(rule.id)).filter(Boolean) as MediaSection[];
  const foodDocs = docs.filter((section) => section.id === "food-menu");
  const generalDocs = docs.filter((section) => section.id !== "food-menu");
  const extraDocs = [...docsMap.values()].filter(
    (section) => !DOC_RULES.some((rule) => rule.id === section.id)
  );
  if (extraDocs.length > 0) {
    generalDocs.push({
      id: "additional-docs",
      title: "Additional Documents",
      items: extraDocs.flatMap((section) => section.items)
    });
  }

  foodSections.push(...foodDocs);

  return {
    hero: { video: heroVideo, image: heroImage },
    gallerySections,
    suiteSections,
    suites,
    foodSections,
    docs: generalDocs,
    booking: BOOKING_INFO[slug] ?? {
      pricePerPerson: "Price on request / person",
      inclusions: ["Cabin stay", "Dining access", "Concierge support"],
      notes: ["Final price depends on ship, cabin category, and travel date."]
    },
    videos
  } satisfies Omit<ShipDetails, "meta">;
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
    suite
  };
}

function matchDocCategory(fileName: string) {
  const normalized = fileName.toLowerCase();
  return DOC_RULES.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword)));
}

function groupByKeywords(items: Array<{ item: MediaItem; matchName: string }>) {
  const sections = KEYWORD_GROUPS.map((group) => ({
    id: slugify(group.title),
    title: group.title,
    items: [] as MediaItem[]
  }));
  const misc: MediaItem[] = [];

  items.forEach(({ item, matchName }) => {
    const lower = matchName.toLowerCase();
    const match = KEYWORD_GROUPS.find((group) =>
      group.keywords.some((keyword) => lower.includes(keyword))
    );

    if (match) {
      const section = sections.find((entry) => entry.title === match.title);
      section?.items.push(item);
    } else {
      misc.push(item);
    }
  });

  const filtered = sections.filter((section) => section.items.length > 0);
  if (misc.length > 0) {
    filtered.push({
      id: "gallery",
      title: "Gallery Highlights",
      items: misc
    });
  }

  return filtered;
}

function buildPublicPath(segments: string[]) {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function removeExtension(fileName: string) {
  return fileName.replace(/\.[^/.]+$/, "");
}

function formatTitle(value: string) {
  return value
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      if (word.length <= 3) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function isSuiteFolder(folderName: string) {
  const normalized = folderName.toLowerCase();
  return SUITE_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

function isSuiteMatch(title: string) {
  const normalized = title.toLowerCase();
  return SUITE_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

function buildSuites(suiteSections: MediaSection[]) {
  return suiteSections.map((section) => {
    const normalizedTitle = normalizeTitle(section.title);
    const suiteInfo = SUITE_INFO[normalizedTitle];
    const image = section.items.find((item) => item.type === "image") ?? section.items[0];

    return {
      slug: slugify(section.title),
      title: section.title,
      priceLabel: suiteInfo?.priceLabel ?? "Price on request",
      capacityLabel: suiteInfo?.capacityLabel ?? "Capacity varies",
      description: suiteInfo?.description ?? `${section.title} designed for elevated onboard comfort.`,
      highlights: suiteInfo?.highlights ?? ["Signature suite", "Premium finish", "Curated views"],
      image,
      gallery: section.items
    } satisfies ShipSuite;
  });
}
