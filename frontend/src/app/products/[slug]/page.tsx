import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RetailOS | B & Y Technology",
  description: "Complete omnichannel retail management system.",
};

export default function ProductDetailPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <Link href="/products" className="text-primary-600 hover:underline mb-8 inline-block">
        &larr; Back to Products
      </Link>
      <h1 className="text-5xl font-display font-bold mb-6">RetailOS</h1>
      <p className="text-2xl text-gray-600 mb-12">Complete omnichannel retail management system for enterprise brands.</p>
      
      <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <ul className="space-y-4 text-lg">
          <li>✨ Real-time inventory syncing across all channels</li>
          <li>✨ AI-powered demand forecasting</li>
          <li>✨ Automated purchase order generation</li>
          <li>✨ Multi-warehouse routing optimization</li>
        </ul>
        
        <div className="mt-12">
          <Link href="/request-demo" className="bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-700 transition-colors">
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
