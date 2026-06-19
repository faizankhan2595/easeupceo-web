import { Sparkles, ShieldCheck } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Attendance", href: "#features" },
    { label: "Leave Management", href: "#features" },
    { label: "Payroll", href: "#features" },
    { label: "Employee Management", href: "#features" },
    { label: "Performance Management", href: "#features" },
  ],
  Company: [
    { label: "Why Worklynx", href: "#why-us" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "GDPR & Data Protection", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer({ onContactClick }) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-base font-bold text-white shadow-md shadow-brand-600/20">
                <Sparkles className="h-4.5 w-4.5" strokeWidth={2.25} />
              </span>
              <span className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-white">Worklynx</span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-slate-400">
                  by Techtrade
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              All-in-one HR software for UK businesses — attendance, leave,
              payroll, employee and performance management in one place.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-500" />
              GDPR &amp; ICO compliant · Hosted in the UK
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-brand-500 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-brand-500 hover:text-white"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => {
                  const isContact = link.href === "#contact";
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (isContact && onContactClick) {
                            e.preventDefault();
                            onContactClick();
                          }
                        }}
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

       <div className="mt-12 border-t border-slate-800 pt-8">
  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    {/* Left */}
    <p className="text-xs text-slate-500 leading-6 max-w-xl">
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

    {/* Right */}
    <div className="flex flex-col gap-2 text-xs text-slate-500 md:items-end">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
        <p>
          Birmingham | Email:{" "}
          <a
            href="mailto:sales@techtradeitsolutions.com"
            className="text-slate-300 hover:text-white underline"
          >
            sales@techtradeitsolutions.com
          </a>
        </p>

        <p>
          Tel:{" "}
          <a
            href="tel:+447776839310"
            className="text-slate-300 hover:text-white underline"
          >
            +44 7776839310
          </a>
        </p>
      </div>
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
