import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({ isOpen, currentIndex, items, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white">
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">{current.title || 'Wok Toss Gallery'}</h3>
            <span className="text-xs text-wok-muted">{current.category} • {currentIndex + 1} of {items.length}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-wok-surface hover:bg-wok-card text-white border border-wok-border transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-wok-border/80 bg-wok-darkest">
          <img
            src={current.image}
            alt={current.altText || current.title}
            className="max-h-[75vh] w-auto max-w-full object-contain select-none"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        {current.altText && (
          <p className="mt-3 text-sm text-center text-wok-sand/80 max-w-xl">
            {current.altText}
          </p>
        )}
      </div>
    </div>
  );
};
