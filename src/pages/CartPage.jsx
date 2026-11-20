import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Utensils,
  Truck,
  Building,
  CreditCard,
  QrCode,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { restaurantData } from '../data/restaurant';
import { VegNonVegBadge } from '../components/DishCard';
import { saveNewOrder } from '../utils/storage';

export const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } = useCart();
  const { config } = restaurantData;
  const currency = config.currencySymbol;

  // Order Details Form State
  const [orderType, setOrderType] = useState('Dine-in'); // 'Dine-in' | 'Takeaway' | 'Delivery'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tableNumber, setTableNumber] = useState('Table 4');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState('UPI (demo)'); // 'Pay at restaurant' | 'UPI (demo)' | 'Card (demo)'
  const [demoUpiId, setDemoUpiId] = useState('demo@okhdfcbank');
  const [demoCardNumber, setDemoCardNumber] = useState('•••• •••• •••• 4242');

  // Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  // Financial calculations
  const taxAmount = Math.round(subtotal * config.taxRate * 100) / 100;
  const deliveryFee = orderType === 'Delivery' ? config.deliveryFee : 0;
  const packagingFee = orderType === 'Delivery' || orderType === 'Takeaway' ? config.packagingFee : 0;
  const totalAmount = Math.round(subtotal + taxAmount + deliveryFee + packagingFee);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const orderId = `ORD-${Date.now().toString().slice(-4)}`;
    const newOrder = {
      id: orderId,
      orderDate: new Date().toISOString(),
      customerName,
      customerPhone,
      orderType,
      tableNumber: orderType === 'Dine-in' ? tableNumber : undefined,
      deliveryAddress: orderType === 'Delivery' ? deliveryAddress : undefined,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        isVeg: item.isVeg
      })),
      subtotal,
      tax: taxAmount,
      deliveryFee,
      packagingFee,
      totalAmount,
      paymentMethod,
      paymentStatus: paymentMethod === 'Pay at restaurant' ? 'Pending' : 'Paid (Demo)',
      orderStatus: 'New',
      notes: orderNotes || 'None',
      isSample: false
    };

    saveNewOrder(newOrder);
    setPlacedOrder(newOrder);
    clearCart();
    setIsSubmitted(true);
  };

  if (isSubmitted && placedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-8 animate-in zoom-in-95 duration-200">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-glow-gold">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
            Order Confirmed & Placed Successfully
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Thank You, {placedOrder.customerName}!
          </h1>
          <p className="text-sm text-wok-sand">
            Your demo order <strong className="font-mono text-wok-gold">{placedOrder.id}</strong> has been transmitted to the kitchen.
          </p>
        </div>

        {/* Demo Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 text-left max-w-xl mx-auto flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-white mb-0.5">Demo Simulation Notice:</strong>
            No real money or card was charged. This simulated order is stored in your browser's <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300">localStorage</code> and is immediately visible in the live Owner Dashboard!
          </div>
        </div>

        {/* Order Receipt Box */}
        <div className="p-6 rounded-3xl bg-wok-surface border border-wok-border text-left space-y-4 max-w-xl mx-auto">
          <div className="flex justify-between items-center pb-3 border-b border-wok-border/60 text-xs text-wok-muted">
            <span>Order Type: <strong className="text-white">{placedOrder.orderType}</strong></span>
            <span>Method: <strong className="text-white">{placedOrder.paymentMethod}</strong></span>
          </div>

          <div className="space-y-2">
            {placedOrder.items.map((i) => (
              <div key={i.id} className="flex justify-between items-center text-sm">
                <span className="text-wok-sand">
                  {i.quantity}x {i.name}
                </span>
                <span className="font-mono text-white">
                  {currency}{i.price * i.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-wok-border/60 space-y-1.5 text-xs text-wok-sand">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-mono">{currency}{placedOrder.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>{config.taxLabel}:</span>
              <span className="font-mono">{currency}{placedOrder.tax}</span>
            </div>
            {placedOrder.deliveryFee > 0 && (
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span className="font-mono">{currency}{placedOrder.deliveryFee}</span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold text-wok-gold pt-2 border-t border-wok-border/40">
              <span>Total Paid (Demo):</span>
              <span className="font-mono">{currency}{placedOrder.totalAmount}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/owner-dashboard" className="btn-gold text-sm px-6 py-3 w-full sm:w-auto">
            View in Owner Dashboard
          </Link>
          <Link to="/menu" className="btn-secondary text-sm px-6 py-3 w-full sm:w-auto">
            Order More Dishes
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-wok-surface border border-wok-border flex items-center justify-center mx-auto text-wok-subtle">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-bold text-white">Your Cart is Empty</h1>
          <p className="text-sm text-wok-muted max-w-md mx-auto">
            You haven't selected any Pan-Asian dishes yet. Explore our live wok bowls, dumplings, and ramen specialties.
          </p>
        </div>
        <Link to="/menu" className="btn-primary text-sm px-8 py-3.5 inline-flex items-center gap-2">
          <span>Explore Pan-Asian Menu</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Review Your Order & Checkout
        </h1>
        <p className="text-xs sm:text-sm text-wok-muted mt-1">
          Complete your details to place a simulated demonstration order.
        </p>
      </div>

      {/* Top Demo Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white">DEMO CHECKOUT ONLY:</strong> No real payment is collected or processed. Credit card and UPI options are purely visual mock screens that securely store simulated test orders into your local browser storage.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-wok-border/60">
            <h2 className="font-semibold text-lg text-white">
              Items in Cart ({totalItems})
            </h2>
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-wok-red hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Cart
            </button>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-wok-surface border border-wok-border flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width="80"
                  height="80"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 bg-wok-card"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <VegNonVegBadge isVeg={item.isVeg} />
                    <h3 className="font-semibold text-sm sm:text-base text-white truncate">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-wok-gold">
                    {currency}{item.price} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-wok-darkest rounded-xl p-1 border border-wok-border shrink-0">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 rounded-lg bg-wok-surface text-white flex items-center justify-center hover:bg-wok-card"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-semibold text-xs px-1.5 text-white">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 rounded-lg bg-wok-red text-white flex items-center justify-center hover:bg-wok-redHover"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <div className="text-right shrink-0 min-w-[60px]">
                  <span className="font-mono font-bold text-sm text-white">
                    {currency}{item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs text-wok-gold hover:underline font-semibold"
            >
              <Plus className="w-3.5 h-3.5" /> Add more dishes from menu
            </Link>
          </div>
        </div>

        {/* Right Column: Checkout Form & Payment */}
        <div className="lg:col-span-5 space-y-6">
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 rounded-3xl bg-wok-surface border border-wok-border shadow-2xl space-y-6">
            <h3 className="font-display text-xl font-bold text-white border-b border-wok-border/60 pb-3">
              Order Details
            </h3>

            {/* 1. Order Type Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase text-wok-sand mb-2">
                Dining Option *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Dine-in', label: 'Dine-in', icon: Utensils },
                  { id: 'Takeaway', label: 'Takeaway', icon: Building },
                  { id: 'Delivery', label: 'Delivery', icon: Truck },
                ].map((type) => {
                  const Icon = type.icon;
                  const isSelected = orderType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setOrderType(type.id)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-wok-gold text-wok-darkest border-wok-gold shadow-glow-gold'
                          : 'bg-wok-card text-wok-sand border-wok-border hover:bg-wok-surface'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Customer Information */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold uppercase text-wok-sand mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-wok-darkest border border-wok-border text-white text-xs sm:text-sm focus:border-wok-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-wok-sand mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="e.g. +91 98220 12345"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-wok-darkest border border-wok-border text-white text-xs sm:text-sm focus:border-wok-gold focus:outline-none"
                />
              </div>

              {orderType === 'Dine-in' && (
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1">
                    Table Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    placeholder="e.g. Table 4"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-wok-darkest border border-wok-border text-white text-xs sm:text-sm focus:border-wok-gold focus:outline-none"
                  />
                </div>
              )}

              {orderType === 'Delivery' && (
                <div>
                  <label className="block text-xs font-semibold uppercase text-wok-sand mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    rows="2"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Flat / House no, Building name, Street, Landmark in Pune..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-wok-darkest border border-wok-border text-white text-xs sm:text-sm focus:border-wok-gold focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase text-wok-sand mb-1">
                  Kitchen Notes / Dietary Requests
                </label>
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g. Extra spicy, no onions, pack chopsticks"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-wok-darkest border border-wok-border text-white text-xs sm:text-sm focus:border-wok-gold focus:outline-none"
                />
              </div>
            </div>

            {/* 3. Demo Payment Selection */}
            <div className="space-y-3 pt-2 border-t border-wok-border/60">
              <label className="block text-xs font-semibold uppercase text-wok-sand">
                Demo Payment Method *
              </label>

              <div className="space-y-2">
                {[
                  { id: 'UPI (demo)', label: 'UPI / QR Code (demo)', icon: QrCode },
                  { id: 'Card (demo)', label: 'Credit / Debit Card (demo)', icon: CreditCard },
                  { id: 'Pay at restaurant', label: 'Pay at Restaurant (Cash / Card)', icon: DollarSign },
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = paymentMethod === m.id;
                  return (
                    <label
                      key={m.id}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-wok-card border-wok-gold text-white'
                          : 'bg-wok-darkest/60 border-wok-border text-wok-sand hover:bg-wok-card/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 text-xs font-medium">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-wok-gold' : 'text-wok-subtle'}`} />
                        <span>{m.label}</span>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={m.id}
                        checked={isSelected}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-wok-gold focus:ring-wok-gold"
                      />
                    </label>
                  );
                })}
              </div>

              {/* Demo Payment Mock View */}
              {paymentMethod === 'UPI (demo)' && (
                <div className="p-3 rounded-xl bg-wok-darkest border border-wok-border/80 text-xs space-y-2">
                  <span className="text-[11px] text-wok-muted block">Simulated UPI Handle:</span>
                  <input
                    type="text"
                    value={demoUpiId}
                    onChange={(e) => setDemoUpiId(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-wok-surface border border-wok-border text-white text-xs font-mono"
                  />
                  <p className="text-[10px] text-emerald-400">✓ Auto-approved simulated test gateway</p>
                </div>
              )}

              {paymentMethod === 'Card (demo)' && (
                <div className="p-3 rounded-xl bg-wok-darkest border border-wok-border/80 text-xs space-y-2">
                  <span className="text-[11px] text-wok-muted block">Simulated Card Details:</span>
                  <input
                    type="text"
                    value={demoCardNumber}
                    onChange={(e) => setDemoCardNumber(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-wok-surface border border-wok-border text-white text-xs font-mono"
                  />
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <span className="text-wok-muted">Expiry: 12/28</span>
                    <span className="text-wok-muted">CVV: •••</span>
                  </div>
                  <p className="text-[10px] text-amber-300">Demo test only: no sensitive data stored.</p>
                </div>
              )}
            </div>

            {/* 4. Bill Summary */}
            <div className="pt-3 border-t border-wok-border/60 space-y-2 text-xs text-wok-sand">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-mono text-white">{currency}{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>{config.taxLabel}:</span>
                <span className="font-mono text-white">{currency}{taxAmount}</span>
              </div>
              {orderType === 'Delivery' && (
                <div className="flex justify-between">
                  <span>Delivery Charges:</span>
                  <span className="font-mono text-white">{currency}{deliveryFee}</span>
                </div>
              )}
              {packagingFee > 0 && (
                <div className="flex justify-between">
                  <span>Takeaway / Packaging:</span>
                  <span className="font-mono text-white">{currency}{packagingFee}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-wok-gold pt-2 border-t border-wok-border/40">
                <span>Total Amount:</span>
                <span className="font-mono">{currency}{totalAmount}</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 text-base font-bold shadow-glow-red"
            >
              Place Simulated Order ({currency}{totalAmount})
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
