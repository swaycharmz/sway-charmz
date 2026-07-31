"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const timeline = [
  {
    year: "2025",
    title: "The Beginning",
    text: "Released projects including Angela + Shakabula, CHÉRIE, Déjà Vu, Charmz and Enchanted, laying the foundation for the Sway Charmz sound.",
  },
  {
    year: "2026",
    title: "Breakthrough",
    text: "Released Nabeelah (Dancefloor) alongside new projects, expanding the catalog and pushing the vision to a wider audience.",
  },
];

const stats = [
  { value: "9+", label: "Official Releases" },
  { value: "25+", label: "Songs Released" },
  { value: "2025", label: "Debut Year" },
  { value: "🇳🇬", label: "Nigeria" },
];

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="relative overflow-hidden text-white"
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Decorative Glow */}
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">

          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.6em] text-red-600"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-6 font-[family:var(--font-anton)] text-5xl leading-none md:text-7xl"
          >
            THE STORY
            <br />
            BEHIND THE SOUND.
          </motion.h2>

          {/* Story */}
          <div className="mt-20 grid gap-16 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-[family:var(--font-anton)] text-3xl">
                Sway Charmz
              </h3>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                Sway Charmz is a Nigerian artist blending Afrosounds,
                Amapiano, Street Pop and melodic storytelling into a sound
                that feels modern while staying rooted in authentic
                expression.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                Every project represents another chapter in a growing
                creative journey—from early releases to larger records,
                performances and collaborations. The goal isn't simply to
                make music, but to build a lasting artistic legacy through
                sound, visuals and storytelling.
              </p>

              <blockquote className="mt-12 border-l-4 border-red-600 pl-6 italic text-xl text-white">
                "Music isn't just something I create. It's how I tell stories,
                connect with people and leave something meaningful behind."
              </blockquote>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-[family:var(--font-anton)] text-3xl">
                Journey
              </h3>

              <div className="mt-10 space-y-10 border-l border-white/20 pl-8">

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[42px] top-2 h-4 w-4 rounded-full bg-red-600" />

                    <p className="text-sm uppercase tracking-[0.3em] text-red-500">
                      {item.year}
                    </p>

                    <h4 className="mt-2 text-2xl font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-3 leading-8 text-gray-400">
                      {item.text}
                    </p>
                  </motion.div>
                ))}

              </div>
            </motion.div>

          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:border-red-600/50 hover:bg-white/10"
              >
                <h3 className="font-[family:var(--font-anton)] text-5xl text-red-500">
                  {stat.value}
                </h3>

                <p className="mt-3 uppercase tracking-[0.2em] text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </FadeIn>
  );
}