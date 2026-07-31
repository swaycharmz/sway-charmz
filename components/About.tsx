"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="relative min-h-screen overflow-hidden text-white"
      >

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/performance.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-8 py-32">

         <motion.p
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
  className="uppercase tracking-[0.4em] text-red-600"
>
            ABOUT
          </motion.p>

          <motion.h2
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{
          delay: 0.3,
          duration: 0.8,
  }}
  className="mt-6 font-[family:var(--font-anton)] text-6xl"
>
  Built Different.
</motion.h2>

          <motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: 0.5,
    duration: 0.8,
  }}
  className="mt-10 max-w-3xl text-lg leading-9 text-gray-400"
>
  Sway Charmz is an independent artist blending music,
  fashion, and storytelling into one creative universe.
  Every release, performance, and project pushes the vision
  forward—creating experiences that go beyond simply making songs.
</motion.p>

        </div>

      </section>
    </FadeIn>
  );
}