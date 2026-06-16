"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight, Calculator, Users, CreditCard, Clock, CalendarDays, ShoppingCart, Stethoscope } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";
import ComparisonTable from "@/uk-components/pricing/ComparisonTable";

const ADDON_PRICING = {
  base: 9,
  payroll_per_emp: 0.35,
  attendance_per_emp: 0.2,
  leave_per_emp: 0.15,
  restaurant: 4,
  healthcare: 4,
};

const addons = [
  {
    key: "payroll",
    name: "Payroll",
    price: `£${ADDON_PRICING.payroll_per_emp}`,
    period: "/employee/month",
    icon: CreditCard,
    bgClass: "bg-brand-50",
    borderClass: "border-brand-100",
    textClass: "text-brand-600",
    iconBg: "bg-white",
    features: ["Salary processing", "Payslip generation", "RTI & HMRC compliance", "Pension auto-enrolment"],
  },
  {
    key: "attendance",
    name: "Attendance",
    price: `£${ADDON_PRICING.attendance_per_emp}`,
    period: "/employee/month",
    icon: Clock,
    bgClass: "bg-blue-50",
    borderClass: "border-blue-100",
    textClass: "text-blue-600",
    iconBg: "bg-white",
    features: ["Punch records", "Shift management", "Daily & monthly tracking", "Overtime calculation"],
  },
  {
    key: "leave",
    name: "Leave Management",
    price: `£${ADDON_PRICING.leave_per_emp}`,
    period: "/employee/month",
    icon: CalendarDays,
    bgClass: "bg-emerald-50",
    borderClass: "border-emerald-100",
    textClass: "text-emerald-600",
    iconBg: "bg-white",
    features: ["Leave categories", "Request & approval workflows", "Balance tracking", "Leave policies"],
  },
  // {
  //   key: "restaurant",
  //   name: "Restaurant Management",
  //   price: `£${ADDON_PRICING.restaurant}`,
  //   period: "/month (flat)",
  //   flat: true,
  //   icon: ShoppingCart,
  //   bgClass: "bg-orange-50",
  //   borderClass: "border-orange-100",
  //   textClass: "text-orange-600",
  //   iconBg: "bg-white",
  //   features: ["Point of Sale (POS)", "Table & area management", "Reservations", "Kitchen display (KOT)"],
  // },
  // {
  //   key: "healthcare",
  //   name: "Doctors / Healthcare",
  //   price: `£${ADDON_PRICING.healthcare}`,
  //   period: "/month (flat)",
  //   flat: true,
  //   icon: Stethoscope,
  //   bgClass: "bg-rose-50",
  //   borderClass: "border-rose-100",
  //   textClass: "text-rose-600",
  //   iconBg: "bg-white",
  //   features: ["Patient appointments", "Doctor scheduling", "Health records", "Consultation management"],
  // },
];

const tiers = [
  {
    name: "Starter",
    price: "£3",
    priceValue: 3,
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
    priceValue: 6,
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

const calculatorPlans = tiers.filter((tier) => tier.priceValue);

export default function Pricing() {
  const [employeeCount, setEmployeeCount] = useState(25);
  const [selectedPlan, setSelectedPlan] = useState("Growth");

  const activePlan = calculatorPlans.find((plan) => plan.name === selectedPlan);
  const monthlyTotal = activePlan.priceValue * employeeCount;

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

        {/* Interactive Pricing Calculator */}
        <FadeIn delay={0.15}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-brand-100 bg-linear-to-br from-brand-50 via-white to-brand-50 p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <Calculator className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Pricing calculator</h4>
                <p className="text-xs text-slate-500">See exactly what you'll pay — no surprises</p>
              </div>
            </div>

            {/* Employee Count */}
            <div className="mb-5">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Users className="h-4 w-4 text-slate-400" />
                Number of employees
              </label>
              <input
                type="range"
                min="1"
                max="200"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Number(e.target.value))}
                className="w-full accent-brand-600"
              />
              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>1</span>
                <span className="text-sm font-bold text-brand-600">{employeeCount} employees</span>
                <span>200</span>
              </div>
            </div>

            {/* Plan toggle */}
            <div className="mb-6 space-y-2">
              {calculatorPlans.map((plan) => (
                <label
                  key={plan.name}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all ${
                    selectedPlan === plan.name
                      ? "border-brand-200 bg-white shadow-sm"
                      : "border-slate-200 bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="uk-pricing-plan"
                      checked={selectedPlan === plan.name}
                      onChange={() => setSelectedPlan(plan.name)}
                      className="h-4 w-4 accent-brand-600"
                    />
                    <span className="text-sm font-medium text-slate-700">{plan.name}</span>
                  </div>
                  <span className="text-xs text-slate-500">
                    {plan.price} × {employeeCount} = £{(plan.priceValue * employeeCount).toLocaleString("en-GB")}
                  </span>
                </label>
              ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between rounded-xl border border-brand-200 bg-white p-4 shadow-sm">
              <div>
                <p className="text-xs text-slate-500">Estimated monthly total</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-600">£{monthlyTotal.toLocaleString("en-GB")}</span>
                  <span className="text-sm text-slate-500">/month</span>
                </div>
              </div>
              <div className="text-right text-xs text-slate-400">
                <p>{selectedPlan} plan</p>
                <p>{activePlan.price}/employee/month</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Add-Ons */}
        <FadeIn delay={0.2}>
          <div className="mt-20 text-center">
            <span className="mb-3 inline-block rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-600">
              Optional Add-Ons
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Extend your platform</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Powerful modules you can add anytime. Pay only for what your team actually needs.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addons.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <FadeIn key={addon.name} delay={0.05 * index}>
                <div
                  className={`rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${addon.bgClass} ${addon.borderClass}`}
                >
                  <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-xl shadow-sm ${addon.iconBg}`}>
                    <Icon className={`h-4 w-4 ${addon.textClass}`} />
                  </div>
                  <h4 className="mb-1 text-sm font-bold text-slate-900">{addon.name}</h4>
                  <div className="mb-4 flex items-baseline gap-1">
                    <span className={`text-lg font-bold ${addon.textClass}`}>{addon.price}</span>
                    <span className="text-xs text-slate-500">{addon.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {addon.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          <Check className="h-2 w-2 text-slate-500" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <ComparisonTable pricing={ADDON_PRICING} />

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
              href="/signUp"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
            >
              Start 30-Day Free Trial
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
