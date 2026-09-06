"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Phone,
    Send,
    CheckCircle,
    MessageSquare,
    Building2,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function ContactSalesSection({ onStartChat }) {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        comment: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.mobile) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setSubmitting(true);

        // Mock API submission
        setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
            toast.success("Thank you! Our sales team will get back to you shortly.");
        }, 1200);
    };

    const inputClass =
        "w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100";

    const labelClass =
        "block text-xs font-semibold uppercase tracking-wider text-slate-600";

    return (
        <section
            id="contact-sales-section"
            className="border-t border-neutral-200 bg-white py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* ================= HEADER ================= */}

                <div className="mb-14 max-w-3xl md:mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-linear-to-r from-brand-600 to-brand-500" />

                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                            Contact Sales
                        </span>
                    </motion.div>


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-900 sm:text-4xl md:text-5xl"
                    >
                        Let&rsquo;s find the right fit
                        <br />

                        <span className="text-brand-600">
                            for your business.
                        </span>
                    </motion.h2>


                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-6 max-w-xl text-base leading-8 text-neutral-500"
                    >
                        Tell us about your team and we&rsquo;ll walk you through
                        pricing, setup and migration.
                    </motion.p>
                </div>


                {/* ================= CARD ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.65 }}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12">

                        {/* ---------- LEFT: FORM ---------- */}

                        <div className="border-b border-slate-100 p-6 sm:p-10 md:col-span-7 md:border-b-0 md:border-r">

                            <div className="mb-7">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                                    <Sparkles className="h-3 w-3" /> Connect with Sales
                                </span>

                                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                                    Get in touch with us
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Have questions about packages or setup? Send us a message.
                                </p>
                            </div>


                            {success ? (
                                <div className="flex flex-col items-center justify-center py-14 text-center">

                                    <CheckCircle className="h-14 w-14 text-brand-600" />

                                    <h4 className="mt-4 text-lg font-semibold text-slate-900">
                                        Message sent successfully!
                                    </h4>

                                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                        Our UK-based business development team will review
                                        your details and call or email you within 2 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    <div>
                                        <label htmlFor="sales-name" className={labelClass}>
                                            Full Name *
                                        </label>

                                        <div className="relative mt-1">
                                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <input
                                                id="sales-name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                }
                                                placeholder="John Doe"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="sales-email" className={labelClass}>
                                            Work Email *
                                        </label>

                                        <div className="relative mt-1">
                                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <input
                                                id="sales-email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                }
                                                placeholder="john@company.co.uk"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="sales-mobile" className={labelClass}>
                                            Contact / Mobile Number *
                                        </label>

                                        <div className="relative mt-1">
                                            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <input
                                                id="sales-mobile"
                                                type="tel"
                                                required
                                                value={form.mobile}
                                                onChange={(e) =>
                                                    setForm({ ...form, mobile: e.target.value })
                                                }
                                                placeholder="+44 7123 456789"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="sales-comment" className={labelClass}>
                                            How can we help? (Optional)
                                        </label>

                                        <textarea
                                            id="sales-comment"
                                            rows={3}
                                            value={form.comment}
                                            onChange={(e) =>
                                                setForm({ ...form, comment: e.target.value })
                                            }
                                            placeholder="Tell us a bit about your business and team size..."
                                            className="mt-1 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-600 to-brand-500 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:shadow-lg hover:brightness-105 active:scale-[0.98] disabled:opacity-50"
                                    >
                                        {submitting ? "Sending..." : "Submit Inquiry"}
                                        <Send className="h-4 w-4" />
                                    </button>
                                </form>
                            )}
                        </div>


                        {/* ---------- RIGHT: INSTANT OPTIONS ---------- */}

                        <div className="flex flex-col justify-between bg-slate-50/60 p-6 sm:p-10 md:col-span-5">

                            <div>
                                <h4 className="text-lg font-bold text-slate-900">
                                    Instant Options
                                </h4>

                                <p className="mt-1 text-xs text-slate-500">
                                    Get answers immediately or set up your company in minutes.
                                </p>


                                <div className="mt-6 space-y-4">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            onStartChat?.(
                                                form.name && form.email && form.mobile
                                                    ? {
                                                          name: form.name,
                                                          email: form.email,
                                                          mobile: form.mobile,
                                                      }
                                                    : null
                                            )
                                        }
                                        className="group flex w-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xs transition-all hover:border-brand-300 hover:shadow-md hover:shadow-brand-600/5 active:scale-[0.99]"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                                            <MessageSquare className="h-5 w-5" />
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="block text-sm font-semibold text-slate-900">
                                                Chat with Sales Team
                                            </span>

                                            <span className="mt-1 block text-xs leading-normal text-slate-500">
                                                Connect immediately with our support assistant.
                                            </span>
                                        </span>

                                        <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                                    </button>


                                    <a
                                        href="/signup"
                                        className="group flex w-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xs transition-all hover:border-accent-300 hover:shadow-md hover:shadow-accent-500/5 active:scale-[0.99]"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-100">
                                            <Building2 className="h-5 w-5" />
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="block text-sm font-semibold text-slate-900">
                                                Set up Company
                                            </span>

                                            <span className="mt-1 block text-xs leading-normal text-slate-500">
                                                Skip the sales cycle and create your account instantly.
                                            </span>
                                        </span>

                                        <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>


                            {/* ---------- DIRECT CONTACT ---------- */}

                            <div className="mt-10 space-y-1.5 border-t border-slate-200/60 pt-5">

                                <p className="text-[11px] font-medium text-slate-700">
                                    Or reach us directly:
                                </p>

                                <p className="text-xs text-slate-600">
                                    Email:{" "}
                                    <a
                                        href="mailto:sales@techtradeitsolutions.com"
                                        className="underline hover:text-brand-600"
                                    >
                                        sales@techtradeitsolutions.com
                                    </a>
                                </p>

                                <p className="text-xs text-slate-600">
                                    Phone:{" "}
                                    <a
                                        href="tel:+447776839310"
                                        className="underline hover:text-brand-600"
                                    >
                                        +44 7776839310
                                    </a>
                                </p>

                                <p className="pt-1 text-[10px] text-slate-400">
                                    GDPR Compliant &middot; Secure Data Storage in the UK
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
