import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, ShieldCheck, Car, Bus } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { HoursStatusBadge } from '../components/HoursStatusBadge';

export const LocationPage = () => {
  const { business, hours } = restaurantData;
  const { address, contact, stats, amenities } = business;

  const mapQuery = encodeURIComponent(
    'Wok Toss – Pan Asian restaurant, E-Square The Fern, Shivajinagar, Pune'
  );
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
          Find Us in Pune
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Location & Directions
        </h1>
        <p className="text-sm sm:text-base text-wok-sand/80 leading-relaxed">
          Situated at E-Square The Fern on University Road, Shivajinagar — easily accessible from all major landmarks in Pune.
        </p>
      </div>

      {/* Main Grid: Details on Left, Map on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Address, Actions, Hours */}
        <div className="lg:col-span-5 space-y-6">
          {/* Address Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-wok-surface border border-wok-border shadow-xl space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-wok-red/10 border border-wok-red/30 flex items-center justify-center text-wok-red shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Wok Toss</h3>
                <p className="text-xs text-wok-gold font-medium">Inside E-Square The Fern (An Ecotel Hotel)</p>
                <p className="text-sm text-wok-sand mt-2 leading-relaxed">
                  {address.line1}, {address.line2}, {address.area}, {address.city}, {address.state} - {address.pincode}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <HoursStatusBadge showNext />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-wok-border/60 flex flex-col sm:flex-row gap-3">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-4 flex-1 flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="btn-secondary text-xs py-3 px-4 flex-1 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-wok-gold" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Transportation & Parking Info */}
          <div className="p-6 rounded-3xl bg-wok-surface/60 border border-wok-border space-y-4 text-xs sm:text-sm text-wok-sand">
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <Car className="w-4 h-4 text-wok-gold" /> Parking & Accessibility
            </h4>
            <ul className="space-y-2 text-xs text-wok-muted">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Complimentary hotel valet parking available for diners.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Wheelchair-accessible elevators and hotel entrance ramp.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Landmark: Just opposite E-Square multiplex cinema complex on Ganeshkhind / University Road.
              </li>
            </ul>
          </div>

          {/* Hours Card */}
          <div className="p-6 rounded-3xl bg-wok-surface/60 border border-wok-border space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-wok-gold" /> Dining Sessions
            </h4>
            <div className="text-xs text-wok-sand space-y-1.5 font-mono">
              <div className="flex justify-between py-1 border-b border-wok-border/40">
                <span>Lunch (Mon – Sun):</span>
                <span className="text-white font-semibold">12:30 PM – 03:30 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Dinner (Mon – Sun):</span>
                <span className="text-white font-semibold">07:00 PM – 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Embed (Key-Free) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden border border-wok-border shadow-2xl bg-wok-card aspect-[4/3] sm:aspect-[16/11] relative">
            <iframe
              src={mapEmbedUrl}
              title="Google Maps Location for Wok Toss – Pan Asian restaurant at E-Square The Fern, Pune"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.05]"
            />
            {/* Overlay hint button */}
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-wok-darkest/90 hover:bg-black text-white text-xs px-3 py-1.5 rounded-xl border border-wok-border backdrop-blur-md flex items-center gap-1.5 shadow-lg transition-colors"
            >
              <span>View Larger Map</span>
              <ExternalLink className="w-3.5 h-3.5 text-wok-gold" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
