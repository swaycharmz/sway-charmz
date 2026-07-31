"use client";

import { motion } from "framer-motion";

export default function ShootingStar() {
  return (
    <motion.div
      className="pointer-events-none absolute right-[12%] top-[18%] z-0"

      initial={{
        x: 120,
        y: -40,
        opacity: 0,
      }}

      animate={{
        x: -260,
        y: 130,
        opacity: [0, 1, 1, 0],
      }}

      transition={{
        duration: 1.4,
        repeat: Infinity,
        repeatDelay: 18,
        ease: "easeOut",
      }}
    >
      {/* Tail */}
      <div
        className="absolute right-0 top-1/2 h-[2px] w-28 -translate-y-1/2 rounded-full"
        style={{
          background:
            "linear-gradient(to left, white, rgba(255,255,255,.6), transparent)",
        }}
      />

      {/* Glow */}
      <div className="absolute left-0 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/30 blur-md" />

      {/* Star */}
      <div className="relative h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_white]" />
    </motion.div>
  );
}