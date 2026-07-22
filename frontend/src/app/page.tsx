"use client";
import { motion, useScroll, useTransform, useReducedMotion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import LoadingScreen from "@/components/effects/LoadingScreen";
import { LogoMarquee } from "@/components/effects/LogoMarquee";
import { ArrowRight, CheckCircle2, ChevronRight, Cloud, Database, Package, Shield, Star, Store, Users, Zap, Cpu, ScanLine, Receipt, BarChart, X } from "lucide-react";
import React, { useRef, MouseEvent, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";
import { Scanline } from "@/components/effects/Scanline";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-bg">
          <Hero />
          <LogoMarquee />
          <ProductsSection />
          <IndustriesSection />
          <WhyChooseUsSection />
          <SuccessStoriesSection />
          <TestimonialsSection />
          <StatsSection />
          <DemoRequestSection />
        </div>
      )}
    </>
  );
}

// -------------------------------------------------------------
// SECTIONS
// -------------------------------------------------------------

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const reduce = useReducedMotion();
  const isTouch = typeof window !== "undefined" ? matchMedia("(pointer: coarse)").matches : false;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduce || isTouch ? 0 : rotateX,
        rotateY: reduce || isTouch ? 0 : rotateY,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal as="div" intensity="bold" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Enterprise Product Suite</h2>
          <p className="text-lg text-foreground/70">Everything you need to run your retail business efficiently, unified in one powerful ecosystem.</p>
        </Reveal>
        
        <RevealGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {products.map((product, i) => {
            const spanClass = i % 4 === 0 || i % 4 === 3 ? "md:col-span-7" : "md:col-span-5";
            return (
              <Reveal key={i} as="div" intensity="bold" className={spanClass}>
                <div className="w-full aspect-[4/3] md:aspect-auto md:h-[320px] group relative bg-surface border border-stroke rounded-3xl overflow-hidden text-foreground cursor-pointer flex flex-col justify-end">
                  
                  {/* Background Image & Halftone */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={'/og.jpg'}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div 
                      className="absolute inset-0 opacity-20 mix-blend-multiply" 
                      style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "4px 4px" }}
                    ></div>
                    {/* Hover Backdrop */}
                    <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 z-10 flex flex-col justify-center items-center text-center p-8">
                       <h3 className="text-2xl font-display font-bold italic mb-4">{product.title}</h3>
                       <p className="text-muted text-sm">{product.desc}</p>
                    </div>
                  </div>

                  {/* Initial Label */}
                  <div className="absolute top-6 left-6 z-20 w-12 h-12 glass-border rounded-xl flex items-center justify-center text-text-primary shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                    {product.icon}
                  </div>
                  
                  {/* Hover Pill Label */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium border-accent-gradient shadow-lg">
                      View — <span className="font-display italic ml-1 font-bold">{product.title}</span>
                    </div>
                  </div>
                  
                  {/* Bottom Text Area (fades out on hover) */}
                  <div className="relative z-10 p-6 bg-gradient-to-t from-black/80 to-transparent pt-20 group-hover:opacity-0 transition-opacity duration-300">
                    <h1 className="text-2xl font-bold text-text-primary">{product.title}</h1>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}



function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[number] | null>(null);

  useGSAP(() => {
    if (reduce || window.innerWidth < 768) return;

    // Pin the text center
    ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: contentRef.current,
      start: "top top",
      end: "bottom bottom",
      pinSpacing: false,
    });

    // Parallax columns
    gsap.to(column1Ref.current, {
      y: () => -(column1Ref.current!.scrollHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

    gsap.to(column2Ref.current, {
      y: () => -(column2Ref.current!.scrollHeight - window.innerHeight + 200),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

  }, { scope: sectionRef, dependencies: [reduce] });

  // Add pseudo-random rotations using useMemo and array index so they don't change on re-render and match server/client
  const rotations = React.useMemo(() => industries.map((_, idx) => ((idx * 7) % 10) - 5), []);

  return (
    <>
      <section ref={sectionRef} className="min-h-[300vh] relative bg-background overflow-hidden text-foreground">
        
        {/* Layer 1: Pinned Center */}
        <div ref={contentRef} className="h-screen w-full flex items-center justify-center pointer-events-none z-10 absolute top-0 left-0 px-4">
          <div className="text-center max-w-3xl mx-auto backdrop-blur-sm bg-background/50 p-8 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Tailored Solutions</h3>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Tailored for Your Industry</h2>
            <p className="text-xl md:text-2xl font-light text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            &quot;Your technology stack is the foundation of your business. We don&apos;t just build software; we engineer competitive advantages that last.&quot;
          </p>
          </div>
        </div>

        {/* Layer 2: Parallax Columns */}
        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none pt-[100vh]">
           <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 relative">
                
                {/* Column 1 */}
                <div ref={column1Ref} className="flex flex-col gap-24 items-center md:items-end md:pr-10 pt-24 pointer-events-auto pb-48">
                   {industries.slice(0, 3).map((ind, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedIndustry(ind)}
                        className="group w-full max-w-[320px] aspect-square glass-border rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-center items-center text-center shadow-xl hover:shadow-[0_0_40px_rgba(163,230,53,0.15)] hover:border-brand-accent/50 hover:scale-105 bg-surface"
                        style={{ transform: `rotate(${rotations[i]}deg)` }}
                      >
                         <div className="w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                           {React.cloneElement(ind.icon as React.ReactElement<{ size?: number }>, { size: 40 })}
                         </div>
                         <h3 className="text-2xl font-bold">{ind.title}</h3>
                      </div>
                   ))}
                </div>

                {/* Column 2 */}
                <div ref={column2Ref} className="flex flex-col gap-32 items-center md:items-start md:pl-10 pt-[30vh] pointer-events-auto pb-48">
                   {industries.slice(3, 6).map((ind, i) => (
                      <div 
                        key={i + 3} 
                        onClick={() => setSelectedIndustry(ind)}
                        className="group w-full max-w-[320px] aspect-square glass-border rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-center items-center text-center shadow-xl hover:shadow-[0_0_40px_rgba(163,230,53,0.15)] hover:border-brand-accent/50 hover:scale-105 bg-surface"
                        style={{ transform: `rotate(${rotations[i + 3]}deg)` }}
                      >
                         <div className="w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                           {React.cloneElement(ind.icon as React.ReactElement<{ size?: number }>, { size: 40 })}
                         </div>
                         <h3 className="text-2xl font-bold">{ind.title}</h3>
                      </div>
                   ))}
                </div>

              </div>
           </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndustry(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-xl p-4 cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface glass-border rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl cursor-default border-brand-accent/20"
            >
              <button 
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-foreground/50 hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-24 h-24 bg-brand-accent/10 text-brand-accent rounded-3xl flex items-center justify-center mb-8">
                {React.cloneElement(selectedIndustry.icon as React.ReactElement<{ size?: number }>, { size: 48 })}
              </div>
              
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">{selectedIndustry.title}</h3>
              <p className="text-xl text-foreground/70 leading-relaxed mb-10">{selectedIndustry.desc}</p>
              
              <Link href="/industries" className="inline-flex h-14 items-center justify-center px-8 bg-brand-accent text-black font-bold rounded-xl hover:bg-brand-accent/90 transition-colors shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                Explore Solution
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function WhyChooseUsSection() {
  const features = [
    { title: "Point of Sale", icon: <Store /> },
    { title: "Inventory Management", icon: <Package /> },
    { title: "Barcode Support", icon: <ScanLine /> },
    { title: "Cloud Synchronization", icon: <Cloud /> },
    { title: "AI Analytics", icon: <Cpu /> },
    { title: "Customer Loyalty", icon: <Star /> },
    { title: "GST Billing", icon: <Receipt /> },
    { title: "Employee Management", icon: <Users /> },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal as="div" intensity="bold" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Powerful Features for Retail</h2>
          <p className="text-foreground/70 text-lg">Built for speed, security, and scale, ensuring your business never stops growing.</p>
        </Reveal>
        
        <RevealGroup stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
           {features.map((f, i) => (
             <Reveal as="div" intensity="bold" key={i}>
                <div className="border border-white/5 relative group w-full cursor-pointer aspect-[4/3] grid place-content-center p-6 bg-surface/50 hover:bg-surface rounded-2xl overflow-hidden transition-colors">
                  
                  {/* Background Hover Effect (BuyMeCoffee Style) */}
                  <div 
                    className="absolute inset-0 w-full h-full scale-150 group-hover:scale-50 opacity-20 group-hover:opacity-0 transition-all duration-700 ease-out pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 2px, transparent 2px)', backgroundSize: '32px 32px' }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="text-foreground/50 group-hover:text-brand-accent transition-colors duration-300">
                      {React.cloneElement(f.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 32, strokeWidth: 1.5 })}
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground text-center">
                      {f.title}
                    </h4>
                  </div>
                  
                </div>
             </Reveal>
           ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <Reveal as="div" intensity="bold">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Customer Success Stories</h2>
            <p className="text-foreground/70">See how leading retailers transform their business with us.</p>
          </Reveal>
          <Reveal as="div" intensity="bold">
             <Link href="/customers" className="hidden md:inline-flex text-brand-accent font-semibold hover:underline">
               View all stories
             </Link>
          </Reveal>
        </div>
        
        <RevealGroup stagger={0.1} className="flex flex-col gap-4">
          <Reveal as="div" intensity="bold">
            <Link href="/customers" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-all group">
              <div className="flex items-center gap-6 w-full sm:w-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stroke relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-text-primary font-bold text-xs group-hover:scale-110 transition-transform">
                    FM
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted font-bold mb-1 uppercase tracking-wider">Supermarkets</div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-amber-accent transition-colors">How FreshMart increased inventory turnover by 45%</h3>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 pb-2 sm:pb-0 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-sm text-muted">5 min read</span>
                <span className="w-10 h-10 rounded-full bg-bg border border-stroke flex items-center justify-center group-hover:border-transparent group-hover:bg-text-primary group-hover:text-bg transition-colors border-accent-gradient">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </Reveal>
          
          <Reveal as="div" intensity="bold">
            <Link href="/customers" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-all group">
              <div className="flex items-center gap-6 w-full sm:w-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stroke relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-text-primary font-bold text-xs group-hover:scale-110 transition-transform">
                    SH
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted font-bold mb-1 uppercase tracking-wider">Fashion & Apparel</div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-amber-accent transition-colors">StyleHub achieves 2x omnichannel revenue</h3>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 pb-2 sm:pb-0 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-sm text-muted">4 min read</span>
                <span className="w-10 h-10 rounded-full bg-bg border border-stroke flex items-center justify-center group-hover:border-transparent group-hover:bg-text-primary group-hover:text-bg transition-colors border-accent-gradient">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </RevealGroup>
        <div className="mt-8 text-center md:hidden">
          <Link href="/customers" className="inline-flex text-brand-accent font-semibold hover:underline">
            View all stories
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    { name: "Sarah Jenkins", role: "CTO, MegaRetail", text: "The transition to B&Y Technology was flawless. The platform's scalability is exactly what we needed to support our aggressive expansion plans." },
    { name: "David Chen", role: "Owner, City Pharmacy", text: "Compliance and batch tracking used to be a nightmare. Now, it's completely automated. I sleep much better at night." },
    { name: "Amanda Ross", role: "Director of Operations, StyleHub", text: "The real-time analytics have fundamentally changed how we order seasonal inventory. We've minimized dead stock entirely." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal as="div" intensity="bold" className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Loved by Retail Leaders</h2>
        </Reveal>
        <RevealGroup stagger={0.1} className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Reveal as="div" intensity="bold" key={i} className="glass-border bg-surface-2 p-8 rounded-2xl relative shadow-sm hover:-translate-y-1 transition-transform">
              <div className="flex text-amber-400 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
              </div>
              <p className="text-foreground/70 mb-8 italic text-sm md:text-base">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{review.name}</div>
                  <div className="text-sm text-foreground/60">{review.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(() => {
    if (reduce || !ref.current) {
      if (ref.current) ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      return;
    }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
        }
      }
    });
  }, { scope: ref });

  return <div ref={ref} className="text-4xl md:text-5xl font-display font-extrabold">{prefix}0{suffix}</div>;
}

function StatsSection() {
  const stats = [
    { label: "Businesses", value: 10000, suffix: "+" },
    { label: "Countries", value: 50, suffix: "+" },
    { label: "Transactions Daily", value: 1, suffix: "M+" },
    { label: "Uptime Guarantee", value: 99.9, suffix: "%", decimals: 1 },
  ];
  
  const reduce = useReducedMotion();

  return (
    <section className="py-20 bg-brand-accent/10 text-foreground border-y border-brand-accent/20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: reduce ? 1 : 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <div className="text-brand-accent font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function DemoRequestSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal as="div" intensity="bold" className="glass-border rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_0_50px_rgba(163,230,53,0.05)] relative">
          <Scanline />
          <div className="lg:w-1/2 bg-surface-2 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Ready to see it in action?</h2>
              <p className="text-foreground/80 mb-8 text-lg">
                Schedule a personalized demo with our retail experts and discover how B&Y Technology can transform your business.
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-accent shrink-0" /> Tailored product walkthrough</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-accent shrink-0" /> Answers to your specific questions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-accent shrink-0" /> Custom pricing quote</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 bg-surface relative z-10 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-accent/50">
                  <CheckCircle2 className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Request received</h3>
                <p className="text-foreground/80 text-lg">Someone from the team will reach out within one business day to coordinate a time.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-amber-accent bg-background" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-amber-accent bg-background" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-amber-accent bg-background" placeholder="john@company.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-amber-accent bg-background" placeholder="Acme Retail" required />
                </div>
                <button type="submit" data-cursor="hover" className="w-full py-4 bg-brand-accent hover:bg-brand-accent/90 text-black font-bold rounded-lg transition-colors text-lg shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                  Request a demo
                </button>
                <p className="text-xs text-foreground/50 text-center font-mono uppercase tracking-widest mt-4">By submitting, you agree to our Terms.</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
