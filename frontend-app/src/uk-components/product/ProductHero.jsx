import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ActionButton } from "./ActionButton";
import {
    EASE,
    Stagger,
    StaggerItem,
    WordReveal,
    useFloat,
    usePointerParallax,
    useTravel,
} from "./motion";

/**
 * Page hero for a single product.
 *
 * Copy on the left, product screenshot on the right — the same split the
 * home page showcase uses, so a product page feels like a continuation of it.
 *
 * This one animates on mount rather than on scroll: it is above the fold,
 * so there is no scroll event coming to trigger it.
 */
export default function ProductHero({
    breadcrumb,
    title,
    highlight,
    lead,
    image,
    imageAlt,
    points = [],
    primaryCta,
    secondaryCta,
}) {
    const travel = useTravel();
    const float = useFloat({ distance: 12, duration: 8 });
    const parallax = usePointerParallax({ strength: 16 });

    const titleWords = String(title || "").split(" ").length;

    return (
        <section className="bg-white pb-20 pt-14 md:pb-28 md:pt-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">

                    {/* ---------- COPY ---------- */}

                    <Stagger trigger="mount" stagger={0.1}>

                        <StaggerItem as="nav" y={10} aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-xs text-neutral-500">
                                <li>
                                    <Link
                                        to="/"
                                        className="transition-colors hover:text-neutral-900"
                                    >
                                        Products
                                    </Link>
                                </li>

                                <li aria-hidden="true">/</li>

                                <li className="font-medium text-neutral-900">{breadcrumb}</li>
                            </ol>
                        </StaggerItem>


                        <h1 className="mt-7 text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-neutral-900 sm:text-5xl lg:text-[3.5rem]">
                            <WordReveal text={title} trigger="mount" delay={0.15} />
                            <br />

                            <WordReveal
                                text={highlight}
                                trigger="mount"
                                delay={0.15 + titleWords * 0.045}
                                className="text-brand-600"
                            />
                        </h1>


                        <StaggerItem
                            as="p"
                            y={14}
                            className="mt-6 max-w-xl text-base leading-8 text-neutral-500"
                        >
                            {lead}
                        </StaggerItem>


                        {(primaryCta || secondaryCta) && (
                            <StaggerItem y={14} className="mt-9 flex flex-col gap-3 sm:flex-row">

                                {primaryCta ? (
                                    <ActionButton
                                        href={primaryCta.href}
                                        to={primaryCta.to}
                                        onClick={primaryCta.onClick}
                                    >
                                        {primaryCta.label}
                                    </ActionButton>
                                ) : null}

                                {secondaryCta ? (
                                    <ActionButton
                                        variant="secondary"
                                        href={secondaryCta.href}
                                        to={secondaryCta.to}
                                        onClick={secondaryCta.onClick}
                                    >
                                        {secondaryCta.label}
                                    </ActionButton>
                                ) : null}
                            </StaggerItem>
                        )}


                        {points.length > 0 && (
                            <motion.ul
                                className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-neutral-200 pt-7"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                                    },
                                }}
                            >
                                {points.map((point) => (
                                    <motion.li
                                        key={point}
                                        className="flex items-center gap-2 text-xs text-neutral-500"
                                        variants={{
                                            hidden: travel ? { opacity: 0, y: 8 } : { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.45, ease: EASE },
                                            },
                                        }}
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-brand-600 to-brand-500" />
                                        {point}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </Stagger>


                    {/* ---------- VISUAL ---------- */}

                    <motion.div
                        ref={parallax.ref}
                        {...parallax.handlers}
                        className="relative flex h-[280px] items-center justify-center sm:h-[380px] lg:h-[460px]"
                        initial={{ opacity: 0, y: travel ? 24 : 0, scale: travel ? 0.96 : 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                    >

                        {/* Glow breathes on its own clock, slower than the
                            screenshot drift, so the two never look synced. */}
                        <motion.div
                            aria-hidden="true"
                            className="absolute h-[240px] w-[240px] rounded-full bg-linear-to-r from-brand-600/10 to-brand-500/10 blur-[90px]"
                            {...(travel
                                ? {
                                      animate: { scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] },
                                      transition: {
                                          duration: 6,
                                          repeat: Infinity,
                                          ease: "easeInOut",
                                      },
                                  }
                                : {})}
                        />

                        {/* Drift and parallax are split across two elements so
                            the looping animation and the pointer springs do not
                            fight over the same transform. */}
                        <motion.div
                            className="relative z-10 h-full w-full"
                            style={{ x: parallax.x, y: parallax.y }}
                        >
                            <motion.img
                                src={image}
                                alt={imageAlt}
                                loading="eager"
                                className="h-full w-full object-contain"
                                {...float}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
