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
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-700">Why Modern Teams Upgrade</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Why Choose Our{" "}
            <span className="italic font-serif text-brand-600 underline decoration-brand-300 decoration-wavy decoration-1 underline-offset-4">
              HRMS Platform
            </span>
            ?
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Purpose-built to eliminate payroll errors, streamline attendance, and elevate the employee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
