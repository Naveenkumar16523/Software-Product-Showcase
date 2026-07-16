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

      {/* Grid Section */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <Reveal as="div" intensity="subtle" key={i} className="glass-border rounded-xl p-8 hover:bg-white/5 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
                <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {React.cloneElement(ind.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{ind.title}</h2>
                <p className="text-foreground/70 mb-8">{ind.desc}</p>
                <Link href="/solutions" className="inline-flex items-center text-brand-accent font-semibold group-hover:text-brand-accent/80 transition-colors">
                  Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
