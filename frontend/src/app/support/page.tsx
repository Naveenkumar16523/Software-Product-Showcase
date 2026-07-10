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
      <div className="bg-surface border-b border-border text-foreground py-20 px-4 mb-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">How can we help you today?</h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full px-6 py-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent placeholder:text-foreground/50 text-lg shadow-[0_0_15px_rgba(163,230,53,0.1)]"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportOptions.map((opt, i) => (
            <Link key={i} href={opt.link} className="glass-border p-8 rounded-2xl hover:shadow-hover hover:border-brand-accent/50 hover:bg-white/10 transition-all group">
              <div className="text-brand-accent mb-6 bg-brand-accent/20 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {opt.icon}
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">{opt.title}</h2>
              <p className="text-foreground/70">{opt.desc}</p>
            </Link>
          ))}
        </div>
        
        {/* Contact Support */}
        <div className="mt-16 glass-border rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still need help?</h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">Our dedicated support team is available 24/7 to assist you with any technical issues or account inquiries.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-brand-accent text-black font-semibold rounded-lg hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
              Contact Support
            </Link>
            <Link href="tel:+919941070555" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-foreground border border-border font-medium rounded-lg hover:bg-white/20 transition-colors">
              Call +91 99410 70555
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
