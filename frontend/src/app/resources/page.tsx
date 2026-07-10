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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-600">Expert advice, industry trends, and deep dives into making the most of your retail software.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Featured Resource */}
        <div className="bg-primary-900 text-white rounded-3xl overflow-hidden mb-16 flex flex-col md:flex-row shadow-xl">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-primary-800 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 self-start">New eBook</span>
            <h2 className="text-3xl font-bold mb-4">Retail Resilience: Thriving in an Economic Downturn</h2>
            <p className="text-primary-200 mb-8">Learn actionable strategies to cut costs, optimize inventory, and retain customers using data-driven insights.</p>
            <button className="bg-white text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors self-start">
              Download Free eBook
            </button>
          </div>
          <div className="md:w-1/2 bg-primary-800 p-12 flex items-center justify-center">
             <div className="w-64 h-80 bg-white rounded-lg shadow-2xl flex items-center justify-center text-primary-900 font-bold text-2xl rotate-3">
               eBook Cover
             </div>
          </div>
        </div>

        {/* Resource Grid */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Content</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <Link key={i} href="#" className="bg-white p-6 rounded-2xl border border-border hover:shadow-hover hover:border-primary-200 transition-all group flex flex-col">
              <div className="text-primary-600 mb-4 bg-primary-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {res.icon}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{res.category}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex-grow">{res.title}</h4>
              <div className="text-sm text-primary-600 font-medium">Read more &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
