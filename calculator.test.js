import Calculator from "./calculator.js";

/* eslint-disable no-undef */

test("1 + 2 equals 3", () => {
  expect(new Calculator().add(1, 2)).toBe(3);
});

test("'3' + 5 equals 8", () => {
  expect(new Calculator().add("3", 5)).toBe(8);
});

test("'4' + '6' equals 10", () => {
  expect(new Calculator().add("4", "6")).toBe(10);
});

test("2 - 1 equals 1", () => {
  expect(new Calculator().subtract(2, 1)).toBe(1);
});

test("2 x 3 equals 6", () => {
  expect(new Calculator().multiply(2, 3)).toBe(6);
});

test("3 / 2 equals 1.5", () => {
  expect(new Calculator().divide(3, 2)).toBe(1.5);
});

test("'3' / '2' equals 1.5", () => {
  expect(new Calculator().divide("3", "2")).toBe(1.5);
});

/* eslint-enable no-undef */
