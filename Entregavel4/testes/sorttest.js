const quicksort = require('../funcoes/sort');

test('o array passado deve ser ordenado corretamente em ordem crescente', () => {
  expect(quicksort([13, 47, 30, 45, 12])).toMatchObject([12, 13, 30, 45, 47]);
});

test('o array passado deve ser ordenado corretamente em ordem crescente', () => {
    expect(quicksort([13, 1, 4, 9])).toMatchObject([1, 4, 9, 13]);
  });