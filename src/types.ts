export interface Ship {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: string;
  amenities: string[];
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}
