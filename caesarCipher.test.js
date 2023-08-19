import caesarCipher from "./caesarCipher.js";

test("Standard test", () => { // eslint-disable-line no-undef
  expect(caesarCipher("hello", 1)).toBe("ifmmp"); // eslint-disable-line no-undef
});

test("Maintain correct letter case", () => { // eslint-disable-line no-undef
  expect(caesarCipher("YyZz", 2)).toBe("AaBb"); // eslint-disable-line no-undef
});

test("Letter wrapping, shiftFactor greater than length of alphabet", () => { // eslint-disable-line no-undef
  expect(caesarCipher("helloHELLO", 26 * 4 + 1)).toBe("ifmmpIFMMP"); // eslint-disable-line no-undef
});

test("Negative shiftFactor", () => { // eslint-disable-line no-undef
  expect(caesarCipher("A", -1)).toBe("Z"); // eslint-disable-line no-undef
});

test("Letter wrapping, negative shiftFactor greater than length of alphabet", () => { // eslint-disable-line no-undef
  expect(caesarCipher("helloHELLO", -26 * 4 + 1)).toBe("ifmmpIFMMP"); // eslint-disable-line no-undef
});

test("Punctuation", () => { // eslint-disable-line no-undef
  expect(caesarCipher("!#?hello!", 1)).toBe("!#?ifmmp!"); // eslint-disable-line no-undef
});
