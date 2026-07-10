import Link from "next/link";
import { BookOpen, FileText, Video, Calendar } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description: "Guides, blogs, webinars, and documentation for retail software.",
};

const resources = [
  { type: "Blog", title: "The Future of Retail: 2026 Trends to Watch", category: "Industry Insights", icon: <FileText /> },
  { type: "Guide", title: "Definitive Guide to Inventory Management", category: "Best Practices", icon: <BookOpen /> },
  { type: "Webinar", title: "Mastering Omnichannel Sales with B&Y", category: "Product Training", icon: <Video /> },
  { type: "Event", title: "RetailTech Summit 2026", category: "Conferences", icon: <Calendar /> },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      {/* Header */}
      <div className="bg-surface border-b border-border py-20 px-4 mb-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Resources & Insights</h1>
          <p className="text-xl text-foreground/70">Expert advice, industry trends, and deep dives into making the most of your retail software.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Featured Resource */}
        <div className="glass-border rounded-3xl overflow-hidden mb-16 flex flex-col md:flex-row shadow-[0_0_20px_rgba(163,230,53,0.1)]">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-accent rounded-full text-xs font-semibold tracking-wide uppercase mb-4 self-start">New eBook</span>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Retail Resilience: Thriving in an Economic Downturn</h2>
            <p className="text-foreground/80 mb-8">Learn actionable strategies to cut costs, optimize inventory, and retain customers using data-driven insights.</p>
            <button className="bg-brand-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-accent/90 transition-colors self-start shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
              Download Free eBook
            </button>
          </div>
          <div className="md:w-1/2 bg-surface p-12 flex items-center justify-center">
             <div className="w-64 h-80 bg-background border border-border rounded-lg shadow-2xl flex items-center justify-center text-foreground font-bold text-2xl rotate-3">
               eBook Cover
             </div>
          </div>
        </div>

        {/* Resource Grid */}
        <h3 className="text-2xl font-bold text-foreground mb-8">Latest Content</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <Link key={i} href="#" className="glass-border p-6 rounded-2xl hover:shadow-hover hover:border-brand-accent/50 hover:bg-white/10 transition-all group flex flex-col">
              <div className="text-brand-accent mb-4 bg-brand-accent/20 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {res.icon}
              </div>
              <div className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-2">{res.category}</div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex-grow">{res.title}</h4>
              <div className="text-sm text-brand-accent font-medium">Read more &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
