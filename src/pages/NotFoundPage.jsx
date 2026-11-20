import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-wok-surface border border-wok-red/40 flex items-center justify-center mx-auto text-wok-red shadow-glow-red">
          <Flame className="w-10 h-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-wok-gold">
            404 – Page Not Found
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Lost in the Wok?
          </h1>
          <p className="text-sm text-wok-sand/80 leading-relaxed">
            The page you are looking for has been tossed away or doesn't exist. Let's get you back to delicious Pan-Asian dishes.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Wok Toss Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
