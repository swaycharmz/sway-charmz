"use client";

import { videos } from "../data/videos";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="relative flex h-[55vh] items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-black to-black" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <p className="uppercase tracking-[0.6em] text-red-600">
            Visuals
          </p>

          <h1 className="mt-6 font-[family:var(--font-anton)] text-6xl md:text-8xl">
            VIDEOS.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-gray-400">
            Official music videos, live performances and visual storytelling.
          </p>
        </motion.div>

      </section>

      {/* Videos */}

      <section className="mx-auto max-w-7xl px-8 py-24">

        <div className="space-y-16">

          {videos.map((video, index) => (

            <motion.a
              key={video.id}
              href={video.youtube}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="group grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-2"
            >

              <div className="relative aspect-video overflow-hidden rounded-2xl">

                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/10" />

                {/* Play Button */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600/90 text-3xl backdrop-blur"
                  >
                    ▶
                  </motion.div>

                </div>

              </div>

              <div className="flex flex-col justify-center">

                <p className="uppercase tracking-[0.3em] text-red-600">
                  {video.type}
                </p>

                <h2 className="mt-5 font-[family:var(--font-anton)] text-5xl">
                  {video.title}
                </h2>

                <p className="mt-6 text-gray-500">
                  {video.year}
                </p>

                <div className="mt-10 inline-flex w-fit rounded-full border border-red-600 px-6 py-3 transition group-hover:bg-red-600">
                  Watch Now →
                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </section>

    </main>
  );
}