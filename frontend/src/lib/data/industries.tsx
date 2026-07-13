import React from "react";
import { ShoppingCart, Smartphone } from "lucide-react";

// Minimal Icons for UI that aren't in lucide-react default
function ShirtIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.38 3.46 16 2a24 24 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
}

function PillIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
}

export const industries = [
  { title: "Supermarkets", desc: "Manage thousands of SKUs and high volume checkouts efficiently.", icon: <ShoppingCart /> },
  { title: "Fashion & Apparel", desc: "Handle variants, sizes, colors, and seasonal inventory.", icon: <ShirtIcon /> },
  { title: "Pharmacy", desc: "Batch tracking, expiry management, and compliance made easy.", icon: <PillIcon /> },
  { title: "Electronics", desc: "Serial number tracking and warranty management.", icon: <Smartphone /> },
];
