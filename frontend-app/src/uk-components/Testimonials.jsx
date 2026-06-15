"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { FadeIn } from "@/uk-components/motion/FadeIn";

const testimonials = [
  {
    quote:
      "Worklynx took our payroll from a two-day manual nightmare to a same-day process. The RTI submissions just work, and our accountant loves it.",
    name: "Sarah Mitchell",
    role: "Operations Director, Bristol Logistics Ltd",
  },
  {
    quote:
      "Our leave policies were a mess of spreadsheets and email chains. Now staff book holiday in seconds and managers approve from their phone.",
    name: "James Okafor",
    role: "HR Manager, Northgate Retail Group",
  },
  {
    quote:
      "The performance review module finally got our managers doing regular 1:1s. Combined with payroll and attendance, it's the only HR tool we need.",
    name: "Priya Anand",
    role: "People Lead, Solent Tech Solutions",
  },
];

const logos = ["Bristol Logistics", "Northgate Retail", "Solent Tech", "Anglia Care Group", "Thames Valley Foods"];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-brand-600">Trusted across the UK</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            HR teams across the UK rely on Worklynx
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:ring-brand-200"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-200/50">
                    <Quote className="h-5 w-5" strokeWidth={1.5} fill="currentColor" />
                  </span>
                  <div className="mt-4 flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-7 text-slate-700">
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  </blockquote>
                </div>
                <figcaption className="relative mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white shadow-sm shadow-brand-500/30">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-slate-200 pt-10">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-semibold tracking-wide text-slate-400 transition-colors hover:text-slate-600">
              {logo}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
