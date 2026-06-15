"use client";

import { motion } from "motion/react";
import { FileCheck2 } from "lucide-react";
import { BrowserFrame, Avatar } from "./BrowserFrame";

const team = [
  { initials: "SM", name: "Sarah Mitchell", role: "Operations Director" },
  { initials: "JO", name: "James Okafor", role: "HR Manager" },
  { initials: "PA", name: "Priya Anand", role: "People Lead" },
  { initials: "TC", name: "Tom Clarke", role: "Sales Manager" },
];

const documents = [
  { label: "Employment contract", done: true },
  { label: "Right to work check", done: true },
  { label: "P45 / starter checklist", done: false },
];

export default function EmployeeMockup() {
  return (
    <BrowserFrame title="worklynx.io/people">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Team directory</p>
          <p className="text-xs text-slate-500">46 employees · 5 departments</p>
        </div>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">Org chart</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {team.map((person, index) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50/60 p-2.5"
          >
            <Avatar initials={person.initials} tone={index % 2 === 0 ? "brand" : "accent"} />
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-slate-900">{person.name}</p>
              <p className="truncate text-[11px] text-slate-500">{person.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-slate-100 p-3">
        <p className="text-xs font-medium text-slate-500">Onboarding checklist — Tom Clarke</p>
        <div className="mt-3 space-y-2">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-2 text-xs"
            >
              <FileCheck2 className={`h-4 w-4 ${doc.done ? "text-accent-500" : "text-slate-300"}`} />
              <span className={doc.done ? "text-slate-700" : "text-slate-400"}>{doc.label}</span>
              {doc.done && <span className="ml-auto text-[11px] font-medium text-accent-600">Verified</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
