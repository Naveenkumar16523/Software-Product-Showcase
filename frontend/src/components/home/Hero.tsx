"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Scanline } from "@/components/effects/Scanline";

const Aurora = dynamic(() => import("@/components/effects/Aurora"), { ssr: false });

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax the Aurora background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

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
    <>
      {/* Cursor removed */}
      <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
        <Scanline />
        {/* Aurora WebGL Background with Parallax */}
        <motion.div 
          style={{ y: reduce ? 0 : y }}
          className="absolute inset-0 opacity-60 z-0 pointer-events-none"
        >
          <Aurora colorStops={["#a3e635", "#4d7c0f", "#0a0a0a"]} blend={0.5} amplitude={1.2} speed={0.6} />
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            
            <div className="blur-in inline-flex items-center rounded-full glass-border px-3 py-1 text-xs text-muted uppercase tracking-[0.3em]">
              Enterprise Grade Software
            </div>
            
            <h1 className="name-reveal text-5xl sm:text-6xl lg:text-7xl font-display italic font-bold tracking-tight text-text-primary leading-[1.1]">
              {headline.map((word, i) => (
                <span
                  key={i}
                  className={word === "Intelligent" || word === "Solutions" ? "gradient-text inline-block mr-3" : "inline-block mr-3"}
                >
                  {word}
                </span>
              ))}
            </h1>
            
            <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto leading-relaxed">
              Simplify retail operations, optimize inventory management, automate billing, and accelerate business growth with our AI-powered SaaS platform.
            </p>
            
            <div className="blur-in flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/products" className="inline-flex h-12 items-center justify-center rounded-full bg-brand-accent px-7 py-3.5 text-sm font-bold text-black transition-all hover:bg-brand-accent/90 shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] hover:scale-105">
                  <Box className="mr-2 h-4 w-4" />
                  Explore Products
                </Link>
              
                <Link href="/request-demo" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-brand-accent/50 bg-transparent text-foreground px-7 py-3.5 text-sm font-bold transition-all hover:bg-brand-accent/10 hover:border-brand-accent hover:scale-105">
                  Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
            
          </div>
        </div>


      </section>
    </>
  );
};
