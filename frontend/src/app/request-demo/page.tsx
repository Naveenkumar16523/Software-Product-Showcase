"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide more details (min 10 chars)"),
  honeypot: z.string().max(0, "Spam detected"),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestDemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError("");
    
    if (data.honeypot) {
      setIsSubmitting(false);
      return; // spam bot
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
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
    <div className="container mx-auto px-4 py-24 max-w-2xl">
      <h1 className="text-4xl font-display font-bold mb-6">Request a Demo</h1>
      <p className="text-xl text-gray-600 mb-8">See how our retail software can transform your business.</p>

      {isSuccess ? (
        <div className="bg-success text-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-2">Success!</h3>
          <p>We've received your request and a confirmation email has been sent to you. Our team will reach out shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-card border border-gray-100">
          {serverError && (
            <div className="bg-error/10 text-error p-4 rounded-md mb-6 border border-error/20">
              {serverError}
            </div>
          )}
          
          {/* Honeypot field for spam bots */}
          <div className="hidden">
            <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">Full Name</label>
            <input
              id="name"
              {...register("name")}
              className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary-500'} focus:outline-none focus:ring-2`}
              placeholder="Jane Doe"
            />
            {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">Work Email</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary-500'} focus:outline-none focus:ring-2`}
              placeholder="jane@company.com"
            />
            {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary-500'} focus:outline-none focus:ring-2`}
              placeholder="Tell us about your current challenges..."
            />
            {errors.message && <p className="text-error text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 text-white font-bold py-4 rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Request Demo"}
          </button>
        </form>
      )}
    </div>
  );
}
