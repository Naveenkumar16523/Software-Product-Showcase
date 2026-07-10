import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | B & Y Technology",
  description: "Retail software solutions for various industries.",
};

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Industries We Serve</h1>
      <p className="text-xl text-foreground/70 mb-12">Tailored solutions for every retail sector.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="glass-border rounded-xl p-6 shadow-card hover:shadow-hover hover:bg-white/10 transition-colors group">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Fashion & Apparel</h2>
          <p className="text-foreground/70 mb-6">Manage complex size/color matrices and seasonal inventory.</p>
          <Link href="/industries/fashion" className="text-brand-accent font-semibold group-hover:text-brand-accent/80 transition-colors">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
