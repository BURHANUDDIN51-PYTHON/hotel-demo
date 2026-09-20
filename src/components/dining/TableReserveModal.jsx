import React, { useState } from 'react';
import Modal from '../common/Modal';
import { diningData } from '../../data/hotelData';
import { Check, Calendar, Clock, Users, Utensils, ArrowRight } from 'lucide-react';

export default function TableReserveModal({ isOpen, onClose }) {
  const [date, setDate] = useState('2026-10-05');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('2 Guests');
  const [menuChoice, setMenuChoice] = useState('Five-Movement Terroir Tasting Menu (€145 / guest)');
  const [guestName, setGuestName] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={isConfirmed ? handleReset : onClose}
      title={isConfirmed ? "Table Confirmed" : "Table Reservation"}
      subtitle={diningData.restaurantName}
      maxWidth="max-w-2xl"
    >
      {isConfirmed ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center mx-auto mb-2 border border-olive-200">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
          <h4 className="font-serif text-3xl text-charcoal-900 font-light">
            We Await You at the Hearth
          </h4>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
            A table for <strong className="text-charcoal-900">{guests}</strong> has been reserved for <strong className="text-charcoal-900">{guestName || "Honored Guest"}</strong> on <strong className="text-charcoal-900">{date} at {time}</strong>.
          </p>

          <div className="p-4 bg-sand-100 border border-sand-200 rounded-sm max-w-sm mx-auto text-xs text-charcoal-700 space-y-1">
            <div className="font-semibold text-charcoal-900">{menuChoice}</div>
            <div className="text-charcoal-500">Dress code: Casual elegance • Please notify if arriving after 15 minutes</div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-olive-800 text-ivory-50 text-xs font-semibold uppercase tracking-luxury hover:bg-olive-900 transition-colors"
            >
              Return to Website
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <p className="text-xs text-charcoal-600">
            Seating at <strong className="text-charcoal-900">{diningData.restaurantName}</strong> is intentionally limited to 28 guests per evening to preserve the intimate acoustic warmth of our stone vaults.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                Time Slot
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
              >
                <option value="19:30">19:30 (Early Dusk)</option>
                <option value="20:00">20:00 (Sunset)</option>
                <option value="20:30">20:30 (Candlelight)</option>
                <option value="21:15">21:15 (Late Starlight)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                Party Size
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5-6 Guests (Vault Room)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
              Dining Experience
            </label>
            <select
              value={menuChoice}
              onChange={(e) => setMenuChoice(e.target.value)}
              className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
            >
              <option>Five-Movement Terroir Tasting Menu (€145 / guest)</option>
              <option>Full Seven-Movement Cellar Expedition (€195 / guest)</option>
              <option>À La Carte Courtyard Dining</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Lord / Lady / Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                Dietary & Allergies
              </label>
              <input
                type="text"
                placeholder="e.g. pescatarian, gluten-free..."
                value={dietaryNotes}
                onChange={(e) => setDietaryNotes(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
              />
            </div>
          </div>

          <div className="pt-4 flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-sand-300 text-xs uppercase tracking-luxury text-charcoal-700 hover:bg-sand-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-olive-800 hover:bg-olive-900 text-ivory-50 text-xs font-semibold uppercase tracking-luxury transition-all"
            >
              Confirm Table Reservation
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
