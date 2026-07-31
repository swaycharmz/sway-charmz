import Image from "next/image";
import { galleryImages } from "@/lib/galleryData";
import { notFound } from "next/navigation";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ image: string }>;
}) {
  const { image } = await params;

  const photo = galleryImages.find(
    (item) => item.slug === image
  );

  if (!photo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="mx-auto max-w-5xl">

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">

          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-cover"
          />

        </div>

        <h1 className="mt-10 text-5xl font-bold">
          {photo.title}
        </h1>

        <p className="mt-4 text-gray-400">
          📍 {photo.location}
        </p>

        <p className="mt-2 text-gray-500">
          {photo.date}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          {photo.description}
        </p>

      </div>

    </main>
  );
}