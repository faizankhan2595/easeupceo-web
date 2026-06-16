"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Sparkle, Play, TrendingUp, CheckCircle } from "lucide-react";
import DashboardPreview from "@/marketing/components/mockups/DashboardPreview";
import DemoModal from "@/uk-components/DemoModal";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white">
      <div className="absolute inset-0 bg-grid" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-32 -z-10 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:flex lg:items-center lg:gap-x-12 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-medium text-brand-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            AI-powered HR platform · Built for UK businesses
            <Sparkle className="h-3.5 w-3.5 text-brand-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            AI-powered attendance, payroll &amp;{" "}
            <span className="bg-linear-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              HR
            </span>{" "}
            — built for the UK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-md leading-8 text-slate-600"
          >
            Worklynx brings attendance, leave management, payroll, employee
            records and performance reviews into one AI-powered platform —
            with smart automation and built-in insights that keep you fully
            HMRC compliant and aligned with UK employment law from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="/signUp"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-shadow hover:shadow-xl hover:shadow-brand-600/30"
            >
              Start 30-Day Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.button
              type="button"
              onClick={() => setDemoOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Watch demo video
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div className="flex -space-x-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-500 text-xs font-semibold text-white shadow-sm">
                SM
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-accent-500 text-xs font-semibold text-white shadow-sm">
                JO
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-700 text-xs font-semibold text-white shadow-sm">
                PA
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-semibold text-slate-600 shadow-sm">
                +5k
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 text-sm font-semibold text-slate-700">4.8/5</span>
              </div>
              <p className="text-sm text-slate-500">
                Loved by <span className="font-semibold text-slate-700">500+ UK HR teams</span> already on Worklynx
              </p>
            </div>
          </motion.div>

          
        </div>

        <div className="relative mx-auto mt-16 w-full min-w-0 lg:mx-0 lg:mt-0 lg:shrink-0 lg:grow lg:basis-1/2">
          <div className="overflow-hidden rounded-2xl">
            <DashboardPreview variant="attendance" height={420} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -left-12 top-1/3 glass-card rounded-xl px-3 py-2 shadow-lg hidden xl:flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500">Efficiency</p>
              <p className="text-xs font-bold text-slate-800">+24% YoY</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -right-10 bottom-1/4 glass-card rounded-xl px-3 py-2 shadow-lg hidden xl:flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500">Payroll accuracy</p>
              <p className="text-xs font-bold text-slate-800">99.8%</p>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
