class Calculator {
  add(num1, num2) { // eslint-disable-line class-methods-use-this
    return Number(num1) + Number(num2);
  }

  subtract(num1, num2) { // eslint-disable-line class-methods-use-this
    return num1 - num2;
  }

  multiply(num1, num2) { // eslint-disable-line class-methods-use-this
    return num1 * num2;
  }

  divide(num1, num2) { // eslint-disable-line class-methods-use-this
    return num1 / num2;
  }
}

test("1 + 2 equals 3", () => { // eslint-disable-line no-undef
  expect(new Calculator().add(1, 2)).toBe(3); // eslint-disable-line no-undef
});

test("'3' + 5 equals 8", () => { // eslint-disable-line no-undef
  expect(new Calculator().add("3", 5)).toBe(8); // eslint-disable-line no-undef
});

test("'4' + '6' equals 10", () => { // eslint-disable-line no-undef
  expect(new Calculator().add("4", "6")).toBe(10); // eslint-disable-line no-undef
});

test("2 - 1 equals 1", () => { // eslint-disable-line no-undef
  expect(new Calculator().subtract(2, 1)).toBe(1); // eslint-disable-line no-undef
});

test("2 x 3 equals 6", () => { // eslint-disable-line no-undef
  expect(new Calculator().multiply(2, 3)).toBe(6); // eslint-disable-line no-undef
});

test("3 / 2 equals 1.5", () => { // eslint-disable-line no-undef
  expect(new Calculator().divide(3, 2)).toBe(1.5); // eslint-disable-line no-undef
});

test("'3' / '2' equals 1.5", () => { // eslint-disable-line no-undef
  expect(new Calculator().divide("3", "2")).toBe(1.5); // eslint-disable-line no-undef
});
