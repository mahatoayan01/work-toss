import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ExternalLink,
  Flame,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { HoursStatusBadge } from './HoursStatusBadge';

export const Footer = () => {
  const { business, hours } = restaurantData;
  const { contact } = business;

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Pan-Asian Menu', path: '/menu' },
    { label: 'Location & Map', path: '/location' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Your Cart / Checkout', path: '/cart' },
    { label: 'Owner Portal (Demo)', path: '/owner-login' },
  ];

  return (
    <footer className="bg-wok-darkest border-t border-wok-border/80 pt-16 pb-12 text-wok-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-wok-red to-wok-gold p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-wok-darkest rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-wok-gold" />
                </div>
              </div>
              <span className="font-display font-bold text-2xl tracking-wide text-wok-cream">
                {business.shortName}
              </span>
            </Link>

            <p className="text-sm text-wok-muted leading-relaxed">
              {business.tagline}. Situated inside E-Square The Fern, Shivajinagar, Pune.
            </p>

            <div className="pt-2">
              <HoursStatusBadge />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-wok-surface hover:bg-wok-card text-wok-sand hover:text-white border border-wok-border flex items-center justify-center transition-colors"
                aria-label="Wok Toss Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-wok-surface hover:bg-wok-card text-wok-sand hover:text-white border border-wok-border flex items-center justify-center transition-colors"
                aria-label="Wok Toss Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-wok-surface hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-colors"
                aria-label="Wok Toss WhatsApp support"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-wok-cream text-base uppercase tracking-wider mb-4 border-b border-wok-border/40 pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-wok-muted hover:text-wok-gold transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-wok-red">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Summary */}
          <div>
            <h4 className="font-semibold text-wok-cream text-base uppercase tracking-wider mb-4 border-b border-wok-border/40 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-wok-gold" /> Opening Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="bg-wok-surface/60 p-3 rounded-xl border border-wok-border/50">
                <p className="font-semibold text-wok-cream text-xs uppercase tracking-wide text-wok-gold">
                  Daily Sessions (Mon – Sun)
                </p>
                <div className="mt-1.5 text-xs text-wok-sand space-y-1">
                  <div className="flex justify-between">
                    <span>Lunch Session:</span>
                    <span className="font-medium text-white">12:30 PM – 3:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinner Session:</span>
                    <span className="font-medium text-white">7:00 PM – 11:00 PM</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-wok-muted">
                Buffet stations operate continuously during standard dining slots.
              </p>
            </div>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="font-semibold text-wok-cream text-base uppercase tracking-wider mb-4 border-b border-wok-border/40 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-wok-red" /> Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-wok-muted">
              <p className="leading-relaxed text-xs">
                {business.address.full}
              </p>
              <div className="space-y-1.5 text-xs">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-wok-gold" />
                  <a href={`tel:${contact.phoneRaw}`} className="hover:text-white transition-colors">
                    Hotel Line: {contact.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <a href={`tel:${contact.mobileRaw}`} className="hover:text-white transition-colors">
                    Reservations: {contact.mobileReservation}
                  </a>
                </p>
              </div>
              <div className="pt-1">
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-wok-gold hover:underline font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-wok-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-wok-subtle">
          <p>© {new Date().getFullYear()} Wok Toss – Pan Asian restaurant. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-wok-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-wok-gold" /> Production Quality Static DEMO
            </span>
            <Link to="/owner-login" className="hover:text-wok-sand transition-colors">
              Owner Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
