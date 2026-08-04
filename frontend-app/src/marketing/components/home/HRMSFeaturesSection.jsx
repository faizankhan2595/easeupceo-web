import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const hrmsPillars = [
  {
    id: "attendance",
    icon: Clock,
    title: "Attendance & Time Tracking",
    shortDesc: "GPS clock-in, geofencing, facial recognition & biometric time logs.",
    badge: "GPS & Facial Sync",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    details: [
      "GPS geofenced clock-in & selfie attendance for field staff",
      "Biometric hardware integration & automatic shift logging",
      "Overtime calculation & shift roster scheduling",
      "Break duration monitoring & lateness anomaly flags"
    ],
    stats: "99.8% Accuracy"
  },
  {
    id: "payroll",
    icon: DollarSign,
    title: "HMRC PAYE Payroll Processing",
    shortDesc: "Automated salary calculations, statutory tax deductions & digital payslips.",
    badge: "HMRC RTI Ready",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    details: [
      "Auto-calculated gross to net salaries with statutory tax deductions",
      "Direct bank batch payout file generation & instant portal delivery",
      "Digital, password-protected PDF payslips via email & app",
      "HMRC PAYE RTI & Workplace Pension compliance ready"
    ],
    stats: "Saved 24 hours/month"
  },
  {
    id: "leave",
    icon: Calendar,
    title: "Statutory Leave & Time Off",
    shortDesc: "28-day statutory leave tracking, custom accruals & instant approvals.",
    badge: "Automated Accruals",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    details: [
      "Custom leave policies: 28-day statutory annual, sick, & casual leave",
      "Real-time balance calculations & automated prorating",
      "Slack / Teams notification triggers for manager sign-offs",
      "UK Bank Holiday calendar overlay across departments"
    ],
    stats: "Zero Email Friction"
  },
  {
    id: "recruitment",
    icon: UserCheck,
    title: "Recruitment & ATS",
    shortDesc: "End-to-end applicant tracking, candidate funnel & offer letters.",
    badge: "Smart ATS",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    details: [
      "Custom career pages & multi-job board publishing",
      "Visual drag-and-drop hiring pipeline stages",
      "Automated interview scheduling & scorecard rubrics",
      "Digital offer letter generation with e-signature signoff"
    ],
    stats: "50% Faster Hiring"
  },
  {
    id: "performance",
    icon: Award,
    title: "Performance & OKRs",
    shortDesc: "Continuous 360 feedback, goal tracking & appraisal reviews.",
    badge: "Goal Alignment",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    details: [
      "Quarterly & annual OKR target cascade across teams",
      "360-degree peer, manager, and self-assessment surveys",
      "Continuous feedback logs & 1-on-1 meeting notes",
      "Performance vs compensation adjustment recommendation engine"
    ],
    stats: "3x Goal Completion"
  },
  {
    id: "database",
    icon: Users,
    title: "Centralized Employee Database",
    shortDesc: "Single source of truth for contracts, visa docs & org charts.",
    badge: "GDPR Encrypted",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    details: [
      "Digital onboarding checklists & document collection",
      "Interactive org hierarchy chart with line-reporting maps",
      "Asset issuance tracking (laptops, phones, access keys)",
      "Secure document vault with expiry alerts (right-to-work, visas)"
    ],
    stats: "100% Paperless HR"
  },
  {
    id: "reports",
    icon: BarChart2,
    title: "Workforce Reports & Analytics",
    shortDesc: "Real-time headcount, turnover rate, payroll cost & overtime charts.",
    badge: "Executive Insights",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    details: [
      "Real-time payroll vs budget variance graphs",
      "Absenteeism heatmaps & turnover trend forecasting",
      "Custom builder with drag-and-drop report metrics",
      "One-click export to PDF, Excel, or CSV formats"
    ],
    stats: "Live Dashboard"
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance & Audit Trail",
    shortDesc: "UK labor law compliance, GDPR compliance & immutable logs.",
    badge: "Audit Ready",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    details: [
      "Automated labor law & minimum wage compliance checks",
      "Full system audit trails tracking every record change",
      "GDPR data retention enforcement & right-to-be-forgotten flows",
      "Document renewal reminders for safety certifications"
    ],
    stats: "100% Audit Ready"
  },
  {
    id: "self-service",
    icon: Smartphone,
    title: "Employee Self-Service (ESS)",
    shortDesc: "Mobile portal for payslips, leave requests & shift updates.",
    badge: "iOS & Android Apps",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    details: [
      "Native mobile app experience for iOS & Android devices",
      "Instant payslip download & P60 / tax summary access",
      "One-tap leave application & team calendar view",
      "Shift swap requests & direct manager messaging"
    ],
    stats: "94% Adoption Rate"
  },
  {
    id: "ai-features",
    icon: Sparkles,
    title: "AI HR Intelligence",
    shortDesc: "AI shift optimization, policy Q&A assistant & flight-risk alerts.",
    badge: "Powered by AI",
    badgeBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    details: [
      "Instant AI answers for company policy & employee queries",
      "Predictive employee attrition & flight-risk detection",
      "Automated shift schedule generation based on demand",
      "Smart anomaly detection for attendance & expense claims"
    ],
    stats: "10x Productivity"
  }
];

export default function HRMSFeaturesSection() {
  const [activeId, setActiveId] = useState(hrmsPillars[0].id);
  const activePillar = hrmsPillars.find(p => p.id === activeId) || hrmsPillars[0];

  return (
    <section id="hrms-features" className="py-24 bg-white text-slate-900 scroll-mt-16 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Flagship HRMS Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            10 Pillars of{" "}
            <span className="italic font-serif text-brand-600 underline decoration-brand-300 decoration-wavy decoration-1 underline-offset-6">
              Modern Workforce
            </span>{" "}
            Management
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything your HR team, managers, and employees need — built into one clean, integrated platform.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none justify-start lg:justify-center">
          {hrmsPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = pillar.id === activeId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? "bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-600/20 scale-[1.02] font-semibold"
                    : "bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{pillar.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Tab Display Card */}
        <div className="mb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl bg-slate-50 text-slate-900 p-8 lg:p-10 shadow-lg border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                    <activePillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-md border ${activePillar.badgeBg}`}>
                      {activePillar.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
                  {activePillar.shortDesc}
                </p>

                <ul className="space-y-3 mb-8">
                  {activePillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <Link
                    to="/hrms"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 font-semibold text-white transition-all text-sm shadow-md"
                  >
                    <span>Explore HRMS Features</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-semibold border-l border-slate-300 pl-4">
                    {activePillar.stats}
                  </span>
                </div>
              </div>

              {/* Right Side Visual Component */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                  <span className="font-semibold text-slate-900">Feature Preview</span>
                  <span className="text-emerald-600 font-bold">100% Cloud Native</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs text-slate-500 font-semibold mb-1">Active Pillar</p>
                  <p className="text-base font-bold text-slate-900">{activePillar.title}</p>
                  <p className="text-xs text-brand-600 font-semibold mt-1">{activePillar.stats}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-brand-600 w-[85%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-600 font-semibold">
                    <span>Automation Rate</span>
                    <span className="font-bold text-slate-900">85% Automated</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hrmsPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = pillar.id === activeId;
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                  isSelected
                    ? "bg-brand-50/60 border-brand-300 shadow-sm ring-1 ring-brand-200"
                    : "bg-white text-slate-900 border-slate-200/80 hover:border-brand-200 hover:shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white"
                  } transition-all`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${pillar.badgeBg}`}>
                    {pillar.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
