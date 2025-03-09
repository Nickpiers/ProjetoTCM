import React, { useState } from "react";
import { ACOES_B3 } from "../controller/acoesB3";
import { filtraAcoes } from "../controller/commonController";

export const SelectBar = ({ checkedItems = [], adicionaCard }) => {
  const [busca, setBusca] = useState("");

  const acoesFiltradas = filtraAcoes(ACOES_B3, busca);
  const itemIsChecked = (ticker) => {
    return checkedItems.includes(ticker);
  };

  return (
    <div className="d-flex flex-column w-100">
      <input
        type="text"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        className="bg-white text-black w-full"
      />
      <div className="max-h-40 overflow-y-auto border border-gray-300 rounded">
        <ul>
          {acoesFiltradas.map((acao, index) => (
            <li
              key={index}
              className="p-2 border-b last:border-none"
              onClick={() => adicionaCard(acao.ticker)}
            >
              <div className="flex justify-between items-center">
                <span>{`${acao.nome} (${acao.ticker})`}</span>
                <input type="checkbox" checked={itemIsChecked(acao.ticker)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
