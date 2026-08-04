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
  Lock,
  ArrowRight,
  Zap,
  Globe,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

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
    icon: Lock,
    title: "Security & Role Access Controls",
    desc: "AES-256 bit encryption, multi-tenant isolation, role-based permission matrices, and field-level privacy controls.",
    metrics: "Bank-Grade AES-256"
  }
];

export default function UKHRMSPage() {
  useEffect(() => {
    document.title = "UK HRMS & HMRC PAYE Payroll Software | Worklynx UK";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Hero Breadcrumb Ribbon */}
          <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 mb-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-brand-700">HRMS &amp; HMRC Payroll</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800 max-w-4xl mx-auto leading-tight"
          >
            Complete HRMS Platform for{" "}
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent italic font-serif">
              Modern UK Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Automate HMRC PAYE payroll, GPS attendance, 28-day statutory leave, ATS recruitment, 360 performance reviews, and employee self-service in one enterprise UK HR solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 font-semibold text-white shadow-xs transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Book UK HRMS Demo</span>
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
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-sky-600" /> UK Support &amp; Onboarding</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-800">10 Core Pillars of Worklynx HRMS</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Designed from the ground up to solve complex UK HR, payroll, and workforce operations.</p>
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
                Worklynx seamlessly pairs your HR dataset with our integrated Inventory Management and Restaurant Management modules under one unified UK account.
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
    </div>
  );
}
