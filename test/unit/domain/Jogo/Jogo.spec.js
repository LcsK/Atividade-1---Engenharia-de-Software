const Jogo = require('../../../../src/domain/jogo');

// Third components
const Participante = require('../../../../src/domain/participante');
const Resultado = require('../../../../src/domain/resultado');

describe('Jogo', () => {
  describe('um resultado é adicionado em um jogo', () => {
    it('deve retornar apenas este resultado', () => {
      // setup
      const jogo = Jogo('Test Description');
      const participante = Participante(1, 'Nome test');
      const resultado = Resultado(participante, 5.4);

      // execution
      jogo.anota(resultado);
      const validation = jogo.getResultados();

      // assertion
      expect(validation.length).toEqual(1);
    });
  });
  describe('2 resultados do mesmo participante são adicionados', () => {
    // setup
    const jogo = Jogo('Test Description');
    const participante = Participante(1, 'Nome test');
    const resultado1 = Resultado(participante, 5.4);
    const resultado2 = Resultado(participante, 5.5);

    // execution
    jogo.anota(resultado1);
    jogo.anota(resultado2);
    const validation = jogo.getResultados();

    // assertion
    it('somente um restultado deve ser computado', () => {
      expect(validation.length).toEqual(1);
    });
    it('o resultado ignorado é o último', () => {
      expect(validation[0].getMetrica()).toEqual(5.4);
    })
  });
  describe('resultados com metricas diferentes foram adicionados', () => {
    it('retorna o participante vencedor', () => {
      // setup
      const jogo = Jogo('kaspws');
      const participante1 = Participante(123, 'Cleber');
      const participante2 = Participante(321, 'Rebelc');
      const resultado1 = Resultado(participante1, 100);
      const resultado2 = Resultado(participante2, 101);

      // execution
      jogo.anota(resultado1);
      jogo.anota(resultado2);
      const vencedor = jogo.getVencedor();

      // assertion
      expect(vencedor.getId()).toEqual(321);
    });
  });
});
