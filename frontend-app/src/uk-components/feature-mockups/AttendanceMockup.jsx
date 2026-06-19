"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { BrowserFrame, Avatar } from "./BrowserFrame";

const rows = [
  { initials: "SM", name: "Sarah Mitchell", role: "Operations", status: "Clocked in 08:58", tone: "accent" },
  { initials: "JO", name: "James Okafor", role: "Warehouse", status: "Late · 09:24", tone: "amber" },
  { initials: "PA", name: "Priya Anand", role: "Product", status: "On leave", tone: "slate" },
  { initials: "TC", name: "Tom Clarke", role: "Sales", status: "Clocked in 08:51", tone: "accent" },
];

const week = [
  { day: "Mon", value: 96 },
  { day: "Tue", value: 92 },
  { day: "Wed", value: 100 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 91 },
];

export default function AttendanceMockup() {
  return (
    <BrowserFrame title="worklynx.io/attendance">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Attendance — Today</p>
          <p className="text-xs text-slate-500">Saturday, 15 June 2026</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700">
          <MapPin className="h-3 w-3" /> GPS verified
        </span>
      </div>

      <div className="mt-2 space-y-1">
        {rows.map((row, index) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-2"
          >
            <Avatar initials={row.initials} tone={row.tone === "amber" ? "slate" : row.tone} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-900">{row.name}</p>
              <p className="text-xs text-slate-500">{row.role}</p>
            </div>
            <StatusBadge status={row.status} tone={row.tone} />
          </motion.div>
        ))}
      </div>

      <div className="mt-3 rounded-lg border border-slate-100 p-2">
        <p className="text-xs font-medium text-slate-500">This week&apos;s attendance rate</p>
        <div className="mt-3 flex items-end gap-3">
          {week.map((bar, index) => (
            <div key={bar.day} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-15 w-full items-end rounded-md bg-slate-100">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${bar.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                  className="w-full rounded-md bg-linear-to-t from-brand-500 to-brand-400"
                />
              </div>
              <span className="text-[11px] font-medium text-slate-500">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function StatusBadge({ status, tone }) {
  const toneClasses = {
    accent: "bg-accent-50 text-accent-700",
    amber: "bg-amber-50 text-amber-700",
    slate: "bg-slate-100 text-slate-500",
  }[tone];

  return (
    <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${toneClasses}`}>{status}</span>
  );
}
