import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  currentIndex,
  totalCount,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      id="lightbox-overlay"
      className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-6 sm:p-10 select-none animate-in fade-in duration-200"
    >
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-neutral-400">
        <span className="font-mono text-neutral-300">
          {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} / {totalCount < 10 ? `0${totalCount}` : totalCount}
        </span>

        <button
          onClick={onClose}
          aria-label="Close"
          className="text-neutral-400 hover:text-white transition-colors cursor-pointer py-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 z-10 p-3 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <img
          key={item.id}
          src={item.imageUrl}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[82vh] object-contain filter grayscale contrast-105"
        />

        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 z-10 p-3 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-baseline justify-between text-xs text-neutral-400 font-light">
        <span>{item.caption}</span>
        <span className="font-mono text-[11px] text-neutral-500">{item.year}</span>
      </div>
    </div>
  );
};
