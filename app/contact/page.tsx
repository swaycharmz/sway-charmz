"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contactCards = [
  {
    title: "Bookings",
    description:
      "Live performances, concerts, festivals, private events and appearances.",
    email: "swaycharmzmusic@gmail.com",
    label: "Email for bookings",
  },
  {
    title: "Business",
    description:
      "Brand partnerships, creative opportunities and commercial enquiries.",
    email: "charmzrecords@gmail.com",
    label: "Business enquiries",
  },
  {
    title: "Media",
    description:
      "Interviews, press features, promotional opportunities and media enquiries.",
    email: "swaycharmzmusic@gmail.com",
    label: "Media enquiries",
  },
];

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/charmz4theradio/",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@charmz4theradio",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@charmz4theradio",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/6Q9oEnPjaITf3tqqjY9mIM",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-700/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gray-500 transition hover:text-red-500"
          >
            <span>←</span>
            Back Home
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-4xl"
        >
          <p className="uppercase tracking-[0.5em] text-red-600">
            Get In Touch
          </p>

          <h1 className="mt-6 font-[family:var(--font-anton)] text-6xl leading-[0.95] md:text-8xl">
            LET&apos;S CREATE
            <br />
            SOMETHING
            <br />
            UNFORGETTABLE.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            For bookings, collaborations, media enquiries, business
            opportunities or anything Sway Charmz related, get in touch.
          </p>
        </motion.section>

        {/* Contact cards */}
        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:border-red-600/50 hover:bg-white/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-600/20 bg-red-600/10 text-xl text-red-500">
                ✦
              </div>

              <h2 className="mt-8 font-[family:var(--font-anton)] text-3xl">
                {card.title}
              </h2>

              <p className="mt-4 min-h-[80px] leading-7 text-gray-400">
                {card.description}
              </p>

              <a
                href={`mailto:${card.email}`}
                className="mt-8 inline-flex items-center gap-2 text-sm text-white transition group-hover:text-red-500"
              >
                {card.email}
                <span>↗</span>
              </a>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-600">
                {card.label}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Direct email CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-red-600/20 bg-red-600/[0.06] p-8 md:p-12"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                Direct Contact
              </p>

              <h2 className="mt-4 font-[family:var(--font-anton)] text-4xl md:text-5xl">
                HAVE AN IDEA?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                Send an email and let&apos;s talk about it.
              </p>
            </div>

            <a
              href="mailto:charmzrecords@gmail.com"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 font-semibold transition hover:bg-red-500"
            >
              Send Email
              <span>↗</span>
            </a>
          </div>
        </motion.section>

        {/* Socials */}
        <section className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-gray-500">
              Follow
            </p>

            <h2 className="mt-4 font-[family:var(--font-anton)] text-5xl md:text-6xl">
              THE JOURNEY.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-full border border-white/10 px-6 py-3 text-sm transition hover:border-red-600 hover:bg-red-600"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Closing */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-white/10 pt-16"
        >
          <p className="text-center text-sm uppercase tracking-[0.45em] text-gray-600">
            Sway Charmz
          </p>

          <h2 className="mt-5 text-center font-[family:var(--font-anton)] text-4xl md:text-6xl">
            SHOOT FOR THE STARS.
          </h2>
        </motion.section>
      </div>
    </main>
  );
}