import React from "react";
import { Draggable } from "./Draggable";

export const ProjetoTCM = () => {
  const pos1 = { x: 180, y: 160 };
  const pos2 = { x: 180, y: 290 };
  const pos3 = { x: 180, y: 420 };
  const pos4 = { x: 180, y: 550 };
  const pos5 = { x: 180, y: 680 };

  return (
    <>
      <Draggable initialPos={pos1} texto="Santander" />
      <Draggable initialPos={pos2} texto="Bradesco" />
      <Draggable initialPos={pos3} texto="Itaú" />
      <Draggable initialPos={pos4} texto="Nubank" />
      <Draggable initialPos={pos5} texto="C6" />
    </>
  );
};
