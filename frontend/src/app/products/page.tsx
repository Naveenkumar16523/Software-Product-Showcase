import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | B & Y Technology",
  description: "Explore our enterprise software solutions.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-display font-bold mb-8">Our Products</h1>
      <p className="text-xl text-gray-600 mb-12">Discover our suite of retail software solutions designed for scale.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder products */}
        <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100 hover:shadow-hover transition-shadow">
          <h2 className="text-2xl font-bold mb-4">RetailOS</h2>
          <p className="text-gray-600 mb-6">Complete omnichannel retail management system.</p>
          <Link href="/products/retail-os" className="text-primary-600 font-semibold hover:text-primary-700">
            Learn More &rarr;
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100 hover:shadow-hover transition-shadow">
          <h2 className="text-2xl font-bold mb-4">InventoryAI</h2>
          <p className="text-gray-600 mb-6">Predictive inventory management powered by AI.</p>
          <Link href="/products/inventory-ai" className="text-primary-600 font-semibold hover:text-primary-700">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
