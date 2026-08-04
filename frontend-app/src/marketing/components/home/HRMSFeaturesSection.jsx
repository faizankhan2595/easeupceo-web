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
  CheckCircle2,
  ArrowRight
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
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200"
  },
  {
    id: "payroll",
    icon: DollarSign,
    title: "HMRC PAYE Payroll Processing",
    shortDesc: "Automated salary calculations, statutory tax deductions & digital payslips.",
    badge: "HMRC RTI Ready",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "leave",
    icon: Calendar,
    title: "Statutory Leave & Time Off",
    shortDesc: "28-day statutory leave tracking, custom accruals & instant approvals.",
    badge: "Automated Accruals",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  {
    id: "recruitment",
    icon: UserCheck,
    title: "Recruitment & ATS",
    shortDesc: "End-to-end applicant tracking, candidate funnel & offer letters.",
    badge: "Smart ATS",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    id: "performance",
    icon: Award,
    title: "Performance & OKRs",
    shortDesc: "Continuous 360 feedback, goal tracking & appraisal reviews.",
    badge: "Goal Alignment",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200"
  },
  {
    id: "database",
    icon: Users,
    title: "Centralized Employee Database",
    shortDesc: "Single source of truth for contracts, visa docs & org charts.",
    badge: "GDPR Encrypted",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: "reports",
    icon: BarChart2,
    title: "Workforce Reports & Analytics",
    shortDesc: "Real-time headcount, turnover rate, payroll cost & overtime charts.",
    badge: "Executive Insights",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance & Audit Trail",
    shortDesc: "UK labor law compliance, GDPR compliance & immutable logs.",
    badge: "Audit Ready",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200"
  },
  {
    id: "self-service",
    icon: Smartphone,
    title: "Employee Self-Service (ESS)",
    shortDesc: "Mobile portal for payslips, leave requests & shift updates.",
    badge: "iOS & Android Apps",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200"
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

        {/* Aceternity Bento Grid */}
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
