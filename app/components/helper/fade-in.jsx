"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  fullWidth = false,
}) {
  const reduced = useReducedMotion();

  const offsets = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 32 },
    right: { y: 0, x: -32 },
    none: { y: 0, x: 0 },
  };

  const { x, y } = offsets[direction] ?? offsets.up;

  return (
    <motion.div
      className={className}
      style={fullWidth ? { width: "100%" } : undefined}
      initial={reduced ? { opacity: 1 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}
