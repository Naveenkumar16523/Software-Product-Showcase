"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const customers = [
  {
    name: "FreshMart",
    industry: "Supermarkets",
    logo: "FM",
    challenge: "Frequent stockouts and high spoilage rates due to manual inventory tracking.",
    solution: "Implemented B&Y ERP with real-time inventory and predictive ordering.",
    result: "45% increase in inventory turnover and 30% reduction in spoilage.",
  },
  {
    name: "StyleHub",
    industry: "Fashion & Apparel",
    logo: "SH",
    challenge: "Disconnected online and offline systems leading to poor customer experience.",
    solution: "Unified Omnichannel POS and CRM integration.",
    result: "2x omnichannel revenue and a 40% increase in customer loyalty program engagement.",
  },
  {
    name: "City Pharmacy",
    industry: "Healthcare",
    logo: "CP",
    challenge: "Struggled with compliance and tracking near-expiry medications across 20 branches.",
    solution: "Pharmacy-specific module with automated batch tracking and alerts.",
    result: "Zero compliance violations in 2 years and 90% reduction in expired stock losses.",
  },
  {
    name: "ElectroWorld",
    industry: "Electronics",
    logo: "EW",
    challenge: "Inefficient warranty management and repair ticketing system.",
    solution: "Custom CRM with serial number tracking and integrated ticketing.",
    result: "Customer satisfaction score (CSAT) improved from 3.2 to 4.8 out of 5.",
  }
];

export default function CustomersClient() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6"
          >
            Customer <span className="text-brand-accent">Success</span> Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
          >
            See how businesses of all sizes use our platform to drive growth, increase efficiency, and delight their customers.
          </motion.p>
        </div>
      </section>

      {/* Testimonial Feature */}
      <section className="pb-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-border rounded-3xl p-10 md:p-16 max-w-6xl mx-auto bg-brand-accent/5 border-brand-accent/30 relative overflow-hidden"
          >
            <Quote className="absolute -top-6 -left-6 w-32 h-32 text-brand-accent/10 rotate-180" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-1 mb-6 text-brand-accent">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="fill-brand-accent" />)}
                </div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6 leading-tight">
                  "B&Y Technology completely transformed our retail operations. We scaled from 10 to 50 stores seamlessly without any downtime."
                </h3>
                <div className="font-semibold text-foreground text-lg">Sarah Jenkins</div>
                <div className="text-foreground/50">CTO, National Retail Group</div>
              </div>
              <div className="flex justify-center md:justify-end">
                 <div className="text-center p-8 glass-border rounded-2xl w-full max-w-sm bg-black/40">
                    <div className="text-6xl font-extrabold text-brand-accent mb-2">300%</div>
                    <div className="text-foreground/80 font-medium">ROI in the first 6 months</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {customers.map((customer, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="glass-border rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] hover:border-brand-accent/50 transition-all duration-300 bg-white/5"
              >
                <div className="md:w-1/3 bg-black/60 group-hover:bg-brand-accent/10 transition-colors text-foreground flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-5xl font-display font-extrabold text-white group-hover:text-brand-accent transition-colors mb-2 relative z-10">{customer.logo}</div>
                  <div className="text-xs font-bold opacity-70 uppercase tracking-widest text-center relative z-10">{customer.industry}</div>
                </div>
                <div className="md:w-2/3 p-8 flex flex-col relative z-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-brand-accent transition-colors">{customer.name}</h2>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">The Challenge</span>
                    <p className="text-foreground/80 mt-1">{customer.challenge}</p>
                  </div>
                  <div className="mb-6 flex-grow">
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">The Result</span>
                    <p className="text-brand-accent font-semibold mt-1">{customer.result}</p>
                  </div>
                  <Link href={`/customers/${customer.name.toLowerCase()}`} className="inline-flex items-center text-foreground font-semibold group-hover:text-brand-accent transition-colors mt-auto">
                    Read Full Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
