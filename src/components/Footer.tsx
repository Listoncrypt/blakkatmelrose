import React from 'react';
import { ARTIST_INFO } from '../data/artistData';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Music', href: '#music' },
    { label: 'Travel', href: '#travel' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Type Beats', href: '#type-beats' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-white text-neutral-900 px-6 sm:px-10 lg:px-12 py-16 sm:py-24 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
          <span className="font-display font-medium text-xl uppercase tracking-widest text-neutral-950">
            BLAKKAT MELROSE
          </span>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wider uppercase font-light text-neutral-500">
            <a
              href={ARTIST_INFO.socialLinks.appleMusic}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              Apple Music
            </a>
            <a
              href={ARTIST_INFO.socialLinks.spotify}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              Spotify
            </a>
            <a
              href={ARTIST_INFO.socialLinks.soundcloud}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              SoundCloud
            </a>
            <a
              href={ARTIST_INFO.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-wider uppercase font-light text-neutral-400">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pt-8 text-[11px] tracking-wider uppercase text-neutral-400 font-mono">
          Â© {new Date().getFullYear()} BLAKKAT MELROSE
        </div>
      </div>
    </footer>
  );
};
