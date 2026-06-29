"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play, Sparkle, Clock, CalendarCheck, Banknote, Users, LineChart } from "lucide-react";

const FEATURES = [
  {
    label: "Attendance",
    // image: "/attendance.png",
    icon: Clock,
    iconGradient: "from-amber-500 to-orange-600",
    position: "top-[18%] left-[1%] sm:left-[2%]",
    entranceX: -56,
    box: { top: 4, left: 4, width: 92, height: 56 },
  },
  {
    label: "Leave Management",
    // image: "/leave.png",
    icon: CalendarCheck,
    iconGradient: "from-sky-500 to-blue-600",
    position: "top-[18%] right-[1%] sm:right-[2%]",
    entranceX: 56,
    box: { top: 2, left: 4, width: 110, height: 56 },
  },
  {
    label: "Payroll",
    // image: "/payroll.png",
    icon: Banknote,
    iconGradient: "from-emerald-500 to-teal-600",
    position: "top-[55%] right-[1%] sm:right-[3%]",
    entranceX: 64,
    box: { top: 0, left: 0, width: 132, height: 52 },
  },
  {
    label: "Employee Management",
    // image: "/employemanagement.png",
    icon: Users,
    iconGradient: "from-violet-500 to-purple-600",
    position: "top-[55%] left-[1%] sm:left-[2%]",
    entranceX: -64,
    box: { top: 0, left: 0, width: 132, height: 52 },
  },
  {
    label: "Performance Management",
    // image: "/performance.png",
    icon: LineChart,
    iconGradient: "from-rose-500 to-pink-600",
    position: "bottom-[3%] right-[31%] -translate-x-1/2",
    entranceX: -48,
    box: { top: 0, left: 0, width: 150, height: 52 },
  },
];

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-[#ff6159] to-[#e0443e] ring-[0.5px] ring-black/20 sm:h-3 sm:w-3" />
      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-[#ffc12f] to-[#e0a000] ring-[0.5px] ring-black/20 sm:h-3 sm:w-3" />
      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-[#29ce42] to-[#1fa934] ring-[0.5px] ring-black/20 sm:h-3 sm:w-3" />
    </div>
  );
}

export default function HeroLaptop({ onWatchDemo }) {
  const runwayRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  const PIN_END = 0.38;

  const scale = useTransform(scrollYProgress, [0, PIN_END], [0.96, 0.76]);
  const y = useTransform(scrollYProgress, [0, PIN_END], [12, -12]);
  const baseOpacity = useTransform(scrollYProgress, [0, PIN_END * 0.45, PIN_END], [0, 0.15, 1]);
  const baseY = useTransform(scrollYProgress, [0, PIN_END], [16, 0]);
  const calloutOpacity = useTransform(scrollYProgress, [0, PIN_END * 0.7], [1, 0.92]);

  return (
    <>
      {/* Mobile/Tablet Hero: Clean, highly-readable layout for small & medium screens */}
      <div className="block lg:hidden relative bg-slate-50/50 pt-28 pb-16 px-6 sm:px-12 sm:pt-36 sm:pb-24 isolate overflow-hidden">
        {/* Top Half-Circle Gradient — extends up behind transparent navbar */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 h-[480px] z-0"
          style={{
            top: "-4.5rem",
            background:
              "radial-gradient(ellipse 85% 100% at 50% 0%, rgba(99,102,241,0.20) 0%, rgba(99,102,241,0.06) 45%, transparent 80%)"
          }}
        />
        {/* Subtle green accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 h-[280px] z-0"
          style={{
            top: "-4.5rem",
            background:
              "radial-gradient(ellipse 55% 80% at 50% 0%, rgba(16,185,129,0.09) 0%, transparent 70%)"
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <span>Cost-efficient &amp; AI-powered</span>
            <Sparkle className="h-3.5 w-3.5 text-brand-400" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Cost-efficient &amp; AI-powered attendance, payroll &amp;{" "}
            <span className="bg-linear-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              HR
            </span>{" "}
            — built for growing UK teams
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl">
            Worklynx brings attendance, leave, payroll, employee records and
            performance reviews into one cost-efficient, AI-powered platform, with
            HMRC compliance ready from day one.
          </p>

          {/* Actions */}
          <div className="mt-6 flex w-full flex-col sm:flex-row justify-center gap-3 px-2 sm:w-auto">
            <a
              href="/signUp"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:brightness-105 active:scale-[0.98]"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onWatchDemo}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 active:scale-[0.98]"
            >
              <Play className="h-3 w-3 fill-current text-brand-600" />
              Watch demo video
            </button>
          </div>

          {/* Features Showcase Grid */}
          <div className="mt-12 sm:mt-16 w-full">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Everything in one place</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-left">
              {FEATURES.map(({ label, image, icon: Icon, iconGradient }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100/50 overflow-hidden">
                    {Icon ? (
                      <span className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${iconGradient || "from-brand-500 to-brand-700"} text-white`}>
                        <Icon className="h-4 w-4" />
                      </span>
                    ) : (
                      <img src={image} alt="" className="h-5 w-5 object-contain" />
                    )}
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Hero: Sticky-scroll laptop layout */}
      <div ref={runwayRef} className="hidden lg:block relative h-[150vh] isolate">
        {/* ── Primary top half-circle gradient — negative top so it bleeds through transparent navbar */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 h-[620px] z-0"
          style={{
            top: "-4.5rem",
            background:
              "radial-gradient(ellipse 40% 60% at 50% 100%, rgba(97,98,240,0.46) 0%, rgba(97,98,240,0.46) 80%, transparent 90%)"
          }}
        /> */}
        {/* Secondary green tint glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 h-[380px] z-0"
          style={{
            top: "-4.5rem",
            background:
              "radial-gradient(ellipse 55% 80% at 50% 0%, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.02) 45%, transparent 70%)"
          }}
        />

        {/* Left ambient orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-[8%] h-[520px] w-[520px] rounded-full blur-3xl z-0"
          style={{ top: "10%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        />
        {/* Right ambient orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-[8%] h-[560px] w-[560px] rounded-full blur-3xl z-0"
          style={{ top: "25%", background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)" }}
        />

        {/* Concentric ring arcs — shifted up to align with gradient origin */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full border border-slate-300/12 z-0" style={{ top: "-4.5rem" }} />
        <div aria-hidden="true" className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 h-[1040px] w-[1040px] rounded-full border border-dashed border-slate-200/8 z-0" style={{ top: "-4.5rem" }} />
        <div aria-hidden="true" className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 h-[1340px] w-[1340px] rounded-full border border-slate-200/5 z-0" style={{ top: "-4.5rem" }} />
       
        <div className="relative z-10 sticky top-[5rem] flex h-[calc(100svh-5rem)] items-center justify-center overflow-visible px-4 py-8 sm:top-[5.5rem] sm:h-[calc(100svh-5.5rem)] sm:px-8 sm:py-10">

          <motion.div style={{ scale, y }} className="w-[92vw] max-w-5xl sm:w-[88vw]">
            {/* Laptop screen */}
            <div className="relative rounded-[1rem] border-[8px] border-slate-700 bg-slate-900 shadow-2xl shadow-slate-900/30">
              <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-px rounded-full bg-slate-700" />

              <div className="relative  aspect-[16/10] overflow-hidden rounded-[0.6rem] bg-linear-to-br from-white via-white to-white">
                <div className="absolute inset-0 bg-grid opacity-40" />

                {/* macOS-style window chrome */}
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-slate-200/70 bg-white/70 px-2.5 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2.5">
                  <TrafficLights />
                  <div className="mx-auto hidden w-32 rounded-full bg-slate-100 px-3 py-1 text-center text-[8px] text-slate-400 sm:block sm:w-48 sm:text-[10px]">
                    app.worklynx.com
                  </div>
                </div>

                {/* Central hero content */}
                <div className="absolute  inset-0 flex flex-col items-center justify-center px-3 pt-6 text-center sm:px-8">
                  <div className="mb-1.5 inline-flex items-center gap-1 rounded-full border border-brand-200 bg-white px-2 py-0.5 text-[5px] font-medium text-brand-700 shadow-sm sm:mb-4 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
                    <span className="relative flex h-1 w-1 sm:h-2 sm:w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                      <span className="relative inline-flex h-1 w-1 rounded-full bg-accent-500 sm:h-2 sm:w-2" />
                    </span>
                    <span className="hidden sm:inline">Cost-efficient &amp; AI-powered HR platform</span>
                    <span className="sm:hidden">Cost-efficient &amp; AI-powered</span>
                    <Sparkle className="hidden h-3.5 w-3.5 text-brand-400 sm:block" />
                  </div>

                  <h1 className="text-balance text-[11px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
                    AI-powered attendance, payroll &amp;{" "}
                    <span className="bg-linear-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                      HR
                    </span>{" "}
                    — built for growing  teams
                  </h1>

                  <p className="mx-auto mt-1.5 hidden max-w-md text-[11px] leading-5 text-slate-600 sm:mt-4 sm:block sm:text-sm sm:leading-7">
                    Worklynx brings attendance, leave, payroll, employee records
                    and performance reviews into one cost-efficient, AI-powered platform, with
                    HMRC compliance ready from day one.
                  </p>

                  <div className="mt-2 flex flex-col items-center gap-1.5 sm:mt-6 sm:flex-row sm:gap-3">
                    <a
                      href="/signUp"
                      className="group inline-flex items-center justify-center gap-1 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-2.5 py-1.5 text-[7px] font-semibold text-white shadow-lg shadow-brand-600/25 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                    >
                      Start 14-Day Free Trial
                      <ArrowRight className="h-2 w-2 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={onWatchDemo}
                      className="hidden items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 sm:flex"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Play className="h-2.5 w-2.5 fill-current" />
                      </span>
                      Watch demo video
                    </button>
                  </div>

                  {/* Minimalist Horizontal Feature Ribbon */}
                  <div className="mt-4 sm:mt-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 border-t border-slate-200/40 pt-4 sm:pt-6 w-full max-w-2xl">
                    {FEATURES.map(({ label, icon: Icon, iconGradient }) => (
                      <div key={label} className="flex items-center gap-1.5 sm:gap-2.5 group cursor-default">
                        <span className={`flex h-4 w-4 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-md sm:rounded-lg bg-gradient-to-br ${iconGradient} text-white shadow-xs transition-transform group-hover:scale-105`}>
                          <Icon className="h-2.5 w-2.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                        </span>
                        <span className="text-[5px] sm:text-[10px] md:text-xs font-semibold text-slate-600 transition-colors group-hover:text-slate-900">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base / keyboard */}
            <motion.div style={{ opacity: baseOpacity, y: baseY }} className="relative mx-auto">
              <div className="h-2 w-[94%] mx-auto rounded-b-sm bg-linear-to-b from-slate-700 to-slate-800" />
              <div
                className="mx-auto h-3.5 rounded-b-2xl bg-linear-to-b from-slate-300 to-slate-400 shadow-md"
                style={{ width: "112%", marginLeft: "-6%" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
