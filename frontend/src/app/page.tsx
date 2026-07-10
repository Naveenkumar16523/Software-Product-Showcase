"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/effects/LogoMarquee";
import { ArrowRight, BarChart3, Box, CheckCircle2, ChevronRight, Cloud, Code, Database, LineChart, Lock, Package, PieChart, Shield, ShoppingCart, Smartphone, Star, Store, Truck, Users, Zap, Cpu, ScanLine, Receipt } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero />
      <LogoMarquee />
      <ProductsSection />
      <FeaturesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <StatsSection />
      <DemoRequestSection />
    </div>
  );
}

// -------------------------------------------------------------
// SECTIONS
// -------------------------------------------------------------

function AnimatedHeading({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.h2 
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}



function ProductsSection() {
  const products = [
    { title: "POS Software", desc: "Fast, reliable point of sale system for seamless checkout.", benefits: ["Offline Mode", "Multi-payment", "Receipt Customization"], icon: <Store /> },
    { title: "Inventory Management", desc: "Track stock levels across multiple locations in real-time.", benefits: ["Barcode Scanning", "Low Stock Alerts", "Supplier POs"], icon: <Package /> },
    { title: "ERP Solution", desc: "Comprehensive enterprise resource planning for large retailers.", benefits: ["Financials", "Supply Chain", "HR Integration"], icon: <Database /> },
    { title: "Retail CRM", desc: "Build lasting relationships with personalized marketing.", benefits: ["Loyalty Points", "Email Campaigns", "Purchase History"], icon: <Users /> },
    { title: "Billing & Accounting", desc: "Automate invoicing and tax compliance effortlessly.", benefits: ["GST Ready", "Automated Invoicing", "Ledger Management"], icon: <BarChart3 /> },
    { title: "Analytics Dashboard", desc: "Make data-driven decisions with powerful insights.", benefits: ["Custom Reports", "Sales Forecasting", "Profit Analysis"], icon: <LineChart /> },
  ];

  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Enterprise Product Suite</h2>
          <p className="text-lg text-gray-600">Everything you need to run your retail business efficiently, unified in one powerful ecosystem.</p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, i) => (
            <motion.div variants={itemVariants} key={i} className="w-full h-[480px] group mx-auto p-2 glass-border overflow-hidden rounded-md text-foreground">
              <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 p-2 rounded-md relative overflow-hidden">
                <div
                  style={{
                    background: 'linear-gradient(123.9deg, #0B65ED 1.52%, rgba(0, 0, 0, 0) 68.91%)',
                  }}
                  className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300"
                ></div>
                <Image
                  src={'/og.jpg'}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 glass-border rounded-xl flex items-center justify-center text-brand-accent shadow-sm z-10 group-hover:bg-white/10 transition-colors">
                  {product.icon}
                </div>
              </figure>
              <article className="p-4 space-y-2 relative">
                <div className="absolute top-4 right-4 h-8 w-20 bg-brand-accent/20 rounded-md"></div>
                <h1 className="text-xl font-semibold capitalize text-foreground mt-2">{product.title}</h1>
                <p className="text-base leading-[120%] text-foreground/70 line-clamp-2">
                  {product.desc}
                </p>
                <Link
                  href="/products"
                  className="text-base text-brand-accent font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex items-center gap-1 transition-all duration-300"
                >
                  Learn about {product.title}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { title: "Point of Sale", icon: <Store /> },
    { title: "Inventory Management", icon: <Package /> },
    { title: "Barcode Support", icon: <ScanLine /> },
    { title: "Cloud Synchronization", icon: <Cloud /> },
    { title: "AI Analytics", icon: <Cpu /> },
    { title: "Customer Loyalty", icon: <Star /> },
    { title: "GST Billing", icon: <Receipt /> },
    { title: "Employee Management", icon: <Users /> },
  ];

  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, y: shouldReduceMotion ? 0 : 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300 } }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
            className="md:w-1/3"
          >
            <AnimatedHeading className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Powerful Features Out of the Box</AnimatedHeading>
            <p className="text-foreground/70 mb-8">Our platform is packed with enterprise-grade features designed to streamline every aspect of your operations.</p>
            <Link href="/products" className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors">
              View all features <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div variants={itemVariants} key={i} className="glass-border p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/10 hover:border-white/20 transition-colors group">
                <div className="text-foreground/40 group-hover:text-brand-accent mb-4 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-sm text-foreground">{feature.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { title: "Supermarkets", desc: "Manage thousands of SKUs and high volume checkouts efficiently.", icon: <ShoppingCart /> },
    { title: "Fashion & Apparel", desc: "Handle variants, sizes, colors, and seasonal inventory.", icon: <ShirtIcon /> },
    { title: "Pharmacy", desc: "Batch tracking, expiry management, and compliance made easy.", icon: <PillIcon /> },
    { title: "Electronics", desc: "Serial number tracking and warranty management.", icon: <Smartphone /> },
  ];

  return (
    <section className="py-24 bg-surface text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading className="text-3xl md:text-4xl font-display font-bold mb-4">Tailored for Your Industry</AnimatedHeading>
          <p className="text-foreground/60 text-lg">We understand that every business is unique. Our solutions are customized to solve specific industry challenges.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="glass-border rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-brand-accent text-black rounded-lg flex items-center justify-center mb-6">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{ind.title}</h3>
              <p className="text-foreground/60 text-sm mb-6">{ind.desc}</p>
              <Link href={`/industries`} className="text-sm font-semibold flex items-center hover:text-brand-accent transition-colors">
                View Solution <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Link href="/industries" className="inline-flex items-center px-6 py-3 border border-white/30 rounded-md font-medium hover:bg-white/10 transition-colors">
              Explore All Industries
           </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    { title: "Secure Cloud Platform", icon: <Cloud /> },
    { title: "Fast Deployment", icon: <Zap /> },
    { title: "24/7 Support", icon: <HeadphonesIcon /> },
    { title: "Enterprise Security", icon: <Shield /> },
    { title: "Scalable Architecture", icon: <Database /> },
    { title: "Affordable Pricing", icon: <WalletIcon /> },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose B&Y Technology</AnimatedHeading>
          <p className="text-foreground/70 text-lg">Built for speed, security, and scale, ensuring your business never stops growing.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
           {reasons.map((r, i) => (
             <div key={i} className="flex flex-col items-center text-center space-y-4 p-6 hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center">
                  {r.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground">{r.title}</h4>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <AnimatedHeading className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Customer Success Stories</AnimatedHeading>
            <p className="text-foreground/70">See how leading retailers transform their business with us.</p>
          </div>
          <Link href="/customers" className="hidden md:inline-flex text-brand-accent font-semibold hover:underline">
            View all stories
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-border rounded-2xl overflow-hidden shadow-soft flex flex-col md:flex-row group cursor-pointer hover:shadow-hover transition-shadow">
            <div className="md:w-2/5 bg-white/5 h-48 md:h-auto relative">
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-foreground font-bold text-2xl group-hover:bg-black/60 transition-colors">
                 FreshMart
               </div>
            </div>
            <div className="p-8 md:w-3/5">
              <div className="text-sm text-brand-accent font-bold mb-2">SUPERMARKETS</div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-brand-accent transition-colors">How FreshMart increased inventory turnover by 45%</h3>
              <p className="text-foreground/70 text-sm mb-6 line-clamp-3">
                By implementing our AI-driven ERP and inventory modules, FreshMart reduced stockouts to near zero across their 50+ locations.
              </p>
              <Link href="/customers" className="text-sm font-semibold flex items-center hover:text-brand-accent transition-colors">
                Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="glass-border rounded-2xl overflow-hidden shadow-soft flex flex-col md:flex-row group cursor-pointer hover:shadow-hover transition-shadow">
            <div className="md:w-2/5 bg-white/5 h-48 md:h-auto relative">
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-foreground font-bold text-2xl group-hover:bg-black/60 transition-colors">
                 StyleHub
               </div>
            </div>
            <div className="p-8 md:w-3/5">
              <div className="text-sm text-brand-accent font-bold mb-2">FASHION & APPAREL</div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-brand-accent transition-colors">StyleHub achieves 2x omnichannel revenue</h3>
              <p className="text-foreground/70 text-sm mb-6 line-clamp-3">
                Integrating online and offline sales with our unified POS solution allowed StyleHub to deliver a seamless shopping experience.
              </p>
              <Link href="/customers" className="text-sm font-semibold flex items-center hover:text-brand-accent transition-colors">
                Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/customers" className="inline-flex text-brand-accent font-semibold hover:underline">
            View all stories
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    { name: "Sarah Jenkins", role: "CTO, MegaRetail", text: "The transition to B&Y Technology was flawless. The platform's scalability is exactly what we needed to support our aggressive expansion plans." },
    { name: "David Chen", role: "Owner, City Pharmacy", text: "Compliance and batch tracking used to be a nightmare. Now, it's completely automated. I sleep much better at night." },
    { name: "Amanda Ross", role: "Director of Operations, StyleHub", text: "The real-time analytics have fundamentally changed how we order seasonal inventory. We've minimized dead stock entirely." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16">Loved by Retail Leaders</AnimatedHeading>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="glass-border p-8 rounded-2xl relative shadow-sm">
              <div className="flex text-amber-400 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
              </div>
              <p className="text-foreground/70 mb-8 italic text-sm md:text-base">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{review.name}</div>
                  <div className="text-sm text-foreground/60">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion || !ref.current) {
      if (ref.current) ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      return;
    }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
        }
      }
    });
  }, { scope: ref });

  return <div ref={ref} className="text-4xl md:text-5xl font-display font-extrabold">{prefix}0{suffix}</div>;
}

function StatsSection() {
  const stats = [
    { label: "Businesses", value: 10000, suffix: "+" },
    { label: "Countries", value: 50, suffix: "+" },
    { label: "Transactions Daily", value: 1, suffix: "M+" },
    { label: "Uptime Guarantee", value: 99.9, suffix: "%", decimals: 1 },
  ];

  return (
    <section className="py-20 bg-brand-accent/10 text-foreground border-y border-brand-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <div className="text-brand-accent font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoRequestSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-border rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-surface/50 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-20"></div>
            <div className="relative z-10">
              <AnimatedHeading className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Ready to see it in action?</AnimatedHeading>
              <p className="text-foreground/80 mb-8 text-lg">
                Schedule a personalized demo with our retail experts and discover how B&Y Technology can transform your business.
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-accent shrink-0" /> Tailored product walkthrough</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-accent shrink-0" /> Answers to your specific questions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-accent shrink-0" /> Custom pricing quote</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 bg-surface">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent bg-background" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent bg-background" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Work Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent bg-background" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent bg-background" placeholder="Acme Retail" />
              </div>
              <button type="submit" className="w-full py-4 bg-brand-accent hover:bg-brand-accent/90 text-black font-bold rounded-lg transition-colors text-lg shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                Schedule Free Demo
              </button>
              <p className="text-xs text-foreground/50 text-center">By submitting, you agree to our Terms of Service and Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Minimal Icons for UI that aren't in lucide-react default
function ScanLineIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>
}

function ReceiptIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
}

function ShirtIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.38 3.46 16 2a24 24 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
}

function PillIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
}

function HeadphonesIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
}

function WalletIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
}
