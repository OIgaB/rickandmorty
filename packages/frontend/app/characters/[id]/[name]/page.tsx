import Image from "next/image";
import Link from "next/link";

import CharacterClient from "./character-client";

type PageProps = {
  params: Promise<{
    id: string;
    name: string;
  }>;
};

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;

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

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <nav
          className="mb-8 flex gap-4 text-sm font-medium text-white/80"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/characters"
            className="hover:text-amber-400 transition-colors"
          >
            All Characters
          </Link>
          <span>/</span>
          <span className="text-amber-400">Profile</span>
        </nav>

        <CharacterClient id={id} />
      </div>
    </main>
  );
}
