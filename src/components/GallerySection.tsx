import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/artistData';
import { GalleryItem } from '../types';
import { gsap, ScrollTrigger } from '../utils/scrollAnimation';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeItem = GALLERY_ITEMS[currentIndex] || GALLERY_ITEMS[0];

  const sectionRef = useRef<HTMLElement>(null);
  const mainImageContainerRef = useRef<HTMLDivElement>(null);
  const maskTopRef = useRef<HTMLDivElement>(null);
  const maskBottomRef = useRef<HTMLDivElement>(null);
  const maskLeftRef = useRef<HTMLDivElement>(null);
  const maskRightRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (mainImageContainerRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainImageContainerRef.current,
            start: 'top 85%',
            end: 'center 45%',
            scrub: 0.8,
          },
        });

        if (maskTopRef.current) {
          tl.to(maskTopRef.current, { yPercent: -100, ease: 'power1.inOut' }, 0);
        }
        if (maskBottomRef.current) {
          tl.to(maskBottomRef.current, { yPercent: 100, ease: 'power1.inOut' }, 0);
        }
        if (maskLeftRef.current) {
          tl.to(maskLeftRef.current, { xPercent: -100, ease: 'power1.inOut' }, 0.1);
        }
        if (maskRightRef.current) {
          tl.to(maskRightRef.current, { xPercent: 100, ease: 'power1.inOut' }, 0.1);
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [currentIndex]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 bg-white text-neutral-950 px-6 sm:px-10 lg:px-12 border-t border-neutral-100 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-4">
            <h2 className="font-display font-medium text-4xl sm:text-6xl tracking-tight text-neutral-950 leading-none">
              Gallery
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 hidden sm:inline-block" />
          </div>

          <div className="flex items-center gap-6 text-xs tracking-wider font-light text-neutral-600">
            <span className="font-mono text-neutral-500">
              {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} / {GALLERY_ITEMS.length < 10 ? `0${GALLERY_ITEMS.length}` : GALLERY_ITEMS.length}
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous photograph"
                className="hover:text-black transition-colors cursor-pointer py-1"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next photograph"
                className="hover:text-black transition-colors cursor-pointer py-1"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={mainImageContainerRef}
          className="mt-14 relative group bg-neutral-100 overflow-hidden cursor-pointer shadow-sm"
          onClick={() => onOpenLightbox(activeItem, currentIndex)}
        >
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[78vh] flex items-center justify-center overflow-hidden">
            <img
              key={activeItem.id}
              src={activeItem.imageUrl}
              alt={activeItem.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-105"
            />

            <div className="absolute inset-0 pointer-events-none z-10">
              <div
                ref={maskTopRef}
                className="absolute top-0 left-0 right-0 h-1/2 bg-white will-change-transform"
              />
              <div
                ref={maskBottomRef}
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-white will-change-transform"
              />
              <div
                ref={maskLeftRef}
                className="absolute top-0 bottom-0 left-0 w-1/4 bg-white will-change-transform"
              />
              <div
                ref={maskRightRef}
                className="absolute top-0 bottom-0 right-0 w-1/4 bg-white will-change-transform"
              />
            </div>

            <div className="absolute top-6 right-6 z-20 p-2.5 bg-white/90 text-neutral-900 hover:bg-neutral-950 hover:text-white transition-colors shadow-sm">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between bg-white/85 backdrop-blur-sm p-4 text-neutral-900 max-w-md shadow-xs">
              <div>
                <p className="text-sm font-medium">
                  {activeItem.caption}
                </p>
                <span className="text-[11px] tracking-wider text-neutral-500 uppercase font-mono mt-0.5 block">
                  {activeItem.year} {activeItem.location ? `â€” ${activeItem.location}` : ''}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-2">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`View photo ${idx + 1}`}
              className={`aspect-square overflow-hidden transition-opacity cursor-pointer ${
                idx === currentIndex ? 'opacity-100 ring-1 ring-neutral-950' : 'opacity-40 hover:opacity-80'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
