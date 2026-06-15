"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, BadgeCheck, MapPin, Building2, ArrowRight, Star, Sparkle, Play } from "lucide-react";
import { BrowserFrame } from "@/uk-components/feature-mockups/BrowserFrame";
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

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:flex lg:items-center lg:gap-x-12 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm"
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
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-shadow hover:shadow-xl hover:shadow-brand-600/30"
            >
              Book a free demo
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

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-2xl lg:mx-0 lg:mt-0 lg:max-w-none lg:shrink-0 lg:grow lg:basis-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrowserFrame title="worklynx.io/dashboard">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Team overview</p>
                <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700">
                  This week
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Present today" value="42 / 46" tone="brand" delay={0.5} />
                <StatCard label="On leave" value="4 employees" tone="accent" delay={0.6} />
                <StatCard label="Payroll run" value="3 days left" tone="slate" delay={0.7} />
                <StatCard label="Pending reviews" value="6 due" tone="slate" delay={0.8} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-6 rounded-lg border border-slate-100 bg-slate-50/60 p-4"
              >
                <p className="text-xs font-medium text-slate-500">Upcoming bank holiday</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Summer Bank Holiday — Mon, 31 Aug
                </p>
              </motion.div>
            </BrowserFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute -top-6 -right-4 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xl sm:flex lg:-right-6"
          >
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-500 text-xs font-semibold text-white">
                SM
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-accent-500 text-xs font-semibold text-white">
                JO
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-700 text-xs font-semibold text-white">
                PA
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">12 new teams</p>
              <p className="text-sm font-semibold text-slate-900">joined this week</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-slate-500">Payroll status</p>
                <p className="text-sm font-semibold text-slate-900">RTI submitted ✓</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}

function StatCard({ label, value, tone, delay }) {
  const toneClasses = {
    brand: "text-brand-700 bg-brand-50",
    accent: "text-accent-700 bg-accent-50",
    slate: "text-slate-700 bg-slate-100",
  }[tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-lg p-4 ${toneClasses}`}
    >
      <p className="text-xs font-medium opacity-80">{label}</p>
      <p className="mt-1 text-base font-bold">{value}</p>
    </motion.div>
  );
}
