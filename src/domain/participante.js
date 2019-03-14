module.exports = (a, b) => {
  const nome = b || a;
  const id = b && a;

  const getId = () => id;
  const getNome = () => nome;
  
  return {
    getId,
    getNome,
  }
}