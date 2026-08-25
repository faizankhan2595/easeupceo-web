"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const modules = [
  {
    title: "Inventory",
    subtitle: "Stock & products",
    icon: "▦",
    position: "left",
  },
  {
    title: "RMS",
    subtitle: "Restaurant operations",
    icon: "◉",
    position: "left",
  },
  {
    title: "HRMS",
    subtitle: "People & payroll",
    icon: "♙",
    position: "right",
  },
  {
    title: "Analytics",
    subtitle: "Business insights",
    icon: "⌁",
    position: "right",
  },
];

const products = [
  {
    title: "Inventory Management",
    description:
      "Know what you have, where it is and what needs attention.",
    type: "inventory",
  },
  {
    title: "Restaurant Management",
    description:
      "Run your restaurant operations from orders to revenue.",
    type: "rms",
  },
  {
    title: "HR Management",
    description:
      "Manage your people, attendance, leave and payroll.",
    type: "hrms",
  },
];

export default function Hero() {
  const containerRef = useRef(null);

  // Track scroll position
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 22, restDelta: 0.001 });

  // Transforms for transition from Initial Landing -> Full Hero Reveal
  // Threshold 0 to 220px scroll
  const planetaryScale = useTransform(smoothY, [0, 220], [1.3, 0.9]);
  const orbitOpacity = useTransform(smoothY, [0, 160], [1, 0]);
  const scrollCueOpacity = useTransform(smoothY, [0, 110], [1, 0]);
  const scrollCueY = useTransform(smoothY, [0, 110], [0, 25]);

  // Hero Content transforms (Header, CTAs, Modules, Product Cards)
  const heroContentOpacity = useTransform(smoothY, [50, 220], [0, 1]);
  const heroContentY = useTransform(smoothY, [50, 220], [45, 0]);

  // Handle clicking "Scroll to explore"
  const handleScrollExplore = () => {
    window.scrollTo({
      top: 260,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] overflow-hidden bg-[#f5f6f8]"
    >
      {/* ------------------------------------------------
          Background Ambient Glow
      ------------------------------------------------ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[32%] h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-400/20 via-white/90 to-purple-300/20 blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-[350px] bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* ------------------------------------------------
          1. INITIAL PLANETARY WORKLYNX LANDING (First Arrive)
      ------------------------------------------------ */}
      <motion.div
        style={{
          opacity: orbitOpacity,
          pointerEvents: useTransform(smoothY, [0, 100], ["auto", "none"]),
        }}
        className="pointer-events-none absolute inset-x-0 top-12 z-30 flex flex-col items-center justify-center pt-12 sm:pt-20"
      >
        {/* Planetary Orbit Container */}
        <motion.div
          style={{ scale: planetaryScale }}
          className="relative flex flex-col items-center justify-center py-10"
        >
          {/* Outer Orbit Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] rounded-full border border-dashed border-brand-500/40"
          >
            {/* Planet Node: HRMS */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-md backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              HRMS
            </div>

            {/* Planet Node: Analytics */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-amber-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-amber-600 shadow-md backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              Analytics
            </div>
          </motion.div>

          {/* Inner Orbit Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute h-[230px] w-[230px] sm:h-[290px] sm:w-[290px] rounded-full border border-slate-300/60"
          >
            {/* Planet Node: Inventory */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-emerald-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-emerald-600 shadow-md backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Inventory
            </div>

            {/* Planet Node: RMS */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-purple-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-purple-600 shadow-md backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              RMS
            </div>
          </motion.div>

          {/* Big Center Worklynx Badge */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="relative z-20 flex h-[90px] w-[270px] sm:h-[105px] sm:w-[320px] items-center justify-center rounded-[36px] bg-[#202020] shadow-[0_30px_80px_rgba(0,0,0,0.3)] border border-slate-800"
          >
            <WorklynxMark large />

            <span className="ml-4 text-3xl font-bold tracking-[-0.055em] text-white sm:text-4xl">
              Worklynx
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll To Explore Prompt */}
        <motion.div
          style={{ opacity: scrollCueOpacity, y: scrollCueY }}
          onClick={handleScrollExplore}
          className="pointer-events-auto mt-12 sm:mt-16 flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 group-hover:text-slate-900 transition-colors">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-700 shadow-sm group-hover:border-slate-800 transition-colors"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ------------------------------------------------
          2. REVEALED HERO CONTENT (On Scroll Animation)
      ------------------------------------------------ */}
      <motion.div
        style={{ opacity: heroContentOpacity, y: heroContentY }}
        className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col items-center px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pt-16"
      >
        {/* Heading */}
        <div className="relative z-10 max-w-[900px] text-center">
          <h1 className="text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#202124] sm:text-[64px] md:text-[76px] lg:text-[64px]">
            Everything your
            <br />
            business needs.
          </h1>

          <p className="mx-auto mt-7 max-w-[620px] text-[15px] leading-7 text-[#73757c] sm:text-[17px]">
            Worklynx brings inventory, restaurant management and
            human resources together in one powerful business
            platform.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-[#202020] px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#303030]">
              Get started
            </button>

            <button className="rounded-full border border-black/[0.08] bg-white px-7 py-3.5 text-sm font-medium text-[#333438] transition hover:-translate-y-0.5 hover:bg-[#fafafa]">
              Explore Worklynx
            </button>
          </div>
        </div>

        {/* ------------------------------------------------
            Ecosystem Visual
        ------------------------------------------------ */}
        <div className="relative mt-20 w-full max-w-[1150px]">
          {/* Desktop connection lines */}
          <div className="pointer-events-none absolute left-[17%] right-[17%] top-[65px] hidden h-px bg-gradient-to-r from-transparent via-[#d5d7db] to-transparent lg:block" />

          {/* Main ecosystem */}
          <div className="relative flex flex-col items-center lg:h-[210px]">
            {/* Left modules */}
            <div className="absolute left-0 top-0 hidden flex-col gap-4 lg:flex">
              {modules
                .filter((item) => item.position === "left")
                .map((module, index) => (
                  <Module
                    key={module.title}
                    {...module}
                    index={index}
                    direction="left"
                  />
                ))}
            </div>

            {/* Right modules */}
            <div className="absolute right-0 top-0 hidden flex-col gap-4 lg:flex">
              {modules
                .filter((item) => item.position === "right")
                .map((module, index) => (
                  <Module
                    key={module.title}
                    {...module}
                    index={index}
                    direction="right"
                  />
                ))}
            </div>

            {/* Center Worklynx in Ecosystem */}
            <Worklynx onClick={handleScrollExplore} />

            {/* Mobile modules */}
            <div className="mt-8 grid w-full max-w-[600px] grid-cols-2 gap-3 lg:hidden">
              {modules.map((module, index) => (
                <Module
                  key={module.title}
                  {...module}
                  index={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>

          {/* Product previews */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                {...product}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ========================================================
   MODULE
======================================================== */

function Module({
  title,
  subtitle,
  icon,
  index,
  direction,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -25 : 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.25 + index * 0.1,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        flex
        min-h-[62px]
        min-w-[190px]
        items-center
        gap-3
        rounded-2xl
        border
        border-black/[0.06]
        bg-white
        px-4
        py-3
        shadow-[0_8px_30px_rgba(30,30,40,0.06)]
        transition-shadow
        hover:shadow-[0_14px_35px_rgba(30,30,40,0.1)]
      "
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f2f4] text-[16px] text-[#45474d]">
        {icon}
      </div>

      <div>
        <p className="text-[12px] font-semibold text-[#36383d]">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-[#92949a]">
          {subtitle}
        </p>
      </div>

      <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#d3d5d9] transition-colors group-hover:bg-[#202020]" />
    </motion.div>
  );
}

/* ========================================================
   WORKLYNX
======================================================== */

function Worklynx({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.035,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
        relative
        z-20
        flex
        h-[76px]
        w-[225px]
        items-center
        justify-center
        rounded-[24px]
        bg-[#202020]
        shadow-[0_20px_45px_rgba(0,0,0,0.16)]
      "
    >
      <WorklynxMark />

      <span className="ml-3 text-[22px] font-semibold tracking-[-0.055em] text-white">
        Worklynx
      </span>

      {/* tiny static accent */}
      <span className="absolute bottom-2.5 right-3 h-1 w-1 rounded-full bg-white/40" />
    </motion.button>
  );
}

/* ========================================================
   WORKLYNX MARK
======================================================== */

function WorklynxMark({ large = false }) {
  return (
    <div
      className={`relative ${large ? "h-[34px] w-[34px]" : "h-[27px] w-[27px]"
        }`}
    >
      <div
        className={`absolute left-0 top-0 ${large ? "h-[24px] w-[24px]" : "h-[19px] w-[19px]"
          } rounded-[5px] bg-white`}
      />

      <div
        className={`absolute bottom-0 right-0 ${large ? "h-[22px] w-[22px]" : "h-[18px] w-[18px]"
          } rounded-[5px] bg-white/75`}
      />

      <div
        className={`absolute bottom-[3px] left-[3px] ${large ? "h-[13px] w-[13px]" : "h-[10px] w-[10px]"
          } rounded-[3px] bg-[#202020]`}
      />
    </div>
  );
}

/* ========================================================
   PRODUCT CARD
======================================================== */

function ProductCard({
  title,
  description,
  type,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.45 + index * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        min-h-[250px]
        overflow-hidden
        rounded-[22px]
        border
        border-black/[0.05]
        bg-white
        p-5
        shadow-[0_12px_40px_rgba(30,30,40,0.06)]
      "
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f2f4] text-sm text-[#55575d]">
          {type === "inventory" && "▦"}
          {type === "rms" && "◉"}
          {type === "hrms" && "♙"}
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-[#34363b]">
            {title}
          </h3>

          <span className="text-[9px] text-[#a0a2a7]">
            Worklynx module
          </span>
        </div>
      </div>

      <p className="mt-3 max-w-[280px] text-[10px] leading-5 text-[#898b91]">
        {description}
      </p>

      <div className="mt-6">
        {type === "inventory" && <InventoryPreview />}
        {type === "rms" && <RmsPreview />}
        {type === "hrms" && <HrmsPreview />}
      </div>
    </motion.div>
  );
}

/* ========================================================
   INVENTORY
======================================================== */

function InventoryPreview() {
  const products = [
    ["Products", "2,847"],
    ["In Stock", "2,175"],
    ["Low Stock", "84"],
  ];

  return (
    <div className="rounded-xl border border-[#eeeeef] bg-[#fafafa] p-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-medium text-[#74767c]">
          Inventory overview
        </span>

        <span className="text-[8px] text-[#a0a2a7]">
          Live
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {products.map(([name, value], index) => (
          <div
            key={name}
            className="rounded-lg bg-white p-2.5"
          >
            <p className="text-[7px] text-[#999ba0]">
              {name}
            </p>

            <p className="mt-1 text-sm font-medium text-[#45474d]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e9eaec]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "78%" }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-[#707278]"
        />
      </div>
    </div>
  );
}

/* ========================================================
   RMS
======================================================== */

function RmsPreview() {
  const bars = [35, 48, 42, 67, 55, 76, 63, 88, 72];

  return (
    <div className="rounded-xl border border-[#eeeeef] bg-[#fafafa] p-4">
      <div className="flex justify-between">
        <div>
          <p className="text-[8px] text-[#999ba0]">
            Today's revenue
          </p>

          <p className="mt-1 text-xl font-medium text-[#44464b]">
            ₹48.2K
          </p>
        </div>

        <div className="text-right">
          <p className="text-[8px] text-[#999ba0]">
            Orders
          </p>

          <p className="mt-1 text-sm font-medium text-[#44464b]">
            184
          </p>
        </div>
      </div>

      <div className="mt-5 flex h-[35px] items-end gap-1.5">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{
              height: `${height}%`,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
            }}
            className="flex-1 rounded-t-[3px] bg-[#d2d4d7]"
          />
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   HRMS
======================================================== */

function HrmsPreview() {
  return (
    <div className="rounded-xl border border-[#eeeeef] bg-[#fafafa] p-4">
      <div className="flex justify-between">
        <div>
          <p className="text-[8px] text-[#999ba0]">
            Employees
          </p>

          <p className="mt-1 text-xl font-medium text-[#44464b]">
            128
          </p>
        </div>

        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-7 w-7 rounded-full border-2 border-white bg-[#dfe1e4]"
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between">
          <span className="text-[8px] text-[#999ba0]">
            Attendance
          </span>

          <span className="text-[8px] font-medium text-[#55575d]">
            94%
          </span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e7e8ea]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "94%" }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-[#707278]"
          />
        </div>
      </div>
    </div>
  );
}