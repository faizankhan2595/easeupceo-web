"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/uk-components/motion/FadeIn";

const logos = [
  "Bristol Logistics",
  "Northgate Retail",
  "Solent Tech",
  "Anglia Care Group",
  "Thames Valley Foods",
  "Caledonia Builds",
];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="space-y-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-1.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-1.5 text-sm font-semibold text-slate-700">
                4.8/5
              </span>
              <span className="text-sm text-slate-400">
                from 1,200+ reviews
              </span>
            </div>

            <p className="text-sm text-slate-500">
              Trusted by{" "}
              <span className="font-semibold text-slate-700">
                500+ UK businesses
              </span>{" "}
              to run attendance, leave, payroll & performance
            </p>
          </div>

          {/* Moving strip */}
        <div className="relative overflow-hidden">
  <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

  <motion.div
    className="flex gap-12 w-max"
    animate={{ x: [0, -800] }}
    transition={{
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...logos, ...logos, ...logos].map((logo, i) => (
      <span
        key={i}
        className="shrink-0 text-sm font-bold tracking-wide text-slate-400"
      >
        {logo}
      </span>
    ))}
  </motion.div>
</div>
        </FadeIn>
      </div>
    </section>
  );
}