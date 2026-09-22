import React, { useEffect, useRef } from 'react';
import heroPortrait from '../assets/images/hero-blakkat.jpg';
import gallery02 from '../assets/images/gallery/gallery-02.jpg';
import gallery05 from '../assets/images/gallery/gallery-05.jpg';
import gallery07 from '../assets/images/gallery/gallery-07.jpg';
import { gsap, ScrollTrigger } from '../utils/scrollAnimation';

export const HorizontalStripSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: heroPortrait,
      title: 'Artist Portrait',
      location: 'BlakKat Melrose',
      year: '2026',
    },
    {
      src: gallery02,
      title: 'Editorial Session',
      location: 'BlakKat Archive',
      year: '2026',
    },
    {
      src: gallery05,
      title: 'Behind The Scenes',
      location: 'BlakKat Archive',
      year: '2026',
    },
    {
      src: gallery07,
      title: 'Visual Archive',
      location: 'BlakKat Archive',
      year: '2026',
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 120);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-neutral-950 text-white overflow-hidden select-none"
    >
      <div className="absolute inset-0 flex flex-col justify-between py-12 sm:py-16 px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest text-neutral-400 uppercase font-mono">
              PHOTO ARCHIVE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-xs tracking-wider text-neutral-500 uppercase font-light">
              35MM & MEDIUM FORMAT
            </span>
          </div>
          <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
            VERTICAL SCROLL CONTROLS TIMELINE
          </span>
        </div>

        <div className="my-auto overflow-visible">
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-14 w-max will-change-transform pl-2 pr-24"
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                className="group relative w-[75vw] sm:w-[50vw] md:w-[38vw] lg:w-[30vw] shrink-0"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 shadow-2xl">
                  <img
                    src={item.src}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 group-hover:scale-102 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xs p-3 text-white text-xs flex items-center justify-between">
                    <div>
                      <div className="font-medium tracking-tight uppercase">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                        {item.location}
                      </div>
                    </div>
                    <span className="font-mono text-neutral-400 text-[10px]">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 font-mono uppercase">
          <span>BLAKKAT MELROSE LOGBOOK</span>
          <span>CHRONOLOGICAL FRAMEWORK</span>
        </div>
      </div>
    </section>
  );
};
