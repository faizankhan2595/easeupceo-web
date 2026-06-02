/**
 * Worklynx sign-up page.
 *
 * Mirrors `frontend/app/screens/MainScreens/Custom/Internal_Pages/main/SignUpScreen.js`
 * (the Expo flow), but in a single-page Tailwind form with no email-OTP step.
 * On success, redirects to `/start-onboarding?token=<jwt>&org=<id>` so the
 * chat onboarding picks the user up. After onboarding finalizes, the backend
 * re-mints a fresh JWT and redirects the browser to
 * `https://app.worklynx.io/?token=<jwt>&org=<id>` for auto-login.
 *
 * Hits the existing backend endpoints (api.ts):
 *   - POST /api/check-hostname  (debounced availability check)
 *   - POST /api/check-email     (debounced availability check)
 *   - POST /api/signup-validate (server-side cross-check before commit)
 *   - POST /api/signup          (final commit; returns { token, user, org_id })
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const API_BASE = "https://alfabackend.inkapps.io";

const COUNTRY_OPTIONS = [
  { label: "🇮🇳  India",          value: "India",          currency: "₹", currencyCode: "INR" },
  { label: "🇬🇧  United Kingdom", value: "United Kingdom", currency: "£", currencyCode: "GBP" },
];

const PRICING_BY_COUNTRY = {
  "India":          { base: 999, payroll_per_emp: 35, attendance_per_emp: 18, leave_per_emp: 12, restaurant: 399, healthcare: 399 },
  "United Kingdom": { base: 29,  payroll_per_emp: 2,  attendance_per_emp: 1,  leave_per_emp: 1,  restaurant: 15, healthcare: 15 },
};

// HR modules included free with every plan and enabled by default at signup.
// Their keys map 1:1 to `selected_modules` on /api/signup, which sets the
// matching `enabled_features` flag (assets → asset_management; the rest share
// their key) and seeds sample data. Toggling these off sends `false`, which the
// backend honours (`modules.X != false`). They add nothing to monthlyTotal.
const HR_MODULES = [
  { k: "recruitment",   label: "Recruitment",        desc: "Jobs, applicants, interviews, hiring requests" },
  { k: "performance",   label: "Performance",        desc: "Appraisal cycles & performance dashboard" },
  { k: "assets",        label: "Asset Management",   desc: "Assets & asset types with assignment" },
  { k: "disciplinary",  label: "Disciplinary",       desc: "Disciplinary actions, types & rules" },
  { k: "letters",       label: "Letter Sending",     desc: "Generate & send HR letters" },
  { k: "announcements", label: "Announcements",      desc: "Company-wide announcements" },
  { k: "help_desk",     label: "Help Desk",          desc: "Tickets, workflows & categories" },
];

const slugify = (name) =>
  (name || "").toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

async function postJSON(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let json;
  try { json = await res.json(); } catch { json = { success: false, message: "Server response was not JSON" }; }
  return json;
}

export default function SignUpPage() {
  const navigate = useNavigate();

  // Step 1 form fields
  const [orgName,        setOrgName]        = useState("");
  const [adminName,      setAdminName]      = useState("");
  const [adminEmail,     setAdminEmail]     = useState("");
  const [adminPhone,     setAdminPhone]     = useState("");
  const [adminPassword,  setAdminPassword]  = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country,        setCountry]        = useState("India");
  const [employeeCount,  setEmployeeCount]  = useState(10);
  const [modules,        setModules]        = useState({
    payroll: false, attendance: false, leave: false, restaurant: false, healthcare: false,
    // HR modules included free and on by default (see HR_MODULES).
    recruitment: true, performance: true, assets: true, disciplinary: true,
    letters: true, announcements: true, help_desk: true,
  });

  // Availability state
  const [hostnameAvailable, setHostnameAvailable] = useState(null);
  const [checkingHostname,  setCheckingHostname]  = useState(false);
  const hostnameTimer = useRef(null);
  const hostnameSeq   = useRef(0);

  const [emailAvailable, setEmailAvailable] = useState(null);
  const [emailMessage,   setEmailMessage]   = useState("");
  const [checkingEmail,  setCheckingEmail]  = useState(false);
  const emailTimer = useRef(null);
  const emailSeq   = useRef(0);

  const [submitting, setSubmitting] = useState(false);

  const pricing = PRICING_BY_COUNTRY[country] || PRICING_BY_COUNTRY["India"];
  const currencySymbol = (COUNTRY_OPTIONS.find(c => c.value == country) || COUNTRY_OPTIONS[0]).currency;

  const monthlyTotal = useMemo(() => {
    let total = pricing.base;
    if (modules.payroll)    total += (employeeCount || 0) * pricing.payroll_per_emp;
    if (modules.attendance) total += (employeeCount || 0) * pricing.attendance_per_emp;
    if (modules.leave)      total += (employeeCount || 0) * pricing.leave_per_emp;
    if (modules.restaurant) total += pricing.restaurant;
    if (modules.healthcare) total += pricing.healthcare;
    return total;
  }, [employeeCount, modules, pricing]);

  // Hostname availability (debounced)
  useEffect(() => {
    if (hostnameTimer.current) clearTimeout(hostnameTimer.current);
    const hostname = slugify(orgName);
    if (!hostname) { setHostnameAvailable(null); setCheckingHostname(false); return; }
    setCheckingHostname(true);
    setHostnameAvailable(null);
    const seq = ++hostnameSeq.current;
    hostnameTimer.current = setTimeout(async () => {
      try {
        const res = await postJSON("/api/check-hostname", { hostname });
        if (seq != hostnameSeq.current) return;
        if (res.success) setHostnameAvailable(!!res.available);
      } catch (_) {
        if (seq != hostnameSeq.current) return;
        setHostnameAvailable(null);
      }
      if (seq == hostnameSeq.current) setCheckingHostname(false);
    }, 500);
    return () => { if (hostnameTimer.current) clearTimeout(hostnameTimer.current); };
  }, [orgName]);

  // Email availability (debounced)
  useEffect(() => {
    if (emailTimer.current) clearTimeout(emailTimer.current);
    const email = (adminEmail || "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) { setEmailAvailable(null); setEmailMessage(""); setCheckingEmail(false); return; }
    if (!emailRegex.test(email)) { setEmailAvailable(false); setEmailMessage("Please enter a valid email address"); setCheckingEmail(false); return; }
    setCheckingEmail(true);
    setEmailAvailable(null);
    setEmailMessage("");
    const seq = ++emailSeq.current;
    emailTimer.current = setTimeout(async () => {
      try {
        const res = await postJSON("/api/check-email", { email });
        if (seq != emailSeq.current) return;
        if (res.success) {
          setEmailAvailable(!!res.available);
          setEmailMessage(res.message || "");
        }
      } catch (_) {
        if (seq != emailSeq.current) return;
        setEmailAvailable(null);
      }
      if (seq == emailSeq.current) setCheckingEmail(false);
    }, 500);
    return () => { if (emailTimer.current) clearTimeout(emailTimer.current); };
  }, [adminEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    // Local validation
    if (!orgName.trim())   return toast.error("Organization name is required");
    if (!adminName.trim()) return toast.error("Admin name is required");
    if (!adminEmail.trim()) return toast.error("Email is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminEmail.trim())) return toast.error("Please enter a valid email address");
    if (!adminPassword)    return toast.error("Password is required");
    if (adminPassword.length < 6) return toast.error("Password must be at least 6 characters");
    if (adminPassword != confirmPassword) return toast.error("Passwords do not match");
    if (checkingHostname || checkingEmail) return toast.error("Please wait while we check availability");
    if (hostnameAvailable == false) return toast.error("Organization name is already taken — please pick a different name");
    if (emailAvailable    == false) return toast.error(emailMessage || "An account with this email already exists");

    setSubmitting(true);
    const t = toast.loading("Creating your workspace…");

    try {
      // Server-side authoritative check (catches anything availability missed).
      const validation = await postJSON("/api/signup-validate", {
        organization_name: orgName,
        admin_name:        adminName,
        admin_email:       adminEmail.trim(),
        admin_phone:       adminPhone || "",
        admin_password:    adminPassword,
        confirm_password:  confirmPassword,
        hostname:          slugify(orgName),
        country,
      });
      if (!validation.success) {
        toast.dismiss(t);
        return toast.error(validation.message || "Please review the highlighted fields.");
      }

      // Final commit
      const res = await postJSON("/api/signup", {
        organization_name: orgName,
        admin_name:        adminName,
        admin_email:       adminEmail,
        admin_phone:       adminPhone || "",
        admin_password:    adminPassword,
        confirm_password:  confirmPassword,
        employee_count:    employeeCount || 1,
        selected_modules:  modules,
        hostname:          slugify(orgName),
        country,
      });

      toast.dismiss(t);

      if (!res.success) {
        return toast.error(res.message || "Something went wrong");
      }

      const orgId = res.org_id || (res.user?.organizations?.[0]?.id);
      if (!res.token || !orgId) {
        return toast.error("Signup succeeded but auth context is missing — please try logging in.");
      }

      // Persist for the onboarding API + redirect to the chat.
      try {
        sessionStorage.setItem("onboarding_token",  res.token);
        sessionStorage.setItem("onboarding_org_id", String(orgId));
      } catch (_) { /* private mode etc. */ }

      toast.success("Account created — let's set up your workspace.");
      // Carry an explicit return_url so onboarding redirects back to the app
      // after finalize (the onboarding /start + /finalize both read this).
      const returnUrl = encodeURIComponent("https://app.worklynx.io/");
      // Pass the company name so the onboarding chat never re-asks it (the
      // backend also auto-fills it from the Organizations record as a fallback).
      navigate(`/start-onboarding?token=${encodeURIComponent(res.token)}&org=${encodeURIComponent(String(orgId))}&company=${encodeURIComponent(orgName.trim())}&return_url=${returnUrl}`);
    } catch (err) {
      toast.dismiss(t);
      toast.error(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase = "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Start your <span className="text-gradient-brand">Worklynx</span> trial
          </h1>
          <p className="text-slate-600">30 days free. No credit card. Setup in 5 minutes.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-5">
          {/* Organization name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Organization name</label>
            <input
              type="text" className={inputBase} placeholder="Acme Inc"
              value={orgName} onChange={(e) => setOrgName(e.target.value)} autoComplete="organization"
            />
            {orgName && (
              <p className={`mt-1 text-xs ${hostnameAvailable == true ? "text-emerald-600" : hostnameAvailable == false ? "text-red-600" : "text-slate-500"}`}>
                {checkingHostname
                  ? "Checking availability…"
                  : hostnameAvailable == true
                    ? `✓ ${slugify(orgName)}.worklynx.io is available`
                    : hostnameAvailable == false
                      ? `✗ ${slugify(orgName)}.worklynx.io is taken — pick a different name`
                      : `Your URL will be ${slugify(orgName)}.worklynx.io`}
              </p>
            )}
          </div>

          {/* Admin name + email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your name</label>
              <input
                type="text" className={inputBase} placeholder="Jane Doe"
                value={adminName} onChange={(e) => setAdminName(e.target.value)} autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Work email</label>
              <input
                type="email" className={inputBase} placeholder="jane@acme.com"
                value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} autoComplete="email"
              />
              {adminEmail && (
                <p className={`mt-1 text-xs ${emailAvailable == true ? "text-emerald-600" : emailAvailable == false ? "text-red-600" : "text-slate-500"}`}>
                  {checkingEmail
                    ? "Checking…"
                    : emailAvailable == true
                      ? "✓ Email is available"
                      : emailAvailable == false
                        ? `✗ ${emailMessage || "An account with this email already exists"}`
                        : ""}
                </p>
              )}
            </div>
          </div>

          {/* Phone (optional) + Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone <span className="text-slate-400">(optional)</span></label>
              <input
                type="tel" className={inputBase} placeholder="+91 98765 43210"
                value={adminPhone} onChange={(e) => setAdminPhone(e.target.value)} autoComplete="tel"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
              <select className={inputBase} value={country} onChange={(e) => setCountry(e.target.value)}>
                {COUNTRY_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                type="password" className={inputBase} placeholder="At least 6 characters"
                value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} autoComplete="new-password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Confirm password</label>
              <input
                type="password" className={inputBase} placeholder="Re-enter password"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password"
              />
            </div>
          </div>

          {/* Plan summary */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">Plan summary</span>
              <span className="text-2xl font-bold text-slate-900">
                {currencySymbol}{monthlyTotal}<span className="text-sm font-normal text-slate-500">/month</span>
              </span>
            </div>
            <div className="text-xs text-slate-500 mb-3">
              Free for 30 days. Cancel anytime. Add modules below to fit your team.
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <label className="text-sm text-slate-700">
                <span className="block text-xs text-slate-500 mb-1">Employees</span>
                <input
                  type="number" min={1} className={inputBase}
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Math.max(1, parseInt(e.target.value || "1", 10)))}
                />
              </label>
            </div>

            <div className="space-y-2">
              {[
                { k: "payroll",    label: "Payroll",            price: `${currencySymbol}${pricing.payroll_per_emp}/emp` },
                { k: "attendance", label: "Attendance",         price: `${currencySymbol}${pricing.attendance_per_emp}/emp` },
                { k: "leave",     label: "Leave Management",    price: `${currencySymbol}${pricing.leave_per_emp}/emp` },
                { k: "restaurant", label: "Restaurant (flat)",  price: `${currencySymbol}${pricing.restaurant}/mo` },
                { k: "healthcare", label: "Doctors / Healthcare", price: `${currencySymbol}${pricing.healthcare}/mo` },
              ].map(({ k, label, price }) => (
                <label key={k} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-slate-200 hover:border-indigo-300 cursor-pointer transition">
                  <span className="flex items-center gap-3">
                    <input
                      type="checkbox" className="w-4 h-4 text-indigo-600"
                      checked={modules[k]} onChange={(e) => setModules(prev => ({ ...prev, [k]: e.target.checked }))}
                    />
                    <span className="text-sm font-medium text-slate-800">{label}</span>
                  </span>
                  <span className="text-xs text-slate-500">{price}</span>
                </label>
              ))}
            </div>

            {/* HR modules — included free, enabled by default */}
            <div className="mt-4 pt-3 border-t border-slate-200">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">HR modules</span>
                <span className="text-xs font-medium text-emerald-600">Included free</span>
              </div>
              <div className="space-y-2">
                {HR_MODULES.map(({ k, label, desc }) => (
                  <label key={k} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-slate-200 hover:border-indigo-300 cursor-pointer transition">
                    <span className="flex items-center gap-3">
                      <input
                        type="checkbox" className="w-4 h-4 text-indigo-600"
                        checked={!!modules[k]} onChange={(e) => setModules(prev => ({ ...prev, [k]: e.target.checked }))}
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-slate-800">{label}</span>
                        <span className="text-xs text-slate-500">{desc}</span>
                      </span>
                    </span>
                    <span className="text-xs text-emerald-600">Included</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit" disabled={submitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3.5 rounded-xl transition"
          >
            {submitting ? "Creating workspace…" : "Start 30-Day Free Trial →"}
          </button>

          <p className="text-xs text-slate-500 text-center">
            By signing up you agree to our{" "}
            <a href="/terms-of-service" className="text-indigo-600 hover:underline">Terms</a> and{" "}
            <a href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
