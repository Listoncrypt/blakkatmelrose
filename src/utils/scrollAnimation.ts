import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export const initSmoothScroll = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return {
      lenis: null,
      destroy: () => {},
    };
  }

  if (lenisInstance) {
    lenisInstance.destroy();
  }

  lenisInstance = new Lenis({
    lerp: 0.09,
    smoothWheel: true,
  });

  lenisInstance.on('scroll', ScrollTrigger.update);

  const tickerCallback = (time: number) => {
    if (lenisInstance) {
      lenisInstance.raf(time * 1000);
    }
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis: lenisInstance,
    destroy: () => {
      gsap.ticker.remove(tickerCallback);
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
  };
};

export { gsap, ScrollTrigger };
