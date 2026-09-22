import React from 'react';
import typeBeat from '../assets/media/typebeats/michael-jackson-type-beat.mp4';

export const TypeBeatsSection: React.FC = () => (
  <section id="type-beats" className="w-full bg-white px-6 py-24 text-neutral-950 sm:px-10 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex items-end justify-between border-b border-neutral-200 pb-8">
        <div>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-neutral-400">PRODUCTION ARCHIVE</p>
          <h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">Type Beats</h2>
        </div>
        <span className="hidden font-mono text-xs tracking-widest text-neutral-500 sm:block">WATCH / LISTEN</span>
      </div>
      <div className="overflow-hidden bg-neutral-950 shadow-xl">
        <video controls playsInline preload="metadata" className="aspect-video w-full" aria-label="Michael Jackson type beat">
          <source src={typeBeat} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      <p className="mt-4 font-mono text-xs tracking-wider text-neutral-500">MICHAEL JACKSON TYPE BEAT</p>
    </div>
  </section>
);
