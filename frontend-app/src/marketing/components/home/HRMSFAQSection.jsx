import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is Worklynx UK primarily an HRMS software?",
    a: "Yes. Worklynx UK is built primarily as an all-in-one HRMS & HMRC PAYE Payroll platform. It manages attendance, payroll, 28-day statutory leave, recruitment, employee self-service, and compliance. Additional business modules (Inventory Management and Restaurant POS) are available as integrated expansion solutions."
  },
  {
    q: "How fast can we set up Worklynx HRMS for our UK workforce?",
    a: "Most businesses complete HR setup in under 24 hours. You can bulk import employee records via CSV or integrations, configure leave policies, and invite employees to download the self-service mobile app immediately."
  },
  {
    q: "How does HMRC PAYE payroll and statutory tax compliance work?",
    a: "Worklynx automatically calculates gross-to-net salaries, statutory tax deductions, and statutory holiday accruals. It generates password-protected PDF payslips and exports bank batch payment files for 1-click salary transfers."
  },
  {
    q: "Can we add Inventory Management or Restaurant POS later?",
    a: "Yes! You can start exclusively with HRMS today, and seamlessly activate Inventory Management or Restaurant POS whenever your business scales. All modules share the same employee database and user accounts."
  },
  {
    q: "Is our employee data secure and GDPR-compliant?",
    a: "Absolutely. Worklynx employs bank-grade AES-256 bit encryption, strict role-based access controls, and full GDPR compliance data isolation."
  },
  {
    q: "Do you offer mobile apps for UK employees?",
    a: "Yes, our Employee Self-Service (ESS) mobile app is available for iOS and Android. Staff can clock in via GPS, view payslips, request time off, and swap shifts directly from their phones."
  }
];

export default function HRMSFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white text-slate-800 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-700">Got Questions?</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800 mt-1.5 leading-snug">
            Frequently Asked{" "}
            <span className="italic font-serif bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about Worklynx HRMS and our UK business solutions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-50/70 border border-slate-200/70 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-800 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-brand-600" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
