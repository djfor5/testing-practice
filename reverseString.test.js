function reverseString(str) {
  const strArr = str.split("");
  const strArrReversed = [];
  while (strArr.length) {
    strArrReversed.push(strArr.pop());
  }
  const strReversed = strArrReversed.join("");

  return strReversed;
}

test("'hello' to be 'olleh'", () => { // eslint-disable-line no-undef
  expect(reverseString("hello")).toBe("olleh"); // eslint-disable-line no-undef
});

test("'124' to be '421'", () => { // eslint-disable-line no-undef
  expect(reverseString("124")).toBe("421"); // eslint-disable-line no-undef
});
