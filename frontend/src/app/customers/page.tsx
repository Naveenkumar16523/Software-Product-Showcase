import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers & Success Stories",
  description: "Read how leading brands use B&Y Technology to transform their retail operations.",
};

const customers = [
  {
    name: "FreshMart",
    industry: "Supermarkets",
    logo: "FM",
    bg: "bg-green-600",
    challenge: "Frequent stockouts and high spoilage rates due to manual inventory tracking.",
    solution: "Implemented B&Y ERP with real-time inventory and predictive ordering.",
    result: "45% increase in inventory turnover and 30% reduction in spoilage.",
  },
  {
    name: "StyleHub",
    industry: "Fashion & Apparel",
    logo: "SH",
    bg: "bg-gray-900",
    challenge: "Disconnected online and offline systems leading to poor customer experience.",
    solution: "Unified Omnichannel POS and CRM integration.",
    result: "2x omnichannel revenue and a 40% increase in customer loyalty program engagement.",
  },
  {
    name: "City Pharmacy",
    industry: "Healthcare",
    logo: "CP",
    bg: "bg-blue-600",
    challenge: "Struggled with compliance and tracking near-expiry medications across 20 branches.",
    solution: "Pharmacy-specific module with automated batch tracking and alerts.",
    result: "Zero compliance violations in 2 years and 90% reduction in expired stock losses.",
  },
  {
    name: "ElectroWorld",
    industry: "Electronics",
    logo: "EW",
    bg: "bg-indigo-600",
    challenge: "Inefficient warranty management and repair ticketing system.",
    solution: "Custom CRM with serial number tracking and integrated ticketing.",
    result: "Customer satisfaction score (CSAT) improved from 3.2 to 4.8 out of 5.",
  }
];

export default function CustomersPage() {
  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border py-20 px-4 mb-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Customer Success Stories</h1>
          <p className="text-xl text-gray-600">See how businesses of all sizes use our platform to drive growth, increase efficiency, and delight their customers.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {customers.map((customer, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-border shadow-soft flex flex-col md:flex-row group">
              <div className={`md:w-1/3 ${customer.bg} text-white flex flex-col items-center justify-center p-8`}>
                <div className="text-4xl font-bold mb-2">{customer.logo}</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-wide text-center">{customer.industry}</div>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{customer.name}</h2>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase">The Challenge</span>
                  <p className="text-gray-700 mt-1">{customer.challenge}</p>
                </div>
                <div className="mb-6 flex-grow">
                  <span className="text-sm font-semibold text-gray-500 uppercase">The Result</span>
                  <p className="text-primary-700 font-medium mt-1">{customer.result}</p>
                </div>
                <Link href={`/customers/${customer.name.toLowerCase()}`} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
