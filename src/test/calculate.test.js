import calculate from '../logic/calculate';

test('if button is "AC" ', () => {
  const obj = { next: null, operation: null, total: null };
  expect(calculate({}, 'AC')).toStrictEqual(obj);
});

test('if button is number', () => {
  const obj = { next: '0', operation: null, total: null };
  expect(calculate(obj, '0')).toStrictEqual({});
});

test('if button is number', () => {
  const obj = { next: null, operation: null, total: null };
  expect(calculate(obj, '2')).toStrictEqual({
    next: '2',
    total: null,
  });
});
