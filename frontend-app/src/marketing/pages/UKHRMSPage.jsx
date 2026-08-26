import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Clock,
  Calendar,
  UserCheck,
  Award,
  ShieldCheck,
  BarChart2,
  Smartphone,
  Lock,
  ArrowRight,
  Zap,
  Globe,
  ChevronRight,
  CheckCircle2,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/uk-components/Hero";
import HeroLaptop from "@/uk-components/HeroLaptop";
import DemoModal from "@/uk-components/DemoModal";
import FeatureShowcaseCopy from "@/uk-components/FeatureShowcaseCopy";
import Pricing from "@/uk-components/Pricing";


const hrmsFeatures = [
  {
    icon: Clock,
    title: "GPS & Mobile Attendance",
    desc: "Geofenced clock-in, facial verification, selfie attendance, and shift rosters for office & remote workers.",
    metrics: "99.8% Accuracy"
  },
  {
    icon: Zap,
    title: "HMRC PAYE RTI Payroll",
    desc: "Automated salary processing, statutory tax deductions, workplace pension calculations, and digital payslips.",
    metrics: "HMRC Ready"
  },
  {
    icon: Calendar,
    title: "28-Day Statutory Holiday & Leave",
    desc: "Statutory leave tracking, holiday overlays, custom accrual policies, and instant manager approvals.",
    metrics: "Zero Friction"
  },
  {
    icon: UserCheck,
    title: "Applicant Tracking System (ATS)",
    desc: "End-to-end recruitment funnel from job postings to candidate shortlisting, interview scheduling, and offer letters.",
    metrics: "50% Faster Hiring"
  },
  {
    icon: Award,
    title: "Performance & OKRs",
    desc: "Continuous 360-degree feedback, goal setting, KPI tracking, performance reviews, and appraisal workflows.",
    metrics: "3x Productivity"
  },
  {
    icon: Users,
    title: "Centralized Employee Database",
    desc: "Secure cloud vault storing employee contracts, right-to-work visa docs, emergency contacts, and hierarchy maps.",
    metrics: "GDPR Compliant"
  },
  {
    icon: Smartphone,
    title: "Employee Self-Service (ESS) Portal",
    desc: "Empower staff with mobile app access for payslip downloads, leave requests, shift swaps, and personal updates.",
    metrics: "iOS & Android"
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Audit Readiness",
    desc: "Automated labor law compliance, GDPR enforcement, audit logs, and instant regulatory report generation.",
    metrics: "100% Compliant"
  },
  {
    icon: BarChart2,
    title: "Workforce Analytics & HR Reports",
    desc: "Real-time cost per hire, headcount retention metrics, turnover insights, and graphical executive reports.",
    metrics: "Live Analytics"
  },
  {
    icon: Lock,
    title: "Security & Role Access Controls",
    desc: "AES-256 bit encryption, multi-tenant isolation, role-based permission matrices, and field-level privacy controls.",
    metrics: "Bank-Grade AES-256"
  }
];

export default function UKHRMSPage() {
  useEffect(() => {
    document.title = "HRMS & HMRC PAYE Payroll Software | Worklynx";
    window.scrollTo(0, 0);
  }, []);

  const [demoOpen, setDemoOpen] = useState(false);


  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-600 selection:text-white">

      <section className="relative ">

        <HeroLaptop onWatchDemo={() => setDemoOpen(true)} />
        <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      </section>

      {/* Aceternity UI Style Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-b border-slate-200/60">

        {/* Subtle Radial Glow & Background Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-100/40 via-indigo-100/30 to-transparent blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Breadcrumb Ribbon */}
          <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-slate-200/80 text-xs text-slate-600 shadow-xs mb-6 backdrop-blur-xs">
            <Link to="/" className="hover:text-slate-900 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-brand-700">HRMS &amp; Payroll</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800 max-w-4xl mx-auto leading-tight"
          >
            Complete HRMS Platform for{" "}
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent italic font-serif">
              Modern Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Automate HMRC PAYE payroll, GPS attendance, statutory leave, ATS recruitment, 360 performance reviews, and employee self-service in one enterprise HR solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 font-semibold text-white shadow-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Book HRMS Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/signup"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 font-medium text-slate-700 transition-all text-center text-sm shadow-xs"
            >
              Start 14-Day Free Trial
            </a>
          </motion.div>

          <div className="mt-8 pt-4 inline-flex flex-wrap justify-center items-center gap-5 text-xs font-normal text-slate-500 border-t border-slate-200/60">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> HMRC PAYE RTI Ready</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-brand-600" /> GDPR &amp; AES-256 Encrypted</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-sky-600" /> 24/7 Global Support &amp; Onboarding</span>
          </div>

          {/* Aceternity UI Dashboard Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xl p-6 sm:p-8 text-left space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs text-slate-500 font-medium">Worklynx HRMS Dashboard</span>
                <h3 className="text-lg font-semibold text-slate-800">Tech Hub HQ</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Live Payroll Sync
                </span>
                <span className="px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-medium border border-brand-200">
                  48 Active Employees
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>HMRC PAYE Run</span>
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">£48,250.00</p>
                <p className="text-[11px] text-emerald-600 font-medium mt-1">100% Tax Deductions Calculated</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Today's Attendance</span>
                  <Clock className="w-4 h-4 text-brand-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">97.9% On-Time</p>
                <p className="text-[11px] text-brand-600 font-medium mt-1">GPS Clock-in Verified</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Statutory Leave</span>
                  <Calendar className="w-4 h-4 text-indigo-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">2 Pending Sign-offs</p>
                <p className="text-[11px] text-slate-500 font-medium mt-1">28-Day Allowance</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <FeatureShowcaseCopy />

      {/* Feature Grid */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-800">10 Core Pillars of Worklynx HRMS</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Designed from the ground up to solve complex HR, payroll, and workforce operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hrmsFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="p-5 rounded-xl bg-white/90 border border-slate-200/70 shadow-xs hover:border-brand-200 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/80">
                      {feat.metrics}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 mb-1.5">{feat.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Expansion Callout */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-6 sm:p-10 rounded-2xl bg-brand-50/40 border border-brand-200/80 relative overflow-hidden shadow-xs">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-800 mt-1.5">Need more than HRMS?</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
                Worklynx seamlessly pairs your HR dataset with our integrated Inventory Management and Restaurant Management modules under one unified account.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/inventory-management"
                  className="px-5 py-2.5 rounded-xl bg-white border border-amber-300 hover:bg-amber-50 text-amber-800 text-xs font-semibold shadow-xs transition-all"
                >
                  Explore Inventory ERP &rarr;
                </Link>
                <Link
                  to="/restaurant-management"
                  className="px-5 py-2.5 rounded-xl bg-white border border-rose-300 hover:bg-rose-50 text-rose-800 text-xs font-semibold shadow-xs transition-all"
                >
                  Explore Restaurant POS &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />


    </div>
  );
}
