import React from 'react';
import travel1 from '../assets/media/travel/travel-1.jpg';
import travel2 from '../assets/media/travel/travel-2.jpg';
import travel3 from '../assets/media/travel/travel-3.jpg';
import travel4 from '../assets/media/travel/travel-4.jpg';
import travelVideo from '../assets/media/travel/travel-video.mp4';

const travelImages = [travel1, travel2, travel3, travel4];

export const TravelSection: React.FC = () => (
  <section id="travel" className="w-full bg-neutral-950 px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 flex items-end justify-between border-b border-white/20 pb-8">
        <div>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-neutral-400">VISUAL DIARY</p>
          <h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">Travel</h2>
        </div>
        <span className="hidden font-mono text-xs tracking-widest text-neutral-500 sm:block">ON THE ROAD</span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {travelImages.map((image, index) => (
          <div key={image} className={`overflow-hidden bg-neutral-800 ${index % 2 ? 'mt-10 md:mt-16' : ''}`}>
            <img src={image} alt={`BlakKat Melrose travel moment ${index + 1}`} className="aspect-[3/4] h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden bg-black">
        <video controls playsInline preload="metadata" className="aspect-video w-full" aria-label="BlakKat Melrose travel video">
          <source src={travelVideo} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    </div>
  </section>
);
