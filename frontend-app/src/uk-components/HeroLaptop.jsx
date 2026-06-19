"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Play,
  Sparkle,
} from "lucide-react";

const FEATURES = [
  {
    label: "Attendance",
    image: "/attendance.png",
    position: "top-[18%] left-[1%] sm:left-[2%]",
    entranceX: -56,
    box: { top: 4, left: 4, width: 92, height: 56 },
  },
  {
    label: "Leave Management",
    image: "/leave.png",
    position: "top-[18%] right-[1%] sm:right-[2%]",
    entranceX: 56,
    box: { top: 2, left: 4, width: 110, height: 56 },
  },
  {
    label: "Payroll",
    image: "/payroll.png",
    position: "top-[55%] right-[1%] sm:right-[3%]",
    entranceX: 64,
    box: { top: 0, left: 0, width: 132, height: 52 },
  },
    {
    label: "Employee Management",
    image: "/employemanagement.png",
    position: "top-[55%] left-[1%] sm:left-[2%]",
    entranceX: -64,
    box: { top: 0, left: 0, width: 132, height: 52 },
  },
  {
    label: "Performance Management",
    image: "/performance.png",
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

  // Finish the reveal early, then keep the complete laptop visible while
  // the sticky hero stays pinned for the rest of the scroll runway.
  const PIN_END = 0.38;

  const scale = useTransform(scrollYProgress, [0, PIN_END], [0.96, 0.76]);
  const y = useTransform(scrollYProgress, [0, PIN_END], [12, -12]);
  const baseOpacity = useTransform(scrollYProgress, [0, PIN_END * 0.45, PIN_END], [0, 0.15, 1]);
  const baseY = useTransform(scrollYProgress, [0, PIN_END], [16, 0]);
  const calloutOpacity = useTransform(scrollYProgress, [0, PIN_END * 0.7], [1, 0.92]);

  return (
    <div ref={runwayRef} className="relative h-[240vh]">
      <div className="sticky top-[5rem] flex h-[calc(100svh-5rem)] items-center justify-center overflow-visible px-4 py-8 sm:top-[5.5rem] sm:h-[calc(100svh-5.5rem)] sm:px-8 sm:py-10">
        <motion.div style={{ scale, y }} className="w-[92vw] max-w-5xl sm:w-[88vw]">
          {/* Laptop screen */}
          <div className="relative rounded-[1rem] border-[8px] border-slate-700 bg-slate-900 shadow-2xl shadow-slate-900/30">
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-px rounded-full bg-slate-700" />

            <div className="relative aspect-[16/10] overflow-hidden rounded-[0.6rem] bg-linear-to-br from-brand-50 via-white to-white">
              <div className="absolute inset-0 bg-grid opacity-40" />

              {/* macOS-style window chrome */}
              <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-slate-200/70 bg-white/70 px-2.5 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2.5">
                <TrafficLights />
                <div className="mx-auto hidden w-32 rounded-full bg-slate-100 px-3 py-1 text-center text-[8px] text-slate-400 sm:block sm:w-48 sm:text-[10px]">
                  app.worklynx.com
                </div>
              </div>

              {/* Central hero content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-3 pt-6 text-center sm:px-8">
                <div className="mb-1.5 inline-flex items-center gap-1 rounded-full border border-brand-200 bg-white px-2 py-0.5 text-[5px] font-medium text-brand-700 shadow-sm sm:mb-4 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
                  <span className="relative flex h-1 w-1 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                    <span className="relative inline-flex h-1 w-1 rounded-full bg-accent-500 sm:h-2 sm:w-2" />
                  </span>
                  <span className="hidden sm:inline">AI-powered HR platform · Built for modern teams</span>
                  <span className="sm:hidden">AI-powered HR platform</span>
                  <Sparkle className="hidden h-3.5 w-3.5 text-brand-400 sm:block" />
                </div>

                <h1 className="text-balance text-[11px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
                  AI-powered attendance, payroll &amp;{" "}
                  <span className="bg-linear-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                    HR
                  </span>{" "}
                  — built for growing teams
                </h1>

                <p className="mx-auto mt-1.5 hidden max-w-md text-[11px] leading-5 text-slate-600 sm:mt-4 sm:block sm:text-sm sm:leading-7">
                  Worklynx brings attendance, leave, payroll, employee records
                  and performance reviews into one AI-powered platform, with
                  HMRC compliance ready from day one.
                </p>

                <div className="mt-2 flex flex-col items-center gap-1.5 sm:mt-6 sm:flex-row sm:gap-3">
                  <a
                    href="/signUp"
                    className="group inline-flex items-center justify-center gap-1 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-2.5 py-1.5 text-[7px] font-semibold text-white shadow-lg shadow-brand-600/25 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                  >
                    Start 30-Day Free Trial
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
              </div>
            </div>

            {/* Feature callouts + connector lines, layered over the bezel so they aren't clipped by the screen */}
            {FEATURES.map(({ label, image, position, entranceX, box }, index) => (
              <div key={label} className={`absolute ${position}`}>
                <motion.div
                  initial={{ opacity: 0, x: entranceX, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.28 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                 
                  <motion.div
                    style={{ opacity: calloutOpacity }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    // className="glass-card relative z-10 flex min-w-14 flex-col items-center justify-center gap-0.5 rounded-lg px-1.5 py-1 text-center shadow-md shadow-slate-900/10 sm:min-w-24 sm:gap-1.5 sm:rounded-xl sm:px-3 sm:py-2.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-brand-100 sm:h-16 sm:w-16">
                      <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 object-contain sm:h-14 sm:w-14"
                        loading="eager"
                      />
                    </span>
                    <span className="max-w-16 text-[5px] font-semibold leading-tight text-slate-700 sm:max-w-24 sm:text-[11px]">
                      {label}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            ))}
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
  );
}
