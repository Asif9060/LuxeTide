import { SHIPS } from '@/src/constants';
import { getShipDetails } from '@/src/ship-details';
import CabinsContent from '@/src/components/CabinsContent';

interface SuiteData {
  shipId: string;
  shipName: string;
  capacity: string;
  suites: Array<{
    slug: string;
    title: string;
    priceLabel: string;
    capacityLabel: string;
    description: string;
    highlights: string[];
    image?: {
      src: string;
      title: string;
      type: 'image' | 'video' | 'pdf';
      caption?: string;
    };
  }>;
}

export default function CabinsPage() {
  const allSuites: SuiteData[] = SHIPS.map((ship) => {
    const details = getShipDetails(ship.id);
    return {
      shipId: ship.id,
      shipName: ship.name,
      capacity: ship.capacity,
      suites: details?.suites || [],
    };
  }).filter((item) => item.suites.length > 0);

  return <CabinsContent suites={allSuites} />;

}
