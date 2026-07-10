import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | B & Y Technology",
  description: "Transparent pricing for enterprise retail software.",
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold mb-6 text-foreground">Simple, Transparent Pricing</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Choose the plan that best fits your retail operation.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter */}
        <div className="glass-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Starter</h3>
          <p className="text-foreground/50 mb-6">For single-store retailers.</p>
          <div className="mb-6 text-foreground"><span className="text-4xl font-bold">$99</span>/mo</div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-foreground/70">✓ 1 Location</li>
            <li className="flex items-center text-foreground/70">✓ Basic Inventory</li>
            <li className="flex items-center text-foreground/70">✓ Email Support</li>
          </ul>
          <Link href="/request-demo" className="block text-center w-full bg-white/10 text-foreground px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors">Get Started</Link>
        </div>

        {/* Professional */}
        <div className="glass-border rounded-2xl p-8 border-brand-accent/50 bg-brand-accent/5 relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">Professional</h3>
          <p className="text-foreground/70 mb-6">For growing omnichannel brands.</p>
          <div className="mb-6 text-foreground"><span className="text-4xl font-bold text-foreground">$299</span>/mo</div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-foreground/80">✓ Up to 10 Locations</li>
            <li className="flex items-center text-foreground/80">✓ Advanced Omnichannel</li>
            <li className="flex items-center text-foreground/80">✓ Priority Support</li>
          </ul>
          <Link href="/request-demo" className="block text-center w-full bg-brand-accent text-black px-6 py-3 rounded-md font-semibold hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">Start Free Trial</Link>
        </div>

        {/* Enterprise */}
        <div className="glass-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Enterprise</h3>
          <p className="text-foreground/50 mb-6">For large scale operations.</p>
          <div className="mb-6 text-foreground"><span className="text-4xl font-bold">Custom</span></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-foreground/70">✓ Unlimited Locations</li>
            <li className="flex items-center text-foreground/70">✓ Custom Integrations</li>
            <li className="flex items-center text-foreground/70">✓ Dedicated Success Manager</li>
          </ul>
          <Link href="/request-demo" className="block text-center w-full bg-white/10 text-foreground px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors">Contact Sales</Link>
        </div>
      </div>
    </div>
  );
}
