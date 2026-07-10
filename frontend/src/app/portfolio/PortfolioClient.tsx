"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  imageUrl: string | null;
  liveUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
}

const FALLBACK_PROJECTS: PortfolioItem[] = [
  {
    id: 1,
    title: "Global FinTech Platform",
    summary: "A high-performance trading platform processing millions of transactions daily.",
    description: "We architected and built a microservices-based trading platform using Spring Boot and React, achieving 99.99% uptime and sub-millisecond latency.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Kafka"],
    imageUrl: null,
    liveUrl: "#",
    repoUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Analytics Dashboard",
    summary: "Real-time patient monitoring and analytics for a regional hospital network.",
    description: "Developed a HIPAA-compliant data pipeline and visualization dashboard to predict patient admittance rates with 85% accuracy using ML.",
    techStack: ["Next.js", "Python", "TensorFlow", "AWS"],
    imageUrl: null,
    liveUrl: null,
    repoUrl: "#",
    featured: false
  },
  {
    id: 3,
    title: "E-Commerce Mobile App",
    summary: "Cross-platform mobile application for a luxury retail brand.",
    description: "Built a seamless shopping experience with AR try-on features, resulting in a 40% increase in mobile conversions.",
    techStack: ["React Native", "Node.js", "GraphQL", "MongoDB"],
    imageUrl: null,
    liveUrl: "#",
    repoUrl: null,
    featured: false
  }
];

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/portfolio" || "http://localhost:8080/api/portfolio");
        if (!res.ok) throw new Error("API not reachable");
        const data = await res.json();
        setProjects(data.length > 0 ? data : FALLBACK_PROJECTS);
      } catch (error) {
        console.warn("Falling back to placeholder portfolio data:", error);
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Explore how we've helped enterprises transform their operations through cutting-edge technology.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between bg-surface border border-border p-8 rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                      <Link href={`/portfolio/${slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-foreground/70 mb-6">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm font-medium text-brand-accent">
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
