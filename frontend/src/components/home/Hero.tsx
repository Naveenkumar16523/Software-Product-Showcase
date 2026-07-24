"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BackgroundVideo } from "@/components/effects/BackgroundVideo";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(() => {
    if (reduce) return;
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(".name-reveal", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    )
    .fromTo(".blur-in",
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      0.3 // start at 0.3s absolute time
    );
  }, { scope: containerRef, dependencies: [reduce] });

  const headline = "Empower Your Retail Business with Intelligent Solutions".split(" ");

  return (
    <div ref={containerRef} className="relative bg-black h-[100vh] min-h-[600px] w-full flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
      <BackgroundVideo src="https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8" />
      
      <section className="relative flex-1 flex flex-col items-center justify-center px-6 z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          <div className="blur-in inline-flex items-center rounded-full glass-border px-4 py-1.5 text-xs text-white uppercase tracking-[0.3em] shadow-sm backdrop-blur-md bg-white/5 border-white/10">
            Enterprise Grade Software
          </div>
          
          <h1 className="name-reveal text-5xl sm:text-6xl lg:text-7xl font-display italic font-bold tracking-tight text-white leading-[1.1]">
            {headline.map((word, i) => (
              <span
                key={i}
                className={word === "Intelligent" || word === "Solutions" ? "gradient-text inline-block mr-3" : "inline-block mr-3"}
              >
                {word}
              </span>
            ))}
          </h1>
          
          <p className="blur-in text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Simplify retail operations, optimize inventory management, automate billing, and accelerate business growth with our AI-powered SaaS platform.
          </p>
          
          <div className="blur-in flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/products" className="inline-flex h-14 items-center justify-center rounded-full bg-brand-accent px-8 py-3.5 text-base font-bold text-black transition-all hover:bg-brand-accent/90 shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] hover:scale-105">
                <Box className="mr-2 h-5 w-5" />
                Explore Products
              </Link>
            
              <Link href="/request-demo" className="inline-flex h-14 items-center justify-center rounded-full border border-brand-accent/50 bg-black/40 backdrop-blur-md text-white px-8 py-3.5 text-base font-bold transition-all hover:bg-brand-accent/10 hover:border-brand-accent hover:scale-105">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};
