import Image from "next/image";
import Link from "next/link";

import CharactersClient from "./characters-client";

export default function CharacterListPage() {
  return (
    <main className="relative min-h-screen font-sans">
      <div className="fixed inset-0 -z-10">
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

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <header className="mb-12 flex flex-col items-center rounded-2xl bg-white/90 p-8 text-center shadow-xl backdrop-blur-md sm:p-12">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm font-medium text-zinc-600 hover:text-amber-600"
          >
            ← Back to Home
          </Link>

          <Image
            src="/logo.png"
            alt="Rick and Morty logo"
            width={400}
            height={120}
            priority
            className="mb-8 w-full max-w-sm"
          />

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Character Universe
          </h1>

          <p className="max-w-2xl text-lg text-zinc-600">
            Rick and Morty is an American adult animated science fiction sitcom
            created by Justin Roiland and Dan Harmon. The series follows the
            misadventures of cynical mad scientist Rick Sanchez and his
            good-hearted but fretful grandson Morty Smith.
          </p>
        </header>

        <section aria-label="Characters list">
          <CharactersClient />
        </section>
      </div>
    </main>
  );
}
