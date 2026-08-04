import { InfiniteMovingCards } from "@/uk-components/ui/infinite-moving-cards";

const trustedCompanies = [
  { name: "Apex Retail Group", category: "Retail Enterprise", desc: "120+ Employees in London & Manchester" },
  { name: "Vanguard Tech", category: "Software", desc: "Automated HMRC Payroll & Pension" },
  { name: "Bistro Hospitality", category: "RMS & POS", desc: "Integrated Staff Shifts & POS Billing" },
  { name: "Lumina Logistics", category: "Warehouse", desc: "GPS Mobile Clock-in & Stock ERP" },
  { name: "Cambridge BioTech", category: "Healthcare", desc: "GDPR Compliant HR Document Vault" }
];

export default function LogoCloud() {
  return (
    <section className="py-10 bg-slate-50/50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Trusted by 500+ Modern Businesses
        </p>
        <InfiniteMovingCards items={trustedCompanies} direction="right" speed="fast" />
      </div>
    </section>
  );
}