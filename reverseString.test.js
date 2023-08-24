import reverseString from "./reverseString.js";

/* eslint-disable no-undef */

test("'hello' to be 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("'124' to be '421'", () => {
  expect(reverseString("124")).toBe("421");
});

/* eslint-enable no-undef */
