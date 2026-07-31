"use client";
import { motion } from "framer-motion";
import MovingStars from "./MovingStars";
import LogoMeteor from "./LogoMeteor";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-24 text-white">
      
      <MovingStars />
      

      {/* Background glow */}
<div className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]" />
      <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      {/* Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.09]"
        animate={{
          backgroundPosition: [
            "0px 0px",
            "70px 70px",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <motion.div
       className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       <div className="mb-10 flex justify-center">
  <LogoMeteor />
</div>
  
        <motion.h1
          className="font-[family:var(--font-anton)] text-7xl md:text-9xl lg:text-[10rem] uppercase leading-none tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          SWAY
          <br />
          CHARMZ
        </motion.h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
          A new generation of sound, style and vision.
          <br />
          Built for the future.
        </p>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
  href="#music"
  className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold shadow-[0_0_40px_rgba(220,38,38,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_0_60px_rgba(220,38,38,0.6)]"
>
  Tap In
</a>

       <a
  href="#about"
  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
>
  Explore
</a>
        </motion.div>
      </motion.div>
    </section>
  );
}