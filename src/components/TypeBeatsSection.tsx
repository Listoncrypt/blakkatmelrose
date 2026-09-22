import React, { useState, useRef } from 'react';
import { Play, Disc3, Volume2 } from 'lucide-react';

import beatMichaelJackson from '../assets/media/typebeats/michael-jackson-type-beat.mp4';
import beatHotelLobby from '../assets/media/typebeats/hotel-lobby-currensy-larry-june-type-beat.mp4';
import beatIGotU from '../assets/media/typebeats/i-got-u-jhene-aiko-kendrick-lamar-type-beat.mp4';
import beatAllGrownUp from '../assets/media/typebeats/all-grown-up-larry-june-dom-kennedy-type-beat.mp4';
import beatLoveStory from '../assets/media/typebeats/love-story-baby-keem-sailorr-type-beat.mp4';
import beatStillMovin from '../assets/media/typebeats/still-movin-larry-june-veeze-type-beat.mp4';
import beatToxic from '../assets/media/typebeats/toxic-az-chike-kendrick-lamar-type-beat.mp4';

interface TypeBeat {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  videoSrc: string;
}

const TYPE_BEATS: TypeBeat[] = [
  {
    id: 'tb-1',
    title: 'Michael Jackson Type Beat',
    subtitle: 'Classic Synth Funk & Nostalgic Groove',
    tag: 'RETRO GROOVE',
    videoSrc: beatMichaelJackson,
  },
  {
    id: 'tb-2',
    title: 'Hotel Lobby',
    subtitle: 'Curren$y x Larry June x The Alchemist Type Beat',
    tag: 'LO-FI / BOOGIE',
    videoSrc: beatHotelLobby,
  },
  {
    id: 'tb-3',
    title: 'I Got U',
    subtitle: 'Jhené Aiko feat. Kendrick Lamar Type Beat',
    tag: 'ATMOSPHERIC R&B',
    videoSrc: beatIGotU,
  },
  {
    id: 'tb-4',
    title: 'All Grown Up',
    subtitle: 'Larry June x Dom Kennedy Type Beat',
    tag: 'WEST COAST CRUISE',
    videoSrc: beatAllGrownUp,
  },
  {
    id: 'tb-5',
    title: 'Love Story',
    subtitle: 'Baby Keem x Sailorr Type Beat',
    tag: 'MELODIC BOUNCE',
    videoSrc: beatLoveStory,
  },
  {
    id: 'tb-6',
    title: "Still Movin'",
    subtitle: 'Larry June x Veeze Type Beat',
    tag: 'MIDNIGHT TRAP',
    videoSrc: beatStillMovin,
  },
  {
    id: 'tb-7',
    title: 'Toxic',
    subtitle: 'AZ Chike x Kendrick Lamar Type Beat (West Coast)',
    tag: 'HIGH ENERGY',
    videoSrc: beatToxic,
  },
];

export const TypeBeatsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const activeBeat = TYPE_BEATS[activeIndex];

  const handleSelectBeat = (index: number) => {
    setActiveIndex(index);
    if (playerContainerRef.current) {
      playerContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="type-beats" className="w-full bg-white px-6 py-24 text-neutral-950 sm:px-10 sm:py-32 lg:px-12 border-t border-neutral-100">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-neutral-400">PRODUCTION ARCHIVE</p>
            <h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">Type Beats</h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-wider text-neutral-500 uppercase">
            <span className="flex items-center gap-1.5">
              <Disc3 className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              {TYPE_BEATS.length} CUTS IN ARCHIVE
            </span>
          </div>
        </div>

        {/* Featured Video Stage */}
        <div ref={playerContainerRef} className="overflow-hidden rounded-sm bg-neutral-950 shadow-2xl border border-neutral-900">
          <div className="relative aspect-video w-full bg-black">
            <video
              ref={videoRef}
              key={activeBeat.id}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
              aria-label={activeBeat.title}
            >
              <source src={activeBeat.videoSrc} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>

          {/* Under-player info bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800/80 bg-neutral-950 px-6 py-5 text-white">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs text-neutral-400">
                  {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1} / {TYPE_BEATS.length < 10 ? `0${TYPE_BEATS.length}` : TYPE_BEATS.length}
                </span>
                <span className="inline-block rounded-full bg-neutral-800 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-neutral-300 uppercase">
                  {activeBeat.tag}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-white">
                {activeBeat.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-0.5">
                {activeBeat.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>STEREO MASTER</span>
            </div>
          </div>
        </div>

        {/* Interactive Tracklist Grid */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              SELECT BEAT TO LOAD
            </span>
            <span className="font-mono text-xs text-neutral-400">
              CLICK TO SWITCH TRACK
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TYPE_BEATS.map((beat, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={beat.id}
                  onClick={() => handleSelectBeat(idx)}
                  className={`group relative flex flex-col justify-between p-5 text-left transition-all cursor-pointer border rounded-sm ${
                    isActive
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-lg'
                      : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 w-full mb-4">
                    <span
                      className={`font-mono text-xs tracking-wider ${
                        isActive ? 'text-neutral-400' : 'text-neutral-400 group-hover:text-neutral-600'
                      }`}
                    >
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase ${
                        isActive ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {beat.tag}
                    </span>
                  </div>

                  <div className="w-full">
                    <h4 className="font-display text-lg font-medium tracking-tight mb-1">
                      {beat.title}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed font-light line-clamp-2 ${
                        isActive ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {beat.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-current/10 flex items-center justify-between w-full text-xs font-mono">
                    <span className="tracking-wider text-[11px] opacity-70">
                      {isActive ? 'CURRENTLY LOADED' : 'LOAD INSTRUMENTAL'}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isActive ? 'bg-white text-neutral-950' : 'bg-neutral-950 text-white'
                      }`}
                    >
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
