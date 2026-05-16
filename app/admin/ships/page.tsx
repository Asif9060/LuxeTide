'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { SHIPS } from '@/src/constants';
import { PremiumButton, PremiumInput } from '@/src/components/PremiumUI';
import { Edit, Trash2, Plus } from 'lucide-react';

export default function ShipsAdminPage() {
  const [selectedShip, setSelectedShip] = useState(SHIPS[0]);
  const [ships] = useState(SHIPS);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(selectedShip);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAmenityChange = (index: number, value: string) => {
    const newAmenities = [...formData.amenities];
    newAmenities[index] = value;
    setFormData({ ...formData, amenities: newAmenities });
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="editorial-label">Ships Management</p>
        <h1 className="text-3xl md:text-5xl font-heading text-white">
          Manage Ship Details
        </h1>
        <p className="text-slate-400">
          Edit ship information, amenities, images and pricing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ships List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <div className="luxury-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-heading text-white">Ships</h3>
              <button className="text-gold hover:text-gold/80 transition-colors">
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-2">
              {ships.map((ship) => (
                <button
                  key={ship.id}
                  onClick={() => {
                    setSelectedShip(ship);
                    setFormData(ship);
                    setEditMode(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedShip.id === ship.id
                      ? 'bg-gold/20 border border-gold/40 text-white'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <p className="font-medium">{ship.name}</p>
                  <p className="text-xs text-slate-500">{ship.capacity}</p>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Ship Details Editor */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="luxury-card p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-heading text-white">
                {selectedShip.name}
              </h3>
              <button
                onClick={() => setEditMode(!editMode)}
                className="flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 text-gold rounded hover:bg-gold/30 transition-all"
              >
                <Edit size={16} />
                {editMode ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {editMode ? (
              <div className="space-y-6">
                {/* Ship Name */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Ship Name
                  </label>
                  <PremiumInput
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-600 rounded"
                    rows={4}
                  />
                </div>

                {/* Capacity & Image */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                      Capacity Label
                    </label>
                    <PremiumInput
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                      Image URL
                    </label>
                    <PremiumInput
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Amenities
                  </label>
                  <div className="space-y-2">
                    {formData.amenities.map((amenity, index) => (
                      <PremiumInput
                        key={index}
                        value={amenity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmenityChange(index, e.target.value)}
                        className="h-10"
                        placeholder={`Amenity ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <PremiumButton className="h-12 flex-1">Save Changes</PremiumButton>
                  <PremiumButton variant="outline" className="h-12 flex-1">
                    Delete Ship
                  </PremiumButton>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Display Mode */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Description
                  </p>
                  <p className="text-slate-300">{selectedShip.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                      Capacity
                    </p>
                    <p className="text-lg text-white font-heading">{selectedShip.capacity}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                      Ship ID
                    </p>
                    <p className="text-lg text-white font-heading">{selectedShip.id}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Amenities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedShip.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-sm rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedShip.image && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                      Featured Image
                    </p>
                    <div className="relative w-full h-40 bg-slate-800 rounded overflow-hidden">
                      <img
                        src={selectedShip.image}
                        alt={selectedShip.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
