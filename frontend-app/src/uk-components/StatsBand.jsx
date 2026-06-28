"use client";

import { FadeIn } from "@/uk-components/motion/FadeIn";
import { Counter } from "@/uk-components/motion/Counter";

const stats = [
  { value: 5, suffix: "+", label: "UK businesses run on Worklynx" },
  { value: 150, suffix: "+", label: "Employees managed daily" },
  { value: 100, suffix: "%", label: "Customer satisfaction score" },
  { value: 15, suffix: "hrs", label: "Saved per month on HR admin" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-900 to-brand-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
