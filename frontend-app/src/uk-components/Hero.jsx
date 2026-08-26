"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded(true);

      setTimeout(() => {
        setExpanded(false);
      }, 1700);
    }, 7600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f6f8]">
      {/* ------------------------------------------------
          Background
      ------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/80 blur-[120px]" />

        <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      {/* ------------------------------------------------
          Hero Content
      ------------------------------------------------ */}

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col items-center px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pt-16">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: expanded ? 0 : 1,
            y: expanded ? -20 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >

        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: expanded ? 0 : 1,
            y: expanded ? -35 : 0,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 max-w-[900px] text-center"
        >
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
        </motion.div>

        {/* ------------------------------------------------
            Ecosystem Visual
        ------------------------------------------------ */}

        <motion.div
          animate={{
            opacity: expanded ? 0 : 1,
            y: expanded ? 30 : 0,
            scale: expanded ? 0.88 : 1,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-20 w-full max-w-[1150px]"
        >
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

            {/* Center */}

            <Worklynx
              onClick={() => setExpanded(true)}
            />

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

          <motion.div
            animate={{
              opacity: expanded ? 0 : 1,
              y: expanded ? 45 : 0,
            }}
            transition={{
              duration: 0.5,
              delay: expanded ? 0 : 0.05,
            }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                {...product}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ------------------------------------------------
          Expanded Worklynx
      ------------------------------------------------ */}

      <motion.div
        initial={false}
        animate={{
          opacity: expanded ? 1 : 0,
          scale: expanded ? 1 : 0.65,
        }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center"
      >
        <motion.div
          animate={{
            width: expanded
              ? "min(80vw, 700px)"
              : 210,
            height: expanded
              ? "min(24vw, 170px)"
              : 68,
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-center rounded-[45px] bg-[#202020] px-8 shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
        >
          <WorklynxMark large />

          <span className="ml-4 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
            Worklynx
          </span>
        </motion.div>
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