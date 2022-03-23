import operate from '../logic/operate';

test('adds 1 + 2 to equal 3 ', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('extraction 1 - 2 to equal -1 ', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

test('multiply 2 x 5 to equal 10 ', () => {
  expect(operate(2, 5, 'x')).toBe('10');
});

test('divide 5 ÷ 2 to equal -1 ', () => {
  expect(operate(5, 2, '÷')).toBe('2.5');
});

test('mod 5 % 2 to equal -1 ', () => {
  expect(operate(5, 2, '%')).toBe('1');
});