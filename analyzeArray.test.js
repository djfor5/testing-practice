function analyzeArray(arr) {
  const obj = {};

  obj.average = arr.reduce((sum, current) => sum + current, 0) / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;

  return obj;
}

test("Standard test", () => { // eslint-disable-line no-undef
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ // eslint-disable-line no-undef
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
