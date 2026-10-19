import { Link } from "react-router-dom";
import { Plus, ArrowUpRight } from "lucide-react";
import { HOME_FAQS } from "@/marketing/uk/content/homeFaqs";

// Native <details> keeps every answer in the HTML, so crawlers read the
// same text that the FAQPage schema declares.
export default function HomeFAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-neutral-200 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-4xl md:text-5xl">
            Questions UK businesses ask us
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
            HR, payroll, stock and EPOS in one place raises a few questions. Here are the ones we hear most.
          </p>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {HOME_FAQS.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium text-neutral-900 md:text-lg [&::-webkit-details-marker]:hidden">
                <h3>{faq.q}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-transform duration-300 group-open:rotate-45">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl pr-14 text-sm leading-7 text-neutral-500 md:text-base">
                {faq.a}
              </p>
              {faq.link && (
                <Link
                  to={faq.link.to}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  {faq.link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
