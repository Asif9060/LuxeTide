'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  Trash2,
  Edit2,
  Calendar,
  Ship,
  Users,
  MapPin,
  DollarSign,
  X,
  Check,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { Schedule } from '@/src/types';
import { SHIPS } from '@/src/constants';

const mockSchedules: Schedule[] = [
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

interface FormData {
  shipId: string;
  departureDate: string;
  returnDate: string;
  destination: string;
  pricePerPerson: string;
  totalCapacity: string;
}

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<Schedule[]>(mockSchedules);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    shipId: '',
    departureDate: '',
    returnDate: '',
    destination: '',
    pricePerPerson: '',
    totalCapacity: '',
  });

  const handleOpenModal = (schedule?: Schedule) => {
    if (schedule) {
      setEditingId(schedule.id);
      setFormData({
        shipId: schedule.shipId,
        departureDate: schedule.departureDate,
        returnDate: schedule.returnDate,
        destination: schedule.destination,
        pricePerPerson: schedule.pricePerPerson,
        totalCapacity: schedule.totalCapacity.toString(),
      });
    } else {
      setEditingId(null);
      setFormData({
        shipId: '',
        departureDate: '',
        returnDate: '',
        destination: '',
        pricePerPerson: '',
        totalCapacity: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedShip = SHIPS.find(s => s.id === formData.shipId);

    if (editingId) {
      // Update existing schedule
      setSchedules(schedules.map(s =>
        s.id === editingId
          ? {
            ...s,
            shipId: formData.shipId,
            shipName: selectedShip?.name || s.shipName,
            departureDate: formData.departureDate,
            returnDate: formData.returnDate,
            destination: formData.destination,
            pricePerPerson: formData.pricePerPerson,
            totalCapacity: parseInt(formData.totalCapacity),
            updatedAt: new Date().toISOString().split('T')[0],
          }
          : s
      ));
    } else {
      // Create new schedule
      const newSchedule: Schedule = {
        id: `SCH-${String(schedules.length + 1).padStart(3, '0')}`,
        shipId: formData.shipId,
        shipName: selectedShip?.name || 'Unknown Ship',
        departureDate: formData.departureDate,
        returnDate: formData.returnDate,
        destination: formData.destination,
        pricePerPerson: formData.pricePerPerson,
        totalCapacity: parseInt(formData.totalCapacity),
        bookedSeats: 0,
        status: 'scheduled',
        amenities: selectedShip?.amenities || [],
        itinerary: [],
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
      };
      setSchedules([...schedules, newSchedule]);
    }
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    setSchedules(schedules.filter(s => s.id !== id));
  };

  const getStatusColor = (status: Schedule['status']) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'ongoing':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'completed':
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
      case 'cancelled':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  const getStatusIcon = (status: Schedule['status']) => {
    switch (status) {
      case 'scheduled':
        return <Calendar size={16} />;
      case 'ongoing':
        return <Ship size={16} />;
      case 'completed':
        return <Check size={16} />;
      case 'cancelled':
        return <X size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const availableSeats = schedules.map(s => s.totalCapacity - s.bookedSeats);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Schedule Management</h1>
          <p className="text-slate-400">Manage ship schedules and voyage dates</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleOpenModal()}
          className="px-6 py-3 bg-gold text-slate-950 font-bold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-gold/50 transition-all"
        >
          <Plus size={20} /> New Schedule
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Schedules', value: schedules.length, icon: Calendar, color: 'bg-blue-500/10' },
          { label: 'Active Voyages', value: schedules.filter(s => s.status === 'scheduled').length, icon: Ship, color: 'bg-emerald-500/10' },
          { label: 'Total Capacity', value: schedules.reduce((sum, s) => sum + s.totalCapacity, 0), icon: Users, color: 'bg-purple-500/10' },
          { label: 'Booked Seats', value: schedules.reduce((sum, s) => sum + s.bookedSeats, 0), icon: Check, color: 'bg-gold/10' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`${stat.color} border border-white/10 rounded-lg p-6 space-y-2`}
          >
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <stat.icon size={20} className="text-gold" />
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Schedules Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-900/50 border border-white/10 rounded-lg overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/50 border-b border-white/5">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Schedule ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Ship
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Dates
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Destination
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Capacity
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => {
                const occupancyPercent = (schedule.bookedSeats / schedule.totalCapacity) * 100;
                return (
                  <motion.tr
                    key={schedule.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono text-gold font-bold">{schedule.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Ship size={16} className="text-gold" />
                        <span className="text-white font-semibold">{schedule.shipName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-300">
                        <p className="font-semibold">{schedule.departureDate}</p>
                        <p className="text-xs text-slate-500">to {schedule.returnDate}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-400" />
                        <span className="text-white">{schedule.destination}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-emerald-400" />
                          <span className="text-sm text-white font-semibold">
                            {schedule.bookedSeats}/{schedule.totalCapacity}
                          </span>
                        </div>
                        <div className="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${occupancyPercent}%` }}
                            transition={{ duration: 0.5 }}
                            className={`h-full ${occupancyPercent > 80 ? 'bg-red-500' : occupancyPercent > 50 ? 'bg-yellow-500' : 'bg-emerald-500'}`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(schedule.status)}`}>
                        {getStatusIcon(schedule.status)}
                        {schedule.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleOpenModal(schedule)}
                          className="p-2 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(schedule.id)}
                          className="p-2 bg-red-500/20 text-red-300 hover:bg-red-500/30 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/10 rounded-lg p-8 max-w-2xl w-full max-h-96 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingId ? 'Edit Schedule' : 'New Schedule'}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Ship Selection */}
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Ship</label>
                    <select
                      value={formData.shipId}
                      onChange={(e) => setFormData({ ...formData, shipId: e.target.value })}
                      required
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded text-white focus:border-gold outline-none transition-colors"
                    >
                      <option value="">Select a ship</option>
                      {SHIPS.map((ship) => (
                        <option key={ship.id} value={ship.id}>
                          {ship.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Total Capacity */}
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Total Capacity</label>
                    <input
                      type="number"
                      value={formData.totalCapacity}
                      onChange={(e) => setFormData({ ...formData, totalCapacity: e.target.value })}
                      required
                      placeholder="e.g., 800"
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded text-white focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  {/* Departure Date */}
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Departure Date</label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      required
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded text-white focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  {/* Return Date */}
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Return Date</label>
                    <input
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                      required
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded text-white focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Destination</label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      required
                      placeholder="e.g., Saint Martin's Island"
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded text-white focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  {/* Price Per Person */}
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Price Per Person</label>
                    <input
                      type="text"
                      value={formData.pricePerPerson}
                      onChange={(e) => setFormData({ ...formData, pricePerPerson: e.target.value })}
                      required
                      placeholder="e.g., BDT 85,000"
                      className="w-full px-4 py-2 bg-slate-800/50 border border-white/10 rounded text-white focus:border-gold outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-end mt-6 pt-4 border-t border-white/10">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCloseModal}
                    className="px-6 py-2 bg-slate-700 text-white rounded font-semibold hover:bg-slate-600 transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gold text-slate-950 rounded font-bold hover:shadow-lg hover:shadow-gold/50 transition-all"
                  >
                    {editingId ? 'Update' : 'Create'} Schedule
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
