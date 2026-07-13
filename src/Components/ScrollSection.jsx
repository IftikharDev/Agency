import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const EFFECTS = {
  /** Grows into view, gently shrinks as you leave */
  grow: {
    scale: [0.9, 1, 0.94],
    opacity: [0.35, 1, 0.55],
  },
  /** Starts slightly large, settles, then shrinks away */
  shrink: {
    scale: [1.06, 1, 0.88],
    opacity: [0.45, 1, 0.4],
  },
  /** Soft fade in / out with almost no scale */
  fade: {
    scale: [0.98, 1, 0.98],
    opacity: [0.25, 1, 0.35],
  },
  /** Hero: full size at top, shrinks + fades as you scroll down */
  hero: {
    scale: [1, 1, 0.85],
    opacity: [1, 1, 0.35],
  },
};

/**
 * Scroll-linked scale + opacity for page sections.
 * effect: "grow" | "shrink" | "fade" | "hero"
 */
export default function ScrollSection({
  children,
  effect = "grow",
  className = "",
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const config = EFFECTS[effect] || EFFECTS.grow;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55, 1],
    [config.scale[0], config.scale[1], config.scale[1], config.scale[2]]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.65, 1],
    [config.opacity[0], config.opacity[1], config.opacity[1], config.opacity[2]]
  );

  if (reduceMotion) {
    return (
      <div ref={ref} className={`scroll-section ${className}`.trim()}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`scroll-section ${className}`.trim()}
      style={{ scale, opacity }}
    >
      {children}
    </motion.div>
  );
}
