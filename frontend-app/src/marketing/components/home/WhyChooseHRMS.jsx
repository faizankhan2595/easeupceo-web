import { ShieldCheck, Zap, Heart, Lock, Globe2, Award } from "lucide-react";
import { HoverEffect } from "@/uk-components/ui/card-hover-effect";

const reasons = [
  {
    icon: Zap,
    title: "Up & Running in Under 24 Hours",
    desc: "Import employee records via CSV or integrations and launch automated attendance & payroll on day one."
  },
  {
    icon: ShieldCheck,
    title: "100% Tax & Legal Compliance",
    desc: "Built-in statutory tax rules, 28-day leave algorithms, and automated labor law updates."
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
    desc: "Seamlessly manage local office teams, remote workers, field crews, and multi-branch operations in one place."
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
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800">
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

        {/* Aceternity UI Card Hover Effect with Glass Icons */}
        <HoverEffect items={reasons} />
      </div>
    </section>
  );
}
