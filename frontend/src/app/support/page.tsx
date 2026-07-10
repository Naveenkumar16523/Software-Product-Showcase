import Link from "next/link";
import { HelpCircle, Book, MessageCircle, FileText, Ticket, Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Get help, read documentation, and contact support.",
};

const supportOptions = [
  { title: "Documentation", desc: "Detailed guides on how to use every feature.", icon: <Book />, link: "/support/docs" },
  { title: "Knowledge Base", desc: "Articles, tutorials, and troubleshooting.", icon: <FileText />, link: "/support/kb" },
  { title: "FAQs", desc: "Answers to common questions.", icon: <HelpCircle />, link: "/support/faq" },
  { title: "Video Tutorials", desc: "Step-by-step visual guides.", icon: <Download />, link: "/support/videos" },
  { title: "Live Chat", desc: "Chat with our support agents in real-time.", icon: <MessageCircle />, link: "#chat" },
  { title: "Ticket System", desc: "Submit a support request.", icon: <Ticket />, link: "/support/tickets" },
];

export default function SupportPage() {
  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20 px-4 mb-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">How can we help you today?</h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400 text-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportOptions.map((opt, i) => (
            <Link key={i} href={opt.link} className="bg-white p-8 rounded-2xl border border-border hover:shadow-hover hover:border-primary-300 transition-all group">
              <div className="text-primary-600 mb-6 bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {opt.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{opt.title}</h2>
              <p className="text-gray-600">{opt.desc}</p>
            </Link>
          ))}
        </div>
        
        {/* Contact Support */}
        <div className="mt-16 bg-surface rounded-3xl p-12 text-center border border-border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Our dedicated support team is available 24/7 to assist you with any technical issues or account inquiries.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
              Contact Support
            </Link>
            <Link href="tel:+919941070555" className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 border border-gray-200 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Call +91 99410 70555
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
