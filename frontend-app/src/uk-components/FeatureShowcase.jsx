"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
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
      "Employees request leave from their phone, managers approve instantly, and statutory entitlements are tracked automatically — including bank holidays across England, Scotland, Wales and NI.",
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

function FeatureMockupCard({ tab }) {
  const Mockup = tab.mockup;
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const tiltX = useTransform(cardY, [-150, 150], [6, -6]);
  const tiltY = useTransform(cardX, [-150, 150], [-6, 6]);

  const handleCardMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    cardX.set(event.clientX - rect.left - rect.width / 2);
    cardY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleCardLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={handleCardMove}
        onMouseLeave={handleCardLeave}
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
      >
        <Mockup />
      </motion.div>
    </div>
  );
}

function StackCard({ tab, index, progress }) {
  const targetScale = 1 - (tabs.length - 1 - index) * 0.06;
  const scale = useTransform(progress, [index / tabs.length, 1], [1, targetScale]);

  return (
    <div className="sticky top-[8vh] flex h-[90vh] items-center justify-center">
      <motion.div
        style={{ scale, zIndex: index }}
        className="relative w-full origin-top overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 lg:h-[44rem]"
      >
        <div className="flex items-center justify-center gap-2 pt-8 lg:pt-10">
          <tab.icon className="h-5 w-5 text-brand-500" strokeWidth={2} />
          <span className="text-xl font-semibold uppercase tracking-[0.2em] text-slate-400">{tab.label}</span>
        </div>
        <div className="grid grid-cols-1 gap-8 p-8 lg:h-full lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-14 lg:py-0">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {tab.heading}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{tab.description}</p>
            <ul className="mt-6 space-y-2.5">
              {tab.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-700"
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
              See {tab.label.toLowerCase()} in action
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <FeatureMockupCard tab={tab} />
        </div>
      </motion.div>
    </div>
  );
}

export default function FeatureShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section id="features" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 overflow-hidden rounded-full bg-brand-200/30 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-brand-600">Core platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The 5 tools every HR team needs
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Worklynx replaces a patchwork of spreadsheets and point tools with
            one connected platform — covering the entire employee lifecycle.
          </p>
        </FadeIn>

        <div ref={containerRef} className="mt-16">
          {tabs.map((tab, index) => (
            <StackCard key={tab.id} tab={tab} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
