import React from 'react';
import { ARTIST_INFO } from '../data/artistData';

export const ArtistStatement: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative w-full py-28 sm:py-36 md:py-44 bg-white text-neutral-950 px-6 sm:px-10 lg:px-12 border-t border-neutral-100"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-display font-light text-2xl sm:text-4xl md:text-5xl leading-[1.3] text-neutral-900 tracking-tight">
          "{ARTIST_INFO.statement}"
        </p>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 text-xs tracking-widest text-neutral-400 uppercase font-mono">
          <span>CREATIVE FOCUS</span>
          <span className="text-neutral-700">
            {ARTIST_INFO.roles.join('  /  ')}
          </span>
        </div>
      </div>
    </section>
  );
};
