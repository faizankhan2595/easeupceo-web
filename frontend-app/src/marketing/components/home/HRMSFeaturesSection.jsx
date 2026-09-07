import { useState } from "react";
import {
  Clock,
  DollarSign,
  Calendar,
  UserCheck,
  Award,
  Users,
  BarChart2,
  ShieldCheck,
  Smartphone,
  Lock,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileText,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { BentoGrid, BentoGridItem } from "@/uk-components/ui/bento-grid";

const hrmsPillars = [
  {
    id: "attendance",
    icon: Clock,
    title: "Attendance & Time Tracking",
    shortDesc: "GPS clock-in, geofencing, facial recognition & biometric time logs.",
    badge: "GPS & Facial Sync",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-teal-50 via-slate-50 to-emerald-50 p-3 border border-teal-100 flex flex-col justify-between overflow-hidden relative">
        <div className="flex items-center justify-between text-xs text-teal-800 font-semibold">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-teal-600" /> Central Office Geofence</span>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">LIVE</span>
        </div>
        {/* SVG Graphic Bar Chart */}
        <div className="flex items-end justify-between gap-1 h-16 pt-2 px-1">
          {[65, 80, 95, 88, 98, 92, 100].map((h, i) => (
            <div key={i} className="w-full bg-teal-200/80 rounded-t-sm relative group hover:bg-teal-500 transition-colors" style={{ height: `${h}%` }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-teal-900 opacity-0 group-hover:opacity-100">{h}%</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-slate-400 font-medium pt-1">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>
    )
  },
  {
    id: "payroll",
    icon: DollarSign,
    title: "HMRC PAYE Payroll Processing",
    shortDesc: "Automated salary calculations, statutory tax deductions & digital payslips.",
    badge: "HMRC RTI Ready",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-3.5 border border-emerald-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-700">Gross-to-Net Breakdown</span>
          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">£48,250.00</span>
        </div>
        <div className="space-y-1.5 my-auto">
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden flex">
            <div className="bg-emerald-500 h-full" style={{ width: "70%" }} title="Net Salary" />
            <div className="bg-teal-400 h-full" style={{ width: "20%" }} title="PAYE Tax" />
            <div className="bg-amber-400 h-full" style={{ width: "10%" }} title="National Insurance" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-medium">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Net Salary (70%)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-teal-400" /> PAYE (20%)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> NI (10%)</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "leave",
    icon: Calendar,
    title: "Statutory Leave & Time Off",
    shortDesc: "28-day statutory leave tracking, custom accruals & instant approvals.",
    badge: "Automated Accruals",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50 p-3 border border-indigo-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-indigo-900 font-semibold">
          <span>28-Day Annual Leave Allowance</span>
          <span className="text-[10px] text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full font-bold">22 Days Left</span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center my-auto">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, idx) => (
            <div key={idx} className="text-[9px] font-bold text-slate-400">{d}</div>
          ))}
          {Array.from({ length: 14 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-4 rounded-xs text-[9px] flex items-center justify-center font-bold ${idx === 3 || idx === 4 ? "bg-indigo-600 text-white" : idx === 8 ? "bg-amber-400 text-slate-900" : "bg-white border border-slate-200 text-slate-600"
                }`}
            >
              {idx + 12}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "recruitment",
    icon: UserCheck,
    title: "Recruitment & ATS",
    shortDesc: "End-to-end applicant tracking, candidate funnel & offer letters.",
    badge: "Smart ATS",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50 p-3 border border-purple-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-purple-900 font-semibold">
          <span>Hiring Funnel</span>
          <span className="text-[10px] text-purple-700 font-bold">14 Active Roles</span>
        </div>
        <div className="space-y-1.5 my-auto">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-500 w-16">Applied</span>
            <div className="flex-1 bg-purple-200 h-3 rounded-r-md overflow-hidden relative">
              <div className="bg-purple-600 h-full" style={{ width: "85%" }} />
            </div>
            <span className="text-[10px] font-bold text-slate-700">124</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-500 w-16">Interview</span>
            <div className="flex-1 bg-purple-200 h-3 rounded-r-md overflow-hidden relative">
              <div className="bg-purple-500 h-full" style={{ width: "45%" }} />
            </div>
            <span className="text-[10px] font-bold text-slate-700">28</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-500 w-16">Offered</span>
            <div className="flex-1 bg-purple-200 h-3 rounded-r-md overflow-hidden relative">
              <div className="bg-emerald-500 h-full" style={{ width: "15%" }} />
            </div>
            <span className="text-[10px] font-bold text-emerald-700">6</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "performance",
    icon: Award,
    title: "Performance & OKRs",
    shortDesc: "Continuous 360 feedback, goal tracking & appraisal reviews.",
    badge: "Goal Alignment",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-rose-50 via-slate-50 to-orange-50 p-3.5 border border-rose-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-rose-900 font-semibold">
          <span>Q3 Performance OKRs</span>
          <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">94% Achieved</span>
        </div>
        <div className="flex items-center gap-4 my-auto">
          <div className="w-14 h-14 rounded-full border-4 border-rose-500 border-t-rose-200 flex items-center justify-center font-bold text-xs text-slate-800">
            94%
          </div>
          <div className="space-y-1 flex-1">
            <div className="text-[11px] font-semibold text-slate-700 flex justify-between">
              <span>Sprint Goals</span>
              <span className="text-emerald-600">On Track</span>
            </div>
            <div className="text-[10px] text-slate-500">360 Appraisal Completed by 42 Employees</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "database",
    icon: Users,
    title: "Centralized Employee Database",
    shortDesc: "Single source of truth for contracts, visa docs & org charts.",
    badge: "GDPR Encrypted",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 p-3 border border-blue-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-blue-900 font-semibold">
          <span>Employee Document Vault</span>
          <span className="text-[10px] text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full font-bold">256-Bit Encrypted</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold text-slate-800 truncate">Contract.pdf</p>
              <p className="text-[8px] text-emerald-600 font-semibold">Signed</p>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold text-slate-800 truncate">RightToWork</p>
              <p className="text-[8px] text-blue-600 font-semibold">Verified</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "reports",
    icon: BarChart2,
    title: "Workforce Reports & Analytics",
    shortDesc: "Real-time headcount, turnover rate, payroll cost & overtime charts.",
    badge: "Executive Insights",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-amber-50 via-slate-50 to-yellow-50 p-3 border border-amber-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-amber-900 font-semibold">
          <span>Workforce Headcount Growth</span>
          <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5">
            <TrendingUp className="w-3 h-3" /> +18.4%
          </span>
        </div>
        <div className="h-16 w-full flex items-end justify-between gap-1.5 pt-2">
          {[30, 42, 55, 68, 80, 95, 110].map((val, idx) => (
            <div key={idx} className="w-full bg-amber-400/80 rounded-t-md hover:bg-amber-500 transition-all" style={{ height: `${(val / 110) * 100}%` }} />
          ))}
        </div>
      </div>
    )
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance & Audit Trail",
    shortDesc: "Labor law compliance, GDPR compliance & immutable logs.",
    badge: "Audit Ready",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50 p-3 border border-sky-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-sky-900 font-semibold">
          <span>Compliance Audit Trail</span>
          <span className="text-[10px] text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full font-bold">100% Passed</span>
        </div>
        <div className="space-y-1 my-auto">
          <div className="flex items-center justify-between text-[10px] p-1.5 rounded-md bg-white border border-slate-200">
            <span className="flex items-center gap-1 text-slate-700"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> HMRC PAYE RTI Audit</span>
            <span className="text-[9px] font-bold text-emerald-600">VERIFIED</span>
          </div>
          <div className="flex items-center justify-between text-[10px] p-1.5 rounded-md bg-white border border-slate-200">
            <span className="flex items-center gap-1 text-slate-700"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> GDPR Data Isolation</span>
            <span className="text-[9px] font-bold text-emerald-600">ENCRYPTED</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "self-service",
    icon: Smartphone,
    title: "Employee Self-Service (ESS)",
    shortDesc: "Mobile portal for payslips, leave requests & shift updates.",
    badge: "iOS & Android Apps",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    header: (
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-cyan-50 via-slate-50 to-teal-50 p-3 border border-cyan-100 flex items-center justify-center relative overflow-hidden">
        <div className="w-24 h-28 bg-white rounded-t-xl border border-slate-300 shadow-md p-2 space-y-1.5">
          <div className="w-6 h-1 bg-slate-300 rounded-full mx-auto" />
          <div className="text-[8px] font-bold text-slate-800 text-center">Worklynx ESS</div>
          <div className="p-1 rounded-md bg-brand-50 border border-brand-200 text-[7px] text-brand-800 font-bold text-center">
            Clock In (09:00)
          </div>
          <div className="p-1 rounded-md bg-emerald-50 border border-emerald-200 text-[7px] text-emerald-800 font-bold text-center">
            Payslip Ready
          </div>
        </div>
      </div>
    )
  }
];

export default function HRMSFeaturesSection() {
  const [activeId, setActiveId] = useState(hrmsPillars[0].id);

  return (
    <section id="hrms-features" className="py-20 bg-white text-slate-800 scroll-mt-16 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Aceternity UI Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 leading-snug">
            10 Pillars of{" "}
            <span className="italic font-serif bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
              Modern Workforce
            </span>{" "}
            Management
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything your HR team, managers, and employees need — built into one clean, integrated platform.
          </p>
        </div>

        {/* Aceternity Bento Grid with SVG Visual Headers */}
        <BentoGrid className="mb-8">
          {hrmsPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = pillar.id === activeId;
            return (
              <BentoGridItem
                key={pillar.id}
                title={pillar.title}
                description={pillar.shortDesc}
                badge={pillar.badge}
                badgeBg={pillar.badgeBg}
                isSelected={isSelected}
                onClick={() => setActiveId(pillar.id)}
                header={pillar.header}
                icon={<Icon className={`w-5 h-5 ${isSelected ? "text-brand-600" : "text-slate-500"}`} />}
              />
            );
          })}
        </BentoGrid>

        <div className="text-center mt-8">
          <Link
            to="/hrms"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 font-semibold text-white transition-all text-xs shadow-xs"
          >
            <span>Explore All 10 HRMS Modules</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
