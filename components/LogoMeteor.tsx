"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LogoMeteor() {
  const [shoot, setShoot] = useState(false);

  const fireMeteor = () => {
    if (shoot) return;

    setShoot(true);

    setTimeout(() => {
      setShoot(false);
    }, 1200);
  };

  return (
    <div className="relative flex justify-center">

      {/* Red Glow */}
      <motion.div
        className="absolute h-48 w-48 rounded-full bg-red-600/20 blur-3xl"
        animate={{
          scale: shoot ? 1.35 : 1,
          opacity: shoot ? 0.9 : 0.35,
        }}
        transition={{
          duration: 0.35,
        }}
      />

      {/* Clickable Logo */}
      <motion.div
        onClick={fireMeteor}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          scale: shoot ? 1.08 : 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative cursor-pointer"
      >
        <Image
          src="/images/logos/redlogowotbg.png"
          alt="Sway Charmz"
          width={250}
          height={250}
          priority
          className="drop-shadow-[0_0_35px_rgba(220,38,38,0.3)]"
        />
      </motion.div>

      <AnimatePresence>
        {shoot && (
          <motion.div
            initial={{
              opacity: 1,
              x: 30,
              y: -20,
            }}
            animate={{
              x: 700,
              y: -260,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-12"
          >
            {/* Tail */}
            <div
              className="absolute top-1/2 h-[2px] w-36 -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(to left, white, rgba(255,255,255,.5), transparent)",
              }}
            />

            {/* Meteor */}
            <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_20px_white]" />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}