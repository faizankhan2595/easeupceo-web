"use client";

import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";

const tiers = [
  {
    name: "Starter",
    price: "£3",
    description: "For small UK teams getting started with HR essentials.",
    features: [
      "Up to 25 employees",
      "Attendance & timesheets",
      "Leave management",
      "Employee records",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£6",
    description: "For growing businesses that need payroll and performance tools.",
    features: [
      "Up to 150 employees",
      "Everything in Starter",
      "UK payroll & RTI submissions",
      "Pension auto-enrolment",
      "Performance management",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger organisations with custom workflows and support needs.",
    features: [
      "Unlimited employees",
      "Everything in Growth",
      "Custom approval workflows",
      "Dedicated account manager",
      "Custom integrations & SLA",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-brand-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Simple, transparent pricing in GBP
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Per employee, per month. No hidden fees, cancel anytime.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-shadow duration-300 ${
                  tier.highlighted
                    ? "bg-linear-to-br from-brand-600 via-brand-600 to-brand-800 text-white shadow-2xl shadow-brand-600/30 ring-1 ring-brand-700"
                    : "bg-white text-slate-900 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 hover:shadow-2xl hover:shadow-slate-900/10 hover:ring-brand-200"
                }`}
              >
                {tier.highlighted && (
                  <>
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <motion.div
                      animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl"
                    />
                    <span className="absolute -top-3 right-8 inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-accent-500/40">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most popular
                    </span>
                  </>
                )}
                <h3 className="relative text-lg font-semibold">{tier.name}</h3>
                <p className={`relative mt-2 text-sm ${tier.highlighted ? "text-brand-100" : "text-slate-600"}`}>
                  {tier.description}
                </p>
                <div className="relative mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className={`text-sm ${tier.highlighted ? "text-brand-100" : "text-slate-500"}`}>
                      /employee/month
                    </span>
                  )}
                </div>

                <ul className="relative mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.highlighted ? "text-white" : "text-accent-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-center text-sm font-semibold shadow-sm transition-all ${
                    tier.highlighted
                      ? "bg-white text-brand-700 hover:bg-brand-50 hover:shadow-md"
                      : "bg-slate-900 text-white hover:bg-brand-600 hover:shadow-md hover:shadow-brand-600/20"
                  }`}
                >
                  {tier.price === "Custom" ? "Contact sales" : "Start free trial"}
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div
            id="contact"
            className="relative mt-20 flex scroll-mt-24 flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-slate-900 px-8 py-10 text-center sm:flex-row sm:text-left"
          >
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-white">Ready to simplify your HR?</h3>
              <p className="mt-2 text-sm text-slate-300">
                Book a free 30-minute demo with our UK-based team — no commitment required.
              </p>
            </div>
            <motion.a
              href="mailto:hello@worklynx.io"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
            >
              Book a free demo
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
