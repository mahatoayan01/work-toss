import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Info, Sparkles, X } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { DishCard } from '../components/DishCard';

export const MenuPage = () => {
  const { dishes, menuCategories } = restaurantData;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'all' || dish.category === selectedCategory;

      // Diet check
      const matchesDiet =
        dietFilter === 'all'
          ? true
          : dietFilter === 'veg'
          ? dish.isVeg
          : !dish.isVeg;

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        dish.name.toLowerCase().includes(q) ||
        dish.description.toLowerCase().includes(q);

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [dishes, selectedCategory, dietFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-wok-gold block mb-2">
          Culinary Selection
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Pan-Asian Menu & Specialties
        </h1>
        <p className="text-sm sm:text-base text-wok-sand/80 leading-relaxed">
          From live custom-tossed fiery wok bowls and rich Japanese ramen to steamed dim sum and artisanal desserts.
        </p>
      </div>

      {/* Verified Notice Banner */}
      <div className="p-4 rounded-2xl bg-wok-surface/80 border border-wok-border/80 flex items-start gap-3 text-xs sm:text-sm text-wok-muted max-w-4xl mx-auto">
        <Info className="w-5 h-5 text-wok-gold shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-wok-cream font-medium">
            <span className="font-mono text-wok-gold font-bold">[ADD FULL MENU]</span> Showing verified dishes & signature live buffet items.
          </p>
          <p className="text-xs text-wok-subtle">
            Verified from Google Maps, Swiggy Dineout, and EazyDiner listings for Wok Toss at E-Square The Fern, Pune.
          </p>
        </div>
      </div>

      {/* Search & Filters Control Bar */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {/* Search Bar & Diet Toggles */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-wok-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dumplings, ramen, noodles..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-wok-surface border border-wok-border text-white text-sm focus:border-wok-gold focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-wok-subtle hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Diet Filters */}
          <div className="flex items-center gap-1.5 p-1 bg-wok-surface rounded-xl border border-wok-border w-full sm:w-auto justify-center">
            <button
              type="button"
              onClick={() => setDietFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                dietFilter === 'all'
                  ? 'bg-wok-card text-white shadow-sm'
                  : 'text-wok-muted hover:text-wok-cream'
              }`}
            >
              All Items
            </button>
            <button
              type="button"
              onClick={() => setDietFilter('veg')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                dietFilter === 'veg'
                  ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-500/40'
                  : 'text-wok-muted hover:text-emerald-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Veg Only
            </button>
            <button
              type="button"
              onClick={() => setDietFilter('non-veg')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                dietFilter === 'non-veg'
                  ? 'bg-red-950/70 text-red-400 border border-red-500/40'
                  : 'text-wok-muted hover:text-red-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Non-Veg Only
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {menuCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-wok-gold text-wok-darkest shadow-glow-gold'
                    : 'bg-wok-surface/80 text-wok-sand hover:bg-wok-card hover:text-white border border-wok-border/80'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dishes Counter */}
      <div className="flex items-center justify-between text-xs text-wok-subtle max-w-5xl mx-auto border-b border-wok-border/40 pb-3">
        <span>
          Showing <strong className="text-white">{filteredDishes.length}</strong> delicacies
        </span>
        {searchQuery && (
          <span>
            Filtered by keyword: <em className="text-wok-gold">"{searchQuery}"</em>
          </span>
        )}
      </div>

      {/* Dish Cards Grid */}
      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-wok-surface/40 border border-wok-border max-w-md mx-auto space-y-4">
          <p className="text-base font-semibold text-white">No dishes found</p>
          <p className="text-xs text-wok-muted">
            Try adjusting your search terms or dietary filter to explore other Pan-Asian items.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setDietFilter('all');
            }}
            className="btn-secondary text-xs px-4 py-2 rounded-xl"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
