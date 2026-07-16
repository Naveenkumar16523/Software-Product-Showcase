import React from "react";
import { Store, Package, Database, Users, BarChart3, LineChart } from "lucide-react";

export const products = [
  { title: "POS Software", desc: "Fast, reliable point of sale system for seamless checkout.", benefits: ["Offline Mode", "Multi-payment", "Receipt Customization"], icon: <Store /> },
  { title: "Inventory Management", desc: "Track stock levels across multiple locations in real-time.", benefits: ["Barcode Scanning", "Low Stock Alerts", "Supplier POs"], icon: <Package /> },
  { title: "ERP Solution", desc: "Comprehensive enterprise resource planning for large retailers.", benefits: ["Financials", "Supply Chain", "HR Integration"], icon: <Database /> },
  { title: "Retail CRM", desc: "Build lasting relationships with personalized marketing.", benefits: ["Loyalty Points", "Email Campaigns", "Purchase History"], icon: <Users /> },
  { title: "Billing & Accounting", desc: "Automate invoicing and tax compliance effortlessly.", benefits: ["GST Ready", "Automated Invoicing", "Ledger Management"], icon: <BarChart3 /> },
  { title: "Analytics Dashboard", desc: "Make data-driven decisions with powerful insights.", benefits: ["Custom Reports", "Sales Forecasting", "Profit Analysis"], icon: <LineChart /> },
];
