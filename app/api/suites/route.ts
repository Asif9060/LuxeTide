import { SHIPS } from '@/src/constants';

type HomeSuite = {
  slug: string;
  title: string;
  priceLabel: string;
  ship: string;
  shipId: string;
  image?: { src: string };
};

const SUITES_BY_SHIP: Record<string, Array<Omit<HomeSuite, 'ship' | 'shipId'>>> = {
  'the-wave-2': [
    {
      slug: 'infinity-royal-suite',
      title: 'Infinity Royal Suite',
      priceLabel: 'From ৳25,000 / night',
      image: { src: '/ships/the-wave-2/Infinity%20Royal%20Suite/DSC05250.jpg' },
    },
    {
      slug: 'panorama-deluxe-suite',
      title: 'Panorama Deluxe Suite',
      priceLabel: 'From ৳18,000 / night',
      image: { src: '/ships/the-wave-2/Panorama%20Deluxe%20Suite/DSC05157.jpg' },
    },
    {
      slug: 'panorama-king-suite',
      title: 'Panorama King Suite',
      priceLabel: 'From ৳22,000 / night',
      image: { src: '/ships/the-wave-2/Panorama%20King%20Suite/DSC05210.jpg' },
    },
  ],
  'the-wave': [
    {
      slug: 'couple-bed',
      title: 'Couple Bed Cabin',
      priceLabel: 'From ৳16,000 / night',
      image: { src: '/ships/the-wave/The%20Wave%20Picture/Couple%20Bed%20The%20Wave.jpg' },
    },
    {
      slug: 'deluxe-double-bed',
      title: 'Deluxe Double Bed',
      priceLabel: 'From ৳20,000 / night',
      image: { src: '/ships/the-wave/The%20Wave%20Picture/Couple%20Bed2%20The%20Wave.jpg' },
    },
  ],
  'the-river-cruise': [
    {
      slug: 'river-view-cabin',
      title: 'River View Cabin',
      priceLabel: 'From ৳14,000 / night',
      image: { src: '/ships/the-river-cruise/River%20Cruise%20Photo/RiverCruise.jpg' },
    },
  ],
};

export async function GET() {
  try {
    const allSuites: HomeSuite[] = SHIPS.flatMap((ship) => {
      const suites = SUITES_BY_SHIP[ship.id] ?? [];
      return suites.map((suite) => ({
        ...suite,
        ship: ship.name,
        shipId: ship.id,
      }));
    });

    return Response.json(allSuites.slice(0, 6));
  } catch (error) {
    console.error('Error fetching suites:', error);
    return Response.json([], { status: 500 });
  }
}
