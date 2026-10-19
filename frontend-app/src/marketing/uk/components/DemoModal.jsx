"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X, CalendarCheck, ArrowRight, Sparkles } from "lucide-react";

export default function DemoModal({ open, onClose }) {
  const [playing, setPlaying] = useState(false);

  const handleClose = () => {
    onClose();
    setPlaying(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close demo video"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md transition-colors hover:bg-white hover:text-slate-900"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden bg-linear-to-br from-brand-900 via-slate-900 to-slate-950">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <motion.div
                animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 right-0 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -16, 0], y: [0, 20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"
              />

              <AnimatePresence mode="wait">
                {!playing ? (
                  <motion.button
                    key="play"
                    type="button"
                    onClick={() => setPlaying(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
                      <Sparkles className="h-3.5 w-3.5 text-accent-300" />
                      AI-powered product walkthrough
                    </span>
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm"
                    >
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg">
                        <Play className="h-6 w-6 fill-current" />
                        <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                      </span>
                    </motion.span>
                    <div className="text-center">
                      <p className="text-sm font-semibold">Worklynx — 2 min product demo</p>
                      <p className="mt-1 text-xs text-slate-300">
                        See attendance, leave, payroll &amp; performance in action
                      </p>
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="cta"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center text-white"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/20 text-accent-300 ring-1 ring-accent-400/40">
                      <CalendarCheck className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-lg font-semibold">Our full demo video is being recorded</p>
                      <p className="mt-2 max-w-md text-sm text-slate-300">
                        In the meantime, book a free 30-minute live walkthrough with our UK-based team —
                        we&apos;ll show you Worklynx running on real UK payroll data.
                      </p>
                    </div>
                    <a
                      href="#contact"
                      onClick={handleClose}
                      className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-md transition-colors hover:bg-brand-50"
                    >
                      Book a live demo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
