import React, { useEffect, useRef } from 'react';
import { ARTIST_INFO } from '../data/artistData';
import aboutPortrait from '../assets/images/hero-blakkat.jpg';
import { gsap, ScrollTrigger } from '../utils/scrollAnimation';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const giantTypeRef = useRef<HTMLDivElement>(null);
  const portraitContainerRef = useRef<HTMLDivElement>(null);
  const portraitImageRef = useRef<HTMLImageElement>(null);
  const circleGraphic1Ref = useRef<HTMLDivElement>(null);
  const circleGraphic2Ref = useRef<HTMLDivElement>(null);
  const circleGraphic3Ref = useRef<HTMLDivElement>(null);
  const biographyColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (giantTypeRef.current) {
        gsap.fromTo(
          giantTypeRef.current,
          { xPercent: 8 },
          {
            xPercent: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );
      }

      if (circleGraphic1Ref.current) {
        gsap.fromTo(
          circleGraphic1Ref.current,
          { y: 90, scale: 0.85 },
          {
            y: -80,
            scale: 1.1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 0.8,
            },
          }
        );
      }

      if (circleGraphic2Ref.current) {
        gsap.fromTo(
          circleGraphic2Ref.current,
          { y: 120, scale: 1 },
          {
            y: -100,
            scale: 0.9,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 0.8,
            },
          }
        );
      }

      if (circleGraphic3Ref.current) {
        gsap.fromTo(
          circleGraphic3Ref.current,
          { y: 60 },
          {
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 0.8,
            },
          }
        );
      }

      if (portraitImageRef.current && portraitContainerRef.current) {
        gsap.fromTo(
          portraitImageRef.current,
          { yPercent: -8, scale: 1.05 },
          {
            yPercent: 8,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: portraitContainerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );
      }

      if (biographyColumnRef.current) {
        gsap.fromTo(
          biographyColumnRef.current,
          { y: 40, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: biographyColumnRef.current,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-40 bg-white text-neutral-950 px-6 sm:px-10 lg:px-12 border-t border-neutral-100 overflow-hidden select-none"
    >
      <div
        ref={giantTypeRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-12 -left-20 whitespace-nowrap text-[16vw] font-display font-bold uppercase tracking-tighter text-neutral-100/90 leading-none z-0 will-change-transform"
      >
        BLAKKAT MELROSE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 pb-8 border-b border-neutral-200 mb-16">
          <h2 className="font-display font-medium text-4xl sm:text-6xl tracking-tight text-neutral-950 leading-none">
            About
          </h2>
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 hidden sm:inline-block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          <div className="lg:col-span-5 relative">
            <div
              ref={circleGraphic1Ref}
              aria-hidden="true"
              className="absolute -top-12 -left-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-neutral-950 z-20 pointer-events-none will-change-transform"
            />

            <div
              ref={circleGraphic2Ref}
              aria-hidden="true"
              className="absolute -bottom-8 -right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-950 z-20 pointer-events-none will-change-transform"
            />

            <div
              ref={circleGraphic3Ref}
              aria-hidden="true"
              className="absolute top-1/2 -right-8 w-12 h-12 rounded-full border border-neutral-400 z-20 pointer-events-none will-change-transform"
            />

            <div
              ref={portraitContainerRef}
              className="aspect-[3/4] w-full overflow-hidden bg-neutral-100 shadow-sm relative z-10"
            >
              <img
                ref={portraitImageRef}
                src={aboutPortrait}
                alt="BlakKat Melrose portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-110 will-change-transform"
              />
            </div>
          </div>

          <div
            ref={biographyColumnRef}
            className="lg:col-span-7 space-y-8 max-w-2xl relative z-10 will-change-transform"
          >
            <div className="space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
              {ARTIST_INFO.biography.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-neutral-200 text-xs tracking-wider text-neutral-400 uppercase font-mono flex items-center justify-between">
              <span>ROLES</span>
              <span className="text-neutral-800">
                {ARTIST_INFO.roles.join('  /  ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
