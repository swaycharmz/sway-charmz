"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  image: string | null;
  title: string;
  onClose: () => void;
};

export default function Lightbox({
  image,
  title,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.85 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <Image
              src={image}
              alt={title}
              width={1400}
              height={900}
              className="w-full rounded-3xl object-contain"
            />

            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 backdrop-blur hover:bg-red-600 transition"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}