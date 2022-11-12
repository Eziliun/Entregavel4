const MDCDeLista = require('../funcoes/mdc');

test('o MDC de 4, 12 e 36 deve ser 4', () => {
  expect(MDCDeLista([4, 12, 36])).toBe(4);
});

test('o MDC de 3, 4 e 5 deve ser 1', () => {
    expect(MDCDeLista([3, 4, 5])).toBe(1);
  });