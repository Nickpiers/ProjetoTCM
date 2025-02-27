import React, { useState } from "react";
import { ACOES_B3 } from "../controller/acoesB3";
import { filtraAcoes } from "../controller/commonController";

export const SelectBar = () => {
  const [busca, setBusca] = useState("");

  const acoesFiltradas = filtraAcoes(ACOES_B3, busca);

  return (
    <>
      <input
        type="text"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        className="bg-white text-black"
      />
      <ul>
        {acoesFiltradas.map((acao, index) => (
          <li key={index}>{`${acao.nome} (${acao.ticker})`}</li>
        ))}
      </ul>
    </>
  );
};
