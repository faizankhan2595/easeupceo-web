"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import worklynxLogo from "@/assets/worklynx-light.png";
import { Link, useLocation } from "react-router-dom";
import { useCountryContext } from "@/context/CountryContext";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#why-us", label: "Why Worklynx" },
  { href: "#how-it-works", label: "How It Works" },
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

/** UK Navbar — self-contained, no props required for country switching. */
export default function Navbar({ onContactClick }) {
  const { country, setCountry } = useCountryContext();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${(scrolled || open)
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link to="/" className="flex items-center shrink-0">
          <img src={worklynxLogo} alt="Worklynx" className="h-13 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
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
