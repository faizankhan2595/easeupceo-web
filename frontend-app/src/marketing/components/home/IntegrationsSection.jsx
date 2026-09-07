import { InfiniteMovingCards } from "@/uk-components/ui/infinite-moving-cards";

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
    <section className="py-20 bg-white text-slate-800 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 leading-snug">
            Seamlessly Integrates with Your{" "}
            <span className="italic font-serif bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
              Existing Tech Stack
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Connect Worklynx HRMS with accounting packages, communication apps, and biometric time clock hardware.
          </p>
        </div>

        {/* Aceternity Infinite Moving Cards */}
        <InfiniteMovingCards items={integrations} direction="left" speed="normal" />
      </div>
    </section>
  );
}
