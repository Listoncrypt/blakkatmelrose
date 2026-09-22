import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CONTACT_CHANNELS, ARTIST_INFO } from '../data/artistData';
import { gsap, ScrollTrigger } from '../utils/scrollAnimation';

export const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          {
            y: 80,
            opacity: 0.85,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 40 },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'top 50%',
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
      id="contact"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 bg-neutral-950 text-white px-6 sm:px-10 lg:px-12 select-none overflow-hidden"
    >
      <div
        ref={panelRef}
        className="max-w-7xl mx-auto will-change-transform"
      >
        <div className="flex items-center gap-4 pb-8 border-b border-neutral-800 mb-16">
          <h2
            ref={titleRef}
            className="font-display font-medium text-4xl sm:text-6xl tracking-tight text-white leading-none will-change-transform"
          >
            Contact & Dispatches
          </h2>
          <span className="w-2.5 h-2.5 rounded-full bg-[#c24624]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="text-xs tracking-widest text-neutral-500 uppercase font-mono block mb-2">
                OFFICIAL CHANNELS
              </span>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                Direct booking, press requests, and licensing inquiries for BlakKat Melrose are managed through verified agency representatives.
              </p>
            </div>

            <div className="divide-y divide-neutral-800/80">
              {CONTACT_CHANNELS.map((channel) => (
                <div
                  key={channel.department}
                  className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                >
                  <span className="text-xs tracking-wider uppercase font-medium text-neutral-400">
                    {channel.department}
                  </span>
                  <a
                    href={`mailto:${channel.email}`}
                    className="text-sm font-light text-neutral-200 hover:text-white transition-colors"
                  >
                    {channel.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-wider uppercase text-neutral-400 font-light">
              <a
                href={ARTIST_INFO.socialLinks.appleMusic}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Apple Music
              </a>
              <a
                href={ARTIST_INFO.socialLinks.spotify}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Spotify
              </a>
              <a
                href={ARTIST_INFO.socialLinks.soundcloud}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                SoundCloud
              </a>
              <a
                href={ARTIST_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs tracking-widest text-neutral-500 uppercase font-mono block mb-2">
                NEWSLETTER DISPATCH
              </span>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                Receive private tour announcements, analog vinyl releases, and unreleased studio material directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="relative flex items-center border-b border-neutral-700 focus-within:border-white transition-colors pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="w-full bg-transparent text-white placeholder-neutral-500 text-sm sm:text-base font-light focus:outline-hidden"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="shrink-0 text-white hover:text-neutral-300 transition-colors cursor-pointer pl-4"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {isSubmitted && (
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono tracking-wider animate-in fade-in">
                  <Check className="w-3.5 h-3.5 text-[#c24624]" />
                  <span>ADDRESS CONFIRMED â€” YOU WILL RECEIVE PRIVATE DISPATCHES.</span>
                </div>
              )}

              <span className="text-[11px] text-neutral-500 font-mono block">
                NO SPAM. UNSUBSCRIBE ANY TIME.
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
