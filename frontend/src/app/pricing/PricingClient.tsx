"use client";

import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import Link from "next/link";
import { Check, X, Info, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Starter",
    desc: "For single-store retailers just getting started.",
    monthlyPrice: 99,
    features: [
      { name: "1 Store Location", tooltip: "Manage a single physical store or warehouse." },
      { name: "Basic Inventory", tooltip: "Track up to 10,000 SKUs." },
      { name: "Standard POS", tooltip: "Web-based point of sale system." },
      { name: "Email Support", tooltip: "Response within 24 hours." },
      { name: "Basic Reporting", tooltip: "Standard sales and tax reports." }
    ],
    missing: ["Omnichannel", "Advanced API", "Dedicated Success Manager"],
    popular: false,
    cta: "Get Started",
    href: "/request-demo"
  },
  {
    name: "Professional",
    desc: "For growing brands with multiple locations and channels.",
    monthlyPrice: 299,
    features: [
      { name: "Up to 10 Locations", tooltip: "Manage multiple branches from one dashboard." },
      { name: "Advanced Inventory AI", tooltip: "Predictive ordering and auto-replenishment." },
      { name: "Omnichannel POS", tooltip: "Sync with Shopify, WooCommerce, and Amazon." },
      { name: "Priority 24/7 Support", tooltip: "Phone and chat support available 24/7." },
      { name: "Advanced Analytics", tooltip: "Custom dashboards and predictive insights." },
      { name: "E-commerce Integration", tooltip: "Bi-directional sync with leading platforms." }
    ],
    missing: ["Dedicated Success Manager"],
    popular: true,
    cta: "Start Free Trial",
    href: "/request-demo"
  },
  {
    name: "Enterprise",
    desc: "For large scale operations requiring custom solutions.",
    monthlyPrice: "Custom",
    features: [
      { name: "Unlimited Locations", tooltip: "Scale without limits." },
      { name: "Custom AI Models", tooltip: "Machine learning models trained on your specific data." },
      { name: "Headless Commerce API", tooltip: "Build custom frontends with our robust GraphQL API." },
      { name: "Dedicated Success Manager", tooltip: "A named contact for your account." },
      { name: "On-premise deployment option", tooltip: "Host on your own servers for maximum security." },
      { name: "SLA Guarantees", tooltip: "99.99% uptime guarantee." }
    ],
    missing: [],
    popular: false,
    cta: "Contact Sales",
    href: "/contact"
  }
];

const comparisonData = [
  {
    category: "Core Features",
    features: [
      { name: "Locations", starter: "1", pro: "Up to 10", enterprise: "Unlimited" },
      { name: "SKU Limit", starter: "10,000", pro: "100,000", enterprise: "Unlimited" },
      { name: "Users", starter: "3", pro: "15", enterprise: "Unlimited" },
    ]
  },
  {
    category: "Sales Channels",
    features: [
      { name: "Web POS", starter: true, pro: true, enterprise: true },
      { name: "Offline Mode", starter: false, pro: true, enterprise: true },
      { name: "E-commerce Sync", starter: false, pro: true, enterprise: true },
      { name: "Mobile App", starter: false, pro: true, enterprise: true },
    ]
  },
  {
    category: "Support & Services",
    features: [
      { name: "Support Level", starter: "Email only", pro: "24/7 Priority", enterprise: "Dedicated Manager" },
      { name: "Onboarding", starter: "Self-serve", pro: "Guided", enterprise: "Custom Implementation" },
      { name: "Custom SLA", starter: false, pro: false, enterprise: true },
    ]
  }
];

function Tooltip({ children, content }: { children: React.ReactNode, content: string }) {
  return (
    <div className="relative group flex items-center">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-white text-black text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl z-50 text-center pointer-events-none">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
      </div>
    </div>
  );
}

export default function PricingClient() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-accent/10 via-background to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal as="h1" intensity="subtle" className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Simple, Transparent <span className="text-brand-accent">Pricing</span>
          </Reveal>
          <Reveal as="p" intensity="subtle" delay={0.1} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Choose the plan that best fits your retail operation. No hidden fees, no surprises.
          </Reveal>
          
          {/* Billing Toggle */}
          <Reveal as="div" intensity="subtle" delay={0.2} className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-foreground' : 'text-foreground/50'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-surface-2 border border-white/10 flex items-center px-1 transition-colors hover:border-brand-accent/50"
            >
               <motion.div 
                 className="w-6 h-6 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(163,230,53,0.5)]"
                 animate={{ x: isAnnual ? 32 : 0 }}
                 transition={{ type: "spring", stiffness: 500, damping: 30 }}
               />
            </button>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className={`transition-colors ${isAnnual ? 'text-foreground' : 'text-foreground/50'}`}>Annually</span>
              <span className="bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded text-xs">Save 20%</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <RevealGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => {
              
              const price = typeof plan.monthlyPrice === "number" 
                ? (isAnnual ? Math.floor(plan.monthlyPrice * 0.8) : plan.monthlyPrice)
                : plan.monthlyPrice;

              return (
              <Reveal as="div" intensity="subtle" key={i} className={`relative glass-border rounded-3xl p-8 flex flex-col ${plan.popular ? 'border-brand-accent/50 shadow-[0_0_40px_rgba(163,230,53,0.1)] md:-translate-y-4 bg-surface' : 'bg-surface-2 hover:bg-surface'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-accent text-black px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_0_15px_rgba(163,230,53,0.5)]">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6 border-b border-white/5 pb-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{plan.name}</h3>
                  <p className="text-foreground/60 h-10 text-sm leading-relaxed">{plan.desc}</p>
                </div>
                
                <div className="mb-8 relative h-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col justify-center"
                    >
                      <div className="flex items-baseline">
                        {typeof price === "number" && <span className="text-2xl font-bold text-foreground/50 mr-1">$</span>}
                        <span className="text-5xl font-display font-bold text-foreground">{price}</span>
                        {typeof price === "number" && <span className="text-foreground/50 ml-2 font-medium">/mo</span>}
                      </div>
                      {typeof price === "number" && isAnnual && (
                        <div className="text-xs text-brand-accent font-medium mt-1 tracking-wide">Billed ${price * 12} yearly</div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start text-foreground/80 text-sm">
                      <Check className="w-5 h-5 text-brand-accent mr-3 shrink-0" />
                      <Tooltip content={feat.tooltip}>
                        <span className="border-b border-dashed border-white/20 cursor-help">{feat.name}</span>
                        <Info className="w-3.5 h-3.5 text-foreground/30 ml-2 mt-0.5" />
                      </Tooltip>
                    </li>
                  ))}
                  {plan.missing.map((feat, j) => (
                    <li key={`missing-${j}`} className="flex items-start text-foreground/30 text-sm">
                      <X className="w-5 h-5 mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-4">
                  {plan.popular ? (
                      <Link href={plan.href} className="w-full flex justify-center items-center bg-brand-accent text-black px-6 py-4 rounded-xl font-bold hover:bg-brand-accent/90 transition-colors shadow-lg hover:shadow-brand-accent/30">
                        {plan.cta}
                      </Link>
                  ) : (
                    <Link href={plan.href} className="flex justify-center items-center w-full bg-white/5 text-foreground px-6 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors border border-white/10">
                      {plan.cta}
                    </Link>
                  )}
                </div>
              </Reveal>
            )})}
          </RevealGroup>
        </div>
      </section>

      {/* Comparison Table Toggle */}
      <section className="pb-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
           <button 
             onClick={() => setShowComparison(!showComparison)}
             className="inline-flex items-center gap-2 text-foreground/60 hover:text-brand-accent transition-colors font-medium border-b border-transparent hover:border-brand-accent pb-1"
           >
             {showComparison ? 'Hide' : 'Show'} Full Feature Comparison
             <motion.div animate={{ rotate: showComparison ? 180 : 0 }}>
               <ChevronDown className="w-4 h-4" />
             </motion.div>
           </button>

           <AnimatePresence>
             {showComparison && (
               <motion.div
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 exit={{ opacity: 0, height: 0 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
                 className="overflow-hidden mt-12"
               >
                 <div className="glass-border rounded-3xl overflow-hidden text-left bg-surface shadow-2xl">
                   {/* Table Header */}
                   <div className="grid grid-cols-4 border-b border-white/10 bg-black/40 p-6 sticky top-0 backdrop-blur-md z-20">
                     <div className="font-bold text-lg">Features</div>
                     <div className="font-bold text-center text-foreground/80">Starter</div>
                     <div className="font-bold text-center text-brand-accent relative">
                       Professional
                       <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] bg-brand-accent text-black px-2 py-0.5 rounded-full uppercase tracking-widest hidden sm:block">Recommended</div>
                     </div>
                     <div className="font-bold text-center text-foreground/80">Enterprise</div>
                   </div>
                   
                   {/* Table Body */}
                   <div className="divide-y divide-white/5">
                     {comparisonData.map((section, idx) => (
                       <div key={idx}>
                         <div className="bg-white/5 p-4 text-xs font-bold uppercase tracking-widest text-foreground/50">
                           {section.category}
                         </div>
                         {section.features.map((feature, fIdx) => (
                           <div key={fIdx} className="grid grid-cols-4 p-4 md:p-6 hover:bg-white/5 transition-colors">
                             <div className="text-sm font-medium">{feature.name}</div>
                             
                             <div className="text-center flex justify-center items-center">
                               {typeof feature.starter === "boolean" 
                                 ? (feature.starter ? <Check className="w-5 h-5 text-brand-accent" /> : <X className="w-5 h-5 text-foreground/20" />)
                                 : <span className="text-sm text-foreground/70">{feature.starter}</span>
                               }
                             </div>
                             
                             <div className="text-center flex justify-center items-center">
                               {typeof feature.pro === "boolean" 
                                 ? (feature.pro ? <Check className="w-5 h-5 text-brand-accent" /> : <X className="w-5 h-5 text-foreground/20" />)
                                 : <span className="text-sm text-brand-accent font-semibold">{feature.pro}</span>
                               }
                             </div>
                             
                             <div className="text-center flex justify-center items-center">
                               {typeof feature.enterprise === "boolean" 
                                 ? (feature.enterprise ? <Check className="w-5 h-5 text-brand-accent" /> : <X className="w-5 h-5 text-foreground/20" />)
                                 : <span className="text-sm text-foreground/70">{feature.enterprise}</span>
                               }
                             </div>
                           </div>
                         ))}
                       </div>
                     ))}
                   </div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
// Add ChevronDown to imports if not present, but wait, let me just add it manually by making sure the import is correct.
