function capitalize(str) {
  const strArr = str.split("");
  strArr[0] = strArr[0].toUpperCase();
  const capitalizedStr = strArr.join("");

  return capitalizedStr;
}

test("'hello' to be 'Hello'", () => { // eslint-disable-line no-undef
  expect(capitalize("hello")).toBe("Hello"); // eslint-disable-line no-undef
});
