"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";

const lines = [
  { label: "Gross pay", value: "£148,250.00", tone: "default" },
  { label: "PAYE tax", value: "− £28,400.00", tone: "muted" },
  { label: "National Insurance", value: "− £12,100.00", tone: "muted" },
  { label: "Pension (auto-enrolment)", value: "− £4,450.00", tone: "muted" },
  { label: "Net pay", value: "£103,300.00", tone: "total" },
];

export default function PayrollMockup() {
  return (
    <BrowserFrame title="worklynx.io/payroll">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Payroll run — June 2026</p>
          <p className="text-xs text-slate-500">Pay date: 28 June 2026</p>
        </div>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">32 employees</span>
      </div>

      <div className="mt-4 divide-y divide-slate-100 rounded-lg border border-slate-100">
        {lines.map((line, index) => (
          <motion.div
            key={line.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={`flex items-center justify-between px-3 py-2.5 text-sm ${
              line.tone === "total" ? "bg-slate-50 font-semibold text-slate-900" : ""
            }`}
          >
            <span className={line.tone === "muted" ? "text-slate-500" : "text-slate-700"}>{line.label}</span>
            <span className={line.tone === "muted" ? "text-slate-500" : "text-slate-900"}>{line.value}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 space-y-3 rounded-lg border border-slate-100 p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">Processing status</span>
          <span className="font-semibold text-slate-900">32 / 32 complete</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full rounded-full bg-linear-to-r from-accent-500 to-accent-400"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-accent-700">
          <CheckCircle2 className="h-4 w-4" />
          RTI submission sent to HMRC
        </div>
      </div>
    </BrowserFrame>
  );
}
