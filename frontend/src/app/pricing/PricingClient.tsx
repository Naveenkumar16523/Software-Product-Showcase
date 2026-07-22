"use client";

import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import Link from "next/link";
import { Check, X } from "lucide-react";


const plans = [
  {
    name: "Starter",
    desc: "For single-store retailers just getting started.",
    price: "$99",
    features: ["1 Store Location", "Basic Inventory", "Standard POS", "Email Support", "Basic Reporting"],
    missing: ["Omnichannel", "Advanced API", "Dedicated Success Manager"],
    popular: false,
    cta: "Get Started",
    href: "/request-demo"
  },
  {
    name: "Professional",
    desc: "For growing brands with multiple locations and channels.",
    price: "$299",
    features: ["Up to 10 Locations", "Advanced Inventory AI", "Omnichannel POS", "Priority 24/7 Support", "Advanced Analytics", "E-commerce Integration"],
    missing: ["Dedicated Success Manager"],
    popular: true,
    cta: "Start Free Trial",
    href: "/request-demo"
  },
  {
    name: "Enterprise",
    desc: "For large scale operations requiring custom solutions.",
    price: "Custom",
    features: ["Unlimited Locations", "Custom AI Models", "Headless Commerce API", "Dedicated Success Manager", "On-premise deployment option", "SLA Guarantees"],
    missing: [],
    popular: false,
    cta: "Contact Sales",
    href: "/contact"
  }
];

export default function PricingClient() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-accent/10 via-background to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal as="h1" intensity="subtle" className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Simple, Transparent <span className="text-brand-accent">Pricing</span>
          </Reveal>
          <Reveal as="p" intensity="subtle" delay={0.1} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Choose the plan that best fits your retail operation. No hidden fees, no surprises.
          </Reveal>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4">
          <RevealGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <Reveal as="div" intensity="subtle" key={i} className={`relative glass-border rounded-3xl p-8 flex flex-col ${plan.popular ? 'border-brand-accent/50 shadow-[0_0_30px_rgba(163,230,53,0.15)] md:-translate-y-4 bg-white/5' : 'hover:bg-white/5'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-accent text-black px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(163,230,53,0.5)]">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-foreground/60 h-12">{plan.desc}</p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-white/10">
                  <span className="text-5xl font-display font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-foreground/50 ml-2">/ month</span>}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start text-foreground/80">
                      <Check className="w-5 h-5 text-brand-accent mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {plan.missing.map((feat, j) => (
                    <li key={`missing-${j}`} className="flex items-start text-foreground/30">
                      <X className="w-5 h-5 mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-4">
                  {plan.popular ? (
                      <Link href={plan.href} className="w-full flex justify-center items-center bg-brand-accent text-black px-6 py-4 rounded-xl font-bold hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                        {plan.cta}
                      </Link>
                  ) : (
                    <Link href={plan.href} className="flex justify-center items-center w-full bg-white/5 text-foreground px-6 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors border border-white/10">
                      {plan.cta}
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
