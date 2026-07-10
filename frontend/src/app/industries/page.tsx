import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | B & Y Technology",
  description: "Retail software solutions for various industries.",
};

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-display font-bold mb-8">Industries We Serve</h1>
      <p className="text-xl text-gray-600 mb-12">Tailored solutions for every retail sector.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100 hover:shadow-hover transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Fashion & Apparel</h2>
          <p className="text-gray-600 mb-6">Manage complex size/color matrices and seasonal inventory.</p>
          <Link href="/industries/fashion" className="text-primary-600 font-semibold hover:text-primary-700">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
