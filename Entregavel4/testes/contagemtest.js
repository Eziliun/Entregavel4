const contagem = require('../funcoes/contagem');

test('A contagem de números até 100 deve ser 100', () => {
  expect(contagem(100)).toBe(100);
});
test('A contagem de números até 0 deve ser 0', () => {
    expect(contagem(0)).toBe(0);
  });