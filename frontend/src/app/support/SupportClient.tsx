"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HelpCircle, Book, MessageCircle, FileText, Ticket, PlayCircle, Search } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const supportOptions = [
  { title: "Documentation", desc: "Detailed technical guides and API references.", icon: <Book />, link: "/support" },
  { title: "Knowledge Base", desc: "Articles, tutorials, and troubleshooting.", icon: <FileText />, link: "/support" },
  { title: "FAQs", desc: "Quick answers to common questions.", icon: <HelpCircle />, link: "/support" },
  { title: "Video Tutorials", desc: "Step-by-step visual guides.", icon: <PlayCircle />, link: "/support" },
  { title: "Live Chat", desc: "Chat with our support agents in real-time.", icon: <MessageCircle />, link: "#chat" },
  { title: "Ticket System", desc: "Submit a specialized support request.", icon: <Ticket />, link: "/contact" },
];

export default function SupportClient() {
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
            How can we <span className="text-brand-accent">help</span> you?
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto relative mt-10"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-foreground/50">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers, guides, and tutorials..." 
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-surface/80 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent placeholder:text-foreground/40 text-lg shadow-[0_0_30px_rgba(163,230,53,0.05)] backdrop-blur-md transition-all duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Support Grid */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {supportOptions.map((opt, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link href={opt.link} className="block h-full glass-border p-8 rounded-2xl hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] hover:border-brand-accent/50 hover:bg-white/5 transition-all duration-300 group">
                  <div className="text-brand-accent mb-6 bg-brand-accent/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-300">
                    {opt.icon}
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-accent transition-colors">{opt.title}</h2>
                  <p className="text-foreground/60 leading-relaxed">{opt.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 glass-border rounded-3xl p-12 text-center relative overflow-hidden bg-white/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Still need help?</h2>
            <p className="text-foreground/70 mb-10 max-w-xl mx-auto text-lg">
              Our dedicated support team is available 24/7 to assist you with any technical issues or account inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagneticButton>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 h-14 bg-brand-accent text-black font-bold rounded-xl hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)] w-full sm:w-auto">
                  Contact Support
                </Link>
              </MagneticButton>
              <Link href="tel:+919941070555" className="inline-flex items-center justify-center px-8 h-14 bg-transparent text-foreground border border-white/20 font-semibold rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto">
                Call +91 99410 70555
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
