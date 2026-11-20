import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Flame,
  Phone,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Instagram,
  ArrowRight,
  Sparkles,
  ChefHat,
  UtensilsCrossed,
  ShieldAlert,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { DishCard } from '../components/DishCard';
import { HoursStatusBadge } from '../components/HoursStatusBadge';
import { LightboxModal } from '../components/LightboxModal';
import { saveNewBooking } from '../utils/storage';

export const HomePage = () => {
  const { business, dishes, offers, reviews, gallery, instagramPosts, faqs, hours } = restaurantData;
  const { contact, stats } = business;

  // Filter popular dishes (6-8 items)
  const popularDishes = dishes.filter((d) => d.popular).slice(0, 8);

  // Gallery lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  // Table Booking state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: 2,
    notes: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: `BKG-${Date.now().toString().slice(-4)}`,
      customerName: bookingForm.name,
      customerPhone: bookingForm.phone,
      bookingDate: bookingForm.date,
      bookingTime: bookingForm.time,
      guests: Number(bookingForm.guests),
      specialRequests: bookingForm.notes || 'None',
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      isSample: false
    };

    saveNewBooking(newBooking);
    setSubmittedBooking(newBooking);
    setBookingSuccess(true);

    // Prefilled WhatsApp message
    const waText = encodeURIComponent(
      `Hello Wok Toss Team!\nI would like to book a table:\n• Name: ${bookingForm.name}\n• Phone: ${bookingForm.phone}\n• Date: ${bookingForm.date}\n• Time: ${bookingForm.time}\n• Guests: ${bookingForm.guests}\n• Notes: ${bookingForm.notes || 'None'}\n\nPlease confirm our reservation. Thank you!`
    );
    const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  // Helper for current day highlighting in hours table
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysOfWeek[new Date().getDay()];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-pan-asian-wok.webp"
            alt="Chef tossing fiery wok stir fry noodles at Wok Toss"
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wok-darkest via-wok-darkest/85 to-wok-darkest/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-wok-darkest/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
          {/* Verified Rating & Cuisine Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-wok-surface/80 backdrop-blur-md border border-wok-border shadow-subtle mb-6 animate-in fade-in duration-300">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-sm ml-1 text-white">{stats.rating}</span>
            </div>
            <span className="text-wok-subtle">•</span>
            <span className="text-xs text-wok-sand">({stats.reviewCount} Verified Google Reviews)</span>
            <span className="text-wok-subtle">•</span>
            <span className="text-xs text-wok-gold font-semibold uppercase tracking-wider">Pan Asian</span>
          </div>

          {/* Restaurant Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
            Wok Toss <span className="text-transparent bg-clip-text bg-gradient-to-r from-wok-gold via-amber-200 to-wok-red block sm:inline">– Pan Asian</span>
          </h1>

          {/* Factual Tagline */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-wok-sand/90 mb-10 leading-relaxed font-light">
            {business.tagline}. Located inside the tranquil surroundings of E-Square The Fern, Shivajinagar, Pune.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/menu" className="btn-primary text-base px-8 py-4 shadow-glow-red">
              <UtensilsCrossed className="w-5 h-5" />
              <span>Order Now</span>
            </Link>
            <a href="#booking" className="btn-gold text-base px-8 py-4">
              <Calendar className="w-5 h-5" />
              <span>Book a Table</span>
            </a>
            <a
              href={`tel:${contact.phoneRaw}`}
              className="btn-secondary text-base px-6 py-4"
            >
              <Phone className="w-5 h-5 text-wok-gold" />
              <span>Call Restaurant</span>
            </a>
          </div>

          {/* Micro badges below hero */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-left">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-wok-surface/40 backdrop-blur-sm border border-wok-border/40">
              <ChefHat className="w-5 h-5 text-wok-gold shrink-0" />
              <span className="text-xs text-wok-sand font-medium">Interactive Live Wok & Ramen Bar</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-wok-surface/40 backdrop-blur-sm border border-wok-border/40">
              <Sparkles className="w-5 h-5 text-wok-red shrink-0" />
              <span className="text-xs text-wok-sand font-medium">Authentic Dim Sum & Sushi</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-2.5 rounded-xl bg-wok-surface/40 backdrop-blur-sm border border-wok-border/40">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs text-wok-sand font-medium">E-Square The Fern, Pune</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (Built purely on verified facts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-wok-border shadow-2xl bg-wok-card">
              <img
                src="/images/gallery/dining-ambiance.webp"
                alt="Wok Toss modern Asian dining room at E-Square The Fern Pune"
                width="1200"
                height="800"
                loading="lazy"
                className="w-full h-[380px] sm:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wok-darkest/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-wok-surface/90 backdrop-blur-md border border-wok-border/80">
                <p className="text-sm font-semibold text-wok-cream">
                  E-Square The Fern, University Road, Shivajinagar
                </p>
                <p className="text-xs text-wok-muted mt-0.5">
                  Upscale, relaxing atmosphere suited for family dinners and private celebrations.
                </p>
              </div>
            </div>
            {/* Floating highlight badge */}
            <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-wok-surface border border-wok-gold/40 shadow-glow-gold">
              <div className="w-10 h-10 rounded-xl bg-wok-gold/20 flex items-center justify-center text-wok-gold">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Live Cooking</p>
                <p className="text-[11px] text-wok-sand">Custom DIY Wok Toss</p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-wok-red/10 border border-wok-red/30 text-wok-red text-xs font-semibold uppercase tracking-wider">
              <span>Authentic Pan-Asian Culinary Art</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              A Symphony of Fiery Woks, Handcrafted Dim Sum & Serene Hospitality
            </h2>

            <div className="space-y-4 text-wok-muted text-sm sm:text-base leading-relaxed">
              <p>
                Nestled inside <span className="text-white font-medium">E-Square The Fern (An Ecotel Hotel)</span> in Shivajinagar, Pune, 
                <span className="text-wok-gold font-medium"> Wok Toss</span> delivers an authentic Oriental dining experience. 
                Celebrated across Pune with an impressive <span className="text-white font-medium">4.3-star rating across 920+ verified reviews</span>, 
                we pride ourselves on vibrant Pan-Asian gastronomy.
              </p>
              <p>
                Our signature attraction is the interactive <span className="text-white font-medium">DIY Live Wok & Ramen Bar</span>: 
                guests handpick from an abundant selection of fresh garden greens, noodles, rice, and succulent proteins, 
                which our chefs toss live over roaring flames with signature sauces like our acclaimed Pepper BBQ and Schezwan.
              </p>
              <p>
                Complementing the live stations are handcrafted dim sums steamed in traditional bamboo baskets, crispy gyoza, fluffy bao buns, and artisanal desserts like our fan-favorite Lotus Biscoff ice cream.
              </p>
            </div>

            {/* Fact Check Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-wok-border/60">
              <div>
                <span className="block text-2xl font-bold text-wok-gold">4.3 ★</span>
                <span className="text-xs text-wok-subtle">Google & Justdial Avg</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">920+</span>
                <span className="text-xs text-wok-subtle">Customer Reviews</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-wok-red">100%</span>
                <span className="text-xs text-wok-subtle">Live Wok Tossed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR DISHES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
              Chef's Signatures
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Most Loved Pan-Asian Specialties
            </h2>
            <p className="text-sm text-wok-muted mt-2 max-w-xl">
              Authentic flavors praised by hundreds of dining guests. Add to your cart and customize at checkout.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-wok-gold hover:text-white transition-colors"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* 4. OFFERS SECTION (Real verified buffet + clearly marked editable placeholder) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-wok-red block mb-2">
            Special Value Deals
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Exclusive Dining Offers
          </h2>
          <p className="text-sm text-wok-muted mt-2">
            Enjoy signature buffet experiences and dining privileges at E-Square The Fern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                offer.isReal
                  ? 'bg-gradient-to-br from-wok-surface to-wok-card border-wok-gold/40 shadow-glow-gold'
                  : 'bg-wok-surface/60 border-dashed border-wok-border hover:border-wok-gold/50'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    offer.isReal
                      ? 'bg-wok-gold/20 text-wok-gold border border-wok-gold/30'
                      : 'bg-wok-card text-wok-muted border border-wok-border'
                  }`}
                >
                  {offer.badge}
                </span>
                <span className="text-xs font-mono text-wok-subtle">{offer.validity}</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {offer.title}
                </h3>
                <p className="text-sm text-wok-sand/80 leading-relaxed mb-6">
                  {offer.description}
                </p>
              </div>

              <div className="pt-4 border-t border-wok-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-wok-muted uppercase">Code:</span>
                  <span className="font-mono text-xs font-bold text-white bg-wok-darkest px-2.5 py-1 rounded-md border border-wok-border">
                    {offer.code}
                  </span>
                </div>
                <a
                  href="#booking"
                  className="btn-primary text-xs py-2 px-4 rounded-xl"
                >
                  Claim Offer
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PHOTO GALLERY & LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
            Visual Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Moments at Wok Toss
          </h2>
          <p className="text-sm text-wok-muted mt-2">
            From sizzling wok flames and handcrafted dim sums to our calming dining ambiance inside E-Square The Fern.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setCurrentGalleryIdx(index);
                setLightboxOpen(true);
              }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-wok-border bg-wok-card"
            >
              <img
                src={item.image}
                alt={item.altText || item.title}
                width="600"
                height="450"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-medium text-wok-gold uppercase">{item.category}</span>
                <p className="text-sm font-semibold text-white truncate">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          currentIndex={currentGalleryIdx}
          items={gallery}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentGalleryIdx((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))}
          onNext={() => setCurrentGalleryIdx((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))}
        />
      </section>

      {/* 6. VERIFIED CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
              Guest Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              What Diners Say on Google
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">{stats.rating} out of 5</span>
              <span className="text-sm text-wok-muted">({stats.reviewCount} reviews)</span>
            </div>
          </div>
          <a
            href={contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-wok-gold hover:underline"
          >
            <span>See all reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="wok-card p-6 flex flex-col justify-between bg-wok-surface/80 border border-wok-border"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-wok-card border border-wok-border flex items-center justify-center font-bold text-xs text-wok-gold">
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-wok-cream">{rev.name}</h4>
                      <span className="text-[11px] text-wok-muted">{rev.date}</span>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-wok-sand/90 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-wok-border/40 flex items-center justify-between text-xs text-wok-subtle">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Google Review
                </span>
                <span>Wok Toss, Pune</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INSTAGRAM POST TILES (No iframes, pure local WebP tiles linking to real Instagram) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-wok-red block mb-2">
              Social Community
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Connect With Us On Instagram
            </h2>
            <p className="text-sm text-wok-muted mt-2">
              Tag <span className="text-wok-gold font-mono">#WokTossPune</span> and <span className="text-wok-gold font-mono">#ESquareTheFern</span> in your dining reels and photos.
            </p>
          </div>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs px-5 py-2.5 rounded-xl flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-wok-red" />
            <span>Follow Us @esquarethefern</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-wok-border bg-wok-card block"
            >
              <img
                src={post.image}
                alt={post.altText || 'Wok Toss Instagram post'}
                width="400"
                height="400"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-xs text-white">
                <Instagram className="w-5 h-5 text-wok-gold self-end" />
                <p className="line-clamp-3 text-[11px] leading-tight text-wok-sand">
                  {post.caption}
                </p>
                <span className="text-[10px] text-wok-muted">♥ {post.likes} likes</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. WEEKLY OPENING HOURS & LIVE STATUS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-wok-surface/90 border border-wok-border shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-wok-border/80 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-1">
                Operating Schedule
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Weekly Dining Hours
              </h3>
            </div>
            <HoursStatusBadge showNext />
          </div>

          <div className="mt-6 divide-y divide-wok-border/40 text-sm">
            {hours.map((h) => {
              const isToday = h.day === todayName;
              return (
                <div
                  key={h.day}
                  className={`py-3.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                    isToday ? 'bg-wok-card/80 font-semibold border-l-4 border-wok-gold pl-4' : 'text-wok-sand/80'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={isToday ? 'text-white' : 'text-wok-sand'}>{h.day}</span>
                    {isToday && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-wok-gold/20 text-wok-gold px-2 py-0.5 rounded">
                        Today
                      </span>
                    )}
                  </div>
                  <div className="text-right text-xs sm:text-sm">
                    <span className="text-white block font-mono">{h.text}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-wok-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-wok-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-wok-gold" />
              Kitchen last orders are accepted 30 minutes before session closure.
            </span>
            <a href={`tel:${contact.phoneRaw}`} className="text-wok-gold hover:underline font-medium">
              Call to confirm late seating
            </a>
          </div>
        </div>
      </section>

      {/* 9. TABLE BOOKING SECTION */}
      <section id="booking" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-wok-surface to-wok-card border border-wok-gold/40 shadow-glow-gold relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
              Reserve Your Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Book a Table at Wok Toss
            </h2>
            <p className="text-sm text-wok-sand/80 mt-2">
              Instant confirmation. Submitting opens a prefilled WhatsApp request with our manager and registers directly in our reservation system.
            </p>
          </div>

          {bookingSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Reservation Request Received!</h3>
              <p className="text-sm text-emerald-200/90 max-w-md mx-auto">
                Thank you, <strong className="text-white">{submittedBooking?.customerName}</strong>! Your booking ID is{' '}
                <strong className="text-white font-mono">{submittedBooking?.id}</strong> for{' '}
                <strong className="text-white">{submittedBooking?.guests} guests</strong> on{' '}
                <strong className="text-white">{submittedBooking?.bookingDate} at {submittedBooking?.bookingTime}</strong>.
              </p>
              <div className="pt-2 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setBookingSuccess(false);
                    setBookingForm({ name: '', phone: '', date: '', time: '19:30', guests: 2, notes: '' });
                  }}
                  className="btn-secondary text-xs px-4 py-2"
                >
                  Book Another Table
                </button>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs px-4 py-2 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white placeholder-wok-subtle focus:border-wok-gold focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="e.g. +91 98220 12345"
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white placeholder-wok-subtle focus:border-wok-gold focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white focus:border-wok-gold focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Preferred Time *
                  </label>
                  <select
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white focus:border-wok-gold focus:outline-none text-sm"
                  >
                    <optgroup label="Lunch Session">
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="14:30">02:30 PM</option>
                    </optgroup>
                    <optgroup label="Dinner Session">
                      <option value="19:00">07:00 PM</option>
                      <option value="19:30">07:30 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="20:30">08:30 PM</option>
                      <option value="21:00">09:00 PM</option>
                      <option value="21:30">09:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                    Number of Guests *
                  </label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white focus:border-wok-gold focus:outline-none text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
                  Special Notes / Requests (Optional)
                </label>
                <textarea
                  rows="2"
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="e.g. Birthday celebration, booth seating, less spicy preference"
                  className="w-full px-4 py-3 rounded-xl bg-wok-darkest border border-wok-border text-white placeholder-wok-subtle focus:border-wok-gold focus:outline-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-4 text-base font-bold shadow-glow-gold mt-2"
              >
                Confirm & Open WhatsApp Reservation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-wok-muted mt-2">
            Everything you need to know about dining, interactive buffets, and reservations at Wok Toss.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-wok-border bg-wok-surface/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between text-white font-semibold text-base hover:text-wok-gold transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-wok-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-wok-sand/90 leading-relaxed border-t border-wok-border/40 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
