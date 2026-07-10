"use client";

import React from "react";

const defaultLogos = [
  "Acme Corp", "TechNova", "Globex", "Initech", "Umbrella", 
  "Stark Ind", "Wayne Ent", "Cyberdyne", "Massive Dynamic", "Hooli"
];

export const LogoMarquee = () => {
  return (
    <section className="py-12 border-b border-white/5 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-0">
        <p className="text-center text-sm font-semibold tracking-wider text-foreground/50 uppercase mb-8">
          Trusted by Innovative Teams
        </p>
        
        {/* Row 1 - scrolling left */}
        <div className="flex whitespace-nowrap mb-6 w-max animate-scroll-left hover:[animation-play-state:paused]">
          {[...defaultLogos, ...defaultLogos].map((logo, i) => (
            <div key={i} className="mx-8 md:mx-12 shrink-0 glass-border px-6 py-3 rounded-lg flex items-center justify-center min-w-[160px]">
              <span className="text-xl font-display font-bold text-foreground/40 hover:text-brand-accent transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - scrolling right */}
        <div className="flex whitespace-nowrap w-max animate-scroll-right hover:[animation-play-state:paused]">
          {[...[...defaultLogos].reverse(), ...[...defaultLogos].reverse()].map((logo, i) => (
            <div key={i} className="mx-8 md:mx-12 shrink-0 glass-border px-6 py-3 rounded-lg flex items-center justify-center min-w-[160px]">
              <span className="text-xl font-display font-bold text-foreground/40 hover:text-brand-accent transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
