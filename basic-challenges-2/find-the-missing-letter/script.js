"use strict";

const findMissingLetter = function (arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const initialIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[initialIndex + i]) {
      return alphabet[initialIndex + i];
    } else if (arr.length === 0) {
      return "";
    }
  }
};

/* My Solution */
// Solution of ' finding the missing letter '' ll be explained.

console.log(findMissingLetter(["b", "d"])); // ' c '
