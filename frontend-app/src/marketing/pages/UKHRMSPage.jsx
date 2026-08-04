import { useEffect } from "react";
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
  Sparkles, 
  ArrowRight,
  Zap,
  Lock,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import ProductSuiteSwitcher from "@/uk-components/ProductSuiteSwitcher";

const hrmsFeatures = [
  {
    icon: Clock,
    title: "GPS & Mobile Attendance",
    desc: "Geofenced clock-in, facial verification, selfie attendance, and shift rosters for UK office & remote workers.",
    metrics: "99.8% Accuracy"
  },
  {
    icon: Zap,
    title: "HMRC PAYE RTI Payroll",
    desc: "Automated salary processing, HMRC PAYE tax calculations, statutory pension deductions, and digital payslips.",
    metrics: "HMRC Ready"
  },
  {
    icon: Calendar,
    title: "28-Day Statutory Holiday & Leave",
    desc: "Statutory leave tracking, UK bank holiday overlays, custom accrual policies, and instant manager approvals.",
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
    desc: "Empower UK staff with mobile app access for payslip downloads, leave requests, shift swaps, and personal updates.",
    metrics: "iOS & Android"
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Audit Readiness",
    desc: "Automated UK labor law compliance, GDPR enforcement, audit logs, and instant regulatory report generation.",
    metrics: "100% Compliant"
  },
  {
    icon: BarChart2,
    title: "Workforce Analytics & HR Reports",
    desc: "Real-time cost per hire, headcount retention metrics, turnover insights, and graphical executive reports.",
    metrics: "Live Analytics"
  },
  {
    icon: Sparkles,
    title: "AI HR Assistant",
    desc: "AI-driven shift optimization, flight-risk predictions, policy Q&A assistant, and automated attendance flags.",
    metrics: "Powered by AI"
  }
];

export default function UKHRMSPage() {
  useEffect(() => {
    document.title = "UK HRMS & HMRC PAYE Payroll Software | Worklynx UK";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-brand-500 selection:text-white">
      {/* Product Suite Switcher Bar */}
      <ProductSuiteSwitcher activeSuiteId="hrms" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>⭐ Flagship Core Suite — UK HRMS &amp; HMRC Payroll</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            Complete HRMS Platform for{" "}
            <span className="bg-gradient-to-r from-brand-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
              Modern UK Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Automate HMRC PAYE payroll, GPS attendance, 28-day statutory leave, ATS recruitment, 360 performance reviews, and employee self-service in one enterprise UK HR solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 font-bold text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Book UK HRMS Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:bg-slate-800 font-semibold text-slate-200 hover:text-white transition-all text-center"
            >
              Start 14-Day Free Trial
            </a>
          </motion.div>

          <div className="mt-8 pt-4 inline-flex flex-wrap justify-center items-center gap-6 text-xs font-medium text-slate-400 border-t border-slate-800">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> HMRC PAYE RTI Ready</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-brand-400" /> GDPR &amp; AES-256 Encrypted</span>
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-sky-400" /> UK Support &amp; Onboarding</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">10 Core Pillars of Worklynx HRMS</h2>
            <p className="mt-4 text-slate-400 text-lg">Designed from the ground up to solve complex UK HR, payroll, and workforce operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrmsFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-brand-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {feat.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Expansion Callout */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-950/80 via-slate-900 to-slate-950 border border-brand-500/30 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400">Integrated Ecosystem</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">Need more than HRMS?</h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
                Worklynx seamlessly pairs your HR dataset with our integrated Inventory Management and Restaurant Management modules under one unified UK account.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/inventory-management"
                  className="px-6 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 text-sm font-semibold transition-all"
                >
                  Explore Inventory ERP &rarr;
                </Link>
                <Link
                  to="/restaurant-management"
                  className="px-6 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 text-rose-300 text-sm font-semibold transition-all"
                >
                  Explore Restaurant POS &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
