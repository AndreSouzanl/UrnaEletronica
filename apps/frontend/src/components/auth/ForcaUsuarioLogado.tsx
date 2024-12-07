"use client";

import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function ForcaUsuarioLogado({ children }: any) {
  const { usuario } = useContext(ContextoAutenticacao);
  const router = useRouter();

  useEffect(() => {
    if (usuario === null) {
      return router.push("/auth");
    }
  }, [usuario, router]);

  return usuario ? children : null;
}
