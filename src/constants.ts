import { Ship, Destination, Package } from './types';

export const SHIPS: Ship[] = [
  {
    id: 'mv-bay-crown',
    name: 'M.V. Bay Crown',
    description: 'A masterpiece of contemporary luxury designed specifically for the calm waters of the Bay of Bengal.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
    capacity: '800 Guests',
    amenities: ['Emerald Dining', 'Infinity Deck', 'Private Balconies', 'Spa & Wellness']
  },
  {
    id: 'sundarban-majestic',
    name: 'Sundarban Majestic',
    description: 'An expedition vessel crafted for the intricate channels of the world\'s largest mangrove forest.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    capacity: '150 Guests',
    amenities: ['Naturalist Library', 'Observatory Deck', 'Local Cuisine', 'Safari Tenders']
  },
  {
    id: 'pearl-of-bengal',
    name: 'Pearl of Bengal',
    description: 'The ultimate floating retreat, featuring world-class luxury on the deep blue horizon.',
    image: 'https://images.pexels.com/photos/32609063/pexels-photo-32609063.jpeg',
    capacity: '1,200 Guests',
    amenities: ['Grand Theater', 'Sea View Gym', 'Specialty Seafood', 'Personal Butler']
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'sundarbans',
    name: 'The Sundarbans',
    description: 'Explore the mystical mangrove forests, home to the majestic Royal Bengal Tiger.',
    image: 'https://images.unsplash.com/photo-1614704170756-1dedf8819001?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'saint-martins',
    name: 'Saint Martin\'s Island',
    description: 'Bangladesh\'s only coral island, featuring turquoise waters and serene coconut groves.',
    image: 'https://images.unsplash.com/photo-1608958141441-0cc938517b18?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'coxs-bazar',
    name: 'Cox\'s Bazar',
    description: 'The world\'s longest natural sandy beach, a gateway to the endless horizon.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'kuakata',
    name: 'Kuakata',
    description: 'Known as the Daughter of the Ocean, where you can witness both sunrise and sunset.',
    image: 'https://images.unsplash.com/photo-1621532431604-94e803fb2063?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'emerald-expedition',
    title: 'Emerald Expedition',
    description: '4 nights exploring the deep Sundarbans and the Bay of Bengal.',
    price: 'From ৳85,000',
    duration: '5 Days',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'
  },
  {
    id: 'coral-luxury',
    title: 'Coral Island Luxury',
    description: 'A private escape to the pristine shores of Saint Martin\'s.',
    price: 'From ৳120,000',
    duration: '7 Days',
    image: 'https://images.pexels.com/photos/12652920/pexels-photo-12652920.jpeg'
  }
];
