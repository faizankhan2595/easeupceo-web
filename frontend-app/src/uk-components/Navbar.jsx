"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import worklynxLogo from "@/assets/worklynx-light.png";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#why-us", label: "Why Worklynx" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact-sales", label: "Contact Sales" },
];

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
         <Link to="/" className="flex items-center shrink-0">
            <img src={worklynxLogo} alt="Worklynx" className="h-12 w-auto" />
          </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isContact = link.href === "#contact-sales";
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (isContact && onContactClick) {
                    e.preventDefault();
                    onContactClick();
                  }
                }}
                className="relative text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            );
          })}
        </div>

           

        <div className="hidden items-center gap-4 lg:flex">
          <a
                      href="https://app.worklynx.io"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-600"
          >
                      Sign In
          </a>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg hover:shadow-brand-600/30"
          >
            Start 30-Day Free Trial
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
                return (
                  <a
                    key={link.href}
                    href={link.href}
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
              <a href="https://app.worklynx.io" onClick={() => setOpen(false)} className="text-sm font-semibold text-slate-700">
                Sign in
              </a>
              <a
                href="/signup"
                onClick={() => setOpen(false)}
                className="rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md"
              >
                Start 30-Day Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
