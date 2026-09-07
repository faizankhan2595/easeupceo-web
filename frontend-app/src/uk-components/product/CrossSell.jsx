import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { EASE, SPRING, VIEWPORT, useTravel } from "./motion";

const MotionLink = motion.create(Link);

/**
 * Links across to the other two products. Plain rows with a rule between
 * them — the point is navigation, not decoration.
 *
 * Hover drives the whole row: the arrow pushes out along its own diagonal
 * while the background washes in, so the row reads as a single target.
 */
export default function CrossSell({ links }) {
    const travel = useTravel();

    return (
        <motion.ul
            className="mt-12 grid grid-cols-1 gap-px bg-neutral-200 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
        >
            {links.map((link) => (
                <motion.li
                    key={link.to}
                    className="bg-white"
                    variants={{
                        hidden: travel ? { opacity: 0, y: 24 } : { opacity: 0 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.55, ease: EASE },
                        },
                    }}
                >
                    <MotionLink
                        to={link.to}
                        className="group relative flex h-full items-start justify-between gap-6 p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 md:p-8"
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                        whileFocus="hover"
                    >
                        <motion.span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-neutral-50"
                            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                            transition={{ duration: 0.3, ease: EASE }}
                        />

                        <span className="relative z-10">
                            <span className="block text-base font-medium text-neutral-900">
                                {link.title}
                            </span>

                            <span className="mt-2 block max-w-sm text-sm leading-6 text-neutral-500">
                                {link.description}
                            </span>
                        </span>

                        <motion.span
                            className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-brand-500 text-white"
                            variants={
                                travel
                                    ? {
                                          rest: { x: 0, y: 0, scale: 1 },
                                          hover: { x: 3, y: -3, scale: 1.08 },
                                      }
                                    : undefined
                            }
                            transition={SPRING}
                        >
                            <ArrowUpRight size={15} aria-hidden="true" />
                        </motion.span>
                    </MotionLink>
                </motion.li>
            ))}
        </motion.ul>
    );
}
