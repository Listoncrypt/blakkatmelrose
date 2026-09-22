import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Release, Track } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface MusicPlayerProps {
  isPlaying: boolean;
  activeRelease: Release;
  activeTrack?: Track;
  onTogglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  activeRelease,
  activeTrack,
  onTogglePlay,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      audioEngine.setVolume(0.7);
    } else {
      setIsMuted(true);
      audioEngine.setVolume(0);
    }
  };

  const trackTitle = activeTrack?.title || activeRelease.title;

  if (!isScrolledPastHero && !isPlaying) {
    return null;
  }

  return (
    <div
      id="persistent-player"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-neutral-200 text-neutral-900 select-none backdrop-blur-sm shadow-sm transition-transform duration-300 animate-in slide-in-from-bottom-2"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="min-w-0">
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono mr-2">
              NOW PLAYING:
            </span>
            <span className="text-xs font-medium text-neutral-950 uppercase truncate">
              {trackTitle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            className="p-1 text-neutral-900 hover:text-neutral-500 transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            className="text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer p-1"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
