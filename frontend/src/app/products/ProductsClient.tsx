"use client";

import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import Link from "next/link";
import { ArrowRight, Activity, Terminal, Code2, Users, Anchor } from "lucide-react";
import { products } from "@/lib/data/products";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Helper component for interactive mockups based on index
function ProductMockup({ index }: { index: number }) {
  if (index === 0) {
    // POS Mockup
    return (
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-4 flex flex-col gap-2 relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(163,230,53,0.1)] transition-all duration-700">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div></div>
          <div className="text-[10px] text-white/30 font-mono">B&Y_POS_v2.4</div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2 mt-2">
          <div className="col-span-2 grid grid-cols-2 gap-2">
            {[1,2,3,4,5,6].map(i => (
               <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer">
                 <div className="w-6 h-6 bg-brand-accent/20 rounded-md"></div>
                 <div className="w-10 h-1.5 bg-white/20 rounded-full"></div>
               </motion.div>
            ))}
          </div>
          <div className="col-span-1 bg-brand-accent/5 rounded-lg border border-brand-accent/20 p-2 flex flex-col">
            <div className="w-12 h-2 bg-white/20 rounded-full mb-2"></div>
            <div className="space-y-1 flex-1">
              {[1,2,3].map(i => <div key={i} className="flex justify-between"><div className="w-8 h-1.5 bg-white/10 rounded-full"></div><div className="w-4 h-1.5 bg-white/10 rounded-full"></div></div>)}
            </div>
            <div className="border-t border-brand-accent/20 pt-2 mt-auto">
               <div className="flex justify-between mb-1"><div className="w-6 h-2 bg-white/30 rounded-full"></div><div className="w-8 h-2 bg-brand-accent rounded-full"></div></div>
               <motion.div whileHover={{ scale: 1.02 }} className="w-full py-1.5 bg-brand-accent rounded text-[8px] font-bold text-center text-black mt-1">PAYOUT</motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (index === 1) {
    // Inventory Mockup
    return (
       <div className="w-full h-full bg-black rounded-xl border border-white/10 p-4 flex flex-col relative overflow-hidden group-hover:border-white/30 transition-all duration-700">
          <div className="flex gap-4 mb-4">
             <div className="w-1/3 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex flex-col justify-center px-3 relative overflow-hidden">
               <div className="text-[9px] text-blue-400">Total SKUs</div>
               <div className="text-sm font-bold text-white">24,592</div>
               <Activity className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500/20 w-8 h-8" />
             </div>
             <div className="w-1/3 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex flex-col justify-center px-3 relative overflow-hidden">
               <div className="text-[9px] text-brand-accent">Low Stock</div>
               <div className="text-sm font-bold text-white">128</div>
             </div>
             <div className="w-1/3 h-12 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-center px-3">
               <div className="text-[9px] text-white/40">In Transit</div>
               <div className="text-sm font-bold text-white">3,040</div>
             </div>
          </div>
          <div className="flex-1 border border-white/10 rounded-lg overflow-hidden flex flex-col">
            <div className="bg-white/5 p-2 flex justify-between text-[8px] text-white/50 uppercase tracking-wider">
               <span>Item</span><span>Status</span><span>Qty</span>
            </div>
            <div className="p-2 space-y-2">
               {[1,2,3].map(i => (
                 <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-white/10"></div><div className="w-16 h-2 bg-white/30 rounded-full"></div></div>
                    <div className="w-10 h-3 rounded-full bg-green-500/20 flex items-center justify-center"><div className="w-6 h-1 bg-green-500/50 rounded-full"></div></div>
                    <div className="text-xs font-mono text-white/80">{(i*42)}</div>
                 </div>
               ))}
            </div>
          </div>
       </div>
    );
  } else {
     // Generic Data / ERP mockup
     return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-4 flex flex-col items-center justify-center relative group-hover:bg-white/5 transition-colors duration-500">
           <Terminal className="w-12 h-12 text-brand-accent/30 mb-4 group-hover:text-brand-accent/60 transition-colors" />
           <div className="flex flex-col items-center gap-2">
             <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  className="w-1/2 h-full bg-brand-accent"
                />
             </div>
             <div className="text-[10px] text-white/40 font-mono">Syncing enterprise modules...</div>
           </div>
        </div>
     );
  }
}

export default function ProductsClient() {
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.product-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If section is roughly in the middle of the screen
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveProduct(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/10 to-background/0 z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal as="h1" intensity="subtle" className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Our <span className="text-brand-accent">Products</span>
          </Reveal>
          <Reveal as="p" intensity="subtle" delay={0.1} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Discover our suite of intelligent retail software solutions designed for massive scale and ultimate performance.
          </Reveal>
        </div>
      </section>

      {/* Sticky Sub-navigation */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-y border-white/5 py-4 hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-8">
          {products.map((p, i) => (
            <a 
              key={i} 
              href={`#product-${i}`} 
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${activeProduct === i ? 'text-brand-accent' : 'text-foreground/50 hover:text-foreground'}`}
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className="pb-32 pt-12 relative z-10">
        <div className="container mx-auto px-4">
          <RevealGroup stagger={0.1} className="space-y-32">
            {products.map((product, idx) => (
              <div key={idx} id={`product-${idx}`} className="scroll-mt-32">
                <Reveal 
                  as="div"
                  intensity="subtle"
                  className={`product-section flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 pt-8`}
                >
                {/* Visual Side: Interactive Mockup */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden glass-border p-2 bg-surface/50 group transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    {/* The Interactive Mockup Component */}
                    <div className="w-full h-full relative z-10">
                      <ProductMockup index={idx} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-accent/10 text-brand-accent mb-2 border border-brand-accent/20">
                    {product.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  <ul className="space-y-4 pt-2">
                    {product.benefits.map((feature, i) => (
                      <li key={i} className="flex items-start text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-4 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(163,230,53,0.8)]"></div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                      <Link href={`/contact?product=${encodeURIComponent(product.title)}`} className="group inline-flex items-center h-14 px-8 rounded-xl bg-white text-black font-bold hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-xl">
                        Request a Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                  </div>
                </div>
                </Reveal>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
