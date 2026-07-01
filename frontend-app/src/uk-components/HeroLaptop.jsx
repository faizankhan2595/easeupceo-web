"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ChevronRight } from "lucide-react";

/*
  ──────────────────────────────────────────────────────────
  HERO IMAGE PATHS
  Place your images in:  /public/hero/
  Then update the src values below.
  ──────────────────────────────────────────────────────────

  CARD POSITIONS (desktop):
  ┌─────────────────────────────────────────────────────┐
  │  [profile]                          [team-members]  │
  │                   HEADING                           │
  │                   SUBTITLE                          │
  │                   [BUTTONS]                         │
  │  [employee-list]  [hiring-activity] [darrell]       │
  │                                    [payroll]        │
  └─────────────────────────────────────────────────────┘

  IMAGE SLOTS:
  1. /hero/profile-card.png         → top-left   (w≈215px)
  2. /hero/team-members-card.png    → top-right  (w≈162px)
  3. /hero/employee-list-card.png   → lower-left (w≈215px)
  4. /hero/hiring-activity-card.png → center     (w≈215px)
  5. /hero/darrell-card.png         → center-right (w≈218px)
  6. /hero/payroll-card.png         → lower-right (w≈178px)
*/

const HERO_CARDS = [
  {
    id: "profile",
    src: "/hero/1.png",
    alt: "Profile card — Sarah Chen",
    style: { top: 70, left: "5%", width: 215 },
    motion: { ox: -44, delay: 0.28, bobAmp: 7, bobDur: 4.3, bobDelay: 0 },
  },
  {
    id: "team",
    src: "/hero/2.png",
    alt: "Team Members card",
    style: { top: 40, right: "5%", width: 162 },
    motion: { ox: 44, delay: 0.33, bobAmp: 6, bobDur: 5.0, bobDelay: 0.6 },
  },
  {
    id: "employee-list",
    src: "/hero/4.png",
    alt: "Employee list card",
    style: { top: 300, left: "3%", width: 215 },
    motion: { ox: -44, delay: 0.44, bobAmp: 8, bobDur: 5.2, bobDelay: 1.0 },
  },
  {
    id: "hiring-activity",
    src: "/hero/3.png",
    alt: "Hiring activity overview card",
    style: { top: 535, left: "calc(50% - 240px)", width: 300 },
    motion: { ox: 0, delay: 0.50, bobAmp: 8, bobDur: 4.6, bobDelay: 0.3 },
  },
  {
    id: "darrell",
    src: "/hero/5.png",
    alt: "Darrell Steward contact card",
    style: { top: 525, left: "calc(50% + 88px)", width: 218 },
    motion: { ox: 44, delay: 0.40, bobAmp: 7, bobDur: 4.1, bobDelay: 0.9 },
  },
  {
    id: "payroll",
    src: "/hero/6.png",
    alt: "Payroll cost overview card",
    style: { top: 360, right: "4%", width: 178 },
    motion: { ox: 44, delay: 0.57, bobAmp: 6, bobDur: 5.5, bobDelay: 1.4 },
  },
];

/* Mobile strip — subset of cards shown horizontally */
const MOBILE_CARDS = ["profile", "team", "hiring-activity", "payroll"];

export default function HeroLaptop({ onWatchDemo }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const up = (d = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-white">

      {/* ── Brand indigo center glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 44%, rgba(99,102,241,0.08) 0%, rgba(79,70,229,0.05) 35%, transparent 65%)",
        }}
      />

      {/* ── Center grid — brand-tinted, fades at edges ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-0"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "860px",
          maxWidth: "95vw",
          height: "70%",
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.09) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage:
            "radial-gradient(ellipse 65% 58% at 50% 46%, black 10%, rgba(0,0,0,0.5) 42%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 58% at 50% 46%, black 10%, rgba(0,0,0,0.5) 42%, transparent 70%)",
        }}
      />

      {/* ════════════════════════════════
          DESKTOP  (xl+)
      ════════════════════════════════ */}
      <div className="hidden xl:block relative z-10 h-[800px] 2xl:h-[850px] transition-all duration-300">

        {/* Heading */}
        <div className="flex flex-col items-center text-center pt-[7.5rem] px-6 relative z-20">
          <motion.h1
            {...up(0)}
            className="max-w-[680px] text-[3.2rem] font-bold leading-[1.1] tracking-tight text-slate-900 font-satoshi"
          >
            AI-powered attendance, payroll &amp;{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              HR
            </span>{" "}
            — built for growing  teams
          </motion.h1>

          <motion.p {...up(0.1)} className="mt-5 italic max-w-[480px] text-[1rem] leading-relaxed text-slate-500">
            Worklynx brings attendance, leave, payroll, employee records and
            performance reviews into one cost-efficient, AI-powered platform,
            with HMRC compliance ready from day one.
          </motion.p>

          <motion.div {...up(0.2)} className="mt-7 flex items-center gap-3">
            <a
              href="/signup"
              className="group inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-[0.97]"
            >
              Start 30-Day Free Trial
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={onWatchDemo}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-brand-300 hover:text-brand-600 active:scale-[0.97]"
            >
              Watch demo video
            </button>
          </motion.div>
        </div>

        {/* ── Image cards wrapper for fluid responsiveness ── */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="relative w-full h-full max-w-[1440px] mx-auto transition-all duration-300 origin-top scale-[0.86] translate-y-14 2xl:scale-100 2xl:translate-y-0">
            {HERO_CARDS.map(({ id, src, alt, style, motion: m }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: m.ox, y: 20, scale: 0.92 }}
                animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{ delay: m.delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute pointer-events-auto"
                style={{ ...style }}
              >
                <div className="relative group select-none">
                  {/* Soft ambient background glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-brand-500/20 via-brand-indigo/15 to-accent-500/15 opacity-80 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl group-hover:-inset-4 pointer-events-none" />

                  <motion.img
                    src={src}
                    alt={alt}
                    animate={{ y: [0, -m.bobAmp, 0] }}
                    transition={{
                      duration: m.bobDur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: m.bobDelay,
                    }}
                    className="relative rounded-2xl shadow-[0_10px_30px_rgba(99,102,241,0.12)] transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.22)] object-contain bg-white"
                    style={{ width: style.width }}
                    /* Graceful fallback if image not yet added */
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          MOBILE / TABLET
      ════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-28 pb-10 text-center xl:hidden">
        <motion.h1 {...up(0)} className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
          AI-powered attendance, payroll &amp;{" "}
          <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
            HR
          </span>{" "}
          — built for growing  teams
        </motion.h1>

        <motion.p {...up(0.1)} className="mt-4 max-w-sm text-base leading-relaxed text-slate-500">
          Worklynx brings attendance, leave, payroll, employee records and
          performance reviews into one cost-efficient, AI-powered platform,
          with HMRC compliance ready from day one.
        </motion.p>

        <motion.div {...up(0.2)} className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/signup"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25"
          >
            Start 30-Day Free Trial <ChevronRight className="h-4 w-4" />
          </a>
          <button
            onClick={onWatchDemo}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700"
          >
            Watch demo video
          </button>
        </motion.div>

        {/* Mobile image strip */}
        <motion.div {...up(0.3)} className="mt-10 w-full overflow-x-auto pb-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-6 px-4 mx-auto py-4">
            {HERO_CARDS.filter(c => MOBILE_CARDS.includes(c.id)).map(({ id, src, alt, style }) => (
              <div key={id} className="relative group shrink-0">
                {/* Soft ambient glow behind the card */}
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-tr from-brand-500/20 via-brand-indigo/15 to-accent-500/15 opacity-70 blur-lg pointer-events-none" />
                <img
                  key={id}
                  src={src}
                  alt={alt}
                  className="relative rounded-2xl shadow-[0_8px_24px_rgba(99,102,241,0.12)] object-contain bg-white"
                  style={{ width: style.width, maxWidth: 180 }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
