import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NEWS_UPDATES } from '../data/artistData';

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="relative w-full py-24 sm:py-32 bg-white text-neutral-950 px-6 sm:px-10 lg:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-medium text-4xl sm:text-6xl tracking-tight text-neutral-950 leading-none pb-8 border-b border-neutral-200 mb-10">
          News
        </h2>

        <div className="divide-y divide-neutral-100">
          {NEWS_UPDATES.map((item) => (
            <article
              key={item.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <div className="md:col-span-3 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {item.date}
              </div>

              <div className="md:col-span-7 space-y-2">
                <h3 className="font-display font-medium text-xl tracking-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="md:col-span-2 flex md:justify-end pt-2 md:pt-0">
                {item.linkText && (
                  <a
                    href={item.linkUrl || '#'}
                    className="inline-flex items-center gap-1 text-xs tracking-wider uppercase text-neutral-900 hover:text-neutral-500 transition-colors font-medium"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
