"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 8,
  delay: Math.random() * 5,
}));

export default function MovingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"

          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
          }}

          animate={{
            opacity: [0.15, 1, 0.15],
            y: [-15, 15, -15],
            scale: [1, 1.6, 1],
          }}

          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
}