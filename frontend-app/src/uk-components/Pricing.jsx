"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight, Calculator, Users, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";
import { PLANS, planPrice, currencyForCountry } from "@/lib/plans";
import { useCountryContext } from "@/context/CountryContext";

const billingHighlights = ["14-day free trial", "Cancel anytime", "Per active employee"];

// The same three plans everywhere — the visitor's region only changes the
// currency (UK £6/£9/£12, India ₹600/₹900/₹1200). Shared catalog: lib/plans.js.
export default function Pricing() {
  const { country } = useCountryContext();
  const currency = currencyForCountry(country);

  const tiers = PLANS.map((plan) => ({
    ...plan,
    priceValue: planPrice(plan, currency.code),
    price: `${currency.symbol}${planPrice(plan, currency.code).toLocaleString(currency.locale)}`,
    bestFor: plan.best_for,
    moduleCount: plan.module_count,
  }));

  const [employeeCount, setEmployeeCount] = useState(25);
  const [selectedPlan, setSelectedPlan] = useState("Professional");

  const activePlan = tiers.find((plan) => plan.name === selectedPlan);
  const monthlyTotal = activePlan.priceValue * employeeCount;

  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white via-brand-50/40 to-white py-14 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-brand-100/60 via-accent-50/35 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent-500" />
            Pricing
          </span>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Pick the plan that matches your team today
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Three simple plans with per-employee pricing, clear modules, and room to grow without surprise add-ons.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {billingHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
              >
                <Check className="h-3.5 w-3.5 text-accent-500" />
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 shadow-sm transition-all duration-300 sm:p-6 ${
                  tier.highlighted
                    ? "scale-[1.01] bg-linear-to-br from-slate-950 via-brand-900 to-brand-700 text-white shadow-2xl shadow-brand-700/25 ring-1 ring-brand-500/40 lg:-mt-4"
                    : "bg-white/90 text-slate-900 ring-1 ring-slate-200/80 backdrop-blur hover:shadow-2xl hover:shadow-brand-500/10 hover:ring-brand-200"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    tier.highlighted ? "bg-linear-to-r from-accent-300 via-white to-brand-200" : "bg-linear-to-r from-brand-500 to-accent-400"
                  }`}
                />
                {tier.highlighted && (
                  <>
                    <div className="absolute inset-0 bg-grid opacity-15" />
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-0 top-0 h-28 bg-linear-to-r from-accent-300/30 via-white/15 to-brand-300/20 blur-2xl"
                    />
                    <span className="absolute right-6 top-5 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-lg shadow-slate-950/15">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most popular
                    </span>
                  </>
                )}

                <div className="relative">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      tier.highlighted ? "bg-white/10 text-brand-100 ring-1 ring-white/15" : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
                    }`}
                  >
                    {tier.eyebrow}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{tier.name}</h3>
                  <p className={`mt-1 text-xs font-semibold uppercase tracking-widest ${tier.highlighted ? "text-accent-200" : "text-brand-600"}`}>
                    {tier.bestFor}
                  </p>
                </div>

                <p className={`relative mt-2 min-h-12 text-sm leading-6 ${tier.highlighted ? "text-brand-100" : "text-slate-600"}`}>
                  {tier.description}
                </p>

                <div className="relative mt-5 flex items-end justify-between gap-4 border-b border-current/10 pb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                    <span className={`text-sm ${tier.highlighted ? "text-brand-100" : "text-slate-500"}`}>
                      /employee/month
                    </span>
                  </div>
                  <span className={`hidden rounded-full px-2.5 py-1 text-xs font-semibold sm:inline-flex ${tier.highlighted ? "bg-accent-400/20 text-accent-100" : "bg-accent-50 text-accent-700"}`}>
                    {tier.moduleCount} modules
                  </span>
                </div>

                <p className={`relative mt-5 text-xs font-semibold uppercase tracking-widest ${tier.highlighted ? "text-brand-100" : "text-slate-500"}`}>
                  Included
                </p>
                <ul className="relative mt-3 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.highlighted ? "bg-white/15 text-white" : "bg-accent-50 text-accent-600"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={tier.highlighted ? "text-brand-50" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={`/signup?plan=${tier.key}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-center text-sm font-semibold shadow-sm transition-all ${
                    tier.highlighted
                      ? "bg-white text-brand-700 hover:bg-brand-50 hover:shadow-lg"
                      : "bg-slate-950 text-white hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-600/20"
                  }`}
                >
                  Start free trial
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.a>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Interactive Pricing Calculator */}
        <FadeIn delay={0.15}>
          <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-brand-100 bg-white/85 p-4 shadow-2xl shadow-brand-900/8 backdrop-blur sm:p-6">
            <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-r from-brand-50 via-accent-50/80 to-brand-50" />
            <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/20">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-950">Pricing calculator</h4>
                    <p className="text-sm text-slate-500">Adjust your team size and see the monthly estimate instantly.</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-3 flex items-center justify-between gap-3 text-sm font-semibold text-slate-700">
                    <span className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-400" />
                      Number of employees
                    </span>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-bold text-brand-700">
                      {employeeCount}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="200"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full accent-brand-600"
                  />
                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>1 employee</span>
                    <span>200 employees</span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {tiers.map((plan) => {
                    const isSelected = selectedPlan === plan.name;

                    return (
                      <motion.button
                        type="button"
                        key={plan.name}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`relative overflow-hidden rounded-xl border p-4 text-left transition-all ${
                          isSelected
                            ? "border-brand-300 bg-brand-50 shadow-md shadow-brand-500/10"
                            : "border-slate-200 bg-white hover:border-brand-200 hover:bg-slate-50"
                        }`}
                      >
                        {isSelected && <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-500 to-accent-400" />}
                        <span className={`block text-sm font-semibold ${isSelected ? "text-brand-700" : "text-slate-800"}`}>
                          {plan.name}
                        </span>
                        <span className="mt-2 block text-2xl font-bold text-slate-950">{plan.price}</span>
                        <span className="mt-1 block text-xs text-slate-500">per employee/month</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/15 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-r from-brand-500/30 via-accent-500/15 to-brand-400/20 blur-2xl" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-brand-900/60 to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">Estimated total</p>
                      <p className="mt-1 text-sm text-slate-300">{selectedPlan} plan for {employeeCount} employees</p>
                    </div>
                    <ShieldCheck className="h-6 w-6 text-accent-300" />
                  </div>

                  <motion.div
                    key={`${selectedPlan}-${employeeCount}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-8 flex items-end gap-2"
                  >
                    <span className="text-5xl font-bold tracking-tight sm:text-6xl">{currency.symbol}{monthlyTotal.toLocaleString(currency.locale)}</span>
                    <span className="mb-2 text-sm text-slate-300">/month</span>
                  </motion.div>

                  <div className="mt-8 space-y-3 border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-300">Plan price</span>
                      <span className="font-semibold">{activePlan.price}/employee/month</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-300">Team size</span>
                      <span className="font-semibold">{employeeCount} employees</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-300">Included modules</span>
                      <span className="font-semibold">{activePlan.moduleCount}</span>
                    </div>
                  </div>

                  <motion.a
                    href={`/signup?plan=${activePlan.key}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-colors hover:bg-brand-50"
                  >
                    Start with {selectedPlan}
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            id="contact"
            className="relative mt-20 flex scroll-mt-24 flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-slate-900 px-8 py-20 text-center sm:flex-row sm:text-left"
          >
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="relative">
              <h3 className="text-3xl font-semibold text-white">Ready to simplify your HR?</h3>
              <p className="mt-2 text-sm text-slate-300">
                Book a free 30-minute demo with our UK-based team — no commitment required.
              </p>
            </div>
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
