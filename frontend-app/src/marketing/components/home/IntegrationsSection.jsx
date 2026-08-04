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
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-700">Connected Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Seamlessly Integrates with Your{" "}
            <span className="italic font-serif text-brand-600 underline decoration-brand-300 decoration-wavy decoration-1 underline-offset-4">
              Existing UK Stack
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Connect Worklynx HRMS with UK accounting packages, communication apps, and biometric time clock hardware.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-200 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-brand-700 border border-slate-200">
                  {item.category}
                </span>
                <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{item.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
