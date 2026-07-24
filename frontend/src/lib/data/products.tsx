import React from "react";
import { Store, Package, Database, Users, BarChart3, LineChart } from "lucide-react";

export const products = [
  { title: "B&Y Fitness", desc: "Redefining fitness with modern equipment and personalized tracking.", benefits: ["Workout Tracking", "Diet Plans", "Membership CRM"], icon: <Users />, img: "/gym-preview-v2.jpg", link: "https://gym-ii9k.vercel.app/" },
  { title: "Marque RC", desc: "India's Best Price Hobby RC Car Dealer.", benefits: ["RC Cars", "Batteries", "Accessories"], icon: <Store />, img: "/marque-preview.jpg", link: "https://www.marque.co.in/" },
  { title: "E.A.S. Academy", desc: "A premium early childhood experience fostering growth.", benefits: ["Admissions", "Admin Portal", "Virtual Tour"], icon: <Package />, img: "/school-preview-v2.png", link: "https://schoolerp-livid.vercel.app/" },
  { title: "Lumina Spa", desc: "Experience transformative rituals designed to harmonize mind, body, and spirit.", benefits: ["Online Booking", "Spa Packages", "Loyalty Rewards"], icon: <Database />, img: "/salon-preview.jpg", link: "https://salon-website-rose-six.vercel.app/" },
  { title: "Shopease", desc: "A modern and responsive e-commerce website with elegant design.", benefits: ["Fast & Optimized", "Responsive UI", "Premium Experience"], icon: <Store />, img: "/ecommerce-preview.jpg", link: "https://ecommerce-website-shopease.vercel.app/" },
  { title: "B&Y CRM Dashboard", desc: "A powerful CRM solution to manage leads, track deals, and grow efficiently.", benefits: ["Lead Management", "Deal Tracking", "Analytics & Reports"], icon: <BarChart3 />, img: "/crm-preview.png", link: "https://bnycrm1.vercel.app" },
  { title: "Clarix Dashboard", desc: "A powerful and intuitive dashboard to manage your business operations.", benefits: ["Real-time Analytics", "Smart Insights", "Data Security"], icon: <LineChart />, img: "/erp-preview.png", link: "https://erp-software-mmbt.vercel.app/" },
  { title: "PharmaDesk", desc: "Smart inventory management for pharmacies and hospitals. Track stock levels in real-time, manage expiries, and reduce wastage.", benefits: ["Expiry Management", "Low Stock Alerts", "Real-time Tracking"], icon: <Database />, img: "/pharma-preview.png", link: "https://pms-pharma-desk.vercel.app/login" },
];
