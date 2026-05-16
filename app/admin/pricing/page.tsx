'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { SHIPS } from '@/src/constants';
import { PremiumButton, PremiumInput, PremiumSelect } from '@/src/components/PremiumUI';
import { Plus, Trash2, Edit2 } from 'lucide-react';

interface SuitePrice {
  id: string;
  shipName: string;
  suiteName: string;
  pricePerNight: number;
  capacity: number;
  description: string;
}

const WAVE_2_SUITES = [
  'Infinity Royal Suite',
  'Panorama Deluxe Suite',
  'Panorama King Suite',
  'Panorama Triple Suite',
  'VIP Panorama Triple Suite',
];

const WAVE_SUITES = [
  'Standard Cabin',
  'Premium Cabin',
  'Family Suite',
  'Balcony Suite',
];

const RIVER_CRUISE_SUITES = [
  'Comfort Cabin',
  'Premium Cabin',
  'Deluxe Suite',
];

function getSuitesForShip(shipName: string): string[] {
  if (shipName === 'M.V. The Wave 2') return WAVE_2_SUITES;
  if (shipName === 'M.V. The Wave') return WAVE_SUITES;
  if (shipName === 'The River Cruise') return RIVER_CRUISE_SUITES;
  return [];
}

export default function PricingAdminPage() {
  const [selectedShip, setSelectedShip] = useState(SHIPS[0].name);
  const [suitePrices, setSuitePrices] = useState<SuitePrice[]>([
    {
      id: '1',
      shipName: 'M.V. The Wave 2',
      suiteName: 'Infinity Royal Suite',
      pricePerNight: 25000,
      capacity: 2,
      description: 'Luxury suite with panoramic views',
    },
    {
      id: '2',
      shipName: 'M.V. The Wave 2',
      suiteName: 'Panorama Deluxe Suite',
      pricePerNight: 18000,
      capacity: 2,
      description: 'Deluxe suite with balcony',
    },
    {
      id: '3',
      shipName: 'M.V. The Wave 2',
      suiteName: 'Panorama King Suite',
      pricePerNight: 22000,
      capacity: 2,
      description: 'King suite with spacious interior',
    },
    {
      id: '4',
      shipName: 'M.V. The Wave 2',
      suiteName: 'Panorama Triple Suite',
      pricePerNight: 24000,
      capacity: 3,
      description: 'Triple suite for small groups',
    },
    {
      id: '5',
      shipName: 'M.V. The Wave 2',
      suiteName: 'VIP Panorama Triple Suite',
      pricePerNight: 30000,
      capacity: 3,
      description: 'VIP triple suite with premium amenities',
    },
    {
      id: '6',
      shipName: 'M.V. The Wave',
      suiteName: 'Standard Cabin',
      pricePerNight: 12000,
      capacity: 2,
      description: 'Standard comfortable cabin',
    },
    {
      id: '7',
      shipName: 'M.V. The Wave',
      suiteName: 'Premium Cabin',
      pricePerNight: 16000,
      capacity: 2,
      description: 'Premium cabin with enhanced amenities',
    },
    {
      id: '8',
      shipName: 'The River Cruise',
      suiteName: 'Comfort Cabin',
      pricePerNight: 8000,
      capacity: 2,
      description: 'Comfortable river cruise cabin',
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<SuitePrice>>({
    shipName: selectedShip,
    pricePerNight: 0,
    capacity: 1,
  });

  const handleAddSuite = () => {
    if (formData.suiteName && formData.pricePerNight) {
      setSuitePrices([
        ...suitePrices,
        {
          id: Date.now().toString(),
          shipName: formData.shipName || selectedShip,
          suiteName: formData.suiteName,
          pricePerNight: formData.pricePerNight,
          capacity: formData.capacity || 1,
          description: formData.description || '',
        },
      ]);
      setFormData({ shipName: selectedShip, pricePerNight: 0, capacity: 1, suiteName: '', description: '' });
    }
  };

  const handleUpdateSuite = (id: string) => {
    setSuitePrices(
      suitePrices.map((suite) =>
        suite.id === id ? { ...suite, ...formData } : suite
      )
    );
    setEditingId(null);
    setFormData({ shipName: selectedShip, pricePerNight: 0, capacity: 1, suiteName: '', description: '' });
  };

  const handleDeleteSuite = (id: string) => {
    setSuitePrices(suitePrices.filter((suite) => suite.id !== id));
  };

  const handleEditClick = (suite: SuitePrice) => {
    setEditingId(suite.id);
    setFormData(suite);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ shipName: selectedShip, pricePerNight: 0, capacity: 1, suiteName: '', description: '' });
  };

  const filteredSuites = suitePrices.filter((suite) => suite.shipName === selectedShip);
  const availableSuites = getSuitesForShip(selectedShip);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="editorial-label">Pricing Management</p>
        <h1 className="text-3xl md:text-5xl font-heading text-white">
          Suite Pricing & Configuration
        </h1>
        <p className="text-slate-400">
          Manage all suite prices, capacity, and details across all ships.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add/Edit Suite Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <div className="luxury-card p-6 space-y-4">
            <h3 className="text-lg font-heading text-white">
              {editingId ? 'Edit Suite' : 'Add New Suite'}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Select Ship
                </label>
                <PremiumSelect
                  value={formData.shipName || selectedShip}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const newShip = e.target.value;
                    setFormData({ ...formData, shipName: newShip, suiteName: '' });
                  }}
                  className="h-12 w-full"
                >
                  {SHIPS.map((ship) => (
                    <option key={ship.id} value={ship.name}>
                      {ship.name}
                    </option>
                  ))}
                </PremiumSelect>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Suite Name
                </label>
                <PremiumSelect
                  value={formData.suiteName || ''}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, suiteName: e.target.value })}
                  className="h-12 w-full"
                >
                  <option value="">Select a suite</option>
                  {availableSuites.map((suite) => (
                    <option key={suite} value={suite}>
                      {suite}
                    </option>
                  ))}
                </PremiumSelect>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Price Per Night (BDT)
                </label>
                <PremiumInput
                  type="number"
                  placeholder="Enter price"
                  value={formData.pricePerNight || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, pricePerNight: parseInt(e.target.value) })}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Capacity (Guests)
                </label>
                <PremiumInput
                  type="number"
                  placeholder="Enter capacity"
                  value={formData.capacity || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Suite description"
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-600 rounded min-h-20"
                />
              </div>

              <div className="flex gap-2">
                {editingId ? (
                  <>
                    <PremiumButton
                      onClick={() => handleUpdateSuite(editingId)}
                      className="h-12 flex-1"
                    >
                      Update Suite
                    </PremiumButton>
                    <button
                      onClick={handleCancelEdit}
                      className="h-12 flex-1 px-4 bg-white/5 border border-white/10 text-slate-300 rounded hover:bg-white/10 transition-all"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <PremiumButton onClick={handleAddSuite} className="h-12 w-full">
                    <Plus size={16} className="mr-2" />
                    Add Suite
                  </PremiumButton>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Suites List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="luxury-card p-8 space-y-6">
            {/* Ship Selection Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
              {SHIPS.map((ship) => (
                <button
                  key={ship.id}
                  onClick={() => {
                    setSelectedShip(ship.name);
                    setFormData({ ...formData, shipName: ship.name });
                    setEditingId(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedShip === ship.name
                      ? 'bg-gold/20 border border-gold/40 text-gold'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {ship.name}
                </button>
              ))}
            </div>

            {/* Suites Summary */}
            <div>
              <h3 className="text-2xl font-heading text-white mb-2">
                {selectedShip} Suites
              </h3>
              <p className="text-slate-400 text-sm">
                {filteredSuites.length} suite{filteredSuites.length !== 1 ? 's' : ''} configured
              </p>
            </div>

            {/* Suites Table/Grid */}
            <div className="space-y-3">
              {filteredSuites.length > 0 ? (
                filteredSuites.map((suite) => (
                  <motion.div
                    key={suite.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-gold/20 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-heading text-white">{suite.suiteName}</h4>
                        <p className="text-sm text-slate-400 mt-1">{suite.description}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0 ml-4">
                        <button
                          onClick={() => handleEditClick(suite)}
                          className="p-2 text-slate-400 hover:text-gold transition-colors"
                          title="Edit suite"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteSuite(suite.id)}
                          className="p-2 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Delete suite"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Price:</span>
                        <span className="text-gold font-heading">
                          ৳{suite.pricePerNight.toLocaleString()} / night
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Capacity:</span>
                        <span className="text-white">
                          {suite.capacity} guest{suite.capacity !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 border border-dashed border-white/10 rounded-lg">
                  <p className="text-slate-400">No suites configured for {selectedShip}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
