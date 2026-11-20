import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, User, AlertCircle, Key, ArrowRight } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { setOwnerSession, getOwnerSession } from '../utils/storage';

export const OwnerLoginPage = () => {
  const navigate = useNavigate();
  const { ownerAuth } = restaurantData;

  const [username, setUsername] = useState(ownerAuth.demoUsername);
  const [password, setPassword] = useState(ownerAuth.demoPassword);
  const [error, setError] = useState('');

  // If already logged in, redirect to dashboard
  React.useEffect(() => {
    if (getOwnerSession()) {
      navigate('/owner-dashboard');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username.trim() === ownerAuth.demoUsername &&
      password.trim() === ownerAuth.demoPassword
    ) {
      setOwnerSession({
        username: ownerAuth.demoUsername,
        role: ownerAuth.role,
        loggedInAt: new Date().toISOString()
      });
      navigate('/owner-dashboard');
    } else {
      setError('Invalid username or password. Please use the demo credentials below.');
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-6">
        {/* Brand & Title */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-wok-surface border border-wok-gold/40 flex items-center justify-center mx-auto text-wok-gold shadow-glow-gold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white">Owner Portal</h1>
          <p className="text-xs text-wok-muted">
            Management & live order tracking console for Wok Toss
          </p>
        </div>

        {/* Demo Security Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 space-y-2">
          <div className="flex items-center gap-2 font-bold text-white">
            <Key className="w-4 h-4 text-amber-400" />
            <span>Client-Side Demo Authentication</span>
          </div>
          <p className="text-[11px] leading-relaxed text-amber-200/90">
            {ownerAuth.disclaimer} Demo credentials are automatically pre-filled for your convenience:
          </p>
          <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/30 font-mono text-[11px] flex justify-between items-center text-amber-300">
            <span>Username: <strong className="text-white">{ownerAuth.demoUsername}</strong></span>
            <span>Password: <strong className="text-white">{ownerAuth.demoPassword}</strong></span>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="p-8 rounded-3xl bg-wok-surface border border-wok-border shadow-2xl space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 flex items-center gap-2 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-wok-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-wok-darkest border border-wok-border text-white text-sm focus:border-wok-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-wok-sand mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-wok-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-wok-darkest border border-wok-border text-white text-sm focus:border-wok-gold focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-gold w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 mt-2"
          >
            <span>Log In to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center">
          <Link to="/" className="text-xs text-wok-muted hover:text-wok-gold transition-colors">
            ← Return to Restaurant Home
          </Link>
        </div>
      </div>
    </div>
  );
};
