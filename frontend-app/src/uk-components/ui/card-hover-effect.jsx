import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-brand-100/50 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-slate-200/80 shadow-xs relative z-10 group-hover:border-brand-300 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/15 via-indigo-500/10 to-brand-600/20 border border-brand-200/80 shadow-xs flex items-center justify-center text-brand-600 ring-2 ring-brand-500/10 mb-4 group-hover:scale-105 group-hover:from-brand-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                <Icon className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-base font-semibold text-slate-800 mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
