"use strict";

// My solution
// First, I solved without a loop then I realized the test word has 2 letter ' e 's.
// When loop ' isn' t ' applied ' e ' letter counted only once. Then I fixed it when I applied a loop.
// Used ' or ' operator?

const countVowels = function (word) {
  let countVowel = 0;
  const wordWord = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      wordWord[i] === "a" ||
      wordWord[i] === "e" ||
      wordWord[i] === "o" ||
      wordWord[i] === "u"
    ) {
      countVowel++;
    }
  }
  return countVowel;
};
console.log(countVowels(" deneme "));
/*

// First try before ' apply ' loop, loop fixed it
  if (word.includes("a")) {
    countVowel++;
  } else if (word.includes("e")) {
    countVowel++;
  } else if (word.includes("o")) {
    countVowel++;
  } else if (word.contains("u")) {
    countVowel++;
  }
  return countVowel;

  */
