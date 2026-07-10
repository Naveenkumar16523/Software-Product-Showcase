import Link from "next/link";
import { ArrowRight, ShoppingCart, ShirtIcon, Smartphone, PillIcon, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions by Industry",
  description: "Enterprise software solutions tailored for retail, fashion, pharmacy, and electronics industries.",
};

const industries = [
  {
    title: "Supermarkets & Grocery",
    desc: "Manage thousands of SKUs, handle high volume checkouts efficiently, and automate restocking.",
    features: ["Batch & Expiry tracking", "Fast checkout POS", "Weighing scale integration", "Vendor management"],
    icon: <ShoppingCart className="w-8 h-8" />
  },
  {
    title: "Fashion & Apparel",
    desc: "Handle complex variants, sizes, colors, and seasonal inventory across multiple stores.",
    features: ["Size & Color matrix", "Loyalty programs", "Omnichannel syncing", "Store transfers"],
    icon: <ShirtIcon className="w-8 h-8" />
  },
  {
    title: "Pharmacy & Healthcare",
    desc: "Ensure compliance, batch tracking, expiry management, and prescription handling.",
    features: ["FDA Compliance", "Substitute medicines", "Refrigeration alerts", "Supplier integration"],
    icon: <PillIcon className="w-8 h-8" />
  },
  {
    title: "Electronics & Appliances",
    desc: "Track serial numbers, manage warranties, and handle after-sales service requests.",
    features: ["IMEI/Serial tracking", "Warranty management", "Repair ticketing", "Bundle pricing"],
    icon: <Smartphone className="w-8 h-8" />
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20 px-4 mb-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Tailored Solutions for Every Retailer</h1>
          <p className="text-xl text-primary-200">Discover how B&Y Technology addresses the unique challenges of your industry with our specialized software suites.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industries.map((ind, i) => (
            <div key={i} className="bg-surface rounded-2xl border border-border p-8 hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                {ind.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{ind.title}</h2>
              <p className="text-gray-600 mb-6">{ind.desc}</p>
              
              <h3 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h3>
              <ul className="space-y-2 mb-8">
                {ind.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/request-demo" className="text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors">
                Request a Demo <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-3xl p-12 text-center max-w-4xl mx-auto border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see your industry?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Our platform is highly customizable. Talk to our experts to learn how we can adapt our software to your specific business model.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
}
