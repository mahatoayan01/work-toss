import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { OwnerLoginPage } from './pages/OwnerLoginPage';
import { OwnerDashboardPage } from './pages/OwnerDashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top upon navigating
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-wok-darkest text-wok-cream antialiased selection:bg-wok-red selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/owner-login" element={<OwnerLoginPage />} />
            <Route path="/owner-dashboard" element={<OwnerDashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </CartProvider>
  );
};

export default App;
