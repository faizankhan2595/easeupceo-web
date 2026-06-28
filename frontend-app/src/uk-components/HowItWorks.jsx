"use client";

import { motion } from "motion/react";
import { FadeIn } from "@/uk-components/motion/FadeIn";

const steps = [
  {
    step: "01",
    title: "Set up your workspace",
    description:
      "Import your employee records, contracts and leave balances in minutes with guided onboarding and ready-to-use templates.",
  },
  {
    step: "02",
    title: "Automate day-to-day HR",
    description:
      "Staff clock in, request leave and update their details themselves — with approvals routed automatically to the right manager.",
  },
  {
    step: "03",
    title: "Run payroll with confidence",
    description:
      "Review hours, leave and bonuses, then run PAYE-compliant payroll and submit RTI to HMRC directly from Worklynx.",
  },
  {
    step: "04",
    title: "Track performance & growth",
    description:
      "Set goals, run review cycles and gather feedback so every employee has a clear view of their progress.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-brand-600">How it works</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Up and running in days, not months
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Worklynx is designed for fast onboarding — most teams are fully set
            up and running their first payroll within a week.
          </p>
        </FadeIn>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1} className="relative">
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1, ease: "backOut" }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-600 to-brand-500 text-sm font-bold text-white shadow-md shadow-brand-600/25"
                >
                  {item.step}
                </motion.span>
                {index < steps.length - 1 && (
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                    className="hidden h-px flex-1 bg-linear-to-r from-brand-300 to-slate-200 lg:block"
                  />
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
