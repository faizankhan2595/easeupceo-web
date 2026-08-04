import { useState } from "react";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";
import DemoModal from "@/uk-components/DemoModal";

export default function FinalCTASection() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-50/70 text-slate-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-900 via-slate-900 to-indigo-950 text-white border border-slate-800/80 shadow-xl relative overflow-hidden">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5 text-brand-300" />
            <span>Ready to Modernize Your UK Workforce?</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-snug">
            Transform Your HR &amp;{" "}
            <span className="italic font-serif text-brand-300">
              Operations Today
            </span>
          </h2>

          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Join 500+ modern UK businesses using Worklynx HRMS to automate attendance, HMRC payroll, statutory leave, and performance.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 font-semibold text-brand-900 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-brand-700" />
              <span>Book UK HRMS Demo</span>
            </button>

            <a
              href="/signup"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-medium text-white transition-all text-center flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300 font-normal">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free setup &amp; data migration</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Cancel anytime</span>
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
