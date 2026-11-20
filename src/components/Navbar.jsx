import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu as MenuIcon,
  X,
  ShoppingBag,
  Phone,
  Flame,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { restaurantData } from '../data/restaurant';
import { HoursStatusBadge } from './HoursStatusBadge';
import { getOwnerSession } from '../utils/storage';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isOwnerLoggedIn = !!getOwnerSession();

  const { shortName, tagline, contact } = restaurantData.business;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Location', path: '/location' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-wok-darkest/90 backdrop-blur-md border-b border-wok-border/70 transition-all duration-200">
      {/* Top micro bar for live status & direct phone */}
      <div className="hidden sm:block border-b border-wok-border/40 py-1.5 px-4 bg-wok-dark/80 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-wok-muted">
          <div className="flex items-center gap-4">
            <HoursStatusBadge />
            <span className="hidden md:inline text-wok-subtle">•</span>
            <span className="hidden md:inline text-wok-sand/80">E-Square The Fern, Shivajinagar, Pune</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-wok-sand hover:text-wok-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-wok-gold" />
              <span>{contact.phone}</span>
            </a>
            <span className="text-wok-subtle">|</span>
            <Link
              to={isOwnerLoggedIn ? '/owner-dashboard' : '/owner-login'}
              className="flex items-center gap-1 text-wok-muted hover:text-wok-cream transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isOwnerLoggedIn ? 'Dashboard' : 'Owner Portal'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-wok-red rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-wok-red to-wok-gold p-0.5 shadow-glow-red flex items-center justify-center">
              <div className="w-full h-full bg-wok-darkest rounded-[10px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-wok-gold group-hover:scale-110 group-hover:text-wok-red transition-all duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wide text-wok-cream group-hover:text-wok-gold transition-colors">
                {shortName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-wok-gold font-semibold -mt-0.5">
                Pan Asian Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-wok-surface text-wok-gold shadow-inner border border-wok-border/80'
                      : 'text-wok-sand hover:text-white hover:bg-wok-surface/50'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Table Booking Quick CTA */}
            <Link
              to="/#booking"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-wok-surface hover:bg-wok-card text-xs font-semibold text-wok-cream border border-wok-border hover:border-wok-gold transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-wok-gold" />
              <span>Book Table</span>
            </Link>

            {/* Cart Icon Link */}
            <Link
              to="/cart"
              className="relative p-2.5 rounded-xl bg-wok-surface hover:bg-wok-card text-wok-cream border border-wok-border hover:border-wok-red transition-all"
              aria-label={`View shopping cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5 text-wok-cream" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-wok-red text-white text-[11px] font-bold flex items-center justify-center shadow-glow-red animate-scale">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Order Now CTA (desktop) */}
            <Link
              to="/menu"
              className="hidden sm:inline-flex btn-primary text-xs py-2.5 px-4"
            >
              Order Online
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-wok-surface text-wok-cream border border-wok-border hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-wok-border bg-wok-darkest/98 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="pb-2 border-b border-wok-border/60">
            <HoursStatusBadge showNext />
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMobile}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-wok-surface text-wok-gold border border-wok-border'
                      : 'text-wok-sand hover:bg-wok-surface/60'
                  }`}
                >
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
            <NavLink
              to="/cart"
              onClick={closeMobile}
              className="px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between text-wok-sand hover:bg-wok-surface/60"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-wok-gold" />
                Cart / Checkout
              </span>
              {totalItems > 0 && (
                <span className="bg-wok-red text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalItems} items
                </span>
              )}
            </NavLink>
            <NavLink
              to={isOwnerLoggedIn ? '/owner-dashboard' : '/owner-login'}
              onClick={closeMobile}
              className="px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between text-wok-sand hover:bg-wok-surface/60"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-wok-muted" />
                {isOwnerLoggedIn ? 'Owner Dashboard' : 'Owner Portal (Demo)'}
              </span>
            </NavLink>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              to="/menu"
              onClick={closeMobile}
              className="btn-primary w-full py-3 text-center"
            >
              View Full Menu & Order
            </Link>
            <a
              href={`tel:${contact.phoneRaw}`}
              className="btn-secondary w-full py-2.5 text-center text-sm"
            >
              <Phone className="w-4 h-4 text-wok-gold" /> Call Restaurant
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
