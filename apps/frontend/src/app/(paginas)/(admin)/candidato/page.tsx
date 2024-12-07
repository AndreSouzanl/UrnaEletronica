"use client";
import ForcaUsuarioLogado from "@/components/auth/ForcaUsuarioLogado";
import FormularioCandidato from "@/components/candidato/FormularioCandidato";
import ListaCandidatos from "@/components/candidato/ListaCandidatos";
import candidatosIniciais from "@/data/constants/candidatos";
import Candidato from "@/data/model/candidato";
import { useState } from "react";

export default function PaginaCandidato() {
  const [candidatoSelecionados, setCandidatoSelecionado] =
    useState<Partial<Candidato> | null>(null);

  const [candidatos, setCandidatos] = useState(candidatosIniciais);

  function excluirCandidato(candidato: Candidato) {
    setCandidatos(candidatos.filter((c) => c.id !== candidato.id));
  }

  function salvarCandidato(candidato: Partial<Candidato>) {
    if (candidato.id) {
      setCandidatos(
        candidatos.map((c) =>
          c.id === candidato.id ? (candidato as Candidato) : c
        )
      );
    } else {
      const id = Math.random();
      setCandidatos([...candidatos, { ...candidato, id } as Candidato]);
    }
    setCandidatoSelecionado(null);
  }
  return (
    <ForcaUsuarioLogado>
      {candidatoSelecionados ? (
        <FormularioCandidato
          candidato={candidatoSelecionados}
          salvarCandidato={salvarCandidato}
          cancelar={() => setCandidatoSelecionado(null)}
        />
      ) : (
        <div className="flex flex-col gap-5">
          <button
            className="botao azul self-end"
            onClick={() => setCandidatoSelecionado({})}
          >
            Novo Candidato
          </button>
          <ListaCandidatos
            candidatos={candidatos}
            selecionarCandidato={setCandidatoSelecionado}
            excluirCandidato={excluirCandidato}
          />
        </div>
      )}
    </ForcaUsuarioLogado>
  );
}
