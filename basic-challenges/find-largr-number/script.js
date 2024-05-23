"use strict";

// Normally I would use ' spread operator ', Math.max
// Math.max( ...arr ); practical way but in the video it' s loop section so I' m doing it ' w/ ' loops

let count = 0;

const findMaxNumber = function (number) {
  for (let i = 0; i < number.length; i++) {
    if (count < number[i]) {
      count = number[i];
    }
  }
  return count;
};

// ' Test ' array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findMaxNumber(numbers);
