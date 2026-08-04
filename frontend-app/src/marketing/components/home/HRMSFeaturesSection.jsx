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
    stats: "99.8% Clock-in Accuracy"
  },
  {
    id: "payroll",
    icon: DollarSign,
    title: "HMRC PAYE Payroll Processing",
    shortDesc: "Automated salary calculations, statutory tax deductions, digital payslips & bank payouts.",
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
    stats: "Zero Email Back-and-Forth"
  },
  {
    id: "recruitment",
    icon: UserCheck,
    title: "Recruitment & ATS",
    shortDesc: "End-to-end applicant tracking, candidate funnel & digital offer letters.",
    badge: "Smart ATS",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    details: [
      "Custom career pages & multi-job board publishing",
      "Visual drag-and-drop hiring pipeline stages",
      "Automated interview scheduling & scorecard rubrics",
      "Digital offer letter generation with e-signature signoff"
    ],
    stats: "50% Faster Time-to-Hire"
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
    stats: "3x Goal Completion Rate"
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
    stats: "Real-Time Dashboard"
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
    stats: "100% Regulatory Peace of Mind"
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
    stats: "94% Employee Adoption"
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
    stats: "10x Productivity Boost"
  }
];

export default function HRMSFeaturesSection() {
  const [activeId, setActiveId] = useState(hrmsPillars[0].id);
  const activePillar = hrmsPillars.find(p => p.id === activeId) || hrmsPillars[0];

  return (
    <section id="hrms-features" className="py-24 bg-white text-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            Flagship HRMS Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            10 Pillars of Modern Workforce Management
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Everything your HR team, managers, and employees need — built into one seamlessly integrated SaaS platform.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center">
          {hrmsPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = pillar.id === activeId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-400" : "text-slate-400"}`} />
                <span>{pillar.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Tab Display Card */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-slate-900 text-white p-8 lg:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                    <activePillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-md border ${activePillar.badgeBg}`}>
                      {activePillar.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                  {activePillar.shortDesc}
                </p>

                <ul className="space-y-3 mb-8">
                  {activePillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <Link
                    to="/hrms"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 font-bold text-white transition-all text-sm"
                  >
                    <span>Deep Dive into HRMS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-400 font-semibold border-l border-slate-700 pl-4">
                    {activePillar.stats}
                  </span>
                </div>
              </div>

              {/* Right Side Visual Component for Tab */}
              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                  <span className="font-semibold text-slate-200">Live Feature Preview</span>
                  <span className="text-emerald-400 font-bold">100% Cloud Native</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-xs text-slate-400 font-semibold mb-1">Pillar Status</p>
                  <p className="text-sm font-bold text-white">{activePillar.title}</p>
                  <p className="text-xs text-brand-400 mt-1">{activePillar.stats}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-indigo-500 w-[85%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Automation Rate</span>
                    <span className="font-bold text-slate-200">85% Automated</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrmsPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = pillar.id === activeId;
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                    : "bg-slate-50 text-slate-900 border-slate-200/80 hover:border-brand-500/40 hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white"
                  } transition-all`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    isSelected ? "bg-slate-800 text-slate-300" : "bg-white text-slate-600 border border-slate-200"
                  }`}>
                    {pillar.badge}
                  </span>
                </div>

                <h4 className={`text-lg font-bold mb-1.5 ${isSelected ? "text-white" : "text-slate-900 group-hover:text-brand-600"}`}>
                  {pillar.title}
                </h4>
                <p className={`text-xs leading-relaxed ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
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
