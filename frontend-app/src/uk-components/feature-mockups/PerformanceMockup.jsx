"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";

const goals = [
  { label: "Launch self-serve onboarding", progress: 80 },
  { label: "Reduce support response time by 20%", progress: 55 },
  { label: "Ship mobile app v2", progress: 35 },
];

const cycle = [
  { label: "Self review", done: true },
  { label: "Manager review", done: true },
  { label: "Calibration", done: false, current: true },
  { label: "Complete", done: false },
];

export default function PerformanceMockup() {
  return (
    <BrowserFrame title="worklynx.io/performance">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Q3 goals — Product team</p>
          <p className="text-xs text-slate-500">Review cycle: Jul – Sep 2026</p>
        </div>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">8 goals</span>
      </div>

      <div className="mt-4 space-y-3 rounded-lg border border-slate-100 p-3">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-700">{goal.label}</span>
              <span className="font-semibold text-slate-900">{goal.progress}%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${goal.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                className="h-full rounded-full bg-linear-to-r from-brand-500 to-brand-400"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-slate-100 p-3">
        <p className="text-xs font-medium text-slate-500">Appraisal progress — Priya Anand</p>
        <div className="mt-4 flex items-center justify-between">
          {cycle.map((step, index) => (
            <div key={step.label} className="flex flex-1 flex-col items-center text-center last:flex-none">
              <div className="flex w-full items-center">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    step.done
                      ? "bg-accent-500 text-white"
                      : step.current
                        ? "bg-brand-600 text-white"
                        : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {step.done ? <Check className="h-3.5 w-3.5" /> : index + 1}
                </span>
                {index < cycle.length - 1 && (
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                    className={`h-px flex-1 ${step.done ? "bg-accent-300" : "bg-slate-200"}`}
                  />
                )}
              </div>
              <span className="mt-1.5 hidden text-[11px] text-slate-500 sm:block">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
