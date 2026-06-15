"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";

const logos = [
  "Bristol Logistics",
  "Northgate Retail",
  "Solent Tech",
  "Anglia Care Group",
  "Thames Valley Foods",
  "Caledonia Builds",
];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-1.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-1.5 text-sm font-semibold text-slate-700">4.8/5</span>
              <span className="text-sm text-slate-400">from 1,200+ reviews</span>
            </div>
            <p className="text-sm text-slate-500">
              Trusted by <span className="font-semibold text-slate-700">500+ UK businesses</span> to run
              attendance, leave, payroll &amp; performance
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-bold tracking-wide text-slate-400 transition-colors hover:text-slate-600"
              >
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
