"use client";

import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import { ChevronRight, ShoppingCart, ShirtIcon, Smartphone, PillIcon, CheckCircle2, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    id: "supermarkets",
    title: "Supermarkets & Grocery",
    desc: "Manage thousands of SKUs, handle high volume checkouts efficiently, and automate restocking.",
    features: [
      { name: "Batch & Expiry tracking", detail: "Automated alerts for near-expiry items and FEFO (First Expired First Out) stock rotation." },
      { name: "Fast checkout POS", detail: "Optimized for speed with barcode scanning, scale integration, and offline mode capabilities." },
      { name: "Weighing scale integration", detail: "Direct communication with deli and produce scales to reduce manual entry errors." },
      { name: "Vendor management", detail: "Automated PO generation based on predictive par levels and AI forecasting." }
    ],
    icon: <ShoppingCart className="w-6 h-6" />,
    imageBg: "from-blue-500/20 to-cyan-500/5"
  },
  {
    id: "fashion",
    title: "Fashion & Apparel",
    desc: "Handle complex variants, sizes, colors, and seasonal inventory across multiple stores.",
    features: [
      { name: "Size & Color matrix", detail: "Intuitive grid interface for creating and managing product variants effortlessly." },
      { name: "Loyalty programs", detail: "Points-based reward systems, tier levels, and targeted SMS/email marketing." },
      { name: "Omnichannel syncing", detail: "Real-time stock synchronization between your physical stores and Shopify/WooCommerce." },
      { name: "Store transfers", detail: "Seamless stock transferring between branches with transit tracking." }
    ],
    icon: <ShirtIcon className="w-6 h-6" />,
    imageBg: "from-purple-500/20 to-pink-500/5"
  },
  {
    id: "pharmacy",
    title: "Pharmacy & Healthcare",
    desc: "Ensure compliance, batch tracking, expiry management, and prescription handling.",
    features: [
      { name: "FDA Compliance", detail: "Built-in regulatory reporting and compliance checks for controlled substances." },
      { name: "Substitute medicines", detail: "Smart recommendations for generic alternatives during billing." },
      { name: "Refrigeration alerts", detail: "Integration with IoT temperature sensors for cold-chain medications." },
      { name: "Supplier integration", detail: "Direct API connections with major pharmaceutical distributors." }
    ],
    icon: <PillIcon className="w-6 h-6" />,
    imageBg: "from-emerald-500/20 to-teal-500/5"
  },
  {
    id: "electronics",
    title: "Electronics & Appliances",
    desc: "Track serial numbers, manage warranties, and handle after-sales service requests.",
    features: [
      { name: "IMEI/Serial tracking", detail: "Trace every individual unit from receiving to point-of-sale and return." },
      { name: "Warranty management", detail: "Digital warranty cards and automated tracking of coverage periods." },
      { name: "Repair ticketing", detail: "Built-in service center module to track customer repairs and spare parts." },
      { name: "Bundle pricing", detail: "Create dynamic combos (e.g. Phone + Case + Insurance) with special pricing." }
    ],
    icon: <Smartphone className="w-6 h-6" />,
    imageBg: "from-amber-500/20 to-orange-500/5"
  },
];

function Accordion({ feature, isOpen, onClick }: { feature: any, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-surface-2 transition-colors hover:border-white/20">
      <button 
        className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className={`w-5 h-5 transition-colors ${isOpen ? 'text-brand-accent' : 'text-foreground/30'}`} />
          <span className="font-semibold text-foreground">{feature.name}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-foreground/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-1 pl-13 text-foreground/70 text-sm leading-relaxed border-t border-white/5 mx-5 mt-2 pt-4">
              {feature.detail}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SolutionsClient() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-background z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal as="h1" intensity="subtle" className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Tailored <span className="text-brand-accent">Solutions</span>
          </Reveal>
          <Reveal as="p" intensity="subtle" delay={0.1} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Discover how B&Y Technology addresses the unique challenges of your industry with our specialized software suites.
          </Reveal>
        </div>
      </section>

      {/* Split Tabbed Layout Section */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Sidebar Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-4 px-4">Select Industry</div>
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => {
                    setActiveTab(sol.id);
                    setOpenAccordion(0); // Reset accordion on tab change
                  }}
                  className={`relative w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                    activeTab === sol.id ? 'bg-surface border border-white/10 shadow-lg' : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {activeTab === sol.id && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-brand-accent rounded-r-full"
                    />
                  )}
                  <div className={`p-2 rounded-xl transition-colors ${activeTab === sol.id ? 'bg-brand-accent/20 text-brand-accent' : 'bg-surface-2 text-foreground/50 group-hover:text-foreground'}`}>
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg transition-colors ${activeTab === sol.id ? 'text-foreground' : 'text-foreground/60 group-hover:text-foreground'}`}>
                      {sol.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3 min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSolution.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-surface rounded-3xl border border-white/5 overflow-hidden flex flex-col shadow-2xl h-full"
                >
                  {/* Decorative Banner */}
                  <div className={`h-40 w-full bg-gradient-to-br ${activeSolution.imageBg} relative overflow-hidden flex items-center px-10`}>
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                     <div className="relative z-10 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 text-brand-accent shadow-xl">
                        {React.cloneElement(activeSolution.icon as React.ReactElement<any>, { size: 40 })}
                     </div>
                  </div>
                  
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{activeSolution.title} Platform</h2>
                    <p className="text-foreground/70 text-lg mb-10 leading-relaxed max-w-2xl">
                      {activeSolution.desc}
                    </p>
                    
                    <h3 className="font-semibold text-foreground/50 uppercase tracking-widest text-sm mb-6">Deep Dive Capabilities</h3>
                    
                    <div className="space-y-4 mb-10 flex-1">
                      {activeSolution.features.map((feature, idx) => (
                        <Accordion 
                          key={idx} 
                          feature={feature} 
                          isOpen={openAccordion === idx} 
                          onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                        />
                      ))}
                    </div>
                    
                    <div className="pt-8 border-t border-white/10 mt-auto">
                      <Link href="/request-demo" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-accent text-black font-bold rounded-xl hover:bg-brand-accent/90 transition-all shadow-[0_0_15px_rgba(163,230,53,0.2)] hover:shadow-[0_0_25px_rgba(163,230,53,0.4)]">
                        See {activeSolution.title} in Action <ChevronRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="pb-24">
        <Reveal as="div" intensity="subtle" className="container mx-auto px-4 max-w-4xl">
            <div className="glass-border rounded-3xl p-12 text-center relative overflow-hidden hover:border-brand-accent/20 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5 pointer-events-none"></div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 relative z-10">Don't see your industry?</h2>
              <p className="text-foreground/70 mb-8 max-w-xl mx-auto relative z-10">
                Our platform is highly customizable. Talk to our experts to learn how we can adapt our software to your specific business model.
              </p>
              <Link href="/contact" className="relative z-10 inline-flex h-12 items-center justify-center bg-white text-black px-8 rounded-lg font-bold hover:bg-brand-accent transition-colors shadow-lg">
                Contact Our Experts
              </Link>
            </div>
        </Reveal>
      </section>
    </div>
  );
}
