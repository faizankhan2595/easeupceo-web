import { useState } from "react";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";
import DemoModal from "@/uk-components/DemoModal";

export default function FinalCTASection() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-brand-900 via-slate-900 to-indigo-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-brand-300" />
            <span>Ready to Modernize Your UK Workforce?</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Transform Your HR &amp; Operations Today
          </h2>

          <p className="mt-4 text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Join 500+ modern UK businesses using Worklynx HRMS to automate attendance, HMRC payroll, statutory leave, and performance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 font-extrabold text-brand-900 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current text-brand-700" />
              <span>Book UK HRMS Demo</span>
            </button>

            <a
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-bold text-white transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free setup &amp; data migration</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cancel anytime</span>
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
