"use client";

import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { products } from "@/lib/data/products";
import React from "react";
import { ProductScrollyTelling } from "@/components/ui/ProductScrollyTelling";

export default function ProductsClient() {
  return (
    <div className="bg-background min-h-screen">
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

      {/* GSAP ScrollyTelling Section */}
      <ProductScrollyTelling />

      {/* Products Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4">
          <RevealGroup stagger={0.1} className="space-y-24">
            {products.map((product, idx) => (
              <Reveal 
                as="div"
                key={idx}
                intensity="subtle"
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                {/* Visual Side: Icon in Gradient Tile */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden glass-border p-8 bg-surface flex flex-col items-center justify-center group hover:border-white/20 hover:bg-white/5 transition-all duration-500">
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, var(--color-brand-accent) 0%, transparent 100%)` }}></div>
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-black/50 glass-border flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 transition-transform duration-500">
                      {React.cloneElement(product.icon as React.ReactElement<any>, { size: 48 })}
                    </div>
                    <div className="relative z-10 text-2xl font-bold text-foreground/50 group-hover:text-foreground transition-colors duration-500">{product.title}</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-accent/10 text-brand-accent mb-2">
                    {product.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  <ul className="space-y-3 pt-2">
                    {product.benefits.map((feature, i) => (
                      <li key={i} className="flex items-center text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-brand-accent mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <MagneticButton>
                      <Link href={`/products`} className="inline-flex items-center h-12 px-6 rounded-lg bg-brand-accent text-black font-bold hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                        Explore {product.title} <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
