import { SHIPS } from '@/src/constants';
import { getShipDetails } from '@/src/ship-details';

export async function GET() {
  try {
    const allSuites: Array<{ slug: string; title: string; priceLabel: string; ship: string; shipId: string; image?: { src: string } }> = [];

    SHIPS.forEach((ship) => {
      const details = getShipDetails(ship.id);
      if (details?.suites) {
        details.suites.forEach((suite) => {
          allSuites.push({
            slug: suite.slug,
            title: suite.title,
            priceLabel: suite.priceLabel,
            ship: ship.name,
            shipId: ship.id,
            image: suite.image,
          });
        });
      }
    });

    // Return a selection of suites (limit to some for homepage)
    return Response.json(allSuites.slice(0, 6));
  } catch (error) {
    console.error('Error fetching suites:', error);
    return Response.json([], { status: 500 });
  }
}
