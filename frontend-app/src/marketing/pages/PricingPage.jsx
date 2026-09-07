import { HelpCircle } from "lucide-react";
import Pricing from "@/uk-components/Pricing";
import HomeCTA from "../components/home/HomeCTA";

// The /pricing route now renders the same three-tier catalog as the rest of
// the product (lib/plans.js — Essentials/Professional/Advanced, per employee
// per month, currency picked by region: ₹ for India, £ elsewhere). The old
// ₹999-base + per-module add-on model was retired in Aug 2026.
const faqs = [
  {
    q: "How does per-employee pricing work?",
    a: "You pay the plan price for each active employee every month. 20 employees on Essentials costs 20 × the per-employee price — nothing else.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every new organization starts with a 14-day free trial with every module unlocked. No card required to sign up.",
  },
  {
    q: "Can I switch plans later?",
    a: "Any time. Upgrades are prorated for the remaining days of your billing cycle; downgrades apply from your next renewal.",
  },
  {
    q: "What happens when my team grows?",
    a: "Just increase your employee count from the in-app subscription screen — billing follows your team size.",
  },
  {
    q: "Do you offer volume discounts?",
    a: "Yes. For larger teams we agree a custom per-employee rate — contact sales and we'll set your negotiated price on your organization.",
  },
  {
    q: "How do I pay?",
    a: "Card/UPI/netbanking via Razorpay from inside the app, monthly or for up to 12 months at once.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Pricing />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            Pricing FAQs
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-sm font-semibold text-slate-900 mb-2">{faq.q}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
