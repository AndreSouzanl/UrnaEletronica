"use client";
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao";
import Link from "next/link";
import { useContext } from "react";

export default function Cabecalho() {
  const { usuario, logout } = useContext(ContextoAutenticacao);
  return (
    <header className=" flex justify-between items-center h-24 bg-zinc-950 p-5">
      <div className="flex justify-between items-center mx-auto max-w-7xl w-full">
        <h1 className="text-white text-2xl font-bold ml-5">Eleições 2025</h1>

        <nav className="flex items-center gap-5 mr-5">
          <Link href="/">Inicio</Link>
          {usuario !== null && (
            <>
              <Link href="/candidato">Candidatos</Link>
              <Link href="/eleitor">Eleitor</Link>
            </>
          )}

          {usuario === null ? (
            <Link href="/auth" className="botao azul">
              Login
            </Link>
          ) : (
            <button onClick={logout} className="botao vermelho">
              Sair
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
