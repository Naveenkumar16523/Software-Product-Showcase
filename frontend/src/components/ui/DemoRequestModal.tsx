"use client";

import { useState, useEffect } from "react";
import { X, Loader2, CheckCircle2, Calendar, Clock, Building2, Mail, Phone, User, MessageSquare, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset success state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setIsSuccess(false), 300);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      if (process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        );
      }

      setIsSuccess(true);
      toast.success("Demo request submitted successfully!");
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send demo request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
          >
            <div className="flex flex-col lg:flex-row max-h-[90vh]">
              
              {/* Left Panel — Info */}
              <div className="lg:w-[42%] bg-gradient-to-br from-[#0a0f1a] via-[#0f172a] to-[#0a1628] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shrink-0">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="text-xs font-semibold text-brand-accent tracking-wide uppercase">Free Demo</span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 leading-tight">
                    See our platform<br />
                    <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">in action</span>
                  </h2>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    Get a personalized walkthrough tailored to your business needs. Our experts will show you exactly how to optimize your operations.
                  </p>

                  <div className="space-y-5">
                    {[
                      { icon: CheckCircle2, text: "Personalized product walkthrough" },
                      { icon: CheckCircle2, text: "Expert consultation included" },
                      { icon: CheckCircle2, text: "Custom pricing for your needs" },
                      { icon: CheckCircle2, text: "No commitment required" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent/10 border border-brand-accent/30 shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                          <item.icon className="w-3.5 h-3.5 text-brand-accent" />
                        </div>
                        <span className="text-white/80 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust badge */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-accent/30 to-emerald-500/30 border-2 border-[#0f172a] flex items-center justify-center">
                          <User className="w-3.5 h-3.5 text-white/60" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white/80 text-xs font-medium">Trusted by 500+ businesses</p>
                      <p className="text-white/40 text-[10px]">Across 50+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel — Form */}
              <div className="lg:w-[58%] bg-[#0d1117] flex flex-col max-h-[90vh] lg:max-h-none">
                
                {/* Form Header */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 shrink-0">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Schedule Your Demo</h3>
                    <p className="text-white/40 text-xs mt-0.5">Fill in your details below</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Form Body */}
                <div className="flex-1 overflow-y-auto px-8 py-6">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-5 border border-brand-accent/30">
                        <CheckCircle2 className="w-8 h-8 text-brand-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                      <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                        Thank you! Our team will reach out within one business day to schedule your personalized demo.
                      </p>
                      <button
                        onClick={onClose}
                        className="mt-6 px-6 py-2.5 rounded-lg bg-brand-accent text-black text-sm font-semibold hover:bg-brand-accent/90 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <form id="demo-request-form" onSubmit={handleSubmit} className="space-y-5">
                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                            <User className="w-3 h-3" /> Full Name <span className="text-brand-accent">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 disabled:opacity-50"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                            <Mail className="w-3 h-3" /> Email <span className="text-brand-accent">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 disabled:opacity-50"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                            <Phone className="w-3 h-3" /> Phone <span className="text-brand-accent">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 disabled:opacity-50"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="company" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                            <Building2 className="w-3 h-3" /> Company <span className="text-brand-accent">*</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 disabled:opacity-50"
                            placeholder="Acme Inc."
                          />
                        </div>
                      </div>

                      {/* Row 3: Product */}
                      <div className="space-y-1.5">
                        <label htmlFor="product" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" /> Interested Product <span className="text-brand-accent">*</span>
                        </label>
                        <select
                          id="product"
                          name="product"
                          required
                          disabled={isLoading}
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 appearance-none cursor-pointer disabled:opacity-50"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-[#0d1117] text-white/40">Select a product</option>
                          <option value="POS Software" className="bg-[#0d1117]">POS Software</option>
                          <option value="ERP Solution" className="bg-[#0d1117]">ERP Solution</option>
                          <option value="Retail CRM" className="bg-[#0d1117]">Retail CRM</option>
                          <option value="HR Management" className="bg-[#0d1117]">HR Management</option>
                          <option value="Inventory System" className="bg-[#0d1117]">Inventory System</option>
                          <option value="Full Suite" className="bg-[#0d1117]">Full Suite</option>
                          <option value="Other" className="bg-[#0d1117]">Other</option>
                        </select>
                      </div>

                      {/* Row 4: Date & Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="demo_date" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                            <Calendar className="w-3 h-3" /> Preferred Date
                          </label>
                          <input
                            type="date"
                            id="demo_date"
                            name="demo_date"
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 disabled:opacity-50"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="demo_time" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                            <Clock className="w-3 h-3" /> Preferred Time
                          </label>
                          <input
                            type="time"
                            id="demo_time"
                            name="demo_time"
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 disabled:opacity-50"
                          />
                        </div>
                      </div>

                      {/* Row 5: Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-medium text-white/60 uppercase tracking-wider">
                          <MessageSquare className="w-3 h-3" /> Additional Notes
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          disabled={isLoading}
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all hover:border-white/20 resize-none disabled:opacity-50"
                          placeholder="Tell us about your requirements..."
                        ></textarea>
                      </div>
                    </form>
                  )}
                </div>

                {/* Footer */}
                {!isSuccess && (
                  <div className="px-8 py-5 border-t border-white/5 shrink-0 flex items-center justify-between gap-4 bg-white/[0.01]">
                    <p className="text-[10px] text-white/30 leading-relaxed hidden sm:block">
                      By submitting, you agree to our Terms of Service & Privacy Policy.
                    </p>
                    <div className="flex items-center gap-3 ml-auto">
                      <button
                        type="button"
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-5 py-2.5 rounded-xl text-white/60 text-sm font-medium hover:text-white hover:bg-white/5 transition-all disabled:opacity-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        form="demo-request-form"
                        disabled={isLoading}
                        className="px-6 py-2.5 rounded-xl bg-brand-accent text-black text-sm font-bold hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 min-w-[140px] shadow-[0_0_20px_rgba(163,230,53,0.15)] hover:shadow-[0_0_30px_rgba(163,230,53,0.25)] disabled:opacity-50 active:scale-[0.98]"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
