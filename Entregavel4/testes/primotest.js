const num_primo = require('../funcoes/primos');

test('32 não é primo', () => {
  expect(num_primo(32)).toBe(false);
});

test('13 é primo', () => {
    expect(num_primo(13)).toBe(true);
  });