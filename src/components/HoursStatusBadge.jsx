import React from 'react';
import { Clock } from 'lucide-react';

export const isRestaurantOpenNow = () => {
  const now = new Date();
  // Get time in minutes from midnight
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const lunchStart = 12 * 60 + 30; // 12:30 PM = 750 min
  const lunchEnd = 15 * 60 + 30;   // 3:30 PM = 930 min
  const dinnerStart = 19 * 60;     // 7:00 PM = 1140 min
  const dinnerEnd = 23 * 60;       // 11:00 PM = 1380 min

  const isLunch = currentMinutes >= lunchStart && currentMinutes < lunchEnd;
  const isDinner = currentMinutes >= dinnerStart && currentMinutes < dinnerEnd;

  return {
    isOpen: isLunch || isDinner,
    session: isLunch ? 'Lunch Session' : isDinner ? 'Dinner Session' : 'Closed Now',
    nextOpens: currentMinutes < lunchStart
      ? 'Opens at 12:30 PM for Lunch'
      : currentMinutes < dinnerStart
      ? 'Opens at 7:00 PM for Dinner'
      : 'Opens tomorrow at 12:30 PM'
  };
};

export const HoursStatusBadge = ({ showNext = false }) => {
  const { isOpen, session, nextOpens } = isRestaurantOpenNow();

  return (
    <div className="inline-flex items-center gap-2">
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
          isOpen
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
          }`}
        />
        {isOpen ? `Open Now (${session})` : 'Closed Right Now'}
      </span>
      {showNext && !isOpen && (
        <span className="text-xs text-wok-muted flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {nextOpens}
        </span>
      )}
    </div>
  );
};
