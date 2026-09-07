import { motion } from "framer-motion";
import { EASE, SPRING, VIEWPORT, useTravel } from "./motion";

/**
 * Hairline feature grid — one shared rule between cells instead of a stack
 * of shadowed cards, so a long feature list stays calm.
 *
 * Cells wash in on a short stagger. The delay is capped so the last cell of
 * a nine-item grid does not arrive a second and a half after the first.
 */
export default function FeatureGrid({ features }) {
    const travel = useTravel();

    return (
        <motion.ul
            className="mt-14 grid grid-cols-1 border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
        >
            {features.map((feature) => {
                const Icon = feature.icon;

                return (
                    <motion.li
                        key={feature.title}
                        className="group relative border-b border-r border-neutral-200 p-7 md:p-8"
                        variants={{
                            hidden: travel ? { opacity: 0, y: 18 } : { opacity: 0 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: EASE },
                            },
                        }}
                        initial="rest"
                        whileHover="hover"
                    >
                        {/* Hover wash sits behind the content rather than on the
                            cell itself, so it fades instead of snapping. */}
                        <motion.span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-neutral-50"
                            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                            transition={{ duration: 0.3, ease: EASE }}
                        />

                        <div className="relative z-10">
                            <motion.span
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-linear-to-r from-brand-600/10 to-brand-500/10 transition-colors group-hover:border-brand-500/30"
                                variants={
                                    travel
                                        ? {
                                              rest: { scale: 1, rotate: 0 },
                                              hover: { scale: 1.1, rotate: -6 },
                                          }
                                        : undefined
                                }
                                transition={SPRING}
                            >
                                <Icon
                                    size={17}
                                    strokeWidth={1.6}
                                    className="text-brand-600"
                                    aria-hidden="true"
                                />
                            </motion.span>

                            <h3 className="mt-5 text-sm font-medium text-neutral-900">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-neutral-500">
                                {feature.desc}
                            </p>
                        </div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );
}
