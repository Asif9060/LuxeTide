import { Schedule } from '@/src/types';

const STORAGE_KEY = 'luxetide_schedules';

export const mockSchedules: Schedule[] = [
  {
    id: 'SCH-001',
    shipId: 'mv-bay-crown',
    shipName: 'M.V. Bay Crown',
    departureDate: '2026-06-12',
    returnDate: '2026-06-16',
    destination: 'Saint Martin\'s Island',
    pricePerPerson: 'BDT 85,000',
    totalCapacity: 800,
    bookedSeats: 650,
    status: 'scheduled',
    amenities: ['Emerald Dining', 'Infinity Deck', 'Spa'],
    itinerary: ['Dhaka Port', 'Saint Martin\'s', 'Coral Island', 'Return'],
    createdAt: '2026-05-01',
    updatedAt: '2026-05-15',
  },
  {
    id: 'SCH-002',
    shipId: 'sundarban-majestic',
    shipName: 'Sundarban Majestic',
    departureDate: '2026-07-01',
    returnDate: '2026-07-05',
    destination: 'Sundarban Mangrove Forest',
    pricePerPerson: 'BDT 65,000',
    totalCapacity: 150,
    bookedSeats: 120,
    status: 'scheduled',
    amenities: ['Wildlife Tours', 'Local Cuisine', 'Safari Tenders'],
    itinerary: ['Khulna Port', 'Mangrove Forest', 'Tiger Zone', 'Return'],
    createdAt: '2026-04-15',
    updatedAt: '2026-05-10',
  },
];

// Get all schedules from localStorage or return mock data
export function getSchedules(): Schedule[] {
  if (typeof window === 'undefined') {
    return mockSchedules;
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : mockSchedules;
}

// Save schedules to localStorage
export function saveSchedules(schedules: Schedule[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules));
  }
}

// Get a single schedule by ID
export function getScheduleById(id: string): Schedule | undefined {
  return getSchedules().find(s => s.id === id);
}

// Create a new schedule
export function createSchedule(schedule: Omit<Schedule, 'id' | 'createdAt' | 'updatedAt'>): Schedule {
  const schedules = getSchedules();
  const newSchedule: Schedule = {
    ...schedule,
    id: `SCH-${String(schedules.length + 1).padStart(3, '0')}`,
    createdAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0],
  };
  saveSchedules([...schedules, newSchedule]);
  return newSchedule;
}

// Update a schedule
export function updateSchedule(id: string, updates: Partial<Schedule>): Schedule | null {
  const schedules = getSchedules();
  const index = schedules.findIndex(s => s.id === id);
  
  if (index === -1) return null;
  
  const updated: Schedule = {
    ...schedules[index],
    ...updates,
    updatedAt: new Date().toISOString().split('T')[0],
  };
  
  schedules[index] = updated;
  saveSchedules(schedules);
  return updated;
}

// Delete a schedule
export function deleteSchedule(id: string): boolean {
  const schedules = getSchedules();
  const filtered = schedules.filter(s => s.id !== id);
  
  if (filtered.length === schedules.length) return false;
  
  saveSchedules(filtered);
  return true;
}

// Get schedules by ship ID
export function getSchedulesByShipId(shipId: string): Schedule[] {
  return getSchedules().filter(s => s.shipId === shipId);
}

// Get available schedules (with available seats)
export function getAvailableSchedules(): Schedule[] {
  return getSchedules().filter(
    s => s.status === 'scheduled' && s.bookedSeats < s.totalCapacity
  );
}
