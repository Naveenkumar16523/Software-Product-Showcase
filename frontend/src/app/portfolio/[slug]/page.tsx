"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function PortfolioCaseStudy() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  // In a real scenario, fetch the specific project by slug from the API.
  // Using static placeholder data here to match the design prompt constraints.

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": String(slug).replace(/-/g, ' '),
    "publisher": {
      "@type": "Organization",
      "name": "B & Y Technology",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bnytechnologies.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bnytechnologies.com/portfolio/${slug}`
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-brand-accent transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 capitalize">
              {String(slug).replace(/-/g, ' ')}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              A comprehensive case study showcasing our methodology and the technical solutions applied to deliver measurable business impact.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["React", "Spring Boot", "PostgreSQL", "Kafka"].map(tech => (
                <span key={tech} className="px-3 py-1 text-sm font-medium bg-surface text-foreground rounded-full border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-brand-accent">The Problem</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our client was facing significant operational bottlenecks due to a legacy monolithic architecture. 
              The system could not scale to meet peak demand, resulting in frequent downtimes and a degraded user experience. 
              Data silos prevented real-time analytics, making it difficult for the executive team to make informed, data-driven decisions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-brand-accent">Our Approach</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              We proposed a phased migration to a cloud-native, microservices-based architecture. 
              This allowed us to decouple critical services without disrupting ongoing business operations.
            </p>
            <ul className="space-y-4">
              {[
                "Conducted a comprehensive architectural audit and domain-driven design workshops.",
                "Implemented event-driven communication using Apache Kafka to ensure data consistency.",
                "Containerized services using Docker and orchestrated deployments via Kubernetes.",
                "Established CI/CD pipelines for automated testing and zero-downtime deployments."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-brand-accent">The Outcome</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-surface border border-border rounded-xl text-center">
                <div className="text-4xl font-bold text-foreground mb-2">99.99%</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider">Uptime</div>
              </div>
              <div className="p-6 bg-surface border border-border rounded-xl text-center">
                <div className="text-4xl font-bold text-foreground mb-2">40%</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider">Cost Reduction</div>
              </div>
              <div className="p-6 bg-surface border border-border rounded-xl text-center">
                <div className="text-4xl font-bold text-foreground mb-2">10x</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider">Deploy Speed</div>
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The new architecture successfully handled a 300% surge in traffic during the peak season with zero degradation in performance. 
              The organization can now release new features daily instead of quarterly, significantly accelerating their time-to-market.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="pt-10 border-t border-border flex justify-center"
          >
            <Link 
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-md bg-brand-accent px-8 text-base font-medium text-black transition-colors hover:bg-brand-accent/90"
            >
              Start Your Project
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
