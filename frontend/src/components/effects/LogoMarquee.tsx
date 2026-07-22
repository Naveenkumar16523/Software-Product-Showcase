"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const defaultLogos = [
  "Acme Corp", "TechNova", "Globex", "Initech", "Umbrella", 
  "Stark Ind", "Wayne Ent", "Cyberdyne", "Massive Dynamic", "Hooli"
];

export const LogoMarquee = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (row1Ref.current) {
      gsap.to(row1Ref.current, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1
      });
    }
    
    if (row2Ref.current) {
      gsap.fromTo(row2Ref.current, 
        { xPercent: -50 },
        { xPercent: 0, duration: 30, ease: "none", repeat: -1 }
      );
    }
  }, []);

  const handleMouseEnter = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) gsap.getTweensOf(ref.current).forEach(t => t.pause());
  };
  
  const handleMouseLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) gsap.getTweensOf(ref.current).forEach(t => t.play());
  };

  return (
    <section className="py-12 border-b border-white/5 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-0">
        <p className="text-center text-sm font-semibold tracking-wider text-foreground/50 uppercase mb-8">
          Trusted by Innovative Teams
        </p>
        
        {/* Row 1 - scrolling left */}
        <div 
          className="flex whitespace-nowrap mb-6 w-max"
          onMouseEnter={() => handleMouseEnter(row1Ref)}
          onMouseLeave={() => handleMouseLeave(row1Ref)}
        >
          <div ref={row1Ref} className="flex">
            {[...defaultLogos, ...defaultLogos].map((logo, i) => (
              <div key={i} className="mx-8 md:mx-12 shrink-0 glass-border px-6 py-3 rounded-lg flex items-center justify-center min-w-[160px]">
                <span className="text-xl font-display font-bold text-foreground/50 hover:text-brand-accent transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolling right */}
        <div 
          className="flex whitespace-nowrap w-max"
          onMouseEnter={() => handleMouseEnter(row2Ref)}
          onMouseLeave={() => handleMouseLeave(row2Ref)}
        >
          <div ref={row2Ref} className="flex">
            {[...[...defaultLogos].reverse(), ...[...defaultLogos].reverse()].map((logo, i) => (
              <div key={i} className="mx-8 md:mx-12 shrink-0 glass-border px-6 py-3 rounded-lg flex items-center justify-center min-w-[160px]">
                <span className="text-xl font-display font-bold text-foreground/50 hover:text-brand-accent transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
