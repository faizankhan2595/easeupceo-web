"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Users,
  Package,
  Briefcase,
  Layers,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  ArrowRight,
  X
} from "lucide-react";

const integrations = [
  {
    name: "HRMS & Payroll",
    position: "left",
    top: "top-0",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 text-blue-600 border-blue-200/70",
    tag: "HRMS",
  },
  {
    name: "Smart Inventory",
    position: "left",
    top: "top-14",
    icon: Package,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 text-emerald-600 border-emerald-200/70",
    tag: "INVENTORY",
  },
  {
    name: "RMS & Talent",
    position: "right",
    top: "top-0",
    icon: Briefcase,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50 text-purple-600 border-purple-200/70",
    tag: "RMS",
  },
  {
    name: "Asset Management",
    position: "right",
    top: "top-14",
    icon: Layers,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 text-amber-600 border-amber-200/70",
    tag: "ASSETS",
  },
];

const cards = [
  {
    title: "HRMS & Payroll Hub",
    icon: Users,
    type: "hrms",
    accent: "text-blue-600",
    bgAccent: "bg-blue-50",
    badge: "248 Employees",
  },
  {
    title: "Smart Inventory Control",
    icon: Package,
    type: "inventory",
    accent: "text-emerald-600",
    bgAccent: "bg-emerald-50",
    badge: "12,450 SKUs Live",
  },
  {
    title: "RMS & Resource Mgmt",
    icon: Briefcase,
    type: "rms",
    accent: "text-purple-600",
    bgAccent: "bg-purple-50",
    badge: "Operations Active",
  },
];

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(true);

      setTimeout(() => {
        setIsExpanded(false);
      }, 2400);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[740px] overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white px-4 py-16 sm:px-6 sm:py-24">
      {/* Dynamic Ambient Background Glows */}
      <motion.div
        animate={{
          opacity: isExpanded ? 0.2 : 0.8,
          scale: isExpanded ? 1.4 : 1,
        }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute left-1/2 top-[40%] h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-400/20 via-indigo-300/30 to-purple-300/20 blur-[120px]"
      />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto flex max-w-[1150px] flex-col items-center">
        
        {/* Top Badge & Heading */}
        <motion.div
          animate={{
            opacity: isExpanded ? 0 : 1,
            y: isExpanded ? -35 : 0,
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative z-10 max-w-[760px] text-center"
        >
          {/* Worklynx Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Worklynx Enterprise Suite
            </span>
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">
              HRMS • INVENTORY • RMS
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Streamline <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">HRMS, Inventory & RMS</span> in One Unified Ecosystem
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-[580px] text-sm leading-relaxed text-slate-600 sm:text-base">
            Worklynx connects employee management, automated payroll, real-time stock control, and resource recruitment behind one intelligent dashboard.
          </p>
        </motion.div>

        {/* Integration Central Diagram */}
        <motion.div
          animate={{
            opacity: isExpanded ? 0 : 1,
            scale: isExpanded ? 0.75 : 1,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 h-[150px] w-full max-w-[700px]"
        >
          {/* Connecting Orbit Rings */}
          <div className="absolute left-[130px] top-[42px] h-[66px] w-[440px] rounded-[50px] border border-slate-300/80 bg-white/30 backdrop-blur-[2px] shadow-inner" />

          {/* Left Integration Nodes */}
          <div className="absolute left-2 sm:left-4 top-0 flex flex-col gap-3">
            {integrations
              .filter((item) => item.position === "left")
              .map((item, index) => (
                <IntegrationPill
                  key={item.name}
                  {...item}
                  delay={index * 0.1}
                />
              ))}
          </div>

          {/* Right Integration Nodes */}
          <div className="absolute right-2 sm:right-4 top-0 flex flex-col gap-3">
            {integrations
              .filter((item) => item.position === "right")
              .map((item, index) => (
                <IntegrationPill
                  key={item.name}
                  {...item}
                  delay={index * 0.1 + 0.15}
                />
              ))}
          </div>

          {/* Center Worklynx Logo Trigger */}
          <WorklynxLogo
            expanded={false}
            onClick={() => setIsExpanded(true)}
          />
        </motion.div>

        {/* 3 Dashboard Preview Cards */}
        <motion.div
          animate={{
            opacity: isExpanded ? 0 : 1,
            y: isExpanded ? 50 : 0,
            scale: isExpanded ? 0.85 : 1,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 grid w-full max-w-[920px] grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {cards.map((card, index) => (
            <DashboardCard
              key={card.title}
              {...card}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* EXPANDED FULL BRAND MODAL OVERLAY */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.4, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.4, y: 30 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex w-full max-w-[540px] flex-col items-center rounded-3xl border border-white/20 bg-slate-900/95 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute right-4 top-4 rounded-full bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Pulsing Orbit Rings */}
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-brand-600 to-indigo-600 shadow-xl shadow-brand-500/30">
                <LogoMark className="h-12 w-12 text-white" />

                {/* Animated Orbits */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-12px] rounded-full border border-dashed border-brand-400/50"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-24px] rounded-full border border-white/10"
                />
              </div>

              {/* Brand Title */}
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Worklynx
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-400">
                All-in-One Enterprise Platform
              </p>

              <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Empowering businesses with modern HRMS workforce tools, automated stock inventory, and intelligent resource recruitment management.
              </p>

              {/* Modules List */}
              <div className="mt-6 grid w-full grid-cols-3 gap-2 border-t border-slate-800 pt-6">
                <div className="rounded-xl bg-slate-800/60 p-2.5 text-center">
                  <p className="text-[10px] font-bold uppercase text-blue-400">HRMS</p>
                  <p className="mt-0.5 text-xs font-semibold text-white">Payroll & Leave</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 p-2.5 text-center">
                  <p className="text-[10px] font-bold uppercase text-emerald-400">INVENTORY</p>
                  <p className="mt-0.5 text-xs font-semibold text-white">Live Stock Sync</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 p-2.5 text-center">
                  <p className="text-[10px] font-bold uppercase text-purple-400">RMS</p>
                  <p className="mt-0.5 text-xs font-semibold text-white">Recruitment & POS</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


/* ------------------------------------------------ */
/* Integration Pill Component */
/* ------------------------------------------------ */

function IntegrationPill({ name, icon: Icon, bgColor, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{
        y: -3,
        scale: 1.04,
      }}
      className={`flex h-[38px] items-center gap-2.5 rounded-full border bg-white px-3.5 shadow-sm transition-shadow hover:shadow-md cursor-pointer`}
    >
      <div className={`flex h-6 w-6 items-center justify-center rounded-full border ${bgColor}`}>
        <Icon className="h-3.5 w-3.5" />
      </div>

      <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}


/* ------------------------------------------------ */
/* Worklynx Logo Button */
/* ------------------------------------------------ */

function WorklynxLogo({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="absolute left-1/2 top-[34px] flex h-[58px] w-[160px] -translate-x-1/2 items-center justify-center gap-2.5 rounded-full bg-slate-900 px-4 text-white shadow-xl shadow-slate-900/20 border border-slate-800"
    >
      <LogoMark className="h-6 w-6 text-brand-400" />

      <div className="flex flex-col items-start leading-tight">
        <span className="text-base font-bold tracking-tight text-white">
          Worklynx
        </span>
        <span className="text-[9px] font-medium tracking-wider text-slate-400 uppercase">
          HRMS • INVENTORY • RMS
        </span>
      </div>

      {/* Orbit ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-8px] rounded-full border border-brand-500/30"
      />
    </motion.button>
  );
}


/* ------------------------------------------------ */
/* Logo Mark Component */
/* ------------------------------------------------ */

function LogoMark({ className = "h-5 w-5" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M4 6L8 18L12 10L16 18L20 6"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}


/* ------------------------------------------------ */
/* Dashboard Card Component */
/* ------------------------------------------------ */

function DashboardCard({
  title,
  icon: Icon,
  type,
  index,
  accent,
  bgAccent,
  badge,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.15 + index * 0.1,
      }}
      whileHover={{
        y: -4,
      }}
      className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-md hover:shadow-lg hover:border-slate-300 transition-all"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${bgAccent} ${accent}`}>
              <Icon className="h-4 w-4" />
            </div>

            <span className="text-xs font-bold text-slate-800">
              {title}
            </span>
          </div>

          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
            {badge}
          </span>
        </div>

        {/* Dashboard Content Mockup */}
        <div className="mt-3">
          {type === "hrms" && <HRMSPreview />}
          {type === "inventory" && <InventoryPreview />}
          {type === "rms" && <RMSPreview />}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
        <span className="text-[11px] font-medium text-slate-500">
          Module Active
        </span>
        <span className="flex items-center gap-1 text-[11px] font-semibold text-brand-600">
          Explore <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </motion.div>
  );
}


/* ------------------------------------------------ */
/* HRMS Preview */
/* ------------------------------------------------ */

function HRMSPreview() {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium text-slate-400">Monthly Payroll</p>
          <p className="text-sm font-bold text-slate-800">
            £48,250 <span className="text-[10px] font-normal text-emerald-600">100% Processed</span>
          </p>
        </div>
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
          98%
        </div>
      </div>

      <div className="mt-2.5 space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-600 font-medium">Attendance Rate</span>
          <span className="font-semibold text-slate-800">98.4%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98.4%" }}
            transition={{ duration: 1 }}
            className="h-full bg-blue-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}


/* ------------------------------------------------ */
/* Inventory Preview */
/* ------------------------------------------------ */

function InventoryPreview() {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium text-slate-400">Active Stock Items</p>
          <p className="text-sm font-bold text-slate-800">
            12,450 <span className="text-[10px] font-normal text-slate-500">units</span>
          </p>
        </div>
        <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
          <TrendingUp className="h-3.5 w-3.5" /> +14%
        </div>
      </div>

      <div className="mt-2.5 flex items-end gap-1.5 h-[26px]">
        {[40, 65, 50, 85, 60, 95, 75, 90].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.6, delay: i * 0.04 }}
            className="flex-1 rounded-t bg-emerald-500/80"
          />
        ))}
      </div>
    </div>
  );
}


/* ------------------------------------------------ */
/* RMS Preview */
/* ------------------------------------------------ */

function RMSPreview() {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium text-slate-400">Resource Allocation</p>
          <p className="text-sm font-bold text-slate-800">
            94.2% <span className="text-[10px] font-normal text-purple-600">Optimal</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-purple-100 px-1.5 py-0.5 text-[10px] font-bold text-purple-700">
          <CheckCircle2 className="h-3 w-3" /> Live
        </span>
      </div>

      <div className="mt-2.5 flex justify-between gap-2 text-center">
        <div className="flex-1 rounded-lg bg-white p-1.5 shadow-2xs border border-slate-100">
          <p className="text-[9px] text-slate-400">Requisitions</p>
          <p className="text-xs font-bold text-slate-800">18 Open</p>
        </div>
        <div className="flex-1 rounded-lg bg-white p-1.5 shadow-2xs border border-slate-100">
          <p className="text-[9px] text-slate-400">POS Outlets</p>
          <p className="text-xs font-bold text-slate-[800]">12 Stores</p>
        </div>
      </div>
    </div>
  );
}