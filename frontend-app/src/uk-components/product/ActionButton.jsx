import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SPRING, useTravel } from "./motion";

const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

const styles = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary:
        "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50",
};

const MotionLink = motion.create(Link);

/* Lift on hover, settle on press. Driven by variant names rather than
   inline objects so the sheen below can ride the same rest/hover state. */
const lift = {
    rest: { y: 0, scale: 1, transition: SPRING },
    hover: { y: -2, scale: 1.02, transition: SPRING },
    tap: { y: 0, scale: 0.97, transition: SPRING },
};

const sheen = {
    rest: { x: "-100%" },
    hover: { x: "100%", transition: { duration: 0.7, ease: "easeInOut" } },
};

/**
 * One button style for the whole UK marketing surface.
 * Renders a router Link for `to`, an anchor for `href`, a button otherwise.
 */
export function ActionButton({ variant = "primary", to, href, children, className = "", ...props }) {
    const travel = useTravel();

    const content = (
        <>
            {travel ? (
                <motion.span
                    aria-hidden="true"
                    variants={sheen}
                    className={`pointer-events-none absolute inset-0 bg-linear-to-r ${
                        variant === "primary"
                            ? "from-transparent via-white/25 to-transparent"
                            : "from-transparent via-neutral-900/[0.06] to-transparent"
                    }`}
                />
            ) : null}

            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </>
    );

    const shared = {
        className: `${base} ${styles[variant]} ${className}`,
        initial: "rest",
        animate: "rest",
        ...(travel ? { whileHover: "hover", whileTap: "tap", variants: lift } : {}),
        ...props,
    };

    if (to) {
        return (
            <MotionLink to={to} {...shared}>
                {content}
            </MotionLink>
        );
    }

    if (href) {
        return (
            <motion.a href={href} {...shared}>
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button type="button" {...shared}>
            {content}
        </motion.button>
    );
}
