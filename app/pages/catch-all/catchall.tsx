import { Link } from "react-router";
import type { Route } from "./+types/catchall";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 - Stranica nije pronađena | DJ Vrana" },
    { name: "description", content: "Nažalost, stranica koju tražite ne postoji." },
  ];
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0a0a0a] text-white font-sans text-center">
      <h1 className="text-[4rem] md:text-[6rem] font-bold bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent mb-4">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Stranica nije pronađena
      </h2>
      <p className="text-xl text-[#a0a0a0] mb-8 max-w-lg">
        Nažalost, stranica koju tražite ne postoji, obrisana je ili je premještena.
      </p>
      
      <Link 
        to="/djvrana-web" 
        className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
      >
        Vrati se na početnu
      </Link>
    </main>
  );
}
