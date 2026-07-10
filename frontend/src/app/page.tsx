"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Cloud, Shield, Database, Cpu, ChevronRight } from "lucide-react";
import { StatsBlock } from "@/components/ui/stats-block";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 xl:py-40 bg-background overflow-hidden">
        {/* Glow effect */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: 'radial-gradient(circle at 50% -20%, oklch(0.85 0.16 125 / 0.25) 0%, transparent 60%)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-sm font-medium text-brand-accent tracking-wide"
            >
              🚀 Transforming Ideas into Digital Reality
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-brand-accent to-green-400"
            >
              Empowering Your Future with Next-Gen Technology
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mx-auto max-w-[700px] text-foreground/70 md:text-xl leading-relaxed"
            >
              B & Y Technology specializes in AI solutions, scalable cloud architecture, and custom enterprise software to accelerate your digital transformation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-brand-accent px-8 py-3 text-sm font-semibold text-black shadow transition-all hover:bg-brand-accent/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background h-12">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent h-12">
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsBlock />

      {/* Services Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">Our Core Services</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">We deliver end-to-end solutions tailored to your unique business needs.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <Code className="w-6 h-6 text-brand-accent" />, title: "Custom Software", desc: "Tailor-made enterprise applications designed for scale and performance." },
              { icon: <Smartphone className="w-6 h-6 text-brand-accent" />, title: "Mobile Apps", desc: "Native and cross-platform mobile solutions for iOS and Android." },
              { icon: <Cloud className="w-6 h-6 text-brand-accent" />, title: "Cloud Solutions", desc: "Cloud migration, architecture, and management on AWS, Azure & GCP." },
              { icon: <Cpu className="w-6 h-6 text-brand-accent" />, title: "AI & ML", desc: "Intelligent AI-powered systems and predictive data analytics." },
              { icon: <Shield className="w-6 h-6 text-brand-accent" />, title: "Cybersecurity", desc: "Robust security audits, compliance, and infrastructure protection." },
              { icon: <Database className="w-6 h-6 text-brand-accent" />, title: "Data Analytics", desc: "Transform your raw data into actionable business intelligence." },
            ].map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <StripeCard title={service.title} desc={service.desc} icon={service.icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Transform Your Business?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-10 text-lg">
            Let's discuss how our cutting-edge technologies can help you achieve your goals. Our experts are ready to provide a free consultation.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-brand-accent px-10 py-4 text-base font-bold text-black shadow-lg shadow-brand-accent/20 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

function StripeCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className='w-full h-[400px] group mx-auto bg-surface border border-border overflow-hidden rounded-xl text-foreground flex flex-col hover:border-brand-accent/50 transition-colors duration-500'>
      <figure className='w-full h-48 group-hover:h-40 transition-all duration-500 bg-background/50 p-4 relative overflow-hidden flex-shrink-0'>
        <div
          style={{
            background: 'linear-gradient(123.9deg, var(--color-brand-accent) 1.52%, rgba(0, 0, 0, 0) 68.91%)',
          }}
          className='absolute top-0 left-0 w-full h-full group-hover:opacity-20 opacity-5 transition-all duration-500'
        ></div>
        
        {/* Placeholder graphic showing abstract tech representation */}
        <div className='absolute -bottom-4 group-hover:-bottom-2 right-4 h-32 w-32 bg-surface border border-border group-hover:border-brand-accent/30 rounded-lg transform rotate-12 group-hover:rotate-6 transition-all duration-500 shadow-xl flex items-center justify-center'>
            <div className="opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform scale-150 group-hover:scale-110">
                {icon}
            </div>
        </div>
      </figure>
      
      <article className='p-6 space-y-4 flex-grow flex flex-col justify-between'>
        <div>
          <div className='h-1 w-12 bg-brand-accent rounded-full mb-4'></div>
          <h3 className='text-xl font-bold tracking-tight text-foreground'>{title}</h3>
          <p className='text-sm leading-relaxed text-foreground/60 mt-2 line-clamp-3'>
            {desc}
          </p>
        </div>
        
        <Link
          href='/services'
          className='text-sm text-brand-accent font-medium group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 flex items-center gap-1 transition-all duration-300'
        >
          Learn more
          <ChevronRight className="w-4 h-4" />
        </Link>
      </article>
    </div>
  );
}
