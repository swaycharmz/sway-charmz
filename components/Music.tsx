"use client";

import { releases } from "@/app/data/releases";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import FadeIn from "./FadeIn";

export default function Music() {
  const latestRelease = releases[0];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-100, 100], [8, -8])
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-100, 100], [-8, 8])
  );

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <FadeIn>
      <section
        id="music"
        className="min-h-screen bg-black flex items-center text-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 md:grid-cols-2">

          {/* Album Cover */}
          <div className="flex flex-col items-center gap-8">

            <motion.a
              href="https://open.spotify.com/track/7egRajWsLrtJYil0qXWv7T?si=6d6f2f07957a4879"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.04 }}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1200,
              }}
              className="group relative aspect-square w-full max-w-md cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
            >
              <Image
           src={latestRelease.cover}
           alt={latestRelease.title}
           fill
           className="object-cover transition duration-700 group-hover:scale-110"
/>
         <motion.div
  className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
  animate={{
    x: ["-150%", "350%"],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatDelay: 4,
    ease: "easeInOut",
  }}
  style={{
    transform: "skewX(-25deg)",
  }}
/>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />

              {/* Red Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Glow Underneath */}
              <div className="absolute -bottom-10 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-red-600/40 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.a>

            {/* Replace this later with your logo */}
            <Image
              src="/images/logos/redlogowotbg.png"
              alt="Sway Charmz Logo"
              width={100}
              height={100}
              className="opacity-80"
            />

          </div>

          {/* Music Info */}
          <div className="flex flex-col justify-center">

            <p className="uppercase tracking-[0.4em] text-red-600">
              Latest Release
            </p>

            <h2 className="mt-5 font-[family:var(--font-anton)] text-5xl md:text-7xl">
             {latestRelease.title}
            </h2>  

           <p className="mt-6 max-w-lg leading-8 text-gray-400">
              {latestRelease.description}
          </p>
          
           <div className="mt-10 flex flex-wrap gap-4">
  <a
    href={latestRelease.spotify}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
  >
    Spotify
  </a>

  <a
    href={latestRelease.apple}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
  >
    Apple Music
  </a>

  <a
    href={latestRelease.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
  >
    YouTube
  </a>
</div>

<a
  href="/releases"
  className="mt-8 inline-block text-red-500 font-semibold transition hover:text-red-400"
>
  View Full Discography →
</a>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}