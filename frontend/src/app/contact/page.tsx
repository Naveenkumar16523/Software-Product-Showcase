"use client";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Floating label input wrapper
  const FloatingInput = ({ label, type = "text", ...props }: any) => {
    return (
      <div className="relative z-0 w-full group">
        {type === "textarea" ? (
          <textarea
            {...props}
            className="block py-3.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-white/20 appearance-none text-white focus:outline-none focus:ring-0 focus:border-brand-accent peer resize-none"
          />
        ) : type === "select" ? (
          <select
            {...props}
            className="block py-3.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-white/20 appearance-none text-white focus:outline-none focus:ring-0 focus:border-brand-accent peer"
          >
            {props.children}
          </select>
        ) : (
          <input
            type={type}
            {...props}
            className="block py-3.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-white/20 appearance-none text-white focus:outline-none focus:ring-0 focus:border-brand-accent peer"
          />
        )}
        <label className="peer-focus:font-medium absolute text-sm text-foreground/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {label}
        </label>
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      {/* Header */}
      <div className="bg-surface py-20 px-4 mb-16 border-b border-white/5 text-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Contact Our Sales Team</h1>
          <p className="text-xl text-foreground/70">Have a question or want to see a live demo? We're here to help you navigate our enterprise retail software.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-0 glass-border rounded-[2rem] shadow-2xl overflow-hidden bg-surface relative">
          
          {/* Decorative Divider */}
          <div className="hidden lg:block absolute top-10 bottom-10 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-10"></div>
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-black/60 text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-50"></div>
             
             <div className="relative z-10 space-y-12">
               <div>
                 <h2 className="text-3xl font-display font-bold mb-4">Get in Touch</h2>
                 <p className="text-foreground/60 leading-relaxed">Fill out the form and our team will get back to you within 24 hours.</p>
               </div>
               
               <ul className="space-y-10">
                 <li className="flex gap-5 items-start group">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                     <MapPin className="w-5 h-5 text-brand-accent" />
                   </div>
                   <div>
                     <div className="font-semibold mb-2 text-white">Corporate Headquarters</div>
                     <span className="text-foreground/60 leading-relaxed text-sm">No.624, Khivraj Building, Anna Salai,<br/>Chennai-600006<br/>LM.Gemini Flyover</span>
                   </div>
                 </li>
                 <li className="flex gap-5 items-start group">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                     <Phone className="w-5 h-5 text-brand-accent" />
                   </div>
                   <div>
                     <div className="font-semibold mb-2 text-white">Phone</div>
                     <a href="tel:+919941070555" className="block text-foreground/60 hover:text-brand-accent transition-colors text-sm">+91 99410 70555</a>
                     <a href="tel:+918667735575" className="block text-foreground/60 hover:text-brand-accent transition-colors text-sm mt-1">+91 86677 35575</a>
                   </div>
                 </li>
                 <li className="flex gap-5 items-start group">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                     <Mail className="w-5 h-5 text-brand-accent" />
                   </div>
                   <div>
                     <div className="font-semibold mb-2 text-white">Email</div>
                     <a href="mailto:info@bnytechnologies.com" className="text-foreground/60 hover:text-brand-accent transition-colors text-sm break-all">info@bnytechnologies.com</a>
                   </div>
                 </li>
                 <li className="flex gap-5 items-start group">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                     <Clock className="w-5 h-5 text-brand-accent" />
                   </div>
                   <div>
                     <div className="font-semibold mb-2 text-white">Business Hours</div>
                     <span className="text-foreground/60 text-sm leading-relaxed">Mon-Fri: 9:00 AM - 6:00 PM (IST)<br/>Sat-Sun: Closed</span>
                   </div>
                 </li>
               </ul>
             </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-10 md:p-16 relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-display font-bold text-foreground mb-12">Send us a message</h2>
                  <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-10">
                      <FloatingInput label="First Name" name="firstName" placeholder=" " required />
                      <FloatingInput label="Last Name" name="lastName" placeholder=" " required />
                    </div>
                    
                    <FloatingInput label="Email Address" type="email" name="email" placeholder=" " required />
                    
                    <div className="relative z-0 w-full group">
                      <select name="subject" defaultValue="" className="block py-3.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-white/20 appearance-none text-white focus:outline-none focus:ring-0 focus:border-brand-accent peer">
                        <option value="" disabled hidden></option>
                        <option className="bg-surface text-white">Sales Inquiry</option>
                        <option className="bg-surface text-white">Technical Support</option>
                        <option className="bg-surface text-white">Partnership</option>
                        <option className="bg-surface text-white">General Question</option>
                      </select>
                      <label className="peer-focus:font-medium absolute text-sm text-foreground/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-accent peer-valid:-translate-y-6 peer-valid:scale-75">
                        Subject
                      </label>
                    </div>

                    <FloatingInput label="Message" type="textarea" name="message" placeholder=" " rows={4} required />
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-brand-accent text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] flex items-center justify-center min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center mb-8"
                  >
                    <CheckCircle2 className="w-12 h-12 text-brand-accent" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4">Message Sent!</h3>
                  <p className="text-foreground/60 max-w-md">
                    Thank you for reaching out. A member of our team will get back to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 bg-surface rounded-3xl h-[400px] border border-white/5 flex items-center justify-center relative overflow-hidden shadow-xl group">
           <div className="absolute inset-0 bg-brand-accent/20 pointer-events-none mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-1000"></div>
           <iframe 
             src="https://maps.google.com/maps?q=No.624,%20Khivraj%20Building,%20Anna%20Salai,%20Chennai-600006&t=&z=14&ie=UTF8&iwloc=&output=embed" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="absolute inset-0 z-0 transition-all duration-1000 group-hover:filter-none"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
