'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { SHIPS } from '@/src/constants';
import { PremiumButton, PremiumInput, PremiumSelect } from '@/src/components/PremiumUI';
import { Plus, Trash2 } from 'lucide-react';

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

export default function SuitesAdminPage() {
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
      setFormData({ shipName: selectedShip, pricePerNight: 0, capacity: 1 });
    }
  };

  const handleDeleteSuite = (id: string) => {
    setSuitePrices(suitePrices.filter((suite) => suite.id !== id));
  };

  const filteredSuites = suitePrices.filter((suite) => suite.shipName === selectedShip);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="editorial-label">Suite Pricing</p>
        <h1 className="text-3xl md:text-5xl font-heading text-white">
          Manage Suite Prices
        </h1>
        <p className="text-slate-400">
          Set pricing and availability for each suite across all ships.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add New Suite */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <div className="luxury-card p-6 space-y-4">
            <h3 className="text-lg font-heading text-white">Add New Suite</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Select Ship
                </label>
                <PremiumSelect
                  value={selectedShip}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedShip(e.target.value);
                    setFormData({ ...formData, shipName: e.target.value });
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

              {selectedShip === 'M.V. The Wave 2' ? (
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
                    {WAVE_2_SUITES.map((suite) => (
                      <option key={suite} value={suite}>
                        {suite}
                      </option>
                    ))}
                  </PremiumSelect>
                </div>
              ) : (
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Suite Name
                  </label>
                  <PremiumInput
                    placeholder="Enter suite name"
                    value={formData.suiteName || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, suiteName: e.target.value })}
                    className="h-12"
                  />
                </div>
              )}

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
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-600 rounded min-h-24"
                />
              </div>

              <PremiumButton onClick={handleAddSuite} className="h-12 w-full">
                <Plus size={16} className="mr-2" />
                Add Suite
              </PremiumButton>
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
            <div>
              <h3 className="text-2xl font-heading text-white mb-2">
                {selectedShip} Suites
              </h3>
              <p className="text-slate-400 text-sm">
                {filteredSuites.length} suite{filteredSuites.length !== 1 ? 's' : ''} configured
              </p>
            </div>

            <div className="space-y-3">
              {filteredSuites.length > 0 ? (
                filteredSuites.map((suite) => (
                  <motion.div
                    key={suite.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:border-gold/20 transition-all"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-heading text-white">{suite.suiteName}</h4>
                      <p className="text-sm text-slate-400 mt-1">{suite.description}</p>
                      <div className="flex gap-6 mt-3 text-sm">
                        <span className="text-gold">
                          ৳{suite.pricePerNight.toLocaleString()} / night
                        </span>
                        <span className="text-slate-400">
                          Capacity: {suite.capacity} guests
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteSuite(suite.id)}
                      className="p-2 text-slate-400 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-sm">
                    No suites configured for {selectedShip}
                  </p>
                  <p className="text-slate-600 text-xs mt-2">
                    Add a suite using the form on the left
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
