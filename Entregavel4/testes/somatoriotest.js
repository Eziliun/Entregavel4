const somatorio = require('../funcoes/somatorio');

test('Resultado de 10 + 20 + 30 + 40', () => {
  expect(somatorio([10,20,30,40])).toBe(100);
});

test('Resultado de 4 + 3 + 2 + 1', () => {
    expect(somatorio([4, 3, 2, 1])).toBe(10);
  });