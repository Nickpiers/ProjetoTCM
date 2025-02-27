export const calculaPosicaoY = (posicaoInicialY, passoPosicao, index) => {
  return posicaoInicialY + passoPosicao * index;
};

export const filtraAcoes = (acoes, busca) => {
  const buscaLower = busca.toLowerCase();

  return acoes.filter(
    ({ nome = "", ticker = "" }) =>
      nome.toLowerCase().includes(buscaLower) ||
      ticker.toLowerCase().includes(buscaLower)
  );
};
