"use client";

import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data/industries";
import React from "react";

export default function IndustriesClient() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-background to-background z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal as="h1" intensity="subtle" className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Industries We <span className="text-brand-accent">Serve</span>
          </Reveal>
          <Reveal as="p" intensity="subtle" delay={0.1} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            From boutique apparel to massive supermarket chains, our ecosystem adapts to your specific retail vertical seamlessly.
          </Reveal>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
            {industries.map((ind, i) => {
              // Bento layout logic for 6 items
              const bentoClasses = [
                "md:col-span-2 md:row-span-1", // 0: Wide
                "md:col-span-1 md:row-span-2", // 1: Tall
                "md:col-span-1 md:row-span-1", // 2: Standard
                "md:col-span-1 md:row-span-1", // 3: Standard
                "md:col-span-2 md:row-span-1", // 4: Wide
                "md:col-span-1 md:row-span-1", // 5: Standard
              ];
              
              const className = bentoClasses[i % bentoClasses.length];

              return (
                <Reveal 
                  as="div" 
                  intensity="subtle" 
                  key={i} 
                  className={`glass-border rounded-2xl p-8 hover:bg-white/5 hover:border-brand-accent/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${className}`}
                >
                  {/* Dynamic border glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-full blur-2xl -z-10 group-hover:bg-brand-accent/20 transition-colors duration-500"></div>
                  
                  <div>
                    <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300 inline-block bg-surface-2 p-3 rounded-xl border border-white/5">
                      {React.cloneElement(ind.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{ind.title}</h2>
                    <p className="text-foreground/70">{ind.desc}</p>
                  </div>
                  
                  <div className="pt-6 mt-auto">
                    <Link href="/solutions" className="inline-flex items-center text-sm text-brand-accent font-semibold group-hover:text-brand-accent/80 transition-colors">
                      Explore Solution <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
