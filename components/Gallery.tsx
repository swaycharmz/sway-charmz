"use client";

import Image from "next/image";
import { gallery } from "@/app/data/gallery";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <FadeIn>
      <section
        id="gallery"
        className="min-h-screen bg-black py-28 text-white"
      >
        <div className="mx-auto max-w-[1800px] px-3 md:px-6">

          {/* Heading */}

          <p className="uppercase tracking-[0.4em] text-red-600">
            Gallery
          </p>

          <div className="mt-4 flex items-end justify-between">

            <h2 className="font-[family:var(--font-anton)] text-5xl md:text-7xl">
              Moments.
            </h2>

            <p className="hidden text-sm uppercase tracking-[0.25em] text-white/40 md:block">
              {gallery.length} Photos
            </p>

          </div>

          {/* Gallery Grid */}

          <div className="mt-16 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

            {gallery.map((photo) => (

              <motion.a
                key={photo.id}
                href={photo.image}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: photo.id * 0.05,
                }}
                whileHover={{
                  y: -6,
           
           
                }}
                className="group block overflow-hidden rounded-xl"
              >

                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={1200}
                  height={1600}
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />

              </motion.a>

            ))}

          </div>

          {/* Button */}

          <div className="mt-16 text-center">

            <a
              href="/gallery"
              className="inline-block rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
              View Full Gallery
            </a>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}