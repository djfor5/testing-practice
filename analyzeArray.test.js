import analyzeArray from "./analyzeArray.js";

/* eslint-disable no-undef */

test("Standard test", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

/* eslint-enable no-undef */
