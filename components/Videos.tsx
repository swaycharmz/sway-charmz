import FadeIn from "./FadeIn";
const videos = [
  {
    title: "Official Music Video",
    type: "Music Video",
  },
  {
    title: "Behind The Scenes",
    type: "Studio",
  },
  {
    title: "Live Performance",
    type: "Performance",
  },
];

export default function Videos() {
  return (
    <FadeIn>
    <section
      id="videos"
      className="bg-black py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="uppercase tracking-[0.4em] text-red-600">
          Videos
        </p>

        <h2 className="mt-5 font-[family:var(--font-anton)] text-5xl">
          Watch.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {videos.map((video) => (
            <div
              key={video.title}
              className="group cursor-pointer"
            >

              <div className="aspect-video rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-300 group-hover:border-red-600">

                <div className="flex h-full items-center justify-center">

                  <div className="rounded-full bg-red-600 p-5 transition group-hover:scale-110">
                    ▶
                  </div>

                </div>

              </div>

              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-red-600">
                {video.type}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {video.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  
  </FadeIn>
  );
}