import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  ShoppingBag,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  RotateCcw,
  LogOut,
  Calendar,
  CreditCard,
  User,
  Phone,
  FileText,
  ChevronDown
} from 'lucide-react';
import {
  getOwnerSession,
  clearOwnerSession,
  getStoredOrders,
  updateOrderStatus,
  getStoredBookings,
  resetDemoData
} from '../utils/storage';
import { restaurantData } from '../data/restaurant';

export const OwnerDashboardPage = () => {
  const navigate = useNavigate();
  const session = getOwnerSession();
  const { config } = restaurantData;
  const currency = config.currencySymbol;

  // Protect route
  useEffect(() => {
    if (!session) {
      navigate('/owner-login');
    }
  }, [session, navigate]);

  // Dashboard Data State
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'payments' | 'bookings'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Load from localStorage
  const loadData = () => {
    setOrders(getStoredOrders());
    setBookings(getStoredBookings());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    clearOwnerSession();
    navigate('/owner-login');
  };

  const handleReset = () => {
    if (window.confirm('Reset all demo orders and bookings back to factory sample state?')) {
      resetDemoData();
      loadData();
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    const updated = updateOrderStatus(orderId, newStatus);
    setOrders(updated);
  };

  // Metrics Calculation
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
  const pendingOrders = orders.filter((o) => o.orderStatus === 'New' || o.orderStatus === 'Preparing').length;
  const todayStr = new Date().toISOString().split('T')[0];
  const todayOrders = orders.filter((o) => (o.orderDate || '').startsWith(todayStr)).length;

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        o.id.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        (o.customerPhone || '').toLowerCase().includes(q) ||
        o.items.some((i) => i.name.toLowerCase().includes(q));

      const matchesStatus = statusFilter === 'all' || o.orderStatus === statusFilter;
      const matchesType = typeFilter === 'all' || o.orderType === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [orders, searchQuery, statusFilter, typeFilter]);

  if (!session) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-wok-border">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              Live Management Console
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
            Wok Toss – Owner Dashboard
          </h1>
          <p className="text-xs text-wok-muted mt-0.5">
            Logged in as <strong className="text-white">{session.username}</strong> ({session.role})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5"
            title="Reset to factory sample orders"
          >
            <RotateCcw className="w-3.5 h-3.5 text-wok-gold" />
            <span>Reset Demo Data</span>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="btn-secondary text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 text-wok-red hover:border-wok-red"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-wok-surface border border-wok-border shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-wok-muted block mb-1">Total Orders</span>
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">{totalOrders}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-wok-card border border-wok-border flex items-center justify-center text-wok-gold">
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-wok-surface border border-wok-border shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-wok-muted block mb-1">Total Revenue</span>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
              {currency}{totalRevenue.toLocaleString()}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-wok-surface border border-wok-border shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-wok-muted block mb-1">Today's Orders</span>
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">{todayOrders}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-wok-card border border-wok-border flex items-center justify-center text-wok-sand">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-wok-surface border border-wok-border shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-wok-muted block mb-1">Pending Kitchen</span>
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">{pendingOrders}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-wok-border pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'orders'
              ? 'bg-wok-gold text-wok-darkest shadow-glow-gold'
              : 'text-wok-muted hover:text-white'
          }`}
        >
          Orders & Kitchen Status ({orders.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('payments')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'payments'
              ? 'bg-wok-gold text-wok-darkest shadow-glow-gold'
              : 'text-wok-muted hover:text-white'
          }`}
        >
          Payment History ({orders.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('bookings')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'bookings'
              ? 'bg-wok-gold text-wok-darkest shadow-glow-gold'
              : 'text-wok-muted hover:text-white'
          }`}
        >
          Table Bookings ({bookings.length})
        </button>
      </div>

      {/* TAB 1: ORDERS MANAGEMENT */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-wok-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search orders, customers, items..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-wok-surface border border-wok-border text-white text-xs focus:border-wok-gold focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-wok-surface border border-wok-border text-white text-xs focus:border-wok-gold focus:outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Preparing">Preparing</option>
                <option value="Ready">Ready</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              {/* Type Filter */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-wok-surface border border-wok-border text-white text-xs focus:border-wok-gold focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="Dine-in">Dine-in</option>
                <option value="Takeaway">Takeaway</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>
          </div>

          {/* Orders Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-wok-border bg-wok-surface shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-wok-card text-wok-sand uppercase font-semibold tracking-wider border-b border-wok-border text-[11px]">
                <tr>
                  <th className="py-3 px-4">Order ID & Type</th>
                  <th className="py-3 px-4">Date / Time</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Items Summary</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Payment</th>
                  <th className="py-3 px-4">Kitchen Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wok-border/60 text-wok-sand">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-wok-card/50 transition-colors">
                      <td className="py-3 px-4">
                        <span className="font-mono font-bold text-white block">{order.id}</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] uppercase font-semibold text-wok-gold bg-wok-card px-1.5 py-0.5 rounded border border-wok-border">
                            {order.orderType}
                          </span>
                          {order.isSample ? (
                            <span className="text-[9px] uppercase tracking-wide bg-blue-950/60 text-blue-300 px-1.5 py-0.5 rounded border border-blue-500/30">
                              Sample Data
                            </span>
                          ) : (
                            <span className="text-[9px] uppercase tracking-wide bg-emerald-950/80 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">
                              Live Placed
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-wok-muted whitespace-nowrap font-mono text-[11px]">
                        {new Date(order.orderDate).toLocaleString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-white block">{order.customerName}</span>
                        <span className="text-wok-muted font-mono text-[10px]">{order.customerPhone}</span>
                      </td>
                      <td className="py-3 px-4 max-w-xs">
                        <div className="space-y-0.5">
                          {order.items.map((it, idx) => (
                            <span key={idx} className="block text-wok-sand truncate">
                              {it.quantity}x {it.name}
                            </span>
                          ))}
                        </div>
                        {order.notes && order.notes !== 'None' && (
                          <span className="text-[10px] text-amber-300/80 italic block mt-0.5 truncate">
                            Note: {order.notes}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap font-mono font-bold text-white text-sm">
                        {currency}{order.totalAmount}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="block text-wok-sand font-medium">{order.paymentMethod}</span>
                        <span
                          className={`inline-block text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded mt-0.5 ${
                            order.paymentStatus.includes('Paid')
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <select
                          value={order.orderStatus}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className={`px-2 py-1 rounded-lg text-xs font-semibold uppercase border focus:outline-none ${
                            order.orderStatus === 'Completed'
                              ? 'bg-emerald-950 text-emerald-400 border-emerald-500/40'
                              : order.orderStatus === 'Ready'
                              ? 'bg-blue-950 text-blue-400 border-blue-500/40'
                              : order.orderStatus === 'Preparing'
                              ? 'bg-amber-950 text-amber-300 border-amber-500/40'
                              : order.orderStatus === 'Cancelled'
                              ? 'bg-red-950 text-red-400 border-red-500/40'
                              : 'bg-wok-card text-white border-wok-border'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Preparing">Preparing</option>
                          <option value="Ready">Ready</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-wok-muted">
                      No matching orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: PAYMENT HISTORY TABLE */}
      {activeTab === 'payments' && (
        <div className="overflow-x-auto rounded-2xl border border-wok-border bg-wok-surface shadow-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-wok-card text-wok-sand uppercase font-semibold tracking-wider border-b border-wok-border text-[11px]">
              <tr>
                <th className="py-3 px-4">Payment Ref</th>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Date / Time</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Payment Method</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-wok-border/60 text-wok-sand">
              {orders.map((o, idx) => (
                <tr key={`pay-${o.id}`} className="hover:bg-wok-card/50 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-wok-gold">
                    PAY-{o.id.replace('ORD-', '')}
                  </td>
                  <td className="py-3 px-4 font-mono text-white">{o.id}</td>
                  <td className="py-3 px-4 text-wok-muted font-mono text-[11px]">
                    {new Date(o.orderDate).toLocaleString('en-IN', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="py-3 px-4 text-white font-medium">{o.customerName}</td>
                  <td className="py-3 px-4">{o.paymentMethod}</td>
                  <td className="py-3 px-4 font-mono font-bold text-white text-sm">
                    {currency}{o.totalAmount}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                        o.paymentStatus.includes('Paid')
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {o.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 3: TABLE BOOKINGS */}
      {activeTab === 'bookings' && (
        <div className="overflow-x-auto rounded-2xl border border-wok-border bg-wok-surface shadow-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-wok-card text-wok-sand uppercase font-semibold tracking-wider border-b border-wok-border text-[11px]">
              <tr>
                <th className="py-3 px-4">Booking ID</th>
                <th className="py-3 px-4">Guest Name</th>
                <th className="py-3 px-4">Phone Number</th>
                <th className="py-3 px-4">Reserved Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Party Size</th>
                <th className="py-3 px-4">Special Requests</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-wok-border/60 text-wok-sand">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-wok-card/50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-mono font-bold text-wok-gold block">{b.id}</span>
                    {b.isSample ? (
                      <span className="text-[9px] uppercase tracking-wide bg-blue-950/60 text-blue-300 px-1 py-0.5 rounded border border-blue-500/30">
                        Sample Record
                      </span>
                    ) : (
                      <span className="text-[9px] uppercase tracking-wide bg-emerald-950/80 text-emerald-300 px-1 py-0.5 rounded border border-emerald-500/40">
                        New Web Booking
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-semibold text-white">{b.customerName}</td>
                  <td className="py-3 px-4 font-mono text-wok-muted">{b.customerPhone}</td>
                  <td className="py-3 px-4 font-mono text-white">{b.bookingDate}</td>
                  <td className="py-3 px-4 font-mono text-wok-gold font-semibold">{b.bookingTime}</td>
                  <td className="py-3 px-4 font-bold text-white">{b.guests} Guests</td>
                  <td className="py-3 px-4 max-w-xs truncate text-wok-sand/80">
                    {b.specialRequests || 'None'}
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded">
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
