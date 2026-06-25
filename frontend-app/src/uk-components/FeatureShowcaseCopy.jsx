"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  CalendarCheck,
  Banknote,
  Users,
  LineChart,
  Check,
  ArrowRight,
  Shield,
  Headphones,
  Wallet,
  Monitor,
  UserCheck,
  MapPin,
  FileText,
  RefreshCw,
  Star,
  BarChart2,
  MessageSquare,
  PieChart,
  BookOpen,
  Award,
  Target,
  Briefcase,
  Building2,
  CreditCard,
  Plane,
  ChevronRight,
} from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";

// ─── commented-out mockup imports ────────────────────────────────────────────
// import AttendanceMockup from "@/uk-components/feature-mockups/AttendanceMockup";
// import LeaveMockup from "@/uk-components/feature-mockups/LeaveMockup";
// import PayrollMockup from "@/uk-components/feature-mockups/PayrollMockup";
// import EmployeeMockup from "@/uk-components/feature-mockups/EmployeeMockup";
// import PerformanceMockup from "@/uk-components/feature-mockups/PerformanceMockup";
// ─────────────────────────────────────────────────────────────────────────────

const AUTO_MS = 6000;

const features = [
  {
    id: "attendance",
    label: "Time & Attendance",
    icon: Clock,
    color: "from-teal-500 to-cyan-600",
    lightBg: "bg-teal-50",
    lightText: "text-teal-700",
    heading: "Know who's working, right now",
    description:
      "Live dashboards show who's clocked in, who's running late, and who's on leave — with GPS-verified clock-ins from web, mobile or kiosk.",
    image: "/timeAndAttendance.png",
    // mockup: AttendanceMockup,
    subFeatures: [
      { icon: MapPin, label: "GPS Clock-In / Out" },
      { icon: Clock, label: "Shift Management" },
      { icon: RefreshCw, label: "Monthly & Daily Attendance" },
      { icon: FileText, label: "Automated Timesheets" },
      { icon: BarChart2, label: "Lateness & Absence Alerts" },
      { icon: UserCheck, label: "Overtime Requests & Types" },
    ],
  },
  {
    id: "leave",
    label: "Leave Management",
    icon: CalendarCheck,
    color: "from-emerald-500 to-green-600",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-700",
    heading: "Holiday requests approved in one tap",
    description:
      "Employees request leave from their phone, managers approve instantly, and statutory entitlements — including UK bank holidays — are tracked automatically.",
    image: "/leaveManagement.png",
    // mockup: LeaveMockup,
    subFeatures: [
      { icon: CalendarCheck, label: "Leave Request Workflow" },
      { icon: FileText, label: "Leave Categories" },
      { icon: BarChart2, label: "Leave Balance Adjustments" },
      { icon: Users, label: "Employee Leave Management" },
      { icon: Shield, label: "SSP & Statutory Rules Built-in" },
      { icon: RefreshCw, label: "Team Conflict Warnings" },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    icon: Banknote,
    color: "from-violet-500 to-purple-700",
    lightBg: "bg-violet-50",
    lightText: "text-violet-700",
    heading: "Run payroll in minutes, not days",
    description:
      "PAYE and National Insurance are calculated automatically, pension contributions auto-enrolled, and RTI submissions go directly to HMRC.",
    image: "/payrol.png",
    // mockup: PayrollMockup,
    subFeatures: [
      { icon: Banknote, label: "Payroll Batch Console" },
      { icon: CreditCard, label: "Payroll Salary Items" },
      { icon: PieChart, label: "Payroll Financial Transactions" },
      { icon: Plane, label: "Air Ticket Transactions" },
      { icon: Wallet, label: "Vacation Advance Salary" },
      { icon: Building2, label: "SAP Integration" },
    ],
  },
  {
    id: "employees",
    label: "Employee Management",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-700",
    heading: "One record for every employee",
    description:
      "Store contracts, right-to-work documents and personal details securely, visualise your org chart, and onboard new starters in minutes.",
    image: "/employmanagement.png",
    // mockup: EmployeeMockup,
    subFeatures: [
      { icon: FileText, label: "Digital Employee Records" },
      { icon: Shield, label: "Right-to-Work & Documents" },
      { icon: Users, label: "Org Chart Visualisation" },
      { icon: UserCheck, label: "Self-Service Onboarding" },
      { icon: Briefcase, label: "Asset Management" },
      { icon: Headphones, label: "Help Desk Integration" },
    ],
  },
  {
    id: "performance",
    label: "Performance & Training",
    icon: LineChart,
    color: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    lightText: "text-rose-700",
    heading: "Keep every team aligned and growing",
    description:
      "Set OKRs, run structured reviews, collect 360° feedback, and assign training courses — so managers and employees always know where they stand.",
    image: "/training.png",
    // mockup: PerformanceMockup,
    subFeatures: [
      { icon: Target, label: "Goals, OKRs & KPIs" },
      { icon: Star, label: "Appraisal Cycles" },
      { icon: MessageSquare, label: "360° Feedback" },
      { icon: BookOpen, label: "Course Library & LMS" },
      { icon: Award, label: "Certifications & Awards" },
      { icon: Monitor, label: "HR Budgeting" },
    ],
  },
];

// ─── Sub-feature chip ────────────────────────────────────────────────────────
function SubFeatureChip({ icon: Icon, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -2, scale: 1.02 }}
      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3.5 py-3 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 cursor-default"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
        <Icon className="h-3.5 w-3.5 text-slate-500" strokeWidth={2} />
      </span>
      <span className="text-xs font-medium text-slate-700 leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function FeatureShowcaseCopy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const active = features[activeIndex];

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, AUTO_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [startTimer]);

  const handleTabClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section
      id="features"
      className="scroll-mt-24 py-16 lg:py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 900px 600px at 15% 20%, rgba(99,102,241,0.12) 0%, transparent 65%), radial-gradient(ellipse 700px 700px at 85% 80%, rgba(124,58,237,0.1) 0%, transparent 65%), linear-gradient(135deg, #f5f7ff 0%, #eef2ff 40%, #f0f9ff 70%, #faf5ff 100%)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Ambient blobs */}
        <motion.div
          className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Section header ── */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-600">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Complete HRMS Platform
          </span>
          <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything your{" "}
            <span className="bg-linear-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              HR
            </span>{" "}
            team needs, in one place
          </p>
          <p className="mt-4 text-base text-slate-500 lg:text-lg leading-relaxed">
            From hiring to retirement — manage the entire employee lifecycle
            with one connected platform built for UK businesses.
          </p>
        </FadeIn>

        {/* ── Main two-column layout ── */}
        <div className="mt-14 lg:mt-16 flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {/* Left: vertical tab switcher */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-[8vh] flex flex-col gap-2">
            {features.map((feat, index) => {
              const isActive = index === activeIndex;
              const Icon = feat.icon;
              return (
                <motion.button
                  key={feat.id}
                  id={`feat-tab-${feat.id}`}
                  onClick={() => handleTabClick(index)}
                  whileHover={
                    !isActive
                      ? { x: 3, boxShadow: "0 4px 20px rgba(99,102,241,0.12)" }
                      : {}
                  }
                  transition={{ duration: 0.15 }}
                  className={`relative w-full text-left rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-all duration-300 ${
                    isActive
                      ? "border border-white/30 shadow-2xl shadow-indigo-900/30 bg-linear-to-br from-slate-900 via-slate-900 to-brand-900"
                      : "border border-slate-200/80 bg-white/80 hover:border-indigo-200 hover:shadow-md"
                  }`}
                  // style={isActive ? {
                  //   background: "linear-gradient(135deg, rgba(67,56,202,0.82) 0%, rgba(109,40,217,0.78) 50%, rgba(79,70,229,0.80) 100%)",
                  //   backdropFilter: "blur(20px) saturate(180%)",
                  //   WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  //   boxShadow: "0 8px 32px rgba(79,70,229,0.35), 0 1px 0 rgba(255,255,255,0.25) inset, 0 -1px 0 rgba(99,102,241,0.3) inset",
                  // } : {}}
                >
                  {/* Top highlight line — liquid glass shimmer */}
                  {isActive && (
                    <div
                      className="absolute inset-x-3 top-0 h-px rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                      }}
                    />
                  )}

                  {/* Tab header row */}
                  <div className="relative flex items-center gap-3.5 px-5 py-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-white/20 border border-white/30 shadow-lg shadow-indigo-900/20"
                          : "bg-slate-50 border border-slate-200"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-500"}`}
                        strokeWidth={2}
                      />
                    </span>
                    <span
                      className={`flex-1 text-sm font-semibold transition-colors ${
                        isActive ? "text-white" : "text-slate-700"
                      }`}
                    >
                      {feat.label}
                    </span>

                    {isActive ? (
                      /* Progress bar */
                      <div
                        className="h-0.5 w-12 rounded-full overflow-hidden shrink-0"
                        style={{ background: "rgba(255,255,255,0.2)" }}
                      >
                        <motion.div
                          key={`prog-${activeIndex}`}
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.9))",
                          }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: AUTO_MS / 1000,
                            ease: "linear",
                          }}
                        />
                      </div>
                    ) : (
                      <ChevronRight className="h-4 w-4 text-slate-300 shrink-0" />
                    )}
                  </div>

                  {/* Expanded content for active tab */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <p
                            className="text-sm leading-relaxed mb-4"
                            style={{ color: "rgba(255,255,255,0.90)" }}
                          >
                            {feat.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {feat.subFeatures.map((sf) => (
                              <span
                                key={sf.label}
                                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-medium"
                                style={{
                                  background: "rgba(255,255,255,0.15)",
                                  border: "1px solid rgba(255,255,255,0.22)",
                                  color: "rgba(255,255,255,0.92)",
                                  backdropFilter: "blur(4px)",
                                }}
                              >
                                <Check
                                  className="h-2.5 w-2.5"
                                  style={{ color: "rgba(199,210,254,1)" }}
                                  strokeWidth={3}
                                />
                                {sf.label}
                              </span>
                            ))}
                          </div>
                          <a
                            href="/signup"
                            className="group inline-flex items-center gap-1.5 text-xs font-semibold transition-all hover:gap-2"
                            style={{ color: "rgba(199,210,254,1)" }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color =
                                "rgba(255,255,255,1)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color =
                                "rgba(199,210,254,1)")
                            }
                          >
                            See {feat.label.toLowerCase()} in action
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {/* Right: large image + sub-feature bento */}
          <div className="w-full lg:w-[82%] mt-8 lg:mt-0 flex flex-col gap-4">
            {/* Image panel */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 aspect-[32/18]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={`img-${active.id}`}
                  src={active.image}
                  alt={`${active.label} screenshot`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40, scale: 1.03 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -40, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/50 to-transparent" />

              {/* Floating feature badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${active.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className={`absolute bottom-4 left-4 flex items-center gap-2 rounded-full ${active.lightBg} border border-slate-200/80 backdrop-blur-sm px-3.5 py-1.5 shadow-sm`}
                >
                  <active.icon
                    className={`h-3.5 w-3.5 ${active.lightText}`}
                    strokeWidth={2}
                  />
                  <span className={`text-xs font-semibold ${active.lightText}`}>
                    {active.label}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Dot pagination */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                {features.map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => handleTabClick(i)}
                    aria-label={`View ${f.label}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-slate-800 w-5 h-1.5"
                        : "bg-slate-300 hover:bg-slate-400 w-1.5 h-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sub-feature grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`grid-${active.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
              >
                {active.subFeatures.map((sf, i) => (
                  <SubFeatureChip
                    key={sf.label}
                    icon={sf.icon}
                    label={sf.label}
                    delay={i * 0.05}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
