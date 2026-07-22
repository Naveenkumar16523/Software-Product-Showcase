"use client";

import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries as baseIndustries } from "@/lib/data/industries";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Map over existing industries to assign categories for filtering
const categorizedIndustries = baseIndustries.map(ind => {
  let category = "Retail";
  if (ind.title.includes("Pharmacy")) category = "Healthcare";
  if (ind.title.includes("Restaurants")) category = "Hospitality";
  if (ind.title.includes("Automotive")) category = "Specialized";
  return { ...ind, category };
});

const categories = ["All", "Retail", "Healthcare", "Hospitality", "Specialized"];

export default function IndustriesClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredIndustries = activeCategory === "All" 
    ? categorizedIndustries 
    : categorizedIndustries.filter(ind => ind.category === activeCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-background to-background z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal as="h1" intensity="subtle" className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Industries We <span className="text-brand-accent">Serve</span>
          </Reveal>
          <Reveal as="p" intensity="subtle" delay={0.1} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            From boutique apparel to massive supermarket chains, our ecosystem adapts to your specific vertical seamlessly.
          </Reveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-surface/50 border border-white/5 rounded-2xl max-w-fit mx-auto backdrop-blur-md shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat ? 'text-black' : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-brand-accent rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="pb-32 relative z-10 min-h-[600px]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
            <AnimatePresence mode="popLayout">
              {filteredIndustries.map((ind, i) => {
                // Bento layout logic based on the filtered list index
                const bentoClasses = [
                  "md:col-span-2 md:row-span-1", 
                  "md:col-span-1 md:row-span-2", 
                  "md:col-span-1 md:row-span-1", 
                  "md:col-span-1 md:row-span-1", 
                  "md:col-span-2 md:row-span-1", 
                  "md:col-span-1 md:row-span-1", 
                ];
                
                // If it's a filtered list, we just make them all standard size to avoid broken grids,
                // OR we can keep the bento pattern if there's enough items. Let's just apply the pattern based on the index.
                const className = activeCategory === "All" 
                  ? bentoClasses[i % bentoClasses.length]
                  : "md:col-span-1 md:row-span-1"; // simpler grid when filtered

                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    key={ind.title} 
                    className={`glass-border rounded-3xl p-8 hover:bg-white/5 hover:border-brand-accent/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${className}`}
                  >
                    {/* Dynamic border glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-full blur-2xl -z-10 group-hover:bg-brand-accent/20 transition-colors duration-500"></div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-brand-accent group-hover:scale-110 transition-transform duration-300 inline-block bg-surface-2 p-3 rounded-2xl border border-white/5 shadow-inner">
                          {React.cloneElement(ind.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                        </div>
                        <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider font-bold text-foreground/50">
                          {ind.category}
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{ind.title}</h2>
                      <p className="text-foreground/70">{ind.desc}</p>
                    </div>
                    
                    <div className="pt-6 mt-auto">
                      <Link href={`/solutions?industry=${encodeURIComponent(ind.title)}`} className="inline-flex items-center text-sm text-brand-accent font-semibold group-hover:text-brand-accent/80 transition-colors">
                        Explore Solution <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredIndustries.length === 0 && (
             <div className="text-center py-20 text-foreground/50">
                No industries found for this category.
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
