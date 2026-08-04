import { Users, Shield, Package, Utensils, BarChart3, TrendingUp, CheckCircle2, UserCheck, ShieldCheck, PieChart, Layers } from "lucide-react";
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
        
        {/* SVG Graphic Visualization */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
            <span className="flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-brand-600" /> Staff Onboarding Pipeline</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">100% Onboarded</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 bg-white rounded-lg border border-slate-200">
              <span className="block font-bold text-slate-900">48 Active</span>
              <span className="text-[9px] text-slate-500">Employees</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-200">
              <span className="block font-bold text-emerald-600">97.9%</span>
              <span className="text-[9px] text-slate-500">On-Time</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-200">
              <span className="block font-bold text-brand-700">GPS Sync</span>
              <span className="text-[9px] text-slate-500">Geofenced</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "HRMS & PAYE Engine",
    subtitle: "Core Engine",
    description: "Automate HMRC payroll, tax deductions, 28-day statutory leave, ATS recruitment, and 360 performance reviews.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
          <Shield className="w-5 h-5" />
          <span>Flagship HR Core</span>
        </div>
        <p className="text-xs text-slate-600">Auto-calculated gross-to-net payroll with statutory tax and pension submissions.</p>

        {/* SVG Graphic Tax & Payroll Breakdown */}
        <div className="p-3.5 rounded-xl bg-brand-50/60 border border-brand-200 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-brand-900">
            <span>£48,250.00 Monthly Payroll</span>
            <span className="text-[10px] bg-brand-200 text-brand-900 px-2 py-0.5 rounded-full font-bold">HMRC Ready</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden flex">
            <div className="bg-brand-600 h-full" style={{ width: "70%" }} />
            <div className="bg-indigo-400 h-full" style={{ width: "20%" }} />
            <div className="bg-amber-400 h-full" style={{ width: "10%" }} />
          </div>
          <div className="flex justify-between text-[10px] text-slate-600 font-medium">
            <span>Net Salaries (70%)</span>
            <span>PAYE Tax (20%)</span>
            <span>NI (10%)</span>
          </div>
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

        {/* Unsplash Visual Image Card */}
        <div className="rounded-xl overflow-hidden border border-amber-200/80 h-28 relative">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" 
            alt="Stock Control Warehouse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-[11px] font-bold text-white">£142,800.00 Stock Valuation • 3 Warehouses</span>
          </div>
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

        {/* Unsplash Visual POS Image */}
        <div className="rounded-xl overflow-hidden border border-rose-200/80 h-28 relative">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" 
            alt="Restaurant POS Terminal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-[11px] font-bold text-white">£3,840.50 Daily Revenue • KDS Active</span>
          </div>
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

        {/* SVG Multi-Bar Graphic */}
        <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-purple-900">
            <span>Cross-Department P&amp;L Sync</span>
            <span className="text-[10px] bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full font-bold">Automated</span>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
            {[40, 65, 80, 55, 90, 100].map((h, i) => (
              <div key={i} className="w-full bg-purple-500/80 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Scalable Business Growth",
    subtitle: "Final Outcome",
    description: "Automated business operations, zero spreadsheet errors, and maximum profitability.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
          <TrendingUp className="w-5 h-5" />
          <span>Scalable Business Outcome</span>
        </div>
        <p className="text-xs text-slate-600">Scale your workforce and business operations with complete peace of mind.</p>

        <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-center space-y-1">
          <span className="text-lg font-bold text-emerald-900">Zero Data Silos</span>
          <p className="text-[11px] text-emerald-700 font-medium">100% Scalable Enterprise Platform</p>
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

        {/* Aceternity Sticky Scroll Reveal with Rich SVG Graphics & Visual Images */}
        <StickyScroll content={ecosystemContent} />

      </div>
    </section>
  );
}
