import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Sparkles, Clock, Users, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import DemoModal from "@/uk-components/DemoModal";

export default function HRMSHero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200/60 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-bold mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-600 shrink-0" />
              <span>Flagship Platform — UK HRMS &amp; HMRC Payroll</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Complete HRMS Platform for{" "}
              <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl"
            >
              Automate HMRC PAYE payroll, GPS time &amp; attendance, statutory leave, ATS recruitment, 360 performance reviews, and employee self-service in one enterprise solution.
            </motion.p>

            {/* Sub-Callout Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700"
            >
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse shrink-0" />
              <span>
                Need operational tools too? Expand with{" "}
                <Link to="/inventory-management" className="text-amber-600 font-bold underline hover:text-amber-700">
                  Inventory
                </Link>{" "}
                and{" "}
                <Link to="/restaurant-management" className="text-rose-600 font-bold underline hover:text-rose-700">
                  Restaurant POS
                </Link>.
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 font-bold text-white shadow-lg shadow-brand-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Book Demo</span>
              </button>

              <a
                href="#hrms-features"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 font-bold text-slate-700 transition-all text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore Platform</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>

            {/* Scannable Metric Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-600" /> HMRC PAYE Ready</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> GPS Clock-In</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> ESS Mobile Portal</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Tax Compliant</span>
            </div>
          </div>

          {/* Right Column — Clean Visual HRMS Dashboard Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl bg-white p-6 border border-slate-200/90 shadow-xl"
            >
              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">
                    HR
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Worklynx HR Suite</h3>
                    <p className="text-xs text-slate-500">Workforce Overview</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  HMRC Live
                </span>
              </div>

              {/* Stats Widgets */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Active Staff</span>
                    <Users className="w-3.5 h-3.5 text-brand-600" />
                  </div>
                  <div className="text-xl font-extrabold text-slate-900">1,482</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">+12 this month</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Attendance</span>
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xl font-extrabold text-slate-900">98.4%</div>
                  <span className="text-[10px] text-slate-500 font-medium">GPS Verified</span>
                </div>
              </div>

              {/* Sample HR Activity List */}
              <div className="mt-4 space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">
                      SC
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Sarah Chen</p>
                      <p className="text-[10px] text-slate-500">28-Day Statutory Leave • 3 days</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Approved
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-[10px]">
                      PR
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Monthly HMRC Payroll</p>
                      <p className="text-[10px] text-slate-500">PAYE Tax &amp; RTI Filing Complete</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">
                    Filed
                  </span>
                </div>
              </div>

              {/* Footer inside mockup */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Modules: HRMS + Payroll</span>
                <span className="text-brand-600 font-bold">Self-Service Active</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
