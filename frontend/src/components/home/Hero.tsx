"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { Scanline } from "@/components/effects/Scanline";
// Removed MagneticCursor import

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
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center rounded-full glass-border px-3 py-1 text-sm font-semibold text-brand-accent tracking-wide"
            >
              Enterprise Grade Software
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground leading-[1.1]">
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  className={word === "Intelligent" || word === "Solutions" ? "gradient-text inline-block mr-3" : "inline-block mr-3"}
                  initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            >
              Simplify retail operations, optimize inventory management, automate billing, and accelerate business growth with our AI-powered SaaS platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
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
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
};
