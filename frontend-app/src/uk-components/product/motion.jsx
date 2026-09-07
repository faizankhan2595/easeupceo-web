import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Shared motion vocabulary for the UK product pages.
 *
 * Every band on /hrms, /inventory-management and /restaurant-management
 * animates from these few primitives, so the pages move as one system
 * instead of each section inventing its own timing.
 *
 * Rules kept throughout:
 *  - transform and opacity only, so nothing triggers layout during scroll
 *  - `once: true`, so a section never replays when the user scrolls back
 *  - reduced motion keeps the fade and drops the travel
 */

/** Out-expo. Fast to settle, no overshoot — reads as confident, not bouncy. */
export const EASE = [0.22, 1, 0.36, 1];

/** Fires a little before the element is fully on screen. */
export const VIEWPORT = { once: true, margin: "-80px" };

/** Spring used for the hover/press micro-interactions. */
export const SPRING = { type: "spring", stiffness: 400, damping: 28 };

/**
 * Whether travel (y/x/scale offsets) is allowed.
 * Opacity still animates under reduced motion — a cross-fade is not motion.
 */
export function useTravel() {
    return !useReducedMotion();
}

/**
 * Parent that releases its `<StaggerItem>` descendants one after another.
 * `trigger="mount"` is for above-the-fold content that must not wait for a
 * scroll event that will never come.
 */
export function Stagger({
    as = "div",
    stagger = 0.08,
    delay = 0,
    trigger = "view",
    className = "",
    children,
    ...rest
}) {
    const Tag = motion[as] || motion.div;
    const inView = trigger === "view";

    return (
        <Tag
            className={className}
            initial="hidden"
            {...(inView
                ? { whileInView: "visible", viewport: VIEWPORT }
                : { animate: "visible" })}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/** Child of `<Stagger>`. Travels along whichever axis you give it. */
export function StaggerItem({
    as = "div",
    y = 20,
    x = 0,
    scale = 1,
    duration = 0.6,
    className = "",
    children,
    ...rest
}) {
    const travel = useTravel();
    const Tag = motion[as] || motion.div;

    return (
        <Tag
            className={className}
            variants={{
                hidden: travel ? { opacity: 0, y, x, scale } : { opacity: 0 },
                visible: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    transition: { duration, ease: EASE },
                },
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/**
 * Headline reveal: each word slides up out of its own clipping mask.
 * The mask is the reason this reads as typeset rather than as a fade —
 * the negative margin gives descenders room so `g` and `y` are not shaved.
 */
export function WordReveal({
    text = "",
    className = "",
    delay = 0,
    stagger = 0.045,
    duration = 0.7,
    trigger = "view",
}) {
    const travel = useTravel();
    const inView = trigger === "view";
    const words = String(text).split(" ").filter(Boolean);

    return (
        <motion.span
            className={className}
            initial="hidden"
            {...(inView
                ? { whileInView: "visible", viewport: VIEWPORT }
                : { animate: "visible" })}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
            }}
        >
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className="inline-flex overflow-hidden pb-[0.15em] -mb-[0.15em] align-bottom"
                >
                    <motion.span
                        className="inline-block"
                        variants={{
                            hidden: travel ? { y: "110%", opacity: 0 } : { opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { duration, ease: EASE },
                            },
                        }}
                    >
                        {word}
                    </motion.span>

                    {index < words.length - 1 ? <span className="w-[0.25em]" /> : null}
                </span>
            ))}
        </motion.span>
    );
}

/**
 * Pointer parallax for hero artwork.
 *
 * Returns spring-smoothed offsets plus the handlers to spread on the frame.
 * Mouse only — on touch, `pointermove` fires on tap and would make the
 * image jump under the finger.
 */
export function usePointerParallax({ strength = 14 } = {}) {
    const travel = useTravel();
    const ref = useRef(null);

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    const config = { stiffness: 140, damping: 24, mass: 0.6 };
    const x = useSpring(rawX, config);
    const y = useSpring(rawY, config);

    const handlers = travel
        ? {
              onPointerMove: (event) => {
                  if (event.pointerType !== "mouse" || !ref.current) return;

                  const bounds = ref.current.getBoundingClientRect();
                  const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
                  const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

                  rawX.set(offsetX * strength * 2);
                  rawY.set(offsetY * strength * 2);
              },
              onPointerLeave: () => {
                  rawX.set(0);
                  rawY.set(0);
              },
          }
        : {};

    return { ref, x, y, handlers, travel };
}

/** Slow vertical drift for hero artwork, so a still screenshot stays alive. */
export function useFloat({ distance = 10, duration = 7 } = {}) {
    const travel = useTravel();

    if (!travel) return {};

    return {
        animate: { y: [0, -distance, 0] },
        transition: { duration, repeat: Infinity, ease: "easeInOut" },
    };
}
