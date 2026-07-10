"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { StatsBlock } from "@/components/ui/stats-block";

const TEAM = [
  { name: "Jane Doe", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "John Smith", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Alice Johnson", role: "Lead Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Bob Williams", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            We are a team of passionate engineers and designers dedicated to building software that empowers enterprises.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-accent">Our Mission</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            To bridge the gap between complex business challenges and elegant, scalable technological solutions. We believe in writing code that not only functions flawlessly today but scales effortlessly tomorrow.
          </p>
        </div>
      </section>

      <StatsBlock />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-accent">Meet The Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col items-center bg-surface border border-border p-6 rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-colors text-center"
              >
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-brand-accent/20 group-hover:border-brand-accent transition-colors">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={128} 
                    height={128} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-brand-accent/80 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
