"use client";

import Candidato from "@/data/model/candidato";
import { useState } from "react";

export interface FormularioCandidatoProps {
  candidato: Partial<Candidato>;
  salvarCandidato?: (candidato: Partial<Candidato>) => void;
  cancelar?: () => void;
}

export default function FormularioCandidato(props: FormularioCandidatoProps) {
  const [candidato, setCandidato] = useState<Partial<Candidato>>(
    props.candidato
  );

  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-4xl">Formulário de Candidato</h1>
      <div className="flex flex-col gap-1">
        <span>Nome:</span>
        <input
          type="text"
          value={candidato.nome}
          className="input"
          onChange={(e) => setCandidato({ ...candidato, nome: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span>Numero:</span>
        <input
          type="number"
          value={candidato.numero}
          className="input"
          onChange={(e) =>
            setCandidato({ ...candidato, numero: +e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <span>Partido:</span>
        <input
          type="text"
          value={candidato.partido}
          className="input"
          onChange={(e) =>
            setCandidato({ ...candidato, partido: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <span>Descrição:</span>
        <textarea
          className="input"
          onChange={(e) =>
            setCandidato({ ...candidato, descricao: e.target.value })
          }
        >
          {candidato.descricao}
        </textarea>
      </div>
      <div className="flex gap-3">
        <button className="botao azul" onClick={() => props.salvarCandidato?.(candidato)}>Salvar</button>
        <button className="botao cinza" onClick={props.cancelar}>Cancelar</button>
      </div>
    </div>
  );
}
