"use client";

import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import Link from "next/link";
import { ChevronRight, ShoppingCart, ShirtIcon, Smartphone, PillIcon } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const industries = [
  {
    title: "Supermarkets & Grocery",
    desc: "Manage thousands of SKUs, handle high volume checkouts efficiently, and automate restocking.",
    features: ["Batch & Expiry tracking", "Fast checkout POS", "Weighing scale integration", "Vendor management"],
    icon: <ShoppingCart className="w-8 h-8" />
  },
  {
    title: "Fashion & Apparel",
    desc: "Handle complex variants, sizes, colors, and seasonal inventory across multiple stores.",
    features: ["Size & Color matrix", "Loyalty programs", "Omnichannel syncing", "Store transfers"],
    icon: <ShirtIcon className="w-8 h-8" />
  },
  {
    title: "Pharmacy & Healthcare",
    desc: "Ensure compliance, batch tracking, expiry management, and prescription handling.",
    features: ["FDA Compliance", "Substitute medicines", "Refrigeration alerts", "Supplier integration"],
    icon: <PillIcon className="w-8 h-8" />
  },
  {
    title: "Electronics & Appliances",
    desc: "Track serial numbers, manage warranties, and handle after-sales service requests.",
    features: ["IMEI/Serial tracking", "Warranty management", "Repair ticketing", "Bundle pricing"],
    icon: <Smartphone className="w-8 h-8" />
  },
];

export default function SolutionsClient() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal as="h1" intensity="subtle" className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Tailored <span className="text-brand-accent">Solutions</span>
          </Reveal>
          <Reveal as="p" intensity="subtle" delay={0.1} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Discover how B&Y Technology addresses the unique challenges of your industry with our specialized software suites.
          </Reveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealGroup stagger={0.1} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((ind, i) => (
              <Reveal as="div" intensity="subtle" key={i} className="glass-border rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{ind.title}</h2>
                <p className="text-foreground/70 mb-6">{ind.desc}</p>
                
                <h3 className="font-semibold text-foreground mb-3">Key Capabilities:</h3>
                <ul className="space-y-3 mb-8">
                  {ind.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-foreground/80">
                      <div className="w-2 h-2 rounded-full bg-brand-accent mr-3 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/request-demo" className="text-brand-accent font-semibold flex items-center hover:text-brand-accent/80 transition-colors">
                  Request a Demo <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
          
          <Reveal as="div" intensity="subtle" className="mt-20 glass-border rounded-3xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden hover:border-white/20 hover:bg-white/5 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 via-transparent to-brand-accent/10 pointer-events-none"></div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 relative z-10">Don't see your industry?</h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto relative z-10">
              Our platform is highly customizable. Talk to our experts to learn how we can adapt our software to your specific business model.
            </p>
            <MagneticButton className="relative z-10">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-brand-accent text-black px-8 rounded-lg font-bold hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                Contact Our Experts
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
