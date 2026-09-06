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
       
        overflow-visible

        left-1/2
top-[92%]
z-[-1]
h-[15px]
w-[120%]
-translate-x-1/2

       sm:h-[28px]
sm:w-[125%]
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Initial loader state: shows bigger Worklynx centered, then transitions into place after 900ms delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 900);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-[#f5f6f8] pb-16 pt-20 sm:pb-20 sm:pt-20 lg:pt-20">
      {/* ------------------------------------------------
          Background
      ------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Subtle brand gradient ambient — covers ~15-20% of hero */}
        <div className="absolute left-1/2 top-[28%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 opacity-[0.09] blur-[110px]" />

        <div className="absolute left-1/2 top-[35%] h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 blur-[130px]" />

        <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* Purple sunlight — ambient glow */}
<div
  className="
    pointer-events-none
    absolute
    left-[18%]
    top-[30%]
    h-[520px]
    w-[520px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#c9a8f5]/10
    blur-[110px]
  "
/>

{/* Purple 3D orb */}
<div
  className="
    pointer-events-none
    absolute
    left-[18%]
    top-[30%]
    h-[360px]
    w-[360px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    opacity-60
    [background:radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.98)_0%,rgba(245,238,255,0.9)_12%,rgba(220,201,249,0.65)_30%,rgba(194,163,239,0.28)_52%,rgba(165,125,225,0.08)_70%,transparent_78%)]
    [box-shadow:inset_-35px_-25px_70px_rgba(130,80,200,0.08),inset_25px_20px_45px_rgba(255,255,255,0.35),0_0_80px_rgba(165,125,225,0.10)]
  "
/>

{/* Tiny specular shine */}
<div
  className="
    pointer-events-none
    absolute
    left-[13%]
    top-[25%]
    h-16
    w-16
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-white/50
    blur-[18px]
  "
/>
{/* right side  */}
{/* Purple sunlight — right side */}
<div
  className="
    pointer-events-none
    absolute
    hidden
    md:block
    right-[8%]
    top-[18%]
    h-[520px]
    w-[520px]
    translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#c9a8f5]/10
    blur-[110px]
  "
/>

{/* Purple 3D light orb */}
<div
  className="
    pointer-events-none
    absolute
    hidden
    md:block
    right-[8%]
    top-[18%]
    h-[360px]
    w-[360px]
    translate-x-1/2
    -translate-y-1/2
    rounded-full
    opacity-55
    [background:radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.98)_0%,rgba(245,238,255,0.9)_12%,rgba(220,201,249,0.65)_30%,rgba(194,163,239,0.28)_52%,rgba(165,125,225,0.08)_70%,transparent_78%)]
    [box-shadow:inset_-35px_-25px_70px_rgba(130,80,200,0.08),inset_25px_20px_45px_rgba(255,255,255,0.35),0_0_80px_rgba(165,125,225,0.10)]
  "
/>

{/* Soft specular shine */}
<div
  className="
    pointer-events-none
    absolute
    hidden
    md:block
    right-[17%]
    top-[11%]
    h-16
    w-16
    rounded-full
    bg-white/45
    blur-[18px]
  "
/>
{/*  */}


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
          <h1 className="text-[34px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#1a1b1e] xs:text-[40px] sm:text-[64px] md:text-[76px] lg:text-[60px]">
            Powering  {" "}
            <span className="relative inline-block">
              every part
              <PenUnderline />
            </span>
            <br />
            of your business.
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-[14px] font-base leading-7 text-[#62646a] sm:text-[16px]">
            Worklynx brings inventory, restaurant management and
            human resources together in one powerful business platform.
          </p>

          {/* CTA Buttons */}


        </motion.div>

        {/* ------------------------------------------------
            Ecosystem Visual with Worklynx Loader Transition
        ------------------------------------------------ */}

        <div className="relative mt-4 lg:mt-16 w-full max-w-[1150px]">
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
                scale: loaded ? 1 : (isMobile ? 1.35 : 2.0),
                y: loaded ? 0 : (isMobile ? -90 : -150),
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-30 my-4 sm:my-6 lg:my-0 flex justify-center"
            >
              <Worklynx />
            </motion.div>

            {/* Mobile modules */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: loaded ? 1 : 0,
                y: loaded ? 0 : 15,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 sm:mt-8 grid w-full max-w-[600px] grid-cols-2 gap-2.5 sm:gap-3.5 lg:hidden"
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
        min-h-[58px] sm:min-h-[62px]
        w-full min-w-0 lg:min-w-[190px] lg:w-auto
        items-center
        gap-2.5 sm:gap-3
        rounded-xl sm:rounded-2xl
        border
        border-black/[0.06]
        bg-white
        px-3 py-2.5 sm:px-4 sm:py-3
        shadow-[0_8px_30px_rgba(30,30,40,0.06)]
        transition-shadow
        hover:shadow-[0_14px_35px_rgba(30,30,40,0.1)]
      "
    >
      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-linear-to-br from-brand-600/15 to-brand-500/10 text-brand-600">
        <Icon size={16} strokeWidth={1.8} className="sm:w-[17px] sm:h-[17px]" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] sm:text-[12px] font-semibold text-[#36383d]">
          {title}
        </p>

        <p className="mt-0.5 sm:mt-1 truncate text-[9px] sm:text-[10px] text-[#92949a]">
          {subtitle}
        </p>
      </div>

      <div className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#d3d5d9] transition-colors group-hover:bg-[#202020]" />
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
          -left-[50px] sm:-left-[68px]
          -top-[46px] sm:-top-[57px]
          z-10
          h-[155px] sm:h-[190px]
          w-[290px] sm:w-[360px]
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
          z-20 mt-2 sm:mt-5
          flex
          h-[62px] sm:h-[76px]
          w-[190px] sm:w-[225px]
          items-center
          justify-center
          rounded-[20px] sm:rounded-[24px]
          bg-white
          shadow-[0_20px_45px_rgba(99,102,241,0.35)]
        "
      >
        <img
          src={worklynxLogo}
          alt="Worklynx"
          className="h-12 sm:h-16 w-auto  object-contain"
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
          -left-[50px] sm:-left-[68px]
          -top-[46px] sm:-top-[57px]
          z-30
          h-[155px] sm:h-[190px]
          w-[290px] sm:w-[360px]
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
  const styles = {
    inventory: {
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-600",
      border: "hover:border-indigo-200",
      glow: "group-hover:shadow-indigo-100/60",
    },
    rms: {
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-600",
      border: "hover:border-emerald-200",
      glow: "group-hover:shadow-emerald-100/60",
    },
    hrms: {
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-600",
      border: "hover:border-blue-200",
      glow: "group-hover:shadow-blue-100/60",
    },
  };

  const style = styles[type];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
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
        y: -4,
      }}
      className={`
        group
        relative
        min-h-[250px]
        overflow-hidden
        rounded-[22px]
        border border-[#E8E9ED]
        bg-white
        p-5
        transition-all duration-300
        ${style.border}
        hover:shadow-[0_18px_45px_rgba(20,20,30,0.07)]
        ${style.glow}
      `}
    >
      {/* Very subtle SaaS accent */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-40
          ${type === "inventory"
            ? "bg-indigo-400"
            : type === "rms"
              ? "bg-emerald-400"
              : "bg-blue-400"
          }
        `}
      />

      {/* Header */}
      <div className="relative flex items-center gap-3">
        <div
          className={`
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-xl
            ${style.iconBg}
            ${style.iconColor}
          `}
        >
          {type === "inventory" && (
            <Package size={17} strokeWidth={1.8} />
          )}

          {type === "rms" && (
            <UtensilsCrossed size={17} strokeWidth={1.8} />
          )}

          {type === "hrms" && (
            <Users size={17} strokeWidth={1.8} />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-[#202124]">
            {title}
          </h3>

        </div>
      </div>

      {/* Description */}
      <p className="relative mt-3 max-w-[285px] text-[10px] leading-[1.7] text-[#73767C]">
        {description}
      </p>

      {/* Preview */}
      <div className="relative mt-5">
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
    <div className="rounded-[15px] border border-indigo-100/80 bg-indigo-50/40 p-3.5">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold text-indigo-950/60">
          Inventory overview
        </span>

        <span className="flex items-center gap-1.5 text-[8px] font-medium text-indigo-600">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          Live
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {products.map(([name, value], index) => (
          <div
            key={name}
            className="rounded-[9px] border border-indigo-100/70 bg-white px-2.5 py-2"
          >
            <p className="text-[7px] font-medium text-[#92959B]">
              {name}
            </p>

            <p className="mt-1 text-[13px] font-semibold tracking-[-0.02em] text-[#292B30]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-indigo-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "78%" }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-indigo-500"
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
    <div className="rounded-[15px] border border-emerald-100/80 bg-emerald-50/40 p-3.5">
      <div className="flex justify-between">
        <div>
          <p className="text-[8px] font-medium text-emerald-950/50">
            Today's revenue
          </p>

          <p className="mt-1 text-[19px] font-semibold tracking-[-0.035em] text-[#292B30]">
            ₹48.2K
          </p>
        </div>

        <div className="text-right">
          <p className="text-[8px] font-medium text-[#92959B]">
            Orders
          </p>

          <p className="mt-1 text-[13px] font-semibold text-[#292B30]">
            184
          </p>
        </div>
      </div>

      <div className="mt-4 flex h-[34px] items-end gap-1.5">
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
            className="
              flex-1
              rounded-t-[3px]
              bg-emerald-200
              transition-colors
              duration-300
              group-hover:bg-emerald-300
            "
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
    <div className="rounded-[15px] border border-blue-100/80 bg-blue-50/40 p-3.5">
      <div className="flex justify-between">
        <div>
          <p className="text-[8px] font-medium text-blue-950/50">
            Employees
          </p>

          <p className="mt-1 text-[19px] font-semibold tracking-[-0.035em] text-[#292B30]">
            128
          </p>
        </div>

        <div className="flex -space-x-1.5">
          {["AK", "RS", "PM", "JD"].map((initials) => (
            <div
              key={initials}
              className="
        flex h-7 w-7
        items-center justify-center
        rounded-full
        border-2 border-white
        bg-blue-100
        text-[8px]
        font-semibold
        text-blue-600
      "
            >
              {initials}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <span className="text-[8px] font-medium text-[#92959B]">
            Attendance
          </span>

          <span className="text-[8px] font-semibold text-blue-600">
            94%
          </span>
        </div>

        <div className="mt-2 h-1 overflow-hidden rounded-full bg-blue-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "94%" }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
}