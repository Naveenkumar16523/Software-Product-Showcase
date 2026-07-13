"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Cpu, Database } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const products = [
  {
    id: "retail-os",
    title: "RetailOS",
    description: "Complete omnichannel retail management system for enterprise operations.",
    icon: <Box className="w-6 h-6" />,
    image: "/retail_dashboard_ui.png",
    features: ["Omnichannel POS", "CRM", "Advanced Reporting"],
  },
  {
    id: "inventory-ai",
    title: "InventoryAI",
    description: "Predictive inventory management powered by advanced machine learning models.",
    icon: <Cpu className="w-6 h-6" />,
    image: "/inventory_analytics_ui.png",
    features: ["Demand Forecasting", "Automated Reordering", "Waste Reduction"],
  },
  {
    id: "point-of-sale",
    title: "Seamless POS",
    description: "Lightning-fast, reliable Point of Sale interface designed for modern hardware.",
    icon: <Database className="w-6 h-6" />,
    image: "/pos_interface_ui.png",
    features: ["Offline Mode", "Integrated Payments", "Staff Management"],
  }
];

export default function ProductsClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300 } }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/10 to-background/0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6"
          >
            Our <span className="text-brand-accent">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
          >
            Discover our suite of intelligent retail software solutions designed for massive scale and ultimate performance.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-24"
          >
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden glass-border p-2 bg-surface">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <Image 
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-lg"
                    />
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
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 pt-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-brand-accent mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <MagneticButton>
                      <Link href={`/products/${product.id}`} className="inline-flex items-center h-12 px-6 rounded-lg bg-brand-accent text-black font-bold hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                        Explore {product.title} <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
