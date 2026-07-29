"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Box, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    video: "/CRM_web_app_.mp4",
    title: "Retail Store",
    thumb: "/crm-preview-v2.png",
  },
  {
    id: 2,
    video: "/RC_car_website.mp4",
    title: "Logistics",
    thumb: "/marque-preview.png",
  },
  {
    id: 3,
    video: "/Luxury_spa_website.mp4",
    title: "POS System",
    thumb: "/salon-preview.jpg",
  }
];

const SLIDE_DURATION = 10000; // 10 seconds

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const reqRef = useRef<number>(0);
  const isTransitioning = useRef(false);

  const nextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => { isTransitioning.current = false; }, 1000);
  };

  const prevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => { isTransitioning.current = false; }, 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning.current || activeSlide === index) return;
    isTransitioning.current = true;
    setActiveSlide(index);
    setTimeout(() => { isTransitioning.current = false; }, 1000);
  };

  useEffect(() => {
    setProgress(0);
    progressRef.current = 0;
    
    const startProgress = (time: number) => {
      if (lastTimeRef.current !== 0) {
        const delta = time - lastTimeRef.current;
        progressRef.current += (delta / SLIDE_DURATION) * 100;
        
        if (progressRef.current >= 100) {
          progressRef.current = 0;
          nextSlide();
        } else {
          setProgress(progressRef.current);
        }
      }
      lastTimeRef.current = time;
      reqRef.current = requestAnimationFrame(startProgress);
    };

    reqRef.current = requestAnimationFrame((time) => {
      lastTimeRef.current = time;
      startProgress(time);
    });

    return () => {
      cancelAnimationFrame(reqRef.current);
      lastTimeRef.current = 0;
    };
  }, [activeSlide]);

  return (
    <div className="relative h-[100vh] w-full flex flex-col overflow-hidden bg-black selection:bg-brand-accent selection:text-black">
      {/* Background Videos */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0 origin-center"
        >
          <video
            src={(SLIDES[activeSlide] || SLIDES[0]).video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 backdrop-blur-[2px] z-10" />

      {/* Main Content */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-6 z-20 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center max-w-[850px] mx-auto space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full glass-border px-5 py-2 text-xs font-semibold text-white/90 uppercase tracking-[0.25em] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl bg-white/5 border border-white/10">
            Enterprise Grade Software
          </div>
          
          {/* Headline */}
          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[88px] font-display italic font-bold tracking-tight text-white leading-[1.05]">
            Empower Your Retail Business with{" "}
            <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]">Intelligent Solutions</span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-[650px] mx-auto leading-relaxed font-light">
            Simplify retail operations, automate billing, optimize inventory, and accelerate business growth with our AI-powered enterprise platform.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
            <Link href="/products" className="group relative inline-flex h-14 items-center justify-center rounded-full bg-brand-accent px-8 py-3.5 text-base font-bold text-black transition-all hover:bg-brand-accent/90 shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_35px_rgba(163,230,53,0.6)] hover:-translate-y-1 w-full sm:w-auto">
              <Box className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Explore Products
            </Link>
          
            <Link href="/request-demo" className="group relative inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-3.5 text-base font-medium transition-all hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Contact Sales <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Carousel Controls & Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-12 flex flex-col md:flex-row items-end justify-between gap-8 pointer-events-none">
        
        {/* Left Side: Progress & Navigation */}
        <div className="flex flex-col gap-5 w-full md:w-auto pointer-events-auto">
          {/* Slide Numbers */}
          <div className="flex items-center gap-4 text-white/70 font-mono text-sm tracking-[0.2em] font-bold">
            <span>0{activeSlide + 1}</span>
            <span className="w-12 h-[1px] bg-white/20"></span>
            <span>0{SLIDES.length}</span>
          </div>

          {/* Progress Bars */}
          <div className="flex gap-2.5">
            {SLIDES.map((slide, idx) => (
              <div 
                key={slide.id} 
                className="w-8 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
                onClick={() => goToSlide(idx)}
              >
                {activeSlide === idx && (
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 bg-brand-accent rounded-full"
                    style={{ width: `${progress}%` }}
                    initial={{ width: "0%" }}
                  />
                )}
                {activeSlide > idx && (
                  <div className="absolute top-0 left-0 bottom-0 right-0 bg-brand-accent rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-4 mt-2">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white backdrop-blur-md bg-transparent hover:bg-white/5 hover:border-white/40 hover:scale-105 transition-all"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white backdrop-blur-md bg-transparent hover:bg-white/10 hover:scale-105 transition-all"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Right Side: Thumbnail Navigation (Overlapping Cards) */}
        <div className="hidden lg:flex items-center justify-end pointer-events-auto -space-x-8">
          {SLIDES.map((slide, idx) => (
            <div 
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`relative rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 group shadow-2xl ${
                activeSlide === idx 
                  ? 'w-[200px] h-[130px] border-2 border-brand-accent z-20 scale-100' 
                  : 'w-[160px] h-[100px] z-10 opacity-60 hover:opacity-100 hover:z-30 scale-95'
              }`}
              style={{
                transformOrigin: 'center center'
              }}
            >
              {activeSlide !== idx && (
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors z-10" />
              )}
              <img src={slide.thumb} alt={slide.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
