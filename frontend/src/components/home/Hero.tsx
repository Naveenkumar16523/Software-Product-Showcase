"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import { Lightning } from "@/components/effects/Lightning";
import MagneticButton from "@/components/ui/MagneticButton";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Skitbit-style Lightning WebGL Background */}
      <Lightning intensity={1.5} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          <div className="inline-flex items-center rounded-full glass-border px-3 py-1 text-sm font-semibold text-brand-accent tracking-wide">
            Enterprise Grade Software
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground leading-[1.1]">
            Empower Your Retail Business with <span className="gradient-text">Intelligent Solutions</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Simplify retail operations, optimize inventory management, automate billing, and accelerate business growth with our AI-powered SaaS platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <MagneticButton>
              <Link href="/products" className="inline-flex h-14 items-center justify-center rounded-lg bg-brand-accent px-8 font-bold text-black transition-colors hover:bg-brand-accent/90 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]">
                <Box className="mr-2 h-5 w-5" />
                Explore Products
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <Link href="/request-demo" className="inline-flex h-14 items-center justify-center rounded-lg glass-border px-8 font-bold text-foreground transition-colors hover:bg-white/10">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MagneticButton>
          </div>
          
        </div>
      </div>
    </section>
  );
};
