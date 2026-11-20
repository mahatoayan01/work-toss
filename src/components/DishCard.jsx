import React, { useState } from 'react';
import { Plus, Minus, Check, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { restaurantData } from '../data/restaurant';

export const VegNonVegBadge = ({ isVeg }) => {
  if (isVeg) {
    return (
      <span className="wok-badge-veg" title="Vegetarian">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
      </span>
    );
  }
  return (
    <span className="wok-badge-nonveg" title="Non-Vegetarian">
      <span className="w-2 h-2 rounded-full bg-red-500" />
    </span>
  );
};

export const DishCard = ({ dish }) => {
  const { items, addToCart, updateQuantity } = useCart();
  const [imgError, setImgError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = items.find((i) => i.id === dish.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const currency = restaurantData.config.currencySymbol;

  const handleAdd = () => {
    addToCart(dish, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 800);
  };

  return (
    <div className="wok-card group overflow-hidden flex flex-col h-full bg-wok-surface border border-wok-border/70 hover:border-wok-red/50 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-wok-card">
        <img
          src={imgError ? '/images/placeholder-dish.svg' : dish.image}
          alt={dish.altText || dish.name}
          width="600"
          height="400"
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wok-darkest/90 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-wok-darkest/90 backdrop-blur-md px-2 py-1 rounded-md border border-wok-border/80 flex items-center gap-1.5 shadow-sm">
            <VegNonVegBadge isVeg={dish.isVeg} />
            <span className="text-[11px] font-medium tracking-wide uppercase text-wok-cream">
              {dish.isVeg ? 'Veg' : 'Non-Veg'}
            </span>
          </span>
          {dish.popular && (
            <span className="bg-wok-red/90 text-white text-[11px] font-semibold px-2 py-1 rounded-md shadow-sm uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3" /> Popular
            </span>
          )}
        </div>

        {/* Spice Level Badge */}
        {dish.spiceLevel && (
          <span className="absolute bottom-2 left-3 text-[11px] font-medium text-wok-sand/80 bg-wok-darkest/80 backdrop-blur-sm px-2 py-0.5 rounded">
            {dish.spiceLevel}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-semibold text-lg text-wok-cream group-hover:text-wok-gold transition-colors duration-200">
              {dish.name}
            </h3>
            <span className="font-bold text-lg text-wok-gold whitespace-nowrap">
              {currency}{dish.price}
            </span>
          </div>

          <p className="text-sm text-wok-muted line-clamp-2 mb-4 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="pt-3 border-t border-wok-border/60 flex items-center justify-between mt-auto">
          <span className="text-xs text-wok-subtle font-mono">
            {dish.isVeg && dish.hasNonVegOption ? 'Non-veg option available' : 'Authentic Pan-Asian'}
          </span>

          {quantity > 0 ? (
            <div className="flex items-center gap-2 bg-wok-darkest rounded-xl p-1 border border-wok-red/40">
              <button
                type="button"
                onClick={() => updateQuantity(dish.id, quantity - 1)}
                className="w-7 h-7 rounded-lg bg-wok-surface hover:bg-wok-card text-wok-cream flex items-center justify-center transition-colors"
                aria-label={`Decrease quantity of ${dish.name}`}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-semibold text-sm px-2 min-w-[20px] text-center text-white">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => updateQuantity(dish.id, quantity + 1)}
                className="w-7 h-7 rounded-lg bg-wok-red hover:bg-wok-redHover text-white flex items-center justify-center transition-colors"
                aria-label={`Increase quantity of ${dish.name}`}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              className="btn-primary text-xs py-2 px-3.5 rounded-lg flex items-center gap-1.5"
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" /> Added
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" /> Add to Cart
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
