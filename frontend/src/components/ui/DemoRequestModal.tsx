"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        product: data.product,
        demo_date: data.demo_date,
        demo_time: data.demo_time,
        message: data.message,
        submitted_at: new Date().toLocaleString(),
      };

      // Send Primary Email to Admin
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      // Send Auto-Reply to Customer
      if (process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        );
      }

      toast.success("Demo request submitted successfully!");
      onClose();
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send demo request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
          <div>
            <h2 className="text-2xl font-display font-bold text-card-foreground">Request a Demo</h2>
            <p className="text-muted-foreground text-sm mt-1">Fill out the form below and we'll get in touch to schedule a personalized demo.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto">
          <form id="demo-request-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  required 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Acme Inc."
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="product" className="text-sm font-medium text-foreground">Interested Product *</label>
                <select 
                  id="product" 
                  name="product" 
                  required 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a product</option>
                  <option value="ERP Solution">ERP Solution</option>
                  <option value="HR Management">HR Management</option>
                  <option value="Inventory System">Inventory System</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="demo_date" className="text-sm font-medium text-foreground">Preferred Demo Date</label>
                <input 
                  type="date" 
                  id="demo_date" 
                  name="demo_date" 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="demo_time" className="text-sm font-medium text-foreground">Preferred Demo Time</label>
                <input 
                  type="time" 
                  id="demo_time" 
                  name="demo_time" 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Additional Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us a bit about your requirements..."
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border shrink-0 flex justify-end gap-3 bg-muted/50">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 border border-input rounded-md text-foreground font-medium hover:bg-muted transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            form="demo-request-form"
            className="px-4 py-2 bg-brand-primary text-primary-foreground rounded-md font-medium hover:bg-brand-primary/90 transition-colors flex items-center justify-center min-w-[120px] disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Request"}
          </button>
        </div>
      </div>
    </div>
  );
}
