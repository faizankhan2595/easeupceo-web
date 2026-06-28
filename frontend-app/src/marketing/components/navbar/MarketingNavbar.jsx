import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import worklynxLogo from "@/assets/worklynx-light.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import FeaturesMegaMenu from "./FeaturesMegaMenu";
import CTAButton from "../shared/CTAButton";
import { useCountryContext } from "@/context/CountryContext";

const navLinks = [
  { label: "Features", href: "/features", hasMega: true },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const COUNTRIES = [
  { key: "india", flag: "🇮🇳", label: "India", short: "IN" },
  { key: "uk",    flag: "🇬🇧", label: "United Kingdom", short: "UK" },
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
    } catch (_) {}
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
        <Globe className="w-4 h-4 shrink-0" />
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
            className={`absolute top-full mt-1.5 w-44 bg-white rounded-xl shadow-lg border border-slate-200/80 overflow-hidden z-50 ${
              align === "right" ? "right-0" : "left-0"
            }`}
          >
            {COUNTRIES.map((c) => (
              <button
                key={c.key}
                onClick={() => handleSwitch(c.key)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                  country === c.key
                    ? "bg-slate-50 text-slate-900 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="text-base">{c.flag}</span>
                <span>{c.label}</span>
                {country === c.key && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** MarketingNavbar — self-contained, no props required. */
export default function MarketingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { country, setCountry } = useCountryContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMobileSwitch = (key) => {
    try {
      sessionStorage.setItem("geo_country", JSON.stringify({ value: key, ts: Date.now() }));
    } catch (_) {}
    setCountry(key);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={worklynxLogo} alt="Worklynx" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  link.hasMega ? (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-medium text-sm h-9 px-3">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <FeaturesMegaMenu />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.label}>
                      <Link
                        to={link.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          location.pathname === link.href
                            ? "text-blue-600"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <CountryDropdown align="right" />
            <a
              href="https://app.worklynx.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
            >
              Sign In
            </a>
            <CTAButton href="/signup" variant="primary" size="sm">
              Start Free Trial
            </CTAButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-3 flex flex-col gap-2">
                {/* Mobile region switcher */}
                <div className="px-1">
                  <p className="px-3 pb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wide">Region</p>
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => handleMobileSwitch(c.key)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                        country === c.key
                          ? "bg-slate-100 text-slate-900 font-semibold"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-base">{c.flag}</span>
                      <span>{c.label}</span>
                      {country === c.key && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                      )}
                    </button>
                  ))}
                </div>
                <a
                  href="https://app.worklynx.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Sign In
                </a>
                <CTAButton href="/signup" variant="primary" size="md" className="w-full justify-center">
                  Start Free Trial
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
