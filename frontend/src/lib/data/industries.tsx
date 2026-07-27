import React from "react";
import { ShoppingCart, Smartphone, Utensils, Car, Gem, Armchair } from "lucide-react";

// Minimal Icons for UI that aren't in lucide-react default
function ShirtIcon(props: React.ComponentProps<"svg">) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.38 3.46 16 2a24 24 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
}

function PillIcon(props: React.ComponentProps<"svg">) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
}

export const industries = [
  { title: "Supermarkets", desc: "Manage thousands of SKUs and high volume checkouts efficiently.", icon: <ShoppingCart />, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80" },
  { title: "Fashion & Apparel", desc: "Handle variants, sizes, colors, and seasonal inventory.", icon: <ShirtIcon />, img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80" },
  { title: "Pharmacy", desc: "Batch tracking, expiry management, and compliance made easy.", icon: <PillIcon />, img: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80" },
  { title: "Electronics", desc: "Serial number tracking and warranty management.", icon: <Smartphone />, img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80" },
  { title: "Restaurants & Cafes", desc: "Streamline orders, tables, and kitchen management seamlessly.", icon: <Utensils />, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" },
  { title: "Automotive", desc: "Manage service histories, spare parts, and vehicle sales.", icon: <Car />, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80" },
  { title: "Jewelry & Luxury", desc: "Secure tracking of high-value items, certifications, and variants.", icon: <Gem />, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80" },
  { title: "Home & Furniture", desc: "Manage large inventories, deliveries, and complex supplier orders.", icon: <Armchair />, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80" },
];
