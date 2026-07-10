import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | B & Y Technology",
  description: "Explore our enterprise software solutions.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Our Products</h1>
      <p className="text-xl text-foreground/70 mb-12">Discover our suite of retail software solutions designed for scale.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder products */}
        <div className="glass-border rounded-xl p-6 shadow-card hover:shadow-hover hover:bg-white/10 transition-colors group">
          <h2 className="text-2xl font-bold mb-4 text-foreground">RetailOS</h2>
          <p className="text-foreground/70 mb-6">Complete omnichannel retail management system.</p>
          <Link href="/products/retail-os" className="text-brand-accent font-semibold group-hover:text-brand-accent/80 transition-colors">
            Learn More &rarr;
          </Link>
        </div>
        <div className="glass-border rounded-xl p-6 shadow-card hover:shadow-hover hover:bg-white/10 transition-colors group">
          <h2 className="text-2xl font-bold mb-4 text-foreground">InventoryAI</h2>
          <p className="text-foreground/70 mb-6">Predictive inventory management powered by AI.</p>
          <Link href="/products/inventory-ai" className="text-brand-accent font-semibold group-hover:text-brand-accent/80 transition-colors">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
