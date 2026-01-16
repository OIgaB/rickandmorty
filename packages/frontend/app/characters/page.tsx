import Image from "next/image";
import Link from "next/link";
import CharactersClient from "./characters-client";

export default function CharacterListPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <Image
          src="/logo.png"
          alt="Rick and Morty logo"
          width={800}
          height={244}
          priority
        />
        <Link className={"link active"} href="/">
          Home
        </Link>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black">
            Meet Rick & Morty Characters
          </h1>
          <CharactersClient />;
        </div>
      </main>
    </div>
  );
}
