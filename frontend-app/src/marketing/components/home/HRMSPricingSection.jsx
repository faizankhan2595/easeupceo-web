import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const hrmsPlans = [
  {
    name: "HRMS Starter",
    desc: "Essential HR & attendance for growing teams up to 25 employees.",
    priceMonthly: "£4",
    unit: "per employee / month",
    badge: "Popular for Small Teams",
    features: [
      "GPS Mobile Clock-In & Time Logs",
      "Statutory Leave & Holiday Tracking",
      "Centralized Employee Directory",
      "Employee Self-Service (ESS) Portal",
      "Standard HR Analytics & Reports",
      "Email & Chat Support"
    ],
    cta: "Start 14-Day Free Trial",
    featured: false
  },
  {
    name: "HRMS Professional",
    desc: "Complete HRMS + Automated Payroll & Performance for scaling companies.",
    priceMonthly: "£7",
    unit: "per employee / month",
    badge: "⭐ Flagship Best Value",
    badgeBg: "bg-brand-500 text-white",
    features: [
      "Everything in Starter, plus:",
      "HMRC PAYE Tax Payroll & Payslips",
      "Direct Bank Salary Payout Files",
      "ATS Recruitment & Onboarding",
      "360-Degree Performance & OKRs",
      "Labor Compliance & Audit Logs",
      "Priority 24/7 UK Support"
    ],
    cta: "Start 14-Day Free Trial",
    featured: true
  },
  {
    name: "HRMS Enterprise",
    desc: "Custom security, AI automation & dedicated account manager for 100+ staff.",
    priceMonthly: "Custom",
    unit: "tailored billing",
    badge: "Enterprise SLA",
    features: [
      "Everything in Professional, plus:",
      "AI HR Assistant & Shift Optimization",
      "Biometric Hardware API Integration",
      "Custom Role-Based Access Control",
      "Dedicated UK Account Manager",
      "99.99% Uptime SLA Agreement"
    ],
    cta: "Contact Sales",
    featured: false
  }
];

export default function HRMSPricingSection() {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white border-t border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Simple, Transparent HRMS Pricing
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Start with our flagship HRMS platform. Add Inventory and Restaurant modules only when you need them.
          </p>
        </div>

        {/* HRMS Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {hrmsPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                plan.featured
                  ? "bg-slate-950 border-2 border-brand-500 shadow-2xl ring-1 ring-brand-500/40"
                  : "bg-slate-950/60 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-brand-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{plan.desc}</p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.priceMonthly}</span>
                    <span className="text-xs text-slate-400">{plan.unit}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="/signup"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-1.5 ${
                    plan.featured
                      ? "bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-400 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Business Modules Add-on Box */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Operational Expansion Add-ons</span>
            <h3 className="text-2xl font-bold text-white mt-1">Need Inventory ERP or Restaurant POS?</h3>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Add Inventory Management for multi-warehouse stock control or Restaurant POS for touchscreen billing &amp; KDS at flat modular add-on pricing.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
            <Link
              to="/inventory-management"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-400 hover:text-amber-300 font-semibold text-xs transition-all text-center"
            >
              View Inventory Module Add-on &rarr;
            </Link>
            <Link
              to="/restaurant-management"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-rose-400 hover:text-rose-300 font-semibold text-xs transition-all text-center"
            >
              View Restaurant POS Add-on &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
