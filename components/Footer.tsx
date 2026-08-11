import FadeIn from "./FadeIn";
import Image from "next/image";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/charmz4theradio/",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@charmz4theradio",
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FadeIn>
      <footer className="border-t border-white/10 bg-[#050505] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16">

          {/* Top */}
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">

            <div>
              <Image
                src="/images/logos/redlogowotbg.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <h2 className="font-[family:var(--font-anton)] text-4xl tracking-wide">
                SWAY CHARMZ
              </h2>

              <p className="mt-4 max-w-sm leading-7 text-gray-400">
                A new generation of sound, style and vision.
                <br />
                Built for the future.
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-500">
                Connect
              </p>

              <ul className="space-y-3">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-red-500"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

            <p>© {year} Sway Charmz. All rights reserved.</p>

            <p>Shoot for the Stars ✦</p>

          </div>

        </div>
      </footer>
    </FadeIn>
  );
}