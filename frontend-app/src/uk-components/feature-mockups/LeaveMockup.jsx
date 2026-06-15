"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { BrowserFrame, Avatar } from "./BrowserFrame";

const requests = [
  { initials: "TC", name: "Tom Clarke", detail: "Annual leave · 3 days · 24–26 Jun" },
  { initials: "PA", name: "Priya Anand", detail: "Sick leave · 1 day · 16 Jun" },
];

const bookedDays = [22, 23, 24, 25];

export default function LeaveMockup() {
  return (
    <BrowserFrame title="worklynx.io/leave">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Leave requests</p>
          <p className="text-xs text-slate-500">2 pending approvals</p>
        </div>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">June 2026</span>
      </div>

      <div className="mt-4 space-y-2">
        {requests.map((req, index) => (
          <motion.div
            key={req.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-2.5"
          >
            <Avatar initials={req.initials} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-900">{req.name}</p>
              <p className="text-xs text-slate-500">{req.detail}</p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-white">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-400">
                <X className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-slate-100 p-3">
        <p className="text-xs font-medium text-slate-500">Team calendar</p>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }).map((_, i) => {
            const dayNum = i + 1;
            const isBooked = bookedDays.includes(dayNum);
            return (
              <motion.div
                key={dayNum}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.01 }}
                className={`flex aspect-square items-center justify-center rounded-md text-[11px] font-medium ${
                  isBooked ? "bg-brand-500 text-white" : "bg-slate-50 text-slate-400"
                }`}
              >
                {dayNum}
              </motion.div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-slate-500">Annual leave remaining</span>
          <span className="font-semibold text-slate-900">18 / 28 days</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full rounded-full bg-linear-to-r from-brand-500 to-brand-400"
          />
        </div>
      </div>
    </BrowserFrame>
  );
}
