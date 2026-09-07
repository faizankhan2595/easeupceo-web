import { motion } from "framer-motion";
import { EASE, VIEWPORT, WordReveal, useTravel } from "./motion";

/**
 * Shared section shell for the UK product pages.
 *
 * Keeps every band on the same container width, vertical rhythm and
 * hairline separator so the pages read as one system.
 */
export function Section({ id, bordered = true, className = "", children }) {
    return (
        <section
            id={id}
            className={`bg-white ${bordered ? "border-t border-neutral-200" : ""} py-20 md:py-28 ${className}`}
        >
            <div className="mx-auto max-w-7xl px-6">{children}</div>
        </section>
    );
}

/**
 * Small rule + label used above every heading on the site.
 * The rule draws itself out from the left — the first beat of the section.
 */
export function Eyebrow({ children }) {
    const travel = useTravel();

    return (
        <motion.div
            className="flex items-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
            <motion.span
                className="h-px w-8 origin-left bg-linear-to-r from-brand-600 to-brand-500"
                variants={{
                    hidden: travel ? { scaleX: 0, opacity: 0 } : { opacity: 0 },
                    visible: {
                        scaleX: 1,
                        opacity: 1,
                        transition: { duration: 0.5, ease: EASE },
                    },
                }}
            />

            <motion.span
                className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400"
                variants={{
                    hidden: travel ? { opacity: 0, x: -8 } : { opacity: 0 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: EASE },
                    },
                }}
            >
                {children}
            </motion.span>
        </motion.div>
    );
}

/**
 * Section heading block: eyebrow, title with an optional brand-coloured
 * second line, and a lead paragraph.
 *
 * The title reveals word by word and the lead follows it, so the eye is
 * walked through the block in reading order rather than shown all of it.
 */
export function SectionHeader({ eyebrow, title, highlight, lead, className = "" }) {
    const travel = useTravel();

    /* Roughly the time the title spends revealing, so the lead lands after. */
    const leadDelay = 0.25 + String(title || "").split(" ").length * 0.045;

    return (
        <div className={`max-w-2xl ${className}`}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}

            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-900 sm:text-4xl md:text-[2.75rem]">
                <WordReveal text={title} delay={0.15} />

                {highlight ? (
                    <>
                        {" "}
                        <WordReveal
                            text={highlight}
                            delay={0.15 + String(title || "").split(" ").length * 0.045}
                            className="text-brand-600"
                        />
                    </>
                ) : null}
            </h2>

            {lead ? (
                <motion.p
                    className="mt-5 text-base leading-8 text-neutral-500"
                    initial={{ opacity: 0, y: travel ? 14 : 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.6, delay: leadDelay, ease: EASE }}
                >
                    {lead}
                </motion.p>
            ) : null}
        </div>
    );
}
