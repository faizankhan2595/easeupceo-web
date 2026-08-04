import { ShieldCheck, Zap, Heart, Lock, Globe2, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Up & Running in Under 24 Hours",
    desc: "Import employee records via CSV or integrations and launch automated attendance & payroll on day one."
  },
  {
    icon: ShieldCheck,
    title: "100% UK Tax & Legal Compliance",
    desc: "Built-in HMRC PAYE RTI tax rules, 28-day statutory leave algorithms, and automated labor law updates."
  },
  {
    icon: Heart,
    title: "Loved by Employees & HR Managers",
    desc: "Empower staff with an intuitive self-service portal for payslips, leave, and clock-in while freeing HR from manual admin."
  },
  {
    icon: Lock,
    title: "Bank-Grade AES-256 Security",
    desc: "Role-based access control, GDPR data isolation, SSL encryption, and immutable audit logs keep records safe."
  },
  {
    icon: Globe2,
    title: "Multi-Location & Remote Support",
    desc: "Seamlessly manage local UK office teams, remote workers, field crews, and multi-branch operations in one place."
  },
  {
    icon: Award,
    title: "Unmatched Cost Efficiency",
    desc: "Eliminate 5+ fragmented HR tools and spreadsheet errors with one affordable, all-in-one platform."
  }
];

export default function WhyChooseHRMS() {
  return (
    <section className="py-20 bg-slate-50/70 text-slate-800 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-700">Why Modern Teams Upgrade</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 mt-1.5">
            Why Choose Our{" "}
            <span className="italic font-serif bg-gradient-to-r from-slate-800 via-brand-600 to-indigo-600 bg-clip-text text-transparent">
              HRMS Platform
            </span>
            ?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Purpose-built to eliminate payroll errors, streamline attendance, and elevate the employee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/90 border border-slate-200/70 shadow-xs hover:shadow-sm hover:border-brand-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-3 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
