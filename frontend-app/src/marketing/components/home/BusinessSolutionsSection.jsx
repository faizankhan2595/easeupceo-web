import { Link } from "react-router-dom";
import { Users, Package, Utensils, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessSolutionsSection() {
  return (
    <section className="py-20 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Aceternity UI Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/80 text-slate-700 text-xs font-medium tracking-wide mb-3">
            Integrated Business Architecture
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 leading-snug">
            One Platform.{" "}
            <span className="italic font-serif bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-800 bg-clip-text text-transparent">
              Multiple Business Solutions
            </span>
            .
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Start with our flagship HRMS platform, then seamlessly add operational modules as your business scales.
          </p>
        </div>

        {/* 3 Solution Cards — Visual Hierarchy: 70% HRMS, 20% Inventory, 10% Restaurant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ⭐ HRMS Card — FEATURED & VISUALLY DOMINANT (70% Emphasis, spans 6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-2xl bg-brand-50/30 border border-brand-300 p-6 sm:p-8 shadow-sm relative flex flex-col justify-between group hover:border-brand-500 transition-all"
          >
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-brand-600 text-white font-semibold text-[11px] tracking-wide shadow-xs flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              <span>Flagship Core Platform</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-brand-700 bg-brand-100/80 px-2.5 py-0.5 rounded-full border border-brand-200/80">
                  Primary Solution
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">
                ⭐ HRMS &amp; Payroll Suite
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                The central heartbeat of your business. Automate time &amp; attendance, HMRC PAYE tax payroll, statutory leave, employee self-service, ATS hiring, and performance OKRs.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>GPS Mobile Clock-In &amp; Biometric Attendance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>Automated Payroll &amp; HMRC PAYE Tax Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>28-Day Statutory Leave &amp; Accrual Rules</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>Native Mobile ESS Apps (iOS &amp; Android)</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-brand-200/60 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 block font-medium">Core Product</span>
                <span className="text-xs font-semibold text-brand-700">Flagship HR Suite</span>
              </div>
              <Link
                to="/hrms"
                className="px-5 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 font-medium text-white shadow-xs transition-all flex items-center gap-1.5 text-xs"
              >
                <span>Explore HRMS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Inventory Management Card — EXPANSION MODULE (20% Emphasis, spans 3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl bg-slate-50/70 border border-slate-200/80 p-5 flex flex-col justify-between hover:border-amber-300 hover:bg-white transition-all group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-200">
                  Add-on Module
                </span>
              </div>

              <h3 className="text-base font-semibold text-slate-800 mb-1.5">
                Inventory Management
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed mb-3.5">
                Expand into multi-warehouse stock control, batch tracking, PO workflows, and stock valuation.
              </p>

              <ul className="space-y-1.5 mb-5">
                <li className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Multi-Warehouse Control</span>
                </li>
                <li className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Batch &amp; Serial Tracking</span>
                </li>
                <li className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Supplier Purchase Orders</span>
                </li>
              </ul>
            </div>

            <div className="pt-3.5 border-t border-slate-200/60">
              <Link
                to="/inventory-management"
                className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-200/80 font-medium text-slate-800 transition-all text-xs flex items-center justify-center gap-1 shadow-xs"
              >
                <span>Explore Inventory</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </motion.div>

          {/* Restaurant Management Card — EXPANSION MODULE (10% Emphasis, spans 3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl bg-slate-50/70 border border-slate-200/80 p-5 flex flex-col justify-between hover:border-rose-300 hover:bg-white transition-all group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-lg bg-rose-100/80 border border-rose-200 flex items-center justify-center text-rose-700">
                  <Utensils className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded-full border border-rose-200">
                  Add-on Module
                </span>
              </div>

              <h3 className="text-base font-semibold text-slate-800 mb-1.5">
                Restaurant Management
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed mb-3.5">
                Expand into restaurant POS billing, table QR ordering, and Kitchen Display Systems (KDS).
              </p>

              <ul className="space-y-1.5 mb-5">
                <li className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>High-Speed POS Billing</span>
                </li>
                <li className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Table QR Dine-In Ordering</span>
                </li>
                <li className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Kitchen Display (KDS) Sync</span>
                </li>
              </ul>
            </div>

            <div className="pt-3.5 border-t border-slate-200/60">
              <Link
                to="/restaurant-management"
                className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-200/80 font-medium text-slate-800 transition-all text-xs flex items-center justify-center gap-1 shadow-xs"
              >
                <span>Explore Restaurant POS</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
