import { Link, useLocation } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import worklynxLogo from "@/assets/worklynx-dark.png";

const footerLinks = {
  Products: [
    { label: "Inventory Management", to: "/inventory-management" },
    { label: "Restaurant Management", to: "/restaurant-management" },
    { label: "HR Management", to: "/hrms" },
    { label: "Analytics", to: "/", hash: "products" },
  ],
  Company: [
    { label: "About us", to: "/about" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact sales", action: "contact" },
    { label: "Get started", to: "/signup" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Service", to: "/terms-of-service" },
    { label: "GDPR & Data Protection", to: "/gdpr" },
    { label: "Cookie Policy", to: "/cookie-policy" },
  ],
};

const linkClass =
  "text-sm text-slate-400 transition-colors hover:text-white";

export default function Footer({ onContactClick }) {
  const { pathname } = useLocation();

  // Router navigation does not act on the URL fragment, so a hash link that
  // targets a section on the page we are already on has to scroll itself.
  const handleHashClick = (event, link) => {
    if (link.to !== pathname) return;

    const target = document.getElementById(link.hash);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // Matches the flat background baked into worklynx-dark.png, so the
    // logo sits on the footer without a visible plate behind it.
    <footer className="bg-[#01051C] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* ================= BRAND ================= */}

          <div className="sm:col-span-2">
            <Link to="/" className="inline-flex flex-col items-start">
              <img
                src={worklynxLogo}
                alt="Worklynx"
                className="h-9 w-auto sm:h-14"
              />

              <span
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                "
              >
                <span>Simplify</span>
                <span className="h-[3px] w-[3px] rounded-full bg-brand-500" />
                <span>Automate</span>
                <span className="h-[3px] w-[3px] rounded-full bg-brand-500" />
                <span>Accelerate</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
              One platform for inventory, restaurant operations, people and
              analytics — giving UK businesses complete visibility, smarter
              control and the tools to grow.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-500" />
              GDPR &amp; ICO compliant · Hosted in the UK
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-brand-500 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-brand-500 hover:text-white"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ================= LINK COLUMNS ================= */}

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white">{heading}</h3>

              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.action === "contact" ? (
                      <button
                        type="button"
                        onClick={onContactClick}
                        className={linkClass}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.hash ? `${link.to}#${link.hash}` : link.to}
                        onClick={
                          link.hash
                            ? (event) => handleHashClick(event, link)
                            : undefined
                        }
                        className={linkClass}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-xs leading-6 text-slate-500">
              &copy; {new Date().getFullYear()} Worklynx is a product of{" "}
              <a
                href="https://techtradeitsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Techtrade IT Solutions
              </a>
              . Registered in England &amp; Wales. All rights reserved.
            </p>

            <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:gap-6 md:items-end">
              <p>
                Birmingham | Email:{" "}
                <a
                  href="mailto:sales@techtradeitsolutions.com"
                  className="text-slate-300 underline hover:text-white"
                >
                  sales@techtradeitsolutions.com
                </a>
              </p>

              <p>
                Tel:{" "}
                <a
                  href="tel:+447776839310"
                  className="text-slate-300 underline hover:text-white"
                >
                  +44 7776839310
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V9h3zm-1.5-11.3A1.7 1.7 0 116.2 6a1.7 1.7 0 011.3 1.7zM20 19h-3v-5.3c0-1.3-.5-2.2-1.7-2.2a1.8 1.8 0 00-1.7 1.2 2.3 2.3 0 00-.1.8V19h-3s.1-8.7 0-10h3v1.4a3 3 0 012.7-1.5c2 0 3.5 1.3 3.5 4.1z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.26 10.99h-6.466l-5.06-6.617-5.79 6.617H1.96l7.73-8.835L1.75 2.25h6.633l4.575 6.045L18.244 2.25zM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
