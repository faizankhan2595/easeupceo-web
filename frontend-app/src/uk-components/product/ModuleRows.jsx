import { motion } from "framer-motion";
import { EASE, VIEWPORT, useTravel } from "./motion";

/**
 * Alternating screenshot / copy rows — the home page showcase pattern,
 * reused so a product page explains its modules with real product imagery
 * rather than another grid of cards.
 *
 * Each row converges: copy and screenshot slide in from the side they sit
 * on, so the alternating layout is what drives the direction of the motion.
 */
export default function ModuleRows({ modules, framed = false }) {
    const travel = useTravel();

    const slide = (from) => ({
        hidden: travel ? { opacity: 0, x: from } : { opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: EASE },
        },
    });

    const media = {
        hidden: travel ? { opacity: 0, scale: 0.94 } : { opacity: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: EASE },
        },
    };

    return (
        <div className="mt-16">
            {modules.map((module, index) => {
                const imageRight = index % 2 === 0;

                return (
                    <motion.article
                        key={module.title}
                        className="border-t border-neutral-200 first:border-t-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ ...VIEWPORT, amount: 0.15 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                    >
                        <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-16 lg:gap-24">

                            {/* ---------- COPY ---------- */}

                            <motion.div
                                className={imageRight ? "md:order-1" : "md:order-2"}
                                variants={slide(imageRight ? -32 : 32)}
                            >

                                <h3 className="max-w-md text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-900 md:text-3xl">
                                    {module.title}
                                </h3>

                                <p className="mt-4 max-w-lg text-base leading-8 text-neutral-500">
                                    {module.description}
                                </p>

                                <motion.ul
                                    className="mt-7 space-y-3"
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.09,
                                                delayChildren: 0.15,
                                            },
                                        },
                                    }}
                                >
                                    {module.points.map((point) => (
                                        <motion.li
                                            key={point}
                                            className="flex items-start gap-3 text-sm leading-6 text-neutral-600"
                                            variants={{
                                                hidden: travel
                                                    ? { opacity: 0, x: -10 }
                                                    : { opacity: 0 },
                                                visible: {
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: { duration: 0.45, ease: EASE },
                                                },
                                            }}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-brand-600 to-brand-500"
                                            />
                                            {point}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>


                            {/* ---------- SCREENSHOT ---------- */}

                            <motion.div
                                className={imageRight ? "md:order-2" : "md:order-1"}
                                variants={media}
                            >
                                {framed ? (
                                    /* Flat UI captures need a frame to read as a screenshot.
                                       Hover eases the crop down the image, revealing a little
                                       more of the screen without a layout shift. */
                                    <motion.div
                                        className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50"
                                        initial="rest"
                                        whileHover="hover"
                                        variants={
                                            travel
                                                ? {
                                                      rest: { y: 0 },
                                                      hover: { y: -6 },
                                                  }
                                                : undefined
                                        }
                                        transition={{ duration: 0.4, ease: EASE }}
                                    >
                                        <motion.img
                                            src={module.image}
                                            alt={module.imageAlt}
                                            loading="lazy"
                                            className="h-[240px] w-full object-cover object-left-top sm:h-[300px] lg:h-[360px]"
                                            variants={
                                                travel
                                                    ? { rest: { scale: 1 }, hover: { scale: 1.04 } }
                                                    : undefined
                                            }
                                            transition={{ duration: 0.6, ease: EASE }}
                                        />
                                    </motion.div>
                                ) : (
                                    <div className="relative flex h-[240px] items-center justify-center sm:h-[320px] lg:h-[400px]">

                                        <motion.div
                                            aria-hidden="true"
                                            className="absolute h-[200px] w-[200px] rounded-full bg-linear-to-r from-brand-600/10 to-brand-500/10 blur-[90px]"
                                            {...(travel
                                                ? {
                                                      animate: { scale: [1, 1.15, 1] },
                                                      transition: {
                                                          duration: 6,
                                                          repeat: Infinity,
                                                          ease: "easeInOut",
                                                      },
                                                  }
                                                : {})}
                                        />

                                        <img
                                            src={module.image}
                                            alt={module.imageAlt}
                                            loading="lazy"
                                            className="relative z-10 h-full w-full object-contain"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.article>
                );
            })}
        </div>
    );
}
