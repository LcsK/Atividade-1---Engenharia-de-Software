module.exports = (participante, metrica) => {
  const getParticipante = () => participante;
  const getMetrica = () => metrica;

  return {
    getParticipante,
    getMetrica,
  }
};
