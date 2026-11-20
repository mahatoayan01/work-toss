import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export const FloatingActions = () => {
  const { contact } = restaurantData.business;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Wok Toss, I would like to inquire about table booking / ordering.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-900/40 border border-emerald-400/30 transition-transform active:scale-95"
        aria-label="Chat with Wok Toss on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${contact.mobileRaw || contact.phoneRaw}`}
        className="w-13 h-13 rounded-full bg-wok-red hover:bg-wok-redHover text-white flex items-center justify-center shadow-lg shadow-red-950/50 border border-red-400/30 transition-transform active:scale-95"
        aria-label="Call Wok Toss"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};
