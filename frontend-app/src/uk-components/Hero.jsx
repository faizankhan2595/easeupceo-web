"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    subtitle: "Stock & sales products",
    Icon: Package,
    position: "left",
    targetId: "inventory",
    taglines: [
      "Stock control that never runs dry.",
      "Know what you have, always.",
      "From shelf to warehouse, in real time.",
    ],
  },
  {
    title: "RMS",
    subtitle: "Restaurant operations",
    Icon: UtensilsCrossed,
    position: "left",
    targetId: "rms",
    taglines: [
      "Kitchen to till, fully connected.",
      "Run service without the chaos.",
      "Every order, every table, under control.",
    ],
  },
  {
    title: "HRMS",
    subtitle: "People & payroll",
    Icon: Users,
    position: "right",
    targetId: "hrms",
    taglines: [
      "Payroll, attendance and people — sorted.",
      "HR that runs itself.",
      "Your workforce, fully in sync.",
    ],
  },
  {
    title: "Analytics",
    subtitle: "Business insights",
    Icon: BarChart3,
    position: "right",
    targetId: "products",
    taglines: [
      "Numbers that actually tell you something.",
      "See your business, not just your data.",
      "Insights that drive the next decision.",
    ],
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



/* ========================================================
   CONNECTOR GEOMETRY

   The desktop connector network has to terminate exactly on DOM elements
   (the four module cards and the Worklynx badge) whose sizes come from
   content, not from fixed values. Hard-coding SVG coordinates against an
   assumed 1150px layout is what made the old paths drift, so instead we
   measure the real elements and build the paths from those numbers.
======================================================== */

// Layout position relative to `ancestor`, walking the offsetParent chain.
// Deliberately uses offset* rather than getBoundingClientRect: offsets ignore
// CSS transforms, so measurements stay correct while framer-motion is still
// animating the cards and badge into place.
function offsetWithin(el, ancestor) {
  let x = 0;
  let y = 0;
  let node = el;

  while (node && node !== ancestor) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent;
  }

  return { x, y };
}

// Vertical bands the connectors share with the layout below the hub.
const HUB_ROW_BOTTOM = 210; // matches the ecosystem row's lg:h-[210px]
const PRODUCT_ROW_TOP = 258; // HUB_ROW_BOTTOM + the product grid's mt-12
const PRODUCT_GRID_GAP = 20; // the product grid's gap-5
const BRACKET_GAP = 30; // breathing room between a card edge and its bracket
const BRACKET_RADIUS = 15;
const HUB_CLEARANCE = 4;

// Three passes over the same paths produce the etched/embossed edge.
const ETCH_LAYERS = [
  {
    key: "shadow",
    dy: 0,
    stroke: "#d5d6db",
    strokeWidth: 1.2,
    opacity: 0.18,
    filter: "url(#etched-shadow)",
  },
  {
    key: "base",
    dy: -1,
    stroke: "#dfe0e4",
    strokeWidth: 0.75,
    opacity: 1,
  },
  {
    key: "highlight",
    dy: -2,
    stroke: "url(#etched-highlight)",
    strokeWidth: 0.4,
    opacity: 0.3,
  },
];

function buildConnectorPaths(geo) {
  const { w, left, right, hub } = geo;
  const r = BRACKET_RADIUS;
  const cx = w / 2;

  // Product cards: three equal columns across the full width.
  const productW = (w - PRODUCT_GRID_GAP * 2) / 3;
  const px1 = productW / 2;
  const px3 = w - px1;

  // A card pair reduces to a rounded bracket: two stubs leaving the card edges
  // at their vertical centres, joined by a spine, with a trunk to the hub.
  const bracket = (side) => {
    const outward = side.dir;
    const edge = side.edge;
    const spine = edge + BRACKET_GAP * outward;
    const elbow = spine - r * outward;
    const [m1, m2] = side.mids;

    return [
      `M ${edge} ${m1} H ${elbow} Q ${spine} ${m1} ${spine} ${m1 + r}` +
        ` V ${m2 - r} Q ${spine} ${m2} ${elbow} ${m2} H ${edge}`,
      `M ${spine} ${hub.midY} H ${side.hubEdge}`,
    ];
  };

  return [
    ...bracket({ dir: 1, edge: left.edge, mids: left.mids, hubEdge: hub.left }),
    ...bracket({ dir: -1, edge: right.edge, mids: right.mids, hubEdge: hub.right }),
    `M ${cx} ${hub.bottom + HUB_CLEARANCE} V ${HUB_ROW_BOTTOM}`,
    `M ${px1} ${HUB_ROW_BOTTOM} H ${px3}`,
    `M ${px1} ${HUB_ROW_BOTTOM} V ${PRODUCT_ROW_TOP}`,
    `M ${cx} ${HUB_ROW_BOTTOM} V ${PRODUCT_ROW_TOP}`,
    `M ${px3} ${HUB_ROW_BOTTOM} V ${PRODUCT_ROW_TOP}`,
  ];
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [connectors, setConnectors] = useState(null);

  const diagramRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const hubRef = useRef(null);

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

  // Re-measure the connector anchors whenever the diagram or its cards resize.
  // Below lg the columns are display:none (offsetWidth 0) — we keep the last
  // good geometry rather than writing zeros, since the SVG is hidden there too.
  useEffect(() => {
    const diagram = diagramRef.current;
    if (!diagram) return undefined;

    const measure = () => {
      const leftCol = leftColRef.current;
      const rightCol = rightColRef.current;
      const hub = hubRef.current;
      if (!leftCol || !rightCol || !hub) return;

      const w = diagram.offsetWidth;
      if (!w || !leftCol.offsetWidth || !rightCol.offsetWidth) return;

      const midsOf = (col) => {
        const base = offsetWithin(col, diagram).y;
        return Array.from(col.children).map(
          (card) => base + card.offsetTop + card.offsetHeight / 2,
        );
      };

      const leftMids = midsOf(leftCol);
      const rightMids = midsOf(rightCol);
      if (leftMids.length < 2 || rightMids.length < 2) return;

      const hubPos = offsetWithin(hub, diagram);

      const geo = {
        w,
        left: {
          edge: offsetWithin(leftCol, diagram).x + leftCol.offsetWidth,
          mids: leftMids,
        },
        right: { edge: offsetWithin(rightCol, diagram).x, mids: rightMids },
        hub: {
          left: hubPos.x,
          right: hubPos.x + hub.offsetWidth,
          midY: hubPos.y + hub.offsetHeight / 2,
          bottom: hubPos.y + hub.offsetHeight,
        },
      };

      setConnectors({ w, paths: buildConnectorPaths(geo) });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(diagram);
    if (leftColRef.current) observer.observe(leftColRef.current);
    if (rightColRef.current) observer.observe(rightColRef.current);
    if (hubRef.current) observer.observe(hubRef.current);

    return () => observer.disconnect();
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
          <h1
            className="
              text-gradient-display
              text-[34px]
              font-semibold
              leading-[1.12]
              tracking-[-0.04em]
              sm:text-[44px]
              sm:tracking-[-0.045em]
              md:text-[50px]
              lg:text-[52px]
              xl:text-[58px]
            "
          >
            One Business.{" "}
            {/* Inherits the h1's single continuous gradient ramp rather than
                carrying one of its own. Must stay a plain inline box: giving it
                position/transform/z-index (or inline-block) makes WebKit paint it
                outside the h1's background-clip:text layer, so the glyphs render
                with transparent fill and nothing behind them — invisible on iOS
                Safari. whitespace-nowrap is safe; it creates no paint layer. */}
            <span className="whitespace-nowrap">One Platform.</span>
            <br />
            Every operation.
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]
              text-[16px]
              font-medium
              leading-[1.7]
              tracking-normal
              text-black
              hyphens-none
              sm:text-[18px]
              md:text-[19px]
              lg:max-w-[900px]
              lg:text-[19px]
              lg:leading-9
            "
          >
            {/* Inverted pyramid on lg+: each span becomes its own centered line
                (88 / 71 / 52 chars, so the taper steps ~17 chars each time).
                Below lg the spans stay inline and the text wraps naturally. */}
            <span className="lg:block">
              Worklynx is a powerful, all-in-one ERP platform that brings HR,
              inventory, warehouse and{" "}
            </span>
            <span className="lg:block">
              restaurant management together—empowering you with complete
              visibility,{" "}
            </span>
            <span className="lg:block">
              smarter control and the tools to grow your business.
            </span>
          </p>

          {/* CTA Buttons */}


        </motion.div>

        {/* ------------------------------------------------
            Ecosystem Visual with Worklynx Loader Transition
        ------------------------------------------------ */}

        <div ref={diagramRef} className="relative mt-4 lg:mt-16 w-full max-w-[1150px]">
          {/* Desktop connection lines */}
          {/* ========================================================
    DESKTOP CONNECTION SYSTEM
    Rounded etched connector network
======================================================== */}

          {connectors && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewBox={`0 0 ${connectors.w} 470`}
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
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* The etched look is the same network drawn three times, nudged
                  up a pixel per pass: recessed shadow, base stroke, highlight. */}
              {ETCH_LAYERS.map((layer) => (
                <g
                  key={layer.key}
                  transform={`translate(0 ${layer.dy})`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke={layer.stroke}
                  strokeWidth={layer.strokeWidth}
                  opacity={layer.opacity}
                  filter={layer.filter}
                >
                  {connectors.paths.map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </g>
              ))}
            </motion.svg>
          )}

          {/* Main ecosystem */}

          <div className="relative flex flex-col items-center lg:h-[210px] lg:justify-center">
            {/* Left modules (Inventory, RMS) */}

            <div className="absolute inset-y-0 left-0 hidden items-center lg:flex">
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
                ref={leftColRef}
                className="flex flex-col gap-4"
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
            </div>

            {/* Right modules (HRMS, Analytics) */}

            <div className="absolute inset-y-0 right-0 hidden items-center lg:flex">
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
                ref={rightColRef}
                className="flex flex-col gap-4"
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
            </div>

            {/* 
              SINGLE WORKLYNX LOADER BADGE:
              Starts BIG in screen center as intro loader, then seamlessly
              scales and glides into ecosystem hub position in ONE smooth animation!
            */}

            {/* lg:-mt-5 on this wrapper cancels the badge's own sm:mt-5 for
                centring purposes. That margin has to stay — it positions the
                badge inside its Saturn-ring frame — but it otherwise sits
                inside the box lg:justify-center centres, which would leave the
                visible badge 10px below the module columns' midline. */}
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
              className="relative z-30 my-4 sm:my-6 lg:my-0 lg:-mt-5 flex justify-center"
            >
              <Worklynx badgeRef={hubRef} />
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
              className="mt-6 grid w-full max-w-[600px] grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-8 sm:gap-3.5 lg:hidden"
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

function scrollToSection(targetId) {
  if (typeof document === "undefined") return;

  const target = document.getElementById(targetId);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function Module({
  title,
  subtitle,
  Icon,
  index,
  direction,
  targetId,
  taglines = [],
}) {
  const [open, setOpen] = useState(false);

  // Left-column cards float their bubble out to the left, right-column cards
  // mirror it, so the callout always hangs off the outer edge of the diagram.
  const fromLeft = direction === "left";

  return (
    <motion.div
      onClick={() => scrollToSection(targetId)}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          scrollToSection(targetId);
        }
      }}
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
        relative
        z-10
        cursor-pointer
        hover:z-30
        flex
        min-h-[76px] sm:min-h-[82px]
        w-full min-w-0 lg:min-w-[235px] lg:w-auto
        items-center
        gap-2.5 sm:gap-3
        rounded-xl sm:rounded-2xl
        border
        border-black/[0.06]
        bg-white
        px-3.5 py-3 sm:px-4 sm:py-3.5
        shadow-[0_8px_30px_rgba(30,30,40,0.06)]
        transition-[box-shadow,border-color]
        hover:border-brand-500/30
        hover:shadow-[0_14px_35px_rgba(79,70,229,0.14)]
      "
    >
      <div
        className="
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-xl
          bg-linear-to-br from-brand-600/20 to-brand-500/10
          text-brand-600
          transition-colors duration-300
          group-hover:from-brand-600 group-hover:to-brand-500
          group-hover:text-white
          sm:h-12 sm:w-12
        "
      >
        <Icon size={21} strokeWidth={1.9} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[17px] font-bold tracking-[-0.015em] text-[#1c1e22] sm:text-[18px]">
          {title}
        </p>

        <p className="mt-1 text-[13px] font-medium leading-snug text-[#6b6e76] sm:text-[13.5px]">
          {subtitle}
        </p>
      </div>

      <div className="ml-auto h-2 w-2 shrink-0 rounded-full bg-[#d3d5d9] transition-colors group-hover:bg-brand-600" />

      {/* Hover taglines — gradient chat bubble, popped up to the outer top corner */}

      <AnimatePresence>
        {open && taglines.length > 0 && (
          <motion.div
            key="taglines"
            initial={{
              opacity: 0,
              scale: 0.7,
              x: fromLeft ? 16 : -16,
              y: 16,
              rotate: fromLeft ? 6 : -6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 10,
              transition: { duration: 0.14 },
            }}
            transition={{
              type: "spring",
              stiffness: 460,
              damping: 20,
              mass: 0.7,
            }}
            style={{
              transformOrigin: fromLeft ? "bottom right" : "bottom left",
            }}
            className={`
              pointer-events-none
              absolute
              bottom-[calc(100%+10px)]
              z-50
              flex
              flex-col
              gap-1
              ${fromLeft
                ? "left-0 items-start lg:-left-10 min-[1400px]:-left-20"
                : "right-0 items-end lg:-right-10 min-[1400px]:-right-20"
              }
            `}
          >
            {/* Bubble */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`
                w-[230px]
                rounded-2xl
                border border-white/20
                bg-gradient-to-br from-brand-600 via-brand-500 to-brand-600
                px-3.5 py-3
                shadow-[0_18px_40px_-10px_rgba(79,70,229,0.65)]
                ${fromLeft ? "rounded-br-md" : "rounded-bl-md"}
              `}
            >
              <ul className="space-y-2">
                {taglines.map((tagline, lineIndex) => (
                  <motion.li
                    key={tagline}
                    initial={{ opacity: 0, x: fromLeft ? -8 : 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + lineIndex * 0.07,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-2 text-[14px] font-semibold leading-snug text-white"
                  >
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-white/70" />
                    <span>{tagline}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Messaging-style connector trailing back down to the card */}
            <div
              className={`
                flex flex-col gap-[3px]
                ${fromLeft
                  ? "items-start pl-6 lg:pl-14 min-[1400px]:pl-24"
                  : "items-end pr-6 lg:pr-14 min-[1400px]:pr-24"
                }
              `}
            >
              {[7, 4].map((size, dotIndex) => (
                <motion.span
                  key={size}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.04 + dotIndex * 0.06,
                    type: "spring",
                    stiffness: 600,
                    damping: 18,
                  }}
                  style={{ height: size, width: size }}
                  className="rounded-full bg-gradient-to-br from-brand-600 to-brand-500 shadow-[0_4px_10px_rgba(79,70,229,0.35)]"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ========================================================
   WORKLYNX
======================================================== */
function Worklynx({ onClick, badgeRef }) {
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
        ref={badgeRef}
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
        min-h-[240px] sm:min-h-[250px]
        overflow-hidden
        rounded-[22px]
        border border-[#E8E9ED]
        bg-white
        p-5 sm:p-6
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
            flex h-11 w-11 shrink-0 items-center justify-center
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
          <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#202124] sm:text-[16px]">
            {title}
          </h3>

        </div>
      </div>

      {/* Description */}
      <p className="relative mt-3 text-[13px] leading-[1.7] text-[#73767C] sm:max-w-[285px]">
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
        <span className="text-[11px] font-semibold text-indigo-950/60">
          Inventory overview
        </span>

        <span className="flex items-center gap-1.5 text-[10px] font-medium text-indigo-600">
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
            <p className="text-[9px] font-medium text-[#92959B]">
              {name}
            </p>

            <p className="mt-1 text-[14px] font-semibold tracking-[-0.02em] text-[#292B30]">
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
          <p className="text-[10px] font-medium text-emerald-950/50">
            Today's revenue
          </p>

          <p className="mt-1 text-[21px] font-semibold tracking-[-0.035em] text-[#292B30]">
            ₹48.2K
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] font-medium text-[#92959B]">
            Orders
          </p>

          <p className="mt-1 text-[14px] font-semibold text-[#292B30]">
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
          <p className="text-[10px] font-medium text-blue-950/50">
            Employees
          </p>

          <p className="mt-1 text-[21px] font-semibold tracking-[-0.035em] text-[#292B30]">
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
        text-[9px]
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
          <span className="text-[10px] font-medium text-[#92959B]">
            Attendance
          </span>

          <span className="text-[10px] font-semibold text-blue-600">
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