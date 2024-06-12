"use strict";

const areAllCharactersUnique = function (str) {
  const strUnique = [...new Set(str)];
  const strLetters = str.split("");
  if (str.length > strUnique.length) {
    return false;
  } else if (str.length === 0) {
    return true;
  } else {
    return true;
  }
};
console.log(areAllCharactersUnique(""));
console.log(areAllCharactersUnique(" denemeDeneme "));

/* My Solution 
1- So there' ll be a set to store unique characters of the string.
2- If there are any repetitive letters then str' s current length would be ' > ' than unique set of letters. ( Which is array via ' spread operator ' )
3- If original string' s length > unique letters' length then there are repetitive letters
*/
