module.exports = (descricao) => {
  const resultados = [];

  const ultimoResultadoVisto = () => resultados.length - 1;

  const getDescricao = () => descricao;

  const getResultados = () => [...resultados];

  const anota = (resultado) => {
    if (resultados.length === 0 || resultados[ultimoResultadoVisto()].getParticipante() !== resultado.getParticipante()) {
      resultados.push(resultado);
    }
  };

  const getVencedor = () => [...resultados].sort((a, b) => b.getMetrica() - a.getMetrica())[0].getParticipante();

  return {
    ultimoResultadoVisto,
    getDescricao,
    getResultados,
    anota,
    getVencedor,
  };
};
