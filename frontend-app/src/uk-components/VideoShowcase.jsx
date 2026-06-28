"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Sparkles, Volume2 } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-16 lg:py-24 border-y border-slate-100">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 -z-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50/50 px-3.5 py-1 text-xs font-semibold text-brand-700 shadow-xs mb-4">
            <Sparkles className="h-3.5 w-3.5 text-brand-500 animate-pulse" />
            <span>Product Walkthrough</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            See Worklynx in action
          </h2>
          <p className="mt-4 text-base text-slate-600 lg:text-lg max-w-2xl mx-auto">
            Watch our 2-minute product tour to see how growing UK teams manage attendance, automate HMRC-compliant payroll, and run HR in one clean platform.
          </p>
        </FadeIn>

        {/* Video Player Card */}
        <FadeIn className="mx-auto max-w-5xl">
          <div className="relative rounded-3xl ">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950 shadow-inner">
              <video
                ref={videoRef}
                src="/Worklynx-video.mp4"
                className="h-full w-full object-contain"
                controls={isPlaying}
                preload="metadata"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Custom Play Overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-xs cursor-pointer group"
                  >
                    {/* Pulsing Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md transition-all group-hover:bg-white/20"
                    >
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-600 shadow-lg transition-transform group-hover:scale-105">
                        <Play className="h-6 w-6 fill-current text-brand-600 ml-0.5" />
                        <span className="absolute inset-0 animate-ping rounded-full bg-white/40 opacity-75" />
                      </span>
                    </motion.div>

                    {/* Bottom visual indicator */}
                    <div className="absolute bottom-6 flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      <Volume2 className="h-3.5 w-3.5 text-brand-300" />
                      <span>Click to watch walkthrough with sound</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
