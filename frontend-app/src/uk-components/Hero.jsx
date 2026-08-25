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

  // Track window scroll position
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 22, restDelta: 0.001 });

  // Transforms based on scroll (0px to 220px threshold)
  // Worklynx badge scaling: 1.4 -> 1.0
  const badgeScale = useTransform(smoothY, [0, 220], [1.4, 1.0]);
  const orbitOpacity = useTransform(smoothY, [0, 150], [1, 0]);
  const scrollCueOpacity = useTransform(smoothY, [0, 100], [1, 0]);
  const scrollCueY = useTransform(smoothY, [0, 100], [0, 20]);

  // Hero content reveals on scroll
  const heroContentOpacity = useTransform(smoothY, [40, 220], [0.15, 1]);
  const heroContentY = useTransform(smoothY, [40, 220], [35, 0]);

  const handleScrollExplore = () => {
    window.scrollTo({
      top: 260,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105vh] overflow-hidden bg-[#f5f6f8] pt-24 sm:pt-28 lg:pt-32"
    >
      {/* ------------------------------------------------
          Background Ambient Glow (spaced below Navbar)
      ------------------------------------------------ */}
      <div className="pointer-events-none absolute inset-0 pt-20">
        <div className="absolute left-1/2 top-[30%] h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-400/20 via-white/90 to-purple-300/20 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-[250px] bg-gradient-to-b from-white/90 via-white/50 to-transparent" />
      </div>

      {/* ------------------------------------------------
          Main Hero Container
      ------------------------------------------------ */}
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-20 pt-4 sm:px-10 lg:px-16">
        
        {/* ========================================================
            Central Ecosystem Visual & Worklynx Badge
        ======================================================== */}
        <div className="relative z-20 flex w-full max-w-[1150px] flex-col items-center justify-center">
          
          {/* Main Ecosystem Row */}
          <div className="relative flex w-full items-center justify-center min-h-[220px] sm:min-h-[260px]">
            
            {/* Desktop connection lines */}
            <div className="pointer-events-none absolute left-[17%] right-[17%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d5d7db] to-transparent lg:block" />

            {/* Left modules (Reveals on scroll) */}
            <motion.div 
              style={{ opacity: heroContentOpacity }}
              className="absolute left-0 top-1/2 -translate-y-1/2 hidden flex-col gap-4 lg:flex z-10"
            >
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
            </motion.div>

            {/* Right modules (Reveals on scroll) */}
            <motion.div 
              style={{ opacity: heroContentOpacity }}
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden flex-col gap-4 lg:flex z-10"
            >
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
            </motion.div>

            {/* CENTER WORKLYNX BADGE WITH PLANETARY ORBITS */}
            <div className="relative flex flex-col items-center justify-center">
              
              {/* Planetary Orbit Rings (Fades out as user scrolls) */}
              <motion.div 
                style={{ opacity: orbitOpacity }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
              >
                {/* Outer Orbit Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute h-[330px] w-[330px] sm:h-[410px] sm:w-[410px] rounded-full border border-dashed border-brand-500/40"
                >
                  {/* HRMS Planet Node */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-md backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    HRMS
                  </div>

                  {/* Analytics Planet Node */}
                  <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-amber-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-amber-600 shadow-md backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    Analytics
                  </div>
                </motion.div>

                {/* Inner Orbit Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute h-[220px] w-[220px] sm:h-[270px] sm:w-[270px] rounded-full border border-slate-300/60"
                >
                  {/* Inventory Planet Node */}
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-emerald-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-emerald-600 shadow-md backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Inventory
                  </div>

                  {/* RMS Planet Node */}
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-purple-200/90 bg-white/95 px-3 py-1 text-[11px] font-bold text-purple-600 shadow-md backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                    RMS
                  </div>
                </motion.div>
              </motion.div>

              {/* UNIFIED WORKLYNX CENTER BADGE (Scales from Big Planetary -> Fits in Center Diagram) */}
              <motion.div
                style={{ scale: badgeScale }}
                className="relative z-20 flex items-center justify-center transition-transform"
              >
                <Worklynx onClick={handleScrollExplore} />
              </motion.div>
            </div>
          </div>

          {/* Mobile modules (lg:hidden) */}
          <motion.div 
            style={{ opacity: heroContentOpacity }}
            className="mt-6 grid w-full max-w-[600px] grid-cols-2 gap-3 lg:hidden"
          >
            {modules.map((module, index) => (
              <Module
                key={module.title}
                {...module}
                index={index}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll Cue Prompt (Fades on scroll) */}
        <motion.div
          style={{ opacity: scrollCueOpacity, y: scrollCueY }}
          onClick={handleScrollExplore}
          className="mt-6 flex flex-col items-center gap-2 cursor-pointer group z-30"
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

        {/* ========================================================
            Revealed Hero Text, CTAs & Product Cards (Animates in on Scroll)
        ======================================================== */}
        <motion.div
          style={{ opacity: heroContentOpacity, y: heroContentY }}
          className="mt-12 flex w-full flex-col items-center text-center"
        >
          {/* Main Heading */}
          <div className="relative z-10 max-w-[900px] text-center">
            <h1 className="text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#202124] sm:text-[60px] md:text-[72px] lg:text-[64px]">
              Everything your
              <br />
              business needs.
            </h1>

            <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-7 text-[#73757c] sm:text-[17px]">
              Worklynx brings inventory, restaurant management and
              human resources together in one powerful business
              platform.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="rounded-full bg-[#202020] px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#303030]">
                Get started
              </button>

              <button className="rounded-full border border-black/[0.08] bg-white px-7 py-3.5 text-sm font-medium text-[#333438] transition hover:-translate-y-0.5 hover:bg-[#fafafa]">
                Explore Worklynx
              </button>
            </div>
          </div>

          {/* Product Preview Cards Grid */}
          <div className="mt-16 grid w-full max-w-[1150px] grid-cols-1 gap-5 md:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                {...product}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
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