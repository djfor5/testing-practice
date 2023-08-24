import caesarCipher from "./caesarCipher.js";

/* eslint-disable no-undef */

test("Standard test", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("Maintain correct letter case", () => {
  expect(caesarCipher("YyZz", 2)).toBe("AaBb");
});

test("Letter wrapping, shiftFactor greater than length of alphabet", () => {
  expect(caesarCipher("helloHELLO", 26 * 4 + 1)).toBe("ifmmpIFMMP");
});

test("Negative shiftFactor", () => {
  expect(caesarCipher("A", -1)).toBe("Z");
});

test("Letter wrapping, negative shiftFactor greater than length of alphabet", () => {
  expect(caesarCipher("helloHELLO", -26 * 4 + 1)).toBe("ifmmpIFMMP");
});

test("Punctuation", () => {
  expect(caesarCipher("!#?hello!", 1)).toBe("!#?ifmmp!");
});

/* eslint-enable no-undef */
