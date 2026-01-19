import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.webp"
          alt="Running Rick"
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex w-full max-w-3xl flex-col items-center gap-10 rounded-2xl bg-white px-8 py-24 text-center shadow-xl sm:px-14">
          <Image
            src="/logo.png"
            alt="Rick and Morty logo"
            width={520}
            height={160}
            priority
            className="w-full max-w-md"
          />
          <h1 className="max-w-xl lg:text-4xl sm:text-2xl text-xl font-semibold leading-tight tracking-tight text-zinc-900 ">
            Your Gateway to the Galactic Federation Database
          </h1>
          <p className="max-w-lg lg:text-xl sm:text-lg text-base text-zinc-600 ">
            Learn about the characters, their origins, and the episodes they
            appeared in.
          </p>
          <nav aria-label="Primary">
            <Link
              href="/characters"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
            >
              Explore characters
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
