import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Music", href: "#music" },
  { name: "Gallery", href: "/gallery" },
  { name: "Videos", href: "#videos" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-6 z-50 flex justify-center px-6">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-8 py-4 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,0,0,0.08)]">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-4"
        >
          <Image
            src="/images/logos/redlogowotbg.png"
            alt="Sway Charmz Logo"
            width={50}
            height={50}
            className="transition duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
          />

          <span className="font-[family:var(--font-anton)] text-xl tracking-[0.25em]">
            SWAY CHARMZ
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.name} className="group">
              <Link
                href={link.href}
                className="relative text-xs uppercase tracking-[0.35em] text-gray-300 transition duration-300 hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}