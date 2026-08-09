"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, CalendarCheck, Banknote, Users, LineChart, Check, ArrowRight } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";
import AttendanceMockup from "@/uk-components/feature-mockups/AttendanceMockup";
import LeaveMockup from "@/uk-components/feature-mockups/LeaveMockup";
import PayrollMockup from "@/uk-components/feature-mockups/PayrollMockup";
import EmployeeMockup from "@/uk-components/feature-mockups/EmployeeMockup";
import PerformanceMockup from "@/uk-components/feature-mockups/PerformanceMockup";

const tabs = [
  {
    id: "attendance",
    label: "Attendance",
    icon: Clock,
    heading: "Know who's working, right now",
    description:
      "Live attendance dashboards show who's clocked in, who's running late and who's on leave — with GPS-verified clock-ins from web, mobile or kiosk.",
    points: [
      "GPS & IP-verified clock in/out",
      "Automated shift rotas & timesheets",
      "Real-time lateness & absence alerts",
    ],
    mockup: AttendanceMockup,
  },
  {
    id: "leave",
    label: "Leave Management",
    icon: CalendarCheck,
    heading: "Holiday requests, approved in one tap",
    description:
      "Employees request leave from their phone, managers approve instantly, and UK statutory entitlements are tracked automatically — including bank holidays across England, Scotland, Wales and NI.",
    points: [
      "28-day statutory holiday tracking",
      "SSP, maternity & shared parental leave rules built in",
      "Team leave calendar with conflict warnings",
    ],
    mockup: LeaveMockup,
  },
  {
    id: "payroll",
    label: "Payroll",
    icon: Banknote,
    heading: "Run payroll in minutes, not days",
    description:
      "PAYE and National Insurance are calculated automatically, pension contributions are auto-enrolled, and RTI submissions go straight to HMRC.",
    points: [
      "HMRC-recognised PAYE & NI calculations",
      "One-click RTI submissions",
      "NEST & NOW: Pensions auto-enrolment",
    ],
    mockup: PayrollMockup,
  },
  {
    id: "employees",
    label: "Employee Management",
    icon: Users,
    heading: "One record for every employee",
    description:
      "Store contracts, right-to-work documents and personal details securely, visualise your org chart, and onboard new starters in minutes.",
    points: [
      "Secure digital employee records",
      "Right-to-work & document storage",
      "Org charts & self-service onboarding",
    ],
    mockup: EmployeeMockup,
  },
  {
    id: "performance",
    label: "Performance Management",
    icon: LineChart,
    heading: "Keep every team aligned on goals",
    description:
      "Set OKRs, run structured review cycles and collect 360° feedback so managers and employees always know exactly where they stand.",
    points: [
      "Goals, OKRs & KPI tracking",
      "Structured 1:1s & appraisal cycles",
      "360° feedback & development plans",
    ],
    mockup: PerformanceMockup,
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const activeTab = tabs[active];
  const Mockup = activeTab.mockup;

  return (
    <section id="features" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-brand-600">Core platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The 5 tools every UK HR team needs
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Worklynx replaces a patchwork of spreadsheets and point tools with
            one connected platform — covering the entire employee lifecycle.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActive(index)}
              className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
                active === index ? "text-white" : "text-slate-600 hover:text-brand-700"
              }`}
            >
              {active === index && (
                <motion.span
                  layoutId="active-feature-tab"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  className="absolute inset-0 rounded-full bg-linear-to-r from-brand-600 to-brand-500 shadow-md shadow-brand-600/25"
                />
              )}
              <tab.icon className="relative z-10 h-4 w-4" strokeWidth={2} />
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-50 to-accent-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                <activeTab.icon className="h-3.5 w-3.5" />
                {activeTab.label}
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {activeTab.heading}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{activeTab.description}</p>
              <ul className="mt-6 space-y-2.5">
                {activeTab.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-accent-100 hover:bg-accent-50/40"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent-400 to-accent-600 text-white shadow-sm shadow-accent-500/30">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                See {activeTab.label.toLowerCase()} in action
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-4xl bg-linear-to-br from-brand-100/60 via-transparent to-accent-100/50 blur-2xl" />
              <Mockup />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
