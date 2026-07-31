"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Logo */}

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/logos/redlogowotbg.png"
              alt="Sway Charmz"
              width={160}
              height={160}
              priority
            />
          </motion.div>

          {/* Artist Name */}

          <motion.h1
            className="mt-8 font-[family:var(--font-anton)] text-5xl tracking-widest"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            SWAY CHARMZ
          </motion.h1>

          {/* Loading */}

          <p className="mt-6 uppercase tracking-[0.5em] text-gray-500">
            Loading
          </p>

          {/* Loading Bar */}

          <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">

            <motion.div
              className="h-full bg-red-600"
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}