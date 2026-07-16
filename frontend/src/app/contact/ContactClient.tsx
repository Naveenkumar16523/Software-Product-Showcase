"use client";
import { motion } from "framer-motion";
import { Circle, CheckCircle2, AlertCircle } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch((process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080") + "/api/v1/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.message
        })
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full bg-background text-foreground selection:bg-brand-accent/30 p-2 transition-all duration-500 lg:overflow-hidden lg:p-4">
      {/* Left Column (Hero) */}
      <div className="hidden lg:flex w-[52%] relative flex-col items-center justify-end pb-32 px-12 rounded-2xl overflow-hidden shadow-2xl h-full min-h-[600px] border border-border bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70 hue-rotate-180 contrast-125 saturate-150 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4"
            type="video/mp4"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

        <motion.div
          className="z-10 w-full max-w-xs space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center space-x-2"
          >
            <Circle className="fill-brand-accent text-brand-accent w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">B & Y Tech</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h1 className="text-4xl font-semibold tracking-tight whitespace-nowrap mb-2">
              Contact Us
            </h1>
            <p className="text-foreground/60 text-sm leading-relaxed px-4">
              Follow these 3 quick phases to activate your project.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="space-y-4"
          >
            <StepItem number={1} text="Reach out to our team" active />
            <StepItem number={2} text="We review your needs" />
            <StepItem number={3} text="We connect and build" />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column (Form) */}
      <div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl space-y-8 lg:space-y-6 sm:space-y-10"
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get in Touch</h2>
            <p className="text-foreground/40 text-sm mt-2">
              Input your details and how we can help you begin the journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {status === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-green-400 font-medium font-mono uppercase tracking-wide">Inquiry received — someone from the team will reach out within one business day.</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-400 font-medium font-mono uppercase tracking-wide">{errorMsg}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <InputGroup label="First Name" name="firstName" placeholder="John" type="text" value={formData.firstName} onChange={handleChange} required />
              <InputGroup label="Last Name" name="lastName" placeholder="Doe" type="text" value={formData.lastName} onChange={handleChange} required />
            </div>
            <InputGroup label="Email" name="email" placeholder="john@example.com" type="email" value={formData.email} onChange={handleChange} required />
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-surface border border-border rounded-md p-4 text-foreground placeholder:text-foreground/20 focus:ring-1 focus:ring-amber-accent focus:border-amber-accent resize-none h-32 focus:outline-none transition-colors"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full h-12 bg-brand-accent text-black font-semibold rounded-md hover:bg-brand-accent/90 active:scale-[0.98] mt-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none"
            >
              {status === "loading" ? "Sending..." : "Send a message"}
            </button>
            
            <div className="text-center mt-6">
              <a href="mailto:info@bnytechnologies.com" className="text-sm text-foreground/60 hover:text-brand-accent transition-colors">
                Looking for our direct email? Click here
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function StepItem({ number, text, active }: { number: number; text: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center space-x-4 p-3 rounded-xl transition-colors border ${
        active ? "bg-brand-accent/10 border-brand-accent/50 text-foreground" : "bg-surface border-border text-foreground/70"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
          active ? "bg-brand-accent text-black" : "bg-border text-foreground/40"
        }`}
      >
        {number}
      </div>
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
}

interface InputGroupProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function InputGroup({ label, name, placeholder, type, value, onChange, required }: InputGroupProps) {
  return (
    <div className="space-y-1 flex flex-col w-full relative">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-surface border border-border rounded-md h-11 px-4 text-foreground placeholder:text-foreground/20 focus:ring-1 focus:ring-amber-accent focus:border-amber-accent focus:outline-none w-full transition-colors"
      />
    </div>
  );
}
