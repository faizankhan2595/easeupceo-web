import { Users, Shield, Package, Utensils, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";
import { StickyScroll } from "@/uk-components/ui/sticky-scroll-reveal";

const ecosystemContent = [
  {
    title: "Employees & Staff Entry",
    subtitle: "Workforce Entry",
    description: "Staff onboarding, GPS clock-ins, biometric attendance, and employee master records.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
          <Users className="w-5 h-5" />
          <span>Workforce Data Sync</span>
        </div>
        <p className="text-xs text-slate-600">Employee records, right-to-work visa docs, and clock-ins automatically flow into HRMS.</p>
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
          <p className="text-xs font-semibold text-slate-800">48 Active Team Members</p>
          <p className="text-[11px] text-emerald-600 font-medium">100% Onboarding Compliance</p>
        </div>
      </div>
    )
  },
  {
    title: "HRMS & HMRC PAYE Engine",
    subtitle: "Core Engine",
    description: "Automate HMRC payroll, tax deductions, 28-day statutory leave, ATS recruitment, and 360 performance reviews.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
          <Shield className="w-5 h-5" />
          <span>Flagship HR Core</span>
        </div>
        <p className="text-xs text-slate-600">Auto-calculated gross-to-net payroll with statutory tax and pension submissions.</p>
        <div className="p-3 rounded-xl bg-brand-50/60 border border-brand-200">
          <p className="text-xs font-semibold text-brand-900">£48,250.00 HMRC PAYE Run</p>
          <p className="text-[11px] text-brand-700 font-medium">Statutory Tax &amp; Pension Ready</p>
        </div>
      </div>
    )
  },
  {
    title: "Inventory Management ERP",
    subtitle: "Expansion Module",
    description: "Multi-warehouse stock control, purchase orders, supplier workflows, and stock valuation.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm">
          <Package className="w-5 h-5" />
          <span>Stock Control ERP</span>
        </div>
        <p className="text-xs text-slate-600">Staff clocked in via HRMS are assigned to warehouse picking and PO approvals.</p>
        <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
          <p className="text-xs font-semibold text-amber-900">£142,800.00 Stock Valuation</p>
          <p className="text-[11px] text-amber-700 font-medium">3 UK Warehouses Live</p>
        </div>
      </div>
    )
  },
  {
    title: "Restaurant POS System",
    subtitle: "Expansion Module",
    description: "High-speed touchscreen billing, table QR ordering, and Kitchen Display System (KDS) sync.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm">
          <Utensils className="w-5 h-5" />
          <span>Hospitality POS</span>
        </div>
        <p className="text-xs text-slate-600">Servers clock in on POS terminals, syncing attendance and tips directly into HRMS.</p>
        <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
          <p className="text-xs font-semibold text-rose-900">£3,840.50 Daily Revenue</p>
          <p className="text-[11px] text-rose-700 font-medium">18 Tables Active</p>
        </div>
      </div>
    )
  },
  {
    title: "Unified Analytics & Reports",
    subtitle: "Unified Intelligence",
    description: "Cross-departmental executive analytics, labor cost ratios, and P&L performance metrics.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
          <BarChart3 className="w-5 h-5" />
          <span>Executive Intelligence</span>
        </div>
        <p className="text-xs text-slate-600">Single source of truth eliminating data silos between HR, inventory, and sales.</p>
        <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200">
          <p className="text-xs font-semibold text-purple-900">Real-Time P&amp;L Variance</p>
          <p className="text-[11px] text-purple-700 font-medium">Automated Executive Exports</p>
        </div>
      </div>
    )
  },
  {
    title: "Scalable Business Growth",
    subtitle: "Final Outcome",
    description: "Automated UK business operations, zero spreadsheet errors, and maximum profitability.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
          <TrendingUp className="w-5 h-5" />
          <span>Scalable Business Outcome</span>
        </div>
        <p className="text-xs text-slate-600">Scale your UK workforce and business operations with complete peace of mind.</p>
        <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
          <p className="text-xs font-semibold text-emerald-900">Zero Data Silos</p>
          <p className="text-[11px] text-emerald-700 font-medium">100% Scalable UK Platform</p>
        </div>
      </div>
    )
  }
];

export default function EcosystemSection() {
  return (
    <section className="py-20 bg-slate-50/70 text-slate-800 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aceternity UI Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 leading-snug">
            How the Worklynx{" "}
            <span className="italic font-serif bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
              Ecosystem Works
            </span>{" "}
            Together
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            One single database powering your HR, staff, stock, sales, and executive intelligence.
          </p>
        </div>

        {/* Aceternity Sticky Scroll Reveal */}
        <StickyScroll content={ecosystemContent} />

      </div>
    </section>
  );
}
