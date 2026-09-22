import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MusicSection } from './components/MusicSection';
import { TravelSection } from './components/TravelSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { HorizontalStripSection } from './components/HorizontalStripSection';
import { TypeBeatsSection } from './components/TypeBeatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

import { GALLERY_ITEMS } from './data/artistData';
import { GalleryItem } from './types';
import { initSmoothScroll } from './utils/scrollAnimation';

export default function App() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    item: GalleryItem;
    index: number;
  } | null>(null);

  useEffect(() => {
    const { destroy } = initSmoothScroll();
    return () => {
      destroy();
    };
  }, []);

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setLightboxState({
      isOpen: true,
      item,
      index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(null);
  };

  const handleLightboxPrev = () => {
    if (!lightboxState) return;
    const newIdx =
      lightboxState.index > 0
        ? lightboxState.index - 1
        : GALLERY_ITEMS.length - 1;
    setLightboxState({
      isOpen: true,
      item: GALLERY_ITEMS[newIdx],
      index: newIdx,
    });
  };

  const handleLightboxNext = () => {
    if (!lightboxState) return;
    const newIdx =
      lightboxState.index < GALLERY_ITEMS.length - 1
        ? lightboxState.index + 1
        : 0;
    setLightboxState({
      isOpen: true,
      item: GALLERY_ITEMS[newIdx],
      index: newIdx,
    });
  };

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 selection:bg-neutral-950 selection:text-white">
      <Navigation />

      <main id="main-content" className="relative z-10">
        <Hero />

        <MusicSection />

        <TravelSection />

        <GallerySection onOpenLightbox={handleOpenLightbox} />

        <TypeBeatsSection />

        <AboutSection />

        <HorizontalStripSection />

        <ContactSection />
      </main>

      <Footer />

      {lightboxState && lightboxState.isOpen && (
        <LightboxModal
          item={lightboxState.item}
          currentIndex={lightboxState.index}
          totalCount={GALLERY_ITEMS.length}
          onClose={handleCloseLightbox}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}

    </div>
  );
}
