"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Box, CreditCard, Sparkles, Bell, TrendingUp, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const FloatingElement = ({ children, delay = 0, yOffset = 20, duration = 3 }: { children: React.ReactNode, delay?: number, yOffset?: number, duration?: number }) => (
  <motion.div
    animate={{ y: [0, -yOffset, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  return (
    <div className="relative min-h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-white text-[#0F172A] selection:bg-blue-100 selection:text-blue-900 font-sans pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300/20 blur-[120px]" />
        
        {/* Animated Background Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-200/30 blur-[100px]" 
        />

        {/* Curved Lines */}
        <svg className="absolute w-full h-full stroke-blue-500/20 z-0" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M -100 200 C 200 400 600 0 1440 300" strokeWidth="1" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
            d="M -100 400 C 300 200 500 600 1440 200" strokeWidth="1" 
          />
        </svg>

        {/* Particles */}
        <div className="absolute inset-0 z-0">
          {[
            { top: "20%", left: "15%" },
            { top: "60%", left: "25%" },
            { top: "30%", left: "80%" },
            { top: "70%", left: "75%" },
            { top: "40%", left: "50%" },
            { top: "85%", left: "40%" },
          ].map((pos, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -30, 0], 
                opacity: [0.2, 0.8, 0.2] 
              }}
              transition={{ 
                duration: 4 + (i % 3), 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              style={pos}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full pb-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Side: Content (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Retail Platform
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] leading-[1.1] sm:text-[56px] lg:text-[64px] xl:text-[72px] font-bold tracking-tight text-[#0F172A] mb-6"
          >
            Empower Your Retail Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Intelligent Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-[#64748B] mb-10 max-w-[600px] leading-relaxed"
          >
            Simplify retail operations, automate billing, optimize inventory, and accelerate business growth with our AI-powered enterprise platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/products" className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-base transition-all hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 w-full sm:w-auto">
              Explore Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="group flex items-center justify-center h-14 px-8 rounded-full bg-white text-blue-600 border border-blue-200 font-semibold text-base transition-all hover:bg-blue-50 hover:-translate-y-0.5 w-full sm:w-auto shadow-sm hover:shadow">
              Contact Sales
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Illustration (55%) */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end z-10 h-[500px] lg:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[600px] xl:max-w-[700px] h-full"
          >
            {/* Main Glass Dashboard */}
            <div className="absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col p-6 z-10">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <Box className="w-4 h-4" />
                  </div>
                  <div className="font-semibold text-[#0F172A]">RetailPro AI</div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
              </div>

              {/* Dashboard Content Grid */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                
                {/* Sales Analytics Chart */}
                <div className="col-span-2 bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-[#64748B]">Sales Analytics</span>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex-1 flex items-end gap-2 h-32 pt-4">
                    {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Inventory Card */}
                <div className="bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <ShoppingCart className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#64748B]">Inventory</span>
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A]">12,405</div>
                  <div className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +12% this week
                  </div>
                </div>

                {/* Billing Widget */}
                <div className="bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#64748B]">Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A]">$84,290</div>
                  <div className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +8.4% this month
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Elements Around Dashboard */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <FloatingElement yOffset={15} duration={4} delay={0}>
                <div className="absolute -left-4 lg:-left-8 top-12 lg:top-20 bg-white rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-3 w-48">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F172A]">AI Assistant</div>
                    <div className="text-[10px] text-[#64748B]">Optimizing stock...</div>
                  </div>
                </div>
              </FloatingElement>

              <FloatingElement yOffset={10} duration={3} delay={1}>
                <div className="absolute -right-2 lg:-right-6 bottom-24 lg:bottom-32 bg-white rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-3 w-44">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F172A]">New Order</div>
                    <div className="text-[10px] text-[#64748B]">Just received ($450)</div>
                  </div>
                </div>
              </FloatingElement>
              
              <FloatingElement yOffset={20} duration={5} delay={2}>
                <div className="absolute left-1/4 -bottom-4 lg:-bottom-6 bg-white rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-semibold text-[#0F172A]">+24% Sales Growth</div>
                </div>
              </FloatingElement>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
