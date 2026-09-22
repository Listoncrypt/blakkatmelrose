import React, { useEffect, useRef } from 'react';
import artistPortrait from '../assets/images/hero-blakkat.jpg';
import { ARTIST_INFO } from '../data/artistData';
import { gsap, ScrollTrigger } from '../utils/scrollAnimation';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const artistNameRef = useRef<HTMLHeadingElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLSpanElement>(null);

  const introSectionRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const word3Ref = useRef<HTMLDivElement>(null);
  const word4Ref = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  const statementTextRef = useRef<HTMLParagraphElement>(null);


  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      if (heroImageRef.current) {
        gsap.set(heroImageRef.current, {
          scale: 3.5,
          zIndex: 50,
        });

        gsap.to(heroImageRef.current, {
          scale: 1,
          zIndex: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=40%',
            scrub: 0.6,
          },
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=160%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.to(
        artistNameRef.current,
        {
          yPercent: -90,
          scale: 0.92,
          opacity: 0.1,
          ease: 'power1.inOut',
        },
        0
      );

      tl.to(
        bottomBarRef.current,
        {
          y: 40,
          opacity: 0,
          ease: 'power1.out',
        },
        0
      );

      tl.fromTo(
        introSectionRef.current,
        {
          yPercent: 80,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'power1.out',
        },
        0.2
      );

      tl.fromTo(
        word1Ref.current,
        { y: 160, x: -20 },
        { y: 0, x: 0, ease: 'none' },
        0.25
      );

      tl.fromTo(
        word2Ref.current,
        { y: 220, x: 30 },
        { y: 0, x: 0, ease: 'none' },
        0.3
      );

      tl.fromTo(
        word3Ref.current,
        { y: 180, x: -15 },
        { y: 0, x: 0, ease: 'none' },
        0.35
      );

      tl.fromTo(
        word4Ref.current,
        { y: 240, x: 20 },
        { y: 0, x: 0, ease: 'none' },
        0.4
      );

      tl.fromTo(
        circle1Ref.current,
        { y: 140, scale: 0.7, opacity: 0.2 },
        { y: -30, scale: 1.1, opacity: 0.9, ease: 'none' },
        0.2
      );

      tl.fromTo(
        circle2Ref.current,
        { y: 200, scale: 0.8, opacity: 0.1 },
        { y: -50, scale: 1, opacity: 0.8, ease: 'none' },
        0.28
      );

      tl.fromTo(
        circle3Ref.current,
        { y: 180, scale: 0.6, opacity: 0.15 },
        { y: -20, scale: 1.2, opacity: 0.85, ease: 'none' },
        0.36
      );

      tl.fromTo(
        statementTextRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.65
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-white text-neutral-950 overflow-hidden">
      <div
        ref={heroContentRef}
        className="absolute inset-0 w-full h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 select-none z-10"
      >
        <div className="pt-24 sm:pt-28" />

        <div className="max-w-7xl w-full mx-auto my-auto flex items-center justify-center text-center py-4">
          <h1
            ref={artistNameRef}
            className="font-display font-bold text-[10vw] sm:text-[8.5vw] lg:text-[7.5vw] tracking-tighter leading-none uppercase text-neutral-950 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 lg:gap-x-6 gap-y-2 will-change-transform"
          >
            <span>BLAKKAT</span>

            <span className="inline-flex items-center justify-center align-middle mx-1 sm:mx-2">
              <span
                ref={heroImageRef}
                className="relative w-[0.85em] h-[0.85em] overflow-hidden bg-neutral-100 shrink-0 inline-block shadow-sm will-change-transform"
              >
                <img
                  src={artistPortrait}
                  alt="BlakKat Melrose portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 transition-transform duration-500 hover:scale-105"
                />
              </span>
            </span>

            <span>MELROSE</span>
          </h1>
        </div>

        <div
          ref={bottomBarRef}
          className="w-full max-w-7xl mx-auto pb-8 sm:pb-12 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end text-neutral-900 border-t border-transparent will-change-transform"
        >
          <div className="md:col-span-4 flex items-center gap-3">
            <button
              aria-label="Official music catalog"
              className="flex items-center gap-2 cursor-pointer py-1 group"
            >
              <div className="flex items-end gap-0.5 h-3 w-3">
                <span
                  className={`w-0.5 bg-neutral-900 transition-all ${
                    'h-1.5'
                  }`}
                />
                <span
                  className={`w-0.5 bg-neutral-900 transition-all ${
                    'h-2.5'
                  }`}
                />
                <span
                  className={`w-0.5 bg-neutral-900 transition-all ${
                    'h-1'
                  }`}
                />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-neutral-400 uppercase tracking-widest font-mono leading-none mb-1">
                  OFFICIAL ARTIST
                </span>
                <span className="block text-xs font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors leading-tight">
                  BlakKat Melrose
                </span>
              </div>
            </button>
          </div>

          <div className="md:col-span-4 text-center">
            <p className="text-[11px] sm:text-xs text-neutral-600 font-light leading-relaxed max-w-xs mx-auto">
              Explore official releases, visual work, travel moments, and type beats.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button
              className="text-xs tracking-wider uppercase font-medium text-neutral-900 hover:opacity-60 transition-opacity cursor-pointer py-1"
            >
              Official catalog
            </button>
          </div>
        </div>
      </div>

      <div
        ref={introSectionRef}
        className="absolute inset-0 w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-12 z-20 pointer-events-auto select-none"
      >
        <div className="max-w-6xl w-full mx-auto relative py-8">
          <div
            ref={circle1Ref}
            aria-hidden="true"
            className="absolute -top-6 left-1/4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-neutral-950 will-change-transform pointer-events-none"
          />
          <div
            ref={circle2Ref}
            aria-hidden="true"
            className="absolute top-1/2 right-12 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-neutral-800 will-change-transform pointer-events-none"
          />
          <div
            ref={circle3Ref}
            aria-hidden="true"
            className="absolute -bottom-10 left-16 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-neutral-900 will-change-transform pointer-events-none"
          />

          <div className="space-y-1 sm:space-y-2 mb-12">
            <div className="flex items-center gap-4 sm:gap-6">
              <div
                ref={word1Ref}
                className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase text-neutral-950 will-change-transform"
              >
                TRY
              </div>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-neutral-950 inline-block" />
              <div
                ref={word2Ref}
                className="font-display font-light text-3xl sm:text-5xl md:text-7xl tracking-tight uppercase text-neutral-500 will-change-transform"
              >
                AGAIN
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 pl-4 sm:pl-12">
              <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-neutral-900 inline-block" />
              <div
                ref={word3Ref}
                className="font-display font-light text-3xl sm:text-5xl md:text-7xl tracking-tight uppercase text-neutral-600 will-change-transform"
              >
                NEW
              </div>
              <div
                ref={word4Ref}
                className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase text-neutral-950 will-change-transform"
              >
                RELEASE
              </div>
            </div>
          </div>

          <div className="max-w-3xl pt-4 border-t border-neutral-200/80">
            <p
              ref={statementTextRef}
              className="font-display font-light text-xl sm:text-2xl md:text-3xl leading-snug text-neutral-900 tracking-tight will-change-transform"
            >
              "{ARTIST_INFO.statement}"
            </p>
            <div className="mt-6 flex items-center justify-between text-xs tracking-widest text-neutral-400 uppercase font-mono">
              <span>SONIC DIALOGUE</span>
              <span className="text-neutral-700">
                {ARTIST_INFO.roles.join('  /  ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
