import React from "react";
import { Draggable } from "./Draggable";
import {
  ATIVOS,
  PASSO_POSICAO_ATIVO,
  POSICAO_INICIAL_X,
  POSICAO_INICIAL_Y,
} from "../controller/ativosConstants";
import { calculaPosicaoY } from "../controller/commonController";
import { SelectBar } from "./SelectBar";

export const ProjetoTCM = () => {
  return (
    <>
      <SelectBar />
      {ATIVOS.map((ativo, index) => (
        <Draggable
          key={index}
          initialPos={{
            x: POSICAO_INICIAL_X,
            y: calculaPosicaoY(POSICAO_INICIAL_Y, PASSO_POSICAO_ATIVO, index),
          }}
          texto={ativo}
        />
      ))}
    </>
  );
};
