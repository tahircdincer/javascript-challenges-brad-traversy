"use strict";

// Also solution can be ' switch - case '

const calculator = function (a, b, operator) {
  if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === " - ") {
    return a - b;
  } else if (operator === "+") {
    return a + b;
  }
};
