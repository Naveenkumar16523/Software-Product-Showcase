"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingCart, ShirtIcon, Smartphone, PillIcon, Laptop, BookOpen } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const industries = [
  {
    title: "Supermarkets",
    desc: "High-volume POS, fast checkout, and robust inventory management for perishables.",
    icon: <ShoppingCart className="w-8 h-8" />
  },
  {
    title: "Fashion & Apparel",
    desc: "Matrix inventory for sizes and colors, seasonal catalogs, and omnichannel integration.",
    icon: <ShirtIcon className="w-8 h-8" />
  },
  {
    title: "Electronics",
    desc: "Serial number tracking, warranties, bundle deals, and repair ticketing.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Pharmacy",
    desc: "Compliance tracking, expiry date alerts, and prescription management workflows.",
    icon: <PillIcon className="w-8 h-8" />
  },
  {
    title: "IT & Software",
    desc: "Subscription billing, digital product fulfillment, and license management.",
    icon: <Laptop className="w-8 h-8" />
  },
  {
    title: "Bookstores",
    desc: "ISBN tracking, publisher integrations, and pre-order management.",
    icon: <BookOpen className="w-8 h-8" />
  }
];

export default function IndustriesClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300 } }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-background to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6"
          >
            Industries We <span className="text-brand-accent">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
          >
            From boutique apparel to massive supermarket chains, our ecosystem adapts to your specific retail vertical seamlessly.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="glass-border rounded-xl p-8 hover:bg-white/5 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
                <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{ind.title}</h2>
                <p className="text-foreground/70 mb-8">{ind.desc}</p>
                <Link href="/solutions" className="inline-flex items-center text-brand-accent font-semibold group-hover:text-brand-accent/80 transition-colors">
                  Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
