import analyzeArray from "./analyzeArray.js";

test("Standard test", () => { // eslint-disable-line no-undef
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ // eslint-disable-line no-undef
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
