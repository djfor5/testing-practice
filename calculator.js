export default class Calculator {
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
