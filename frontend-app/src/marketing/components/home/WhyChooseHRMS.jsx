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
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Why Modern Teams Upgrade</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Why Choose Our HRMS Platform?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Purpose-built to eliminate payroll errors, streamline attendance, and elevate the employee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-brand-500/40 hover:bg-slate-950 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-5 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
