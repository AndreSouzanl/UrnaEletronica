"use client";
import Candidato from "@/data/model/candidato";

export interface ListaCandidatosProps {
  candidatos: Candidato[];
  selecionarCandidato?: (candidato: Candidato) => void;
  excluirCandidato?: (candidato: Candidato) => void;
}

export default function ListaCandidatos(props: ListaCandidatosProps) {
  function renderizarItens() {
    const componentes = [];

    for (let i = 0; i < props.candidatos.length; i++) {
      const candidato = props.candidatos[i];
      componentes.push(
        <div key={candidato.id} className="bg-zinc-800 p-5 rounded-md">
          <h2>
            {candidato.nome} ({candidato.partido})
          </h2>
          <p>{candidato.numero}</p>
          <p>{candidato.descricao}</p>
          <div className="flex py-5 gap-2">
            <button
              className="botao azul"
              onClick={() => props.selecionarCandidato?.(candidato)}
            >
              Selecionar
            </button>
            <button
              className="botao vermelho"
              onClick={() => props.excluirCandidato?.(candidato)}
            >
              Excluir
            </button>
          </div>
        </div>
      );
    }
    return componentes;
  }
  return <div className=" flex flex-col gap-5">{renderizarItens()}</div>;
}
