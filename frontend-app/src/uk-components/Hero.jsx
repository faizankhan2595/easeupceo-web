"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import worklynxLogo from "@/assets/worklynx-light.png";
import {
  Package,
  UtensilsCrossed,
  Users,
  BarChart3,
} from "lucide-react";

const modules = [
  {
    title: "Inventory",
    subtitle: "Stock & products",
    Icon: Package,
    position: "left",
  },
  {
    title: "RMS",
    subtitle: "Restaurant operations",
    Icon: UtensilsCrossed,
    position: "left",
  },
  {
    title: "HRMS",
    subtitle: "People & payroll",
    Icon: Users,
    position: "right",
  },
  {
    title: "Analytics",
    subtitle: "Business insights",
    Icon: BarChart3,
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

function PenUnderline() {
  return (
    <motion.svg
      viewBox="0 0 360 45"
      className="
        pointer-events-none
        absolute
        left-1/2
        top-[92%]
        z-[-1]
        h-[15px]
        w-[200px]
        -translate-x-1/2
        overflow-visible

        sm:h-[25px]
        sm:w-[260px]
      "
      fill="none"
    >
      <defs>
        <linearGradient
          id="pen-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="var(--color-brand-600)" />
          <stop offset="100%" stopColor="var(--color-brand-500)" />
        </linearGradient>
      </defs>

      {/* Main hand-drawn stroke */}
      <motion.path
        d="
          M 8 22
          C 65 21, 125 20, 185 19
          C 245 18, 305 18, 350 14
          C 356 14, 358 17, 352 19
          C 290 24, 220 25, 150 26
          C 95 27, 45 27, 10 28
        "
        stroke="url(#pen-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.9,
            ease: "easeOut",
          },
          opacity: {
            duration: 0.15,
          },
        }}
      />

      {/* Small second stroke */}
      <motion.path
        d="
          M 58 34
          C 115 31, 175 31, 235 31
          C 270 31, 298 30, 320 28
        "
        stroke="url(#pen-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{
          pathLength: {
            duration: 0.55,
            delay: 0.5,
            ease: "easeOut",
          },
          opacity: {
            duration: 0.15,
            delay: 0.5,
          },
        }}
      />
    </motion.svg>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initial loader state: shows bigger Worklynx centered, then transitions into place after 900ms delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f6f8] pb-20 pt-28 sm:pt-32 lg:pt-20">
      {/* ------------------------------------------------
          Background
      ------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Subtle brand gradient ambient — covers ~15-20% of hero */}
        <div className="absolute left-1/2 top-[28%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 opacity-[0.09] blur-[110px]" />

        <div className="absolute left-1/2 top-[35%] h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 blur-[130px]" />

        <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* ------------------------------------------------
          Hero Content (Heading, Subtitle, CTAs)
          Initially hidden during loader phase, animates in smoothly after delay
      ------------------------------------------------ */}

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: loaded ? 1 : 0,
            y: loaded ? 0 : -15,
          }}
          transition={{
            duration: 0.75,
            delay: loaded ? 0.2 : 0,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 max-w-[900px] text-center"
        >


          {/* <h1 className="text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#1a1b1e] sm:text-[64px] md:text-[76px] lg:text-[66px]">
            Everything your
            <br />
            business needs.
          </h1> */}
          <h1 className="text-[44px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#1a1b1e] sm:text-[64px] md:text-[76px] lg:text-[66px]">
            Everything{" "}
            <span className="relative inline-block">
              your
              <PenUnderline />
            </span>
            <br />
            business needs.
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-[15px] font-medium leading-7 text-[#62646a] sm:text-[17px]">
            Worklynx brings inventory, restaurant management and
            human resources together in one powerful business platform.
          </p>

          {/* CTA Buttons */}


        </motion.div>

        {/* ------------------------------------------------
            Ecosystem Visual with Worklynx Loader Transition
        ------------------------------------------------ */}

        <div className="relative mt-16 w-full max-w-[1150px]">
          {/* Desktop connection lines */}
          {/* ========================================================
    DESKTOP CONNECTION SYSTEM
    Rounded etched connector network
======================================================== */}

          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewBox="0 0 1150 470"
            preserveAspectRatio="none"
            className="
    pointer-events-none
    absolute
    left-0
    top-0
    z-0
    hidden
    h-[470px]
    w-full
    lg:block
  "
          >
            <defs>
              <filter
                id="etched-shadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="0.7" />
              </filter>

              <linearGradient
                id="etched-highlight"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#ffffff"
                  stopOpacity="0.35"
                />
                <stop
                  offset="100%"
                  stopColor="#ffffff"
                  stopOpacity="0.05"
                />
              </linearGradient>
            </defs>

            {/* =====================================================
      1. SOFT RECESSED SHADOW
  ===================================================== */}

            {/* SOFT RECESSED SHADOW */}
            <g
              fill="none"
              stroke="#d5d6db"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.18"
              filter="url(#etched-shadow)"
            >
              {/* LEFT — INVENTORY */}
              <path
                d="
        M 190 30
        H 210
        Q 225 30 225 45
        V 93
        Q 225 108 210 108
        H 190
      "
              />

              {/* LEFT — RMS → WORKLYNX */}
              <path
                d="
        M 225 93
        V 64
        H 462
      "
              />

              {/* RIGHT — HRMS */}
              <path
                d="
        M 960 30
        H 940
        Q 925 30 925 45
        V 93
        Q 925 108 940 108
        H 960
      "
              />

              {/* RIGHT — ANALYTICS → WORKLYNX */}
              <path
                d="
        M 925 93
        V 64
        H 688
      "
              />

              {/* WORKLYNX → CENTER */}
              <path
                d="
        M 575 100
        V 210
      "
              />

              {/* BOTTOM HORIZONTAL */}
              <path
                d="
        M 185 210
        H 965
      "
              />

              {/* INVENTORY MANAGEMENT */}
              <path
                d="
        M 185 210
        V 258
      "
              />

              {/* RESTAURANT MANAGEMENT */}
              <path
                d="
        M 575 210
        V 258
      "
              />

              {/* HR MANAGEMENT */}
              <path
                d="
        M 965 210
        V 258
      "
              />
            </g>

            {/* =====================================================
      2. MAIN ETCHED LINE
  ===================================================== */}

            {/* MAIN ETCHED LINE */}
            <g
              fill="none"
              stroke="#dfe0e4"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* LEFT — INVENTORY */}
              <path
                d="
        M 190 29
        H 210
        Q 225 29 225 44
        V 92
        Q 225 107 210 107
        H 190
      "
              />

              {/* LEFT → WORKLYNX */}
              <path
                d="
        M 225 92
        V 63
        H 462
      "
              />

              {/* RIGHT — HRMS */}
              <path
                d="
        M 960 29
        H 940
        Q 925 29 925 44
        V 92
        Q 925 107 940 107
        H 960
      "
              />

              {/* RIGHT → WORKLYNX */}
              <path
                d="
        M 925 92
        V 63
        H 688
      "
              />

              {/* WORKLYNX → CENTER */}
              <path
                d="
        M 575 100
        V 210
      "
              />

              {/* BOTTOM HORIZONTAL */}
              <path
                d="
        M 185 210
        H 965
      "
              />

              {/* INVENTORY MANAGEMENT */}
              <path
                d="
        M 185 210
        V 258
      "
              />

              {/* RESTAURANT MANAGEMENT */}
              <path
                d="
        M 575 210
        V 258
      "
              />

              {/* HR MANAGEMENT */}
              <path
                d="
        M 965 210
        V 258
      "
              />
            </g>

            {/* =====================================================
      3. THIN WHITE SCRATCH HIGHLIGHT
  ===================================================== */}

            <g
              fill="none"
              stroke="url(#etched-highlight)"
              strokeWidth="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.30"
            >
              {/* LEFT — INVENTORY */}
              <path
                d="
        M 190 28
        H 210
        Q 226 28 226 44
        V 92
        Q 226 108 210 108
        H 190
      "
              />

              {/* LEFT → WORKLYNX */}
              <path
                d="
        M 226 92
        V 62
        H 462
      "
              />

              {/* RIGHT — HRMS */}
              <path
                d="
        M 960 28
        H 940
        Q 924 28 924 44
        V 92
        Q 924 108 940 108
        H 960
      "
              />

              {/* RIGHT → WORKLYNX */}
              <path
                d="
        M 924 92
        V 62
        H 688
      "
              />

              {/* CENTER */}
              <path
                d="
        M 574 100
        V 210
      "
              />

              {/* BOTTOM */}
              <path
                d="
        M 185 209
        H 965
      "
              />

              {/* INVENTORY MANAGEMENT */}
              <path
                d="
        M 184 209
        V 258
      "
              />

              {/* RESTAURANT MANAGEMENT */}
              <path
                d="
        M 574 209
        V 258
      "
              />

              {/* HR MANAGEMENT */}
              <path
                d="
        M 964 209
        V 258
      "
              />
            </g>
          </motion.svg>

          {/* Main ecosystem */}

          <div className="relative flex flex-col items-center lg:h-[210px]">
            {/* Left modules (Inventory, RMS) */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: loaded ? 1 : 0,
                x: loaded ? 0 : -30,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-0 top-0 hidden flex-col gap-4 lg:flex"
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

            {/* Right modules (HRMS, Analytics) */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: loaded ? 1 : 0,
                x: loaded ? 0 : 30,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-0 top-0 hidden flex-col gap-4 lg:flex"
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

            {/* 
              SINGLE WORKLYNX LOADER BADGE:
              Starts BIG in screen center as intro loader, then seamlessly
              scales and glides into ecosystem hub position in ONE smooth animation!
            */}

            <motion.div
              initial={false}
              animate={{
                scale: loaded ? 1 : 2.1,
                y: loaded ? 0 : -155,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-30 my-6 lg:my-0"
            >
              <Worklynx />
            </motion.div>

            {/* Mobile modules */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 grid w-full max-w-[600px] grid-cols-2 gap-3 lg:hidden"
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

          {/* Product cards below */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{
              opacity: loaded ? 1 : 0,
              y: loaded ? 0 : 35,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                {...product}
                index={index}
              />
            ))}
          </motion.div>
        </div>
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
  Icon,
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
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-600/15 to-brand-500/10 text-brand-600">
        <Icon size={17} strokeWidth={1.8} />
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
    <div className="relative">
      {/* ============================================
          SATURN RING — BACK HALF
      ============================================ */}

      <svg
        viewBox="0 0 360 190"
        className="
          pointer-events-none
          absolute
          -left-[68px]
          -top-[57px]
          z-10
          h-[190px]
          w-[360px]
          overflow-visible
        "
      >
        <defs>
          <filter id="saturnGlowBack">
            <feGaussianBlur stdDeviation="0.7" />
          </filter>

          <filter id="saturnGlowFront">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* BACK GLOW */}
        <motion.ellipse
          cx="180"
          cy="95"
          rx="158"
          ry="55"
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#saturnGlowBack)"
          opacity="0.12"
          transform="rotate(-22 180 95)"
          pathLength="100"
          initial={{
            strokeDasharray: "100 100",
            strokeDashoffset: 0,
            opacity: 0,
          }}
          animate={{
            strokeDashoffset: [100, 0],
            opacity: [0, 0.12, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* BACK RING */}
        <motion.ellipse
          cx="180"
          cy="95"
          rx="158"
          ry="55"
          fill="none"
          stroke="rgba(255,255,255,0.48)"
          strokeWidth="2.2"
          strokeLinecap="round"
          transform="rotate(-22 180 95)"
          pathLength="100"
          initial={{
            strokeDasharray: "100 100",
            strokeDashoffset: 0,
            opacity: 0,
          }}
          animate={{
            strokeDashoffset: [100, 0],
            opacity: [0, 0.55, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* BACK RING HIGHLIGHT */}
        <motion.ellipse
          cx="180"
          cy="95"
          rx="158"
          ry="55"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(-22 180 95)"
          pathLength="100"
          initial={{
            strokeDasharray: "7 93",
            strokeDashoffset: 100,
            opacity: 0,
          }}
          animate={{
            strokeDashoffset: [100, 0],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </svg>

      {/* ============================================
          ORIGINAL WORKLYNX CONTENT
      ============================================ */}

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
          z-20 mt-5
          flex
          h-[76px]
          w-[225px]
          items-center
          justify-center
          rounded-[24px]
          
          bg-white
          shadow-[0_20px_45px_rgba(99,102,241,0.35)]
        "
      >
        <img
          src={worklynxLogo}
          alt="Worklynx"
          className="h-[440px] w-auto object-contain"
        />

        <span className="ml-2.5 text-[22px] font-semibold tracking-[-0.055em] text-white">

        </span>

        <span className="absolute bottom-2.5 right-3 h-1 w-1 rounded-full bg-white/40" />
      </motion.button>

      {/* ============================================
          SATURN RING — FRONT HALF
      ============================================ */}

      <svg
        viewBox="0 0 360 190"
        className="
          pointer-events-none
          absolute
          -left-[68px]
          -top-[57px]
          z-30
          h-[190px]
          w-[360px]
          overflow-visible
        "
      >
        <defs>
          <filter id="saturnFrontGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          <filter id="saturnPointGlow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* FRONT GLOW */}
        <motion.ellipse
          cx="180"
          cy="95"
          rx="158"
          ry="55"
          fill="none"
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#saturnFrontGlow)"
          transform="rotate(-22 180 95)"
          pathLength="100"
          initial={{
            strokeDasharray: "0 100",
            strokeDashoffset: 0,
            opacity: 0,
          }}
          animate={{
            strokeDasharray: [
              "0 100",
              "25 75",
              "25 75",
              "0 100",
            ],
            strokeDashoffset: [0, 0, -75, -100],
            opacity: [0, 0.2, 0.25, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.05,
            times: [0, 0.25, 0.78, 1],
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* FRONT RING */}
        <motion.ellipse
          cx="180"
          cy="95"
          rx="158"
          ry="55"
          fill="none"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          transform="rotate(-22 180 95)"
          pathLength="100"
          initial={{
            strokeDasharray: "0 100",
            strokeDashoffset: 0,
            opacity: 0,
          }}
          animate={{
            strokeDasharray: [
              "0 100",
              "25 75",
              "25 75",
              "0 100",
            ],
            strokeDashoffset: [0, 0, -75, -100],
            opacity: [0, 0.7, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.05,
            times: [0, 0.25, 0.78, 1],
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* BRIGHT GLASS SECTION */}
        <motion.ellipse
          cx="180"
          cy="95"
          rx="158"
          ry="55"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#saturnPointGlow)"
          transform="rotate(-22 180 95)"
          pathLength="100"
          initial={{
            strokeDasharray: "10 90",
            strokeDashoffset: 100,
            opacity: 0,
          }}
          animate={{
            strokeDashoffset: [100, 0],
            opacity: [0, 0.95, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.05,
            ease: [0.12, 0.8, 0.2, 1],
          }}
        />

        {/* FINISH GLOW */}
        <motion.circle
          cx="75"
          cy="143"
          r="8"
          fill="white"
          filter="url(#saturnPointGlow)"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: [0, 0, 0.35, 0],
            scale: [0.5, 0.9, 1.35, 1.7],
          }}
          transition={{
            duration: 0.45,
            delay: 1.18,
            ease: "easeOut",
          }}
        />

        {/* tiny particles */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: 0.65,
            delay: 0.45,
          }}
        >
          <circle cx="65" cy="146" r="1.2" fill="white" />
          <circle cx="74" cy="151" r="0.8" fill="white" />
          <circle cx="84" cy="148" r="1.1" fill="white" />
          <circle cx="92" cy="143" r="0.7" fill="white" />
        </motion.g>
      </svg>
    </div>
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
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-600/15 to-brand-500/10 text-brand-600">
          {type === "inventory" && <Package size={16} strokeWidth={1.8} />}
          {type === "rms" && <UtensilsCrossed size={16} strokeWidth={1.8} />}
          {type === "hrms" && <Users size={16} strokeWidth={1.8} />}
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