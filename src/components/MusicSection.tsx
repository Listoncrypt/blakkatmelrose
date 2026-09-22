import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OFFICIAL_RELEASES, ARTIST_INFO } from '../data/artistData';

export const MusicSection: React.FC = () => (
  <section id="music" className="w-full border-t border-neutral-100 bg-white px-6 py-28 text-neutral-950 sm:px-10 sm:py-36 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
        <div><p className="mb-3 font-mono text-xs tracking-[0.2em] text-neutral-400">OFFICIAL CATALOG</p><h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">Music</h2></div>
        <a href={ARTIST_INFO.socialLinks.spotify} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider hover:text-neutral-500">Spotify artist profile <ArrowUpRight className="h-3.5 w-3.5" /></a>
      </div>
      <div className="mt-12 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-950 p-1">
        <iframe title="BlakKat Melrose on Spotify" src="https://open.spotify.com/embed/artist/6dtx54aW8DQrl2Qbfpp8PZ?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="border-0" />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-neutral-500">Spotify controls playback and availability. No site account is required to open the official player.</p>
      <div className="mt-20 grid grid-cols-1 border-t border-neutral-200 md:grid-cols-2 lg:grid-cols-3">
        {OFFICIAL_RELEASES.map((release) => (
          <article key={release.title} className="flex min-h-52 flex-col justify-between border-b border-neutral-200 p-6 sm:p-8">
            <div><div className="mb-8 flex items-center justify-between font-mono text-xs tracking-widest text-neutral-400"><span>{release.type}</span><span>{release.year}</span></div><h3 className="font-display text-3xl font-medium tracking-tight">{release.title}</h3><p className="mt-3 text-sm font-light text-neutral-600">{release.detail}</p></div>
            <a href={release.spotifyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider hover:text-neutral-500">Open in Spotify <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
