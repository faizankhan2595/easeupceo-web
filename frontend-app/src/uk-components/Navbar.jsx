"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ChevronDown, Globe, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import worklynxLogo from "@/assets/worklynx-light-nav.png";
import { Link, useLocation } from "react-router-dom";
import { useCountryContext } from "@/context/CountryContext";

const navLinks = [

  // { href: "#pricing", label: "Pricing" }, 
  { href: "#contact-sales", label: "Contact Sales" },
];

const COUNTRIES = [
  { key: "india", flag: "🇮🇳", label: "India", short: "IN" },
  { key: "uk", flag: "🇬🇧", label: "United Kingdom", short: "UK" },
];

/**
 * CountryDropdown — fully self-contained.
 * Reads + writes CountryContext directly. No props needed.
 */
function CountryDropdown({ align = "right" }) {
  const { country, setCountry } = useCountryContext();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const active = COUNTRIES.find((c) => c.key === country) || COUNTRIES[0];

  const handleSwitch = (key) => {
    try {
      sessionStorage.setItem("geo_country", JSON.stringify({ value: key, ts: Date.now() }));
    } catch (_) { }
    setCountry(key);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
      >
        {/* <Globe className="w-4 h-4 shrink-0" /> */}
        <span className="text-base leading-none">{active.flag}</span>
        <span className="hidden sm:inline">{active.short}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute top-full mt-1.5 w-48 bg-white rounded-xl shadow-lg border border-slate-200/80 overflow-hidden z-50 ${align === "right" ? "right-0" : "left-0"
              }`}
          >
            {COUNTRIES.map((c) => (
              <button
                key={c.key}
                onClick={() => handleSwitch(c.key)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${country === c.key
                  ? "bg-slate-50 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <span className="text-base">{c.flag}</span>
                <span>{c.label}</span>
                {country === c.key && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-600" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** UK Navbar — self-contained with 3-Product Megamenu & Region Switcher. */
export default function Navbar({ onContactClick }) {
  const { country, setCountry } = useCountryContext();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const productsMenuRef = useRef(null);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  const handleMobileSwitch = (key) => {
    try {
      sessionStorage.setItem("geo_country", JSON.stringify({ value: key, ts: Date.now() }));
    } catch (_) { }
    setCountry(key);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productsMenuRef.current && !productsMenuRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const productSuites = [
    {
      id: "hrms",
      title: "HRMS",
      desc: "Attendance, payroll, leave, performance and employee self-service.",
      image: "/hrms2.png",
      href: "/hrms",
    },
    {
      id: "inventory",
      title: "Inventory Management",
      desc: "Multi-warehouse stock tracking, purchase orders and VAT invoices.",
      image: "/inventory1.png",
      href: "/inventory-management",
    },
    {
      id: "restaurant",
      title: "Restaurant Management",
      desc: "POS billing, table QR ordering and Kitchen Display Systems.",
      image: "/rms.png",
      href: "/restaurant-management",
    },
  ];

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b bg-[#f8faff]/95 backdrop-blur-md transition-all duration-300
        ${(scrolled || open || productsOpen)
          ? "border-brand-100 shadow-[0_4px_20px_-6px_rgba(15,23,42,0.10)]"
          : "border-brand-100/70 shadow-[0_1px_12px_-6px_rgba(15,23,42,0.08)]"
        }
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-3 pb-6 lg:px-8">
        <Link
          to="/"
          className="relative flex shrink-0 items-center leading-none"
        >
          <img
            src={worklynxLogo}
            alt="Worklynx UK"
            className="h-6 w-auto sm:h-8 lg:h-9"
          />

          <span
            className="
              absolute
              left-0
              top-full
              mt-1
              flex
              items-center
              gap-1.5
              whitespace-nowrap
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-slate-800
              sm:gap-2
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            <span>Simplify</span>
            <span className="h-[3px] w-[3px] rounded-full bg-brand-500" />
            <span>Automate</span>
            <span className="h-[3px] w-[3px] rounded-full bg-brand-500" />
            <span>Accelerate</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {/* Products Megamenu Trigger */}
          <div
            ref={productsMenuRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen((prev) => !prev)}
              className={`flex items-center gap-1 text-md font-medium transition-colors py-1 ${productsOpen ? "text-brand-600 font-semibold" : "text-slate-700 hover:text-brand-600"
                }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180 text-brand-600" : "text-slate-400"}`}
              />
            </button>

            {/* Products Megamenu Popup */}
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full -left-12 mt-2 w-[810px] rounded-2xl bg-white p-6 shadow-2xl border border-slate-200/90 z-50 overflow-hidden"
                >
                <div className="border-b border-slate-100 pb-4 mb-4">
  <h4 className="text-sm font-semibold text-slate-900">
    Worklynx Product Suites
  </h4>
  <p className="mt-1 text-xs text-slate-400">
    One platform. Three powerful systems.
  </p>
</div>

                 <div className="grid grid-cols-3 gap-4">
  {productSuites.map((suite) => (
   <a
  key={suite.id}
  href={suite.href}
  onClick={() => setProductsOpen(false)}
  className="group rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
>
  <div className="relative h-32 overflow-hidden rounded-xl bg-slate-50">
    <img
      src={suite.image}
      alt={suite.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  <div className="px-1 pt-4">
  

    <h5 className="mt-3 text-lg font-bold leading-tight tracking-tight text-slate-900 group-hover:text-brand-600">
      {suite.title}
    </h5>

    <div className="mt-4 flex items-center justify-between">
      <span className="text-xs font-medium text-slate-400">
        View product
      </span>

      <ChevronRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
    </div>
  </div>
</a>
  ))}
</div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 -mx-6 -mb-6 px-6 py-3.5 text-xs">
                    <span className="text-slate-600 font-medium">Need all 3 suites for your UK business?</span>
                    <a
                      href="#pricing"
                      onClick={() => setProductsOpen(false)}
                      className="font-bold text-brand-600 hover:underline"
                    >
                      View All-in-One UK Suite Pricing &rarr;
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => {
            const isContact = link.href === "#contact-sales";
            const targetHref = isHomePage ? link.href : `/${link.href}`;
            return (
              <a
                key={link.href}
                href={targetHref}
                onClick={(e) => {
                  if (isContact && onContactClick) {
                    e.preventDefault();
                    onContactClick();
                  }
                }}
                className="relative text-md font-medium text-slate-700 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <CountryDropdown align="right" />
          <a
            href="https://app.worklynx.io"
            className="text-md font-semibold text-slate-700 transition-colors hover:text-brand-600"
          >
            Sign In
          </a>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg hover:shadow-brand-600/30"
          >
            Start 7-Day Free Trial
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md p-2 text-slate-700 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
      
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-brand-100/70 bg-[#f8faff] lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full py-1 text-sm font-bold text-slate-900"
                >
                  <span className="flex items-center gap-2">
                    <span>Products</span>
                    <span className="text-[10px] bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-bold">3 Suites</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180 text-brand-600" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="mt-3 grid gap-3 overflow-hidden sm:grid-cols-2"
                  >
                    {productSuites.map((suite) => (
                      <a
                        key={suite.id}
                        href={suite.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-2.5 transition-colors hover:border-brand-200 hover:bg-slate-50"
                      >
                        <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                          <img
                            src={suite.image}
                            alt={suite.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate text-sm font-bold text-slate-900">
                              {suite.title}
                            </span>
                            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                          </div>
                          <p className="mt-1 line-clamp-2 text-xs leading-snug text-slate-500">
                            {suite.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <hr className="border-slate-200" />

              {navLinks.map((link) => {
                const isContact = link.href === "#contact-sales";
                const targetHref = isHomePage ? link.href : `/${link.href}`;
                return (
                  <a
                    key={link.href}
                    href={targetHref}
                    onClick={(e) => {
                      setOpen(false);
                      if (isContact && onContactClick) {
                        e.preventDefault();
                        onContactClick();
                      }
                    }}
                    className="text-sm font-medium text-slate-600 hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                );
              })}
              <hr className="border-slate-200" />
              {/* Mobile region switcher */}
              <div>
                <p className="pb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Region</p>
                {COUNTRIES.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => handleMobileSwitch(c.key)}
                    className={`w-full flex items-center gap-2.5 px-2 py-2.5 rounded-xl text-sm transition-colors ${country === c.key
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    <span className="text-base">{c.flag}</span>
                    <span>{c.label}</span>
                    {country === c.key && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-600" />
                    )}
                  </button>
                ))}
              </div>
              <a href="https://app.worklynx.io" onClick={() => setOpen(false)} className="text-sm font-semibold text-slate-700">
                Sign in
              </a>
              <a
                href="/signup"
                onClick={() => setOpen(false)}
                className="rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md"
              >
                Start 7-Day Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
