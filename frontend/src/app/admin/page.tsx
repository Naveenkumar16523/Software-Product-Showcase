"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { Users, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface DashboardStats {
  totalLeads: number;
  newLeadsThisWeek: number;
  totalPortfolio: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await apiFetch("/api/admin/dashboard/stats");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="w-8 h-8 border-4 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-400">
        Failed to load dashboard statistics.
      </div>
    );
  }

  const statCards = [
    { 
      title: "Total Leads", 
      value: stats.totalLeads, 
      icon: <Users className="w-6 h-6 text-brand-accent" />,
      desc: "All time inquiries"
    },
    { 
      title: "New Leads (This Week)", 
      value: stats.newLeadsThisWeek, 
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      desc: "Recent inquiries"
    },
    { 
      title: "Portfolio Projects", 
      value: stats.totalPortfolio, 
      icon: <Briefcase className="w-6 h-6 text-brand-accent" />,
      desc: "Published case studies"
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome Back</h1>
        <p className="text-foreground/60 mt-2">Here is what's happening with your platform today.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {statCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface border border-border rounded-xl p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {card.icon}
            </div>
            <p className="text-sm font-medium text-foreground/60 mb-2">{card.title}</p>
            <div className="text-4xl font-bold text-foreground mb-4">{card.value}</div>
            <p className="text-xs text-foreground/50">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
