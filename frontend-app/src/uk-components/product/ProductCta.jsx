import { motion } from "framer-motion";
import { ActionButton } from "./ActionButton";
import { EASE, Stagger, StaggerItem, WordReveal, useTravel } from "./motion";

/**
 * Closing band shared by every product page.
 * `#contact-sales` is picked up by UKLayout, which opens the sales modal.
 *
 * A slow brand wash drifts behind the band — the only ambient motion on an
 * otherwise flat surface, to stop the last screen of the page feeling dead.
 */
export default function ProductCta({ title, lead, primaryLabel = "Talk to sales" }) {
    const travel = useTravel();
    const titleWords = String(title || "").split(" ").length;

    return (
        <section className="relative overflow-hidden border-t border-neutral-200 bg-neutral-50 py-20 md:py-28">

            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-linear-to-r from-brand-600/10 to-brand-500/10 blur-[120px]"
                {...(travel
                    ? {
                          animate: { x: [0, 60, 0], opacity: [0.6, 1, 0.6] },
                          transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                      }
                    : {})}
            />

            <div className="relative mx-auto max-w-7xl px-6">

                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-900 sm:text-4xl">
                            <WordReveal text={title} />
                        </h2>

                        <motion.p
                            className="mt-5 text-base leading-8 text-neutral-500"
                            initial={{ opacity: 0, y: travel ? 14 : 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1 + titleWords * 0.045,
                                ease: EASE,
                            }}
                        >
                            {lead}
                        </motion.p>
                    </div>

                    <Stagger
                        stagger={0.1}
                        delay={0.2}
                        className="flex flex-col gap-3 sm:flex-row md:shrink-0"
                    >
                        <StaggerItem y={14}>
                            <ActionButton href="#contact-sales">{primaryLabel}</ActionButton>
                        </StaggerItem>

                        <StaggerItem y={14}>
                            <ActionButton variant="secondary" href="/signup">
                                Start free trial
                            </ActionButton>
                        </StaggerItem>
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
