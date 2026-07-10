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
        <h1 className="text-5xl font-display font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that best fits your retail operation.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter */}
        <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-2">Starter</h3>
          <p className="text-gray-500 mb-6">For single-store retailers.</p>
          <div className="mb-6"><span className="text-4xl font-bold">$99</span>/mo</div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-600">✓ 1 Location</li>
            <li className="flex items-center text-gray-600">✓ Basic Inventory</li>
            <li className="flex items-center text-gray-600">✓ Email Support</li>
          </ul>
          <Link href="/request-demo" className="block text-center w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">Get Started</Link>
        </div>

        {/* Professional */}
        <div className="bg-primary-50 rounded-2xl shadow-card p-8 border border-primary-200 relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
          <h3 className="text-2xl font-bold mb-2 text-primary-900">Professional</h3>
          <p className="text-primary-700 mb-6">For growing omnichannel brands.</p>
          <div className="mb-6"><span className="text-4xl font-bold text-primary-900">$299</span>/mo</div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-primary-800">✓ Up to 10 Locations</li>
            <li className="flex items-center text-primary-800">✓ Advanced Omnichannel</li>
            <li className="flex items-center text-primary-800">✓ Priority Support</li>
          </ul>
          <Link href="/request-demo" className="block text-center w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">Start Free Trial</Link>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-500 mb-6">For large scale operations.</p>
          <div className="mb-6"><span className="text-4xl font-bold">Custom</span></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-600">✓ Unlimited Locations</li>
            <li className="flex items-center text-gray-600">✓ Custom Integrations</li>
            <li className="flex items-center text-gray-600">✓ Dedicated Success Manager</li>
          </ul>
          <Link href="/request-demo" className="block text-center w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">Contact Sales</Link>
        </div>
      </div>
    </div>
  );
}
