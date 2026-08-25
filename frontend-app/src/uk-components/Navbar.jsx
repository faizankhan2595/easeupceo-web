"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ChevronDown, Globe, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import worklynxLogo from "@/assets/worklynx-light.png";
import { Link, useLocation } from "react-router-dom";
import { useCountryContext } from "@/context/CountryContext";

const navLinks = [

  { href: "#pricing", label: "Pricing" },
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
      title: "⭐ HRMS & HMRC Payroll",
      badge: "⭐ Flagship Platform",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200 font-bold",
      iconBg: "from-brand-500 to-indigo-600",
      desc: "Complete HR platform — attendance, payroll, leave, performance & employee self-service.",
      highlights: ["GPS & Mobile Clock-In", "HMRC PAYE RTI Payroll", "Statutory Leave & OKRs"],
      href: "/hrms",
      featured: true,
    },
    {
      id: "inventory",
      title: "Inventory Management",
      badge: "Expansion Module",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      iconBg: "from-amber-500 to-orange-600",
      desc: "Multi-warehouse stock tracking, automated purchase orders & VAT invoices.",
      highlights: ["Multi-Warehouse Control", "Supplier & PO Workflow", "Low Stock Alerts"],
      href: "/inventory-management",
    },
    {
      id: "restaurant",
      title: "Restaurant Management",
      badge: "Expansion Module",
      badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
      iconBg: "from-rose-500 to-red-600",
      desc: "High-speed POS billing, table QR ordering & Kitchen Display Systems (KDS).",
      highlights: ["Table QR & Live Orders", "Kitchen KDS Sync", "POS Billing & Menu"],
      href: "/restaurant-management",
    },
  ];

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${(scrolled || open || productsOpen)
          ? "border-b border-slate-200/70 bg-white/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link to="/" className="flex items-center shrink-0">
          <img src={worklynxLogo} alt="Worklynx UK" className="h-13 w-auto" />
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
                  className="absolute top-full -left-12 mt-2 w-[780px] rounded-2xl bg-white p-6 shadow-2xl border border-slate-200/90 z-50 overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Worklynx UK Product Suites</h4>
                    </div>

                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {productSuites.map((suite) => (
                      <a
                        key={suite.id}
                        href={suite.href}
                        onClick={() => setProductsOpen(false)}
                        className="group relative flex flex-col justify-between rounded-xl p-4 transition-all duration-200 hover:bg-slate-50 border border-transparent hover:border-slate-200/80"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-md border ${suite.badgeBg}`}>
                              {suite.badge}
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                            {suite.title}
                          </h5>
                          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                            {suite.desc}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100">
                          <ul className="space-y-1">
                            {suite.highlights.map((item, i) => (
                              <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 flex items-center text-xs font-semibold text-brand-600 group-hover:translate-x-0.5 transition-transform">
                            <span>Explore Suite</span>
                            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
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
            Start 14-Day Free Trial
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
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
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

                {mobileProductsOpen && (
                  <div className="mt-2 space-y-2 pl-2 border-l-2 border-brand-100">
                    {productSuites.map((suite) => (
                      <a
                        key={suite.id}
                        href={suite.href}
                        onClick={() => setOpen(false)}
                        className="block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800">{suite.title}</span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${suite.badgeBg}`}>{suite.badge}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{suite.desc}</p>
                      </a>
                    ))}
                  </div>
                )}
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
                Start 14-Day Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

