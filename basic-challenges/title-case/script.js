"use strict";

const titleCase = function (str) {
  const strWords = str.toLowerCase().split(" ");
  for (let i = 0; i < strWords.length; i++) {
    strWords[i] = strWords[i][0].toUpperCase() + strWords[i].slice(1);
  }
  const wordsStr = strWords.join(" ");
  return wordsStr;
};

// Test
console.log(titleCase("title case"));

// Explanation -

/*
So every letter to lower case. ' Split ' method so they can be in an array of words.
Then it requires a loop t0 make first letters capital.
Each iteration' s current ' element '' ll get it' s first letter capitalized, then rest of the word being added on it. ( slice method )

*/
