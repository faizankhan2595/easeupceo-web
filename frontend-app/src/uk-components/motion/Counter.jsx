"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Counter({ value, suffix = "", prefix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(
        latest.toLocaleString("en-GB", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      );
    });
    return unsubscribe;
  }, [springValue, decimals]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
