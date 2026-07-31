import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">

        <div className="mb-8 flex justify-center">
  <Image
    src="/images/logos/redlogowotbg.png"
    alt="Sway Charmz Logo"
    width={140}
    height={140}
    className="object-contain"
  />
</div>

        <h1 className="text-5xl font-bold">
          404
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Looks like this page missed the beat.
        </p>

        <p className="mt-2 text-gray-500">
          Let's get you back on stage.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
        >
          Back Home
        </Link>

      </div>
    </main>
  );
}