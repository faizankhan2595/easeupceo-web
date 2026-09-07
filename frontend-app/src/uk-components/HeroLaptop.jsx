import { useState,useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronRight, Users, Package, Utensils, CheckCircle2, Sparkles } from "lucide-react";

/*
  ──────────────────────────────────────────────────────────
  HERO IMAGE PATHS
  Place your images in:  /public/hero/
  ──────────────────────────────────────────────────────────
*/

const HERO_CARDS = [
  {
    id: "profile",
    src: "/hero/1.png",
    alt: "Profile card — Sarah Chen",
    style: { top: 70, left: "4%", width: 215 },
    motion: { ox: -44, delay: 0.28, bobAmp: 7, bobDur: 4.3, bobDelay: 0 },
  },
  {
    id: "team",
    src: "/hero/2.png",
    alt: "Team Members card",
    style: { top: 40, right: "4%", width: 162 },
    motion: { ox: 44, delay: 0.33, bobAmp: 6, bobDur: 5.0, bobDelay: 0.6 },
  },
  {
    id: "employee-list",
    src: "/hero/4.png",
    alt: "Employee list card",
    style: { top: 300, left: "2%", width: 215 },
    motion: { ox: -44, delay: 0.44, bobAmp: 8, bobDur: 5.2, bobDelay: 1.0 },
  },
  {
    id: "hiring-activity",
    src: "/hero/3.png",
    alt: "Hiring activity overview card",
    style: { top: 550, left: "calc(50% - 240px)", width: 300 },
    motion: { ox: 0, delay: 0.50, bobAmp: 8, bobDur: 4.6, bobDelay: 0.3 },
  },
  {
    id: "darrell",
    src: "/hero/5.png",
    alt: "Darrell Steward contact card",
    style: { top: 540, left: "calc(50% + 88px)", width: 218 },
    motion: { ox: 44, delay: 0.40, bobAmp: 7, bobDur: 4.1, bobDelay: 0.9 },
  },
  {
    id: "payroll",
    src: "/hero/6.png",
    alt: "Payroll cost overview card",
    style: { top: 360, right: "3%", width: 178 },
    motion: { ox: 44, delay: 0.57, bobAmp: 6, bobDur: 5.5, bobDelay: 1.4 },
  },
];

/* Mobile strip — subset of cards shown horizontally */
const MOBILE_CARDS = ["profile", "team", "hiring-activity", "payroll"];

const PRODUCTS = [
  {
    id: "hrms",
    label: "HR & HMRC Payroll",
    icon: Users,
    title: (
      <>
        AI-powered attendance, payroll &amp;{" "}
        <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 bg-clip-text text-transparent font-medium sm:font-semibold">
          HR
        </span>{" "}
        — built for UK teams
      </>
    ),
    description:
      "Attendance, statutory leave, HMRC PAYE payroll & employee management — unified in one AI platform.",
    cta: "Start HRMS Free Trial",
    ctaHref: "/signup",
  },
  {
    id: "erp",
    label: "ERP & Inventory",
    icon: Package,
    title: (
      <>
        Smart inventory, purchase orders &amp;{" "}
        <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent font-medium sm:font-semibold">
          ERP
        </span>{" "}
        — built for UK business
      </>
    ),
    description:
      "Real-time multi-warehouse stock control, automated purchase orders & UK VAT invoicing.",
    cta: "Explore ERP Suite",
    ctaHref: "#features",
  },
  {
    id: "restaurant",
    label: "Restaurant POS",
    icon: Utensils,
    title: (
      <>
        Seamless POS, table QR &amp;{" "}
        <span className="bg-gradient-to-r from-rose-600 via-red-500 to-pink-600 bg-clip-text text-transparent font-medium sm:font-semibold">
          Kitchen KDS
        </span>{" "}
        — built for UK hospitality
      </>
    ),
    description:
      "Complete POS billing, table QR ordering & Kitchen Display System (KDS) for UK hospitality.",
    cta: "Explore Restaurant POS",
    ctaHref: "/live-order",
  },
];

const AUTO_ROTATE_MS = 5000;

export default function HeroLaptop({ onWatchDemo }) {
  const [activeTab, setActiveTab] = useState("hrms");
  const [progressKey, setProgressKey] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const currentProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  // Continuous auto switching interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const idx = PRODUCTS.findIndex((p) => p.id === prev);
        return PRODUCTS[(idx + 1) % PRODUCTS.length].id;
      });
      setProgressKey((k) => k + 1);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setProgressKey((k) => k + 1);
  };

  const up = (d = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-white">
      {/* ── Brand center ambient glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-500"
        style={{
          background:
            activeTab === "erp"
              ? "radial-gradient(ellipse 60% 55% at 50% 44%, rgba(245,158,11,0.07) 0%, rgba(217,119,6,0.04) 35%, transparent 65%)"
              : activeTab === "restaurant"
              ? "radial-gradient(ellipse 60% 55% at 50% 44%, rgba(244,63,94,0.07) 0%, rgba(225,29,72,0.04) 35%, transparent 65%)"
              : "radial-gradient(ellipse 60% 55% at 50% 44%, rgba(99,102,241,0.07) 0%, rgba(79,70,229,0.04) 35%, transparent 65%)",
        }}
      />

      {/* ── Background grid pattern ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-0"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "860px",
          maxWidth: "95vw",
          height: "70%",
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage:
            "radial-gradient(ellipse 65% 58% at 50% 46%, black 10%, rgba(0,0,0,0.5) 42%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 58% at 50% 46%, black 10%, rgba(0,0,0,0.5) 42%, transparent 70%)",
        }}
      />

      {/* ════════════════════════════════
          DESKTOP (xl+)
      ════════════════════════════════ */}
      <div className="hidden xl:block relative z-10 h-[800px] 2xl:h-[840px] transition-all duration-300">
        {/* Heading & 3-Product Switcher */}
        <div className="flex flex-col items-center text-center pt-[7rem] px-6 relative z-20">
          
          {/* 3-Product Segment Control Bar */}
          <motion.div {...up(0)} className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-slate-100/90 p-1.5 border border-slate-200/80 shadow-xs">
            {PRODUCTS.map((prod) => {
              const IconComponent = prod.icon;
              const isActive = activeTab === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => handleTabClick(prod.id)}
                  className={`relative overflow-hidden flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-md shadow-slate-900/5 ring-1 ring-slate-200 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-brand-600" : "text-slate-400"}`} />
                  <span>{prod.label}</span>

                  {/* Bottom progress bar timer */}
                  {isActive && (
                    <motion.div
                      key={`progress-${progressKey}-${prod.id}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_ROTATE_MS / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-500 to-indigo-600 origin-left pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Locked-height Title & Description Container — prevents layout shift */}
          <div className="min-h-[140px] flex items-center justify-center w-full max-w-[720px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentProduct.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <h1 className="max-w-[700px] text-[2.75rem] font-medium sm:font-semibold leading-[1.16] tracking-tight text-slate-900 font-satoshi">
                  {currentProduct.title}
                </h1>

                <p className="mt-3.5 italic max-w-[500px] text-[0.95rem] leading-relaxed text-slate-500 font-normal">
                  {currentProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <motion.div {...up(0.15)} className="mt-5 flex items-center gap-3">
            <a
              href={currentProduct.ctaHref}
              className="group inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-[0.97]"
            >
              {currentProduct.cta}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={onWatchDemo}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-all hover:border-brand-300 hover:text-brand-600 active:scale-[0.97]"
            >
              Watch demo video
            </button>
          </motion.div>
        </div>

        {/* ── Image cards wrapper for fluid responsiveness ── */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="relative w-full h-full max-w-[1440px] mx-auto transition-all duration-300 origin-top scale-[0.84] translate-y-24 2xl:scale-100 2xl:translate-y-0">
            {HERO_CARDS.map(({ id, src, alt, style, motion: m }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: m.ox, y: 20, scale: 0.92 }}
                animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{ delay: m.delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute pointer-events-auto"
                style={{ ...style }}
              >
                <div className="relative group select-none">
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-brand-500/20 via-brand-indigo/15 to-accent-500/15 opacity-80 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl group-hover:-inset-4 pointer-events-none" />

                  <motion.img
                    src={src}
                    alt={alt}
                    animate={{ y: [0, -m.bobAmp, 0] }}
                    transition={{
                      duration: m.bobDur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: m.bobDelay,
                    }}
                    className="relative rounded-2xl shadow-[0_10px_30px_rgba(99,102,241,0.12)] transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.22)] object-contain bg-white"
                    style={{ width: style.width }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          MOBILE / TABLET
      ════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-10 text-center xl:hidden">
        {/* Mobile Product Selector Pills */}
        <div className="mb-4 flex flex-wrap justify-center gap-1.5 rounded-full bg-slate-100 p-1.5 border border-slate-200">
          {PRODUCTS.map((prod) => {
            const IconComponent = prod.icon;
            const isActive = activeTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => handleTabClick(prod.id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  isActive ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{prod.label}</span>
              </button>
            );
          })}
        </div>

        <motion.h1 {...up(0)} className="text-2xl font-medium sm:font-semibold leading-[1.18] tracking-tight text-slate-900 sm:text-3xl">
          {currentProduct.title}
        </motion.h1>

        <motion.p {...up(0.1)} className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500 font-normal">
          {currentProduct.description}
        </motion.p>

        <motion.div {...up(0.2)} className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={currentProduct.ctaHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25"
          >
            {currentProduct.cta} <ChevronRight className="h-4 w-4" />
          </a>
          <button
            onClick={onWatchDemo}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700"
          >
            Watch demo video
          </button>
        </motion.div>

        {/* Mobile image strip */}
        <motion.div {...up(0.3)} className="mt-8 w-full overflow-x-auto pb-4 no-scrollbar">
          <div className="flex w-max gap-4 px-4 mx-auto py-2">
            {HERO_CARDS.filter(c => MOBILE_CARDS.includes(c.id)).map(({ id, src, alt, style }) => (
              <div key={id} className="relative group shrink-0">
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-tr from-brand-500/20 via-brand-indigo/15 to-accent-500/15 opacity-70 blur-lg pointer-events-none" />
                <img
                  key={id}
                  src={src}
                  alt={alt}
                  className="relative rounded-2xl shadow-[0_8px_24px_rgba(99,102,241,0.12)] object-contain bg-white"
                  style={{ width: style.width, maxWidth: 160 }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

