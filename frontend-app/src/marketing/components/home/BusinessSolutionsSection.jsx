import { Link } from "react-router-dom";
import {
  Users,
  Package,
  Utensils,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    title: "Inventory",
    description:
      "Track stock, manage warehouses, and keep every movement under control.",
    image: "/inventory.png",
    href: "/inventory-management",
  },
  {
    title: "RMS",
    description:
      "Manage orders, tables, billing, and restaurant operations from one place.",
    image: "/rms.png",
    href: "/restaurant-management",
  },
  {
    title: "HRMS",
    description:
      "Manage employees, attendance, payroll, and everyday HR workflows.",
    image: "/hrms.png",
    href: "/hrms",
  },
];

export default function BusinessSolutionsSection() {
  const [activeCard, setActiveCard] = useState("hrms");

  const getFlex = (card) => {
    if (activeCard === card) return 2;
    return 1;
  };

  return (
    <>
      <section className="py-20 bg-white text-slate-800 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}


          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              One Platform.{" "}
              <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                Multiple Business Solutions
              </span>{" "}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Start with our flagship HRMS platform, then seamlessly add
              operational modules as your business scales.
            </p>
          </div>

          {/* Cards */}
          <div className="hidden lg:flex gap-6 items-stretch">

            {/* ================= HRMS ================= */}
            <motion.div
              layout
              animate={{ flex: getFlex("hrms") }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActiveCard("hrms")}
              className="min-w-0 rounded-2xl bg-brand-50/30 border border-brand-300 p-8 shadow-sm hover:border-brand-500 overflow-hidden cursor-pointer"
            >
              <div className="h-full flex flex-col">

                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-semibold text-brand-700 bg-brand-100 px-2.5 py-1 rounded-full">
                    Primary HR Solution
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  HRMS & Payroll Suite
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Manage employees, attendance, payroll, leave, hiring and
                  performance from one platform.
                </p>

                <div className="rounded-xl bg-white border border-brand-200 p-4">
                  <div className="flex items-center justify-between text-xs font-semibold pb-2 border-b border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-600" />
                      Worklynx HR
                    </span>

                    <span className="text-emerald-600 text-[11px]">
                      99.8% Sync
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">
                        Monthly Payroll
                      </span>
                      <span className="text-sm font-bold">
                        £48,250
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">
                        Clock-ins
                      </span>
                      <span className="text-sm font-bold text-brand-700">
                        97.9%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-5">
                  <Feature color="text-brand-600">
                    GPS Mobile Clock-In & Biometric Attendance
                  </Feature>

                  <Feature color="text-brand-600">
                    Automated Payroll & PAYE Compliance
                  </Feature>

                  <Feature color="text-brand-600">
                    Statutory Leave & Accrual Rules
                  </Feature>
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-brand-200/60">
                  <div>
                    <span className="text-[11px] text-slate-500 block">
                      Core Product
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Flagship HR Suite
                    </span>
                  </div>

                  <ExploreButton to="/hrms">
                    Explore HRMS
                  </ExploreButton>
                </div>
              </div>
            </motion.div>

            {/* ================= INVENTORY ================= */}
            <motion.div
              layout
              animate={{ flex: getFlex("inventory") }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActiveCard("inventory")}
              className="min-w-0 rounded-2xl bg-slate-50 border border-slate-200 p-5 shadow-sm hover:border-amber-300 overflow-hidden cursor-pointer"
            >
              <div className="h-full flex flex-col">

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                    <Package className="w-5 h-5" />
                  </div>

                  <span className="text-[9px] font-semibold text-amber-800 bg-amber-100 px-2 py-1 rounded-full">
                    Add-on
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-800">
                  Inventory Management
                </h3>

                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Smart stock and warehouse control.
                </p>

                <div className="h-40 rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                    alt="Inventory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-5">
                  <Feature color="text-amber-600">
                    Multi-Warehouse & Batch Tracking
                  </Feature>
                </div>

                <Link
                  to="/inventory-management"
                  className="mt-auto pt-6"
                >
                  <ExploreButton>
                    Explore Inventory
                  </ExploreButton>
                </Link>
              </div>
            </motion.div>

            {/* ================= RESTAURANT ================= */}
            <motion.div
              layout
              animate={{ flex: getFlex("restaurant") }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActiveCard("restaurant")}
              className="min-w-0 rounded-2xl bg-slate-50 border border-slate-200 p-5 shadow-sm hover:border-rose-300 overflow-hidden cursor-pointer"
            >
              <div className="h-full flex flex-col">

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700">
                    <Utensils className="w-5 h-5" />
                  </div>

                  <span className="text-[9px] font-semibold text-rose-800 bg-rose-100 px-2 py-1 rounded-full">
                    Add-on
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-800">
                  Restaurant Management
                </h3>

                <p className="text-xs text-slate-500 mt-1 mb-4">
                  POS, QR ordering and kitchen control.
                </p>

                <div className="h-40 rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5">
                  <Feature color="text-rose-600">
                    POS Billing & QR Ordering
                  </Feature>
                </div>

                <Link
                  to="/restaurant-management"
                  className="mt-auto pt-6"
                >
                  <ExploreButton>
                    Explore Restaurant
                  </ExploreButton>
                </Link>
              </div>
            </motion.div>

          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-5">
            <MobileCard
              icon={<Users className="w-6 h-6" />}
              title="HRMS & Payroll Suite"
              description="Manage employees, payroll, attendance and performance."
              color="brand"
              to="/hrms"
            />

            <MobileCard
              icon={<Package className="w-5 h-5" />}
              title="Inventory Management"
              description="Smart stock and warehouse control."
              color="amber"
              to="/inventory-management"
            />

            <MobileCard
              icon={<Utensils className="w-5 h-5" />}
              title="Restaurant Management"
              description="POS, QR ordering and kitchen control."
              color="rose"
              to="/restaurant-management"
            />
          </div>

        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Powering{" "}
              <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                Every Part
              </span>{" "}
              of Your Business
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Integrated solutions that work together seamlessly to streamline
              operations, empower teams, and drive growth.
            </p>
          </div>

          {/* Product Cards */}
          <div className="group/products flex h-[500px] w-full gap-4 md:gap-5">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="
                group/card
                relative
                min-w-0
                flex-1
                overflow-hidden
                rounded-[26px]
                shadow-sm
                transition-[flex,box-shadow]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:flex-[1.18]
                hover:shadow-xl
              "
              >
                <Link
                  to={product.href}
                  className="relative block h-full w-full"
                >
                  {/* Background */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover/card:scale-105
                  "
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover/card:bg-black/25" />

                  {/* Bottom Gradient */}
                  <div
                    className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[68%]
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/75
                    to-transparent
                  "
                  />

                  {/* Center Content */}
                  <div className="absolute inset-x-0 bottom-28 px-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="
                        text-3xl
                        font-semibold
                        tracking-tight
                        text-white
                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
                        sm:text-4xl
                      "
                      >
                        {product.title}
                      </h3>

                      <p
                        className="
                        mt-2
                        max-w-[300px]
                        text-sm
                        leading-5
                        text-white/80
                        drop-shadow-md
                        transition-colors
                        duration-300
                        group-hover/card:text-white
                      "
                      >
                        {product.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Explore */}
                  <div
                    className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    items-end
                    justify-between
                    px-6
                    pb-6
                    pt-20
                  "
                  >
                    <div>
                      <span className="text-sm font-medium text-white">
                        Explore
                      </span>

                      <span
                        className="
                        mt-2
                        block
                        h-px
                        w-12
                        bg-white/70
                        transition-all
                        duration-500
                        group-hover/card:w-20
                      "
                      />
                    </div>

                    <span
                      className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-white/10
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover/card:rotate-45
                      group-hover/card:bg-white/20
                    "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Border */}
                  <div
                    className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[26px]
                    border
                    border-white/20
                    transition-colors
                    duration-500
                    group-hover/card:border-white/40
                  "
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


/* ================= FEATURE ================= */

function Feature({ children, color }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
      <CheckCircle2 className={`w-3.5 h-3.5 ${color} shrink-0`} />
      <span>{children}</span>
    </div>
  );
}


/* ================= BUTTON ================= */

function ExploreButton({ children }) {
  return (
    <div className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors">
      {children}
      <ArrowRight className="w-3.5 h-3.5" />
    </div>
  );
}


/* ================= MOBILE CARD ================= */

function MobileCard({
  icon,
  title,
  description,
  color,
  to,
}) {
  const colors = {
    brand: "bg-brand-100 text-brand-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
  };

  return (

    <>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}
        >
          {icon}
        </div>

        <h3 className="text-lg font-semibold mt-4">
          {title}
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          {description}
        </p>

        <Link to={to} className="block mt-4">
          <ExploreButton>
            Explore
          </ExploreButton>
        </Link>
      </div>

    </>

  );
}