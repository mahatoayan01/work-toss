import { restaurantData } from '../data/restaurant';

const STORAGE_KEYS = {
  CART: 'wok_toss_cart',
  ORDERS: 'wok_toss_orders',
  BOOKINGS: 'wok_toss_bookings',
  AUTH: 'wok_toss_auth_session'
};

// Safe localStorage wrapper
export const storage = {
  get: (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.warn(`Error reading localStorage key "${key}":`, err);
      return defaultValue;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Error writing to localStorage key "${key}":`, err);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.warn(`Error removing localStorage key "${key}":`, err);
    }
  }
};

// Initialize / Get Orders
export const getStoredOrders = () => {
  const existing = storage.get(STORAGE_KEYS.ORDERS, null);
  if (!existing || existing.length === 0) {
    const initial = [...restaurantData.sampleOrders];
    storage.set(STORAGE_KEYS.ORDERS, initial);
    return initial;
  }
  return existing;
};

// Save a new order
export const saveNewOrder = (order) => {
  const orders = getStoredOrders();
  const updated = [order, ...orders];
  storage.set(STORAGE_KEYS.ORDERS, updated);
  return updated;
};

// Update order status
export const updateOrderStatus = (orderId, newStatus) => {
  const orders = getStoredOrders();
  const updated = orders.map((o) => (o.id === orderId ? { ...o, orderStatus: newStatus } : o));
  storage.set(STORAGE_KEYS.ORDERS, updated);
  return updated;
};

// Initialize / Get Bookings
export const getStoredBookings = () => {
  const existing = storage.get(STORAGE_KEYS.BOOKINGS, null);
  if (!existing || existing.length === 0) {
    const initial = [...restaurantData.sampleBookings];
    storage.set(STORAGE_KEYS.BOOKINGS, initial);
    return initial;
  }
  return existing;
};

// Save a new table booking
export const saveNewBooking = (booking) => {
  const bookings = getStoredBookings();
  const updated = [booking, ...bookings];
  storage.set(STORAGE_KEYS.BOOKINGS, updated);
  return updated;
};

// Reset demo data to factory defaults
export const resetDemoData = () => {
  storage.set(STORAGE_KEYS.ORDERS, [...restaurantData.sampleOrders]);
  storage.set(STORAGE_KEYS.BOOKINGS, [...restaurantData.sampleBookings]);
  storage.remove(STORAGE_KEYS.CART);
};

// Owner Auth Helpers
export const getOwnerSession = () => {
  return storage.get(STORAGE_KEYS.AUTH, null);
};

export const setOwnerSession = (session) => {
  storage.set(STORAGE_KEYS.AUTH, session);
};

export const clearOwnerSession = () => {
  storage.remove(STORAGE_KEYS.AUTH);
};

// Cart Helpers
export const getStoredCart = () => {
  return storage.get(STORAGE_KEYS.CART, []);
};

export const saveStoredCart = (cart) => {
  storage.set(STORAGE_KEYS.CART, cart);
};
