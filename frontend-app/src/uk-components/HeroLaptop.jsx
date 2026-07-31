import { useState, useRef } from "react";
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
    badge: "👥 HRMS Suite",
    icon: Users,
    gradient: "from-brand-600 via-brand-500 to-indigo-600",
    pillBg: "bg-brand-50 border-brand-200 text-brand-700",
    pillText: "✨ HMRC-Compliant Payroll & HR Platform",
    title: (
      <>
        AI-powered attendance, payroll &amp;{" "}
        <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 bg-clip-text text-transparent">
          HR
        </span>{" "}
        — built for UK teams
      </>
    ),
    description:
      "Worklynx brings attendance, leave, HMRC RTI payroll, employee records and performance reviews into one cost-efficient, AI-powered platform with HMRC compliance ready from day one.",
    cta: "Start HRMS Free Trial",
    ctaHref: "/signup",
    highlights: ["HMRC PAYE RTI Compliant", "GPS & Mobile Clock-in", "28-Day Statutory Holiday Tracking"],
  },
  {
    id: "erp",
    label: "ERP & Inventory",
    badge: "📦 ERP & Stock",
    icon: Package,
    gradient: "from-amber-600 via-orange-500 to-amber-500",
    pillBg: "bg-amber-50 border-amber-200 text-amber-800",
    pillText: "📦 Enterprise Stock Control & UK ERP Suite",
    title: (
      <>
        Smart inventory, purchase orders &amp;{" "}
        <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
          ERP
        </span>{" "}
        — built for UK business
      </>
    ),
    description:
      "Master real-time stock control across multi-warehouses, automate supplier purchase orders, manage vendor lead times, and generate UK VAT-compliant invoices automatically.",
    cta: "Explore ERP Suite",
    ctaHref: "#features",
    highlights: ["Multi-Warehouse Control", "Automated Supplier POs", "UK VAT Invoicing & Ledgers"],
  },
  {
    id: "restaurant",
    label: "Restaurant POS",
    badge: "🍽️ Restaurant POS",
    icon: Utensils,
    gradient: "from-rose-600 via-red-500 to-pink-600",
    pillBg: "bg-rose-50 border-rose-200 text-rose-800",
    pillText: "🍽️ Complete UK Restaurant POS & Kitchen Display System",
    title: (
      <>
        Seamless POS, table QR &amp;{" "}
        <span className="bg-gradient-to-r from-rose-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
          Kitchen KDS
        </span>{" "}
        — built for UK hospitality
      </>
    ),
    description:
      "Empower your restaurant, cafe or pub with instant table QR ordering, real-time Kitchen Display System (KDS), POS billing terminals, and live menu item stock dispatch.",
    cta: "Explore Restaurant POS",
    ctaHref: "/live-order",
    highlights: ["Instant Table QR & Mobile Orders", "Real-Time Kitchen (KDS) Display", "POS Billing & Takeaway Ready"],
  },
];

const AUTO_ROTATE_MS = 6000;

export default function HeroLaptop({ onWatchDemo }) {
  const [activeTab, setActiveTab] = useState("hrms");
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const currentProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const idx = PRODUCTS.findIndex((p) => p.id === prev);
        const nextIdx = (idx + 1) % PRODUCTS.length;
        return PRODUCTS[nextIdx].id;
      });
      setProgressKey((k) => k + 1);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, [isPaused, activeTab]);

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
              ? "radial-gradient(ellipse 60% 55% at 50% 44%, rgba(245,158,11,0.08) 0%, rgba(217,119,6,0.05) 35%, transparent 65%)"
              : activeTab === "restaurant"
              ? "radial-gradient(ellipse 60% 55% at 50% 44%, rgba(244,63,94,0.08) 0%, rgba(225,29,72,0.05) 35%, transparent 65%)"
              : "radial-gradient(ellipse 60% 55% at 50% 44%, rgba(99,102,241,0.08) 0%, rgba(79,70,229,0.05) 35%, transparent 65%)",
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
            "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
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
      <div className="hidden xl:block relative z-10 h-[830px] 2xl:h-[880px] transition-all duration-300">
        {/* Heading & 3-Product Switcher */}
        <div
          className="flex flex-col items-center text-center pt-[6rem] px-6 relative z-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 3-Product Segment Control Bar with visual progress timer */}
          <motion.div {...up(0)} className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-slate-100/90 p-1.5 border border-slate-200/80 shadow-inner">
            {PRODUCTS.map((prod) => {
              const IconComponent = prod.icon;
              const isActive = activeTab === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => handleTabClick(prod.id)}
                  className={`relative overflow-hidden flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-md shadow-slate-900/5 ring-1 ring-slate-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-brand-600" : "text-slate-400"}`} />
                  <span>{prod.label}</span>

                  {/* Sleek bottom progress bar showing auto-switching timer */}
                  {isActive && (
                    <motion.div
                      key={`progress-${progressKey}-${prod.id}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: isPaused ? 0 : AUTO_ROTATE_MS / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-500 to-indigo-600 origin-left pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Product Badge Pill */}
          <div className="h-7 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`pill-${currentProduct.id}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold border ${currentProduct.pillBg}`}
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{currentProduct.pillText}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Locked-height Container to Prevent Layout Jump */}
          <div className="min-h-[210px] flex items-center justify-center w-full max-w-[780px] my-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${currentProduct.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <h1 className="max-w-[760px] text-[3.1rem] font-bold leading-[1.12] tracking-tight text-slate-900 font-satoshi">
                  {currentProduct.title}
                </h1>

                <p className="mt-3.5 italic max-w-[560px] text-[0.98rem] leading-relaxed text-slate-600">
                  {currentProduct.description}
                </p>

                {/* Highlights */}
                <div className="mt-3.5 flex items-center justify-center gap-3 flex-wrap">
                  {currentProduct.highlights.map((item, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <motion.div {...up(0.2)} className="mt-6 flex items-center gap-3">
            <a
              href={currentProduct.ctaHref}
              className="group inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-[0.97]"
            >
              {currentProduct.cta}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={onWatchDemo}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-brand-300 hover:text-brand-600 active:scale-[0.97]"
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
                  {/* Soft ambient background glow */}
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
                onClick={() => setActiveTab(prod.id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
                  isActive ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{prod.label}</span>
              </button>
            );
          })}
        </div>

        <motion.h1 {...up(0)} className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
          {currentProduct.title}
        </motion.h1>

        <motion.p {...up(0.1)} className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
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

