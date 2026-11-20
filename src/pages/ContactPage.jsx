import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Instagram,
  Facebook,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export const ContactPage = () => {
  const { business } = restaurantData;
  const { contact, address } = business;

  const [form, setForm] = useState({
    name: '',
    contactInfo: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Wok Toss Team!\nInquiry from Website:\n• Name: ${form.name}\n• Contact: ${form.contactInfo}\n• Subject: ${form.subject}\n• Message: ${form.message}`
    );
    const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
          Get in Touch
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Contact Wok Toss
        </h1>
        <p className="text-sm sm:text-base text-wok-sand/80 leading-relaxed">
          Have an inquiry regarding table reservations, private group dining, or event catering at E-Square The Fern? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Phone Card */}
          <div className="p-6 rounded-3xl bg-wok-surface border border-wok-border shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-wok-red/10 border border-wok-red/30 flex items-center justify-center text-wok-red">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">Direct Phone Lines</h3>
                <p className="text-xs text-wok-muted">Instant assistance for dining & reservations</p>
              </div>
            </div>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-wok-sand">Hotel Reception:</span>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="font-mono font-medium text-wok-gold hover:underline"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-wok-sand">Table Reservations:</span>
                <a
                  href={`tel:${contact.mobileRaw}`}
                  className="font-mono font-medium text-wok-gold hover:underline"
                >
                  {contact.mobileReservation}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-3xl bg-wok-surface border border-wok-border shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">WhatsApp Desk</h3>
                <p className="text-xs text-wok-muted">Chat directly with the restaurant manager</p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-wok-sand">Quick Chat:</span>
              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Wok Toss Team, I have a dining inquiry.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-3.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Start Chat
              </a>
            </div>
          </div>

          {/* Email Card (Placeholder clearly marked) */}
          <div className="p-6 rounded-3xl bg-wok-surface border border-wok-border shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">Email Inquiries</h3>
                <p className="text-xs text-wok-muted">Corporate bookings & inquiries</p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-wok-sand">Official Email:</span>
              <span className="font-mono text-xs text-wok-subtle font-semibold px-2 py-1 rounded bg-wok-card border border-wok-border">
                {contact.email}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-3xl bg-wok-surface border border-wok-border space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-wok-cream">
              Follow Us on Social Media
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-4 rounded-xl flex items-center gap-2 flex-1 justify-center"
              >
                <Instagram className="w-4 h-4 text-wok-red" />
                <span>Instagram</span>
              </a>
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-4 rounded-xl flex items-center gap-2 flex-1 justify-center"
              >
                <Facebook className="w-4 h-4 text-wok-gold" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-wok-surface border border-wok-border shadow-xl">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-wok-muted">
                Submitting this form prepares and opens a prefilled message directly on WhatsApp to connect instantly with our front desk.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-emerald-200">
                  Your inquiry was formatted and directed to our WhatsApp line.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', contactInfo: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="btn-secondary text-xs px-4 py-2 mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ananya Sen"
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white text-sm focus:border-wok-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Your Phone or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contactInfo}
                    onChange={(e) => setForm({ ...form, contactInfo: e.target.value })}
                    placeholder="e.g. +91 98220 54321 or name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white text-sm focus:border-wok-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Inquiry Subject *
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white text-sm focus:border-wok-gold focus:outline-none"
                  >
                    <option value="General Dining Inquiry">General Dining Inquiry</option>
                    <option value="Table Reservation">Table Reservation</option>
                    <option value="Private Event or Celebration">Private Event or Celebration</option>
                    <option value="Corporate Buffet Booking">Corporate Buffet Booking</option>
                    <option value="Dietary or Allergen Question">Dietary or Allergen Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements, date, guest count, or any specific requests..."
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white text-sm focus:border-wok-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
