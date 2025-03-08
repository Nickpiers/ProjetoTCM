import React, { useState } from "react";
import { Draggable } from "./Draggable";
import {
  PASSO_POSICAO_ATIVO,
  POSICAO_INICIAL_X,
  POSICAO_INICIAL_Y,
} from "../controller/ativosConstants";
import { calculaPosicaoY } from "../controller/commonController";
import { SelectBar } from "./SelectBar";

export const ProjetoTCM = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const adicionaCard = (ticker) => {
    setCheckedItems((prev) =>
      prev.includes(ticker)
        ? prev.filter((item) => item !== ticker)
        : [...prev, ticker]
    );
  };

  return (
    <>
      {console.warn("checkedItems", checkedItems)}
      <div className="flex w-400 flex-row items-start">
        <SelectBar checkedItems={checkedItems} adicionaCard={adicionaCard} />
        {checkedItems.map((item, index) => (
          <Draggable
            key={index}
            initialPos={{
              x: POSICAO_INICIAL_X,
              y: calculaPosicaoY(POSICAO_INICIAL_Y, PASSO_POSICAO_ATIVO, index),
            }}
            texto={item}
          />
        ))}
      </div>
    </>
  );
};
