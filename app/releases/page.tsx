import Image from "next/image";
import { releases } from "../data/releases";

export default function ReleasesPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="uppercase tracking-[0.4em] text-red-600">
          Discography
        </p>

        <h1 className="mt-5 font-[family:var(--font-anton)] text-6xl">
          Every Release.
        </h1>

        <p className="mt-6 max-w-2xl text-gray-400">
          Every song tells a different story. Explore the music and follow the journey.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {releases.map((release) => (

            <div
              key={release.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-2 hover:border-red-600"
            >

              <div className="relative aspect-square">

                <Image
                  src={release.cover}
                  alt={release.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <p className="text-sm uppercase tracking-[0.3em] text-red-500">
                  {release.year}
                </p>

                <h2 className="mt-3 font-[family:var(--font-anton)] text-3xl">
                  {release.title}
                </h2>

                <p className="mt-4 text-gray-400">
                  {release.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={release.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-red-600 px-5 py-2 transition hover:bg-red-700"
                  >
                    Spotify
                  </a>

                  <a
                    href={release.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white px-5 py-2 transition hover:bg-white hover:text-black"
                  >
                    Apple Music
                  </a>

                  <a
                    href={release.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white px-5 py-2 transition hover:bg-white hover:text-black"
                  >
                    YouTube
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}