import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
      {/* Left List Nodes */}
      <div className="w-full lg:w-1/2 space-y-6">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            onClick={() => setActiveCard(index)}
            className={cn(
              "p-6 rounded-2xl border transition-all cursor-pointer",
              activeCard === index
                ? "bg-white border-brand-400 shadow-md ring-1 ring-brand-200"
                : "bg-slate-50/70 border-slate-200/80 hover:bg-white"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-slate-400">Step 0{index + 1}</span>
              <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                {item.subtitle}
              </span>
            </div>
            <motion.h3
              animate={{ opacity: activeCard === index ? 1 : 0.7 }}
              className="text-lg font-semibold text-slate-800"
            >
              {item.title}
            </motion.h3>
            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.7 }}
              className="text-xs text-slate-600 leading-relaxed mt-2"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Right Sticky Preview Container */}
      <div className={cn("w-full lg:w-1/2 sticky top-24 rounded-2xl bg-white border border-slate-200/80 p-6 shadow-md overflow-hidden min-h-[22rem] flex flex-col justify-between", contentClassName)}>
        {content[activeCard]?.content ?? null}
      </div>
    </div>
  );
};
