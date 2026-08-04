import { RefreshCw } from "lucide-react";

const integrations = [
  { name: "Xero", category: "Accounting", desc: "Automated payroll journal sync" },
  { name: "QuickBooks", category: "Finance", desc: "Direct expense & wage ledger push" },
  { name: "Sage", category: "Payroll", desc: "HMRC tax code & P60 export" },
  { name: "Slack", category: "Communication", desc: "Clock-in alerts & leave approvals" },
  { name: "Microsoft Teams", category: "Workplace", desc: "Bot triggers for shift updates" },
  { name: "Biometric Hardware", category: "Time Clocks", desc: "ZKTeco & Anviz device sync" },
  { name: "Stripe & Banks", category: "Payouts", desc: "BACS & direct salary transfers" },
  { name: "Google Workspace", category: "SSO", desc: "Single sign-on & calendar sync" }
];

export default function IntegrationsSection() {
  return (
    <section className="py-20 bg-white text-slate-800 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-700">Connected Ecosystem</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 mt-1.5 leading-snug">
            Seamlessly Integrates with Your{" "}
            <span className="italic font-serif bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
              Existing UK Stack
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Connect Worklynx HRMS with UK accounting packages, communication apps, and biometric time clock hardware.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:border-brand-200 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-brand-700 border border-slate-200/80">
                  {item.category}
                </span>
                <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <h3 className="text-sm font-semibold text-slate-800 mb-0.5">{item.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
