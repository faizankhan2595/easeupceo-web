"use client";

import { motion } from "motion/react";
import { ShieldCheck, Clock, Database, Lock, ArrowRight } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";

const benefits = [
  {
    title: "Compliance built in",
    description:
      "Stay aligned with HMRC, ICO and employment law — from RTI payroll submissions to statutory leave entitlements — without spreadsheets or guesswork.",
    icon: ShieldCheck,
  },
  {
    title: "Save hours every week",
    description:
      "Automate timesheets, payroll runs and leave approvals so your HR and finance teams spend less time on admin and more time on people.",
    icon: Clock,
  },
  {
    title: "One source of truth",
    description:
      "Attendance, leave, payroll, employee records and performance data live in one place — no more chasing updates across multiple systems.",
    icon: Database,
  },
  {
    title: "GDPR-first security",
    description:
      "Employee data is encrypted, access-controlled and securely hosted, giving you confidence in every audit and data subject request.",
    icon: Lock,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="text-base font-semibold text-brand-600">Why Worklynx</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Cost-efficient and AI-powered HR platform built for modern teams
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Worklynx consolidates your attendance, payroll, leave management, and employee records into one cost-efficient, AI-powered system designed for growing UK teams.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/10"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-linear-to-br from-accent-100/0 to-accent-100/0 blur-2xl transition-colors duration-300 group-hover:from-accent-100/60 group-hover:to-brand-100/40" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-accent-50 to-accent-100 text-accent-600 shadow-sm ring-1 ring-accent-200/50 transition-transform duration-300 group-hover:scale-110">
                    <benefit.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                  </div>
                  <h3 className="relative mt-5 text-base font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
