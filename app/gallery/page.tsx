import { galleryImages } from "@/lib/galleryData";
import Image from "next/image";
import Link from "next/link";


export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">

      <div className="mx-auto max-w-7xl">

        <p className="uppercase tracking-[0.4em] text-red-600">
          Gallery
        </p>

        <h1 className="mt-5 font-[family:var(--font-anton)] text-6xl">
          Every Moment.
        </h1>

        <p className="mt-6 max-w-2xl text-gray-400">
          Behind every song is a story. Explore photos from performances,
          studio sessions and everything in between.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((image) => (
  <Link
    key={image.slug}
    href={`/gallery/${image.slug}`}
    className="group relative aspect-square overflow-hidden rounded-3xl"
  >
              <Image
  src={image.src}
  alt={image.title}
  fill
  className="object-cover transition duration-500 group-hover:scale-110"
/>

              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}