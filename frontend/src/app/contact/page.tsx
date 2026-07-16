"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      {/* Header */}
      <div className="bg-surface py-20 px-4 mb-16 border-b border-border text-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Contact Our Sales Team</h1>
          <p className="text-xl text-foreground/70">Have a question or want to see a live demo? We're here to help you navigate our enterprise retail software.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 glass-border rounded-3xl shadow-soft overflow-hidden">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-black/40 text-white p-10 flex flex-col justify-between relative overflow-hidden">
             {/* Grid background removed */}
             
             <div className="relative z-10 space-y-12">
               <div>
                 <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                 <p className="text-foreground/70">Fill out the form and our team will get back to you within 24 hours.</p>
               </div>
               
               <ul className="space-y-8">
                 <li className="flex gap-4 items-start">
                   <MapPin className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                   <div>
                     <div className="font-semibold mb-1">Corporate Headquarters</div>
                     <span className="text-foreground/80 leading-relaxed text-sm">No.624, Khivraj Building, Anna Salai,<br/>Chennai-600006<br/>LM.Gemini Flyover</span>
                   </div>
                 </li>
                 <li className="flex gap-4 items-start">
                   <Phone className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                   <div>
                     <div className="font-semibold mb-1">Phone</div>
                     <a href="tel:+919941070555" className="block text-foreground/80 hover:text-white transition-colors text-sm">+91 99410 70555</a>
                     <a href="tel:+918667735575" className="block text-foreground/80 hover:text-white transition-colors text-sm mt-1">+91 86677 35575</a>
                   </div>
                 </li>
                 <li className="flex gap-4 items-start">
                   <Mail className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                   <div>
                     <div className="font-semibold mb-1">Email</div>
                     <a href="mailto:info@bnytechnologies.com" className="text-foreground/80 hover:text-white transition-colors text-sm break-all">info@bnytechnologies.com</a>
                   </div>
                 </li>
                 <li className="flex gap-4 items-start">
                   <Clock className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                   <div>
                     <div className="font-semibold mb-1">Business Hours</div>
                     <span className="text-foreground/80 text-sm">Mon-Fri: 9:00 AM - 6:00 PM (IST)<br/>Sat-Sun: Closed</span>
                   </div>
                 </li>
               </ul>
             </div>
             
             {/* Social Links */}
             <div className="relative z-10 flex gap-4 mt-12 pt-8 border-t border-white/20">
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
               </a>
             </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border bg-background border-border focus:outline-none focus:ring-2 focus:ring-brand-accent placeholder:text-foreground/50" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border bg-background border-border focus:outline-none focus:ring-2 focus:ring-brand-accent placeholder:text-foreground/50" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border bg-background border-border focus:outline-none focus:ring-2 focus:ring-brand-accent placeholder:text-foreground/50" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border bg-background border-border focus:outline-none focus:ring-2 focus:ring-brand-accent text-foreground">
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border bg-background border-border focus:outline-none focus:ring-2 focus:ring-brand-accent placeholder:text-foreground/50 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-brand-accent text-black font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 bg-black/40 rounded-3xl h-[400px] border border-border flex items-center justify-center relative overflow-hidden shadow-sm">
           <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-foreground/40 font-bold text-2xl">
              Google Maps Integration Placeholder
           </div>
        </div>
      </div>
    </div>
  );
}
