"use client";
import { motion, useScroll, useTransform, useReducedMotion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/effects/LogoMarquee";
import { ArrowRight, CheckCircle2, ChevronRight, Cloud, Database, Package, Shield, Star, Store, Users, Zap, Cpu, ScanLine, Receipt } from "lucide-react";
import React, { useRef, MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";

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

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const reduce = useReducedMotion();
  const isTouch = typeof window !== "undefined" ? matchMedia("(pointer: coarse)").matches : false;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduce || isTouch ? 0 : rotateX,
        rotateY: reduce || isTouch ? 0 : rotateY,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal as="div" intensity="bold" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Enterprise Product Suite</h2>
          <p className="text-lg text-foreground/70">Everything you need to run your retail business efficiently, unified in one powerful ecosystem.</p>
        </Reveal>
        
        <RevealGroup stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <Reveal key={i} as="div" intensity="bold">
              <TiltCard className="w-full h-[480px] group mx-auto p-2 glass-border overflow-hidden rounded-md text-foreground cursor-pointer">
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
                  <div className="absolute top-4 left-4 w-12 h-12 glass-border rounded-xl flex items-center justify-center text-brand-accent shadow-sm z-10 group-hover:bg-white/10 transition-colors" style={{ transform: "translateZ(30px)" }}>
                    {product.icon}
                  </div>
                </figure>
                <article className="p-4 space-y-2 relative" style={{ transform: "translateZ(20px)" }}>
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
              </TiltCard>
            </Reveal>
          ))}
        </RevealGroup>
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

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <Reveal as="div" intensity="bold" className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Powerful Features Out of the Box</h2>
            <p className="text-foreground/70 mb-8">Our platform is packed with enterprise-grade features designed to streamline every aspect of your operations.</p>
            <Link href="/products" className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors">
              View all features <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Reveal>
          <RevealGroup stagger={0.05} className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <Reveal as="div" intensity="bold" key={i} className="glass-border p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/10 hover:border-white/20 transition-colors group">
                <div className="text-foreground/40 group-hover:text-brand-accent mb-4 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-sm text-foreground">{feature.title}</h4>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(() => {
    if (reduce || !containerRef.current || !scrollWrapperRef.current) return;
    
    // Check if mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const sections = gsap.utils.toArray(".industry-card");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + scrollWrapperRef.current!.offsetWidth
      }
    });
  }, { scope: containerRef, dependencies: [reduce] });

  return (
    <section ref={containerRef} className="py-24 bg-surface text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <Reveal as="div" intensity="bold" className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Tailored for Your Industry</h2>
          <p className="text-foreground/60 text-lg">We understand that every business is unique. Our solutions are customized to solve specific industry challenges.</p>
        </Reveal>
      </div>
      
      {/* Scroll Wrapper */}
      <div className="overflow-hidden">
        <div ref={scrollWrapperRef} className="flex md:flex-row flex-col md:w-[400vw] lg:w-[300vw] w-full px-4 md:px-6 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="industry-card md:w-[80vw] lg:w-[70vw] w-full shrink-0 flex items-center justify-center">
               <div className="glass-border rounded-2xl p-10 md:p-16 hover:bg-white/10 transition-colors w-full h-full flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-brand-accent text-black rounded-xl flex items-center justify-center mb-8">
                    {React.cloneElement(ind.icon as React.ReactElement<any>, { size: 40 })}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{ind.title}</h3>
                  <p className="text-foreground/60 text-lg md:text-xl mb-10 max-w-2xl">{ind.desc}</p>
                  <Link href={`/industries`} className="text-lg font-semibold flex items-center hover:text-brand-accent transition-colors">
                    View Solution <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    { title: "Secure Cloud Platform", icon: <Cloud /> },
    { title: "Fast Deployment", icon: <Zap /> },
    { title: "24/7 Support", icon: <Star /> }, // Used star instead of headphones as placeholder
    { title: "Enterprise Security", icon: <Shield /> },
    { title: "Scalable Architecture", icon: <Database /> },
    { title: "Affordable Pricing", icon: <Store /> }, // Used store instead of wallet
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal as="div" intensity="bold" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose B&Y Technology</h2>
          <p className="text-foreground/70 text-lg">Built for speed, security, and scale, ensuring your business never stops growing.</p>
        </Reveal>
        <RevealGroup stagger={0.1} className="grid grid-cols-2 md:grid-cols-3 gap-8">
           {reasons.map((r, i) => (
             <Reveal as="div" intensity="bold" key={i} className="flex flex-col items-center text-center space-y-4 p-6 hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center">
                  {r.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground">{r.title}</h4>
             </Reveal>
           ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <Reveal as="div" intensity="bold">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Customer Success Stories</h2>
            <p className="text-foreground/70">See how leading retailers transform their business with us.</p>
          </Reveal>
          <Reveal as="div" intensity="bold">
             <Link href="/customers" className="hidden md:inline-flex text-brand-accent font-semibold hover:underline">
               View all stories
             </Link>
          </Reveal>
        </div>
        
        <RevealGroup stagger={0.1} className="grid md:grid-cols-2 gap-8">
          <Reveal as="div" intensity="bold" className="glass-border rounded-2xl overflow-hidden shadow-soft flex flex-col md:flex-row group cursor-pointer hover:shadow-hover transition-shadow">
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
          </Reveal>
          <Reveal as="div" intensity="bold" className="glass-border rounded-2xl overflow-hidden shadow-soft flex flex-col md:flex-row group cursor-pointer hover:shadow-hover transition-shadow">
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
          </Reveal>
        </RevealGroup>
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
        <Reveal as="div" intensity="bold" className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Loved by Retail Leaders</h2>
        </Reveal>
        <RevealGroup stagger={0.1} className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Reveal as="div" intensity="bold" key={i} className="glass-border p-8 rounded-2xl relative shadow-sm">
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
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(() => {
    if (reduce || !ref.current) {
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
  
  const reduce = useReducedMotion();

  return (
    <section className="py-20 bg-brand-accent/10 text-foreground border-y border-brand-accent/20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: reduce ? 1 : 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <div className="text-brand-accent font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function DemoRequestSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);
  const reduce = useReducedMotion();

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal as="div" intensity="bold" className="glass-border rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_0_50px_rgba(163,230,53,0.05)]">
          <div className="lg:w-1/2 bg-surface/50 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <motion.div 
              style={{ y: reduce ? 0 : y }}
              className="absolute inset-[-50px] bg-[url('/grid-dark.svg')] opacity-20"
            ></motion.div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Ready to see it in action?</h2>
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
          <div className="lg:w-1/2 p-8 md:p-12 bg-surface relative z-10">
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
              <button type="submit" data-cursor="hover" className="w-full py-4 bg-brand-accent hover:bg-brand-accent/90 text-black font-bold rounded-lg transition-colors text-lg shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                Schedule Free Demo
              </button>
              <p className="text-xs text-foreground/50 text-center">By submitting, you agree to our Terms of Service and Privacy Policy.</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
