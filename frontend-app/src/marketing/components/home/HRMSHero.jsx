import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Sparkles, Clock, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import DemoModal from "@/uk-components/DemoModal";

export default function HRMSHero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Flagship Product Suite — HRMS &amp; HMRC Payroll</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Complete HRMS Platform for{" "}
              <span className="bg-gradient-to-r from-brand-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal"
            >
              Streamline HMRC PAYE payroll processing, GPS time &amp; attendance, 28-day statutory leave management, ATS recruitment, 360 performance reviews, employee self-service, and legal compliance in one unified solution.
            </motion.p>

            {/* Small Expansion Callout Sentence */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shrink-0" />
              <span>
                Need more than HR? Expand with{" "}
                <Link to="/inventory-management" className="text-amber-400 font-semibold underline hover:text-amber-300">
                  Inventory
                </Link>{" "}
                and{" "}
                <Link to="/restaurant-management" className="text-rose-400 font-semibold underline hover:text-rose-300">
                  Restaurant Management
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
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 font-bold text-white shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Book Demo</span>
              </button>

              <a
                href="#hrms-features"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 font-semibold text-slate-200 hover:text-white transition-all text-center text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <span>Explore Platform</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Feature Highlights Pills */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-400" /> HMRC PAYE Payroll</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-400" /> GPS Clock-In</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-400" /> ESS Mobile Portal</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-400" /> 100% Legal Compliance</span>
            </div>
          </div>

          {/* Right Column — Rich Visual HRMS Dashboard Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 border border-slate-800 shadow-2xl backdrop-blur-xl"
            >
              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold text-sm">
                    HR
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Worklynx HR Suite</h3>
                    <p className="text-xs text-slate-400">Workforce Dashboard</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  HMRC Live Sync
                </span>
              </div>

              {/* Stats Widgets */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Active Employees</span>
                    <Users className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  <div className="text-xl font-bold text-white">1,482</div>
                  <span className="text-[10px] text-emerald-400 font-medium">+12 this month</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Attendance Rate</span>
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xl font-bold text-white">98.4%</div>
                  <span className="text-[10px] text-slate-400 font-medium">GPS Verified</span>
                </div>
              </div>

              {/* Sample HR Activity List */}
              <div className="mt-4 space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[10px]">
                      SC
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">Sarah Chen</p>
                      <p className="text-[10px] text-slate-400">28-Day Statutory Leave • 3 days</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                    Approved
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-[10px]">
                      PR
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">Monthly HMRC Payroll</p>
                      <p className="text-[10px] text-slate-400">PAYE Tax &amp; RTI Filing Complete</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 font-medium">
                    Filed
                  </span>
                </div>
              </div>

              {/* Footer inside mockup */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Modules Connected: HRMS + Payroll</span>
                <span className="text-brand-400 font-semibold flex items-center gap-1">
                  Self-Service Active
                </span>
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
