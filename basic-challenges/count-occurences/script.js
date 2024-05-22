"use strict";

const currentOccurences = function (str, char) {
  const characters = str.split("");
  let counter = 0;
  for (character of characters) {
    if (character === char) {
      counter++;
    }
  }
  return counter;
};
console.log(currentOccurences(" denemeDeneme ", "d"));

// My solution - explanation for the problem -

/*

So there are 2 inpts. String itself, the character which being checked how many times it was used.
Problem was based on how many characters so basically we made a counter variable which we can increment if the condition applies to the situation.
' split ' method so each character can be checked through for of loop?
Each time current iteration' s ' element ' matches to second parameter ( char ) ' increments ' the counter.
Then returning the counter variable.


*/
