import React, { useState } from 'react';
import { Calendar, Users, Home, ArrowRight } from 'lucide-react';
import { suitesCollection } from '../../data/hotelData';

export default function AvailabilityBar({ onCheckAvailability }) {
  // Default dates: tomorrow to +4 days
  const today = new Date();
  const defaultCheckIn = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0];
  const defaultCheckOut = new Date(today.setDate(today.getDate() + 4)).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [suiteId, setSuiteId] = useState('cliffside-ocean-suite');
  const [guests, setGuests] = useState('2 Guests');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      suiteId,
      guests
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="glass-panel border border-sand-200/80 shadow-elevated p-3 sm:p-4 rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center"
      >
        {/* Check In */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-ivory-50/70 border border-sand-200/60 rounded-sm hover:border-bronze-400/80 transition-colors">
          <Calendar className="w-4 h-4 text-bronze-600 shrink-0" />
          <div className="flex flex-col text-left overflow-hidden">
            <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500">
              Arrival
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-ivory-50/70 border border-sand-200/60 rounded-sm hover:border-bronze-400/80 transition-colors">
          <Calendar className="w-4 h-4 text-bronze-600 shrink-0" />
          <div className="flex flex-col text-left overflow-hidden">
            <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500">
              Departure
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Suite Category */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-ivory-50/70 border border-sand-200/60 rounded-sm hover:border-bronze-400/80 transition-colors">
          <Home className="w-4 h-4 text-bronze-600 shrink-0" />
          <div className="flex flex-col text-left w-full overflow-hidden">
            <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500">
              Sanctuary
            </label>
            <select
              value={suiteId}
              onChange={(e) => setSuiteId(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none cursor-pointer truncate"
            >
              {suitesCollection.map((suite) => (
                <option key={suite.id} value={suite.id}>
                  {suite.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Guests & Action Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2.5 bg-ivory-50/70 border border-sand-200/60 rounded-sm flex-1 min-w-0 hover:border-bronze-400/80 transition-colors">
            <Users className="w-4 h-4 text-bronze-600 shrink-0" />
            <div className="flex flex-col text-left overflow-hidden w-full">
              <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none cursor-pointer w-full"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="px-5 h-full min-h-[50px] bg-olive-800 hover:bg-olive-900 text-ivory-50 text-xs font-semibold tracking-luxury uppercase rounded-sm flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md group shrink-0"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
