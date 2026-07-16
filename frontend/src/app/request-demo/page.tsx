"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  businessSize: string;
  productInterest: string;
  message: string;
};

export default function RequestDemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    businessSize: "",
    productInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.firstName || formData.firstName.length < 2) newErrors.firstName = "First name is required";
    if (!formData.lastName || formData.lastName.length < 2) newErrors.lastName = "Last name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid work email is required";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Valid phone number is required";
    if (!formData.company || formData.company.length < 2) newErrors.company = "Company name is required";
    if (!formData.industry) newErrors.industry = "Please select an industry";
    if (!formData.businessSize) newErrors.businessSize = "Please select business size";
    if (!formData.productInterest) newErrors.productInterest = "Please select a product";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setServerError("");
    
    try {
      const compiledMessage = `
Company: ${formData.company}
Phone: ${formData.phone}
Industry: ${formData.industry}
Size: ${formData.businessSize}
Interest: ${formData.productInterest}
Message: ${formData.message || 'No additional message'}
      `;

      const response = await fetch("http://localhost:8080/api/v1/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: compiledMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setServerError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12 glass-border rounded-3xl shadow-xl overflow-hidden">
          
          {/* Left Side Info */}
          <div className="lg:w-2/5 bg-black/40 p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">See our platform in action</h2>
              <p className="text-foreground/70 mb-8 text-lg">
                Discover how top retailers are scaling their operations and increasing margins with our unified software suite.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle2 className="text-brand-accent shrink-0 w-6 h-6" />
                  <div>
                    <strong className="block mb-1 text-lg text-foreground">Live Walkthrough</strong>
                    <span className="text-foreground/80 text-sm">A personalized tour of the features that matter most to your business.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-brand-accent shrink-0 w-6 h-6" />
                  <div>
                    <strong className="block mb-1 text-lg text-foreground">Expert Consultation</strong>
                    <span className="text-foreground/80 text-sm">Discuss your technical requirements and integration needs with our engineers.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-brand-accent shrink-0 w-6 h-6" />
                  <div>
                    <strong className="block mb-1 text-lg text-foreground">Custom Pricing</strong>
                    <span className="text-foreground/80 text-sm">Get a detailed quote based on your specific module requirements and scale.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 p-8 md:p-12">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Request Received!</h3>
                <p className="text-foreground/70 max-w-md mx-auto">
                  Thank you for your interest. One of our retail technology experts will contact you shortly to schedule your personalized demo.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-8">Schedule Free Demo</h2>
                
                {serverError && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100 text-sm font-medium">
                    {serverError}
                  </div>
                )}
                
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80">First Name <span className="text-red-500">*</span></label>
                      <input name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`} />
                      {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80">Last Name <span className="text-red-500">*</span></label>
                      <input name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`} />
                      {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80">Work Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`} />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`} />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Company Name <span className="text-red-500">*</span></label>
                    <input name="company" value={formData.company} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`} />
                    {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80">Industry <span className="text-red-500">*</span></label>
                      <select name="industry" value={formData.industry} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.industry ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`}>
                        <option value="">Select...</option>
                        <option value="Supermarket">Supermarket</option>
                        <option value="Fashion">Fashion & Apparel</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.industry && <p className="text-red-500 text-xs">{errors.industry}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80">Business Size <span className="text-red-500">*</span></label>
                      <select name="businessSize" value={formData.businessSize} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.businessSize ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`}>
                        <option value="">Select...</option>
                        <option value="1-10">1-10 stores</option>
                        <option value="11-50">11-50 stores</option>
                        <option value="51-200">51-200 stores</option>
                        <option value="200+">200+ stores</option>
                      </select>
                      {errors.businessSize && <p className="text-red-500 text-xs">{errors.businessSize}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80">Interest <span className="text-red-500">*</span></label>
                      <select name="productInterest" value={formData.productInterest} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.productInterest ? 'border-red-500' : 'border-border'} bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent`}>
                        <option value="">Select...</option>
                        <option value="POS">POS Software</option>
                        <option value="ERP">ERP Solution</option>
                        <option value="CRM">Retail CRM</option>
                        <option value="Full Suite">Full Suite</option>
                      </select>
                      {errors.productInterest && <p className="text-red-500 text-xs">{errors.productInterest}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Additional Information</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none" placeholder="Tell us about your current challenges..."></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-accent text-black font-bold py-4 rounded-lg hover:bg-brand-accent/90 transition-colors disabled:opacity-70 text-lg shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]"
                  >
                    {isSubmitting ? "Submitting Request..." : "Schedule Free Demo"}
                  </button>
                  <p className="text-xs text-foreground/50 text-center">By submitting, you agree to our Terms of Service and Privacy Policy.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
