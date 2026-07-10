"use client";
import { Award, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "Innovation First", desc: "We constantly push the boundaries of retail technology." },
    { title: "Customer Success", desc: "Your growth is the only metric that matters to us." },
    { title: "Enterprise Reliability", desc: "We build systems that never sleep and never fail." },
    { title: "Data Privacy", desc: "Security and confidentiality are built into our core." },
  ];

  const leaders = [
    { name: "John Smith", role: "CEO & Founder", bio: "Former VP of Engineering at a Fortune 500 retail brand with 20+ years of experience in enterprise SaaS.", img: "JS" },
    { name: "Sarah Jenkins", role: "Chief Technology Officer", bio: "AI specialist and cloud architecture expert. Leads our global engineering team.", img: "SJ" },
    { name: "Michael Chen", role: "Head of Product", bio: "Obsessed with UI/UX. Ensuring our software remains the most intuitive in the market.", img: "MC" },
  ];

  const awards = [
    { year: "2025", title: "Best Retail Software", org: "SaaS Excellence Awards" },
    { year: "2024", title: "Innovation Award in AI", org: "Tech Innovators Summit" },
    { year: "2023", title: "Customer Choice Award", org: "RetailTech Weekly" },
    { year: "2022", title: "Technology Excellence", org: "Global Software Awards" },
  ];

  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      {/* Hero */}
      <div className="bg-surface border-b border-border text-foreground py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">Building the Future of Retail</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Since our founding, B&Y Technology has been driven by a singular mission: to democratize enterprise-grade software for retailers of all sizes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl -mt-10 relative z-10">
        
        {/* Story & Vision */}
        <div className="glass-border rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-foreground/80 mb-6">
                B&Y Technology started when we noticed a massive gap in the market: large retailers had access to incredibly powerful predictive software, while mid-market and growing retailers were stuck with disjointed legacy systems.
              </p>
              <p className="text-foreground/80">
                We built our platform to level the playing field. Today, thousands of businesses rely on our unified SaaS ecosystem to manage their inventory, engage their customers, and scale their operations globally.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-foreground/80 mb-6">
                To become the central operating system for global commerce, where every transaction, inventory movement, and customer interaction is optimized by intelligent automation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="glass-border p-6 rounded-2xl">
                <div className="w-10 h-10 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center font-bold mb-4">0{i+1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{val.title}</h3>
                <p className="text-foreground/70 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div id="leadership" className="mb-24 pt-10">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="glass-border rounded-2xl overflow-hidden group hover:shadow-hover hover:border-brand-accent/50 hover:bg-white/10 transition-colors">
                <div className="h-64 bg-black/40 flex items-center justify-center text-4xl font-bold text-foreground/20 group-hover:bg-black/60 transition-colors">
                  {leader.img}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                  <div className="text-brand-accent font-semibold text-sm mb-4">{leader.role}</div>
                  <p className="text-foreground/70 text-sm mb-6 line-clamp-3">{leader.bio}</p>
                  <a href="#" className="inline-flex text-foreground/40 hover:text-brand-accent transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Timeline */}
        <div className="mb-24 glass-border rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">Awards & Recognition</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {awards.map((award, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 bg-surface/50 p-6 rounded-2xl border border-border shadow-sm hover:border-brand-accent/50 transition-colors">
                <div className="text-2xl font-bold text-brand-accent">{award.year}</div>
                <div className="w-12 h-12 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
                  <div className="text-foreground/70">{award.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offices */}
        <div>
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">Global Offices</h2>
          <div className="glass-border rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Chennai Headquarters</h3>
                <p className="text-foreground/50 font-medium">B & Y Technology</p>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="text-foreground/80">No.624, Khivraj Building, Anna Salai,<br/>Chennai-600006<br/>LM.Gemini Flyover</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-6 h-6 text-brand-accent shrink-0" />
                  <div>
                    <a href="tel:+919941070555" className="block text-foreground/80 hover:text-brand-accent">+91 99410 70555</a>
                    <a href="tel:+918667735575" className="block text-foreground/80 hover:text-brand-accent mt-1">+91 86677 35575</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-6 h-6 text-brand-accent shrink-0" />
                  <a href="mailto:info@bnytechnologies.com" className="text-foreground/80 hover:text-brand-accent">info@bnytechnologies.com</a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-black/40 min-h-[300px] relative">
               <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-foreground/40 font-bold text-xl border-l border-border">
                 Interactive Map Integration
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
